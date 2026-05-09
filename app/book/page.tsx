import type { Metadata } from "next";
import BookContent from "./BookContent";

const title = "Book a Free AI Receptionist Walkthrough in 30 Minutes";
const description =
  "Pick a time for a 30-minute walkthrough. We'll show you how AI can answer, qualify, and book your leads 24/7.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book" },
  openGraph: { title, description, url: "/book", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BookPage() {
  return <BookContent />;
}
