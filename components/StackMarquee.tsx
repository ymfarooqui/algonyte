"use client";

import { motion } from "motion/react";

const Glyphs = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  sms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 01-9 8.4l-5 1 1-4.5A8.4 8.4 0 1121 11.5z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8A9 9 0 1112 21z" />
      <path d="M8 10c.5 2 2 3.5 4 4l1.5-1 2 1c-.3 1.2-1.5 2-3 2-2.8 0-6-3.2-6-6 0-1.5.8-2.7 2-3l1 2z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  messenger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.5 2 2 6 2 11c0 2.7 1.3 5.1 3.5 6.7V22l3.2-1.7c1 .3 2.1.4 3.3.4 5.5 0 10-4 10-9.7S17.5 2 12 2z" />
      <path d="M7 12l3-3 2 2 3-3 3 3" />
    </svg>
  ),
  google: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  hubspot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="14" r="5" />
      <path d="M12 9V3M12 3l3 3M12 3L9 6" />
    </svg>
  ),
  salesforce: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 14a4 4 0 014-4 5 5 0 019.5 1A4 4 0 0118 19H8a3 3 0 01-3-5z" />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M7 16c1 .5 2 .8 3 .8s2-.3 2-1-.7-1-2-1.3-2-.8-2-1.5.8-1 2-1 2 .3 3 .8" />
    </svg>
  ),
  quickbooks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9c-1 0-2 1-2 3s1 3 2 3h2v-3M15 15c1 0 2-1 2-3s-1-3-2-3h-2v3" />
    </svg>
  ),
  zapier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4.2 4.2M14.8 14.8 19 19M5 19l4.2-4.2M14.8 9.2 19 5" />
    </svg>
  ),
  twilio: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      <circle cx="15" cy="9" r="1.5" fill="currentColor" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
    </svg>
  ),
  slack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="8" height="3" rx="1.5" />
      <rect x="13" y="10" width="8" height="3" rx="1.5" />
      <rect x="10" y="3" width="3" height="8" rx="1.5" />
      <rect x="10" y="13" width="3" height="8" rx="1.5" />
    </svg>
  ),
};

const channels = [
  { label: "Phone", icon: Glyphs.phone },
  { label: "SMS", icon: Glyphs.sms },
  { label: "Web chat", icon: Glyphs.chat },
  { label: "WhatsApp", logo: "/logos/whatsapp.svg" },
  { label: "Instagram DM", logo: "/logos/instagram.svg" },
  { label: "Facebook Messenger", logo: "/logos/messenger.svg" },
  { label: "Google Business", logo: "/logos/google.svg" },
  { label: "Email", icon: Glyphs.email },
];

const tools = [
  { label: "Google Calendar", logo: "/logos/google-calendar.svg" },
  { label: "HubSpot", logo: "/logos/hubspot.svg" },
  { label: "Salesforce", logo: "/logos/salesforce.svg" },
  { label: "Stripe", logo: "/logos/stripe.svg" },
  { label: "QuickBooks", logo: "/logos/quickbooks.svg" },
  { label: "Zapier", logo: "/logos/zapier.svg" },
  { label: "Twilio", logo: "/logos/twilio.svg" },
  { label: "Slack", logo: "/logos/slack.svg" },
];

type Item = { label: string; icon?: React.ReactNode; logo?: string };

function Chip({ item, variant }: { item: Item; variant: "in" | "out" }) {
  return (
    <li
      className={`flex shrink-0 items-center gap-2.5 rounded-xl border bg-white px-4 py-2.5 text-sm font-medium ${
        variant === "in"
          ? "border-brand-deep/15 text-brand-deep"
          : "border-slate-200 text-brand-ink"
      }`}
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
          item.logo
            ? "bg-white"
            : variant === "in"
              ? "bg-brand-accent text-brand-deep"
              : "bg-brand-soft text-brand-deep"
        }`}
      >
        {item.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt=""
            aria-hidden
            className="h-5 w-5 object-contain"
          />
        ) : (
          <span className="block h-3.5 w-3.5">{item.icon}</span>
        )}
      </span>
      {item.label}
    </li>
  );
}

function Row({
  items,
  direction,
  variant,
  duration = 38,
}: {
  items: Item[];
  direction: "left" | "right";
  variant: "in" | "out";
  duration?: number;
}) {
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo = direction === "left" ? "-50%" : "0%";

  return (
    <div className="relative overflow-hidden">
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-soft to-transparent sm:w-24"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-soft to-transparent sm:w-24"
      />

      <motion.ul
        className="flex w-max gap-3"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <Chip key={`${variant}-${i}`} item={item} variant={variant} />
        ))}
      </motion.ul>
    </div>
  );
}

export default function StackMarquee() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
        <span>Channels in</span>
        <span className="h-px flex-1 bg-slate-200" />
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Row items={channels} direction="left" variant="in" duration={42} />

      <div className="flex items-center gap-3 pt-3 text-[11px] font-semibold uppercase tracking-wider text-brand-muted">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
          <path
            d="M19 12H5M11 6 5 12l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="h-px flex-1 bg-slate-200" />
        <span>Tools out</span>
      </div>
      <Row items={tools} direction="right" variant="out" duration={48} />
    </div>
  );
}
