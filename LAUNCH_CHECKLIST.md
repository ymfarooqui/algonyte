# Launch Checklist — Algonyte Labs

Last updated: 2026-05-09

---

## Status: **Live in production.** ✅

All pre-deploy must-do items are complete. Site is deployed on Vercel, DNS is live via Cloudflare, contact form works, legal pages are published. The remaining items below are post-launch follow-ups — none of them block ongoing operation.

---

## Should-do soon after launch (week 1)

### 1. Wire the GHL checkout URLs
- **Where:** `lib/constants.ts` → `plans[].checkoutUrl`
- **Today:** Pricing CTAs gracefully fall back to "Talk to us" → `/contact` while placeholders are present, so the site is not broken — but you can't capture self-serve subscriptions until these are real.
- **You:** Set up the six SaaS plans in GHL with Stripe, get the checkout URLs.
- **Me:** Drop them into the constants once you have them. Confirm setup fees are configured per tier: Open ($300), Found ($600), Polished ($1,000), Awake ($329), Climbing ($500), Scale ($500).

### 2. SocialProof metrics — finish softening
- **Where:** `components/sections/SocialProof.tsx`
- **Today:** $60K stat is now anchored to "one client's first year" ✅. The other two (72% faster reply / 60-sec response) are still presented as raw facts. If those came from research/aspirational data rather than your own measurements, soften them the same way.
- **You:** Confirm the source for 72% and 60 sec, or label them similarly.

### 3. Decide on the trust-block companies
- **Where:** `components/sections/AboutSnippet.tsx` — two marquee rows of 12 brand logos plus three example claims (Amazon / Walmart / Klarna).
- **Risk:** Verifiable claims, but uses other companies' names without permission. A lawyer might want a "Source: company press releases" footnote, or a swap to actual clients/partners once you have any.
- **You:** Decide whether to keep, swap, or have me add citations.

### 4. LinkedIn URL
- **Where:** `lib/constants.ts` → `social.linkedin`
- **Today:** Footer LinkedIn icon hidden because it's a placeholder.
- **You:** Send me the URL.

### 5. Calendar embed verification
- **Today:** `/book` uses calendar `client-calls-demos-4063` on leadconnectorhq.com. `/contact` only has the form.
- **You:** Confirm the existing calendar URL is the one you want, or set up an "AI Automation Audit" type in GHL and send the new inline URL.
- **Me:** Optionally add the calendar next to the form on `/contact` if you want it there too.

---

## Post-launch follow-ups (week 2+)

### 6. Search Console + sitemap submission
- Add the site to Google Search Console (verify via Vercel meta tag or DNS TXT)
- Submit `https://algonyte.com/sitemap.xml`
- Vercel Analytics + GA4 (`G-449SQXFKS9`) are already wired ✅

### 7. Lighthouse + cross-browser pass
Run Lighthouse against the production URL. Aim for 90+ across the board. Test specifically on iPhone Safari and Android Chrome — that's where most of your traffic will land.

### 8. /insights — write content or keep noindexed
- **Today:** Page is a "Coming soon" placeholder. Already removed from nav, `noindex`-ed, and removed from sitemap ✅.
- **You:** Write 1–3 short posts when you have bandwidth. When you do, flip the `robots` flag back to `index: true` in `app/insights/page.tsx` and re-add the route to `app/sitemap.ts`.

### 9. Cookie banner (only if you start running ads)
Vercel Analytics is cookieless and GA4 is anonymized — you don't *need* a banner today. If you start running Meta Pixel / Google Ads remarketing, you'll want one for clean GDPR/CCPA posture.

### 10. Real headshot (optional)
Current `/public/yf-headshot.jpg` works, alt text is rich. Swap if you have something better.

### 11. CTA event tracking (optional)
Add PostHog or Plausible events on the booking button + pricing-tile CTAs if you want to measure conversion funnels with more granularity than GA4.

### 12. Image stubs ready to fill
- `HowItWorks` has a commented stub for `/public/dashboard-screenshot.png` (real GHL inbox or pipeline view)
- `SocialProof` has a commented stub for `/public/clients/car-hub-macomb.jpg` (photo of the dealership)
- Drop the file at the path in the TODO and uncomment the block — alt text already written.

---

## Done — ready to ship as of this revision ✅

### Legal & infrastructure
- **Privacy Policy** at `/privacy` — full GDPR/CCPA-aware text, GHL+Stripe+Vercel+Formspree disclosures, 24/36-month retention, contact at `yaseen@algonyte.com`, address `545 N McClurg Ct, Chicago, IL 60611`
- **Terms of Service** at `/terms` — Illinois governing law, AI output disclaimer, subscription/cancellation/refund terms, IP, indemnity, liability cap
- **Footer** links Privacy + Terms
- **Vercel deploy** live, `NEXT_PUBLIC_FORMSPREE_ENDPOINT` env var configured ✅
- **DNS** live via Cloudflare → Vercel ✅
- **Contact form** verified working end-to-end ✅
- **GHL chat widget** embedded in layout (widget-id `69fee264ba1fcefce9ee914b`) ✅

### Content & positioning
- Pivoted positioning + content to AI lead-automation across home, services, pricing, about
- Pricing features rebuilt around the named offerings (Missed Call Text Back, Voice AI 24/7, etc.)
- Comparison table on `/pricing` and homepage `PricingPreview` reflect the new offerings
- Real Car Hub Macomb testimonial replaces placeholder quotes
- $60K metric softened to "Saved in one client's first year"
- "We don't do sales pitches" stripped from all pages and meta descriptions
- HowItWorks step 3 copy fixed (no longer implies the customer is the one showing up)

### Visual & layout
- Hero photo iteratively cropped + styled — final at 1482×791, rounded with shadow + ring
- Hero photo now visible on mobile (between lede and CTAs)
- Phone mockup wired into ProblemHook from `/public/phone-mockup.png`
- Brand logos rebuilt: Microsoft 4-color squares, Google multicolor G, Walmart yellow spark mark
- Marquee split into two distinct rows of 6
- Homepage trimmed from 11 → 8 sections; SocialProof reordered above PricingPreview so trust precedes price
- Header nav simplified to Services · Pricing · About + "Get a walkthrough" CTA
- Pricing tile CTAs and services tile CTAs unified (`btn-primary w-full`, bottom-aligned)
- AboutSnippet eyebrow removed, closing CTA centered

### SEO & schema
- Organization + LocalBusiness JSON-LD in layout ✅
- Person JSON-LD for founder on `/about` ✅
- Service + Offer + AggregateOffer JSON-LD on `/pricing` (per-plan, with monthly + setup fee specs) ✅
- All page metadata (title, description, canonical, OG, Twitter) configured ✅
- OG image generated via `app/opengraph-image.tsx` ✅
- `/insights` noindexed and removed from sitemap (placeholder page) ✅
- Headshot alt text rich with role + brand keywords ✅

---

## Reference: where things live

- **Site config:** `lib/site.ts`
- **Plans, checkout placeholders, calendar URL:** `lib/constants.ts`
- **Animations:** `lib/motion.ts`
- **Routes:** `app/{about,book,contact,insights,pricing,privacy,services,terms}/page.tsx`
- **Homepage sections:** `components/sections/`
- **Header / Footer:** `components/Header.tsx`, `components/Footer.tsx`
- **Sitemap / Robots / OG image:** `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`
- **JSON-LD schemas:** Organization + LocalBusiness in `app/layout.tsx`; Person in `app/about/page.tsx`; Service/Offer/AggregateOffer in `app/pricing/page.tsx`
