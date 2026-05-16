import { describe, expect, it } from "vitest";
import { breadcrumbJsonLd } from "@/lib/breadcrumbs";
import { siteConfig } from "@/lib/site";

describe("breadcrumbJsonLd", () => {
  it("always includes Home as the first item", () => {
    const ld = breadcrumbJsonLd([]);
    expect(ld["@context"]).toBe("https://schema.org");
    expect(ld["@type"]).toBe("BreadcrumbList");
    expect(ld.itemListElement).toHaveLength(1);
    expect(ld.itemListElement[0]).toMatchObject({
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    });
  });

  it("appends trail items with correct positions and absolute URLs", () => {
    const ld = breadcrumbJsonLd([
      { name: "Locations", path: "/locations" },
      { name: "Macomb", path: "/locations/macomb" },
    ]);
    expect(ld.itemListElement).toHaveLength(3);
    expect(ld.itemListElement[1]).toEqual({
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: `${siteConfig.url}/locations`,
    });
    expect(ld.itemListElement[2]).toEqual({
      "@type": "ListItem",
      position: 3,
      name: "Macomb",
      item: `${siteConfig.url}/locations/macomb`,
    });
  });
});
