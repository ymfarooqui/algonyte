import { siteConfig } from "./site";

// Service / Product JSON-LD. Prices are intentionally omitted everywhere (the
// site no longer publishes tier prices — scoped on a call), so these describe
// the offerings without asserting any price.

const provider = { "@type": "Organization", name: siteConfig.name, url: siteConfig.url };
const areaServed = { "@type": "Country", name: "United States" };

export function pricingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AlgoNyte — Done-for-you AI services",
    serviceType: "AI automation for service businesses",
    provider,
    areaServed,
    description:
      "Done-for-you AI services for local service businesses: AI receptionist, website chat and social DM replies, database reactivation, web presence and local SEO, reviews, ads, and cold outreach. Pick the services you need or bundle a few. 30-day money-back, no long-term contracts.",
  };
}

export function aiReceptionistServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/ai-receptionist#service`,
    serviceType: "AI Receptionist",
    name: "AI Receptionist by AlgoNyte",
    provider,
    areaServed,
    description:
      "An AI receptionist that answers, qualifies, and books leads 24/7 — across phone, website chat, SMS missed-call text-back, and social DMs.",
  };
}

export function reputationManagementServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/reputation-manager#service`,
    serviceType: "Reputation Management",
    name: "Reputation Management by AlgoNyte",
    provider,
    areaServed,
    description:
      "Automated post-job review requests across Google, Yelp, and Facebook, with unhappy customers routed to you before they post publicly.",
  };
}

export function webPresenceServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/web-presence#service`,
    serviceType: "Web Design, Hosting, and Local SEO",
    name: "Web Presence by AlgoNyte",
    provider,
    areaServed,
    description:
      "A fast, mobile-first website with local SEO and Google Business Profile setup, built to get service businesses found on Google and AI search. Live in about a week, with booking and CRM wired in, and managed ongoing.",
  };
}
