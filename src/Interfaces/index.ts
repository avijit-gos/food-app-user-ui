/** @format */

export type BannerType = {
  _id: string;
  image: string;
  url: string;
};

export type TypeFoodCategory = {
  _id: string;
  name: string;
  image: string;
  url: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type FooterType = {
  _id: string;
  name: string;
  image: string;
  isOutside: boolean;
  isSocial: boolean;
  isClickable: boolean;
  address: string;
  status: string;
  link: string;
};

export interface INutrition {
  calories: number; // kcal
  fat: number; // g
  carbohydrates: number; // g
  protein: number; // g
}

export interface IVariety {
  name: string;
  price: number;
  selected?: boolean;
}

export type FoodCategory =
  | "biriyani"
  | "buns"
  | "burger"
  | "cake"
  | "cocktail"
  | "fried-chicken"
  | "croissant"
  | "fries"
  | "mushroom"
  | "meat"
  | "momo"
  | "pizza"
  | "ramen"
  | "rice"
  | "sushi"
  | "vegan"
  | "drinks";

export type FoodStatus =
  | "available"
  | "unavailable"
  | "out-of-stock"
  | "delete"
  | "pending";

export type FoodType = {
  _id: string;
  name: string;
  description: string;
  image: string;
  category: FoodCategory;
  status?: FoodStatus;
  nutrition: INutrition;
  isVegan: boolean;
  variety: IVariety[];
  createdAt?: Date;
  updatedAt?: Date;
};
