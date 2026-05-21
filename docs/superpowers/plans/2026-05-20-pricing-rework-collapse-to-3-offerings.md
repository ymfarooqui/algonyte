# Pricing Rework: Collapse to 3 Standalone Offerings — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse the existing 6-tier two-product pricing ladder (Presence: Open/Found/Polished + Growth: Awake/Climbing/Scale) down to 3 standalone offerings (Found, Awake, Climbing). Remove the founding offer entirely. All tiers month-to-month.

**Architecture:** `lib/tiers.ts` is the single source of truth for tier data — every page imports from it. Refactor by collapsing the two arrays into one, then cascade fixes outward to each consumer. Schema (JSON-LD), pricing page, marketing pages, and global components all read from this module. Test-first using vitest for the data invariants; type-check and build are the source of truth for the page rewrites.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript 6, Tailwind 4, Vitest 4. Husky + lint-staged on commit.

**Spec:** `docs/superpowers/specs/2026-05-20-pricing-rework-design.md`

**Verification commands:**
- `npm run test` — vitest run
- `npm run typecheck` — tsc --noEmit
- `npm run lint` — eslint .
- `npm run build` — next build (catches schema/runtime issues)
- `npm run dev` — local preview at http://localhost:3000

---

## Pre-flight

- [ ] **Step 0.1: Verify clean working tree**

Run: `git status`
Expected: `nothing to commit, working tree clean` (the spec doc should already be committed).

- [ ] **Step 0.2: Verify all existing tests pass before touching anything**

Run: `npm run test`
Expected: all PASS. If anything is red on `main`, stop and investigate first.

- [ ] **Step 0.3: Verify typecheck passes**

Run: `npm run typecheck`
Expected: no errors.

---

## Task 1: Rewrite the tier data model (`lib/tiers.ts`)

**Files:**
- Modify: `lib/tiers.test.ts` (rewrite tests first)
- Modify: `lib/tiers.ts` (full rewrite of types + data)

- [ ] **Step 1.1: Write the failing tests first**

Replace the entire contents of `lib/tiers.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { tiers, allTiers, HOSTING_FLAT } from "@/lib/tiers";

describe("tier data invariants", () => {
  it("has exactly 3 tiers", () => {
    expect(tiers).toHaveLength(3);
    expect(allTiers).toHaveLength(3);
  });

  it("tier ids are found, awake, climbing in that order", () => {
    expect(tiers.map((t) => t.id)).toEqual(["found", "awake", "climbing"]);
  });

  it("Found uses the flat hosting price", () => {
    const found = tiers.find((t) => t.id === "found");
    expect(found?.monthly).toBe(HOSTING_FLAT);
  });

  it("monthly prices ladder up: Found < Awake < Climbing", () => {
    const found = tiers.find((t) => t.id === "found")!;
    const awake = tiers.find((t) => t.id === "awake")!;
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(found.monthly).toBeLessThan(awake.monthly);
    expect(awake.monthly).toBeLessThan(climbing.monthly);
  });

  it("every tier is month-to-month", () => {
    for (const t of tiers) {
      expect(t.commitment).toBe("month-to-month");
    }
  });

  it("every tier has a unique id and a non-empty name", () => {
    const ids = tiers.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of tiers) {
      expect(t.name.length).toBeGreaterThan(0);
    }
  });

  it("every tier has at least one feature", () => {
    for (const t of tiers) {
      expect(t.features.length).toBeGreaterThan(0);
    }
  });

  it("Awake mentions custom dashboard and all DM channels", () => {
    const awake = tiers.find((t) => t.id === "awake")!;
    const featuresJoined = awake.features.join(" ").toLowerCase();
    expect(featuresJoined).toContain("custom dashboard");
    expect(featuresJoined).toContain("facebook");
    expect(featuresJoined).toContain("instagram");
    expect(featuresJoined).toContain("whatsapp");
  });

  it("Climbing is marked as featured (Most Popular)", () => {
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(climbing.featured).toBe(true);
  });

  it("Climbing has an all-in monthlyNote", () => {
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(climbing.monthlyNote).toBeDefined();
    expect(climbing.monthlyNote?.toLowerCase()).toContain("all-in");
  });

  it("setup prices match spec", () => {
    const byId = Object.fromEntries(tiers.map((t) => [t.id, t]));
    expect(byId.found.setup).toBe(449);
    expect(byId.awake.setup).toBe(749);
    expect(byId.climbing.setup).toBe(899);
  });

  it("monthly prices match spec", () => {
    const byId = Object.fromEntries(tiers.map((t) => [t.id, t]));
    expect(byId.found.monthly).toBe(99);
    expect(byId.awake.monthly).toBe(549);
    expect(byId.climbing.monthly).toBe(749);
  });
});
```

- [ ] **Step 1.2: Run the test to confirm it fails**

Run: `npm run test -- lib/tiers.test.ts`
Expected: FAIL with errors about `tiers` not being an export of `@/lib/tiers` (currently the exports are `siteTiers` and `growthTiers`).

- [ ] **Step 1.3: Replace `lib/tiers.ts` with the new shape**

Replace the entire file contents:

```ts
// lib/tiers.ts

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

export const allTiers = tiers;

export const HOSTING_FLAT = 99;
```

Note: `siteTiers`, `growthTiers`, `SiteTier`, `GrowthTier`, `SiteTierId`, `GrowthTierId`, and `founding` are intentionally deleted. The old `Commitment` variants `"6-months"` and `"6-months-seo-3-months-ads"` are gone.

- [ ] **Step 1.4: Run the test to confirm it passes**

Run: `npm run test -- lib/tiers.test.ts`
Expected: PASS — all 12 specs green.

- [ ] **Step 1.5: Check typecheck — broken consumers expected**

Run: `npm run typecheck`
Expected: FAIL with errors about missing `siteTiers`, `growthTiers`, `founding`, `SiteTier`, `GrowthTier` exports in many files. **Expected and will be fixed in subsequent tasks. Do NOT commit yet.**

