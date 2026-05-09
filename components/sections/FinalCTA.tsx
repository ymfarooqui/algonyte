"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-accent to-white">
      <motion.div
        className="container-page py-24 sm:py-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.h2
          className="h-section max-w-3xl mx-auto"
          variants={reveal.fadeUpLg}
        >
          Want to see what this could look like for you?
        </motion.h2>
        <motion.p className="lede mt-6 max-w-2xl mx-auto" variants={reveal.fadeUp}>
          Book a 20-minute call. We&rsquo;ll look at how leads come into your
          business today and show you where you&rsquo;re leaving money on the
          table.
        </motion.p>
        <motion.div className="mt-8" variants={reveal.fadeUp}>
          <a href="/contact" className="btn-primary">
            Book a 20-minute call
          </a>
        </motion.div>
        <motion.p className="mt-5 text-sm text-brand-muted" variants={reveal.fadeUp}>
          We don&rsquo;t do sales pitches. If we&rsquo;re not the right fit
          we&rsquo;ll tell you.
        </motion.p>
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
      />
    </section>
  );
}
