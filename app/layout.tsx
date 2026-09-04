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

const title = "MeInspect — Property Condition Reports for UAE";
const description =
  "Document your property. Protect your deposit. Property condition reports with photo evidence, GPS verification, timestamps, and digital signatures.";

export const metadata: Metadata = {
  metadataBase: new URL("https://meinspect.com"),
  title,
  description,
  alternates: { canonical: "https://meinspect.com" },
  openGraph: {
    title,
    description,
    url: "https://meinspect.com",
    siteName: "MeInspect",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MeInspect",
  url: "https://meinspect.com",
  logo: "https://meinspect.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/meinspect/",
    "https://www.instagram.com/me.inspect",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} ${caveat.variable} antialiased`}>
      <body className="bg-off-white text-dark font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
