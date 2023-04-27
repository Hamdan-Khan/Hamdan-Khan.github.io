import { create } from "zustand";

const useStore = create((set) => ({
  theme: false,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useStore;
