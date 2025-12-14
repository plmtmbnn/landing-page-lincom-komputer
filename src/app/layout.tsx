import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Lincom Komputer Balige | Jual & Service Komputer di Toba",
description:
"Lincom Komputer Balige melayani penjualan dan service PC, laptop, printer, dan aksesoris komputer di Balige, Kabupaten Toba. Cepat, terpercaya, dan bergaransi.",
keywords: [
"toko komputer balige",
"service laptop balige",
"service printer balige",
"jual komputer balige",
"lincom komputer",
],
openGraph: {
title: "Lincom Komputer Balige – Solusi Komputer Terpercaya",
description:
"Jual & service PC, laptop, dan printer di Balige, Kabupaten Toba. Hubungi Lincom Komputer sekarang.",
siteName: "Lincom Komputer Balige",
locale: "id_ID",
type: "website",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-slate-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
