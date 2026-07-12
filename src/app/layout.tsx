import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import StandardProvider from "@/providers/StandardProvider";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishal",
  description: "Modern Education Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <StandardProvider>
          {children}
        </StandardProvider>
      </body>
    </html>
  );
}