import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { faqs } from "./faqs";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const title = "AI Receptionist Services | Missed Call Text Back, Voice Agents & CRM";
const description =
  "AI receptionist for service businesses: missed call text back, AI chat, voice agents, automated follow-up, and CRM. Built for trades, auto, and home services across Chicago, Detroit, and the Midwest.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumb = breadcrumbJsonLd([{ name: "Services", path: "/services" }]);

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
