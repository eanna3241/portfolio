import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PawCursor } from "@/components/PawCursor";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Анна Егорова — Product Designer",
  description: "Portfolio of Anna Egorova",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={sfPro.variable}>
        <PawCursor />
        {children}
      </body>
    </html>
  );
}