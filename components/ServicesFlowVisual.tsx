"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

const EASE = [0.22, 1, 0.36, 1] as const;
const AUTOPLAY_MS = 5500;

type Stage = {
  id: string;
  label: string;
  sub: string;
  blurb: string;
  bullets: string[];
  stat: { value: string; label: string };
  card: React.ReactNode;
  icon: React.ReactNode;
};

/* ---------------- mini UI cards (the "screens" inside each stage) ---------------- */

function FormCard() {
  const { s } = useAnimSpeed();
  const fields = ["Full name", "Phone number", "Service needed", "Zip code", "Best time to call"];
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
        <span className="ml-2 h-2 flex-1 rounded-sm bg-white" />
      </div>
      <p className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
        Get a quote
      </p>
      <div className="space-y-2">
        {fields.map((label) => (
          <div key={label} className="space-y-0.5">
            <p className="text-[8px] uppercase tracking-wider text-slate-400">{label}</p>
            <div className="h-2.5 w-full rounded-sm bg-slate-100" />
          </div>
        ))}
      </div>
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: s(2), repeat: Infinity, ease: "easeInOut" }}
        className="mt-auto flex items-center justify-center rounded-md bg-brand-deep py-2 text-[10px] font-semibold uppercase tracking-wider text-white"
      >
        Submit
      </motion.div>
    </div>
  );
}

function ChatReplyCard() {
  const { s } = useAnimSpeed();
  return (
    <div className="flex h-full flex-col justify-around gap-2">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: s(0.5), ease: EASE }}
        className="self-start max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2"
      >
        <p className="text-[10px] text-slate-700">Hi, do you do roof inspections?</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: s(0.6), duration: s(0.5), ease: EASE }}
        className="self-end max-w-[85%] rounded-2xl rounded-br-sm bg-brand-deep px-3 py-2"
      >
        <p className="text-[10px] text-white leading-snug">
          Yes! I can have someone out this week. What&rsquo;s the address?
        </p>
      </motion.div>
      <div className="flex items-center gap-1 self-end text-[9px] text-emerald-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Replied in 4s
      </div>
    </div>
  );
}

function QualifyCard() {
  const { s } = useAnimSpeed();
  const items = [
    { label: "Service area", ok: true },
    { label: "Budget fit", ok: true },
    { label: "Timeline", ok: true },
    { label: "Decision maker", ok: true },
  ];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex flex-1 flex-col justify-evenly gap-1.5">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: s(0.15 + i * 0.18), duration: s(0.4), ease: EASE }}
            className="flex items-center gap-2 rounded-md bg-slate-50 px-2 py-2 ring-1 ring-slate-100"
          >
            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg viewBox="0 0 24 24" className="h-2 w-2" fill="none">
                <path
                  d="m5 12 4.5 4.5L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-[10px] text-slate-700">{it.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-md bg-emerald-50 px-2 py-2 ring-1 ring-emerald-100">
        <span className="text-[10px] font-semibold text-emerald-700">Qualified</span>
        <span className="text-[10px] font-mono text-emerald-700">8/10</span>
      </div>
    </div>
  );
}

