import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnimationRuntime from "@/components/AnimationRuntime";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
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
      <body className={`${inter.variable} ${playfair.variable}`}>
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
