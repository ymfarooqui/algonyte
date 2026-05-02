"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const points = [
  "Tested like a customer would actually use it",
  "Clear reports, no technical overwhelm",
  "Small-business pricing with direct, no-runaround communication",
];

export default function WhyUsPreview() {
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

  // 5 staggered elements: eyebrow, heading, 3 points, button → 6 total
  const totalSteps = 6;
  const itemOpacity = (i: number) => {
    const spanFactor = 2.4;
    const stagger = 1 / (totalSteps + spanFactor - 1);
    const start = i * stagger;
    const end = start + stagger * spanFactor;
    return Math.max(0, Math.min(1, (progress - start) / (end - start)));
  };

  const fadeStyle = (i: number) => {
    const o = itemOpacity(i);
    return {
      opacity: o,
      transform: `translateY(${(1 - o) * 14}px)`,
      filter: `blur(${(1 - o) * 5}px)`,
      transition:
        "opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out",
    } as const;
  };

  return (
    <section className="section bg-white">
      <div ref={ref} className="container-page max-w-3xl">
        <p className="eyebrow mb-3" style={fadeStyle(0)}>Why this is different</p>
        <h2 className="h-section" style={fadeStyle(1)}>A quality mindset behind every website.</h2>
        <ul className="mt-8 space-y-3">
          {points.map((p, i) => (
            <li
              key={p}
              className="flex gap-3 text-brand-ink text-lg"
              style={fadeStyle(2 + i)}
            >
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8" style={fadeStyle(5)}>
          <Link href="/why-us" className="btn-secondary">
            See the full story
          </Link>
        </div>
      </div>
    </section>
  );
}
