export const isPlaceholder = (value: string | undefined): boolean =>
  !value || value.startsWith("[PLACEHOLDER");

export const calendarSrc =
  "https://api.leadconnectorhq.com/widget/booking/DWiAX3kYnns8mm0iqwMS";

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 549,
    tagline:
      "Stop losing leads, fast. Every missed call, text, and DM gets answered and booked automatically.",
    features: [
      "Missed call text back",
      "Instant SMS and DM reply",
      "Lead qualification",
      "Auto booking to your calendar",
      "Google review requests",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_STARTER]",
  },
  {
    id: "growth",
    name: "Growth",
    price: 749,
    tagline:
      "Everything in Starter, plus a 24/7 chat agent and the channels your leads actually use.",
    features: [
      "Everything in Starter",
      "24/7 AI chat agent",
      "Appointment reminders and follow-ups",
      "WhatsApp and Instagram DM",
      "Branching workflows",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_GROWTH]",
    featured: true,
  },
  {
    id: "pro-ai",
    name: "Pro AI",
    price: 1299,
    tagline:
      "The full done-for-you system. Voice, text, DMs, follow-ups, all handled.",
    features: [
      "Everything in Growth",
      "Voice AI 24/7 phone agent",
      "Cold lead re-engagement",
      "Custom AI training on your business",
      "Custom integrations",
      "Dedicated strategist",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_PRO_AI]",
  },
] as const;
