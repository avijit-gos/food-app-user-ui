/** @format */

import { useUserAuthStore } from "@/Store/user.store";
import React from "react";
import Logo from "../../assets/logo.png";
import { Button } from "../ui/button";
import PubSub from "pubsub-js";
import { OPEN_REGISTER_MODAL, OPEN_LOGIN_MODAL } from "@/Constants";

const Header = () => {
  const { user, token } = useUserAuthStore();

  const handleOpenRegisterModal = () => {
    PubSub.publish(OPEN_REGISTER_MODAL, { message: true });
  };

  const handleOpenLoginModal = () => {
    PubSub.publish(OPEN_LOGIN_MODAL, { message: true });
  };

  return (
    <div className='p-3 w-full h-[7vh] flex items-center justify-between bg-white sticky top-0 z-50 shadow'>
      {/* Logo Section */}
      <section className='flex items-end justify-end'>
        <img src={Logo} alt='Logo' loading='lazy' className='w-10 h-10 mx-3' />
        <span className='text-xs font-sans font-semibold'>
          Food <span className='text-app-primary'>Panda</span>
        </span>
      </section>

      {/* Menu Section */}
      {user && token ? (
        <>User</>
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
    </div>
  );
};

export default Header;