---

## Task 2: Update JSON-LD schema (`lib/schema.ts`)

**Files:**
- Modify: `lib/schema.ts` (drop `foundingOfferSchema`, update `pricingSchema`, update 4 service schemas)

- [ ] **Step 2.1: Replace the entire contents of `lib/schema.ts`**

```ts
import { tiers, type Tier } from "./tiers";
import { siteConfig } from "./site";

function tierOffer(tier: Tier) {
  return {
    "@type": "Offer",
    name: tier.name,
    price: tier.monthly,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: tier.monthly,
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      price: tier.setup,
      priceCurrency: "USD",
      description: `One-time setup: $${tier.setup}`,
    },
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/pricing#${tier.id}`,
  };
}

export function pricingSchema() {
  const lowPrice = Math.min(...tiers.map((t) => t.monthly));
  const highPrice = Math.max(...tiers.map((t) => t.monthly));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AlgoNyte Plans",
    description:
      "Three offerings: a site that gets found, reception that never sleeps, and full management. From $99/mo to $749/mo. Month-to-month, no long-term contracts.",
    brand: { "@type": "Brand", name: "AlgoNyte" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice,
      highPrice,
      priceCurrency: "USD",
      offerCount: tiers.length,
      offers: tiers.map(tierOffer),
    },
  };
}

// foundingOfferSchema removed — founding offer no longer exists.

export function aiReceptionistServiceSchema() {
  const awake = tiers.find((t) => t.id === "awake")!;
  const climbing = tiers.find((t) => t.id === "climbing")!;
  const description =
    "AI receptionist that answers, qualifies, and books leads 24/7 — across chat, SMS, missed-call text-back, and voice. Two tiers: Awake (text/chat/DMs) and Climbing (adds voice AI + Local SEO).";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-receptionist#service`,
    serviceType: "AI Receptionist",
    name: "AI Receptionist by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: awake.monthly,
      highPrice: climbing.monthly,
      priceCurrency: "USD",
      offerCount: 2,
      offers: [awake, climbing].map(tierOffer),
    },
  };
}

export function reputationManagementServiceSchema() {
  const awake = tiers.find((t) => t.id === "awake")!;
  const climbing = tiers.find((t) => t.id === "climbing")!;
  const description =
    "Automated post-job review requests. Google-only on Awake; multi-platform (Google, Yelp, Facebook) on Climbing.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/reputation-manager#service`,
    serviceType: "Reputation Management",
    name: "Reputation Management by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: awake.monthly,
      highPrice: climbing.monthly,
      priceCurrency: "USD",
      offerCount: 2,
      offers: [awake, climbing].map(tierOffer),
    },
  };
}

export function webPresenceServiceSchema() {
  const found = tiers.find((t) => t.id === "found")!;
  const description =
    "End-to-end web presence for service businesses. Built on Found from $449 one-time, then $99/mo flat hosting forever. Live in 5–7 days. Google Business Profile setup included.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/web-presence#service`,
    serviceType: "Web Design, Hosting, and Local SEO",
    name: "Web Presence by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: tierOffer(found),
  };
}
```

Per spec: `webPresenceServiceSchema` switches from `AggregateOffer` to a single `Offer` since it now wraps a single tier.

- [ ] **Step 2.2: Re-run typecheck — schema errors should be resolved**

Run: `npm run typecheck`
Expected: `lib/schema.ts` errors gone. Still failing in other consumers — expected.

---

## Task 3: Edit `app/pricing/page.tsx`

**Files:**
- Modify: `app/pricing/page.tsx`

The current page uses the existing JSON-LD script-tag injection pattern (preserve it as-is — see the bottom of the file). All other sections need targeted edits. Read the current file first so you have full context, then apply each edit in order.

- [ ] **Step 3.1: Read the current file**

Run: `cat app/pricing/page.tsx`
Read the entire file. Make a mental map of: imports, metadata block, `commitmentLabel`, `allTiersFlat`, `typicalPaths`, `differentiators`, `CheckIcon`, `PricingPage` function (hero, wizard, at-a-glance, hosting callout, Presence section, Growth section, typical paths section, differentiators, WhyNot, FinalCTA, script tags at the bottom).

- [ ] **Step 3.2: Replace the imports**

Find:

```ts
import { siteTiers, growthTiers } from "@/lib/tiers";
```

Replace with:

```ts
import { tiers, HOSTING_FLAT } from "@/lib/tiers";
```

Also find and **remove** this import (foundingOfferSchema is being deleted):

```ts
import { pricingSchema, foundingOfferSchema } from "@/lib/schema";
```

Replace with:

```ts
import { pricingSchema } from "@/lib/schema";
```

- [ ] **Step 3.3: Update the page description meta**

Find:

```ts
const pricingDescription =
  "Two products. Six rungs. From $99/mo to $1,199/mo. Live in 72 hours to 14 days. No long-term contracts except 6 months on SEO.";
```

Replace with:

```ts
const pricingDescription =
  "Three offerings. From $99/mo to $749/mo. Live in 5 days to 2 weeks. Month-to-month. No long-term contracts.";
```

- [ ] **Step 3.4: Slim the `commitmentLabel` map**

Find:

```ts
const commitmentLabel: Record<string, string> = {
  "month-to-month": "Month-to-month",
  "6-months": "6 months",
  "6-months-seo-3-months-ads": "6 mo SEO / 3 mo ads",
};
```

Replace with:

```ts
const commitmentLabel: Record<string, string> = {
  "month-to-month": "Month-to-month",
};
```

- [ ] **Step 3.5: Delete the `allTiersFlat` and `typicalPaths` constants**

Find and **delete entirely**:

```ts
const allTiersFlat = [...siteTiers, ...growthTiers];

