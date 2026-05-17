import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { faqs } from "./faqs";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { jsonLdString } from "@/lib/jsonLd";

const title = "AI Receptionist Services | Voice, Chat, CRM";
const description =
  "AI receptionist for service businesses: missed call text back, AI chat, voice agents, follow-up, and CRM. Built for trades, auto, and home services.";

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
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}
