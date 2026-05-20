# Migration: farooquidigital.com → algonyte.com

**Status:** In progress as of 2026-05-14.
**Old domain:** farooquidigital.com
**New primary domain:** algonyte.com
**New secondary:** algonytelabs.com (301 → algonyte.com)

URL structure is unchanged — every path on the old site maps 1:1 to the same path on the new domain. No content reorganization, no slug rewrites.

---

## Phase 1: Pre-cutover (do BEFORE DNS flips)

### 1.1 Baseline capture (must do before changing anything live)

Record these in a single dated note (drop in `MIGRATION.md` under "Baseline" section, or a separate `MIGRATION_BASELINE.md`):

- [ ] **GSC traffic snapshot:** last 28 days clicks, impressions, top 10 pages, top 10 queries, average position. Screenshot or export CSV.
- [ ] **GA4 baseline:** last 28 days sessions, conversions, top sources, bounce rate.
- [ ] **Lighthouse scores:** run Lighthouse on production for /, /services, /pricing, /book, /locations/macomb. Save scores per page.
- [ ] **Indexed page count:** GSC > Pages > Indexed. Record the number.
- [ ] **Backlinks snapshot:** if you have Ahrefs/Semrush, export. Otherwise screenshot GSC Links report.
- [ ] **Ranking positions:** for the 10 keywords that matter most (e.g., "AI receptionist Macomb", "ai receptionist for service businesses", "missed call text back"), record current rank from incognito search.

This baseline is the only way to know whether the migration cost you traffic or not.

### 1.2 Code changes (status)

- [x] `siteConfig.url` = `https://algonyte.com`
- [x] All copy + JSON-LD strings updated to "Algonyte Labs"
- [x] `llms.txt` updated with new domain and brand
- [x] Privacy / Terms entity + URLs updated
- [x] New IndexNow key file `51c397bb0929deb0d40fd082515fa9f6.txt` generated for new domain
- [ ] Old IndexNow file `e9586e0337d9405cad199f944cd2e9b5.txt` should stay in `/public` for now so the old domain continues responding to IndexNow validation during the 301 period
- [ ] Email address `yaseen@algonyte.com` — pending DNS MX setup
- [ ] Logo files — pending new SVG/PNG drops in `/public`
- [ ] Brand color tokens in `tailwind.config.ts` — pending exact hex values from new gradient

### 1.3 Vercel domain setup

In the Vercel dashboard for this project:

- [ ] Add `algonyte.com` as a domain to the project
- [ ] Add `www.algonyte.com` as a domain to the project (redirects to apex)
- [ ] Add `algonytelabs.com` as a domain (will 301 to algonyte.com via Vercel)
- [ ] **Set `algonyte.com` as the primary domain**
- [ ] Keep `farooquidigital.com` and `www.farooquidigital.com` on the project — Vercel will automatically 301 them to the new primary
- [ ] Verify SSL certificates issue for all four domains (Vercel does this automatically; may take a few minutes)

### 1.4 DNS

For `algonyte.com` (and `algonytelabs.com`):

- [ ] Point apex A record (or ALIAS/ANAME) to Vercel: `76.76.21.21`
- [ ] Point `www` CNAME to `cname.vercel-dns.com`

For `farooquidigital.com`: leave DNS unchanged. Vercel handles the 301 at the platform level once domains are configured.

### 1.5 Pre-flight test (do this 24 hours before announcing cutover)

- [ ] Visit `https://algonyte.com/` — confirm site renders
- [ ] Visit `https://algonyte.com/sitemap.xml` — confirm all URLs use `algonyte.com`
- [ ] Visit `https://algonyte.com/robots.txt` — confirm sitemap reference is correct
- [ ] Visit `https://algonyte.com/llms.txt` — confirm domain is correct
- [ ] Hit `https://farooquidigital.com/locations/macomb` and confirm browser shows the URL redirecting to `https://algonyte.com/locations/macomb`
- [ ] Hit `https://algonytelabs.com/` and confirm 301 to `https://algonyte.com/`
- [ ] Run JSON-LD validator against `https://algonyte.com/` — confirm Organization.url and LocalBusiness reference the new domain
- [ ] Submit one URL via IndexNow API using the new key to verify the new key file is accessible

---

## Phase 2: Cutover day

### 2.1 Search engines

- [ ] **Google Search Console:**
  - Verify `algonyte.com` (DNS TXT or HTML tag) as a new property
  - Submit `https://algonyte.com/sitemap.xml`
  - In the OLD farooquidigital.com property: Settings → Change of Address → select `algonyte.com` → submit
  - Request indexing for top 10 pages
