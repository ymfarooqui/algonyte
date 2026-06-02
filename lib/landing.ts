import { siteConfig } from "@/lib/site";
import { tiers } from "@/lib/tiers";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";

/**
 * Shared content model + JSON-LD builders for the data-driven landing pages
 * (industry + location). Each page's *content* lives in `lib/content/*`; the
 * rendering lives in `components/landing/*`. The goal is DRY infrastructure
 * with genuinely unique copy per entry — never a template-with-city-swap,
 * which Google penalizes as a doorway page.
 */

export type FAQ = { q: string; a: string };
export type FeatureCard = { title: string; body: string };
export type ProseBlock = { heading: string; paragraphs: string[] };

/** Headline split so the template can wrap the accent span without JSX in data. */
export type Heading = { pre: string; accent: string; post?: string };

export type LandingKind = "industry" | "location";

/** How a location maps to schema.org `areaServed`. */
export type LocationGeo =
  | { kind: "suburb"; city: string; state: string }
  | { kind: "neighborhood"; name: string; city: string; state: string };

export type LandingContent = {
  /** URL segment only, e.g. "home-services" (no leading slash). */
  slug: string;
  kind: LandingKind;

  /** Short label for hub cards, breadcrumbs, and nav. */
  indexTitle: string;
  /** One-line summary for the hub grid. */
  indexBlurb: string;

  metaTitle: string;
  metaDescription: string;

  eyebrow: string;
  h1: Heading;
  heroSub: string;

  problem: ProseBlock;
  proof: ProseBlock;
  system: FeatureCard[];
  local: ProseBlock;
  faqs: FAQ[];

  /** schema.org Service.serviceType */
  serviceType: string;
  /** industry pages only — schema.org audience */
  audienceType?: string;
  /** location pages only — schema.org areaServed */
  geo?: LocationGeo;
};

const hub = (kind: LandingKind) => (kind === "industry" ? "industries" : "locations");

export function landingPath(c: Pick<LandingContent, "kind" | "slug">): string {
  return `/${hub(c.kind)}/${c.slug}`;
}

export function faqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function areaServedJsonLd(geo: LocationGeo) {
  if (geo.kind === "suburb") {
    return {
      "@type": "City",
      name: geo.city,
      containedInPlace: { "@type": "State", name: geo.state },
    };
  }
  return {
    "@type": "Place",
    name: geo.name,
    containedInPlace: {
      "@type": "City",
      name: geo.city,
      containedInPlace: { "@type": "State", name: geo.state },
    },
  };
}

export function landingServiceJsonLd(c: LandingContent) {
  const awake = tiers.find((t) => t.id === "awake")!;
  const climbing = tiers.find((t) => t.id === "climbing")!;

  const base = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}${landingPath(c)}#service`,
    serviceType: c.serviceType,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description: c.metaDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: awake.monthly,
      highPrice: climbing.monthly,
      offerCount: 3,
    },
  } as const;

  if (c.kind === "location" && c.geo) {
    return { ...base, areaServed: areaServedJsonLd(c.geo) };
  }
  if (c.kind === "industry" && c.audienceType) {
    return {
      ...base,
      audience: { "@type": "BusinessAudience", audienceType: c.audienceType },
      subjectOf: {
        "@type": "CreativeWork",
        name: "Car Hub Macomb case study",
        url: `${siteConfig.url}/insights/car-hub-macomb-case-study`,
      },
    };
  }
  return base;
}

export function landingBreadcrumb(c: LandingContent) {
  const hubLabel = c.kind === "industry" ? "Industries" : "Locations";
  return breadcrumbJsonLd([
    { name: hubLabel, path: `/${hub(c.kind)}` },
    { name: c.indexTitle, path: landingPath(c) },
  ]);
}
