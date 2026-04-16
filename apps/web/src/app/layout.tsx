import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font Awesome configuration to prevent huge icons on load
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",  
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soumay Shopify App",
  description: "Modern E-Commerce Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col font-sans selection:bg-indigo-500/30">
        <Header />
        <main className="flex-1 flex flex-col relative">
          {children}
        </main>
      </body>
    </html>
  );
}
