import { create } from "zustand";

interface StoreState {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  theme:
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useStore;
