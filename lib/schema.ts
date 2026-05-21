import { tiers, type Tier } from "./tiers";
import { siteConfig } from "./site";

function tierOffer(tier: Tier) {
  return {
    "@type": "Offer",
    name: tier.name,
    price: tier.monthly,
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: tier.monthly,
      priceCurrency: "USD",
      unitCode: "MON",
      referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
    },
    eligibleTransactionVolume: {
      "@type": "PriceSpecification",
      price: tier.setup,
      priceCurrency: "USD",
      description: `One-time setup: $${tier.setup}`,
    },
    availability: "https://schema.org/InStock",
    url: `${siteConfig.url}/pricing#${tier.id}`,
  };
}

export function pricingSchema() {
  const lowPrice = Math.min(...tiers.map((t) => t.monthly));
  const highPrice = Math.max(...tiers.map((t) => t.monthly));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AlgoNyte Plans",
    description:
      "Three offerings: a site that gets found, reception that never sleeps, and full management. From $99/mo to $749/mo. Month-to-month, no long-term contracts.",
    brand: { "@type": "Brand", name: "AlgoNyte" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice,
      highPrice,
      priceCurrency: "USD",
      offerCount: tiers.length,
      offers: tiers.map(tierOffer),
    },
  };
}

// foundingOfferSchema removed — founding offer no longer exists.

export function aiReceptionistServiceSchema() {
  const awake = tiers.find((t) => t.id === "awake")!;
  const climbing = tiers.find((t) => t.id === "climbing")!;
  const description =
    "AI receptionist that answers, qualifies, and books leads 24/7 — across chat, SMS, missed-call text-back, and voice. Two tiers: Awake (text/chat/DMs) and Climbing (adds voice AI + Local SEO).";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-receptionist#service`,
    serviceType: "AI Receptionist",
    name: "AI Receptionist by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: awake.monthly,
      highPrice: climbing.monthly,
      priceCurrency: "USD",
      offerCount: 2,
      offers: [awake, climbing].map(tierOffer),
    },
  };
}

export function reputationManagementServiceSchema() {
  const awake = tiers.find((t) => t.id === "awake")!;
  const climbing = tiers.find((t) => t.id === "climbing")!;
  const description =
    "Automated post-job review requests. Google-only on Awake; multi-platform (Google, Yelp, Facebook) on Climbing.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/reputation-manager#service`,
    serviceType: "Reputation Management",
    name: "Reputation Management by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: awake.monthly,
      highPrice: climbing.monthly,
      priceCurrency: "USD",
      offerCount: 2,
      offers: [awake, climbing].map(tierOffer),
    },
  };
}

export function webPresenceServiceSchema() {
  const found = tiers.find((t) => t.id === "found")!;
  const description =
    "End-to-end web presence for service businesses. Built on Found from $449 one-time, then $99/mo flat hosting forever. Live in 5–7 days. Google Business Profile setup included.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/web-presence#service`,
    serviceType: "Web Design, Hosting, and Local SEO",
    name: "Web Presence by AlgoNyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: tierOffer(found),
  };
}