function CalendarCard() {
  const { s } = useAnimSpeed();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-brand-ink">May 12-16</p>
        <div className="flex gap-1 text-brand-muted">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
            <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
            <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-1 auto-rows-fr">
        {days.map((d) => (
          <div
            key={d}
            className="text-center text-[8px] font-semibold uppercase tracking-wider text-brand-muted"
          >
            {d}
          </div>
        ))}
        {days.map((d, i) => (
          <motion.div
            key={`s1-${d}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: s(0.2 + i * 0.06), duration: s(0.4), ease: EASE }}
            className={`rounded-sm ${
              i === 2 ? "bg-brand-primary shadow-sm shadow-brand-primary/40" : "bg-slate-100"
            }`}
          />
        ))}
        {days.map((d, i) => (
          <div
            key={`s2-${d}`}
            className={`rounded-sm ${i === 0 ? "bg-brand-deep/15" : "bg-slate-100"}`}
          />
        ))}
        {days.map((d) => (
          <div key={`s3-${d}`} className="rounded-sm bg-slate-100" />
        ))}
      </div>
      <div className="rounded-md bg-brand-accent px-2 py-2">
        <p className="text-[9px] font-semibold text-brand-deep">Wed 2:30 PM, booked</p>
      </div>
    </div>
  );
}

function ConfirmCard() {
  const { s } = useAnimSpeed();
  return (
    <div className="flex h-full flex-col justify-evenly gap-2">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: s(0.2), duration: s(0.5), ease: EASE }}
        className="flex items-start gap-2 rounded-md bg-emerald-50 ring-1 ring-emerald-100 px-2 py-2"
      >
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none">
            <path d="M3 7l3-3h12l3 3M3 7v12h18V7M3 7l9 7 9-7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-emerald-900">Email sent</p>
          <p className="text-[9px] text-emerald-700">Confirmation + calendar invite</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: s(0.5), duration: s(0.5), ease: EASE }}
        className="flex items-start gap-2 rounded-md bg-sky-50 ring-1 ring-sky-100 px-2 py-2"
      >
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-semibold text-sky-900">SMS reminder</p>
          <p className="text-[9px] text-sky-700">24h before appointment</p>
        </div>
      </motion.div>
      <div className="flex items-center gap-1 text-[9px] font-medium text-brand-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
        No-shows down 60%
      </div>
    </div>
  );
}

function GrowthCard() {
  const { s } = useAnimSpeed();
  const bars = [25, 38, 32, 52, 48, 70, 88];
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[10px] font-semibold text-brand-ink">Booked revenue</p>
          <p className="text-[16px] font-bold text-brand-deep tabular-nums leading-none">
            $48,210
          </p>
        </div>
        <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700">
          +38%
        </span>
      </div>
      <div className="flex flex-1 items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: s(0.1 + i * 0.07), duration: s(0.6), ease: EASE }}
            className={`flex-1 rounded-sm ${
              i === bars.length - 1 ? "bg-brand-primary" : "bg-brand-deep/30"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-[8px] text-brand-muted">
        <span>Mon</span>
        <span>Sun</span>
      </div>
    </div>
  );
}

/* ---------------- icons for the rotating tab strip ---------------- */

const I = {
  capture: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.5l4.6-4.6a2 2 0 012.8 0l1.4 1.4a2 2 0 002.8 0l4.6-4.6" />
      <path d="M3 11.5V21h18v-9.5" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  ),
  reply: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 01-9 8.4l-5 1 1-4.5A8.4 8.4 0 1121 11.5z" />
    </svg>
  ),
  qualify: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  confirm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 6l-10 7L2 6" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
};

const STAGES: Stage[] = [
  {
    id: "site-open",
    label: "Presence — Open",
    sub: "Live in 72 hours",
    blurb:
      "A 5-page site that gets your business online fast. Mobile-first build, on-page SEO foundations, Google Business Profile claimed, hosting included at a flat rate.",
    bullets: [
      "5 pages: Home, Services, About, Reviews, Contact",
      "On-page SEO foundations from day one",
      "Flat monthly hosting — no surprises",
    ],
    stat: { value: "72h", label: "to live" },
    card: <FormCard />,
    icon: I.capture,
  },
  {
    id: "site-found",
    label: "Presence — Found",
    sub: "Live in 5–7 days",
    blurb:
      "Up to 8 pages with location and service coverage, structured data for AI search, and an online booking calendar so customers can book around the clock.",
    bullets: [
      "Location + service pages for AI Overviews",
      "Online booking calendar embedded",
      "Structured data for Google and AI search",
    ],
    stat: { value: "8", label: "pages covered" },
    card: <ChatReplyCard />,
    icon: I.reply,
  },
  {
    id: "site-polished",
    label: "Presence — Polished",
    sub: "Live in 7–12 days",
    blurb:
      "Up to 12 pages with a custom design pass built for your brand, a conversion-optimised landing page for your top offer, and 30 days priority support post-launch.",
    bullets: [
      "Custom design — not a template variant",
      "Conversion-optimised landing page included",
      "30 days priority post-launch support",
    ],
    stat: { value: "12", label: "pages max" },
    card: <QualifyCard />,
    icon: I.qualify,
  },
  {
    id: "growth-awake",
    label: "Growth — Awake",
    sub: "Live in 5 days",
    blurb:
      "AI chat on your site, missed-call text-back, DM auto-reply on every platform, and auto-booking onto your calendar — so no lead goes cold after hours.",
    bullets: [
      "Missed-call text-back in seconds",
      "DM auto-reply across all platforms",
      "Auto-booking to your calendar, 24/7",
    ],
    stat: { value: "24/7", label: "reception live" },
    card: <CalendarCard />,
    icon: I.book,
  },
  {
    id: "growth-climbing",
    label: "Growth — Climbing",
    sub: "Live in 10–14 days",
    blurb:
      "Everything in Awake plus a voice AI phone receptionist, ongoing local SEO, and monthly strategy calls — so you show up on Google and every call gets answered.",
    bullets: [
      "Voice AI answers, qualifies, and books calls",
      "Weekly Google Business Profile posts",
      "1–2 new SEO pages per month",
    ],
    stat: { value: "<5s", label: "first response" },
    card: <ConfirmCard />,
    icon: I.confirm,
  },
  {
    id: "growth-scale",
    label: "Growth — Scale",
    sub: "Live in 14 days",
    blurb:
      "Everything in Climbing plus Google Search Ads, Local Service Ads, and Meta Ads managed end-to-end. Every click traced through to revenue. You hold the ad accounts.",
    bullets: [
      "Google + Meta ads managed weekly",
      "2 conversion landing pages per quarter",
      "Closed-loop tracking from click to revenue",
    ],
    stat: { value: "+38%", label: "booked revenue (avg)" },
    card: <GrowthCard />,
    icon: I.growth,
  },
];

/* ---------------- top-down orbital ring (full-content tiles) ---------------- */

const TILE_W = 320;
const TILE_H = 510;
const RX = 380; // horizontal orbit radius
const RY = 170; // vertical orbit radius (squashed = top-down)

function OrbitTile({
  stage,
  index,
  active,
  setActive,
}: {
  stage: Stage;
  index: number;
  active: number;
  setActive: (i: number) => void;
}) {
  const step = (Math.PI * 2) / STAGES.length;
  let theta = (index - active) * step;
  while (theta > Math.PI) theta -= Math.PI * 2;
  while (theta < -Math.PI) theta += Math.PI * 2;

  const x = Math.sin(theta) * RX;
  const y = Math.cos(theta) * RY;
  const front = (1 + Math.cos(theta)) / 2;
  const scale = 0.4 + 0.7 * front * front;
  const opacity = 0.06 + 0.94 * Math.pow(front, 1.4);
  const blur = (1 - front) * 3.2;
  const z = Math.round(front * 100);
  const isFront = index === active;

  return (
    <motion.button
      type="button"
      onClick={() => setActive(index)}
      aria-label={`Show ${stage.label}`}
      aria-pressed={isFront}
      className="absolute left-1/2 top-[38%] cursor-pointer text-left focus:outline-none"
      style={{
        width: TILE_W,
        height: TILE_H,
        marginLeft: -TILE_W / 2,
        marginTop: -TILE_H / 2,
        zIndex: z,
      }}
      animate={{ x, y, scale, opacity, filter: `blur(${blur}px)` }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <div
        className={`relative flex h-full flex-col rounded-3xl bg-white p-6 ring-1 transition-shadow ${
          isFront
            ? "shadow-2xl shadow-brand-deep/25 ring-brand-deep/30"
            : "shadow-md ring-slate-200/70"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
              isFront
                ? "bg-brand-deep text-white"
                : "bg-brand-accent text-brand-deep"
            }`}
          >
            <span className="block h-5 w-5">{stage.icon}</span>
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
            Rung {String(index + 1).padStart(2, "0")} / {STAGES.length}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-brand-deep leading-tight">
          {stage.label}
        </h3>
        <p className="mt-2 text-sm text-brand-muted leading-relaxed">
          {stage.blurb}
        </p>

        <div className="mt-4 h-[200px] rounded-xl bg-brand-soft p-3 ring-1 ring-slate-100">
          {stage.card}
        </div>

        <div className="mt-auto flex items-baseline gap-2 pt-4">
          <span className="text-2xl font-bold text-brand-deep tabular-nums leading-none">
            {stage.stat.value}
          </span>
          <span className="text-[11px] text-brand-muted">{stage.stat.label}</span>
        </div>

        {isFront && (
          <motion.div
            layoutId="orbit-active-glow"
            className="pointer-events-none absolute -inset-2 rounded-[2rem]"
            style={{
              background:
                "radial-gradient(closest-side, rgba(56,189,248,0.28), transparent 70%)",
              zIndex: -1,
            }}
          />
        )}
      </div>
    </motion.button>
  );
}

function Ring({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="relative h-[710px] w-full sm:h-[750px]">
      {/* elliptical orbit path */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        width={RX * 2 + 80}
        height={RY * 2 + 80}
        viewBox={`0 0 ${RX * 2 + 80} ${RY * 2 + 80}`}
      >
        <ellipse
          cx={RX + 40}
          cy={RY + 40}
          rx={RX}
          ry={RY}
          fill="none"
          stroke="rgba(15,76,129,0.16)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* central sun */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-primary/20 blur-2xl"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-brand-primary/15 blur-md"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-deep shadow-xl shadow-brand-deep/40 ring-2 ring-brand-primary/40">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-brand-primary"
              fill="currentColor"
            >
              <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* orbiting tiles */}
      {STAGES.map((s, i) => (
        <OrbitTile
          key={s.id}
          stage={s}
          index={i}
          active={active}
          setActive={setActive}
        />
      ))}

      {/* ground shadow under the front card */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-4 w-64 -translate-x-1/2 rounded-full bg-brand-deep/25 blur-xl"
        animate={{ y: RY + TILE_H / 2 - 8 }}
        transition={{ duration: 1, ease: EASE }}
      />
    </div>
  );
}

/* ---------------- main component ---------------- */

export default function ServicesFlowVisual({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.25 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { mult } = useAnimSpeed();

  useEffect(() => {
    if (!inView || paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STAGES.length);
    }, AUTOPLAY_MS * mult);
    return () => clearInterval(id);
  }, [inView, paused, mult]);

  // Sync mobile scroller position when active changes from autoplay/dots
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[active] as HTMLElement | undefined;
    if (!child) return;
    const target = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    if (Math.abs(el.scrollLeft - target) > 4) {
      el.scrollTo({ left: target, behavior: "smooth" });
    }
  }, [active]);

  // Update active when user swipes
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    for (let i = 0; i < el.children.length; i++) {
      const c = el.children[i] as HTMLElement;
      const cCenter = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cCenter - center);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    if (nearest !== active) setActive(nearest);
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-accent via-white to-brand-soft px-2 py-6 sm:px-6 sm:py-8">
        {/* Mobile: swipeable carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-[10%] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                className="flex w-[80%] shrink-0 snap-center flex-col rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-200/70"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-deep text-white">
                    <span className="block h-5 w-5">{stage.icon}</span>
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-muted">
                    Rung {String(i + 1).padStart(2, "0")} / {STAGES.length}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-deep leading-tight">
                  {stage.label}
                </h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                  {stage.blurb}
                </p>
                <div className="mt-4 h-[180px] rounded-xl bg-brand-soft p-3 ring-1 ring-slate-100">
                  {stage.card}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-brand-deep tabular-nums leading-none">
                    {stage.stat.value}
                  </span>
                  <span className="text-[11px] text-brand-muted">{stage.stat.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-wider text-brand-muted">
            Swipe to explore
          </p>
        </div>

        {/* Desktop: orbital ring */}
        <div className="hidden sm:block">
          <Ring active={active} setActive={setActive} />
        </div>

        {/* progress dots */}
        <div className="relative z-10 mt-4 sm:mt-24 flex items-center justify-center gap-1.5">
          {STAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to rung ${i + 1}`}
              aria-pressed={i === active}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
                i === active
                  ? "w-6 bg-brand-deep"
                  : "w-1.5 bg-brand-deep/20 hover:bg-brand-deep/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
