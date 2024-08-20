import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "white":"#F4F3F2",
        "primary":"#c7ede4",
        "dark-primary":"#050F0D",
        "secondary":"#07004d",
        "light-secondary":"#3C6997"
      },
      fontWeight: {
        base: '400',
        semibold: '600',
        bold:'800'
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        base: '16px',
        md: '22px',
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  darkMode:'class',
  plugins: [],
};
export default config;
