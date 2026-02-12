import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import StoreProvider from "./StoreProvider";
import Toast from "@/components/Toast/Toast";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Online Store",
    template: "%s",
  },
  description: "Your one-stop shop for quality products",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          <Toast />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
