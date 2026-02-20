import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valchy.ai"),
  title: {
    default: "Valchy AI | Stop throwing money at AI",
    template: "%s | Valchy AI",
  },
  description:
    "Bulgaria's #1 AI Agency. We specialize in building chat, voice and email agents to automate up-to 80% of your customer support processes.",
  keywords: [
    "AI Agency",
    "AI Agents",
    "Customer Support Automation",
    "Chatbots",
    "Voice Agents",
    "Email Automation",
    "Artificial Intelligence Bulgaria",
    "Valchy AI",
  ],
  authors: [{name: "Valeri Sabev"}],
  creator: "Valchy AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://valchy.ai",
    siteName: "Valchy AI",
    title: "Valchy AI | Stop throwing money at AI",
    description:
      "Bulgaria's #1 AI Agency. We specialize in building chat, voice and email agents to automate up-to 80% of your customer support processes.",
    images: [
      {
        url: "/opengraph-image.png", // We will let Next.js or user provide this later. Fallback available.
        width: 1200,
        height: 630,
        alt: "Valchy AI - Bulgaria's #1 AI Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valchy AI | Stop throwing money at AI",
    description:
      "Bulgaria's #1 AI Agency. We specialize in building chat, voice and email agents to automate up-to 80% of your customer support processes.",
    images: ["/twitter-image.png"], // Fallback available.
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
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
