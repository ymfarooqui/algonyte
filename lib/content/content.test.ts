import { describe, it, expect } from "vitest";
import { industries, industryIndex, getIndustry } from "@/lib/content/industries";
import { locations, locationIndex, getLocation } from "@/lib/content/locations";
import { landingServiceJsonLd, faqPageJsonLd, landingPath, type LandingContent } from "@/lib/landing";
import sitemap from "@/app/sitemap";
import { siteConfig } from "@/lib/site";

// Slugs that have hand-written static routes instead of living in the dynamic
// data. They must appear in the index registries but NOT in the dynamic arrays.
const STATIC_INDUSTRY = ["auto-dealerships"];
const STATIC_LOCATION = ["chicago", "macomb"];

const all: LandingContent[] = [...industries, ...locations];

function bodyWordCount(c: LandingContent): number {
  const text = [
    c.heroSub,
    c.problem.heading,
    ...c.problem.paragraphs,
    c.proof.heading,
    ...c.proof.paragraphs,
    c.local.heading,
    ...c.local.paragraphs,
    ...c.system.map((s) => `${s.title} ${s.body}`),
    ...c.faqs.map((f) => `${f.q} ${f.a}`),
  ].join(" ");
  return text.trim().split(/\s+/).length;
}

describe.each(all.map((c) => [landingPath(c), c] as const))(
  "landing content: %s",
  (_path, c) => {
    it("has a clean slug", () => {
      expect(c.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    });

    it("has a search-friendly meta title (15–70 chars)", () => {
      expect(c.metaTitle.length).toBeGreaterThanOrEqual(15);
      expect(c.metaTitle.length).toBeLessThanOrEqual(70);
    });

    it("has a meta description that won't truncate (70–165 chars)", () => {
      expect(c.metaDescription.length).toBeGreaterThanOrEqual(70);
      expect(c.metaDescription.length).toBeLessThanOrEqual(165);
    });

    it("has hero copy and a non-empty headline", () => {
      expect(c.heroSub.trim().length).toBeGreaterThan(0);
      expect(c.h1.pre.length + c.h1.accent.length).toBeGreaterThan(0);
    });

    it("is not a thin page (>= 450 words of body copy)", () => {
      expect(bodyWordCount(c)).toBeGreaterThanOrEqual(450);
    });

    it("has substantive problem, proof, and local sections", () => {
      expect(c.problem.paragraphs.length).toBeGreaterThanOrEqual(2);
      expect(c.proof.paragraphs.length).toBeGreaterThanOrEqual(1);
      expect(c.local.paragraphs.length).toBeGreaterThanOrEqual(2);
    });

    it("has at least 4 system feature cards, all filled in", () => {
      expect(c.system.length).toBeGreaterThanOrEqual(4);
      for (const card of c.system) {
        expect(card.title.trim().length).toBeGreaterThan(0);
        expect(card.body.trim().length).toBeGreaterThan(0);
      }
    });

    it("has at least 3 unique, substantive FAQs", () => {
      expect(c.faqs.length).toBeGreaterThanOrEqual(3);
      const questions = c.faqs.map((f) => f.q);
      expect(new Set(questions).size).toBe(questions.length);
      for (const f of c.faqs) {
        expect(f.a.length).toBeGreaterThanOrEqual(100);
      }
    });

    it("carries the schema fields for its kind", () => {
      expect(c.serviceType.length).toBeGreaterThan(0);
      if (c.kind === "industry") {
        expect(c.audienceType).toBeTruthy();
        expect(c.geo).toBeUndefined();
      } else {
        expect(c.geo).toBeTruthy();
        expect(c.audienceType).toBeUndefined();
      }
    });
  },
);

describe("slug registries", () => {
  it("dynamic industry slugs are unique", () => {
    const slugs = industries.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("dynamic location slugs are unique", () => {
    const slugs = locations.map((l) => l.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("dynamic arrays never shadow a static route", () => {
    for (const s of STATIC_INDUSTRY) expect(getIndustry(s)).toBeUndefined();
    for (const s of STATIC_LOCATION) expect(getLocation(s)).toBeUndefined();
  });

  it("industry index covers every dynamic slug plus the static route", () => {
    const indexSlugs = industryIndex.map((i) => i.slug);
    for (const i of industries) expect(indexSlugs).toContain(i.slug);
    for (const s of STATIC_INDUSTRY) expect(indexSlugs).toContain(s);
  });

  it("location index covers every dynamic slug plus the static routes", () => {
    const indexSlugs = locationIndex.map((l) => l.slug);
    for (const l of locations) expect(indexSlugs).toContain(l.slug);
    for (const s of STATIC_LOCATION) expect(indexSlugs).toContain(s);
  });

  it("every index entry resolves to a static route or real content", () => {
    for (const it of industryIndex) {
      const ok = STATIC_INDUSTRY.includes(it.slug) || !!getIndustry(it.slug);
      expect(ok, `industry index slug "${it.slug}" has no page`).toBe(true);
      expect(it.title.length).toBeGreaterThan(0);
      expect(it.blurb.length).toBeGreaterThan(0);
    }
    for (const it of locationIndex) {
      const ok = STATIC_LOCATION.includes(it.slug) || !!getLocation(it.slug);
      expect(ok, `location index slug "${it.slug}" has no page`).toBe(true);
      expect(it.title.length).toBeGreaterThan(0);
      expect(it.blurb.length).toBeGreaterThan(0);
    }
  });
});

describe("JSON-LD builders", () => {
  it("builds an industry Service with audience and no price", () => {
    const ld = landingServiceJsonLd(industries[0]) as Record<string, unknown>;
    expect(ld["@type"]).toBe("Service");
    expect(ld.offers).toBeUndefined();
    expect(ld.audience).toBeTruthy();
    expect(ld.areaServed).toBeUndefined();
  });

  it("builds a location Service with areaServed", () => {
    const ld = landingServiceJsonLd(locations[0]) as Record<string, unknown>;
    expect(ld["@type"]).toBe("Service");
    expect(ld.areaServed).toBeTruthy();
    expect(ld.audience).toBeUndefined();
  });

  it("mirrors FAQ count into FAQPage schema", () => {
    const c = industries[0];
    const ld = faqPageJsonLd(c.faqs);
    expect(ld["@type"]).toBe("FAQPage");
    expect(ld.mainEntity).toHaveLength(c.faqs.length);
  });
});

describe("sitemap coverage", () => {
  const urls = new Set(sitemap().map((e) => e.url));
  const abs = (p: string) => `${siteConfig.url}${p}`;

  it("lists every industry and location detail page", () => {
    for (const it of industryIndex) expect(urls).toContain(abs(`/industries/${it.slug}`));
    for (const it of locationIndex) expect(urls).toContain(abs(`/locations/${it.slug}`));
  });

  it("lists the hubs and service-pillar pages", () => {
    for (const p of [
      "/industries",
      "/locations",
      "/database-reactivation",
      "/instant-booking",
      "/ad-management",
    ]) {
      expect(urls).toContain(abs(p));
    }
  });
});
