import { createContext, useContext } from "react";
export type DarkModeType = {
  isDarkMode: boolean;
  setIsDarkMode: (c: boolean) => void;
};

export const DarkMode = createContext<DarkModeType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkMode);
