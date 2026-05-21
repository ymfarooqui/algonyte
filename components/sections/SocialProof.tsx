"use client";

import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

type Metric = {
  prefix?: string;
  to: number;
  suffix?: string;
  label: string;
};

const metrics: Metric[] = [
  { to: 72, suffix: "%", label: "Faster reply to a new lead" },
  { to: 60, suffix: " sec", label: "From form to first response" },
  { prefix: "$", to: 60, suffix: "K+", label: "Saved in one client's first year" },
];

type Testimonial = { quote: string; name: string; role: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "We booked an additional 10 jobs in the first week. Leads that used to slip through after hours are now showing up on the calendar before we open.",
    name: "Car Hub Macomb",
    role: "Auto sales & service, Macomb MI",
  },
];

export default function SocialProof() {
  return (
    <section className="section bg-brand-soft">
      <div className="container-page">
        <Reveal as="h2" className="h-section max-w-2xl" delay={0.05}>
          What this looks like in real businesses.
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} y={24} delay={0.1 + i * 0.15}>
              <div className="card text-center h-full">
                <CountUp
                  to={m.to}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  durationMs={1700}
                  className="block text-5xl sm:text-6xl font-semibold text-brand-deep leading-none tabular-nums"
                />
                <p className="mt-4 text-sm text-brand-muted uppercase tracking-wide">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {testimonials.length > 0 && (
          <div className="mt-10">
            {testimonials.map((t) => (
              <Reveal
                as="figure"
                key={t.name}
                className="relative mx-auto max-w-3xl py-10 sm:py-12"
                delay={0.1}
              >
                <span
                  aria-hidden
                  className="absolute -top-2 left-0 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-primary"
                >
                  Customer
                </span>
                <blockquote className="text-2xl sm:text-3xl font-medium text-brand-deep leading-[1.25] tracking-tight [text-wrap:balance]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span aria-hidden className="h-px w-8 bg-brand-line" />
                  <span className="font-medium text-brand-deep">{t.name}</span>
                  <span className="text-brand-muted">{t.role}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
