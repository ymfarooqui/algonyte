import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const title = "Services";
const description =
  "Our platform, custom builds, AI agents, and ongoing advisory. Pick how hands-on you want us to be.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