const typicalPaths = [
  {
    label: "Just need a site",
    ...
  },
  ...
];
```

The `typicalPaths` array spans roughly lines 43–87 of the current file. Delete the whole block.

- [ ] **Step 3.6: Update the `differentiators` array**

Find:

```ts
const differentiators = [
  "No annual contracts. 6 months only on SEO and ads",
  `$${siteTiers[0].monthly}/mo hosting forever, flat, never increases`,
  "Ad spend is yours: your card, your accounts, no markup",
  "Fast turnaround: site in 72 hours, reception in 5 days",
  'Transparent pricing: every number on this page. No "book a call to learn pricing"',
];
```

Replace with:

```ts
const differentiators = [
  "No long-term contracts. Ever.",
  `$${HOSTING_FLAT}/mo flat hosting on Found. Forever. Never increases.`,
  "Fast turnaround: Found in 5–7 days, reception in 5 days.",
  'Transparent pricing: every number on this page. No "book a call to learn pricing".',
];
```

- [ ] **Step 3.7: Update the hero copy**

Find this block (in the hero `<section>`):

```tsx
<p className="lede mt-6 max-w-2xl">
  Two products. Six rungs. One question: how far up are you ready to go?
</p>
<p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
  Every tier removes one more thing from your plate. Your business runs while you sleep.
</p>
```

Replace with:

```tsx
<p className="lede mt-6 max-w-2xl">
  A site that gets found. A team that never sleeps. Pick where you need help most.
</p>
<p className="mt-4 max-w-2xl rounded-xl border border-brand-deep/10 bg-white/60 px-5 py-4 text-brand-deep leading-relaxed">
  Every offering removes one more thing from your plate. Your business runs while you sleep.
</p>
```

- [ ] **Step 3.8: Update the wizard budget bullets**

In the start-here-wizard `<details>` block, find:

```tsx
<li>Is your budget under $500/mo, under $1,000/mo, or open to full-stack?</li>
```

Replace with:

```tsx
<li>Is your budget under $100/mo, under $600/mo, or open to full management?</li>
```

Also find:

```tsx
<li>Do you need something live in 72 hours, or can you wait a week for a fuller build?</li>
```

Replace with:

```tsx
<li>Do you need something live this week, or can you wait two weeks for a fuller build?</li>
```

Also find the wizard's closing paragraph:

```tsx
Interactive wizard coming soon. For now, browse the tiers below, or{" "}
```

Replace `tiers` with `offerings`:

```tsx
Interactive wizard coming soon. For now, browse the offerings below, or{" "}
```

- [ ] **Step 3.9: Update the at-a-glance table heading**

Find:

```tsx
<h2 className="h-section mb-8 max-w-2xl">Six tiers. Every number on the table.</h2>
```

Replace with:

```tsx
<h2 className="h-section mb-8 max-w-2xl">Three offerings. Every number on the table.</h2>
```

- [ ] **Step 3.10: Update the at-a-glance table — rename "Tier" → "Offering" and drop the Presence/Growth badge column**

In the desktop `<thead>`, find:

```tsx
<th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
  Tier
</th>
```

Replace `Tier` with `Offering`:

```tsx
<th className="text-left py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-brand-muted">
  Offering
</th>
```

In the desktop `<tbody>`, find the map iteration:

```tsx
{allTiersFlat.map((tier, i) => {
  const isGrowth = i >= siteTiers.length;
  return (
    <tr
      key={tier.id}
      ...
```

Replace with (drops `isGrowth` derivation, uses `tiers`, removes the Presence/Growth badge span):

```tsx
{tiers.map((tier) => (
  <tr
    key={tier.id}
    className={`border-b border-slate-100 last:border-0 ${
      tier.featured ? "bg-brand-accent/20" : ""
    }`}
  >
    <td className="py-3.5 px-5">
      <span className="font-medium text-brand-ink">{tier.name}</span>
    </td>
    <td className="py-3.5 px-5 text-right tabular-nums text-brand-muted">
      ${tier.setup}
    </td>
    <td className="py-3.5 px-5 text-right tabular-nums font-medium text-brand-ink">
      ${tier.monthly}/mo
      {tier.monthlyNote && (
        <span className="block text-xs font-normal text-brand-muted">
          {tier.monthlyNote}
        </span>
      )}
    </td>
    <td className="py-3.5 px-5 text-brand-muted">{tier.liveIn}</td>
    <td className="py-3.5 px-5 text-brand-muted">
      {commitmentLabel[tier.commitment]}
    </td>
  </tr>
))}
```

Note: the closing `})}` should now be just `))}`. Watch for the brace count.

Apply the same simplification to the mobile-card map (the `<div className="sm:hidden space-y-3">` block):

```tsx
{tiers.map((tier) => (
  <div key={tier.id} className="rounded-xl border border-slate-200 bg-white p-4">
    <div className="flex items-center justify-between mb-3">
      <span className="font-medium text-brand-ink">{tier.name}</span>
    </div>
    <dl className="grid grid-cols-2 gap-y-2 text-sm">
      <dt className="text-brand-muted">Setup</dt>
      <dd className="text-right tabular-nums text-brand-ink font-medium">
        ${tier.setup}
      </dd>
      <dt className="text-brand-muted">Monthly</dt>
      <dd className="text-right tabular-nums text-brand-ink font-medium">
        ${tier.monthly}/mo
        {tier.monthlyNote && (
          <span className="block text-xs font-normal text-brand-muted">
            {tier.monthlyNote}
          </span>
        )}
      </dd>
      <dt className="text-brand-muted">Live in</dt>
      <dd className="text-right text-brand-muted">{tier.liveIn}</dd>
      <dt className="text-brand-muted">Commitment</dt>
      <dd className="text-right text-brand-muted">
        {commitmentLabel[tier.commitment]}
      </dd>
    </dl>
  </div>
))}
```

- [ ] **Step 3.11: Update the hosting callout copy**

Find the `<section>` containing the hosting callout. Replace the inner copy:

```tsx
<p className="text-lg font-semibold text-brand-deep">
  ${siteTiers[0].monthly}/mo flat hosting. Forever. Never moves as you grow.
