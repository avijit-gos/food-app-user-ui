/** @format */

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import PubSub from "pubsub-js";
import { OPEN_CART } from "@/Constants";
import ButtonComp from "../ButtonComponent/ButtonComponent";
import { Button } from "../ui/button";

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [openCart]);

  const onClose = () => {
    setOpenCart(false);
  };

  useEffect(() => {
    const token = PubSub.subscribe(OPEN_CART, (msg, data) => {
      if (data.message) setOpenCart(true);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 transition-opacity z-60 ${
          openCart ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}></div>

      {/* Drawer */}
      <div
        className={`z-60 fixed top-0 right-0 h-full w-[400px] bg-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out
          ${openCart ? "translate-x-0" : "translate-x-full"}`}>
        {/* Header */}
        <div className='flex items-center justify-between p-4 bg-app-primary w-full h-16'>
          <p className='font-sans font-medium text-accent'>Cart</p>
          <Button
            onClick={onClose}
            className='bg-transparent hover:bg-transparent text-white cursor-pointer'
            aria-label='Close Drawer'>
            <X size={30} />
          </Button>
        </div>

        {/* Content */}
        <div className='p-4 overflow-y-auto'>
          <div className='border-1 border-red-700 w-full h-[83vh]'>
            
          </div>
          <div className='border-1 w-full h-[38px] mt-1.5 flex items-center justify-center'>
            <ButtonComp
              text='Payment'
              className='w-full h-[38px] bg-app-primary'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
