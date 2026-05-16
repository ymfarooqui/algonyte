import { describe, expect, it } from "vitest";
import { isPlaceholder, plans } from "@/lib/constants";

describe("isPlaceholder", () => {
  it("flags undefined and empty values", () => {
    expect(isPlaceholder(undefined)).toBe(true);
    expect(isPlaceholder("")).toBe(true);
  });

  it("flags strings that start with [PLACEHOLDER", () => {
    expect(isPlaceholder("[PLACEHOLDER_GHL_CHECKOUT_STARTER]")).toBe(true);
    expect(isPlaceholder("[PLACEHOLDER")).toBe(true);
  });

  it("passes real values", () => {
    expect(isPlaceholder("https://example.com/checkout")).toBe(false);
  });
});

describe("plans", () => {
  it("contains three plans in ascending price order", () => {
    expect(plans).toHaveLength(3);
    expect(plans.map((p) => p.id)).toEqual(["starter", "growth", "pro-ai"]);
    for (let i = 1; i < plans.length; i++) {
      expect(plans[i].price).toBeGreaterThan(plans[i - 1].price);
    }
  });

  it("marks exactly one plan as featured", () => {
    const featured = plans.filter((p) => "featured" in p && p.featured);
    expect(featured).toHaveLength(1);
    expect(featured[0].id).toBe("growth");
  });

  it("each plan has at least one feature and a checkout URL", () => {
    for (const p of plans) {
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.checkoutUrl).toBeTruthy();
    }
  });
});