</p>
<p className="mt-3 text-brand-muted leading-relaxed max-w-2xl">
  One-time hosting price across every Presence tier. Includes SSL, daily backups, CDN,
  1 hour of edits per month, and a direct line when something breaks.
</p>
```

Replace with:

```tsx
<p className="text-lg font-semibold text-brand-deep">
  ${HOSTING_FLAT}/mo flat hosting on Found. Forever. Never moves as you grow.
</p>
<p className="mt-3 text-brand-muted leading-relaxed max-w-2xl">
  One flat hosting price on Found. Includes SSL, CDN, 1 hour of edits per month,
  and a direct line when something breaks. Climbing is all-in (hosting included).
</p>
```

- [ ] **Step 3.12: Replace the two product sections with a single offerings grid**

Find the entire Presence section (`<section id="site" className="pb-20">`) and the entire Growth section (`<section id="growth" className="pb-20">`). These are roughly lines 303–490 of the current file. Delete both sections entirely.

In their place, insert a single section that renders all three tiers. The Climbing card should use the featured (dark) treatment with the "Most Popular" badge. The Found and Awake cards use the standard light treatment.

Use this replacement (this is one section that produces three cards — Found and Awake get the light treatment; Climbing, which has `featured: true`, gets the dark treatment + badge):

```tsx
{/* Offerings grid */}
<section className="pb-20">
  <div className="container-page">
    <p className="eyebrow mb-4">Offerings</p>
    <h2 className="h-section max-w-3xl mb-10">
      Pick the offering that matches what&rsquo;s broken.
    </h2>
    <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
      {tiers.map((tier) => {
        const featured = tier.featured === true;
        return (
          <div
            key={tier.id}
            id={tier.id}
            className={`relative flex h-full flex-col rounded-2xl p-7 ${
              featured
                ? "bg-brand-deep text-brand-soft shadow-deep -translate-y-2 sm:-translate-y-4"
                : "lift-card bg-brand-soft shadow-soft"
            }`}
          >
            {featured && (
              <div className="pointer-events-none absolute -top-3 inset-x-0 flex justify-center">
                <span className="pointer-events-auto rounded-md bg-brand-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-soft">
                  Most Popular
                </span>
              </div>
            )}
            <h3
              className={`text-xl font-medium tracking-tight ${
                featured ? "text-brand-soft" : "text-brand-deep"
              }`}
            >
              {tier.name}
            </h3>
            <p
              className={`mt-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                featured ? "text-brand-soft/50" : "text-brand-deep/50"
              }`}
            >
              Stop worrying about {tier.stopWorryingAbout}.
            </p>
            <div className="mt-5 space-y-1.5">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span
                  className={`text-4xl font-medium tracking-tight tabular-nums ${
                    featured ? "text-brand-soft" : "text-brand-deep"
                  }`}
                >
                  ${tier.monthly}
                </span>
                <span
                  className={`text-sm ${
                    featured ? "text-brand-soft/60" : "text-brand-muted"
                  }`}
                >
                  /mo
                </span>
                {tier.monthlyNote && (
                  <span
                    className={`text-sm ${
                      featured ? "text-brand-soft/60" : "text-brand-muted"
                    }`}
                  >
                    {tier.monthlyNote}
                  </span>
                )}
              </div>
              {tier.setup > 0 && (
                <p
                  className={`text-sm ${
                    featured ? "text-brand-soft/60" : "text-brand-muted"
                  }`}
                >
                  + ${tier.setup} setup
                </p>
              )}
            </div>
            <p
              className={`mt-3 text-xs ${
                featured ? "text-brand-soft/60" : "text-brand-muted"
              }`}
            >
              Live in {tier.liveIn} &middot; {commitmentLabel[tier.commitment]}
            </p>

            <ul className="mt-5 mb-7 space-y-2.5 text-sm flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span
                    className={featured ? "text-brand-soft/85" : "text-brand-muted"}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={isPlaceholder(tier.checkoutUrl) ? "/contact" : tier.checkoutUrl}
              className={`${featured ? "btn-primary-featured" : "btn-primary"} w-full text-center`}
            >
              {isPlaceholder(tier.checkoutUrl) ? "Talk to us" : "Get started"}
            </a>
          </div>
        );
      })}
    </div>
  </div>
</section>
```

- [ ] **Step 3.13: Delete the entire typical paths section**

Find the section starting with `{/* Typical paths */}` and `<section className="pb-20 bg-brand-soft">`. Delete the entire `<section>...</section>` block (roughly lines 493–573 of the original file).

- [ ] **Step 3.14: Delete the founding offer script tag**

At the bottom of the file, find the three JSON-LD `<script>` tags. Delete the one that references `foundingOfferSchema`. Keep the `pricingSchema` script tag and the `breadcrumb` script tag.

The block to delete looks like:

```tsx
<script
  type="application/ld+json"
  ...={{ __html: jsonLdString(foundingOfferSchema()) }}
/>
```

(Use Edit to remove it. The exact attribute name is the standard React prop for raw HTML injection.)

- [ ] **Step 3.15: Run typecheck**

Run: `npm run typecheck`
Expected: `app/pricing/page.tsx` errors gone.

---

## Task 4: Delete the founding offer surface

**Files:**
- Delete: `app/founding/page.tsx`
- Delete: `components/sections/FoundingStrip.tsx`
- Modify: `components/sections/Hero.tsx` (remove the founding strip block)
- Modify: `components/Header.tsx` (remove the "Founding" nav link)
- Modify: `app/contact/ContactContent.tsx` (remove `isFounding` branch)
- Modify: `app/sitemap.ts` (remove `/founding` entry)
- Modify: `next.config.ts` (add `/founding` → `/pricing` 301 redirect)

- [ ] **Step 4.1: Delete the founding page file**

Run: `git rm app/founding/page.tsx`
Expected: file removed and staged for deletion.

- [ ] **Step 4.2: Delete the FoundingStrip component**

Run: `git rm components/sections/FoundingStrip.tsx`
Expected: file removed and staged for deletion.

- [ ] **Step 4.3: Confirm no other file imports FoundingStrip**

Run: `grep -rn "FoundingStrip" --include="*.tsx" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next"`
Expected: no output. If anything imports `FoundingStrip`, delete those imports and JSX references inline.

