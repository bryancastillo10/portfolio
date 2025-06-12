import type { Metadata } from 'next';
import { Quicksand, Quantico } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

const quantico = Quantico({
  variable: '--font-quantico',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Bryan's Portfolio",
  description: "Bryan's Developer Portfolio",
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${quantico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
