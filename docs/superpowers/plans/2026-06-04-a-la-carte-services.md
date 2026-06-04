# À la carte services — implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 3 packages (Found / Awake / Climbing) with individually-priced, à la carte services presented Atlas-style (one-line job + hero stat + price + own checkout per service).

**Spec:** `docs/superpowers/specs/2026-06-04-a-la-carte-services-design.md`

**Architecture:** `lib/services.ts` becomes the single source of truth (supersedes `lib/tiers.ts`). Shape mirrors the old `Tier` plus `job`/`stat`/`href`/`icon`. Refactor by building the new module, then cascading fixes outward to every consumer. Schema, pricing page, marketing/service pages, and global components all read from this module. TDD with Vitest for data invariants; `typecheck` + `build` are the source of truth for page rewrites.

**Tech stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, Vitest. Husky + lint-staged on commit.

**Verification commands:**
- `npm run test` — vitest run
- `npm run typecheck` — tsc --noEmit
- `npm run lint` — eslint .
- `npm run build` — next build
- `npm run dev` — preview at http://localhost:3000

**⚠️ Review gate:** Do NOT start Task 1 until spec decisions **D1 (pricing), D2 (reception split), D3 (keep /pricing)** are answered. D4–D6 can resolve during build. Until D1 prices are confirmed, seed the placeholder example numbers from the spec and mark them `// PRICING TBD (D1)` in `lib/services.ts`.

---

## Pre-flight

- [ ] **0.1** `git status` → clean tree (spec + this plan already committed).
- [ ] **0.2** `npm run test` → all PASS on the branch before touching anything. If red, stop and investigate.
- [ ] **0.3** `npm run typecheck` → no errors.
- [ ] **0.4** Confirm D1/D2/D3 are answered in the spec or the issue thread. If D2 = "keep one reception service," collapse `voice-ai` + `ai-chat-dm` into a single `ai-receptionist` service everywhere below.

---

## Task 1 — Service data model (`lib/services.ts`) + tests

**Files:** create `lib/services.ts`, create `lib/services.test.ts`, (later) delete `lib/tiers.ts` + `lib/tiers.test.ts`.

- [ ] **1.1 Write failing tests first** (`lib/services.test.ts`). Assert the invariants:
  - `services` has the expected length (6, or 5 if D2 merges reception).
  - ids are unique and match the `ServiceId` union.
  - every service has non-empty `name`, `job`, `stat.value`, `stat.label`, `href`, `checkoutUrl`, ≥1 feature.
  - every `href` starts with `/` and points to an existing route.
  - `web-presence` monthly equals `HOSTING_FLAT`.
  - at most one service has `popular === true`.
  - setup/monthly are non-negative numbers.
- [ ] **1.2** Run `npm run test -- lib/services.test.ts` → FAIL (module missing).
- [ ] **1.3 Create `lib/services.ts`** per the spec's data-model section. Populate the catalog table; lift feature bullets from the existing tier `features` arrays (redistribute per service — no new include copy). Seed prices from the spec strawman, tagged `// PRICING TBD (D1)`. Add a small `ServiceIconId` union + the `icon` per service. Keep `export const HOSTING_FLAT = 99`.
- [ ] **1.4** Run `npm run test -- lib/services.test.ts` → PASS.
- [ ] **1.5** `npm run typecheck` → expect failures in the 16 tier-importing files. Expected; fixed downstream. Do NOT commit yet.

---

## Task 2 — Re-export swap + retire tiers (`lib/constants.ts`)

- [ ] **2.1** Edit `lib/constants.ts`: replace `export { tiers, HOSTING_FLAT } from "./tiers"` and the `Tier`/`TierId`/`Commitment` type re-exports with `services` + `Service`/`ServiceId` from `./services`. Keep `isPlaceholder`, `calendarSrc`, `HOSTING_FLAT` (now re-exported from `./services`).
- [ ] **2.2** `grep -rn "from \"@/lib/tiers\"" --include="*.ts*" .` → list every importer to migrate in Tasks 5–10.
- [ ] **2.3** Leave `lib/tiers.ts` in place **temporarily** so the app still type-resolves while migrating; delete it in Task 11 once no importer remains. (Avoids a giant simultaneous break.)

---

## Task 3 — Schema (`lib/schema.ts`)

- [ ] **3.1** Rewrite `tierOffer(tier)` → `serviceOffer(service)`: single `Offer` at the service's own `setup`/`monthly`, `url: ${siteConfig.url}${service.href}`.
- [ ] **3.2** `pricingSchema()`: `AggregateOffer` over `services`; `lowPrice`/`highPrice` from `services.map(s => s.monthly)`; `offerCount: services.length`; rewrite description to the service catalog.
- [ ] **3.3** `aiReceptionistServiceSchema()`: drop the Awake/Climbing pairing; offer = the reception service(s) at their own price.
- [ ] **3.4** `reputationManagementServiceSchema()`: single `Offer` at the `reviews` service price.
- [ ] **3.5** `webPresenceServiceSchema()`: single `Offer` at the `web-presence` price (already single-offer shaped).
- [ ] **3.6** `npm run typecheck` → `lib/schema.ts` errors resolved.

