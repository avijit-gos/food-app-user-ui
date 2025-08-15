/** @format */

import { BASE_URL } from "@/Constants";
import { useFoodCatgeoryStore } from "@/Store/food-catgeory.store";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFoodCatgeories = () => {
  const { setCategories } = useFoodCatgeoryStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchFoodCatgeories = async () => {
    try {
      setLoading(true);
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/food-catgeories/active-list`,
        headers: {},
      };
      const response = await axios.request(config);
      if (response.data.status === 200) {
        setErrorMessage("");
        setCategories(response.data.categories);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error?.response?.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodCatgeories();
  }, []);

  return { loading, errorMessage };
};
