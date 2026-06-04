// lib/services.ts
//
// Single source of truth for the à la carte service catalog (v1 preview).
//
// NOTE: prices are intentionally NOT rendered anywhere in the v1 UI (per the
// "no prices shown" decision). The optional `setup`/`monthly` fields are kept on
// the type so pricing can be switched back on later from this one file without
// touching components.
//
// Names are deliberately outcome-led ("dollars, not bytes"): the headline sells
// the result, and `tagline` names the plain-English thing it is. `summary` is the
// "what it is" paragraph shown inline in each service section.

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
  /** Outcome-led headline — what the owner gets, in dollars-not-bytes terms. */
  name: string;
  /** Plain-English name for the thing it actually is. */
  tagline: string;
  category: ServiceCategory;
  /** One-line outcome — what the service does for the owner. */
  job: string;
  /** The "what it is" paragraph, shown inline in the service section. */
  summary: string;
  /** The hero stat for the section visual. `value` is the big number/word. */
  stat: { value: string; label: string };
  features: readonly string[];
  /** Existing deep page this service maps to (kept for sitemap/nav, not linked from the section CTA). */
  href: string;
  icon: ServiceIconId;
  /** At most one service should set this — gets the dark "highlight" visual. */
  popular?: boolean;
  // Pricing exists in the model but is intentionally unused in v1.
  setup?: number;
  monthly?: number;
  monthlyNote?: string;
};

export const services: readonly Service[] = [
  {
    id: "voice-ai",
    name: "Never Miss Another Call",
    tagline: "AI phone receptionist",
    category: "reception",
    job: "Answers every call, qualifies the job, and books it — 24/7.",
    summary:
      "An AI receptionist that answers every inbound call in under 5 seconds — nights, weekends, and holidays included. It greets the caller, answers their questions, qualifies the job, and books it straight onto your calendar, so a missed call never turns into a lost customer again.",
    stat: { value: "<5s", label: "to pick up, day or night" },
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
    name: "Reply to Every Lead in Seconds",
    tagline: "Website chat + social DM agent",
    category: "reception",
    job: "Replies on your site and every social DM in seconds, and books the lead.",
    summary:
      "One AI agent covering your website chat and every social inbox — Facebook, Instagram, WhatsApp, and Google Business. It replies in seconds while the lead is still paying attention, qualifies them with one consistent flow, and books the appointment before they move on to a competitor.",
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
    name: "Turn Old Leads Into Booked Jobs",
    tagline: "Database reactivation",
    category: "growth",
    job: "Wakes up cold leads already sitting in your CRM and books the ready ones.",
    summary:
      "You're already sitting on hundreds of leads that never closed. This wakes them up with a natural text conversation, re-qualifies the ones with real intent, and books them — turning a dead list into this month's revenue without spending a dollar on new ads.",
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
    name: "Get Found on Google & AI Search",
    tagline: "Website + local SEO",
    category: "presence",
    job: "A fast site that gets you found on Google and AI search.",
    summary:
      "A fast, mobile-first website plus the local SEO and Google Business setup that gets you found — by people searching Google and by AI assistants like ChatGPT and Perplexity. Booking and a CRM-wired contact form are built in, so the traffic you earn turns into booked jobs.",
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
    name: "Win More 5-Star Reviews",
    tagline: "Reputation engine",
    category: "growth",
    job: "Turns finished jobs into 5-star reviews automatically.",
    summary:
      "The moment a job is marked complete, this asks the customer for a review across Google, Yelp, and Facebook — and quietly routes the unhappy ones to you first. Your rating climbs on autopilot, and a higher rating is what wins the next customer's search.",
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
    name: "Ads That Book Jobs, Not Just Clicks",
    tagline: "Google & Meta ad management",
    category: "growth",
    job: "Google and Meta ads with AI follow-up that books, not just clicks.",
    summary:
      "Google and Meta campaigns built and run for you, with instant AI follow-up on every click so leads get booked instead of going cold. Your ad spend stays on your own card with no markup, and every dollar is tracked from the first click to the booked job.",
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
