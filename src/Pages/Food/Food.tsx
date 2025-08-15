/** @format */

import React, { useEffect, useLayoutEffect } from "react";
import Layout from "@/Layout/Layout";
import { useAppStore } from "@/Store/app.store";
import { useParams } from "react-router-dom";
import { useFoodStore } from "@/Store/food.store";
import { useFood } from "@/Hooks/useFoodHook";
import Loader from "@/Components/LoaderComponent/Loader";
import ErrorComponent from "@/Components/ErrorComponent/ErrorComponent";
import FoodCard from "@/Components/FoodCard/FoodCard";

const Food = () => {
  const { loading, errorMessage } = useFood();
  const { setSelectFoodCategory, selectFoodCategory, foods } = useFoodStore();
  const { id } = useParams();
  const { setPageType } = useAppStore();

  useLayoutEffect(() => {
    setPageType("Food");
  }, []);

  useEffect(() => {
    if (id) {
      setSelectFoodCategory(id);
    } else {
      setSelectFoodCategory("");
    }
  }, [id]);

  return (
    <Layout>
      {loading ? (
        <div className='p-4 w-full h-[100vh] flex items-center justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          {errorMessage ? (
            <div className='p-4 w-full h-[100vh] flex items-center justify-center'>
              <ErrorComponent description={errorMessage} />
            </div>
          ) : (
            <div className='p-4 w-full h-auto min-h-[100vh] flex flex-wrap gap-1'>
              {(foods || []).length > 0 ? (
                <div className='p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                  ))}
                </div>
              ) : (
                <div className='p-4 w-full h-[100vh] flex items-center justify-center'>
                  <ErrorComponent
                    description={`No food data found for ${selectFoodCategory}`}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </Layout>
  );
};

export default Food;
