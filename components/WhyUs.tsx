"use client";

import { useEffect, useRef, useState } from "react";

const points = [
  "Built with usability in mind from day one",
  "Tested across key customer paths",
  "Clear reports without technical overwhelm",
  "Practical recommendations your developer or team can use",
  "Affordable options for small businesses",
];

const questions = [
  "Can customers find what they need?",
  "Is the next step obvious?",
  "Does the site work well on mobile?",
  "Are there hidden bugs or broken flows?",
  "Is the site fast enough?",
  "Does the experience build trust?",
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="why-us" className="section bg-white">
      <div
        ref={ref}
        className={`container-page grid gap-12 lg:grid-cols-2 lg:items-start transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="eyebrow mb-3">Why this is different</p>
          <h2 className="h-section">
            Most websites are built. Few are tested like a customer would use them.
          </h2>
          <p className="lede mt-6">
            Farooqui Digital combines website building with a QA and usability mindset. Your
            site does not just look good. It works for clarity, ease of use, performance, and real
            customer behavior.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-brand-ink">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-brand-accent/60 p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-brand-deep">A QA mindset behind every website.</h3>
          <p className="mt-4 text-brand-ink/80">
            Farooqui Digital was built from a quality assurance background. Every website is
            approached with a tester&rsquo;s eye for clarity, flow, usability, and hidden friction.
          </p>
          <p className="mt-6 text-sm font-medium text-brand-deep">Instead of asking &ldquo;Does this look good?&rdquo; we ask:</p>
          <ul className="mt-3 space-y-2">
            {questions.map((q) => (
              <li key={q} className="flex gap-3 text-brand-ink/90">
                <span aria-hidden className="text-brand-primary">→</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
