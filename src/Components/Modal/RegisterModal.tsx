/** @format */

import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import { GOOGLE_CLIENT_ID, OPEN_REGISTER_MODAL } from "@/Constants";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComp from "../ButtonComponent/ButtonComponent";

const RegisterModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
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
    if (!name.trim() || !email.trim() || !password.trim()) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [name, email, password]);

  const handleSubmitRegister = () => {
    setDisable(true);
    setLoading(true);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>
            <section className='font-normal text-2xl antialiased'>
              Get Started Now
            </section>
            <section className='font-normal text-[12px] antialiased'>
              Enter your creadentials to access your accound
            </section>
          </DialogTitle>
          <DialogDescription className='my-3'>
            {/* SignUp via Google */}
            <GoogleOAuthProvider clientId={`${GOOGLE_CLIENT_ID}`}>
              <GoogleLogin
                text='signup_with'
                theme='outline'
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </GoogleOAuthProvider>

            {/* Divider */}
            <section className='relative my-10'>
              <div className='border-t border-gray-300 w-full'></div>
              <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1 text-xs text-gray-700'>
                or
              </span>
            </section>

            {/* Normal form */}
            <section>
              <InputComponent
                type='text'
                placeholder='Enter your name'
                value={name}
                className='h-10 text-sm font-sans font-medium text-gray-900 my-2'
                handleChange={(e) => setName(e.target.value)}
              />
              <InputComponent
                type='email'
                placeholder='Enter your email'
                value={email}
                className='h-10 text-sm font-sans font-medium text-gray-900 my-2'
                handleChange={(e) => setEmail(e.target.value)}
              />
              <InputComponent
                type='password'
                placeholder='Enter your password'
                value={password}
                className='h-10 text-sm font-sans font-medium text-gray-900 my-2'
                handleChange={(e) => setPassword(e.target.value)}
              />
            </section>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <ButtonComp
            loading={loading}
            disable={disable}
            text='SignUp'
            className={
              disable
                ? `w-full h-full bg-disable-button hover:bg-disable-button cursor-no-drop`
                : `w-full h-full bg-app-primary hover:bg-app-primary cursor-pointer`
            }
            onClick={handleSubmitRegister}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
