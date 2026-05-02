"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Website Builds",
    body:
      "Clean, affordable websites designed around simple navigation, clear messaging, and strong calls-to-action.",
  },
  {
    title: "Website Audits",
    body:
      "Independent reviews of usability, bugs, performance, accessibility, and conversion flow.",
  },
  {
    title: "Website Optimization",
    body:
      "Focused improvements to pages, forms, content, navigation, speed, and mobile experience.",
  },
  {
    title: "Website Care",
    body:
      "Ongoing checkups, small updates, regression testing, and performance monitoring to keep your site customer-ready.",
  },
  {
    title: "SEO & Search Visibility",
    body:
      "On-page SEO, local search setup, faster pages, and clearer content so the right customers actually find you on Google.",
  },
];

export default function Solution() {
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
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 0;
    el.scrollTo({ left: i * (cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="section bg-brand-soft">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-section max-w-3xl">
            Build it right. Improve what exists. Keep it working.
          </h2>
          <div className="hidden sm:flex gap-2">
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
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 -mx-6 sm:-mx-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 sm:px-8 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Services"
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              data-card
              className="card snap-center shrink-0 w-[92%] sm:w-[94%] lg:w-[96%] p-8 sm:p-12 lg:p-16 min-h-[14rem] sm:min-h-[18rem] lg:min-h-[22rem] flex flex-col justify-center"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-deep">
                {p.title}
              </h3>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-brand-muted leading-relaxed max-w-3xl">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-brand-muted sm:hidden">Swipe to see more →</p>
          <div className="flex gap-2 mx-auto sm:mx-0">
            {pillars.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Go to ${p.title}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-brand-deep" : "w-2 bg-brand-deep/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