- [ ] **Step 4.4: Remove the founding promo block from the Hero component**

Edit `components/sections/Hero.tsx`. Find this block (around lines 93–123):

```tsx
<motion.div
  className="mt-8 mx-auto max-w-2xl"
  variants={reveal.fadeUp}
>
  <div className="rounded-2xl bg-brand-deep px-6 py-4 shadow-soft">
    <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
      <div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
          Founding · 3 spots
        </span>
        <span className="ml-3 text-white font-medium">
          50% off setup. 30% off Growth for 6 months.
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/contact?topic=founding"
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm text-brand-deep font-semibold hover:bg-white transition-colors whitespace-nowrap"
        >
          Apply &rarr;
        </a>
        <a
          href="/founding"
          className="text-white/80 hover:text-white underline underline-offset-4 text-sm whitespace-nowrap"
        >
          Details
        </a>
      </div>
    </div>
  </div>
</motion.div>
```

Delete it entirely. Leave the rest of the Hero component intact.

- [ ] **Step 4.5: Remove the "Founding" nav link**

Edit `components/Header.tsx`. Around line 16, find:

```tsx
{ href: "/founding", label: "Founding" },
```

Delete that array entry. Check the rest of the file for any other "/founding" reference and remove if found.

- [ ] **Step 4.6: Drop founding-aware branching from the contact page**

Edit `app/contact/ContactContent.tsx`. Locate (around lines 11, 35, 42):

```tsx
const isFounding = params.get("topic") === "founding";
```

…and the JSX branches that read `isFounding` ("Apply for a founding spot." and "where you operate, and why you want a founding spot.").

1. Delete the `const isFounding` line.
2. In the JSX, replace any ternary like `{isFounding ? "Apply for a founding spot." : "Default heading"}` with just `"Default heading"`.
3. Remove any "why you want a founding spot" copy.

Run: `grep -n "isFounding\|founding" app/contact/ContactContent.tsx`
Expected: no output.

- [ ] **Step 4.7: Remove `/founding` from the sitemap**

Edit `app/sitemap.ts`. Delete this line (around line 13):

```ts
{ path: "/founding", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-05-19" },
```

- [ ] **Step 4.8: Add the `/founding` → `/pricing` 301 redirect**

Edit `next.config.ts`. Find the `redirects()` function (lines 32–40). Append the founding redirect inside the returned array so it looks like:

```ts
async redirects() {
  return [
    {
      source: "/seo",
      destination: "/web-presence",
      permanent: true,
    },
    {
      source: "/founding",
      destination: "/pricing",
      permanent: true,
    },
  ];
},
```

- [ ] **Step 4.9: Verify no lingering founding references in app code**

Run: `grep -rn "founding\|Founding" --include="*.tsx" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next" | grep -v docs/superpowers`
Expected: at most a handful of lines (other pages still being audited in Task 8 may show).

- [ ] **Step 4.10: Run typecheck**

Run: `npm run typecheck`
Expected: founding-related errors gone. Still failing on `ProductGrid`, `web-presence`, `lead-generator` consumers.

---

## Task 5: Update `ProductGrid` component

**Files:**
- Modify: `components/sections/ProductGrid.tsx`

The component currently reads `siteTiers` and `growthTiers` and renders a 2-column overview of the two product lines. With no product split, repurpose it as a single 3-card preview.

- [ ] **Step 5.1: Confirm where ProductGrid is rendered**

Run: `grep -rn "ProductGrid" --include="*.tsx" --include="*.ts" . 2>/dev/null | grep -v node_modules | grep -v ".next"`
Expected: tells you which page(s) import it. If none, you can delete the file entirely. If some pages import it, you must keep the export.

- [ ] **Step 5.2: Rewrite `components/sections/ProductGrid.tsx` as a 3-offering preview**

Replace the entire file contents:

```tsx
import Link from "next/link";
import { tiers, HOSTING_FLAT } from "@/lib/tiers";

export default function ProductGrid() {
  return (
    <section className="bg-white pb-20">
      <div className="container-page">
        <p className="eyebrow mb-4">What we offer</p>
        <h2 className="h-section max-w-3xl mb-10">
          Three offerings. Pick the one that matches what&rsquo;s broken.
        </h2>
        <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
          {tiers.map((tier) => {
            const featured = tier.featured === true;
            return (
              <div
                key={tier.id}
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  featured
                    ? "bg-brand-deep text-brand-soft shadow-deep"
                    : "bg-brand-soft shadow-soft"
                }`}
              >
                <h3
                  className={`text-xl font-medium tracking-tight ${
                    featured ? "text-brand-soft" : "text-brand-deep"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    featured ? "text-brand-soft/70" : "text-brand-muted"
                  }`}
                >
                  {tier.tagline}
                </p>
                <div className="mt-5 mb-7">
                  <span
                    className={`text-2xl font-medium tabular-nums ${
                      featured ? "text-brand-soft" : "text-brand-deep"
                    }`}
                  >
                    ${tier.setup}
                  </span>
                  <span
                    className={`text-sm ${
                      featured ? "text-brand-soft/60" : "text-brand-muted"
                    }`}
                  >
                    {" + $"}
                    {tier.monthly}/mo
                  </span>
                </div>
                <div className="mt-auto">
                  <Link
                    href={`/pricing#${tier.id}`}
                    className={`${featured ? "btn-primary-featured" : "btn-primary"} w-full text-center`}
                  >
                    See {tier.name}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-brand-muted">
          ${HOSTING_FLAT}/mo flat hosting on Found. Climbing is all-in (hosting included).
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 5.3: Run typecheck**

