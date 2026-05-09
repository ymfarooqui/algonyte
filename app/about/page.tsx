import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { siteConfig } from "@/lib/site";

const title = "About Farooqui Digital | Founded by Yaseen Farooqui";
const description =
  "We build AI receptionists for service businesses across the Midwest. Based in the Chicago and Detroit metros, serving clients nationwide. Real workflows, real numbers, no fluff.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yaseen Farooqui",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  url: `${siteConfig.url}/about`,
  image: `${siteConfig.url}/yf-headshot.jpg`,
  description:
    "Founder of Farooqui Digital. Builds AI receptionists for service businesses across the Midwest and US.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
