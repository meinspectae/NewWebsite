import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MeInspect — Know exactly what was there.",
  description:
    "Property condition reports with photo evidence, GPS verification, timestamps, and digital signatures. Before you move in. Before you move out.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} ${caveat.variable} antialiased`}>
      <body className="bg-off-white text-dark font-sans">{children}</body>
    </html>
  );
}
