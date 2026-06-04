// lib/services.ts
//
// Single source of truth for the à la carte service catalog (v1 preview).
//
// NOTE: prices are intentionally NOT rendered anywhere in the v1 UI (per the
// "no prices shown" decision). The optional `setup`/`monthly` fields are kept on
// the type so pricing can be switched back on later from this one file without
// touching components. Each service maps to an existing deep page via `href`.

export type ServiceId =
  | "voice-ai"
  | "ai-chat-dm"
  | "reactivation"
  | "web-presence"
  | "reviews"
  | "ads";

export type ServiceCategory = "reception" | "growth" | "presence";

export type ServiceIconId =
  | "phone"
  | "chat"
  | "revive"
  | "globe"
  | "star"
  | "target";

export type Service = {
  id: ServiceId;
  name: string;
  category: ServiceCategory;
  /** One-line outcome — what the service does for the owner. */
  job: string;
  /** The hero stat for the card. `value` is the big number/word. */
  stat: { value: string; label: string };
  features: readonly string[];
  /** Existing deep page this service links to. */
  href: string;
  icon: ServiceIconId;
  /** At most one service should set this — gets the dark "highlight" card. */
  popular?: boolean;
  // Pricing exists in the model but is intentionally unused in v1 cards.
  setup?: number;
  monthly?: number;
  monthlyNote?: string;
};

export const services: readonly Service[] = [
  {
    id: "voice-ai",
    name: "Voice AI Receptionist",
    category: "reception",
    job: "Answers every call, qualifies the job, and books it — 24/7.",
    stat: { value: "<30s", label: "to pick up, day or night" },
    features: [
      "Answers inbound calls 24/7, including nights and weekends",
      "Qualifies the lead and books straight onto your calendar",
      "Missed-call text-back the instant a call slips through",
      "Every call and contact synced into your CRM",
    ],
    href: "/ai-receptionist",
    icon: "phone",
    popular: true,
  },
  {
    id: "ai-chat-dm",
    name: "AI Chat & DM Agent",
    category: "reception",
    job: "Replies on your site and every social DM in seconds, and books the lead.",
    stat: { value: "5 channels", label: "one inbox, instant replies" },
    features: [
      "Web chat that answers and books while visitors are still on your site",
      "Auto-reply on Facebook, Instagram, WhatsApp, and Google Business",
      "One qualification flow across every channel",
      "Hands off to you the moment something needs a human",
    ],
    href: "/ai-receptionist",
    icon: "chat",
  },
  {
    id: "reactivation",
    name: "Database Reactivation",
    category: "growth",
    job: "Wakes up cold leads already sitting in your CRM and books the ready ones.",
    stat: { value: "$0", label: "new ad spend to book them" },
    features: [
      "Re-opens conversations with old, cold leads automatically",
      "Qualifies real interest before it reaches you",
      "Books the ready ones straight onto your calendar",
      "Turns a dormant list into this month's revenue",
    ],
    href: "/database-reactivation",
    icon: "revive",
  },
  {
    id: "web-presence",
    name: "Local SEO & Web Presence",
    category: "presence",
    job: "A fast site that gets you found on Google and AI search.",
    stat: { value: "5–7 days", label: "to live and discoverable" },
    features: [
      "Mobile-first site, tuned for Core Web Vitals",
      "Local SEO + Google Business Profile set up and verified",
      "Optimized for Google and AI search from day one",
      "Booking calendar and CRM-wired contact form built in",
    ],
    href: "/web-presence",
    icon: "globe",
  },
  {
    id: "reviews",
    name: "Reviews & Reputation",
    category: "growth",
    job: "Turns finished jobs into 5-star reviews automatically.",
    stat: { value: "Auto", label: "a request after every job" },
    features: [
      "Review request fires the moment a job is marked complete",
      "Asks across Google, Yelp, and Facebook",
      "Routes unhappy customers to you before they post publicly",
      "Builds the rating that wins the next search",
    ],
    href: "/reputation-manager",
    icon: "star",
  },
  {
    id: "ads",
    name: "Ad Management",
    category: "growth",
    job: "Google and Meta ads with AI follow-up that books, not just clicks.",
    stat: { value: "No markup", label: "your ad spend, your accounts" },
    features: [
      "Google and Meta campaigns built and managed for you",
      "Every click met by instant AI follow-up that books",
      "Ad spend stays on your card — no markup",
      "Closed-loop tracking from click to booked job",
    ],
    href: "/ad-management",
    icon: "target",
  },
] as const;

/** Risk-reversal shown across the catalog (per the 30-day money-back decision). */
export const GUARANTEE = "30-day money-back guarantee";
export const GUARANTEE_SHORT = "30-day money-back";
