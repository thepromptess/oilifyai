import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Oilify AI — Local Content Compliance for Guyana's Petroleum Sector",
    template: "%s | Oilify AI",
  },
  description:
    "Powering Local Content compliance across Guyana's petroleum sector.",
  keywords: ["Local Content", "Guyana", "petroleum", "compliance", "AI", "oil and gas", "Stabroek Block"],
  openGraph: {
    siteName: "Oilify AI",
    locale: "en_GY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
