import type { Metadata } from "next";
import BookContent from "./BookContent";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { jsonLdString } from "@/lib/jsonLd";

const title = "Book a Free AI Receptionist Walkthrough in 30 Minutes";
const description =
  "Pick a time for a free 30-minute walkthrough. We'll show you how an AI receptionist can answer, qualify, and book your leads 24/7 across phone, SMS, and chat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: "/book", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const breadcrumb = breadcrumbJsonLd([{ name: "Book", path: "/book" }]);

export default function BookPage() {
  return (
    <>
      <BookContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumb) }}
      />
    </>
  );
}
