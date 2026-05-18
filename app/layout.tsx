import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ProgressBar from "../components/ProgressBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Master OS Numericals",
  description: "Premium focused study platform for Operating System numericals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg-1)]"> 
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
