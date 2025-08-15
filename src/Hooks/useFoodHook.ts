/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { BASE_URL } from "@/Constants";
import { useFoodStore } from "@/Store/food.store";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFood = () => {
  const { page, selectFoodCategory, setFoods, setTotalPages } = useFoodStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // fetch food by category
  const fetchFoodsByCategory = async () => {
    try {
      setLoading(true);
      if (selectFoodCategory) {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `${BASE_URL}/foods/list-category/${selectFoodCategory}?page=${page}&limit=10`,
          headers: {},
        };
        const response = await axios.request(config);
        setFoods(response.data.foods);
        setTotalPages(response.data.totalPages);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error?.response?.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectFoodCategory && page) {
      fetchFoodsByCategory();
    }
  }, [selectFoodCategory, page]);

  return { loading, errorMessage };
};
