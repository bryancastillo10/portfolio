import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero/Hero";
import HeroContainer from "@/components/container/HeroContainer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const openSans = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={`${openSans.className} ${plusJakartaSans.className}`}>
        <HeroContainer>
          <Navbar />
          <Hero />
        </HeroContainer>
        {children}
      </body>
    </html>
  );
}
