import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Interactive | Home",
  description: "Awesome website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header />

        {/* ✅ Global ClipPath Definition (Accessible to all components) */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="cardClipPath" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M0.02,0
                  Q0,0.02 0,0.05
                  V1
                  H1
                  V0.05
                  Q1,0.02 0.98,0
                  Z
                "
              />
            </clipPath>
          </defs>
        </svg>

        {children}
        <Footer />
      </body>
    </html>
  );
}
