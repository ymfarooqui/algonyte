import type { Metadata } from "next";
import WhyUs from "@/components/WhyUs";
import FinalCta from "@/components/FinalCta";

const title = "Why Farooqui Digital";
const description =
  "What makes Farooqui Digital different: a QA tester's eye for usability, clear customer journeys, and fair pricing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/why-us" },
  openGraph: { title, description, url: "/why-us", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function WhyUsPage() {
  return (
    <>
      <WhyUs />
      <FinalCta />
    </>
  );
}
