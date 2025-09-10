import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EarthWidget from "./components/EarthWidget";
import DotGrid from "../components/DotGrid";
import Dock from "../components/Dock";
import { dockItems } from "./components/DockItems";
import Icon from "./components/Icon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grgo Penava | Portfolio",
  description: "Portfolio website showcasing my work, education, and projects",
  keywords: [
    "portfolio",
    "developer",
    "web development",
    "react",
    "next.js",
    "grgo penava",
    "threejs",
    "gsap",
    "typescript",
  ],
  authors: [{ name: "Grgo Penava" }],
  creator: "Grgo Penava",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grgopenava.com",
    title: "Grgo Penava | Portfolio",
    description:
      "Portfolio website showcasing my work, education, and projects",
    siteName: "Grgo Penava Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grgo Penava | Portfolio",
    description:
      "Portfolio website showcasing my work, education, and projects",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon-16.svg",
      sizes: "16x16",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      url: "/favicon-gp.svg",
      sizes: "32x32",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/gp-logo.svg",
      sizes: "180x180",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/favicon-16.svg"
          type="image/svg+xml"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-gp.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
        <link rel="shortcut icon" href="/favicon-16.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#060010" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060010] text-white`}
        suppressHydrationWarning
      >
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
        <EarthWidget />
        {children}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <Dock
            items={dockItems.map((item) => ({
              ...item,
              icon: <Icon name={item.iconName} className="w-6 h-6" />,
            }))}
            className="backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl"
            magnification={80}
            distance={150}
            baseItemSize={50}
            panelHeight={68}
          />
        </div>
      </body>
    </html>
  );
}
