import { describe, it, expect } from "vitest";
import { siteTiers, growthTiers, allTiers, HOSTING_FLAT } from "@/lib/tiers";

describe("tier data invariants", () => {
  it("has exactly 3 site tiers and 3 growth tiers", () => {
    expect(siteTiers).toHaveLength(3);
    expect(growthTiers).toHaveLength(3);
    expect(allTiers).toHaveLength(6);
  });

  it("all site tiers use the flat hosting price", () => {
    for (const tier of siteTiers) {
      expect(tier.monthly).toBe(HOSTING_FLAT);
    }
  });

  it("site setup fees ladder up: Open < Found < Polished", () => {
    const [open, found, polished] = siteTiers;
    expect(open.setup).toBeLessThan(found.setup);
    expect(found.setup).toBeLessThan(polished.setup);
  });

  it("growth monthly prices ladder up: Awake < Climbing < Scale", () => {
    const [awake, climbing, scale] = growthTiers;
    expect(awake.monthly).toBeLessThan(climbing.monthly);
    expect(climbing.monthly).toBeLessThan(scale.monthly);
  });

  it("every tier has a unique id and a non-empty name", () => {
    const ids = allTiers.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of allTiers) {
      expect(t.name.length).toBeGreaterThan(0);
    }
  });

  it("every tier has at least one feature", () => {
    for (const t of allTiers) {
      expect(t.features.length).toBeGreaterThan(0);
    }
  });

  it("Awake explicitly mentions custom dashboard and all DM channels", () => {
    const awake = growthTiers[0];
    const featuresJoined = awake.features.join(" ").toLowerCase();
    expect(featuresJoined).toContain("custom dashboard");
    expect(featuresJoined).toContain("facebook");
    expect(featuresJoined).toContain("instagram");
    expect(featuresJoined).toContain("whatsapp");
  });

  it("Scale explicitly states ad spend goes on the customer's card with no markup", () => {
    const scale = growthTiers[2];
    const text = scale.features.join(" ").toLowerCase();
    expect(text).toContain("ad spend");
    expect(text).toContain("your credit card");
    expect(text).toContain("markup");
  });

  it("Climbing requires 6-month commitment, Awake does not", () => {
    const awake = growthTiers[0];
    const climbing = growthTiers[1];
    expect(awake.commitment).toBe("month-to-month");
    expect(climbing.commitment).toBe("6-months");
  });
});
