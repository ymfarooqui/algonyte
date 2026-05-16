# SEO — Next Session Plan

Last updated: 2026-05-13

## What's done

- Foundation: per-page metadata + canonicals, Organization + ProfessionalService + BreadcrumbList schema across all pages, dynamic OG image, sitemap, robots (AI crawlers allowed), llms.txt.
- Schema gaps closed: Macomb added to `areaServed`, `FAQPage` on /services, `Article` on case study, `Person` schema on /about already had headshot.
- Roadmap Week 1 shipped: `/locations/macomb` + `/insights/car-hub-macomb-case-study`.
- Lighthouse CI wired (PR + main).
- GSC verification reads from `GOOGLE_SITE_VERIFICATION` env var.

## Pick up here next session

### 1. Submit + verify (10 min, blocking everything downstream)

- [ ] Claim Google Search Console property via DNS TXT (preferred) or set `GOOGLE_SITE_VERIFICATION` in Vercel env.
- [ ] Submit `https://algonyte.com/sitemap.xml` in GSC.
- [ ] Submit same sitemap in Bing Webmaster (already verified).
- [ ] Request indexing for `/locations/macomb` and `/insights/car-hub-macomb-case-study`.
- [ ] Validate both new pages: https://validator.schema.org and https://pagespeed.web.dev.

### 2. Get Car Hub specifics (high leverage)

The case study page is generic-but-true. Real numbers will make it rank and get cited by AI.

Ask Car Hub owners for:
- Exact call/text/form-fill counts week 1.
- Revenue captured by those 10 jobs (range is fine: "$3k-$6k worth of work").
- Hours/day saved on voicemail triage.
- Any specific scenarios (after-hours story, complaint escalation save, etc.).
- Permission to use shop name + owner first name on the page.

Then patch `app/insights/car-hub-macomb-case-study/page.tsx` with the specifics.

### 3. Roadmap Week 2: Chicago + Auto Dealerships

Per [seo_build_roadmap.md](~/.claude/projects/-Users-yaseenfarooqui-Projects-farooqui-digital/memory/seo_build_roadmap.md), next builds are:
- `/locations/chicago` — pattern off Macomb page, but Chicago-specific (Lincoln Park, West Loop, Bucktown service businesses; Lake Shore Drive corridor; suburbs separately).
- `/industries/auto-dealerships` — different angle from Car Hub (auto **repair**). Dealerships need test-drive scheduling, finance-team handoff, after-hours showroom inquiries. Pull the Car Hub credibility but reframe.

Each must be 800+ words of unique content (no template-with-city-swap). Add to sitemap as each ships.

### 4. Roadmap Week 3-4

- `/locations/detroit` + `/industries/home-services` (HVAC/plumbing/roofing — emergency dispatch angle).
- `/insights/ai-receptionist-vs-virtual-assistant` + `/insights/missed-call-text-back-guide`.

### 5. Later

- `/locations/oak-brook` + `/industries/trades`.
- Once ≥3 real /insights posts exist, flip `app/insights/page.tsx` from `robots: { index: false }` to indexable and add `/insights` back to sitemap.
- Cookie banner if Meta Pixel / Google Ads remarketing gets turned on.

### 6. Quarterly maintenance (set calendar reminder)

- Re-check Lighthouse scores in production.
- Rerun `web_search` / competitor scan for new entrants in "AI receptionist [city]" queries.
- Refresh `llms.txt` if pricing or service area changes.
- Verify schema still validates (Schema.org sometimes deprecates fields).

## Open questions for Yaseen

1. GSC: do you want DNS TXT verification, or should I add the meta tag once you give me the token?
2. Can we get real Car Hub numbers, or do we ship the case study as-is for now?
3. For /locations/chicago — are you targeting the city proper, the metro (including Naperville/Oak Brook/etc.), or both? Affects keyword strategy.
4. Any new clients besides Car Hub we can cite? Even by industry without naming them ("a roofer in Shelby Township") adds proof.

## Files to know

- `app/locations/macomb/page.tsx` — pattern to copy for other location pages.
- `app/insights/car-hub-macomb-case-study/page.tsx` — pattern for case studies + Article schema.
- `lib/breadcrumbs.ts` — drop into any new page.
- `app/sitemap.ts` — add new routes here.
- `public/llms.txt` — update when pricing/services/areas change.
