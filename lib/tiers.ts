// lib/tiers.ts

export type Commitment = "month-to-month" | "6-months" | "6-months-seo-3-months-ads";

export type SiteTierId = "open" | "found" | "polished";
export type GrowthTierId = "awake" | "climbing" | "scale";
export type TierId = SiteTierId | GrowthTierId;

export type SiteTier = {
  id: SiteTierId;
  name: string;
  setup: number;
  monthly: number;
  liveIn: string;
  commitment: Commitment;
  tagline: string;
  stopWorryingAbout: string;
  features: readonly string[];
  checkoutUrl: string;
};

export type GrowthTier = {
  id: GrowthTierId;
  name: string;
  setup: number;
  monthly: number;
  monthlyNote?: string;
  liveIn: string;
  commitment: Commitment;
  tagline: string;
  stopWorryingAbout: string;
  features: readonly string[];
  checkoutUrl: string;
  featured?: boolean;
};

export const siteTiers: readonly SiteTier[] = [
  {
    id: "open",
    name: "Open",
    setup: 300,
    monthly: 99,
    liveIn: "72 hours",
    commitment: "month-to-month",
    tagline: "You stop worrying about existing online.",
    stopWorryingAbout: "existing online",
    features: [
      "5-page site: Home, Services, About, Reviews, Contact",
      "Mobile-first build, Core Web Vitals tuned",
      "On-page SEO foundations (titles, meta, alt text, internal links)",
      "LocalBusiness schema installed",
      "Google Business Profile claimed, verified, and baseline filled",
      "Google Search Console + Bing Webmaster Tools connected",
      "XML sitemap submitted",
      "Contact form wired into your CRM",
      "Click-to-call button on every page",
      "One payment link (Stripe or Square)",
      "Managed hosting, SSL, CDN, daily backups",
      "Domain + email forwarding",
      "1 hour of content edits per month",
      "Quarterly health check",
      "Direct line when something breaks",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_OPEN]",
  },
  {
    id: "found",
    name: "Found",
    setup: 600,
    monthly: 99,
    liveIn: "5–7 days",
    commitment: "month-to-month",
    tagline: "You stop worrying about showing up on Google and AI search.",
    stopWorryingAbout: "showing up on Google and AI search",
    features: [
      "Everything in Open",
      "Up to 8 pages (location pages, service pages, FAQ)",
      "FAQ, Review, and BreadcrumbList schema installed",
      "llms.txt installed for AI search engines",
      "Answer-first content structure for AI Overviews",
      "Author bylines for E-E-A-T signals",
      "Full Google Business Profile rebuild — categories, services, photos, opening posts",
      "Online booking calendar embedded",
      "Full checkout: Stripe + Square with invoices and deposits",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_FOUND]",
  },
  {
    id: "polished",
    name: "Polished",
    setup: 1000,
    monthly: 99,
    liveIn: "7–12 days",
    commitment: "month-to-month",
    tagline: "You stop worrying about looking like everyone else.",
    stopWorryingAbout: "looking like everyone else",
    features: [
      "Everything in Found",
      "Up to 12 pages — full location + service coverage",
      "Custom design pass — built for your brand, not a template variant",
      "1 conversion-optimized landing page for your top offer",
      "30 days priority support post-launch",
      "Awake onboarding included free if you add it within 60 days ($329 value)",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_POLISHED]",
  },
] as const;

export const growthTiers: readonly GrowthTier[] = [
  {
    id: "awake",
    name: "Awake",
    setup: 329,
    monthly: 749,
    liveIn: "5 days",
    commitment: "month-to-month",
    tagline: "You stop worrying about text, chat, and DMs going cold.",
    stopWorryingAbout: "text, chat, and DMs going cold",
    features: [
      "AI chat agent on your site, 24/7",
      "Missed-call text-back — instant SMS the moment a call is missed",
      "DM auto-reply on Facebook, Instagram, WhatsApp, and Google Business Messages",
      "Lead qualification flow customized to your business",
      "Auto-booking onto your calendar",
      "Google review request workflow (triggers on job completion)",
      "Custom dashboard: missed calls handled, DMs replied, leads booked",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_AWAKE]",
  },
  {
    id: "climbing",
    name: "Climbing",
    setup: 500,
    monthly: 1599,
    monthlyNote: "all-in (includes hosting)",
    liveIn: "10–14 days",
    commitment: "6-months",
    tagline: "You stop worrying about phone calls AND being found on Google.",
    stopWorryingAbout: "phone calls and being found on Google",
    features: [
      "Everything in Awake",
      "Voice AI 24/7 phone receptionist — answers, qualifies, books",
      "Custom branching workflows by service type, urgency, and location",
      "Appointment reminders (SMS + email)",
      "Smart routing for unhappy customers — catches negative feedback before public reviews",
      "Multi-platform review requests (Google, Yelp, Facebook)",
      "Ongoing Google Business Profile work — weekly posts, photos, Q&A management",
      "Citation cleanup + monthly consistency checks",
      "1–2 new location or service pages per month, written and indexed",
      "Ongoing technical SEO + AI-search optimization",
      "Monthly rank tracking + traffic report",
      "Monthly strategy call",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_CLIMBING]",
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    setup: 500,
    monthly: 2599,
    monthlyNote: "all-in + ad spend on your card",
    liveIn: "14 days",
    commitment: "6-months-seo-3-months-ads",
    tagline: "You stop worrying about where your next lead comes from.",
    stopWorryingAbout: "where your next lead comes from",
    features: [
      "Everything in Climbing",
      "Google Search Ads + Local Service Ads — managed, A/B tested weekly",
      "Meta Ads (Facebook + Instagram) — creative testing, audience optimization",
      "2 landing pages per quarter built to convert each campaign",
      "AI follow-up on every ad lead via SMS + email",
      "Closed-loop tracking — every click traced through to revenue",
      "Monthly performance review — CPL, CAC, booked-rate, ROAS",
      "You hold the ad accounts. Ad spend goes on your credit card, straight to Google and Meta — no markup, never touches us.",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_SCALE]",
  },
] as const;

export const allTiers = [...siteTiers, ...growthTiers] as const;

export const founding = {
  spots: 3,
  setupDiscountPct: 50,
  growthDiscountPct: 30,
  discountDurationMonths: 6,
};

export const HOSTING_FLAT = 99;
