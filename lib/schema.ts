import { siteTiers, growthTiers, type SiteTier, type GrowthTier } from "./tiers";
import { siteConfig } from "./site";

function tierOffer(tier: SiteTier | GrowthTier) {
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
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Algonyte Plans",
    description:
      "Two products: Presence (web build + flat $99/mo hosting) and Growth (monthly retainers for reception, SEO, and ads). Six rungs from $99/mo to $1,199/mo.",
    brand: { "@type": "Brand", name: "Algonyte" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 99,
      highPrice: 1199,
      priceCurrency: "USD",
      offerCount: siteTiers.length + growthTiers.length,
      offers: [...siteTiers, ...growthTiers].map(tierOffer),
    },
  };
}

export function foundingOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Algonyte Founding Member",
    description:
      "3 founding spots. 50% off setup. 30% off any Growth tier for 6 months. After 6 months reverts to standard pricing.",
    availability: "https://schema.org/LimitedAvailability",
    inventoryLevel: { "@type": "QuantitativeValue", value: 3 },
    url: `${siteConfig.url}/founding`,
  };
}

export function aiReceptionistServiceSchema() {
  const awake = growthTiers[0];
  const climbing = growthTiers[1];
  const description =
    "AI receptionist that answers, qualifies, and books leads 24/7 — across chat, SMS, missed-call text-back, and voice. Two tiers: Awake (text/chat/DMs) and Climbing (adds voice AI + Local SEO).";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-receptionist#service`,
    serviceType: "AI Receptionist",
    name: "AI Receptionist by Algonyte",
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
  const awake = growthTiers[0];
  const climbing = growthTiers[1];
  const description =
    "Automated post-job review requests with smart routing for unhappy customers. Google-only on Awake; multi-platform (Google, Yelp, Facebook) plus smart routing on Climbing.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/reputation-manager#service`,
    serviceType: "Reputation Management",
    name: "Reputation Management by Algonyte",
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
  const description =
    "End-to-end web presence for service businesses. Sites built from $300 one-time, then $99/mo flat hosting forever. Live in 72 hours to 12 days. Google Business Profile setup included.";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/web-presence#service`,
    serviceType: "Web Design, Hosting, and Local SEO",
    name: "Web Presence by Algonyte",
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    description,
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: siteTiers[0].setup,
      highPrice: siteTiers[siteTiers.length - 1].setup,
      priceCurrency: "USD",
      offerCount: siteTiers.length,
      offers: siteTiers.map(tierOffer),
    },
  };
}
