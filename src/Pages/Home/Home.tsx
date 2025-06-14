/** @format */

import React, { useLayoutEffect } from "react";
import Layout from "@/Layout/Layout";
import { useAppStore } from "@/Store/app.store";
import CarouselComponent from "@/Components/Carousel/CarouselComponent";

const Home = () => {
  const { setPageType } = useAppStore();

  useLayoutEffect(() => {
    setPageType("Home");
  }, []);
  return (
    <Layout>
      <CarouselComponent />
    </Layout>
  );
};

export default Home;
