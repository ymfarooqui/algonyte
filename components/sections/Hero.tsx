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
      className="relative overflow-hidden bg-gradient-to-b from-brand-accent/60 via-brand-soft to-brand-soft"
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
            <em className="not-italic text-brand-primary">while you sleep.</em>
          </motion.h1>
          <motion.p
            className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-brand-muted"
            variants={reveal.fadeUp}
          >
            {["Web Presence", "AI Receptionist", "Voice Agents", "Local SEO", "Reputation Manager"].map(
              (item, i) => (
                <span key={item} className="whitespace-nowrap">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="inline-block h-px w-4 bg-brand-line mx-3 translate-y-[-2px] align-middle"
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
            className="lede"
            variants={reveal.fadeUp}
          >
            AI bots that answer your leads, follow up, and book them on your
            calendar — without you ever lifting a finger.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
          variants={reveal.fadeUp}
        >
          <BookingButton className="group btn-primary">
            Show me what this looks like for my business
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </BookingButton>
          <a href="/pricing" className="btn-link">
            See pricing
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
