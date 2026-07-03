import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./style.scss";

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
    <html lang="en" className={`${gilroy.variable} h-full antialiased`}>
      <body className="" suppressHydrationWarning={true}>
        <WebProvider>
        <NavBar />
        {children}
        <Footer />
        </WebProvider>
      </body>
    </html>
  );
}
