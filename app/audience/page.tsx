import type { Metadata } from "next";
import Audience from "@/components/Audience";
import FinalCta from "@/components/FinalCta";

const title = "Who We Help";
const description =
  "The small businesses and teams Farooqui Digital is built to support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/audience" },
  openGraph: { title, description, url: "/audience", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AudiencePage() {
  return (
    <>
      <Audience />
      <FinalCta />
    </>
  );
}
