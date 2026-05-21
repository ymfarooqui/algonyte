export const isPlaceholder = (value: string | undefined): boolean =>
  !value || value.startsWith("[PLACEHOLDER");

export const calendarSrc =
  "https://api.leadconnectorhq.com/widget/booking/DWiAX3kYnns8mm0iqwMS";

// Re-export tiers from the canonical source.
export { siteTiers, growthTiers, founding, HOSTING_FLAT } from "./tiers";
export type { SiteTier, GrowthTier, TierId, SiteTierId, GrowthTierId, Commitment } from "./tiers";
