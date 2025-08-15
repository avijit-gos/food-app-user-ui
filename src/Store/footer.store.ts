/** @format */

import { create } from "zustand";
import { FooterType } from "@/Interfaces";

interface FooterProps {
  socials: FooterType[];
  footers: FooterType[];
  address: FooterType | null;

  setSocials: (data: FooterType[]) => void;
  setFooters: (data: FooterType[]) => void;
  setAddress: (data: FooterType) => void;
}

export const useFooterStore = create<FooterProps>((set) => ({
  socials: [],
  footers: [],
  address: null,

  setSocials: (data) => {
    set({
      socials: data,
    });
  },
  setFooters: (data) => {
    set({
      footers: data,
    });
  },
  setAddress: (data) => {
    set({
      address: data,
    });
  },
}));