---

## Task 4 — New components

**Files:** create `components/ServiceCard.tsx`, `components/sections/SolutionsGrid.tsx`.

- [ ] **4.1 `ServiceCard.tsx`** — props `{ service: Service; index: number }`. Layout: icon, `name`, `job`, large `stat.value` + muted `stat.label`, 2–3 `features`, price line (`$setup + $monthly/mo`, `monthlyNote` if set), CTA `href={isPlaceholder(service.checkoutUrl) ? service.href : service.checkoutUrl}` with label `"Get started"` / `"See <name>"`. `popular` → dark `bg-brand-deep text-brand-soft` treatment reusing the existing featured-card classes. Wrap in `Reveal` with `delay={index * 0.06}`. Pointer-aware hover via `lift-card`.
- [ ] **4.2 `SolutionsGrid.tsx`** — server component; maps `services` into `ServiceCard`s in a responsive grid (`md:grid-cols-2 lg:grid-cols-3`), under an eyebrow + section heading. Optional `PageHeroBackdrop`/aurora wrapper for the homepage instance.
- [ ] **4.3** `npm run typecheck` → new components clean.

---

## Task 5 — Homepage (`app/page.tsx` + `ProductGrid`)

- [ ] **5.1** In `app/page.tsx`, swap the `ProductGrid` dynamic import for `SolutionsGrid`.
- [ ] **5.2** Either delete `components/sections/ProductGrid.tsx` (if nothing else imports it — grep) or leave until Task 11. Prefer deleting now if grep is clean.
- [ ] **5.3** Verify the Hero's eyebrow channel list (`Presence · Receptionist · Voice Agents · Local SEO · Reputation`) still reads correctly against the new catalog; tweak labels only if a service was renamed.
- [ ] **5.4** `npm run typecheck`.

---

## Task 6 — Services page (`app/services/ServicesContent.tsx`)

- [ ] **6.1** Replace the `tiers.map(TierCard)` block + "Three offerings. One clear ladder." eyebrow/heading with `SolutionsGrid` (or inline `ServiceCard`s). New eyebrow: "Pick the services you need."
- [ ] **6.2** Delete the local `TierCard`, `fmt`, and tier import. Keep `ServicesFlowVisual`, `StackMarquee`, FAQ, `FinalCTA`.
- [ ] **6.3** Update the "Compare all three offerings" CTA → "See pricing" / link to `/pricing` (per D3).
- [ ] **6.4** `app/services/faqs.ts` — audit for "Found/Awake/Climbing/three offerings/ladder" language; rewrite to service vocabulary.
- [ ] **6.5** `npm run typecheck`.

---

## Task 7 — Pricing page (`app/pricing/page.tsx`) — pending D3

If **D3 = keep** (proposed):

- [ ] **7.1** Replace the 3-tier offerings grid with an **à la carte matrix**: each service row → name, what-it-does one-liner, `$setup`, `$monthly/mo`, `liveIn`, own CTA (`isPlaceholder` fallback). Reuse the existing desktop-table + mobile-card responsive pattern already in this file.
- [ ] **7.2** Update hero copy, the start-here wizard budget bullets, and the at-a-glance heading to service vocabulary ("Pick the services you need," "Every service. Every number.").
- [ ] **7.3** Keep the differentiators block — **keep the transparent-pricing line** (our edge vs Atlas). Drop any tier-specific differentiator.
- [ ] **7.4** Keep the hosting callout (`$99/mo on Web Presence`), `WhyNot`, `FinalCTA`.
- [ ] **7.5** Add anchor `id`s per service (`#voice-ai`, etc.) + optional aliases for old `#found/#awake/#climbing`.

If **D3 = remove**: delete `app/pricing/page.tsx`, add `next.config.ts` 301 `/pricing` → `/services`, strip pricing nav links, and price on each service page instead.

- [ ] **7.6** `npm run typecheck`.

---

## Task 8 — Per-service detail pages

For each: `app/ai-receptionist/page.tsx`, `app/web-presence/page.tsx`, `app/reputation-manager/page.tsx`, `app/lead-generator/page.tsx`, `app/database-reactivation/page.tsx`, `app/instant-booking/page.tsx`, `app/ad-management/page.tsx`:

- [ ] **8.1** Swap tier imports → `services` (`const svc = services.find(s => s.id === "…")!`).
- [ ] **8.2** Replace package-comparison framing with single-service framing: what's included → price → "Get started" (per-service checkout via `isPlaceholder` fallback). Notably, `/ai-receptionist`'s "Awake vs Climbing" two-card fork (lines ~213–321) becomes one clear "what's included + price" block — or, if D2 split, two side-by-side service blocks (Voice / Chat-DM) without "tier" badges.
- [ ] **8.3** Update the competitive comparison table (`/ai-receptionist`) to compare the **service**, not "AlgoNyte Awake."
- [ ] **8.4** `app/lead-generator/page.tsx`: re-anchor to the relevant service (Voice AI or Ads per D2/D1), not "Climbing."
- [ ] **8.5** Update each page's `metadata` title/description and JSON-LD to the service's own price.
- [ ] **8.6** `npm run typecheck` after each file.

