import type { Metadata } from "next";
import Services from "@/components/Services";
import AddOns from "@/components/AddOns";
import ProcessStrip from "@/components/ProcessStrip";
import FinalCta from "@/components/FinalCta";

const title = "Services & Pricing";
const description =
  "Affordable website builds, audits, refreshes, and ongoing care plans for small businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <AddOns />
      <ProcessStrip />
      <FinalCta />
    </>
  );
}
