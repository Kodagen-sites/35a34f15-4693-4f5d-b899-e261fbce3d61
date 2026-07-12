import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const ogImage = (assetManifest as unknown as { images: Record<string, string> }).images["og-image"];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s · ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  keywords: [
    "24/7 travel agency",
    "flight bookings",
    "visa assistance",
    "holiday packages",
    "airport transfers",
    "travel concierge",
  ],
  authors: [{ name: siteConfig.company.name }],
  openGraph: {
    type: "website",
    siteName: siteConfig.company.name,
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    url: siteConfig.seo.siteUrl,
    images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    images: ogImage ? [ogImage] : [],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: siteConfig.company.name,
  url: siteConfig.seo.siteUrl,
  description: siteConfig.company.description,
  telephone: siteConfig.company.phone,
  email: siteConfig.company.email,
  areaServed: "Worldwide",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: Object.values(siteConfig.socials),
  image: ogImage,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <EditorBridge />
      </body>
    </html>
  );
}
