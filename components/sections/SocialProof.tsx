"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";
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
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          What this looks like in real businesses.
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-3"
          variants={reveal.container(0.15, 0.1)}
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={reveal.fadeUpLg} className="reveal-static">
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
            </motion.div>
          ))}
        </motion.div>

        {testimonials.length > 0 && (
          <motion.div
            className="mt-10"
            variants={reveal.container(0.15, 0.2)}
          >
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                className="relative mx-auto max-w-3xl py-10 sm:py-12"
                variants={reveal.fadeUp}
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
                  <span className="font-medium text-brand-deep">
                    {t.name}
                  </span>
                  <span className="text-brand-muted">{t.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