---

## Task 9 — Site metadata, sitemap, redirects

- [ ] **9.1** `lib/site.ts` — rewrite `description` from "Three offerings: Found/Awake/Climbing…" to the service catalog. Keep `tagline`.
- [ ] **9.2** `app/sitemap.ts` — ensure every service detail page is listed; adjust priorities so service pages rank with `/pricing` and `/services`.
- [ ] **9.3** `next.config.ts` — add anchor aliases / any 301s required by D3.

---

## Task 10 — Audit remaining tier-referencing files

For each of `app/locations/macomb/page.tsx`, `app/locations/chicago/page.tsx`, `app/locations/[slug]/page.tsx`, `app/industries/auto-dealerships/page.tsx`, `app/industries/[slug]/page.tsx`, `app/about/AboutContent.tsx`, `app/book/BookContent.tsx`, `app/insights/car-hub-macomb-case-study/page.tsx`, `components/sections/WhyNot.tsx`, `components/ServicesFlowVisual.tsx`, `components/BookingModal.tsx`, `lib/landing.ts`, `lib/content/industries.ts`, `lib/content/locations.ts`:

- [ ] **10.1** `grep -n "tiers\|Tier\|Found\|Awake\|Climbing\|offering\|package\|/pricing#\(found\|awake\|climbing\)" <file>`.
- [ ] **10.2** Replace structural tier references with the service model; rewrite "Found/Awake/Climbing" prose to service names; update `/pricing#tier` links to service anchors/pages. Be careful: lowercase "growth"/"presence"/"package" may appear in unrelated copy — only edit structural references.
- [ ] **10.3** Re-grep each file → no structural matches remain. `npm run typecheck` after each.

---

## Task 11 — Delete the tier module + final type pass

- [ ] **11.1** `grep -rn "from \"@/lib/tiers\"\|siteTiers\|growthTiers\|\btiers\b" --include="*.ts*" . | grep -v node_modules | grep -v .next | grep -v docs/superpowers` → expect no app/component/lib hits.
- [ ] **11.2** `git rm lib/tiers.ts lib/tiers.test.ts`. Delete `components/sections/ProductGrid.tsx` if still present and unused.
- [ ] **11.3** `npm run typecheck` → PASS. `npm run lint` → PASS.

---

## Task 12 — Docs

- [ ] **12.1** `MIGRATION.md` — append a `## 2026-06-04 — À la carte services` section: what was removed (3 packages, `lib/tiers.ts`), the new `services` model, schema changes, redirect/anchor notes, SEO impact.
- [ ] **12.2** `LAUNCH_CHECKLIST.md` — replace per-tier launch checks with per-service checks; add "confirm real per-service prices (D1)" and "create per-service GHL checkout links (D5)" as gating items.
- [ ] **12.3** `SEO_NEXT.md` — retarget any tier-specific keyword notes to per-service intent.

---

## Task 13 — Verification

- [ ] **13.1** `npm run lint && npm run typecheck && npm run test && npm run build` → all PASS in order.
- [ ] **13.2** `npm run dev` and walk every changed page: `/`, `/services`, `/pricing`, and all 7 service detail pages. Each loads, no console errors, prices render, CTAs route (placeholder → `/contact`).
- [ ] **13.3** Inspect rendered JSON-LD: `pricingSchema` low/high match the new prices; each service schema is a single `Offer` at its own price; no "Found/Awake/Climbing" left in schema.
- [ ] **13.4** Confirm no stat is an un-sourced metric — every `stat.value` is published-on-site, a model fact, or `TO VERIFY` (D6).
- [ ] **13.5** Final grep for `Found|Awake|Climbing|tiers` across `app/`, `components/`, `lib/` (excluding `docs/superpowers`) → clean.

---

## Commit

- [ ] **14.1** `git add -A`, review diff.
- [ ] **14.2** Commit: `feat: replace packages with à la carte services` + body referencing the spec. Pre-commit runs lint-staged; if it fails, fix and make a NEW commit (never `--no-verify`, never amend).
- [ ] **14.3** `git push -u origin claude/stoic-mccarthy-82nsf`.

---

## Plan self-review

- **Coverage:** data model + tests (T1), constants/retire tiers (T2, T11), schema (T3), new components (T4), homepage (T5), services (T6), pricing (T7), 7 service pages (T8), site/sitemap/redirects (T9), wide audit (T10), docs (T12), full verify (T13). ✓
- **Gated unknowns:** D1 pricing, D2 reception split, D3 /pricing fate — all surfaced as review gates, not guessed.
- **No fabrication:** prices are `PRICING TBD` placeholders; stats bound by the sourcing rule.
- **Highest-judgment task:** T8 (`/ai-receptionist` de-tiering) and T10 (`lead-generator`, locations/industries prose). Dispatch with extra context if using subagents; mark `// REVIEW:` rather than guessing.
- **Safety net:** typecheck + build catch the wide blast radius, same as the 2026-05-20 rework.
