import type { Metadata } from "next";
import ContactContent from "./ContactContent";

const title = "Contact";
const description =
  "Tell us about your business. We'll come back with a straight answer on whether we can help.";

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
