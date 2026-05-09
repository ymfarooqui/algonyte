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
  { prefix: "$", to: 60, suffix: "K+", label: "Saved per year on busywork" },
];

type Testimonial = { quote: string; name: string; role: string };

// Add real client quotes here. The testimonial section renders only if this array has entries.
const testimonials: Testimonial[] = [];

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
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          Results
        </motion.p>
        <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
          What this looks like in real businesses.
        </motion.h2>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-3"
          variants={reveal.container(0.15, 0.1)}
        >
          {metrics.map((m) => (
            <motion.div key={m.label} variants={reveal.fadeUpLg} className="card text-center">
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
            </motion.div>
          ))}
        </motion.div>

        {testimonials.length > 0 && (
          <motion.div
            className="mt-8 grid gap-5 md:grid-cols-2"
            variants={reveal.container(0.15, 0.2)}
          >
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                className="card"
                variants={reveal.fadeUp}
              >
                <blockquote className="text-brand-ink leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-brand-deep">
                    {t.name}
                  </span>
                  <span className="text-brand-muted">, {t.role}</span>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
