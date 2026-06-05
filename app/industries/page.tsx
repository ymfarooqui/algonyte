import type { Metadata } from "next";
import Link from "next/link";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/landing/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { siteConfig } from "@/lib/site";
import { industryIndex } from "@/lib/content/industries";

const title = "Industries We Serve | AI Receptionist by Niche";
const description =
  "AI receptionist and lead automation tailored by industry, home services, auto, dental, law firms, and restaurants. Built around how each wins work.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: { title, description, url: "/industries", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Industries served by AlgoNyte",
  itemListElement: industryIndex.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.title,
    url: `${siteConfig.url}/industries/${it.slug}`,
  })),
};

const breadcrumb = breadcrumbJsonLd([{ name: "Industries", path: "/industries" }]);

export default function IndustriesHub() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Industries</p>
            <h1 className="h-display">
              Built around how <span className="text-brand-deep">your industry</span> wins work.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              The system is the same underneath, answer every lead in seconds,
              qualify it, and book it. What changes is the playbook: the
              questions a plumber asks aren&rsquo;t the questions a dental front
              desk or a personal-injury firm asks. Here&rsquo;s how it runs in
              each.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryIndex.map((it) => (
              <Link
                key={it.slug}
                href={`/industries/${it.slug}`}
                className="lift-card group flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h2 className="text-xl font-semibold text-brand-deep">{it.title}</h2>
                <p className="mt-3 flex-1 text-brand-muted leading-relaxed">{it.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep">
                  See how it works
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-brand-muted leading-relaxed">
            Don&rsquo;t see your industry? It still works, the install adapts to
            any service business that lives or dies on answering leads fast.{" "}
            <Link href="/book" className="text-brand-deep font-medium hover:underline">
              Book a 30-minute walkthrough
            </Link>{" "}
            and we&rsquo;ll map it to how you run.
          </p>
        </div>
      </section>

      <FinalCTA title="Want to see it run in your industry?" />

      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
