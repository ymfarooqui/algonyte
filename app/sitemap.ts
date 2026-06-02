import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { industryIndex } from "@/lib/content/industries";
import { locationIndex } from "@/lib/content/locations";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];
type Route = { path: string; priority: number; changeFrequency: Freq; lastModified?: string };

const TODAY = "2026-06-02";

// Core pages + service-pillar landing pages + hubs. Industry and location
// detail pages are derived from the content registries below so the sitemap
// can never drift from what actually ships.
const core: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: TODAY },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/ai-receptionist", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/lead-generator", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/reputation-manager", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/web-presence", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/database-reactivation", priority: 0.85, changeFrequency: "monthly", lastModified: TODAY },
  { path: "/instant-booking", priority: 0.85, changeFrequency: "monthly", lastModified: TODAY },
  { path: "/ad-management", priority: 0.85, changeFrequency: "monthly", lastModified: TODAY },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly", lastModified: TODAY },
  { path: "/locations", priority: 0.8, changeFrequency: "monthly", lastModified: TODAY },
  { path: "/insights/car-hub-macomb-case-study", priority: 0.8, changeFrequency: "yearly", lastModified: "2026-05-13" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

const industryRoutes: Route[] = industryIndex.map((it) => ({
  path: `/industries/${it.slug}`,
  priority: 0.8,
  changeFrequency: "monthly",
  lastModified: TODAY,
}));

const locationRoutes: Route[] = locationIndex.map((it) => ({
  path: `/locations/${it.slug}`,
  priority: 0.8,
  changeFrequency: "monthly",
  lastModified: TODAY,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  return [...core, ...industryRoutes, ...locationRoutes].map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: r.lastModified ? new Date(r.lastModified) : buildTime,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
