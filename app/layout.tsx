import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OilifyAI — Guyanese AI for the Energy Sector",
    template: "%s | OilifyAI",
  },
  description:
    "OilifyAI delivers AI-powered predictive logistics, training, and compliance solutions built in Guyana for the global energy industry.",
  keywords: ["AI", "oil and gas", "Guyana", "predictive logistics", "energy", "machine learning"],
  openGraph: {
    siteName: "OilifyAI",
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
