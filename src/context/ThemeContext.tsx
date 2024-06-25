import { createContext, useState } from "react";
import { ContextProviderTypes, ThemeContextType } from "./type";

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeContextProvider = ({ children }: ContextProviderTypes) => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleTheme = () => {
    setTheme(!theme);
  };

  const contextValues = { theme, handleTheme };
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};
