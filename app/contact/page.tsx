import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const title = "Contact — AI Lead Automation Consult | Chicago, Detroit, Midwest";
const description =
  "Talk to Farooqui Digital about AI lead automation. We work with service businesses in Chicago, Detroit, Oak Brook, and across the Midwest and US. Straight answers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactPage() {
  return <ContactContent />;
}
