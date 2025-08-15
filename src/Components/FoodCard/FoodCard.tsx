/** @format */
import { IMAGE_PATH, OPEN_FOOD_MODAL } from "@/Constants";
import { FoodType } from "@/Interfaces";
import { Heart, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Vegan from "../../assets/vegan.png";
import Calory from "../../assets/calories.png";
import { calculateFoodCalory, getFoodPrice } from "@/Utils";
import { useFoodStore } from "@/Store/food.store";

type FoodCardProps = {
  food: FoodType;
};

const FoodCard = ({ food }: FoodCardProps) => {
  const { setSelectFood } = useFoodStore();

  const handleOpenFoodModal = (food: FoodType) => {
    PubSub.publish(OPEN_FOOD_MODAL, { message: true });
    setSelectFood(food);
  };
  return (
    <div className='border border-gray-50 rounded-sm p-3 h-[360px] bg-white shadow-sm hover:shadow-md transition-shadow relative'>
      <Button className='bg-gray-50/50 hover:bg-gray-50/50 text-black absolute top-0 right-0 cursor-pointer'>
        <Heart />
      </Button>
      <div className='w-full p-1'>
        <img
          src={`${IMAGE_PATH}${food.image}`}
          loading='lazy'
          className='w-full rounded-sm h-[200px]'
        />
      </div>
      <div className='flex items-center'>
        <h3 className='text-lg font-semibold mb-1'>{food.name}</h3>
        {food.isVegan && <img src={Vegan} className='w-4 h-4 ml-1.5' />}
      </div>
      <p className='text-xs text-gray-400'>{food.description}</p>
      <p className='text-xs text-gray-900 my-1 font-semibold flex items-center'>
        <img src={Calory} className='w-3 h-3 mr-1' />
        {calculateFoodCalory(food.nutrition.calories)}
      </p>
      <div className='flex items-center justify-between mt-1.5'>
        <p className='flex align-baseline'>
          <span className='font-semibold text-sm'>
            {getFoodPrice(food.variety)}
          </span>
        </p>
        <Button
          className='border-1 border-app-primary text-app-primary bg-transparent hover:bg-app-primary hover:text-white cursor-pointer'
          onClick={() => handleOpenFoodModal(food)}>
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
