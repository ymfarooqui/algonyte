import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";
import { locations, getLocation } from "@/lib/content/locations";
import { landingPath } from "@/lib/landing";

// Only prerender known location slugs; anything else 404s.
// `chicago` and `macomb` are served by their own static routes, which win
// over the dynamic [slug] segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getLocation(slug);
  if (!c) return {};
  const url = landingPath(c);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: c.metaTitle, description: c.metaDescription, url, type: "website" },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getLocation(slug);
  if (!c) notFound();
  return <LandingPage content={c} />;
}
