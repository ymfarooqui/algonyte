import type { Metadata } from "next";
import Link from "next/link";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import FinalCTA from "@/components/sections/FinalCTA";
import JsonLd from "@/components/landing/JsonLd";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { siteConfig } from "@/lib/site";
import { locationIndex, type LocationGroup } from "@/lib/content/locations";

const title = "Areas We Serve | AI Receptionist Across Chicagoland";
const description =
  "AI receptionist and lead automation for service businesses across Chicago, the suburbs and collar counties, and the Detroit metro. Remote-first — live in days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/locations" },
  openGraph: { title, description, url: "/locations", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Areas served by AlgoNyte",
  itemListElement: locationIndex.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.title,
    url: `${siteConfig.url}/locations/${it.slug}`,
  })),
};

const breadcrumb = breadcrumbJsonLd([{ name: "Locations", path: "/locations" }]);

const GROUP_ORDER: LocationGroup[] = [
  "Chicago",
  "Chicago neighborhoods",
  "Suburbs & collar counties",
  "Detroit metro",
];

export default function LocationsHub() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
        <PageHeroBackdrop />
        <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Areas we serve</p>
            <h1 className="h-display">
              Service businesses across <span className="text-brand-deep">Chicagoland</span> and beyond.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              The install is remote-first, so it runs the same whether
              you&rsquo;re on the North Side, out in the collar counties, or up
              in the Detroit metro where we started. Pick your market for the
              local picture.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page space-y-14">
          {GROUP_ORDER.map((group) => {
            const items = locationIndex.filter((it) => it.group === group);
            if (!items.length) return null;
            return (
              <div key={group}>
                <h2 className="h-section text-2xl sm:text-3xl">{group}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((it) => (
                    <Link
                      key={it.slug}
                      href={`/locations/${it.slug}`}
                      className="lift-card group flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
                    >
                      <h3 className="text-xl font-semibold text-brand-deep">{it.title}</h3>
                      <p className="mt-3 flex-1 text-brand-muted leading-relaxed">{it.blurb}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep">
                        View {it.title}
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="max-w-3xl text-brand-muted leading-relaxed">
            Not on the list? The system is remote, so location isn&rsquo;t a
            blocker.{" "}
            <Link href="/book" className="text-brand-deep font-medium hover:underline">
              Book a walkthrough
            </Link>{" "}
            and we&rsquo;ll set it up for your market.
          </p>
        </div>
      </section>

      <FinalCTA title="Ready to stop losing leads in your market?" />

      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
