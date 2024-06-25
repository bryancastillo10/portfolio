import { ReactNode } from "react";

export interface ContextProviderTypes {
  children: ReactNode;
}

export type ThemeContextType = {
  theme: boolean;
  handleTheme: () => void;
};
