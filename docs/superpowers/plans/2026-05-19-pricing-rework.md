# Algonyte Pricing Rework Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the old 5-product pricing surface (Web Presence Foundation/Growth/Command + AI Receptionist Starter/Growth/Pro AI + Lead Generator + Local SEO + Reputation Manager) with a unified 6-tier ladder (Open, Found, Polished, Awake, Climbing, Scale) across every customer-facing surface, schema, and SEO file.

**Architecture:** Single source of truth in `lib/constants.ts` exporting two typed arrays (`siteTiers`, `growthTiers`). All pricing pages and schema markup import from there. Existing product pages (`/ai-receptionist`, `/lead-generator`, `/reputation-manager`) are repurposed as topical SEO landing pages that point at the new tiers — kept for backlink and indexed-URL value, not deleted.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind, Vitest, JSON-LD schema, MDX (insights), GoHighLevel checkout URLs.

**Final tier map:**

| Tier | Setup | Monthly | Live in | Commitment |
|---|---|---|---|---|
| Open | $300 | $99 | 72 hours | Month-to-month |
| Found | $600 | $99 | 5–7 days | Month-to-month |
| Polished | $1,000 | $99 | 7–12 days | Month-to-month |
| Awake | $329 | $749 | 5 days | Month-to-month |
| Climbing | $500 | $1,599 all-in | 10–14 days | 6 months |
| Scale | $500 | $2,599 + ad spend (customer's card) | 14 days | 6 mo SEO / 3 mo ads |

---

## File Structure

**New files:**
- `docs/superpowers/plans/2026-05-19-pricing-rework.md` (this plan)
- `lib/tiers.ts` (split out from constants for clarity — types + data for site/growth tiers)
- `lib/schema.ts` (JSON-LD builders that consume tier data)

**Modified — data layer:**
- `lib/constants.ts` — remove old `plans` array, re-export from `lib/tiers.ts`

**Modified — primary pricing surfaces:**
- `app/pricing/page.tsx`
- `app/web-presence/page.tsx`

**Modified — product detail pages (repurposed):**
- `app/ai-receptionist/page.tsx`
- `app/lead-generator/page.tsx`
- `app/reputation-manager/page.tsx`

**Modified — marketing surfaces:**
- `app/page.tsx` (home)
- `app/services/ServicesContent.tsx`
- `app/founding/page.tsx`
- `components/sections/Hero.tsx`
- `components/sections/PricingPreview.tsx`
- `components/sections/ProductGrid.tsx`
- `components/sections/WhyNot.tsx`
- `components/ServicesFlowVisual.tsx`

**Modified — SEO landing pages:**
- `app/locations/chicago/page.tsx`
- `app/locations/macomb/page.tsx`
- `app/industries/auto-dealerships/page.tsx`

**Modified — discovery / metadata:**
- `app/layout.tsx` (root metadata, OG)
- `app/sitemap.ts`
- `app/opengraph-image.tsx`
- `public/llms.txt`
- `next.config.ts` (add redirects if needed)

**Modified — docs:**
- `LAUNCH_CHECKLIST.md`
- `SEO_NEXT.md`
- `MIGRATION.md`

**Test files:**
- `__tests__/tiers.test.ts` (new — schema validation, price invariants)
- Existing schema validation script in `scripts/` (verify it still passes)

---

## Phase 0: Setup + Branch Verification

### Task 0.1: Verify clean working tree and run baseline tests

**Files:** none (verification only)

- [ ] **Step 1: Confirm clean working tree**

Run: `git status`
Expected: `nothing to commit, working tree clean` on branch `claude/youthful-bartik-87a7de`

- [ ] **Step 2: Run baseline build to confirm starting state is green**

Run: `npm run build`
Expected: build succeeds, no TypeScript errors.

- [ ] **Step 3: Run baseline tests**

Run: `npm test -- --run`
Expected: all tests pass. Note the pass count for comparison after the rework.

- [ ] **Step 4: Run schema validation**

Run: `npm run validate:schema` (if script exists; otherwise `npm run lint`)
Expected: passes.

---

## Phase 1: Data Model — Single Source of Truth

The whole rework hinges on `lib/tiers.ts` being correct. Everything else imports from it. Do this first and lock it down with tests.

### Task 1.1: Create `lib/tiers.ts` with typed tier data

**Files:**
- Create: `lib/tiers.ts`

- [ ] **Step 1: Write the file**

```typescript
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
      "You hold the ad accounts. Ad spend goes on your credit card, straight to Google and Meta — never touches us, never has a markup.",
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
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add lib/tiers.ts
git commit -m "feat(tiers): add unified tier data source for pricing rework"
```

### Task 1.2: Write tier invariant tests

**Files:**
- Create: `__tests__/tiers.test.ts`

- [ ] **Step 1: Write the test file**

```typescript
// __tests__/tiers.test.ts
import { describe, it, expect } from "vitest";
import { siteTiers, growthTiers, allTiers, HOSTING_FLAT } from "@/lib/tiers";

describe("tier data invariants", () => {
  it("has exactly 3 site tiers and 3 growth tiers", () => {
    expect(siteTiers).toHaveLength(3);
    expect(growthTiers).toHaveLength(3);
    expect(allTiers).toHaveLength(6);
  });

  it("all site tiers use the flat hosting price", () => {
    for (const tier of siteTiers) {
      expect(tier.monthly).toBe(HOSTING_FLAT);
    }
  });

  it("site setup fees ladder up: Open < Found < Polished", () => {
    const [open, found, polished] = siteTiers;
    expect(open.setup).toBeLessThan(found.setup);
    expect(found.setup).toBeLessThan(polished.setup);
  });

  it("growth monthly prices ladder up: Awake < Climbing < Scale", () => {
    const [awake, climbing, scale] = growthTiers;
    expect(awake.monthly).toBeLessThan(climbing.monthly);
    expect(climbing.monthly).toBeLessThan(scale.monthly);
  });

  it("every tier has a unique id and a non-empty name", () => {
    const ids = allTiers.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of allTiers) {
      expect(t.name.length).toBeGreaterThan(0);
    }
  });

  it("every tier has at least one feature", () => {
    for (const t of allTiers) {
      expect(t.features.length).toBeGreaterThan(0);
    }
  });

  it("Awake explicitly mentions custom dashboard and all DM channels", () => {
    const awake = growthTiers[0];
    const featuresJoined = awake.features.join(" ").toLowerCase();
    expect(featuresJoined).toContain("custom dashboard");
    expect(featuresJoined).toContain("facebook");
    expect(featuresJoined).toContain("instagram");
    expect(featuresJoined).toContain("whatsapp");
  });

  it("Scale explicitly states ad spend goes on the customer's card with no markup", () => {
    const scale = growthTiers[2];
    const text = scale.features.join(" ").toLowerCase();
    expect(text).toContain("ad spend");
    expect(text).toContain("your credit card");
    expect(text).toContain("no markup");
  });

  it("Climbing requires 6-month commitment, Awake does not", () => {
    const awake = growthTiers[0];
    const climbing = growthTiers[1];
    expect(awake.commitment).toBe("month-to-month");
    expect(climbing.commitment).toBe("6-months");
  });
});
```

- [ ] **Step 2: Run the tests**

Run: `npm test -- __tests__/tiers.test.ts --run`
Expected: all 9 tests pass.

- [ ] **Step 3: Commit**

```bash
git add __tests__/tiers.test.ts
git commit -m "test(tiers): lock pricing/tier invariants"
```

### Task 1.3: Migrate `lib/constants.ts` away from old `plans` array

**Files:**
- Modify: `lib/constants.ts`

- [ ] **Step 1: Replace the file contents**

Read the current file first, then write:

```typescript
// lib/constants.ts
export const isPlaceholder = (value: string | undefined): boolean =>
  !value || value.startsWith("[PLACEHOLDER");

export const calendarSrc =
  "https://api.leadconnectorhq.com/widget/booking/DWiAX3kYnns8mm0iqwMS";

// Re-export tiers from the canonical source.
export { siteTiers, growthTiers, allTiers, founding, HOSTING_FLAT } from "./tiers";
export type { SiteTier, GrowthTier, TierId, SiteTierId, GrowthTierId, Commitment } from "./tiers";
```

- [ ] **Step 2: Run typecheck — expect breakage**

Run: `npx tsc --noEmit`
Expected: TypeScript errors in every file that imported `plans` from `lib/constants`. Note them — they map to the files you'll fix in Phase 2.

- [ ] **Step 3: Do NOT commit yet**

The build is intentionally broken between Task 1.3 and Phase 2. Phase 2 fixes every consumer. Move on.

---

## Phase 2: Primary Pricing Surface — `/pricing` Page

### Task 2.1: Rewrite `app/pricing/page.tsx` against new tier data

**Files:**
- Modify: `app/pricing/page.tsx`

This file is the canonical pricing display. Replace it end-to-end.

- [ ] **Step 1: Replace the page**

The new page should:
1. Render the "Start here" decision wizard (3 questions) at the top — for now, render it as a static `<details>` block; full interactivity is a follow-on task.
2. Render the at-a-glance table from the plan header.
3. Render Site tiers (Open / Found / Polished) in a row of 3 cards.
4. Render Growth tiers (Awake / Climbing / Scale) in a row of 3 cards.
5. Render the "typical paths" table.
6. Render the "what makes this different" callout.
7. Render the Founding Member section (or link to `/founding`).
8. Export JSON-LD via the `lib/schema.ts` builders.

Pull all numbers, names, features from `lib/tiers.ts` — no hardcoded prices.

Key copy blocks (exact strings to use):

- Page H1: "Pricing"
- Subtitle: "Two products. Six rungs. One question: how far up are you ready to go?"
- Brand frame paragraph (above tiers): *"Every tier removes one more thing from your plate. Your business runs while you sleep."*
- Hosting callout: *"$99/mo flat hosting. Forever. Never moves as you grow."*
- Ad-spend callout (on Scale card): *"Ad spend goes on your credit card, straight to Google and Meta — never touches us, never has a markup."*
- Commitment line on Climbing: *"6 months. SEO compounds — anything shorter is throwing money at it."*

Do NOT use the strings "GBP", "Foundation", "Command", "Pro AI", "Lead Generator", "Local SEO Program", "Reputation Manager", "Starter" (as a tier name), or "build the script with you on a live call" anywhere.

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit -p tsconfig.json`
Expected: no errors related to `app/pricing/page.tsx`.

- [ ] **Step 3: Verify no stale prices remain in this file**

Run: `grep -nE "549|749|1299|279|799|275|GBP|Foundation|Command|Pro AI|Starter" app/pricing/page.tsx`
Expected: no matches.

- [ ] **Step 4: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "feat(pricing): rewrite /pricing against new 6-tier ladder"
```

### Task 2.2: Add JSON-LD schema builders in `lib/schema.ts`

**Files:**
- Create: `lib/schema.ts`

- [ ] **Step 1: Write the file**

```typescript
// lib/schema.ts
import { siteTiers, growthTiers, type SiteTier, type GrowthTier } from "./tiers";
import { siteConfig } from "./site";

function tierOffer(tier: SiteTier | GrowthTier) {
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
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Algonyte Plans",
    description:
      "Two products — Site (web build + flat $99/mo hosting) and Growth (monthly retainers for reception, SEO, and ads). Six rungs from $99/mo to $2,599/mo.",
    brand: { "@type": "Brand", name: "Algonyte" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 99,
      highPrice: 2599,
      priceCurrency: "USD",
      offerCount: siteTiers.length + growthTiers.length,
      offers: [...siteTiers, ...growthTiers].map(tierOffer),
    },
  };
}

export function foundingOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Algonyte Founding Member",
    description:
      "3 founding spots. 50% off setup. 30% off any Growth tier for 6 months. After 6 months reverts to standard pricing.",
    availability: "https://schema.org/LimitedAvailability",
    inventoryLevel: { "@type": "QuantitativeValue", value: 3 },
    url: `${siteConfig.url}/founding`,
  };
}
```

- [ ] **Step 2: Wire schema into `app/pricing/page.tsx`**

In the rewritten pricing page, render a `<script type="application/ld+json">` block using `JSON.stringify(pricingSchema())`.

- [ ] **Step 3: Run typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Run schema validation**

Run: `npm run validate:schema` (if the script exists, per memory `project_ci_testing.md`)
Expected: passes — no invalid Offer or AggregateOffer.

- [ ] **Step 5: Commit**

```bash
git add lib/schema.ts app/pricing/page.tsx
git commit -m "feat(schema): regenerate JSON-LD pricing schema from tier data"
```

---

## Phase 3: Web Presence Page

`app/web-presence/page.tsx` currently defines its own tier array inline. Replace with a thin page that imports `siteTiers` and renders site-only content.

### Task 3.1: Rewrite `app/web-presence/page.tsx`

**Files:**
- Modify: `app/web-presence/page.tsx`

- [ ] **Step 1: Replace the page**

Requirements:
- Import `siteTiers` from `lib/tiers.ts`.
- H1: "Web Presence" or "Algonyte Site" (whichever the user prefers — default to "Web Presence" since that's the live URL and existing backlink target).
- Sub-headline emphasizing "$99/mo flat hosting forever" and "live in 72 hours to 12 days."
- Render the three site tiers as cards.
- Remove every reference to Foundation/Growth/Command.
- Replace every "GBP" with "Google Business Profile".
- Update Service-schema JSON-LD via `lib/schema.ts`.

Do NOT mention reception widgets, AI receptionist, Local SEO retainer, or anything that belongs to Growth tiers. Web Presence is now strictly Site (Open/Found/Polished).

- [ ] **Step 2: Verify**

Run: `grep -nE "Foundation|Command|GBP|549|279|799" app/web-presence/page.tsx`
Expected: no matches.

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/web-presence/page.tsx
git commit -m "feat(web-presence): rewrite against siteTiers; remove old naming and GBP acronym"
```

---

## Phase 4: Repurpose Product Detail Pages

These pages have indexed URLs, backlinks, and sitemap entries. Repurpose them as topical SEO landing pages that point to the new tiers — do NOT delete.

### Task 4.1: Rewrite `app/ai-receptionist/page.tsx`

**Files:**
- Modify: `app/ai-receptionist/page.tsx`

- [ ] **Step 1: Rewrite the page**

Content brief:
- H1: "AI Receptionist for Service Businesses"
- Opening paragraph: what an AI receptionist is, why service businesses use one, what Algonyte's looks like.
- Two clear CTAs:
  - "Just text and chat? → Awake ($749/mo, live in 5 days)" → links to `/pricing#awake`
  - "Voice + everything? → Climbing ($1,599/mo, live in 10–14 days)" → links to `/pricing#climbing`
- Compare-to-Podium/Smith.ai/Goodcall block (use the table from the marketing analysis).
- Remove every "Live in 5–7 days" mention; replace with the new tier-specific timelines.
- Remove every reference to "Starter," "Growth," "Pro AI" as standalone tiers.

- [ ] **Step 2: Verify**

Run: `grep -nE "Starter|Pro AI|549|749|1299|5-7 days" app/ai-receptionist/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/ai-receptionist/page.tsx
git commit -m "feat(ai-receptionist): repurpose as topical landing page pointing to Awake/Climbing"
```

### Task 4.2: Rewrite `app/lead-generator/page.tsx`

**Files:**
- Modify: `app/lead-generator/page.tsx`

- [ ] **Step 1: Rewrite the page**

Content brief:
- H1: "Lead Generation for Service Businesses"
- Explain paid ads + AI follow-up as a category.
- Single CTA: "→ Scale ($2,599/mo + ad spend on your card)" → links to `/pricing#scale`.
- Explicitly state: "Ad spend goes on your credit card, directly to Google and Meta. We don't mark it up. We don't hold your account."
- Remove the standalone "$1,500/mo Lead Generator" pricing.

- [ ] **Step 2: Verify**

Run: `grep -nE "Lead Generator|1500|1,500|3-month commitment" app/lead-generator/page.tsx`
Expected: only the H1/title matches "Lead Generator"; no pricing matches.

- [ ] **Step 3: Commit**

```bash
git add app/lead-generator/page.tsx
git commit -m "feat(lead-generator): repurpose as topical landing page pointing to Scale"
```

### Task 4.3: Rewrite `app/reputation-manager/page.tsx`

**Files:**
- Modify: `app/reputation-manager/page.tsx`

- [ ] **Step 1: Rewrite the page**

Content brief:
- H1: "Reputation Management for Service Businesses"
- Explain automated review collection + smart routing for unhappy customers.
- Note that reputation management is **included** in Awake (single-platform — Google) and **expanded** in Climbing (multi-platform — Google + Yelp + Facebook + smart routing).
- Two CTAs: → `/pricing#awake` and → `/pricing#climbing`.
- Remove the standalone "$299/mo Reputation Manager" pricing.

- [ ] **Step 2: Verify**

Run: `grep -nE "\\$299|standalone" app/reputation-manager/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/reputation-manager/page.tsx
git commit -m "feat(reputation-manager): repurpose as topical page; reputation now included in Awake/Climbing"
```

---

## Phase 5: Home + Marketing Surfaces

### Task 5.1: Update home page hero and product grid

**Files:**
- Modify: `components/sections/Hero.tsx`
- Modify: `components/sections/ProductGrid.tsx`
- Modify: `components/sections/PricingPreview.tsx`
- Modify: `components/sections/WhyNot.tsx`

- [ ] **Step 1: Hero — keep brand line, update product mention**

In `components/sections/Hero.tsx`:
- Keep: "Your business should run while you sleep."
- Update any specific product mention to reference the new ladder.
- Remove any reference to "Live in 5–7 days" — replace with "Site live in 72 hours. Reception in 5 days."

- [ ] **Step 2: ProductGrid — replace 4-product grid with 2-product framing**

Replace the current 4-product grid (AI Receptionist / Lead Generator / Reputation Manager / Web Presence) with a 2-product framing:
- **Site** (Open / Found / Polished) → `/web-presence`
- **Growth** (Awake / Climbing / Scale) → `/pricing#growth`

Remove "GBP" wherever it appears. Remove "Live in 5–7 days" — make it tier-specific.

- [ ] **Step 3: PricingPreview — pull from `siteTiers` and `growthTiers`**

Replace any hardcoded price in `components/sections/PricingPreview.tsx` with imports from `lib/tiers.ts`. Show the three site tiers + three growth tiers, or the two cheapest of each as a teaser.

- [ ] **Step 4: WhyNot — update comparison language**

Update the "why not [competitor]" section to use the new competitor framing from the marketing analysis (Podium ~$498 annual contract, Scorpion $2,500–$8,000+, etc.) and the new Algonyte prices.

- [ ] **Step 5: Verify**

Run: `grep -rnE "549|749|1299|279|799|Foundation|Command|Pro AI|GBP|Lead Generator" components/sections/`
Expected: no matches.

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add components/sections/
git commit -m "feat(sections): rewrite hero/product-grid/pricing-preview/why-not against new tier ladder"
```

### Task 5.2: Update `app/services/ServicesContent.tsx` and `ServicesFlowVisual.tsx`

**Files:**
- Modify: `app/services/ServicesContent.tsx`
- Modify: `components/ServicesFlowVisual.tsx`

- [ ] **Step 1: ServicesContent — collapse 6 services to 2 products**

Replace the current 6-card services list with the 2-product framing:
- Site (with three rungs)
- Growth (with three rungs)

Each rung links to the relevant anchor on `/pricing`.

- [ ] **Step 2: ServicesFlowVisual — update labels**

Update any labels in the SVG/diagram that reference old product names. Replace with "Site" and "Growth" or the specific tier names.

- [ ] **Step 3: Verify**

Run: `grep -nE "AI Receptionist|Web Presence|Lead Generator|Local SEO Program|Reputation Manager" app/services/ServicesContent.tsx components/ServicesFlowVisual.tsx`
Expected: at most one match for "Web Presence" as a section label is acceptable; no others.

- [ ] **Step 4: Commit**

```bash
git add app/services/ components/ServicesFlowVisual.tsx
git commit -m "feat(services): collapse to Site + Growth framing"
```

### Task 5.3: Update `app/founding/page.tsx`

**Files:**
- Modify: `app/founding/page.tsx`

- [ ] **Step 1: Rewrite founding page**

Requirements:
- 3 spots only.
- 50% off setup on any tier: Open $150, Found $300, Polished $500, Awake $165 (rounded from $164.50), Climbing/Scale $250.
- 30% off any Growth tier for 6 months: Awake $524.30/mo, Climbing $1,119.30/mo, Scale $1,819.30/mo + ad spend.
- After 6 months, reverts to standard pricing.
- **Remove "white-glove onboarding" and "we build the script with you on a live call" entirely.** Replace with: *"Fast turn-around. 15-minute intake form. Awake live in 5 days, Climbing in 10–14, Scale in 14."*
- In exchange: honest feedback, one testimonial, optional reference call.

Update the Offer JSON-LD to reflect the new founding numbers via `lib/schema.ts:foundingOfferSchema()`.

- [ ] **Step 2: Verify**

Run: `grep -nE "white-glove|live call|build the script|275|549" app/founding/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/founding/page.tsx
git commit -m "feat(founding): rewrite for new tier ladder; remove live-call build language"
```

---

## Phase 6: SEO Landing Pages

These pages drive real organic traffic per the `seo_build_roadmap` memory. Update carefully — do not drop keyword density.

### Task 6.1: Update `app/locations/chicago/page.tsx`

**Files:**
- Modify: `app/locations/chicago/page.tsx`

- [ ] **Step 1: Update tier mentions**

Replace every reference to old tier names (Starter, Growth, Pro AI, Foundation, etc.) with the new ones (Awake, Climbing, Scale, Open, Found, Polished). Replace every price.

Specific lines per audit: 71, 197, 216 — confirm with a grep before editing.

- [ ] **Step 2: Verify**

Run: `grep -nE "549|749|1299|Starter|Pro AI|Foundation|Command|Lead Generator" app/locations/chicago/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/locations/chicago/page.tsx
git commit -m "feat(locations/chicago): update tier names and prices"
```

### Task 6.2: Update `app/locations/macomb/page.tsx`

**Files:**
- Modify: `app/locations/macomb/page.tsx`

- [ ] **Step 1: Update tier mentions**

Same protocol as Chicago. Specific lines: 189.

- [ ] **Step 2: Verify**

Run: `grep -nE "549|749|1299|Starter|Pro AI|Foundation|Command|Lead Generator" app/locations/macomb/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/locations/macomb/page.tsx
git commit -m "feat(locations/macomb): update tier names and prices"
```

### Task 6.3: Update `app/industries/auto-dealerships/page.tsx`

**Files:**
- Modify: `app/industries/auto-dealerships/page.tsx`

- [ ] **Step 1: Update tier mentions**

Specific lines per audit: 72, 232–236, 253, 270–272.

- [ ] **Step 2: Verify**

Run: `grep -nE "549|749|1299|Starter|Pro AI|Foundation|Command|Lead Generator" app/industries/auto-dealerships/page.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/industries/auto-dealerships/page.tsx
git commit -m "feat(industries/auto-dealerships): update tier names and prices"
```

---

## Phase 7: Discovery / Metadata / Schema

### Task 7.1: Rewrite `public/llms.txt`

**Files:**
- Modify: `public/llms.txt`

- [ ] **Step 1: Replace the file content**

```text
# Algonyte

> Algonyte builds AI-powered web presence, reception, and lead-gen for service businesses across the Midwest. Two products: Site (build + $99/mo flat hosting forever) and Growth (monthly retainers for reception, SEO, and ads). Plans start at $99/mo with $300 setup.

Algonyte is a small AI automation studio based in the Chicago and Detroit metros. The product line is two things — a Site product (one-time build + flat $99/mo hosting) and a Growth product (monthly retainer that handles reception, SEO, and ads). Together they cover everything a service business needs to be online, found, and answered without the owner managing it.

The stack runs on Next.js for sites, GoHighLevel for CRM and workflows, OpenAI for conversational responses, and Twilio for voice and SMS. The business owns its accounts and its data.

We serve service businesses (auto, home services, trades, professional services) primarily in Illinois and Michigan. The first real client, Car Hub in Macomb, MI, booked 10 jobs in its first week.

## Core pages

- [Home](https://algonyte.com/): What we do, who it's for, what it costs.
- [Pricing](https://algonyte.com/pricing): Two products, six rungs. From $99/mo to $2,599/mo + ad spend.
- [Web Presence](https://algonyte.com/web-presence): Site product — Open ($300 + $99/mo), Found ($600 + $99/mo), Polished ($1,000 + $99/mo).
- [AI Receptionist](https://algonyte.com/ai-receptionist): Topical landing for reception buyers — points to Awake and Climbing.
- [Lead Generator](https://algonyte.com/lead-generator): Topical landing for paid-ads buyers — points to Scale.
- [Reputation Manager](https://algonyte.com/reputation-manager): Topical landing — reputation included in Awake (Google) and Climbing (multi-platform).
- [Founding Member Program](https://algonyte.com/founding): 3 spots. 50% off setup. 30% off Growth tiers for 6 months.
- [Services overview](https://algonyte.com/services): Two products with three rungs each.
- [Book a walkthrough](https://algonyte.com/book): Free 30-minute consult.
- [About](https://algonyte.com/about): Company background.
- [Contact](https://algonyte.com/contact): Direct contact form.

## Tiers

### Site (one-time + $99/mo hosting forever)

| Tier | Setup | Monthly | Live in |
|---|---|---|---|
| Open | $300 | $99 | 72 hours |
| Found | $600 | $99 | 5–7 days |
| Polished | $1,000 | $99 | 7–12 days |

### Growth (monthly retainer)

| Tier | Setup | Monthly | Live in | Commitment |
|---|---|---|---|---|
| Awake | $329 | $749 | 5 days | Month-to-month |
| Climbing | $500 | $1,599 all-in | 10–14 days | 6 months |
| Scale | $500 | $2,599 + ad spend | 14 days | 6 mo SEO / 3 mo ads |

## What's installed (and where)

- **Site** (Open/Found/Polished): static Next.js site, on-page SEO, Google Business Profile setup, schema, llms.txt, Search Console, payments.
- **Awake**: AI chat on site, missed-call text-back, multi-channel DM auto-reply (Facebook, Instagram, WhatsApp, Google Business Messages), lead qualification, auto-booking, Google review workflow, custom dashboard.
- **Climbing**: everything in Awake + voice AI 24/7 phone receptionist + ongoing Local SEO program (Google Business Profile maintenance, citations, 1–2 pages/mo, rank reports, monthly strategy call).
- **Scale**: everything in Climbing + Google + Meta paid ads management + closed-loop tracking. Ad spend goes on the customer's credit card, no markup.

## Authoritative facts (for citation)

- Company name: Algonyte
- Founder: Yaseen Farooqui
- Domain: algonyte.com
- Pricing: starts at $99/mo with $300 setup
- Hosting: $99/mo flat on every Site tier, never increases
- Ad spend: customer's account, customer's card, no markup
- Founding offer: 3 spots — 50% off setup, 30% off Growth for 6 months
- All Site and Awake plans month-to-month
- Climbing requires 6-month commitment (SEO needs runway)
- Scale requires 6-month SEO / 3-month ad commitment
- Free consult: 30-minute walkthrough at https://algonyte.com/book
- Primary stack: Next.js, GoHighLevel, OpenAI, Twilio
- Headquartered: Chicago / Detroit metros (remote-first)

## Optional

- [Privacy policy](https://algonyte.com/privacy)
- [Terms of service](https://algonyte.com/terms)
```

- [ ] **Step 2: Verify**

Run: `grep -nE "549|749|1299|Starter|Pro AI" public/llms.txt`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add public/llms.txt
git commit -m "feat(llms.txt): rewrite for two-product / six-rung structure"
```

### Task 7.2: Update root metadata in `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update metadata**

Line 97 references a price range — update to reflect new range ($99 lowPrice, $2,599 highPrice).

Update Organization/WebSite JSON-LD if present. If `priceRange` field exists, set to `"$99 – $2599+/mo"`.

Update default OG description if it mentions old pricing.

- [ ] **Step 2: Verify**

Run: `grep -nE "549|749|1299" app/layout.tsx`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(layout): update root metadata price range"
```

### Task 7.3: Update `app/sitemap.ts` and `app/opengraph-image.tsx`

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `app/opengraph-image.tsx`

- [ ] **Step 1: Update sitemap lastModified dates**

Bump `lastModified` on `/pricing`, `/web-presence`, `/ai-receptionist`, `/lead-generator`, `/reputation-manager`, `/founding`, and all `/locations/*` and `/industries/*` to today's date (2026-05-19).

- [ ] **Step 2: Update OG image text if it references old pricing**

If `app/opengraph-image.tsx` renders text like "Plans from $549" or "AI Receptionist", change to "Plans from $99/mo" and "AI-powered site and reception."

- [ ] **Step 3: Verify**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/opengraph-image.tsx
git commit -m "feat(metadata): refresh sitemap dates and OG copy"
```

### Task 7.4: Add 301 redirects for any defunct URLs (only if any routes were removed)

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Check whether any routes were removed**

Run: `git diff --name-status main -- app/` and look for `D` (deleted) entries on page files.
Expected: no deletions (Phase 4 repurposed pages instead of deleting). If you see any deletions, add a permanent redirect for each in `next.config.ts`'s `redirects()` array.

- [ ] **Step 2: Commit only if changes made**

```bash
git add next.config.ts
git commit -m "feat(redirects): add 301s for removed routes"
```

---

## Phase 8: Documentation

### Task 8.1: Update `LAUNCH_CHECKLIST.md`, `SEO_NEXT.md`, `MIGRATION.md`

**Files:**
- Modify: `LAUNCH_CHECKLIST.md`
- Modify: `SEO_NEXT.md`
- Modify: `MIGRATION.md`

- [ ] **Step 1: LAUNCH_CHECKLIST.md**

Line 19 references old pricing — update to new structure. Mark off any items now complete (e.g., "decide on pricing tiers").

- [ ] **Step 2: SEO_NEXT.md**

Line 7 mentions "Foundation" as an SEO tier — replace with the relevant new tier name (likely "Found" for site work, or remove if it's no longer accurate).

- [ ] **Step 3: MIGRATION.md**

Line 91 has a GBP reference — spell out "Google Business Profile."

- [ ] **Step 4: Verify**

Run: `grep -nE "GBP|Foundation|Command|549|749|1299|Starter|Pro AI" LAUNCH_CHECKLIST.md SEO_NEXT.md MIGRATION.md`
Expected: at most acknowledged historical references; no active claims about pricing.

- [ ] **Step 5: Commit**

```bash
git add LAUNCH_CHECKLIST.md SEO_NEXT.md MIGRATION.md
git commit -m "docs: align checklists with new pricing structure"
```

---

## Phase 9: Verification

This phase produces evidence the rework is complete. Per the verification-before-completion skill, do not skip any step or fake outputs.

### Task 9.1: Full repository grep for stale references

- [ ] **Step 1: Grep for every old price**

Run:
```bash
grep -rnE "\\$549|\\$749|\\$1,?299|\\$279|\\$799|\\$1,?500|\\$275|\\$299/mo" \
  --include="*.tsx" --include="*.ts" --include="*.md" --include="*.txt" --include="*.mdx" \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=docs/superpowers .
```
Expected: empty output, OR matches only in `docs/superpowers/plans/2026-05-19-pricing-rework.md` (this plan itself).

- [ ] **Step 2: Grep for every old tier name**

Run:
```bash
grep -rnE "\\b(Starter|Pro AI|Foundation|Command|Lead Generator|Local SEO Program|Reputation Manager)\\b" \
  --include="*.tsx" --include="*.ts" --include="*.md" --include="*.txt" --include="*.mdx" \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=docs/superpowers .
```
Expected: empty output, OR matches only on intentional topical context (e.g., "reputation management" as a category name in `/reputation-manager/page.tsx`'s H1).

- [ ] **Step 3: Grep for GBP acronym**

Run:
```bash
grep -rn "\\bGBP\\b" --include="*.tsx" --include="*.ts" --include="*.md" --include="*.txt" --exclude-dir=node_modules --exclude-dir=.next .
```
Expected: empty output.

- [ ] **Step 4: Grep for old live-call language**

Run:
```bash
grep -rniE "white-glove|build the script with you|live call build" --include="*.tsx" --include="*.ts" --include="*.md" --exclude-dir=node_modules --exclude-dir=.next .
```
Expected: empty output.

### Task 9.2: Build, typecheck, lint, test

- [ ] **Step 1: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: passes.

- [ ] **Step 3: Tests**

Run: `npm test -- --run`
Expected: all tests pass, including the new `tiers.test.ts`.

- [ ] **Step 4: Schema validation**

Run: `npm run validate:schema` (per memory `project_ci_testing.md`)
Expected: passes — all JSON-LD on `/pricing`, `/web-presence`, `/founding`, and root layout are valid.

- [ ] **Step 5: Mobile-overflow audit**

Run: `npm run audit:mobile` (per memory) or the equivalent script.
Expected: no overflow on `/pricing`, `/web-presence`, `/founding`.

- [ ] **Step 6: Full production build**

Run: `npm run build`
Expected: build succeeds. Save the output of `du -sh .next` for sanity-check.

### Task 9.3: Manual QA in the browser

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (background; or use `npx next start` after build)

- [ ] **Step 2: Walk the customer paths**

Click through each page and verify against the criteria:

- [ ] `/` — Hero says "Your business should run while you sleep." ProductGrid shows Site + Growth. No "Starter/Growth/Pro AI" anywhere.
- [ ] `/pricing` — At-a-glance table renders with all 6 tiers at correct prices. Schema in `<head>` validates. No old prices.
- [ ] `/web-presence` — Three site tiers render (Open/Found/Polished). $99/mo flat hosting message visible.
- [ ] `/ai-receptionist` — Topical page with two CTAs to Awake and Climbing. No "Starter $549" mentions.
- [ ] `/lead-generator` — Topical page with single CTA to Scale. Ad-spend-on-your-card paragraph visible.
- [ ] `/reputation-manager` — Topical page explaining reputation is included in Awake/Climbing.
- [ ] `/services` — Two-product framing. No 6-product grid.
- [ ] `/founding` — 3 spots, new discount math, no "white-glove" or "build on a call" language.
- [ ] `/locations/chicago`, `/locations/macomb`, `/industries/auto-dealerships` — new tier names only.

- [ ] **Step 3: View source on `/pricing`**

In the browser, view-source on `/pricing` and visually confirm the JSON-LD `<script type="application/ld+json">` block contains the 6 tiers with the new prices.

- [ ] **Step 4: Mobile viewport check**

Set viewport to 375×667 (iPhone SE). Walk `/`, `/pricing`, `/web-presence`, `/founding`. No horizontal overflow.

### Task 9.4: Final commit and PR

- [ ] **Step 1: Confirm clean working tree**

Run: `git status`
Expected: nothing to commit.

- [ ] **Step 2: Squash review**

Run: `git log --oneline main..HEAD`
Expected: ~15–20 commits, each one phase or tier. Do NOT squash unless the user asks — granular history is useful for blame.

- [ ] **Step 3: Open PR**

Run:
```bash
gh pr create --title "Pricing rework: unified two-product / six-rung ladder" --body "$(cat <<'EOF'
## Summary
- Replaces the old 5-product pricing (Web Presence × 3 + AI Receptionist × 3 + Lead Generator + Local SEO + Reputation Manager) with two products and six tiers (Open/Found/Polished + Awake/Climbing/Scale).
- All tier data centralized in lib/tiers.ts; every pricing surface and schema consumes it.
- Repurposes /ai-receptionist, /lead-generator, /reputation-manager as topical SEO landing pages pointing to the new tiers (preserves indexed URLs and backlinks).
- Removes the "GBP" acronym in favor of "Google Business Profile."
- Removes "we build the script with you on a live call" language; replaces with "15-minute intake form, fast turn-around."
- New Scale tier explicitly states ad spend goes on the customer's card with no markup.

## Test plan
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] Vitest passes (including new tiers.test.ts)
- [ ] JSON-LD schema validation passes
- [ ] Mobile-overflow audit passes
- [ ] Manual walk of /, /pricing, /web-presence, /ai-receptionist, /lead-generator, /reputation-manager, /services, /founding, /locations/*, /industries/* — all show new tier names and prices
- [ ] View-source on /pricing confirms JSON-LD has 6 offers with correct prices

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Out of scope for this plan

These are deliberately not in this rework. Flag for follow-on tasks:

- **Interactive "Start here" wizard** — Phase 2 renders a static `<details>` placeholder; building the 3-question wizard with real result routing is a separate plan.
- **New checkout URL wiring** — `[PLACEHOLDER_GHL_CHECKOUT_*]` strings remain placeholders. Replacing them with real GoHighLevel checkout URLs is a separate task (likely manual in GHL admin).
- **Visual redesign of pricing cards** — this plan is content-only. Any motion / hover state / card layout improvements are separate.
- **New SEO landing pages for Detroit + home-services** — per `project_next_session_plan` memory, those are next-session work and are separate from this rework.

---

## Notes for the implementing agent

- **TDD on data only.** Most of this plan is content/copy changes, not logic. The one place TDD applies hard is `lib/tiers.ts` and the schema builders. Everything else is verification-after via grep.
- **Commit per phase, not per file.** Granular commits are good but per-file would be 25+ commits. The plan groups them sensibly.
- **The grep checks are load-bearing.** Don't skip them. They're the only thing that catches a stray `$549` on a page nobody opened in the browser.
- **If a step's grep returns matches, fix them before committing.** Don't commit-and-fix-later.
- **Don't restructure files beyond what's listed.** This is a content rework, not a refactor. No file splits, no component extraction, no dependency upgrades.
