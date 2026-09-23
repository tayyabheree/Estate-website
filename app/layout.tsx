import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans"
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-baskerville"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.woodridgere.com.au"),
  title: {
    default: "WoodRidge Real Estate | Melbourne West",
    template: "%s | WoodRidge Real Estate"
  },
  description:
    "Sales, leasing, property management, new homes and investment property services across Melbourne's west.",
  openGraph: {
    title: "WoodRidge Real Estate",
    description:
      "Sales, leasing and property management across Melbourne's west.",
    type: "website",
    locale: "en_AU",
    siteName: "WoodRidge Real Estate",
    images: [
      {
        url: "/images/hero.jpg",
        width: 2400,
        height: 1350,
        alt: "Modern Australian home in Melbourne's west"
      }
    ]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "WoodRidge Real Estate Pty Ltd",
  url: "https://www.woodridgere.com.au",
  telephone: site.contact.phones[0],
  email: site.contact.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "11 Hyams Way",
    addressLocality: "Truganina",
    addressRegion: "VIC",
    postalCode: "3029",
    addressCountry: "AU"
  },
  areaServed: "Melbourne western suburbs"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className={sourceSans.variable + " " + libreBaskerville.variable}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
