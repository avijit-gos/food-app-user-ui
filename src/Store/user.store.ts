/** @format */

import type { UserType } from "../Interfaces/User.interface";
import { create } from "zustand";
import { persist, type PersistStorage } from "zustand/middleware";

interface AuthUserProps {
  user: UserType | null;
  token: string | null;

  setUser: (data: UserType) => void;
  setToken: (data: string) => void;

  removeUser: () => void;
  removeToken: () => void;
}

const sessionStorage: PersistStorage<AuthUserProps> = {
  getItem: (key) => {
    const value = window.sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null; // Parse the value to match the expected type
  },
  setItem: (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value)); // Stringify the state before storing
  },
  removeItem: (key) => {
    window.sessionStorage.removeItem(key);
  },
};

export const useUserAuthStore = create<AuthUserProps>()(
  persist(
    (set) => ({
      user: null,
      setUser: (data: UserType) => set({ user: data }),
      removeUser: () => set({ user: null }),

      token: null,
      setToken: (token: string) => set({ token }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: "user-auth",
      storage: sessionStorage,
    }
  )
);
