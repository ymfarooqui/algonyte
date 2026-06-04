# À la carte services — design spec

**Date:** 2026-06-04
**Status:** Draft — awaiting user review
**Author:** AlgoNyte (yaseen@algonyte.com) + Claude

## Summary

Replace the three packages (**Found / Awake / Climbing**) with **individually-priced, à la carte services**, presented Atlas-style: each service is a self-explanatory card with a one-line job, a hero stat, a price, and its own checkout. No bundles, no "pick a tier."

This partially reverses the previous rework (`docs/superpowers/specs/2026-05-20-pricing-rework-design.md`), which collapsed six tiers into three packages. Read that doc first — the bundling rationale it captured (decision-fatigue reduction, "Most Popular" anchoring, higher AOV) is exactly what we are trading away, intentionally, for **clarity** and **per-service intent matching**.

### Why (condensed Atlas comparison)

What Atlas (youratlas.com) does that we don't, and that motivates this change:

- **Self-explanatory modular solutions.** "Voice AI / iMessage / Outbound" — you know what each does instantly. Our "Found / Awake / Climbing" are opaque bundle names that have to be decoded.
- **A stat on every offering.** "60 seconds," "92% vs 35%," "<30s to answer." Numbers sell. We sell with feature lists.
- **Done-for-you framing + one clear promise.**

What we keep that Atlas lacks (do **not** trade these away): **transparent published pricing** (Atlas hides behind "$5k, book a call"), **broader channels** (FB/IG/WhatsApp/Google DMs, not just iMessage), **discovery** (Local SEO/web presence, not just conversion), a **real case study**, and an **already-sophisticated animated design system** (aurora, grain, spotlight, Framer Motion). The high-tech feel we want is *clarity applied to our existing motion system*, not a visual rebuild.

## The service catalog (proposed)

Each row maps 1:1 to a **page that already exists**, so this is largely a re-presentation + per-service pricing/checkout exercise, not new page construction.

| id | Name | The job (one-liner) | Hero stat | Deep page | From bundle |
|---|---|---|---|---|---|
| `voice-ai` | Voice AI Receptionist | Answers every call, qualifies the job, and books it — 24/7. | **<30s** to pick up, day or night | `/ai-receptionist` | Climbing (voice) |
| `ai-chat-dm` | AI Chat & DM Agent | Replies on your site and every social DM in seconds, and books the lead. | **5 channels**, one inbox | `/ai-receptionist` | Awake |
| `reactivation` | Database Reactivation | Wakes up cold leads already sitting in your CRM and books the ready ones. | **$0** new ad spend | `/database-reactivation` | (outbound — new) |
| `web-presence` | Local SEO & Web Presence | A fast site that gets you found on Google and AI search. | **5–7 days** to live | `/web-presence` | Found |
| `reviews` | Reviews & Reputation | Turns finished jobs into 5-star reviews automatically. | **Auto** after every job | `/reputation-manager` | Awake/Climbing |
| `ads` | Ad Management | Google + Meta ads with AI follow-up that books, not just clicks. | **No markup** on spend | `/ad-management` | (ads) |

**Cross-cutting features** (NOT standalone services — included inside the relevant service): Missed-Call Text-Back (inside Voice AI), Instant Booking / calendar (inside Voice AI + Chat-DM; `/instant-booking` stays as a feature explainer page), Lead qualification + auto-booking (inside both reception services).

## ⚠️ Open decisions — REVIEW BEFORE IMPLEMENTATION

These are the review gates. Implementation should not start until D1, D2, D3 are answered. D4–D6 can be answered during build.

