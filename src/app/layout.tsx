import type { Metadata } from "next";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";
import "./globals.css";
const public_sans = Public_Sans({ subsets: ["latin"], fallback: ["Arial"] });

export const metadata: Metadata = {
  title: "JoBins",
  description: "Dashboard of JoBins.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_sans.className}>{children}</body>
    </html>
  );
}
