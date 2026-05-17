import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/components/BookingModal";
import MotionRoot from "@/components/MotionRoot";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import ConsentAnalytics from "@/components/Analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import { jsonLdString } from "@/lib/jsonLd";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `AI Receptionist for Service Businesses | ${siteConfig.name}`,
  description:
    "AI receptionist for service businesses in Chicago, Detroit, and across the Midwest. Answer, qualify, and book every lead 24/7. Plans from $549/mo.",
  keywords: [
    "AI lead automation",
    "missed call text back",
    "AI receptionist",
    "AI appointment booking",
    "lead follow up automation",
    "small business CRM",
    "AI for service businesses",
    "Chicago AI receptionist",
    "Detroit AI receptionist",
    "Michigan AI receptionist",
    "Oak Brook AI receptionist",
    "Midwest AI receptionist",
  ],
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `AI Receptionist for Service Businesses | ${siteConfig.name}`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Receptionist for Service Businesses | ${siteConfig.name}`,
    description: siteConfig.description,
    ...(siteConfig.twitter ? { creator: siteConfig.twitter } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/algonyte-labs-logo.png" },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    other: {
      "msvalidate.01": "5011186F99ABF374290EEA288F6863B0",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/algonyte-labs-logo.png`,
  slogan: siteConfig.tagline,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/algonyte-labs-logo.png`,
  image: `${siteConfig.url}/algonyte-labs-logo.png`,
  priceRange: "$549-$1,299/mo",
  areaServed: [
    { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Oak Brook", containedInPlace: { "@type": "State", name: "Illinois" } },
    { "@type": "City", name: "Detroit", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Macomb", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "State", name: "Michigan" },
    { "@type": "State", name: "Illinois" },
    { "@type": "AdministrativeArea", name: "Midwest United States" },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "AI Lead Automation",
    "Missed Call Text Back",
    "AI Receptionist",
    "AI Voice Agent",
    "CRM Implementation",
    "Automated Lead Follow-Up",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://link.msgsndr.com" />
        {/* GA4 Consent Mode v2 — default-denied state must execute before any
            tracking call. Inline in head so it runs synchronously at parse
            time, ahead of the deferred Script tags below. Static literal,
            no user input. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
        <ConsentAnalytics />
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;filter:none!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MotionRoot>
          <BookingProvider>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
          </BookingProvider>
        </MotionRoot>
        <Analytics />
        <ChatWidget />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
