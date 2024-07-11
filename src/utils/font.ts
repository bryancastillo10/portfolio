import { Plus_Jakarta_Sans, Advent_Pro } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta-sans",
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-advent-pro",
});

export { plusJakartaSans, adventPro };
