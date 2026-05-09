# Launch Checklist — Farooqui Digital

What's left before we take the new site live, grouped by what blocks launch vs. what doesn't.
For each item: who does it (you / me / both) and where in the codebase it lives.

---

## Must-have (page is broken or misleading without these)

### 1. Wire the GHL checkout URLs
- **Where:** `lib/constants.ts` → `plans[].checkoutUrl`
- **Today:** `[PLACEHOLDER_GHL_CHECKOUT_STARTER/GROWTH/PRO_AI]`. While placeholders are in place, the pricing CTAs label themselves "Talk to us" and route to `/contact` so nothing 404s. Real URLs will switch the buttons back to "Get Started".
- **You:** Set up the three SaaS plans in GHL with Stripe, get the checkout URLs.
- **Me:** Drop them into the constants once you have them.

### 2. Contact form backend
- **Status:** Done locally. `.env.local` has `NEXT_PUBLIC_FORMSPREE_ENDPOINT` set.
- **You (deploy):** Re-add the same env var in Vercel → Settings → Environment Variables before deploying, since `.env.local` is gitignored.

### 3. Decide on the trust-block company names
- **Where:** `components/sections/AboutSnippet.tsx` — Amazon / Walmart / Meta / Microsoft / Shopify / Klarna with three example claims.
- **Risk:** Verifiable but uses other companies' names without permission. Fine as commentary, but a lawyer might want a "Source: company press releases" footnote, or a swap to actual clients/partners once you have any.
- **You:** Decide whether to keep, swap, or have me add citations.

### 4. Real testimonials (or remove the block)
- **Where:** `components/sections/SocialProof.tsx` — two `[PLACEHOLDER quote]` cards.
- **You:** Get 1–2 quotes from real clients with specific results, OR tell me to remove the testimonial cards entirely and keep just the metrics.

### 5. The metrics on SocialProof
- **Where:** Same file. Currently 72% / 60 sec / $60K+ — these came from the original brief, not from your real data.
- **You:** Confirm or adjust. If you don't have real numbers yet, swap to softer language ("Up to" or "Aiming for").

### 6. Privacy Policy and Terms
- **Today:** Don't exist. Footer no longer links to them, but you need them for: GHL/Stripe terms, Google Ads, Meta Ads, anywhere collecting form data.
- **You:** Generate via Termly / iubenda / Privacy Policy Generator (~$10–30) or have a lawyer review.
- **Me:** Drop the resulting text into `app/privacy/page.tsx` and `app/terms/page.tsx`, re-link in footer.

---

## Should-have (page works, but missing important stuff)

### 7. GHL chat widget
- **Today:** Not embedded anywhere. Brief asked for it.
- **You:** Get the chat widget script src from GHL.
- **Me:** Embed in `app/layout.tsx` head with the right theme/accent.

### 8. Calendar embed on /contact
- **Today:** Not embedded. /contact only has the form.
- **You:** Set up an "AI Automation Audit" appointment type in GHL, get the inline embed URL.
- **Me:** Add it next to the form on `/contact`.

### 9. Open Graph image
- **Status:** Rewritten to the new positioning ("Your business should run while you sleep" + automation tagline).
- **Optional:** swap the gradient background or add a screenshot of the dashboard once you have one.

### 10. LinkedIn URL
- **Where:** `lib/constants.ts` → `social.linkedin`
- **Today:** Footer LinkedIn icon hidden because it's a placeholder.
- **You:** Send me the URL.

### 11. /insights — content or hide
- **Today:** Page exists with three "[Post title]" placeholders. Looks bare.
- **Options:**
  - (a) Write 1–3 short posts before launch
  - (b) Remove "Insights" from the nav until you have content; keep the page for SEO
- **Recommendation:** (b)
- **You:** Pick.

### 12. Email setup
- **Where:** `lib/constants.ts` → `contact.email = "hello@farooquidigital.com"`
- **You:** Confirm this address actually exists and you're checking it. If not, change it or set it up.

### 13. Domain + hosting
- **Today:** Local-only.
- **You:** Deploy to Vercel (assuming, since `@vercel/analytics` is in `package.json`), point `farooquidigital.com` DNS at it.
- **Me:** Walk through Vercel deploy if you want, or you can do it from the dashboard in five minutes.

---

## Nice-to-have (post-launch is fine)

### 14. Real headshot
Current `/public/yf-headshot.jpg` works. If you have something better, swap it.

### 15. Cookie banner
Only needed if you run ads or want clean GDPR posture. Vercel Analytics is cookieless.

### 16. Search Console + Analytics
- Add the site to Google Search Console (verify via Vercel meta tag or DNS)
- Vercel Analytics is already wired via `@vercel/analytics`
- Optional: PostHog or Plausible if you want CTA event tracking

### 17. Lighthouse + cross-browser pass
Once on the Vercel preview URL, run Lighthouse. Aim for 90+/95+. Test specifically on iPhone Safari and Android Chrome.

### 18. Schema.org for the plans
Add `Product`/`Offer` JSON-LD for each pricing plan. Helps Google show pricing in search. Low priority.

### 19. Setup fee in checkout
Brief calls for a $399 setup fee on Starter and Growth. Make sure the Stripe products in GHL have this configured as a one-time charge on the first invoice.

---

## Recommended order

1. **Today:** items 4 / 5 / 11 / 12 — decisions you can make in 10 minutes (testimonials, metrics, insights nav, email).
2. **This week:** items 1 / 2 / 7 / 8 — GHL setup work (checkout URLs, form backend, chat widget, calendar embed).
3. **Before going live:** items 3 / 6 / 9 / 10 / 13 — trust block sign-off, legal pages, OG image, LinkedIn URL, deploy.
4. **First week post-launch:** items 14–19 — analytics, polish, performance pass.

---

## Reference: where things live

- **Site config:** `lib/site.ts` (name, URL, description, tagline)
- **Plans + placeholders:** `lib/constants.ts`
- **Animations / motion presets:** `lib/motion.ts`
- **Routes:** `app/{about,contact,insights,pricing,services}/page.tsx`
- **Homepage sections:** `components/sections/`
- **Layout pieces:** `components/Header.tsx`, `components/Footer.tsx`
- **Reusable bits:** `components/CountUp.tsx`
- **Sitemap:** `app/sitemap.ts`
- **Robots:** `app/robots.ts`
- **Open Graph image:** `app/opengraph-image.tsx`