- [ ] **Bing Webmaster Tools:**
  - Add `algonyte.com` as a new site
  - Import config from farooquidigital.com (Bing supports this)
  - Submit new sitemap
  - Submit Site Move request (Bing Webmaster > Diagnostics > Site Move)
- [ ] **IndexNow:**
  - The new key file is already in `/public`. Once `algonyte.com` is live, you can ping IndexNow with the new key.

### 2.2 Business listings

- [ ] **Google Business Profile:** edit URL from farooquidigital.com to algonyte.com. **Warning:** Google Business Profile can flag rapid changes — be prepared for a 24-72 hour review.
- [ ] **Bing Places:** same update
- [ ] **Apple Maps Connect:** same update
- [ ] Any industry-specific directories (Yelp, BBB, Angi, etc.) where the business is listed

### 2.3 Third-party integrations

- [ ] **LeadConnector / GoHighLevel:**
  - Update chat widget allowed origins to include `algonyte.com`
  - Update any embed URLs or webhook URLs that reference farooquidigital.com
- [ ] **Google Analytics 4 (G-449SQXFKS9):**
  - Add `algonyte.com` to "Data streams" → web stream → Configure tag → Configure your domains
  - Keep farooquidigital.com in there too while redirects are live
- [ ] **Vercel Analytics:** automatic, no action needed
- [ ] **Any active ad campaigns (Meta, Google):** pause briefly, update destination URLs to algonyte.com, relaunch
- [ ] **Email signatures, business cards, vehicle wraps, social profiles:** update at your own pace; the 301s mean old URLs still resolve

### 2.4 Email

- [ ] Set up `yaseen@algonyte.com` (Google Workspace, Fastmail, or whatever you use)
- [ ] Keep `yaseen@farooquidigital.com` active and forwarding to the new address for at least 12 months

---

## Phase 3: Post-migration monitoring

### Week 1 (daily check, 5 min)

- [ ] GSC Coverage report — watch for 404 spikes (means a redirect is broken)
- [ ] Crawl errors — fix anything that surfaces
- [ ] GA4 sessions — should NOT drop more than 20-30% during the first week; if it does, investigate
- [ ] Indexation: GSC URL Inspection on `/` and 3-5 deep pages to confirm Google is recrawling and reindexing on the new domain
- [ ] Lighthouse on `algonyte.com/` — should match the baseline

### Weeks 2-4 (weekly check, 10 min)

- [ ] Compare GSC traffic week-over-week against baseline
- [ ] Spot-check rankings for the 10 keywords from baseline — expect 20-40% temporary dips, full recovery in 4-12 weeks
- [ ] Watch for "Indexed, not submitted in sitemap" warnings on old farooquidigital.com URLs in GSC — Google has now seen the canonical change, so these should resolve

### Day 60 diagnostic (if recovery is lagging)

If traffic on `algonyte.com` is still <70% of baseline by day 60:

- [ ] Confirm 301s still active on every old URL (sample 20 from baseline)
- [ ] Confirm GSC Change of Address request is in "Done" state
- [ ] Check for any new tech SEO issues (canonical mismatches, crawl errors)
- [ ] Audit backlinks — if any high-authority links still point at farooquidigital.com, the 301 is carrying the equity but it's worth reaching out to update the most valuable ones manually

---

## Phase 4: Long-term (12+ months out)

- [ ] **Do NOT decommission farooquidigital.com for at least 12 months.** The 301s need that long to fully transfer equity. Renew the domain on autopay.
- [ ] After 12 months: monitor traffic from farooquidigital.com URLs in GSC. If it's near zero, you can safely let it lapse. But honestly, the renewal fee ($10-15/yr) is cheap insurance — just keep it forever.

---

## What I (the dev) need from you next

In rough order:

1. **Confirm DNS is yours to manage** — are algonyte.com and algonytelabs.com on Cloudflare like farooquidigital.com, or different registrar?
2. **Decide cutover date** — recommend a slow weekday (Tuesday/Wednesday morning) so we have full business hours to fix anything that breaks. Avoid weekends.
3. **Drop the new logo files in `/public`** — list is in the previous chat message.
4. **Send me the gradient hex values** for the new brand so I can update tailwind tokens before the cutover (visual rebrand wants to happen at the same moment as the URL change, otherwise the old farooquidigital.com 301s land users on a site that still looks "old").
5. **Tell me when you've configured the domain in Vercel** and I'll do the pre-flight tests.
