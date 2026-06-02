import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/landing/LandingPage";
import { industries, getIndustry } from "@/lib/content/industries";
import { landingPath } from "@/lib/landing";

// Only prerender known industry slugs; anything else 404s (no thin auto-pages).
// `auto-dealerships` is served by its own static route, which wins over [slug].
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getIndustry(slug);
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

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getIndustry(slug);
  if (!c) notFound();
  return <LandingPage content={c} />;
}
