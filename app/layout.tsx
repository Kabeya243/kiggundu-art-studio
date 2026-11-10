import type { Metadata } from "next";
import { Public_Sans, Spectral } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiggunduartstudio.vercel.app"),
  title: {
    default: "Kiggundu Art Studio — Empowering Creativity",
    template: "%s · Kiggundu Art Studio",
  },
  description: SITE.description,
  keywords: [
    "Kiggundu Art Studio",
    "Kampala art",
    "Uganda artists",
    "Metamorphosis",
    "emerging artists",
    "art studio Wakiso",
    "Ndejje Kanyanya",
  ],
  authors: [{ name: "Kiggundu Art Studio" }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Kiggundu Art Studio — Empowering Creativity",
    description: SITE.description,
    images: [
      {
        url: "/images/hero-open-studio.jpg",
        width: 1024,
        height: 682,
        alt: "Artists in discussion inside Kiggundu Art Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiggundu Art Studio — Empowering Creativity",
    description: SITE.description,
    images: ["/images/hero-open-studio.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
