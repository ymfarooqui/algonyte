import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

const title = "Contact: AI Receptionist Consult | Chicago, Detroit, Midwest";
const description =
  "Talk to Farooqui Digital about an AI receptionist for your business. We work with service businesses in Chicago, Detroit, Oak Brook, and across the Midwest and US. Straight answers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]);

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
