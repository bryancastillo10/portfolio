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
        "primary":"#E0F5F0",
        "dark-primary":"#050F0D",
        "secondary":"#07004D",
        "light-secondary":"#3C6997",
        "teal-main":"#12A594"
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
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        floating10: 'floating 10s linear infinite',
        floating9: 'floating 9s linear infinite',
        floating11: 'floating 11s linear infinite',
        floating6: 'floating 6s linear infinite',
        floating12: 'floating 12s linear infinite',
        floating15: 'floating 15s linear infinite',
        floating16: 'floating 16s linear infinite',
        floating5: 'floating 5s linear infinite',
      },
      keyframes: {
        floating: {
          '0%':{transform: 'scale(0) translateY(0) rotate(0)', opacity:'1'},
          '100%':{transform: 'scale(1.25) translateY(-90px) rotate(360deg)',opacity:'0'}
        },
        marquee: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
  darkMode:'class',
  plugins: [],
};
export default config;
