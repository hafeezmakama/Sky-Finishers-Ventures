import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sky Finishers Ventures | Professional Interior & Exterior Finishing in Nigeria",
    template: "%s | Sky Finishers Ventures",
  },
  description:
    "Sky Finishers Ventures is a professional interior and exterior finishing company with 10+ years of experience delivering premium painting, POP, screeding, and decorative finishes across Nigeria.",
  openGraph: {
    title: "Sky Finishers Ventures | Professional Finishing Solutions",
    description:
      "Transforming spaces with excellence — professional interior and exterior finishing across Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
