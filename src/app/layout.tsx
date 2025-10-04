import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins",          // create CSS variable
});

export const metadata = {
  title: "Interactive | Home",
  description: "Awesome website",
icons: {
    icon: "/favicon.png", // point to your PNG
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header/>
        {children}  
        <Footer />
        </body>
    </html>
  );
}
