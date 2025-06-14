/** @format */

import Header from "@/Components/Header/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border border-red-700 w-screen h-[110vh]'>
      <Header />
      <div className='border border-red-700 w-screen h-[97vh]'>{children}</div>
      <div className='border border-red-700 w-screen h-[15vh] bg-blue-400'>
        Footer
      </div>
    </div>
  );
};

export default Layout;
