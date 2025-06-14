/** @format */

import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { OPEN_LOGIN_MODAL } from "@/Constants";
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

const LoginModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);

  useEffect(() => {
    const token = PubSub.subscribe(OPEN_LOGIN_MODAL, (msg, data) => {
      if (data.message) setOpen(true);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  useEffect(() => {
    if (!email.trim() || !password.trim()) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [email, password]);

  const handleSubmitRegister = () => {
    setDisable(true);
    setLoading(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='font-bold'>Login</DialogTitle>
          <DialogDescription>
            <section className=''>
              Please fill in your details to login again.
            </section>
          </DialogDescription>
        </DialogHeader>

        <section className=''>
          <Input
            type='email'
            placeholder='Enter your email'
            className='my-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
                <>SignIn</>
              )}
            </Button>
          ) : (
            <Button className='bg-app-primary' onClick={handleSubmitRegister}>
              SignIn
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
