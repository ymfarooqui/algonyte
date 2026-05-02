# Edit Log

A running log of content edits so original text can be restored if needed.
Newest at the top. Code-only / structural changes are not tracked here unless
they removed user-facing copy.

---

## 2026-05-02 — Site-wide restructure (nav, pages, components)

**Goal:** tighten the funnel (Home → Why Us → Services → About → FAQ → Contact),
fold short single-purpose pages into Home/Services, give the lead-magnet CTA its
own landing page, and add a "Now booking first clients" band so the lack of
portfolio examples reads as a feature rather than a gap.

### Nav reorder

**Before:** Home · Services · How It Works · Why Us · About · FAQ · Contact
**After:**  Home · Why Us · Services · About · FAQ · Contact

### Pages removed

- `app/how-it-works/page.tsx` — folded into a condensed `ProcessStrip` section
  on `/services` (anchor `#process`).
- `app/audience/page.tsx` — folded into `AudienceStrip` on the home page
  (anchor `#who-its-for`).

Permanent (308) redirects added in `next.config.ts`:
- `/how-it-works` → `/services#process`
- `/audience` → `/#who-its-for`

`app/sitemap.ts` updated to match. Two unused components also deleted:
`components/HowItWorks.tsx` and `components/Audience.tsx`.

### Pages added

- `app/free-review/page.tsx` — landing page for the "Get a Free Website Review"
  CTA. Hero + "What you get" bullets + "What to expect" panel + ContactForm.

### Components added

- `components/WhyUsPreview.tsx` — 3-bullet condensed Why Us, with a button to
  the full `/why-us` page. Lives on Home.
- `components/AudienceStrip.tsx` — replacement for the old `/audience` page,
  used on Home.
- `components/ProcessStrip.tsx` — 4-step condensed How It Works, used on
  `/services`.
- `components/FirstClientsBand.tsx` — dark "Now booking first clients" band
  at the bottom of Home with intro-pricing framing.
- `components/FounderBio.tsx` — founder credentials block on `/about`.
  **Note:** copy is a placeholder bio; replace with your actual background.

### Page changes

- **Home (`app/page.tsx`)** — now reads:
  Hero → Problem → Solution → WhyUsPreview → AudienceStrip → ServicesTeaser →
  FirstClientsBand. (Previously: Hero → Problem → Solution → ServicesTeaser.)
- **`/services`** — added `ProcessStrip` between AddOns and FinalCta.
- **`/about`** — values trimmed from 4 to 3 (removed "Built to be used, not
  admired" — overlapped with "Clarity over cleverness"). FounderBio appended to
  the bottom of the page. CTA "See How It Works" replaced with "Get a Free
  Website Review" pointing to `/free-review`.

### CTA repointing (was `/contact`, now `/free-review`)

The "Get a Free Website Review" button across the site now lands on the new
dedicated page rather than the generic contact form:

- `components/Hero.tsx`
- `components/Header.tsx` (desktop + mobile menu)
- `components/FinalCta.tsx`
- `components/FirstClientsBand.tsx` (new)

`/contact` is preserved for "Request a Quote" and general inquiries.

### Removed value (4 → 3 on About)

> **Built to be used, not admired**
> We optimize for the real customer journey: load fast, read easily, work on
> phones, convert reliably. Pretty is a bonus, not the brief.

---

## 2026-05-01 — Em-dashes / AI-tells removed

Removed em-dashes (—) and `&mdash;` from prose across `app/about/page.tsx`,
`components/Contact.tsx`, `components/ContactForm.tsx`, `components/WhyUs.tsx`,
and `app/opengraph-image.tsx`. En-dashes (–) in price ranges were kept (they
are correct typography for ranges, not AI prose).

`components/WhyUs.tsx` lede also rewritten away from the "is not just designed
to X. It is Y." parallel construction.

**Original WhyUs lede:**

> Farooqui Digital combines website building with a QA and usability mindset.
> That means your site is not just designed to look good. It is reviewed for
> clarity, ease of use, performance, and real customer behavior.

**Now reads:**

> Farooqui Digital combines website building with a QA and usability mindset.
> Your site does not just look good. It works for clarity, ease of use,
> performance, and real customer behavior.

---

## 2026-05-01 — `components/ServicesTeaser.tsx` — removed pill bubbles

**Removed three pills that sat under the headline:**

> Builds, audits & refreshes
> Fixed prices, no surprises
> No retainers required

Now the teaser is just: eyebrow + headline + CTA button.

---

## 2026-05-01 — `components/ServicesTeaser.tsx` — removed lede paragraph

**Removed paragraph (was between the H2 and the pill row):**

> Builds, audits, refreshes, and care plans — every option with a clear price, a
> clear deliverable, and a clear timeline. Pick what fits your business today.

The three pills underneath were kept as-is.

---

## 2026-05-01 — `components/Problem.tsx` — removed third paragraph

**Removed paragraph (was the third `<p>` in the lede):**

> We build websites with clarity from the start and audit existing websites to uncover
> the friction, confusion, and performance issues that may be costing you leads.

Kept: the headline, the first paragraph, and the bold "Farooqui Digital helps you fix that." line.

---

## 2026-05-01 — `components/Hero.tsx` — trimmed bottom tagline

**Original line:**

> Easy-to-use websites. Clear recommendations. No agency bloat.

**Now reads:**

> Clear recommendations. No agency bloat.

(Dropped "Easy-to-use websites." — implied by the headline above it.)

---

## 2026-05-01 — `components/Hero.tsx` — lede rewrites (chronological)

The lede paragraph under the H1 was rewritten several times this session.
Each version is preserved below in the order it existed.

**v1 — original:**

> Farooqui Digital builds simple, professional websites for small businesses and helps
> improve existing sites through usability audits, performance checks, and
> conversion-focused recommendations.

**v2:**

> Simple, professional websites for small businesses. Usability audits, performance
> checks, and conversion-focused recommendations to improve the site you already have.

**v3:**

> Simple websites for small businesses. Audits, performance checks, and clear fixes for
> the one you already have.

**v4 (two lines):**

> Built custom for small businesses.
> Already have a website? Find out if it's costing you customers.

**v5 — current:**

> Already have a website? Find out if it's costing you customers.

---

## 2026-05-01 — `components/ServicesTeaser.tsx` — pricing pill swap

**Original pill (placeholder):**

> Starter builds from $X

**Now reads:**

> Builds, audits & refreshes

(Other two pills unchanged: "Fixed prices, no surprises" and "No retainers required".)

---

## How to use this log

If you want to restore any version, copy the quoted text back into the file
referenced in the heading. File paths are relative to the repo root.
