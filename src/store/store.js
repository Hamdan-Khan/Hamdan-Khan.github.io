import { create } from "zustand";

const useStore = create((set) => ({
  theme: localStorage.getItem("theme") === "dark" ? true : false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useStore;
