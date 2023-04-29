import { create } from "zustand";

const useStore = create((set) => ({
  theme:
    localStorage.getItem("theme") === "dark" ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useStore;
