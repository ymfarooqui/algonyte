"use client";

import { useEffect, useRef, useState } from "react";

const audiences = [
  "Local service businesses",
  "Consultants",
  "Solo business owners",
  "E-commerce starters",
  "Health, wellness & fitness",
  "Real estate professionals",
  "Home service providers",
  "Agencies needing white-label QA",
];

export default function AudienceStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const elCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elCenter - vh / 2);
      const plateau = vh * 0.3;
      const fadeRange = vh * 0.9;
      const next =
        distance <= plateau
          ? 1
          : Math.max(0, Math.min(1, 1 - (distance - plateau) / fadeRange));
      const eased = next * next * (3 - 2 * next);
      setProgress(eased);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const total = audiences.length;
  const tileOpacity = (i: number) => {
    const spanFactor = 2.4;
    const stagger = 1 / (total + spanFactor - 1);
    const start = i * stagger;
    const end = start + stagger * spanFactor;
    return Math.max(0, Math.min(1, (progress - start) / (end - start)));
  };

  const headerOpacity = Math.max(0, Math.min(1, (progress - 0.05) / 0.4));

  return (
    <section id="who-its-for" className="section bg-brand-soft">
      <div ref={ref} className="container-page">
        <div
          className="max-w-2xl"
          style={{
            opacity: headerOpacity,
            transform: `translateY(${(1 - headerOpacity) * 14}px)`,
            filter: `blur(${(1 - headerOpacity) * 5}px)`,
            transition:
              "opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out",
          }}
        >
          <p className="eyebrow mb-3">Who it&rsquo;s for</p>
          <h2 className="h-section">
            Built for small businesses that need a website that actually pulls its weight.
          </h2>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => {
            const o = tileOpacity(i);
            return (
              <li
                key={a}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-brand-ink/90"
                style={{
                  opacity: o,
                  transform: `translateX(${(1 - o) * -24}px)`,
                  transition:
                    "opacity 300ms ease-out, transform 300ms ease-out",
                }}
              >
                {a}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
