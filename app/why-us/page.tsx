import type { Metadata } from "next";
import WhyUs from "@/components/WhyUs";

const title = "Why Farooqui Digital";
const description =
  "What makes Farooqui Digital different: clear customer journeys, fair pricing, and no agency bloat.";

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
    </>
  );
}
