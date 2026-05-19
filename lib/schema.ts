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
