/** @format */

import { BASE_URL } from "@/Constants";
import { useFooterStore } from "@/Store/footer.store";
import { useState, useEffect } from "react";
import axios from "axios";

export const useFooter = () => {
  const { setSocials, setFooters, setAddress } = useFooterStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const fetchFooter = async () => {
    try {
      setLoading(true);
      const config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${BASE_URL}/footers/`,
        headers: {},
      };
      const response = await axios.request(config);
      if (response.data.status === 200) {
        setErrorMessage("");
        setAddress(response.data.address);
        setFooters(response.data.footers);
        setSocials(response.data.socials);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrorMessage(error?.response?.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return { loading, errorMessage };
};
