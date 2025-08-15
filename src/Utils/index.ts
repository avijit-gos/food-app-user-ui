/** @format */

import { IVariety } from "@/Interfaces";

export const truncateWord = (word: string, limit: number = 5): string => {
  if (word.length > limit) {
    return word.slice(0, limit) + "...";
  }
  return word;
};

export const getFoodPrice = (variety: IVariety[]) => {
  const result = variety.filter((data) => data?.selected === true);
  return `₹${result[0].price}`;
};

export const getSelectTotalFoodPrice = (variety: IVariety[], count: number) => {
  const result = variety.filter((data) => data?.selected === true);
  return `₹${result[0].price * count}`;
};

export const calculateFoodCalory = (value: number) => {
  return `${value} kcals`;
};
