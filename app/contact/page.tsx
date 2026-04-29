import type { Metadata } from "next";
import Contact from "@/components/Contact";

const title = "Contact";
const description =
  "Get in touch with Farooqui Digital for a free website review or to start a project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactPage() {
  return <Contact />;
}
