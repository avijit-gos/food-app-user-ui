/** @format */

import React from "react";
import SocialFooter from "./SocialFooter";
import LinkFooter from "./LinkFooter";
import AddressFooter from "./AddressFooter";
import { useFooter } from "@/Hooks/useFooter";

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading } = useFooter();
  return (
    <div className='p-4'>
      <SocialFooter />
      <LinkFooter />
      <AddressFooter />
    </div>
  );
};

export default Footer;
