"use client";

import { motion, useInView } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

const EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

// CSS-transition reveal (flicker-free on iOS, unlike Framer opacity).
function reveal(
  shown: boolean,
  hidden: string,
  shownT = "none",
  dur = 0.5,
  delay = 0,
): CSSProperties {
  return {
    opacity: shown ? 1 : 0,
    transform: shown ? shownT : hidden,
    transition: `opacity ${dur}s ${EASE_CSS} ${delay}s, transform ${dur}s ${EASE_CSS} ${delay}s`,
  };
}

const INBOX = [
  {
    channel: "SMS",
    preview: "Missed-call-text-back reply se…",
    initial: "J",
    tone: "from-rose-100 to-rose-200 text-rose-700",
  },
  {
    channel: "Instagram DM",
    preview: "Message with my Instavan with t…",
    initial: "S",
    tone: "from-fuchsia-100 to-fuchsia-200 text-fuchsia-700",
  },
  {
    channel: "Web chat",
    preview: "We'd contact to my message, fo…",
    initial: "M",
    tone: "from-sky-100 to-sky-200 text-sky-700",
  },
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function Bubbles() {
  const dots = [
    { top: "8%", left: "6%", size: 14, opacity: 0.35 },
    { top: "22%", left: "92%", size: 10, opacity: 0.3 },
    { top: "48%", left: "2%", size: 18, opacity: 0.25 },
    { top: "72%", left: "94%", size: 12, opacity: 0.3 },
    { top: "84%", left: "8%", size: 8, opacity: 0.4 },
    { top: "62%", left: "70%", size: 6, opacity: 0.35 },
    { top: "16%", left: "60%", size: 6, opacity: 0.4 },
    { top: "92%", left: "62%", size: 14, opacity: 0.25 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((d, i) => (
        <span
          key={i}
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
          }}
          className="absolute rounded-full bg-brand-primary"
        />
      ))}
    </div>
  );
}

function Waveform() {
  const { s } = useAnimSpeed();
  const bars = [4, 8, 6, 12, 9, 14, 10, 16, 11, 18, 12, 14, 9, 11, 6, 8, 4];
  return (
    <div className="flex h-6 items-center gap-[2px]">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          animate={{ scaleY: [1, h / 6, 1] }}
          transition={{
            duration: s(1.4),
            repeat: Infinity,
            delay: s(i * 0.05),
            ease: "easeInOut",
          }}
          style={{ height: `${h * 1.2}px` }}
          className="block w-[2px] origin-center rounded-full bg-brand-deep"
        />
      ))}
    </div>
  );
}

export default function ServicesHeroStack({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { s } = useAnimSpeed();

  return (
    <div
      ref={ref}
      className={`relative aspect-[5/4] w-full ${className}`}
      role="img"
      aria-label="One inbox covering SMS, Instagram DM, and web chat, with calendar booking and live voice AI call"
    >
      <Bubbles />

      {/* Back card: Phone call */}
      <div
        style={reveal(inView, "translateY(20px) rotate(-3deg)", "rotate(-2deg)", s(0.8), s(0.1))}
        className="absolute left-[6%] top-[4%] w-[58%] rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200/70 sm:p-4"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent text-brand-deep">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
              <path d="M5.5 4.5a2 2 0 0 1 2-2h2.1a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.27.95L9.5 9.32a13 13 0 0 0 5.18 5.18l1.66-1.66a1 1 0 0 1 .95-.27l3.45.86a1 1 0 0 1 .76.97V16.5a2 2 0 0 1-2 2A15 15 0 0 1 5.5 4.5Z" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-brand-ink leading-tight">
              Phone call
            </p>
            <p className="text-[10px] text-brand-muted leading-tight">
              Live voice AI call
            </p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>
        <div className="mt-3">
          <Waveform />
        </div>
      </div>

      {/* Middle card: Calendar */}
      <div
        style={reveal(inView, "translateY(24px) rotate(4deg)", "rotate(2deg)", s(0.85), s(0.25))}
        className="absolute right-[4%] top-[14%] w-[60%] rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200/70 sm:p-4"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-brand-ink">
            Calendar week-view
          </p>
          <div className="flex gap-1 text-brand-muted">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
              <path
                d="m15 6-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
              <path
                d="m9 6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-1">
          {DAYS.map((d) => (
            <div
              key={d}
              className="text-center text-[9px] font-medium uppercase tracking-wider text-brand-muted"
            >
              {d}
            </div>
          ))}
          {DAYS.map((d, i) => {
            const isBooked = i === 2;
            return (
              <div
                key={`slot-${d}`}
                style={reveal(inView, "scale(0.8)", "none", s(0.4), s(0.5 + i * 0.06))}
                className={`h-6 rounded-md ${
                  isBooked
                    ? "bg-brand-primary shadow-sm shadow-brand-primary/40"
                    : "bg-slate-100"
                }`}
              />
            );
          })}
          {DAYS.map((d, i) => (
            <div
              key={`slot2-${d}`}
              className={`h-4 rounded-md ${
                i === 0 ? "bg-brand-deep/15" : "bg-slate-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Front card: Unified inbox */}
      <div
        style={reveal(inView, "translateY(28px)", "none", s(0.9), s(0.4))}
        className="absolute bottom-[4%] left-[10%] w-[78%] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-200/70 sm:p-5"
      >
        <p className="text-xs font-semibold text-brand-ink">Unified inbox</p>
        <ul className="mt-3 space-y-2">
          {INBOX.map((item, i) => (
            <li
              key={item.channel}
              style={reveal(inView, "translateX(-10px)", "none", s(0.5), s(0.6 + i * 0.15))}
              className="flex items-center gap-2.5 rounded-xl bg-slate-50 px-2.5 py-2 ring-1 ring-slate-100"
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.tone} text-[10px] font-semibold`}
              >
                {item.initial}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-brand-ink leading-tight">
                  {item.channel}
                </p>
                <p className="truncate text-[10px] text-brand-muted leading-tight">
                  {item.preview}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-brand-deep px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                AI replied
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
