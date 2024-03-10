import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({ 
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Imagine",
  description: "Imagine is a simple image sharing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-poppins antialised", poppins.variable)}>{children}</body>
    </html>
  );
}
