import { describe, expect, it } from "vitest";
import { isPlaceholder } from "@/lib/constants";

describe("isPlaceholder", () => {
  it("flags undefined and empty values", () => {
    expect(isPlaceholder(undefined)).toBe(true);
    expect(isPlaceholder("")).toBe(true);
  });

  it("flags strings that start with [PLACEHOLDER", () => {
    expect(isPlaceholder("[PLACEHOLDER_GHL_CHECKOUT_AWAKE]")).toBe(true);
    expect(isPlaceholder("[PLACEHOLDER")).toBe(true);
  });

  it("passes real values", () => {
    expect(isPlaceholder("https://example.com/checkout")).toBe(false);
  });
});
