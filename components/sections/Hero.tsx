"use client";

import { motion } from "motion/react";
import { reveal } from "@/lib/motion";
import { BookingButton } from "@/components/BookingModal";
import HeroVisual from "@/components/HeroVisual";
import PageHeroBackdrop from "@/components/PageHeroBackdrop";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent via-white to-white"
    >
      <PageHeroBackdrop />

      <motion.div
        className="relative container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
        initial="hidden"
        animate="visible"
        variants={reveal.container(0.12, 0.05)}
      >
        <div className="max-w-3xl mx-auto text-center px-2 sm:px-0">
          <motion.h1 className="h-display" variants={reveal.fadeUpLg}>
            Your business should run{" "}
            <span className="text-brand-deep">while you sleep.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-sm font-medium uppercase tracking-wider text-brand-deep/80"
            variants={reveal.fadeUp}
          >
            {["AI Receptionist", "Voice Agents", "CRM + Pipeline", "Reputation Manager"].map(
              (item, i) => (
                <span key={item} className="whitespace-nowrap">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="inline-block h-1 w-1 rounded-full bg-brand-deep/50 mx-3 translate-y-[1px] align-middle"
                    />
                  )}
                  {item}
                </span>
              )
            )}
          </motion.p>
        </div>

        <motion.div
          className="mt-12 mx-auto max-w-4xl"
          variants={reveal.fadeUp}
        >
          <HeroVisual />
        </motion.div>

        <div className="mt-10 mx-auto max-w-2xl text-center px-2 sm:px-0">
          <motion.p
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-ink leading-tight [text-wrap:balance]"
            variants={reveal.fadeUp}
          >
            AI Bots that answer your leads, follow up, and book them on your
            calendar.
          </motion.p>
          <motion.p
            className="mt-3 text-lg text-brand-muted"
            variants={reveal.fadeUp}
          >
            Without you ever having to lift a finger.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-3"
          variants={reveal.fadeUp}
        >
          <BookingButton className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-brand-deep/30 ring-1 ring-brand-deep/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-ink hover:shadow-xl hover:shadow-brand-deep/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2">
            <span
              aria-hidden
              className="absolute -inset-px rounded-full bg-gradient-to-r from-brand-primary/0 via-brand-primary/40 to-brand-primary/0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Show me what this looks like for my business</span>
            <svg
              viewBox="0 0 24 24"
              className="relative h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BookingButton>
        </motion.div>
      </motion.div>

    </section>
  );
}
