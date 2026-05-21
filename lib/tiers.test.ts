import { describe, it, expect } from "vitest";
import { tiers, HOSTING_FLAT } from "@/lib/tiers";

describe("tier data invariants", () => {
  it("has exactly 3 tiers", () => {
    expect(tiers).toHaveLength(3);
  });

  it("tier ids are found, awake, climbing in that order", () => {
    expect(tiers.map((t) => t.id)).toEqual(["found", "awake", "climbing"]);
  });

  it("Found uses the flat hosting price", () => {
    const found = tiers.find((t) => t.id === "found")!;
    expect(found.monthly).toBe(HOSTING_FLAT);
  });

  it("monthly prices ladder up: Found < Awake < Climbing", () => {
    const found = tiers.find((t) => t.id === "found")!;
    const awake = tiers.find((t) => t.id === "awake")!;
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(found.monthly).toBeLessThan(awake.monthly);
    expect(awake.monthly).toBeLessThan(climbing.monthly);
  });

  it("every tier is month-to-month", () => {
    for (const t of tiers) {
      expect(t.commitment).toBe("month-to-month");
    }
  });

  it("every tier has a unique id and a non-empty name", () => {
    const ids = tiers.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const t of tiers) {
      expect(t.name.length).toBeGreaterThan(0);
    }
  });

  it("every tier has at least one feature", () => {
    for (const t of tiers) {
      expect(t.features.length).toBeGreaterThan(0);
    }
  });

  it("Awake mentions custom dashboard and all DM channels", () => {
    const awake = tiers.find((t) => t.id === "awake")!;
    const featuresJoined = awake.features.join(" ").toLowerCase();
    expect(featuresJoined).toContain("custom dashboard");
    expect(featuresJoined).toContain("facebook");
    expect(featuresJoined).toContain("instagram");
    expect(featuresJoined).toContain("whatsapp");
  });

  it("Climbing is marked as featured (Most Popular)", () => {
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(climbing.featured).toBe(true);
  });

  it("Climbing has an all-in monthlyNote", () => {
    const climbing = tiers.find((t) => t.id === "climbing")!;
    expect(climbing.monthlyNote).toBeDefined();
    expect(climbing.monthlyNote?.toLowerCase()).toContain("all-in");
  });

  it("setup prices match spec", () => {
    const byId = Object.fromEntries(tiers.map((t) => [t.id, t]));
    expect(byId.found.setup).toBe(449);
    expect(byId.awake.setup).toBe(749);
    expect(byId.climbing.setup).toBe(899);
  });

  it("monthly prices match spec", () => {
    const byId = Object.fromEntries(tiers.map((t) => [t.id, t]));
    expect(byId.found.monthly).toBe(99);
    expect(byId.awake.monthly).toBe(549);
    expect(byId.climbing.monthly).toBe(749);
  });
});
