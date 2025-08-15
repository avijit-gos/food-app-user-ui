/** @format */

import { create } from "zustand";
import { FoodType, IVariety } from "@/Interfaces";

interface FoodProps {
  foods: FoodType[];
  page: number;
  totalPages: number;
  selectFoodCategory: string;
  selectFood: null | FoodType;
  selectFoodVarity: null | IVariety;

  setPage: (value: number) => void;
  setTotalPages: (value: number) => void;
  setSelectFoodCategory: (value: string) => void;
  setFoods: (data: FoodType[]) => void;
  setAppendFood: (data: FoodType[]) => void;
  setSelectFood: (value: FoodType) => void;
  setSelectFoodVarity: (value: IVariety) => void;
}

export const useFoodStore = create<FoodProps>((set) => ({
  foods: [],
  page: 1,
  totalPages: 1,
  selectFoodCategory: "",
  selectFood: null,
  selectFoodVarity: null,

  setPage: (value: number) => set({ page: value }),
  setTotalPages: (value: number) => set({ page: value }),
  setSelectFoodCategory: (value: string) => set({ selectFoodCategory: value }),
  setFoods: (data) => set({ foods: data }),
  setAppendFood: (data) =>
    set((state) => ({
      foods: [...state.foods, ...data],
    })),
  setSelectFood: (data) => set({ selectFood: data }),
  setSelectFoodVarity: (value) => set({ selectFoodVarity: value }),
}));