- **D1 — Per-service pricing (BLOCKER).** À la carte requires a setup + monthly price per service. We will **not invent these**; the numbers below are illustrative placeholders to be replaced. Yaseen to confirm real figures. See "Pricing model" below.
- **D2 — Split reception, or keep it one service?** Proposed: split into `voice-ai` and `ai-chat-dm` so a customer can buy "just chat" or "just voice" (max à la carte clarity, mirrors Atlas's Voice/iMessage split). Alternative: keep a single "AI Receptionist" service covering all channels. Both share the `/ai-receptionist` deep page either way.
- **D3 — Keep `/pricing`?** Proposed: **keep it**, reworked into an à la carte price matrix (every service, every number on one page). This is our differentiator vs "book a call to learn pricing." Alternative: delete `/pricing`, price on each service page, redirect `/pricing` → `/services`.
- **D4 — Bundle affordance?** You chose *full* à la carte, so default is **no bundles**. Optional, low-commitment enhancement: a "save when you combine services" line + auto-applied multi-service discount, to protect average order value. Off by default; flag if wanted.
- **D5 — Checkout links.** Each service needs its own GoHighLevel checkout URL. Until provided, the existing `isPlaceholder()` pattern routes the CTA to `/contact` with "Talk to us" — identical to today's behavior for the unset tier links. No blocker; ship with placeholders.
- **D6 — Stats to verify.** Every hero stat must be either already-substantiated on the live site or marked `TO VERIFY` and confirmed before launch. See "Stats sourcing rule."

## Pricing model (⚠️ ALL NUMBERS TO CONFIRM — D1)

Treat per-service prices exactly like the existing `[PLACEHOLDER_GHL_CHECKOUT_*]` convention: a typed placeholder the owner fills in. The strawman below is derived from current bundle economics **only to give the review something concrete** — it is not a recommendation and not researched against your costs.

| Service | Setup (example) | Monthly (example) | Notes |
|---|---|---|---|
| Local SEO & Web Presence | $449 | $99 | **Known** — unchanged from Found; flat hosting forever |
| AI Chat & DM Agent | $499 | $349 | TBD — derived from Awake ($749 + $549) minus reviews/voice |
| Voice AI Receptionist | $599 | $399 | TBD — derived from Climbing voice delta |
| Database Reactivation | $399 | $249 | TBD — or one-time campaign pricing; decide model |
| Reviews & Reputation | $199 | $149 | TBD — smallest standalone unit |
| Ad Management | $499 | $499 + ad spend | TBD — spend on client's card, no markup (keep this differentiator) |

Design intent for whoever sets real numbers: the sum of "buy several services" should land **at or slightly above** the old Climbing all-in ($749/mo) so un-bundling doesn't quietly halve revenue, while each single service stays an easy yes. This is a business call for Yaseen, captured here as the #1 review item.

## Data model

New single source of truth: **`lib/services.ts`** (supersedes `lib/tiers.ts`). Shape deliberately mirrors the current `Tier` so consumer migration is mechanical, plus the fields the Atlas-style card needs (`job`, `stat`, `href`, `icon`).

```ts
// lib/services.ts
export type ServiceId =
  | "voice-ai"
  | "ai-chat-dm"
  | "reactivation"
  | "web-presence"
  | "reviews"
  | "ads";

export type ServiceCategory = "reception" | "growth" | "presence";

export type Service = {
  id: ServiceId;
  name: string;                 // "Voice AI Receptionist"
  category: ServiceCategory;
  job: string;                  // one-line outcome
  stat: { value: string; label: string };  // { value: "<30s", label: "to pick up, day or night" }
  setup: number;                // PRICING TBD (D1)
  monthly: number;              // PRICING TBD (D1)
  monthlyNote?: string;         // e.g. "+ ad spend"
  liveIn: string;               // "5 days"
  features: readonly string[];  // 4–7 bullets, reused from current tier features
  href: string;                 // existing deep page, e.g. "/ai-receptionist"
  checkoutUrl: string;          // "[PLACEHOLDER_GHL_CHECKOUT_VOICE]"
  icon: ServiceIconId;          // keyed into a small icon map for the card
  popular?: boolean;            // optional single highlight (replaces "Most Popular")
};

export const services: readonly Service[] = [ /* … */ ];
export const HOSTING_FLAT = 99;            // preserved — Web Presence hosting
```

- `lib/constants.ts` re-exports switch from `tiers` to `services` (keep `isPlaceholder`, `calendarSrc`, `HOSTING_FLAT`).
- `lib/tiers.ts` is **deleted** after migration; `lib/tiers.test.ts` → `lib/services.test.ts`.
- Feature bullets are lifted directly from the existing tier `features` arrays, redistributed per service (no new copy needed for includes).

## Page / IA changes

| Surface | File | Change |
|---|---|---|
| Homepage offerings | `app/page.tsx` + `components/sections/ProductGrid.tsx` | Replace the 3-package `ProductGrid` with a new **`SolutionsGrid`** of stat-driven service cards. Hero stays ("run while you sleep"); its eyebrow channel list is already service-oriented. |
| Services page | `app/services/ServicesContent.tsx` | Replace the 3 `TierCard`s + "Three offerings. One clear ladder." with the à la carte catalog. Keep `ServicesFlowVisual` (the "engine" diagram), `StackMarquee`, FAQ. New eyebrow: "Pick the services you need." |
| Pricing | `app/pricing/page.tsx` | Rework the 3-tier grid into an **à la carte price matrix** — every service, setup + monthly + live-in, each with its own checkout CTA. Keep the start-here wizard, differentiators (esp. transparent-pricing), `WhyNot`, `FinalCTA`. (Pending D3.) |
| Service detail pages | `/ai-receptionist`, `/web-presence`, `/reputation-manager`, `/lead-generator`, `/database-reactivation`, `/instant-booking`, `/ad-management` | These **become** the canonical per-service pages. Swap package-comparison framing (e.g. ai-receptionist's "Awake vs Climbing" fork) for: what's included → price → "Get started" (per-service checkout via `isPlaceholder` fallback). |
| Nav | `components/Header.tsx` | Already service-oriented. Optionally promote a "Services" overview link; otherwise minimal. |
| Site metadata | `lib/site.ts` | Rewrite the description (currently lists "Found, Awake, Climbing") to describe the service catalog. |
| Schema | `lib/schema.ts` | `pricingSchema` → `AggregateOffer` over `services`. Per-service `Service` schemas → single `Offer` at that service's own price. Drop the Awake/Climbing pairing language in `aiReceptionistServiceSchema` / `reputationManagementServiceSchema`. |
| Redirects | `next.config.ts` | `/pricing#found|awake|climbing` anchors have no server redirect (client anchors), so add in-page anchor aliases on `/pricing` AND keep deep pages stable. Add any needed 301s if a URL is dropped (e.g. if D3 removes `/pricing`). |
| Sitemap | `app/sitemap.ts` | Ensure all service detail pages are present; no tier anchors to remove (they were never separate URLs). |

## New components & design (Atlas clarity on the existing system)

No new visual system. Reuse `Reveal`, `PageHeroBackdrop` (aurora), `lift-card`, brand tokens, existing easing.

- **`components/ServiceCard.tsx`** — the Atlas-style card: small icon, service name, one-line job, a **large hero stat** (`stat.value` in display size + `stat.label` muted under it), 2–3 key includes, price line (`$setup + $monthly/mo`), CTA. `popular` gets the dark `bg-brand-deep` treatment (reuse the existing featured-card pattern). Entrance via `Reveal` with staggered `delay`.
- **`components/sections/SolutionsGrid.tsx`** — homepage + services-page grid of `ServiceCard`s on an aurora backdrop section. Replaces `ProductGrid`'s role.
- Keep `ServicesFlowVisual` as the unifying "from first contact to booked revenue" engine diagram — it already delivers the "one engine" metaphor Atlas leans on.

### Copy — headlines per service (draft)

- **Voice AI Receptionist** — "Your phone, answered. Every time." → job + `<30s` stat.
- **AI Chat & DM Agent** — "Every message answered in seconds." → 5-channel stat.
- **Database Reactivation** — "Revenue from leads you already have." → `$0` new ad spend.
- **Local SEO & Web Presence** — "Get found on Google and AI search." → live in `5–7 days`.
- **Reviews & Reputation** — "Finished jobs become 5-star reviews." → auto-after-every-job.
- **Ad Management** — "Ads that book jobs, not just clicks." → no-markup.

### Stats sourcing rule (non-negotiable)

Every `stat.value` must be one of: (a) already published on the live site (e.g. "live in 5–7 days," "30–40% of calls go unanswered"), (b) a factual claim about the business model (e.g. "$0 new ad spend," "no markup"), or (c) marked `TO VERIFY` in the data and confirmed by Yaseen before launch. **Do not copy Atlas's numbers** (92%, 60s, etc.) — they are Atlas's claims, not ours.

## Atlas teardown — adopt / adapt / skip

From the full-page Chrome teardown (2026-06-04). Triaged by value vs. honesty vs. build cost. **Rule: never fabricate** social proof, stats, media logos, or a celebrity backer we don't have.

### ✅ Adopt (high value, honest, buildable)

| Atlas element | AlgoNyte move | Lift | Notes |
|---|---|---|---|
| **Revenue/ROI calculator** (4 sliders → $ lost / recovered / impact) | New `components/RevenueCalculator.tsx`. Front-end only, reuses existing `CountUp`/`Money` animation. | M | Personalizes the pain; pure client math, no backend. Strong fit. |
| **Pain-first "revenue leak" section** (quantified, cited stats + "$X/mo lost" formula) | Upgrade `components/sections/ProblemHook.tsx` with cited figures + the leak formula. | S | Pairs with the calculator. Cite sources for each stat. |
| **"Old way vs. AlgoNyte" before/after table** | New comparison table (we already have the before/after `HeroVisual` + a competitor table on `/ai-receptionist`). | S | Classic contrast matrix; on-brand. |
| **$-headline case studies** ("$28K recovered from dead leads") | Reframe the existing Car Hub case study with a dollar headline; add more as collected. | S | We already have one real case study. |
| **GEO footer** — "Request an AI summary" links to ChatGPT / Perplexity / Claude / Grok / Gemini | Add to `components/Footer.tsx`. | S | **Genuinely novel and perfectly on-brand** — we *sell* AI-search optimization, so eating our own dog food here is a credibility flex. Highest ROI low-lift idea on the page. |
| **Done-for-you 14-day timeline** ("you don't touch a thing") | Reframe `components/sections/HowItWorks.tsx` as a 4-step done-for-you funnel. | S | We're already done-for-you; just say it louder. |
| **"Hear a real AI call" audio sample player** | Use the existing `PhoneConversation` component or a small waveform audio player with 1–2 real sample calls. | M | Lower-lift trust element than a live call-back; product speaks for itself. |
| **Persistent floating CTA** ("Talk to our AI / Book") | Sticky button across scroll → booking modal / chat. | S | We already have `BookingModal` + sticky header. |
| **Industry targeting with sub-niches** | Strengthen existing `/industries` + `IndustriesAreas` with the vertical sub-niches (HVAC, plumbing, dental, med spa, law…). | S | Infra already exists. |

### 🟡 Adapt (good idea, change the form)

| Atlas element | AlgoNyte adaptation |
|---|---|
| **6 named "workers" (Atlas Voice/Blue/Revive/Confirm/Reputation/After Dark)** — "team of humans" feel | Our **descriptive** names (Voice AI Receptionist, Database Reactivation) are *already* the clarity win and beat "Atlas Blue." Optionally add a light "your AI team / your night shift" framing for personality — don't over-rotate into opaque brand names. **Candidate 7th service surfaced by their "Atlas Confirm": Appointment Confirmations / No-Show Shield** (we already have "appointment reminders" as a Climbing feature — promote it to a sellable service). See D8. |
| **"After Dark" night-shift agent** | Not a separate service — it's 24/7 Voice/Chat reframed around the after-hours pain. Use as messaging on the reception services. |
| **iMessage clone (Atlas Blue)** | We cover **more** channels (web chat + FB/IG/WhatsApp/Google DMs). Keep the "clones your tone/scripts" framing; don't narrow to iMessage. |
| **"We install a Revenue Engine, not software"** | Our "run while you sleep" is already strong positioning; reinforce the **done-for-you / we build + run it** angle rather than copying the "engine" line wholesale. |
| **Integrations orbit diagram** | We have `StackMarquee` already; optionally upgrade to an animated orbit. Cosmetic, low priority. |
| **Live AI call-back demo** ("Emma calls you in 60s") | Highest-converting element they have, but needs Twilio/GHL backend. **Phase 2 roadmap** — ship the audio sample player first. |
| **Self-serve $99/mo entry tier** | Our **Web Presence is already $99/mo** — a natural low-friction on-ramp. Lean into it as the "start here" service. |

### ⛔ Skip (can't replicate honestly)

- **Dan Martell / celebrity influencer backing** — we don't have one; do **not** fake it. Substitute real local testimonials + the Car Hub case study. (If a credible endorsement becomes available later, revisit.)
- **Aggregate vanity stats** ("4M+ calls, 18,000+ businesses") — we can't truthfully claim these. Use only real numbers (the existing `StatsStrip`).
- **Media logos** (Business Insider, Nvidia, Microsoft) — only if genuinely earned.
- **Fabricated photo/video testimonials** — collect real ones over time.

### New decisions raised by the teardown

- **D7 — Performance guarantee?** Atlas's hard closer is "if it doesn't perform, you don't pay." Combined with our month-to-month, a bounded performance guarantee would be a powerful risk-reversal. **Business/commercial decision for Yaseen** — only adopt if we'll stand behind it. Not a code blocker.
- **D8 — Add "Appointment Confirmations / No-Show Shield" as a 7th service?** Promotes the existing appointment-reminders feature into a standalone à la carte service (targets the 22–30% no-show rate). Yes/no.
- **D9 — Which high-tech adoptions ship in v1?** Proposed v1 set: ROI calculator, GEO footer, revenue-leak ProblemHook upgrade, old-vs-AlgoNyte table, persistent CTA. Defer to phase 2: live call-back demo, orbit diagram. Confirm the v1 scope.

## SEO / migration notes

- Service detail pages already rank for their own intent — keeping their URLs stable is a **gain**, not a risk.
- `/pricing` URL stays (pending D3). Its content changes but the page is preserved.
- No tier ever had its own URL (they were `/pricing#anchor`), so there are no tier URLs to 301. Add anchor aliases (`#found`→`#web-presence`, `#awake`→`#ai-chat-dm`, `#climbing`→`#voice-ai`) if we want old in-page links to still land sensibly.
- Re-run Google Rich Results Test after the schema change (single `Offer` per service).

## Risks

1. **AOV drop** from un-bundling — mitigated by D1 pricing design and optional D4 bundle affordance.
2. **Pricing fabrication** — mitigated by treating all numbers as TO CONFIRM placeholders; D1 is a hard gate.
3. **Reception split ambiguity** (D2) — if voice and chat are sold separately, the shared `/ai-receptionist` page must clearly present both without re-introducing a "tier" feel.
4. **Blast radius** — 16 files import the tier model; ~25 reference package concepts. Mechanical but wide; typecheck + build are the safety net (same as the prior rework).
5. **Stat credibility** — mitigated by the sourcing rule.

## Out of scope

- Net-new service pages (catalog maps to existing pages).
- A real interactive pricing wizard (the `<details>` placeholder stays).
- Rebranding service names beyond what's in the catalog table.
- Payment/checkout backend work beyond swapping per-service URLs.
- Changing the aurora/grain/spotlight visual system.

## Implementation order (handoff to the plan)

1. `lib/services.ts` data + types + `lib/services.test.ts` (TDD).
2. `lib/constants.ts` re-export swap; delete `lib/tiers.ts` + `lib/tiers.test.ts`.
3. `lib/schema.ts` — services-based schema.
4. New `components/ServiceCard.tsx` + `components/sections/SolutionsGrid.tsx`.
5. Homepage: swap `ProductGrid` → `SolutionsGrid`.
6. `/services`: à la carte catalog.
7. `/pricing`: à la carte matrix (D3).
8. Per-service detail pages: CTA + de-tier framing.
9. `lib/site.ts`, sitemap, redirects/anchors.
10. Audit remaining tier-referencing files (locations, industries, WhyNot, ServicesFlowVisual, lib/landing.ts, lib/content/*).
11. Docs (MIGRATION.md, LAUNCH_CHECKLIST.md, SEO_NEXT.md).
12. Verify: lint → typecheck → test → build → manual preview.

Estimated blast radius: ~20–25 files changed, 1 file + 1 test deleted, 2 components added.
