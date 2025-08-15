/** @format */

import { useFoodCatgeories } from "@/Hooks/useFoodCategory";
import { useFoodCatgeoryStore } from "@/Store/food-catgeory.store";
import React from "react";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import FoodCategoryCard from "../FoodCategoryCard/FoodCategoryCard";

const FoodCatgeoryComponent = () => {
  const { errorMessage } = useFoodCatgeories();
  const { categories } = useFoodCatgeoryStore();

  return (
    <>
      {errorMessage ? (
        <div className='w-3/5 p-3 mx-auto flex items-center justify-center'>
          <ErrorComponent description={errorMessage} />
        </div>
      ) : (
        <div className='w-4/5 p-3 mx-auto flex flex-wrap items-center justify-center'>
          {(categories || []).map((data) => (
            <FoodCategoryCard key={data._id} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default FoodCatgeoryComponent;
