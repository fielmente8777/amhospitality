import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Popup from "@/components/Popup";

import NavBar from "@/components/navbar/WebsiteNav";
import Footer from "@/components/footer/WebsiteFooter";
import { WebProvider } from "@/context-api/WebContext";

const gilroy = localFont({
  src: [
    {
      path: "/font/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/font/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/font/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/font/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/font/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/font/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Am hospitality",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gilroy.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </head>
      <body className="" suppressHydrationWarning={true}>
        <WebProvider>
          <Popup />
          <NavBar />
          {children}
          <Footer />
        </WebProvider>
      </body>
    </html>
  );
}
