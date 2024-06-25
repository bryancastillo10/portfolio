import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--text-color))",
        secondary: "rgba(var(--bg-color))",
        accent: "rgba(var(--accent))",
        "neutral-light": "rgba(var(--neutral-light))",
        "neutral-black": "rgba(var(--neutral-black))",
      },
      screen: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
