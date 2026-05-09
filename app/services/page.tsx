import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

const title = "AI Receptionist Services | Missed Call Text Back, Voice Agents & CRM";
const description =
  "AI receptionist for service businesses: missed call text back, AI chat, voice agents, automated follow-up, and CRM. Built for trades, auto, and home services across Chicago, Detroit, and the Midwest.";

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