Run: `npm run typecheck`
Expected: `ProductGrid.tsx` errors gone.

---

## Task 6: Update `app/web-presence/page.tsx`

**Files:**
- Modify: `app/web-presence/page.tsx`

Currently imports `siteTiers` + `growthTiers`, renders 3 Presence tier cards, and shows a "growth engine" section with Awake/Climbing/Scale teasers. Only Found exists as a Presence-style offering now.

- [ ] **Step 6.1: Read the full current file**

Run: `cat app/web-presence/page.tsx`
Identify:
- The `siteTiers` map (around line 171)
- The `growthTiers[0]`, `growthTiers[1]`, `growthTiers[2]` references (around lines 327, 353, 380)
- The "Scale" tier card (around lines 369–389)
- Hardcoded copy referencing "Open", "Found", "Polished" (around lines 40, 56)
- The page description meta (line 13)

- [ ] **Step 6.2: Update imports**

Change:

```ts
import { siteTiers, growthTiers } from "@/lib/tiers";
```

to:

```ts
import { tiers } from "@/lib/tiers";

const found = tiers.find((t) => t.id === "found")!;
const awake = tiers.find((t) => t.id === "awake")!;
const climbing = tiers.find((t) => t.id === "climbing")!;
```

- [ ] **Step 6.3: Replace the Presence-tier cards loop with a single Found card**

Find the `{siteTiers.map((tier) => { ... })}` block (around line 171). Replace the iteration with a single rendering of the Found tier. Use the same card markup as one iteration of the original map, with `tier` substituted by the `found` constant. Adjust grid classes from `md:grid-cols-3` to `max-w-md mx-auto` so a single card centers properly.

- [ ] **Step 6.4: Replace the growth-engine section**

Find the section starting near line 307 ("Add a growth engine when you're ready."). Inside it are three cards (Awake / Climbing / Scale). The Scale card (lines ~369–389, plus the "See Scale" CTA link) must be deleted entirely. Replace the remaining `growthTiers[0]` references with `awake`, and `growthTiers[1]` with `climbing`. Adjust the grid to `md:grid-cols-2`.

- [ ] **Step 6.5: Update hardcoded tier-name copy**

Find this FAQ answer (around line 40):

> "Managed hosting, SSL certificate, global CDN, daily backups, domain and email forwarding, 1 hour of content edits per month, Search Console monitoring, a quarterly health check, and a direct line when something breaks. The price is flat and identical across all three tiers: Open, Found, and Polished."

Replace with:

> "Managed hosting, SSL certificate, global CDN, daily backups, domain and email forwarding, 1 hour of content edits per month, Search Console monitoring, and a quarterly health check. Flat $99/mo on Found."

Find this FAQ answer (around line 56):

> "Open ships in 72 hours from a signed brief. Found is 5–7 days. Polished is 7–12 days because it includes a full custom design pass. We hold ourselves to these. They're public numbers."

Replace with:

> "Found is 5–7 days from a signed brief. We hold ourselves to that. It's a public number."

- [ ] **Step 6.6: Update the page description meta**

Find (around line 13):

```ts
const description =
  "End-to-end web presence for service businesses. Sites built from $299 one-time, then $99/mo flat hosting forever. Live in 72 hours to 12 days. Google Business Profile setup included.";
```

Replace with:

```ts
const description =
  "End-to-end web presence for service businesses. Found from $449 one-time, then $99/mo flat hosting forever. Live in 5–7 days. Google Business Profile setup included.";
```

- [ ] **Step 6.7: Run typecheck**

Run: `npm run typecheck`
Expected: `app/web-presence/page.tsx` errors gone.

---

## Task 7: Update `app/lead-generator/page.tsx`

**Files:**
- Modify: `app/lead-generator/page.tsx`

Scale is gone. The page was anchored on the Scale ads product. Reanchor to Climbing (voice/SMS lead capture) since that's the closest match.

- [ ] **Step 7.1: Read the full file**

Run: `cat app/lead-generator/page.tsx`
Identify: the import (line 8), `const scale` (line 10), all `scale.monthly` / `scale.name` references, the JSON-LD schema (around lines 27–60), the "Scale tier CTA card" block (around line 201).

- [ ] **Step 7.2: Swap the import and constant**

Change:

```ts
import { growthTiers } from "@/lib/tiers";
const scale = growthTiers[2];
```

to:

```ts
import { tiers } from "@/lib/tiers";
const climbing = tiers.find((t) => t.id === "climbing")!;
```

- [ ] **Step 7.3: Rewrite the page metadata**

Find:

```ts
const title = "Lead Generation for Service Businesses | Google + Meta Ads";
const description = `Paid ads on Google and Meta with AI follow-up that books appointments, not form fills. Part of Scale ($${scale.monthly.toLocaleString()}/mo + ad spend on your card). Closed-loop tracking. No markup on ad spend.`;
```

Replace with:

```ts
const title = "Lead Generation for Service Businesses | Voice + SMS Automation";
const description = `Voice AI receptionist + SMS missed-call text-back + DM auto-reply. Books appointments, not form fills. Part of Climbing ($${climbing.monthly.toLocaleString()}/mo all-in).`;
```

- [ ] **Step 7.4: Rewrite the service JSON-LD**

Find the `serviceJsonLd` object (around lines 27–60). Replace the entire object with:

