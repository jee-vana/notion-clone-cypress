import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "../lib/supabase/db";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cypress",
  description: "A notion clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(db)
  return (
    <html lang="en">
      <body className={twMerge('bg-background', inter.className)}>
      <ThemeProvider
        attribute="class"
        defaultTheme='dark'
        enableSystem={true}
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
