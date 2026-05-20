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
      "Two products — Site (web build + flat $99/mo hosting) and Growth (monthly retainers for reception, SEO, and ads). Six rungs from $99/mo to $2,599/mo.",
    brand: { "@type": "Brand", name: "Algonyte" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: 99,
      highPrice: 2599,
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