```ts
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteConfig.url}/lead-generator#service`,
  serviceType: "Inbound Lead Capture and Follow-Up",
  name: `Lead Generation by AlgoNyte, ${climbing.name} tier`,
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  description:
    "Voice AI receptionist, missed-call text-back, DM auto-reply, and auto-booking. Captures every inbound lead so nothing goes cold. Part of the Climbing tier.",
  areaServed: { "@type": "Country", name: "United States" },
  offers: {
    "@type": "Offer",
    name: climbing.name,
    price: climbing.monthly,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: climbing.monthly,
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      price: climbing.setup,
      priceCurrency: "USD",
      description: `One-time setup: $${climbing.setup}`,
    },
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/pricing#climbing`,
  },
};
```

- [ ] **Step 7.5: Rewrite hardcoded ads copy**

Read the rest of `app/lead-generator/page.tsx` (lines 60 through end). For every reference to "Scale", "paid ads", "Google Ads", "Meta Ads", "ad spend", "no markup", "Local Service Ads", rewrite so the page describes Climbing's voice+SMS lead capture instead. Keep the page structure (hero, sections, FAQs, CTAs) — only the copy and the tier-CTA-card change.

The page now sells Climbing as the lead-generation product. Hook = "Every call answered, every text returned, every DM replied." Bullets = voice AI receptionist + missed-call text-back + DM auto-reply + auto-booking + appointment reminders. CTA = "See Climbing" linking to `/pricing#climbing`.

This is the most invasive step. The agent should read the entire file, write the new copy in their head, and replace section by section. If something is unclear, mark it `// REVIEW:` in a code comment rather than guessing.

- [ ] **Step 7.6: Run typecheck**

Run: `npm run typecheck`
Expected: `app/lead-generator/page.tsx` errors gone.

---

## Task 8: Update remaining tier-referencing files

**Files:**
- Modify: `app/ai-receptionist/page.tsx`
- Modify: `app/reputation-manager/page.tsx`
- Modify: `app/industries/auto-dealerships/page.tsx`
- Modify: `app/locations/chicago/page.tsx`
- Modify: `app/locations/macomb/page.tsx`
- Modify: `app/services/ServicesContent.tsx`
- Modify: `components/ServicesFlowVisual.tsx`
- Modify: `components/sections/WhyNot.tsx`

- [ ] **Step 8.1: For each file, audit and fix**

For each file in the list above:

