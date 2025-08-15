/** @format */

import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useUserAuthStore } from "@/Store/user.store";
import PubSub from "pubsub-js";
import { OPEN_REGISTER_MODAL, OPEN_LOGIN_MODAL, OPEN_CART } from "@/Constants";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const SubHeader = () => {
  const { user, token } = useUserAuthStore();
  const navigate = useNavigate();

  const handleOpenRegisterModal = () => {
    PubSub.publish(OPEN_REGISTER_MODAL, { message: true });
  };

  const handleOpenLoginModal = () => {
    PubSub.publish(OPEN_LOGIN_MODAL, { message: true });
  };

  const handleOpenCart = () => {
    PubSub.publish(OPEN_CART, { message: true });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='w-full h-[7vh] flex p-4 items-center justify-between border-b-1 border-gray-100 bg-white sticky top-0 z-50 shadow'>
      <section className='flex items-center justify-center'>
        <Button
          className='bg-gray-100 hover:bg-gray-100 transition-all cursor-pointer text-neutral-900'
          onClick={goBack}>
          <ArrowLeft />
        </Button>
      </section>

      <div className='flex items-center '>
        {/* Menu Section */}
        {!user && !token ? (
          <Button className='p-2 w-8 h-8 bg-white text-gray-900 relative hover:bg-gray-100 cursor-pointer rounded-full'>
            <FaUser />
          </Button>
        ) : (
          <section className='flex items-center'>
            <Button
              className='bg-app-primary text-xs font-light cursor-pointer mx-1 w-[90px] h-[27px] hover:bg-app-primary'
              onClick={handleOpenRegisterModal}>
              SignUp
            </Button>
            <Button
              className='border-app-primary cursor-pointer border-1 bg-ghost text-app-primary text-xs font-light mx-1 w-[90px] h-[27px] hover:bg-ghost'
              onClick={handleOpenLoginModal}>
              SignIn
            </Button>
          </section>
        )}

        <Button
          className='m-4 p-2 w-10 h-8 bg-white border-1 border-gray-300 text-gray-900 relative hover:bg-gray-100 cursor-pointer'
          onClick={handleOpenCart}>
          <span className='text-white bg-red-700 rounded-full text-[8px] font-sans py-[1px] px-[5px] absolute -top-1 -right-1'>
            1
          </span>
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default SubHeader;
