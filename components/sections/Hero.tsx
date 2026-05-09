"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { reveal } from "@/lib/motion";
import { BookingButton } from "@/components/BookingModal";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white"
    >
      <div className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32 grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={reveal.container(0.12, 0.05)}
        >
          <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
            Your business should run{" "}
            <span className="text-brand-deep">while you sleep.</span>
          </motion.h1>
          <motion.p className="lede mt-6" variants={reveal.fadeUp}>
            We build AI that answers your leads, follows up with them, and
            books them on your calendar. You don&rsquo;t have to do anything.
          </motion.p>

          <motion.div className="mt-8 lg:hidden" variants={reveal.fadeUp}>
            <Image
              src="/hero.png"
              alt="Before and after: leads going cold vs. AI following up and booking them"
              width={1536}
              height={1024}
              priority
              sizes="100vw"
              className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-slate-200/60"
            />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={reveal.fadeUp}
          >
            <BookingButton className="btn-primary">
              Show me what this looks like for my business
            </BookingButton>
            <a href="/pricing" className="btn-secondary">
              See the Plans
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            variants={reveal.container(0.06, 0.05)}
          >
            {["AI Automation", "Voice Agents", "CRM + Pipeline", "Review Management"].map(
              (item) => (
                <motion.li
                  key={item}
                  variants={reveal.fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-deep/15 bg-white px-3 py-1 text-xs font-medium text-brand-deep"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-primary"
                    aria-hidden
                  />
                  {item}
                </motion.li>
              )
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <Image
            src="/hero.png"
            alt="Before and after: leads going cold vs. AI following up and booking them"
            width={1482}
            height={791}
            priority
            sizes="50vw"
            className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-slate-200/60"
          />
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
      />
    </section>
  );
}
