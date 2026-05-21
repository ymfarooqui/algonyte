"use client";

import { motion } from "motion/react";
import { inView } from "@/lib/motion";
import Reveal from "@/components/Reveal";
import { useAnimSpeed } from "@/lib/useAnimSpeed";

const steps = [
  {
    n: "01",
    title: "Every inquiry, in one place",
    body: "Calls, texts, form fills, and DMs land in a single inbox the moment they come in. Nothing gets buried.",
  },
  {
    n: "02",
    title: "A reply within seconds",
    body: "An AI assistant responds in your voice, answers the common questions, and gathers the details you'd want to know.",
  },
  {
    n: "03",
    title: "Booked on your calendar",
    body: "When they're ready to move forward, the appointment drops onto your calendar. No back-and-forth, no chasing.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  const { s } = useAnimSpeed();
  return (
    <section className="section bg-brand-soft">
      <div className="container-page">
        <Reveal as="h2" className="h-section max-w-3xl">
          Every lead handled, end to end.
        </Reveal>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-5">
          <motion.div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px origin-left"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(4,120,87,0.35) 50%, transparent 50%)",
              backgroundSize: "10px 1px",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={inView}
            transition={{ duration: s(1.1), delay: s(0.5), ease: EASE }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="h-full">
              <div className="card relative h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-brand-deep">
                    Step {s.n}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-brand-deep font-semibold text-sm">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-brand-deep">
                  {s.title}
                </h3>
                <p className="mt-3 text-brand-muted leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          className="mt-14 rounded-2xl overflow-hidden ring-1 ring-brand-line shadow-deep max-w-5xl mx-auto bg-brand-soft"
          role="img"
          aria-label="Unified inbox showing leads from calls, texts, Instagram DMs, and web forms with AI replies and booked appointments"
        >
          <InboxMockup />
        </Reveal>
      </div>
    </section>
  );
}

const channelStyles: Record<string, string> = {
  Call: "bg-violet-100 text-violet-700",
  SMS: "bg-sky-100 text-sky-700",
  "Instagram DM": "bg-pink-100 text-pink-700",
  "Web form": "bg-emerald-100 text-emerald-700",
  Email: "bg-amber-100 text-amber-700",
};

const statusStyles: Record<string, string> = {
  New: "bg-rose-50 text-rose-600 ring-rose-100",
  Replied: "bg-sky-50 text-sky-700 ring-sky-100",
  Booked: "bg-emerald-50 text-emerald-700 ring-emerald-100",
};

const rows = [
  { name: "Marcus T.", channel: "Call", preview: "Wants quote on a 16ft fence install", time: "Just now", status: "New" },
  { name: "Priya N.", channel: "SMS", preview: "Asked about Saturday availability", time: "2 min", status: "Replied" },
  { name: "Jordan B.", channel: "Instagram DM", preview: "Need pricing for full roof tear-off", time: "6 min", status: "Replied" },
  { name: "Sofia R.", channel: "Web form", preview: "Booked 3pm Thursday — driveway repair", time: "12 min", status: "Booked" },
  { name: "Aaron K.", channel: "Email", preview: "Forwarded estimate to spouse", time: "26 min", status: "Replied" },
];

function InboxMockup() {
  return (
    <div className="text-[13px] text-brand-ink">
      <div className="flex items-center justify-between border-b border-brand-line bg-brand-paper px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <span className="text-brand-deep">Inbox</span>
          <span>Pipeline</span>
          <span>Calendar</span>
        </div>
        <span className="text-xs font-medium text-slate-400">12 unread</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
        <ul className="divide-y divide-brand-line">
          {rows.map((r) => (
            <li key={r.name} className="flex items-start gap-3 px-4 py-3.5 sm:px-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-brand-deep text-xs font-bold">
                {r.name.split(" ").map((p) => p[0]).join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-brand-deep truncate">{r.name}</span>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${channelStyles[r.channel]}`}>
                    {r.channel}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-brand-muted">{r.preview}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className="text-[11px] text-slate-400">{r.time}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${statusStyles[r.status]}`}>
                  {r.status}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <aside className="hidden md:flex flex-col gap-3 border-l border-brand-line bg-brand-paper/60 p-5">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-deep">AI replying</span>
          </div>
          <div className="rounded-xl bg-white ring-1 ring-brand-line p-3.5">
            <p className="text-xs text-slate-500">To Marcus T. · Call</p>
            <p className="mt-2 leading-relaxed">
              Hey Marcus — thanks for reaching out about the 16ft fence. I&apos;ve got
              a window Thursday at 2pm or Friday at 10am for a free on-site
              estimate. Which works better?
            </p>
            <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Sending in 4s
            </div>
          </div>

          <div className="rounded-xl bg-white ring-1 ring-brand-line p-3.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-deep">Today</p>
            <ul className="mt-2 space-y-1.5 text-xs">
              <li className="flex items-center justify-between">
                <span className="text-brand-muted">Replies sent</span>
                <span className="font-semibold text-brand-ink">37</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-brand-muted">Appointments booked</span>
                <span className="font-semibold text-emerald-600">9</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-brand-muted">Avg. response time</span>
                <span className="font-semibold text-brand-ink">11s</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
