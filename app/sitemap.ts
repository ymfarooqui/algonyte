import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

const routes: { path: string; priority: number; changeFrequency: Freq; lastModified?: string }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-05-19" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/ai-receptionist", priority: 0.95, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/lead-generator", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/reputation-manager", priority: 0.85, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/web-presence", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/founding", priority: 0.95, changeFrequency: "weekly", lastModified: "2026-05-19" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/locations/chicago", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/locations/macomb", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/industries/auto-dealerships", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-19" },
  { path: "/insights/car-hub-macomb-case-study", priority: 0.8, changeFrequency: "yearly", lastModified: "2026-05-13" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    lastModified: r.lastModified ? new Date(r.lastModified) : buildTime,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
