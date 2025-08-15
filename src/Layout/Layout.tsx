/** @format */

import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import SubHeader from "@/Components/Header/SubHeader";
import { useAppStore } from "@/Store/app.store";
import React from "react";

function getHeaderLayout(pageType: string) {
  switch (pageType) {
    case "Home":
      return <Header />;
    default:
      return <SubHeader />;
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pageType } = useAppStore();

  return (
    <div className='w-screen h-auto'>
      {getHeaderLayout(pageType)}
      <div className='w-screen h-auto'>{children}</div>
      <div className='w-screen h-[26vh] bg-app-primary'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
