"use client";

import { ContextProviderTypes } from "@/context/type";
import { useThemeContext } from "@/context/useContext";

const ThemeProvider = ({ children }: ContextProviderTypes) => {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme ? "text-accent" : " text-primary"} `}>
      {children}
    </div>
  );
};

export default ThemeProvider;