1. `grep -n "siteTiers\|growthTiers\|Open\|Polished\|Scale\|Presence\|Growth\|founding\|Founding\|1,?199\|six rungs\|6 rungs\|two products" <filename>`
2. For every match, decide:
   - `siteTiers[N]` / `growthTiers[N]` index → replace with `tiers.find((t) => t.id === "<id>")`
   - Tier name "Open" / "Polished" → replace with "Found" or delete copy entirely
   - Tier name "Scale" → delete that copy or replace with "Climbing"
   - Price quote like "$1,199" → update to $749 (or whatever's correct for the new top-of-ladder)
   - "six rungs" / "Two products. Six rungs." framing → "Three offerings."
   - Founding-spot reference → delete
3. Apply the change.
4. Re-run the same grep to verify no matches remain.

Be careful: lowercase "growth" or "presence" may appear in unrelated copy (e.g., "growth engine", "online presence"). Only edit the structural product-line references, not the English word.

- [ ] **Step 8.2: Run typecheck after each file**

After every individual file edit, run `npm run typecheck`. Each file should knock out its own group of errors. If a single file's edits cause new errors, fix before moving on.

- [ ] **Step 8.3: Final typecheck pass**

Run: `npm run typecheck`
Expected: PASS with no errors.

- [ ] **Step 8.4: Final lint pass**

Run: `npm run lint`
Expected: PASS with no errors.

---

## Task 9: Verification — full test, build, manual preview

- [ ] **Step 9.1: Run the full test suite**

Run: `npm run test`
Expected: all tests PASS.

- [ ] **Step 9.2: Run the production build**

Run: `npm run build`
Expected: successful build. Catches issues typecheck misses — broken imports inside JSX, missing routes, JSON-LD serialization errors.

If build fails, most likely:
- A page references a deleted route (e.g., a `<Link href="/founding">` somewhere we missed)
- A schema function throws because of a `.find(...)!` returning undefined (typo in tier ID)
- A missing key in a map after we changed the data shape

- [ ] **Step 9.3: Local preview — walk through every changed page**

Run: `npm run dev` and open http://localhost:3000.

Manually verify (each page should load, look correct, and have no console errors):
- `/` — Hero promo strip is gone; ProductGrid (if rendered) shows 3 offerings
- `/pricing` — Hero copy is new; 3 offerings displayed; no typical paths section; no founding badge; at-a-glance table has 3 rows
- `/web-presence` — Single Found card; Awake + Climbing teasers (no Scale)
- `/lead-generator` — Climbing-anchored, no ads copy
- `/ai-receptionist` — Awake + Climbing references intact, prices correct
- `/reputation-manager` — Awake + Climbing references intact, prices correct
- `/industries/auto-dealerships` — no removed-tier references
- `/locations/chicago`, `/locations/macomb` — no removed-tier references
- `/services` — no removed-tier references
- `/contact?topic=founding` — no founding-mode copy
- `/founding` — should 301-redirect to `/pricing` (verify via DevTools Network tab)
- `/sitemap.xml` — `/founding` no longer present

For each page, also check the JSON-LD in the page source. Search the rendered HTML for `application/ld+json` and confirm:
- No `lowPrice: 99, highPrice: 1199` (should be `99` and `749`)
- No "AlgoNyte Founding Member" offer
- `webPresenceServiceSchema` uses a single `Offer`, not `AggregateOffer`

- [ ] **Step 9.4: Confirm clean grep for removed identifiers**

Run:

```
grep -rn "siteTiers\|growthTiers\|SiteTier\|GrowthTier\|foundingOfferSchema\|FoundingStrip\|/founding" \
  --include="*.tsx" --include="*.ts" . 2>/dev/null \
  | grep -v node_modules | grep -v ".next" | grep -v docs/superpowers
```

Expected: no output. (The `docs/superpowers/` paths are spec/plan files and can reference the old names freely.)

If there are stragglers, address them.

---

## Task 10: Docs and final commit

**Files:**
- Modify: `LAUNCH_CHECKLIST.md`
- Modify: `MIGRATION.md`
- Modify: `SEO_NEXT.md`

- [ ] **Step 10.1: Audit `LAUNCH_CHECKLIST.md`**

Run: `grep -n "Open\|Polished\|Scale\|Presence\|Growth\|founding\|Founding\|1,?199\|six rungs" LAUNCH_CHECKLIST.md`

For each match, update or delete. Common fixes: tier-by-tier launch readiness checks for Open/Polished/Scale (collapse to Found/Awake/Climbing); founding-spot launch checks (delete); price-range references.

- [ ] **Step 10.2: Add a migration note to `MIGRATION.md`**

Append a new section at the bottom:

```markdown
## 2026-05-20 — Pricing rework: collapse to 3 standalone offerings

The 6-tier "Two products, six rungs" model is replaced by 3 standalone offerings: Found, Awake, Climbing.

**Removed:** Open and Polished (Presence), Scale (Growth), the Presence/Growth product grouping, all 6-month and 3-month commitments, the founding offer (page + component + badges + nav link), the typical-paths table on /pricing.

**Renamed/restructured:** lib/tiers.ts collapses siteTiers + growthTiers into one `tiers` array; Tier types unified into a single `Tier`. TierId narrowed to `"found" | "awake" | "climbing"`. Commitment narrowed to `"month-to-month"`.

**Redirects:** /founding → /pricing (301).

**Schema:** foundingOfferSchema removed; pricingSchema low/high updated to 99 / 749; webPresenceServiceSchema switched from AggregateOffer (3 tiers) to single Offer (Found only).

**SEO impact:** /founding loses its standalone URL; consolidated into /pricing. /pricing description meta and lede rewritten. Some inbound queries for "AlgoNyte Open" or "AlgoNyte Polished" will lose specificity — accept and monitor.
```

- [ ] **Step 10.3: Audit `SEO_NEXT.md`**

Run: `grep -n "Open\|Polished\|Scale\|Presence\|Growth\|founding\|six rungs" SEO_NEXT.md`

For each match, update or delete. Founding-page SEO targets should be deleted. Keyword targets tied to "Polished" or "Scale" specifically should be redirected to Found / Climbing as appropriate.

- [ ] **Step 10.4: One final verification run**

Run all four in sequence:

```bash
npm run lint && npm run typecheck && npm run test && npm run build
```

Expected: all four PASS, in order. If anything fails, fix before committing.

- [ ] **Step 10.5: Final commit**

```bash
git add -A
git status   # review the diff one more time
```

Verify staged changes match expectations. Then:

```bash
git commit -m "$(cat <<'EOF'
Pricing rework: collapse to 3 standalone offerings

Replaces the 6-tier two-product ladder (Presence: Open/Found/Polished +
Growth: Awake/Climbing/Scale) with 3 standalone offerings: Found ($449
+ $99/mo), Awake ($749 + $549/mo), Climbing ($899 + $749/mo all-in).
All month-to-month, no long-term contracts. Founding offer removed
entirely.

Spec: docs/superpowers/specs/2026-05-20-pricing-rework-design.md

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

Expected: pre-commit hook runs lint-staged (eslint on staged files); commit succeeds.

If the pre-commit hook fails: read the error, fix the underlying issue (do not pass `--no-verify`), `git add` the fix, and create a NEW commit (do not amend).

- [ ] **Step 10.6: Confirm final state**

Run: `git log --oneline -5 && git status`
Expected: latest commit is the pricing-rework commit; working tree clean.

---

## Open questions / decisions to revisit post-launch

1. **Climbing-thin-on-SEO** (per spec): once removed page-production is missed in customer questions, consider re-adding a tangible quarterly deliverable.
2. **Lead-generator page**: rewritten to anchor on Climbing's voice/SMS capture rather than ads. If conversion underperforms, evaluate full deletion + redirect to `/climbing` or `/pricing#climbing`.
3. **`webPresenceServiceSchema` shape change**: validate with Google Rich Results Test post-deploy. If the single-Offer variant has any indexing weirdness, switch back to AggregateOffer with offerCount: 1.

---

## Plan self-review

**Spec coverage check:**
- New lineup ✓ (Task 1)
- Per-tier features ✓ (Task 1)
- Hero copy ✓ (Task 3.7)
- Meta description ✓ (Task 3.3)
- Section-by-section page changes ✓ (Tasks 3.4–3.13)
- Differentiators ✓ (Task 3.6)
- Founding offer removal across page + component + nav + redirect + sitemap ✓ (Task 4)
- ProductGrid update ✓ (Task 5)
- web-presence single-Found rewrite ✓ (Task 6)
- lead-generator rewrite ✓ (Task 7)
- ai-receptionist + reputation-manager + industries + locations + services + WhyNot + ServicesFlowVisual ✓ (Task 8)
- lib/schema.ts updates including foundingOfferSchema removal and webPresenceServiceSchema slimming ✓ (Task 2)
- lib/tiers.test.ts rewrite ✓ (Task 1)
- LAUNCH_CHECKLIST.md, MIGRATION.md, SEO_NEXT.md ✓ (Task 10)
- Full verification (lint/typecheck/test/build) ✓ (Tasks 9, 10.4)

**Placeholder scan:** No TBDs, no TODOs, no "add appropriate handling" stubs. The only `// REVIEW:` placeholder is the explicit one in Task 7.5 for lead-generator copy that the implementing agent may need a judgment call on — documented intentionally.

**Type consistency:** `tiers`, `Tier`, `TierId`, `Commitment`, `HOSTING_FLAT` used consistently across all tasks. `tier.id === "<id>"` filter form used uniformly. `monthlyNote` is optional and treated as such everywhere it's read.

**Risk acknowledgment:** The lead-generator rewrite (Task 7.5) is the highest-judgment task in the plan and the most likely to produce drift. If executing via subagent-driven-development, dispatch that task with extra context (or split it into a sub-plan).
