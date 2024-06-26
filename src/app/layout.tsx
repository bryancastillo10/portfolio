import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero/Hero";
import HeroContainer from "@/components/container/HeroContainer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight:"500",
  variable: "--font-plus-jakarta-sans"
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${plusJakartaSans.className} `}
      suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <HeroContainer>
              <Navbar />
              <Hero />
            </HeroContainer>
            {children}
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
