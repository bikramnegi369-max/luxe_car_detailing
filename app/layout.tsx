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
  title: "Luxe Car Detailing | Gurugram - Premium Car Care & Protection",
  description:
    "Luxe Car Detailing Gurugram provides expert detailing, PPF, Ceramic Coating, and interior deep cleaning to protect your investment.",
  openGraph: {
    title: "Luxe Car Detailing | Premium Car Care & Protection in Gurugram",
    description:
      "Restore your vehicle's shine and protect your investment with our professional showroom-quality finish.",
    siteName: "Luxe Car Detailing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Car Detailing | Gurugram",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
