import Link from "next/link";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";
import type { Heading } from "@/lib/landing";

type Props = {
  eyebrow: string;
  title: Heading;
  lede: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  secondary?: { href: string; label: string };
};

export default function LandingHero({
  eyebrow,
  title,
  lede,
  ctaHref = "/book",
  ctaLabel = "Book a 30-minute walkthrough →",
  secondary,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white">
      <PageHeroBackdrop />
      <div className="container-page pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1 className="h-display">
            {title.pre}{" "}
            <span className="text-brand-deep">{title.accent}</span>
            {title.post ?? ""}
          </h1>
          <p className="lede mt-6 max-w-2xl">{lede}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-brand-deep px-8 py-4 text-white font-medium hover:bg-brand-deep/90 transition-colors text-lg"
            >
              {ctaLabel}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="text-sm text-brand-deep underline decoration-brand-deep/30 underline-offset-4 hover:decoration-brand-deep transition-colors"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
