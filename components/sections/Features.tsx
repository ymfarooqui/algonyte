"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { reveal, inView } from "@/lib/motion";

const Icon = {
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4l-5 1.6 1.6-5A8.4 8.4 0 1 1 21 11.5z" />
      <circle cx="9" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="13" cy="11.5" r="0.8" fill="currentColor" />
      <circle cx="17" cy="11.5" r="0.8" fill="currentColor" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="5" height="16" rx="1" />
      <rect x="10" y="4" width="5" height="11" rx="1" />
      <rect x="17" y="4" width="4" height="7" rx="1" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 11-13h-7l0-7z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9L2 9.3l6.9-1L12 2z" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <rect x="7" y="13" width="3" height="5" />
      <rect x="12" y="9" width="3" height="9" />
      <rect x="17" y="5" width="3" height="13" />
    </svg>
  ),
};

const features = [
  {
    icon: Icon.chat,
    title: "Chat that answers itself",
    body: "When someone messages you at 11pm, they get a real reply, not a 'thanks, we'll get back to you'.",
  },
  {
    icon: Icon.phone,
    title: "Calls that get returned",
    body: "Missed a call? The system rings them back inside a minute and handles the conversation.",
  },
  {
    icon: Icon.pipeline,
    title: "One inbox for everything",
    body: "Every lead, every text, every email lives in one place. Nothing slips into a different app.",
  },
  {
    icon: Icon.bolt,
    title: "Follow-ups that actually go out",
    body: "Texts and emails go out on schedule after a new lead comes in. You don't have to remember.",
  },
  {
    icon: Icon.star,
    title: "Reviews that pile up",
    body: "After a job finishes, we ask happy customers for a review. Replies to Google get handled too.",
  },
  {
    icon: Icon.chart,
    title: "Numbers you can read",
    body: "How many leads, how fast you replied, what's still in the pipeline. Open it on your phone.",
  },
];

export default function Features() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
      const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 0;
      const gap = 20;
      if (cardWidth) {
        setActiveIndex(Math.round(scrollLeft / (cardWidth + gap)));
      }
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByDir = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 0;
    el.scrollTo({ left: i * (cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="section">
      <motion.div
        className="container-page"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={reveal.container(0.12, 0.05)}
      >
        <motion.p className="eyebrow mb-4" variants={reveal.fadeUp}>
          What&rsquo;s Inside
        </motion.p>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <motion.h2 className="h-section max-w-2xl" variants={reveal.fadeUp}>
            What you actually get.
          </motion.h2>
          <motion.p className="lede max-w-md" variants={reveal.fadeUp}>
            Six tools that do the boring parts of running a business so you
            can stop doing them.
          </motion.p>
        </div>

        <div className="mt-8 hidden sm:flex gap-2 justify-end">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByDir(-1)}
            disabled={!canScrollLeft}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-deep/20 bg-white text-brand-deep transition hover:bg-brand-accent disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByDir(1)}
            disabled={!canScrollRight}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-deep/20 bg-white text-brand-deep transition hover:bg-brand-accent disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-4 -mx-6 sm:-mx-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 sm:px-8 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Features"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              data-card
              variants={reveal.fadeUp}
              className="card snap-center shrink-0 w-[88%] sm:w-[60%] lg:w-[44%] p-8 sm:p-10 min-h-[14rem] sm:min-h-[16rem] flex flex-col justify-center border-l-4 border-l-brand-deep"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent text-brand-deep">
                <span className="block h-6 w-6">{f.icon}</span>
              </span>
              <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-brand-deep">
                {f.title}
              </h3>
              <p className="mt-3 text-base sm:text-lg text-brand-muted leading-relaxed">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-brand-muted sm:hidden">Swipe to see more →</p>
          <div className="flex gap-2 mx-auto sm:mx-0">
            {features.map((f, i) => (
              <button
                key={f.title}
                type="button"
                aria-label={`Go to ${f.title}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-brand-deep" : "w-2 bg-brand-deep/25"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
