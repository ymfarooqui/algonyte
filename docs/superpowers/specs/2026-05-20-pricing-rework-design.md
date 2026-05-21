# Pricing rework — collapse to 3 standalone offerings

**Date:** 2026-05-20
**Status:** Draft — awaiting user review

## Summary

Collapse the current 6-tier "two products" ladder (Presence: Open/Found/Polished + Growth: Awake/Climbing/Scale) down to **3 standalone offerings**: Found, Awake, Climbing. No product grouping, no bundles, no founding offer, no long-term commitments.

This reverses the structural assumption shipped in commit `48d5bc2` (Pricing rework: unified two-product / six-rung ladder) and `f3e701d` (Pricing rework: unified two-product / six-rung ladder #18).

## The new lineup

| Tier | Setup | Monthly | Live in | Commitment | Featured |
|---|---|---|---|---|---|
| **Found** | $449 | $99 | 5–7 days | month-to-month | — |
| **Awake** | $749 | $549 | 5 days | month-to-month | — |
| **Climbing** | $899 | $749 (all-in) | 10–14 days | month-to-month | Most Popular |

Price range: **$99/mo–$749/mo** (was $99–$1,199).
All offerings month-to-month. No annual or 6-month commitments anywhere.

## Per-tier details

### Found ($449 setup, $99/mo)

Absorbs the old Open tier. Single Presence-style tier focused on getting a small business online and discoverable. Daily backups still run operationally but are no longer listed as a sell-point. Removed: 5-page-site listing (now described by the 8-page line), click-to-call line (assumed table-stakes), "direct line when something breaks" line (kept operationally, not sold). AI-search features condensed to one line.

**Tagline:** "You stop worrying about showing up on Google and AI search."

**Features (reordered build → discover → convert → maintain):**

1. Up to 8 pages (location, service, FAQ)
2. AI search optimized
3. Mobile-first build, Core Web Vitals tuned
4. On-page SEO foundations (titles, meta, alt text, internal links)
5. LocalBusiness schema installed
6. FAQ, Review, BreadcrumbList schema
7. Google Business Profile claimed, verified, and baseline filled
8. Google Search Console + Bing Webmaster Tools connected
9. XML sitemap submitted
10. Online booking calendar embedded
11. Contact form wired into your CRM
12. One payment link (Stripe or Square)
13. Managed hosting, SSL, CDN
14. Domain + email forwarding
15. 1 hour of content edits per month
16. Quarterly health check

### Awake ($749 setup, $549/mo)

Reception layer: chat, missed-call text-back, DM auto-reply. Features unchanged from current.

**Tagline:** "You stop worrying about text, chat, and DMs going cold."

**Features (unchanged):**

1. AI chat agent on your site, 24/7
2. Missed-call text-back — instant SMS the moment a call is missed
3. DM auto-reply on Facebook, Instagram, WhatsApp, and Google Business Messages
4. Lead qualification flow customized to your business
5. Auto-booking onto your calendar
6. Google review request workflow (triggers on job completion)
7. Custom dashboard: missed calls handled, DMs replied, leads booked

### Climbing ($899 setup, $749/mo, all-in including hosting)

Full-management tier. Adds voice AI receptionist + ongoing SEO. Now month-to-month (was 6-months). Featured as "Most Popular". Removed: smart-routing-for-unhappy-customers line, citation cleanup, 1–2 new pages per month, photos from GBP work. Strategy call cadence changed from monthly to quarterly.

**Tagline:** "You stop worrying about phone calls AND being found on Google."

**Features:**

1. Everything in Awake
2. Voice AI 24/7 phone receptionist — answers, qualifies, books
3. Custom branching workflows by service type, urgency, and location
4. Appointment reminders (SMS + email)
5. Multi-platform review requests (Google, Yelp, Facebook)
6. Ongoing Google Business Profile work — 2 posts a month, Q&A management
7. Ongoing technical SEO + AI-search optimization
8. Monthly rank tracking + traffic report
9. Quarterly strategy call

**Open concern:** With page-production removed, Climbing's SEO scope is now just "Ongoing technical SEO + AI-search optimization" (vague) plus rank tracking. Considered thin for $749/mo but user accepted as-is. Can revisit post-launch if conversion underperforms.

## Page structure changes

### Hero

- **New tagline:** "A site that gets found. A team that never sleeps. Pick where you need help most."
- **Subhead body:** "Every offering removes one more thing from your plate. Your business runs while you sleep." (current page says "Every tier"; updating to "offering" for consistency with the new vocabulary)
- Page title meta: keep "Pricing | AlgoNyte — Plans from $99/mo"
- Page description meta: rewrite to remove "Two products. Six rungs. From $99/mo to $1,199/mo. No long-term contracts except 6 months on SEO." → propose: "Three offerings. From $99/mo to $749/mo. Live in 5 days to 2 weeks. Month-to-month. No long-term contracts."

### Sections

| Section | Action |
|---|---|
| Hero | Update tagline copy |
| Start-here wizard (3 questions) | Keep, but cut the "is your budget under $1,000/mo, or open to full-stack?" line since the top tier is now $749/mo |
| At-a-glance table | Keep. Drop the "Presence/Growth" badge column. Show 3 rows instead of 6 |
| Hosting callout | Keep — "$99/mo flat hosting" still applies to Found |
| Presence section (3 cards) | **Remove** — no product split |
| Growth section (3 cards) | **Remove** — no product split |
| Single offerings grid (new) | **Add** — 3 cards in one unified grid: Found, Awake, Climbing. Featured: Climbing |
| Typical paths table | **Remove entirely** — no bundles |
| Differentiators | Trim to 4 items (see below) |
| WhyNot section | Keep |
| FinalCTA | Keep |
| JSON-LD: pricingSchema | Update — flatten, drop product-grouping language, lowPrice 99, highPrice 749, offerCount 3 |
| JSON-LD: foundingOfferSchema | **Remove** |
| JSON-LD: breadcrumb | Keep |

### Differentiators (4 items, down from 5)

1. **No long-term contracts. Ever.** (replaces "No annual contracts. 6 months only on SEO and ads")
2. **$99/mo flat hosting on Found. Forever. Never increases.** (clarifies it's Found-specific; Climbing is all-in)
3. **Fast turnaround: Found in 5–7 days, reception in 5 days.** (updates from "site in 72 hours" since Open is gone)
4. **Transparent pricing: every number on this page. No "book a call to learn pricing".**

*Dropped: "Ad spend is yours: your card, your accounts, no markup" — no ad product anymore.*

## Founding offer removal

Founding offer (3 spots, 50% off setup, 30% off Growth for 6 months) is removed entirely.

**Files to delete/modify:**

- `app/founding/page.tsx` — **delete**
- `components/sections/FoundingStrip.tsx` — **delete** (or remove from layouts if used elsewhere)
- `lib/tiers.ts` — remove the `founding` const
- `lib/schema.ts` — remove `foundingOfferSchema()` function
- `app/pricing/page.tsx` — remove the `<script>` tag injecting `foundingOfferSchema`
- `app/sitemap.ts` — remove the `/founding` route entry
- `components/Header.tsx` — remove any `/founding` link
- `app/contact/ContactContent.tsx`, `app/locations/chicago/page.tsx`, `components/sections/Hero.tsx` — audit and remove founding references
- `next.config.ts` — add a permanent (301) redirect from `/founding` → `/pricing` to preserve any inbound links

## Code-level changes

### `lib/tiers.ts`

- Remove the Presence vs Growth split. Collapse `siteTiers` and `growthTiers` into a single readonly array `tiers`.
- Collapse types: `SiteTier` and `GrowthTier` merge into a single `Tier` type. Fields: `id`, `name`, `setup`, `monthly`, `monthlyNote?`, `liveIn`, `commitment`, `tagline`, `stopWorryingAbout`, `features`, `checkoutUrl`, `featured?`.
- Remove tier IDs: `open`, `polished`, `scale`. New `TierId = "found" | "awake" | "climbing"`.
- Remove the `Commitment` type variants `"6-months"` and `"6-months-seo-3-months-ads"` — only `"month-to-month"` remains. (If we want to keep the type open for future variants, leave it as a string union with one member; otherwise simplify the type.)
- Remove the `founding` const.
- Keep `HOSTING_FLAT = 99`.
- Keep `allTiers` export (now equal to `tiers`).

### `lib/tiers.test.ts`

Rewrite — current assertions reference Open/Polished/Scale and the 6-tier structure. New assertions:

- exactly 3 tiers in `tiers`
- Found uses HOSTING_FLAT as monthly
- prices ladder up: Found.monthly ≤ Awake.monthly ≤ Climbing.monthly
- every tier is month-to-month
- unique IDs, non-empty names, ≥1 feature each
- Awake mentions custom dashboard + Facebook/Instagram/WhatsApp (preserved)
- Climbing has the "Most Popular" featured flag

### `lib/schema.ts`

- `pricingSchema()`: update description ("Three offerings: a site that gets found, reception that never sleeps, and full management."), `lowPrice: 99`, `highPrice: 749`, `offerCount: 3`, `offers: tiers.map(tierOffer)`.
- `foundingOfferSchema()`: remove.
- `aiReceptionistServiceSchema()`: update — Awake + Climbing still referenced, but Climbing's monthly is now 749. Description reuses Awake/Climbing pairing language.
- `reputationManagementServiceSchema()`: same — Awake + Climbing referenced, prices update.
- `webPresenceServiceSchema()`: now references only Found. `lowPrice` and `highPrice` both = $449 setup. `offerCount: 1`. Description rewrite: "End-to-end web presence for service businesses. Built on Found from $449 one-time, then $99/mo flat hosting forever. Live in 5–7 days. Google Business Profile setup included."

### `app/pricing/page.tsx`

Substantial rewrite per the section table above. Key code changes:

- Drop the `commitmentLabel` entries for `"6-months"` and `"6-months-seo-3-months-ads"` — keep only `"month-to-month": "Month-to-month"`.
- Drop `typicalPaths` array and the entire typical paths `<section>`.
- Drop the Presence section + cards loop and the Growth section + cards loop.
- Add a single unified offerings grid (3 cards) iterating over `tiers`. Featured (Climbing) gets the dark `bg-brand-deep text-brand-soft` treatment + "Most Popular" badge.
- Update hero, hosting callout copy, differentiators array.
- Remove `<script>` tag for `foundingOfferSchema`.

### Other files referencing removed tiers

These need a targeted audit and rewrite in the implementation phase:

- `app/web-presence/page.tsx` — refers to 3 Presence tiers; reduce to Found only
- `app/ai-receptionist/page.tsx` — Awake + Climbing references should still work; check copy
- `app/reputation-manager/page.tsx` — same
- `app/industries/auto-dealerships/page.tsx` — likely mentions tier names; audit
- `app/locations/macomb/page.tsx`, `app/locations/chicago/page.tsx` — audit for tier references
- `app/lead-generator/page.tsx` — was a Scale-adjacent landing page; may need full rewrite or removal (open question)
- `app/services/ServicesContent.tsx` — audit
- `components/sections/Hero.tsx` — homepage hero may reference founding/six-rungs
- `components/sections/ProductGrid.tsx` — likely shows old 2-product split
- `components/sections/WhyNot.tsx` — audit
- `components/Header.tsx` — nav: remove /founding link, audit pricing nav copy
- `components/ServicesFlowVisual.tsx` — audit

### Sitemap and redirects

- `app/sitemap.ts` — remove `/founding`
- `next.config.ts` — add 301 redirect `/founding` → `/pricing`

### Docs

- `LAUNCH_CHECKLIST.md` — likely references tier names; audit
- `MIGRATION.md` — probably documents the previous pricing rework; add a note about this change
- `SEO_NEXT.md` — audit for tier-specific keyword targets

## Out of scope (explicitly)

- Re-running the start-here wizard interaction (currently a static `<details>` placeholder)
- Net-new tiers, products, or add-ons
- Rebranding the offerings (Found, Awake, Climbing names stay)
- Changing the `/pricing` URL
- New imagery or hero backdrop changes
- Replacement of `lead-generator` page — if it needs removal, that's a follow-up

## Risk / open questions

1. **Climbing-thin-on-SEO**: with page production removed, the SEO value prop in Climbing is now vague. User accepted at brainstorm; can revisit post-launch.
2. **Lead-generator landing page**: was likely anchored to Scale's ads positioning. May read awkwardly post-rework. Flagged as audit-required, decision deferred.
3. **`/founding` inbound traffic**: any external links/ads pointing at `/founding` will hit the redirect to `/pricing`. SEO impact should be neutral or slightly negative for `/founding`'s indexed keywords; gain on `/pricing` from consolidation.
4. **GHL checkout URLs**: the three remaining tiers have `[PLACEHOLDER_GHL_CHECKOUT_*]` URLs. The Open/Polished/Scale placeholders die with their tiers. No new placeholders needed.
5. **Schema coverage shrinks**: `webPresenceServiceSchema` now offers only 1 tier where it offered 3. Switch from `AggregateOffer` to a single `Offer` for that schema since aggregation across a single item is misleading.

## Implementation order (handoff to writing-plans)

1. Update `lib/tiers.ts` data + types + rewrite `lib/tiers.test.ts`
2. Update `lib/schema.ts` (remove foundingOfferSchema, update other schemas)
3. Rewrite `app/pricing/page.tsx` (hero, table, single grid, drop typical paths, drop founding script)
4. Delete `app/founding/page.tsx`, `components/sections/FoundingStrip.tsx`
5. Sitemap + redirect (`app/sitemap.ts`, `next.config.ts`)
6. Audit + fix all other tier-referencing files (`app/web-presence`, `app/lead-generator`, industries/locations/services, Hero, ProductGrid, Header, etc.)
7. Doc audit (`LAUNCH_CHECKLIST.md`, `MIGRATION.md`, `SEO_NEXT.md`)
8. Test + typecheck + lint pass

Estimated blast radius: ~20 files changed, 1 file deleted, 1 component deleted, 1 redirect added.
