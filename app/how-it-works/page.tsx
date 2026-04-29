import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import FinalCta from "@/components/FinalCta";

const title = "How It Works";
const description =
  "Our simple, transparent process for building and improving small business websites.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: { title, description, url: "/how-it-works", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorks />
      <FinalCta />
    </>
  );
}
