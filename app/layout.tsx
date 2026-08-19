import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/data";

const BASE = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "INRIDE AI — تنقّل بذكاء. تحرّك بحرية.",
    template: "%s — INRIDE AI",
  },
  description:
    "INRIDE AI منصة تنقل ذكية في الجزائر: أسعار عادلة بالتفاوض المباشر، تنقّل حضري، سفر بين الولايات، توصيل إكسبرس، سلامة عبر GPS حيّ وتوثيق هوية. حمّل التطبيق الآن.",
  keywords: [
    "INRIDE AI",
    "ride-hailing Algeria",
    "fair pricing Algeria",
    "taxi Algeria",
    "inter-wilaya travel",
    "parcel delivery Algeria",
    "AI pricing",
    "GPS safety",
    "mobility platform",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE,
    languages: {
      ar: `${BASE}?lang=ar`,
      fr: `${BASE}?lang=fr`,
      en: `${BASE}?lang=en`,
      "x-default": BASE,
    },
  },
  openGraph: {
    type: "website",
    siteName: "INRIDE AI",
    url: BASE,
    title: "INRIDE AI — تنقّل بذكاء. تحرّك بحرية.",
    description:
      "رحلات عادلة بالسعر الذي تتفقون عليه: تنقّل حضري، سفر بين الولايات، توصيل إكسبرس، وسلامة عبر GPS حيّ في الجزائر.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "INRIDE AI" }],
    locale: "ar_DZ",
    alternateLocale: ["fr_FR", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "INRIDE AI — تنقّل بذكاء. تحرّك بحرية.",
    description: "رحلات عادلة بالسعر الذي تتفقون عليه في الجزائر.",
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4346EE",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INRIDE AI",
  url: BASE,
  logo: SITE.ogImage,
  description:
    "Smart mobility platform for Algeria — fair negotiated pricing, city rides, inter-wilaya travel, express delivery and real-time GPS safety.",
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
  },
  inLanguage: ["ar", "fr", "en"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "INRIDE AI",
  url: BASE,
  inLanguage: ["ar", "fr", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Readex+Pro:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
