/** @format */

import { create } from "zustand";

interface AppStoreInterface {
  pageType: string;

  setPageType: (value: string) => void;
}

export const useAppStore = create<AppStoreInterface>((set) => ({
  pageType: "",

  setPageType: (value: string) => set({ pageType: value }),
}));
