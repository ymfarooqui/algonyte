import Link from "next/link";
import { industryIndex } from "@/lib/content/industries";
import { locationIndex } from "@/lib/content/locations";

function Chip({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-brand-line bg-white px-3.5 py-1.5 text-sm text-brand-deep nav-link hover:border-brand-primary hover:text-brand-primary"
    >
      {children}
    </Link>
  );
}

export default function IndustriesAreas() {
  return (
    <section className="section">
      <div className="container-page">
        <p className="eyebrow mb-4">Who we build for</p>
        <h2 className="h-section max-w-3xl mb-10">
          Built for your industry — across your market.
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-brand-deep">By industry</h3>
            <p className="mt-2 text-brand-muted leading-relaxed">
              The same system, tuned to how your business actually wins work.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {industryIndex.map((it) => (
                <Chip key={it.slug} href={`/industries/${it.slug}`}>
                  {it.title}
                </Chip>
              ))}
            </div>
            <Link
              href="/industries"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:underline"
            >
              All industries →
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-deep">By area</h3>
            <p className="mt-2 text-brand-muted leading-relaxed">
              Remote-first across Chicagoland and the Detroit metro.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {locationIndex.map((it) => (
                <Chip key={it.slug} href={`/locations/${it.slug}`}>
                  {it.title}
                </Chip>
              ))}
            </div>
            <Link
              href="/locations"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:underline"
            >
              All areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
