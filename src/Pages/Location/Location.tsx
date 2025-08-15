/** @format */

import { useAppStore } from "@/Store/app.store";
import React, { useLayoutEffect } from "react";
import Layout from "../../Layout/Layout";

const Location = () => {
  const { setPageType } = useAppStore();

  useLayoutEffect(() => {
    setPageType("Location");
  }, []);

  return (
    <Layout>
      <div className='border-1 border-red-700 w-full h-[92vh] p-4'></div>
    </Layout>
  );
};

export default Location;
