"use client";
import { useLayoutEffect, useEffect, useState } from "react";

import "./themeToggle.modules.css";

import { BiSun, BiMoon } from "react-icons/bi";
import { useThemeContext } from "@/context/useContext";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, handleTheme } = useThemeContext();
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <label className="switch">
      <input type="checkbox" checked={theme} onChange={handleTheme} />
      <span className="slider">
        {theme ? (
          <BiSun className="icon sun-icon text-white" />
        ) : (
          <BiMoon className="icon moon-icon" />
        )}
      </span>
    </label>
  );
};

export default ThemeToggle;
