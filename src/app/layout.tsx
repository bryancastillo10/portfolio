import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "../utils/font";

import Navbar from "@/components/navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";

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
    <html
      lang="en"
      className={plusJakartaSans.className}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
