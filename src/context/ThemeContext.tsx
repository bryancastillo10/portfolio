"use client";

import { createContext, useState, useEffect } from "react";
import { ContextProviderTypes, ThemeContextType } from "./type";

export const ThemeContext = createContext({} as ThemeContextType);

// const getFromLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     const value = localStorage.getItem("theme");
//     return value || "light";
//   }
//   return false;
// };

export const ThemeContextProvider = ({ children }: ContextProviderTypes) => {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme === "dark");
  }, []);

  const handleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  const contextValues = { theme, handleTheme };
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
