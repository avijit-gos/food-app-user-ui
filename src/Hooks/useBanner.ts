/** @format */

import { BASE_URL } from "@/Constants";
import { userBannerStore } from "@/Store/banner.store";
import { useState, useEffect } from "react";
import axios from "axios";

export const useBanner = () => {
  const { setBanners } = userBannerStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchBanner = async () => {
    try {
      setLoading(true);
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/banners/lists-active`,
        headers: {},
      };
      const response = await axios.request(config);
      if (response.data.status === 200) {
        setErrorMessage("");
        setBanners(response.data.banners);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error?.response?.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return { loading, errorMessage };
};
