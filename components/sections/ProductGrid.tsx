import Link from "next/link";
import { tiers, HOSTING_FLAT } from "@/lib/tiers";

export default function ProductGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="container-page">
        <p className="eyebrow mb-4">What we offer</p>
        <h2 className="h-section max-w-3xl mb-10">
          Three offerings. Pick the one that matches what&rsquo;s broken.
        </h2>
        <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
          {tiers.map((tier) => {
            const featured = tier.featured === true;
            return (
              <div
                key={tier.id}
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  featured
                    ? "bg-brand-deep text-brand-soft shadow-deep"
                    : "bg-brand-soft shadow-soft"
                }`}
              >
                <h3
                  className={`text-xl font-medium tracking-tight ${
                    featured ? "text-brand-soft" : "text-brand-deep"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    featured ? "text-brand-soft/70" : "text-brand-muted"
                  }`}
                >
                  {tier.tagline}
                </p>
                <div className="mt-5 mb-7">
                  <span
                    className={`text-2xl font-medium tabular-nums ${
                      featured ? "text-brand-soft" : "text-brand-deep"
                    }`}
                  >
                    ${tier.setup}
                  </span>
                  <span
                    className={`text-sm ${
                      featured ? "text-brand-soft/60" : "text-brand-muted"
                    }`}
                  >
                    {" + $"}
                    {tier.monthly}/mo
                  </span>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/pricing#${tier.id}`}
                    className={`${featured ? "btn-primary-featured" : "btn-primary"} w-full text-center`}
                  >
                    See {tier.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-brand-muted">
          ${HOSTING_FLAT}/mo flat hosting on Found. Climbing is all-in (hosting included).
        </p>
      </div>
    </section>
  );
}
