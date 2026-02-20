import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valchy AI | Stop throwing money at AI",
  description:
    "Bulgaria's #1 AI Agency. We specialize in building chat, voice and email agents to automate up-to 80% of your customer support processes.",
};

import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-valchy-text bg-valchy-bg min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
