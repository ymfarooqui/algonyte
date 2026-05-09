import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const title = "About";
const description =
  "Farooqui Digital is an AI and CRM platform for small businesses. Marketing, ads, AI assistants, and the integrations to tie it all together.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AboutPage() {
  return <AboutContent />;
}
