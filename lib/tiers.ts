// lib/tiers.ts

// Single value today; type kept as a union so future tier commitments can be added without changing the Tier shape.
export type Commitment = "month-to-month";

export type TierId = "found" | "awake" | "climbing";

export type Tier = {
  id: TierId;
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

export const tiers: readonly Tier[] = [
  {
    id: "found",
    name: "Found",
    setup: 449,
    monthly: 99,
    liveIn: "5–7 days",
    commitment: "month-to-month",
    tagline: "You stop worrying about showing up on Google and AI search.",
    stopWorryingAbout: "showing up on Google and AI search",
    features: [
      "Up to 8 pages (location, service, FAQ)",
      "AI search optimized",
      "Mobile-first build, Core Web Vitals tuned",
      "On-page SEO foundations (titles, meta, alt text, internal links)",
      "LocalBusiness schema installed",
      "FAQ, Review, and BreadcrumbList schema",
      "Google Business Profile claimed, verified, and baseline filled",
      "Google Search Console + Bing Webmaster Tools connected",
      "XML sitemap submitted",
      "Online booking calendar embedded",
      "Contact form wired into your CRM",
      "One payment link (Stripe or Square)",
      "Managed hosting, SSL, CDN",
      "Domain + email forwarding",
      "1 hour of content edits per month",
      "Quarterly health check",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_FOUND]",
  },
  {
    id: "awake",
    name: "Awake",
    setup: 749,
    monthly: 549,
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
    setup: 899,
    monthly: 749,
    monthlyNote: "all-in (includes hosting)",
    liveIn: "10–14 days",
    commitment: "month-to-month",
    tagline: "You stop worrying about phone calls AND being found on Google.",
    stopWorryingAbout: "phone calls and being found on Google",
    features: [
      "Everything in Awake",
      "Voice AI 24/7 phone receptionist — answers, qualifies, books",
      "Custom branching workflows by service type, urgency, and location",
      "Appointment reminders (SMS + email)",
      "Multi-platform review requests (Google, Yelp, Facebook)",
      "Ongoing Google Business Profile work — 2 posts a month, Q&A management",
      "Ongoing technical SEO + AI-search optimization",
      "Monthly rank tracking + traffic report",
      "Quarterly strategy call",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_CLIMBING]",
    featured: true,
  },
] as const;

export const HOSTING_FLAT = 99;
