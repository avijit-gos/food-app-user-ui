/** @format */

import { IMAGE_PATH } from "@/Constants";
import { TypeFoodCategory } from "@/Interfaces";
import { useFoodStore } from "@/Store/food.store";
import React from "react";
import { useNavigate } from "react-router-dom";

type FoodCategoryCardProps = {
  data: TypeFoodCategory;
};

const FoodCategoryCard = ({ data }: FoodCategoryCardProps) => {
  const { setPage } = useFoodStore();
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    setPage(1);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className='border-1 border-gray-100 p-5 rounded-md m-2 w-36 h-36 group transition-transform duration-300 ease-in-out delay-100 transform hover:scale-110 hover:bg-gray-100 cursor-pointer'
      onClick={() => handleRedirect(`/food/${data.url}`)}>
      <section className='text-xs font-medium text-gray-700 w-fit mx-auto text-center'>
        <img
          src={`${IMAGE_PATH}${data.image}`}
          alt={data.name}
          className='w-12 h-12 mb-5 transition duration-300 ease-in-out'
        />
      </section>
      <section className='text-xs font-medium text-gray-700 w-full text-center transition-all duration-300 ease-in-out'>
        <span className='block hover:font-bold transition-opacity duration-300 delay-100'>
          {data.name}
        </span>
      </section>
    </div>
  );
};

export default FoodCategoryCard;
