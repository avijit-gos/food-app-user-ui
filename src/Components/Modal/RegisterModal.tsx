/** @format */

import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { OPEN_REGISTER_MODAL } from "@/Constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LuLoaderCircle } from "react-icons/lu";

const RegisterModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    const token = PubSub.subscribe(OPEN_REGISTER_MODAL, (msg, data) => {
      if (data.message) setOpen(true);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    if (!name.trim() || !email.trim() || !password.trim() || !phone.trim()) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [name, email, phone, password]);

  const handleSubmitRegister = () => {
    setDisable(true);
    setLoading(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='font-bold'>Register</DialogTitle>
          <DialogDescription>
            <section className=''>
              Please fill in your details to create an account.
            </section>
          </DialogDescription>
        </DialogHeader>

        <section className=''>
          <Input
            type='text'
            placeholder='Enter your name'
            className='my-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type='email'
            placeholder='Enter your email'
            className='my-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='text'
            placeholder='Enter phone number'
            className='my-2'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Enter password'
            className='my-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

        <DialogFooter>
          {disable ? (
            <Button className='bg-app-primary'>
              {loading ? (
                <LuLoaderCircle className='animate-spin' />
              ) : (
                <>SignUp</>
              )}
            </Button>
          ) : (
            <Button className='bg-app-primary' onClick={handleSubmitRegister}>
              SignUp
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
