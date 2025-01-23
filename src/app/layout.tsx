import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ETH Ecuador",
  description: "Comunidad de Ethereum en Ecuador",
  metadataBase: new URL("https://ethecuador.org"),
  openGraph: {
    title: "ETH Ecuador",
    description: "Comunidad de Ethereum en Ecuador",
    url: "https://ethecuador.org",
    siteName: "ETH Ecuador",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ETH Ecuador - Comunidad de Ethereum en Ecuador",
      },
    ],
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETH Ecuador",
    description: "Comunidad de Ethereum en Ecuador",
    images: ["/opengraph-image.png"],
    creator: "@EthTricolor",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://ethecuador.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="h-16"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
