"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Para = { text: string; bold: boolean };

const paragraphs: Para[] = [
  {
    text:
      "Many small business websites are hard to navigate, slow to load, unclear on mobile, or missing the simple details that help visitors take action.",
    bold: false,
  },
  {
    text:
      "When customers cannot quickly understand what you offer or how to contact you, they leave.",
    bold: false,
  },
  {
    text: "Farooqui Digital helps you fix that.",
    bold: true,
  },
];

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Problem() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[][]>([]);
  const [progress, setProgress] = useState(0);
  const [lineGroups, setLineGroups] = useState<number[][][]>([]);

  // Group words into visual lines by their measured offsetTop (per paragraph)
  useIso(() => {
    const measure = () => {
      const groups: number[][][] = paragraphs.map((p, pi) => {
        const wordEls = wordRefs.current[pi] || [];
        const lines: number[][] = [];
        let currentTop: number | null = null;
        let current: number[] = [];
        wordEls.forEach((el, wi) => {
          if (!el) return;
          const top = el.offsetTop;
          if (currentTop === null || Math.abs(top - currentTop) > 2) {
            if (current.length) lines.push(current);
            current = [wi];
            currentTop = top;
          } else {
            current.push(wi);
          }
        });
        if (current.length) lines.push(current);
        return lines;
      });
      setLineGroups(groups);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const elCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elCenter - vh / 2);
      const fadeRange = vh * 0.45;
      const next = Math.max(0, Math.min(1, 1 - distance / fadeRange));
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

  // Total visual lines across all paragraphs
  const totalLines = lineGroups.reduce((n, g) => n + g.length, 0) || 1;

  // Flat array: paraIdx -> lineIdxWithinPara -> globalLineIndex
  let cursor = 0;
  const globalIndex: number[][] = lineGroups.map((g) =>
    g.map(() => cursor++),
  );

  const lineOpacity = (globalLineIdx: number) => {
    const span = 1 / totalLines;
    const start = globalLineIdx * span;
    const end = start + span * 0.7;
    return Math.max(0, Math.min(1, (progress - start) / (end - start)));
  };

  return (
    <section id="problem" className="section bg-white">
      <div className="container-page max-w-4xl">
        <h2 className="h-section">Your website should make it easy for customers to choose you.</h2>
        <div ref={containerRef} className="lede mt-6 space-y-5">
          {paragraphs.map((p, pi) => {
            const words = p.text.split(/(\s+)/); // keep spaces
            wordRefs.current[pi] = wordRefs.current[pi] || [];
            const lines = lineGroups[pi] || [];
            // Build a map: wordIndex -> lineIndexWithinPara
            const wordToLine: Record<number, number> = {};
            lines.forEach((wordIdxs, li) => {
              wordIdxs.forEach((wi) => {
                wordToLine[wi] = li;
              });
            });
            return (
              <p key={pi} className={p.bold ? "text-brand-ink font-medium" : ""}>
                {words.map((w, wi) => {
                  if (/^\s+$/.test(w)) return <span key={wi}>{w}</span>;
                  const lineIdx = wordToLine[wi];
                  const o =
                    lineIdx === undefined || !globalIndex[pi]
                      ? 0
                      : lineOpacity(globalIndex[pi][lineIdx] ?? 0);
                  return (
                    <span
                      key={wi}
                      ref={(el) => {
                        if (el) wordRefs.current[pi][wi] = el;
                      }}
                      style={{
                        display: "inline-block",
                        opacity: lineGroups.length === 0 ? 0 : o,
                        transform: `translateY(${(1 - o) * 14}px)`,
                        filter: `blur(${(1 - o) * 5}px)`,
                        transition:
                          "opacity 300ms ease-out, transform 300ms ease-out, filter 300ms ease-out",
                      }}
                    >
                      {w}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
