"use client";

import Reveal from "@/components/Reveal";
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

      <div className="relative container-page pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center px-2 sm:px-0">
          <Reveal as="h1" className="h-display" y={24} delay={0.05}>
            Your business should run{" "}
            <em className="not-italic text-brand-primary">while you sleep.</em>
          </Reveal>
          <Reveal
            as="p"
            className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-brand-muted"
            delay={0.17}
          >
            {["Presence", "Receptionist", "Voice Agents", "Local SEO", "Reputation"].map(
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
          </Reveal>
        </div>

        <Reveal className="mt-12 mx-auto max-w-4xl" delay={0.29}>
          <HeroVisual />
        </Reveal>

        <div className="mt-10 mx-auto max-w-2xl text-center px-2 sm:px-0">
          <Reveal as="p" className="lede" delay={0.41}>
            Site live in 5–7 days. Reception in 5 days. Full SEO + voice in two weeks.
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3" delay={0.53}>
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
            See plans
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
