/** @format */

import { BannerType } from "@/Interfaces";
import { create } from "zustand";

interface BannerInterface {
  banners: BannerType[];
  setBanners: (values: BannerType[]) => void;
}

export const userBannerStore = create<BannerInterface>((set) => ({
  banners: [],
  setBanners: (values: BannerType[]) => set({ banners: values }),
}));
