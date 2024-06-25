"use client";
import { useContext, useLayoutEffect, useEffect, useState } from "react";

import "./themeToggle.modules.css";

import { BiSun, BiMoon } from "react-icons/bi";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <label className="switch">
      <input
        type="checkbox"
        // checked
        // onChange
      />
      <span className="slider">
        <BiSun className="icon sun-icon" />
        <BiMoon className="icon moon-icon" />
      </span>
    </label>
  );
};

export default ThemeToggle;
