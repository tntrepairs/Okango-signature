import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationRuntime from "@/components/AnimationRuntime";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Okavango Signature | Delta Flow Luxury Timepieces",
  description:
    "Botswana-born luxury watch brand inspired by the Okavango Delta. Explore the Delta Flow Edition.",
  keywords:
    "Okavango Signature, Delta Flow, Botswana watch brand, luxury timepieces, African luxury",
  authors: [{ name: "Okavango Signature" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <div className="app">
          <AnimationRuntime />
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
