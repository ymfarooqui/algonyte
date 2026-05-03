"use client";

import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

export default function FinalCta() {
  return (
    <section className="section">
      <div className="container-page">
        <motion.div
          className="rounded-3xl bg-brand-deep px-8 py-14 sm:px-14 sm:py-20 text-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={inView}
          variants={reveal.container(0.13, 0.1)}
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <motion.h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
              variants={reveal.fadeUp}
            >
              Ready to give your customers a clearer path?
            </motion.h2>
            <motion.p
              className="mt-5 text-white/80 text-lg leading-relaxed"
              variants={reveal.fadeUp}
            >
              Whether you need a simple website, a sharper user experience, or a full diagnostic
              audit, we&rsquo;ll help you build something customers can actually use.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={reveal.fadeUp}>
              <a
                href="/free-review"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-brand-deep hover:bg-brand-accent"
              >
                Get a Free Website Review
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white hover:bg-white/10"
              >
                Request a Quote
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
