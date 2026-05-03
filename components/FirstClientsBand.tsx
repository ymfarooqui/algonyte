"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

export default function FirstClientsBand() {
  return (
    <section className="section bg-brand-deep text-white">
      <motion.div
        className="container-page max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.15, 0.1)}
      >
        <motion.p
          className="text-sm font-medium uppercase tracking-wider text-brand-primary"
          variants={reveal.fadeUp}
        >
          Now booking first clients
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight"
          variants={reveal.fadeUp}
        >
          Introductory pricing for the first wave of small businesses.
        </motion.h2>
        <motion.p
          className="mt-5 text-white/80 text-lg leading-relaxed"
          variants={reveal.fadeUp}
        >
          We&rsquo;re taking on a small group of early clients at lower rates in exchange for
          honest feedback and a testimonial. You get more attention per project. We get our first
          case studies. Fair trade.
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap justify-center gap-3" variants={reveal.fadeUp}>
          <Link
            href="/free-review"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-brand-deep hover:bg-brand-accent"
          >
            Get a Free Website Review
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-base font-medium text-white hover:bg-white/10"
          >
            Request a Quote
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
