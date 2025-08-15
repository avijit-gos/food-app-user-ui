/** @format */

import { create } from "zustand";
import { TypeFoodCategory } from "@/Interfaces";

interface FoodCategoryProps {
  categories: TypeFoodCategory[];
  setCategories: (values: TypeFoodCategory[]) => void;
}

export const useFoodCatgeoryStore = create<FoodCategoryProps>((set) => ({
  categories: [],
  setCategories: (values: TypeFoodCategory[]) => set({ categories: values }),
}));
