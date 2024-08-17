import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/(components)/Navbar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","600","800"]
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
    <html lang="en">
       <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar/>

          {children}

      </body>
    </html>
  );
}
