import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import StoreProvider from "./StoreProvider";
import Toast from "@/components/Toast/Toast";
import Footer from "@/components/footer/footer";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
        <body className={rubik.className}>
          <Navbar />
          <Toast />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
