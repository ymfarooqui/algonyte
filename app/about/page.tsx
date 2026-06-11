import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { jsonLdString } from "@/lib/jsonLd";

const breadcrumb = breadcrumbJsonLd([{ name: "About", path: "/about" }]);

const title = "About AlgoNyte | AI Automation Studio";
const description =
  "We build AI receptionists for service businesses across the Midwest. Based in the Chicago and Detroit metros. Real workflows, real numbers, no fluff.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}
