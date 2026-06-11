import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "California Dreams | Balanced Hard RP FiveM Server",
  description:
    "California Dreams — Los Angeles temalı, dengeli Hard RP FiveM sunucusu. Gerçekçi ekonomi, düzenli etkinlikler ve kaliteli rol deneyimi.",
  keywords: ["FiveM", "RP", "GTA V", "California Dreams", "Roleplay", "Los Angeles"],
  openGraph: {
    title: "California Dreams",
    description: "Bir Rüyadan Fazlası...",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
