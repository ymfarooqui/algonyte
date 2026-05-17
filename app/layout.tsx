import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/components/BookingModal";
import MotionRoot from "@/components/MotionRoot";
import ChatWidget from "@/components/ChatWidget";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/lib/site";
import "./globals.css";

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
  icons: { icon: "/logo-mark.png" },
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
  logo: `${siteConfig.url}/logo-mark.png`,
  slogan: siteConfig.tagline,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}/logo-mark.png`,
  image: `${siteConfig.url}/logo-mark.png`,
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-449SQXFKS9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-449SQXFKS9');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wra8lxf0p0");
          `}
        </Script>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
