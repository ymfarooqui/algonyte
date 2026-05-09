// Placeholder values. Replace before launch.

export const social = {
  linkedin: "[PLACEHOLDER_LINKEDIN_URL]",
};

export const contact = {
  email: "hello@farooquidigital.com",
  bookCallHref: "/contact",
};

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 549,
    tagline:
      "The basics. Track your leads, follow up automatically, send review requests.",
    features: [
      "CRM and pipeline",
      "Automatic email and text follow-up",
      "Review request automation",
      "Reporting dashboard",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_STARTER]",
  },
  {
    id: "growth",
    name: "Growth",
    price: 749,
    tagline:
      "Everything in Starter, plus a chat assistant that answers leads for you day or night.",
    features: [
      "Everything in Starter",
      "Chat assistant (24/7)",
      "Branching workflows",
      "Priority support",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_GROWTH]",
    featured: true,
  },
  {
    id: "pro-ai",
    name: "Pro AI",
    price: 1299,
    tagline:
      "Everything in Growth, plus a voice assistant that calls people back and custom work to fit your business.",
    features: [
      "Everything in Growth",
      "Voice callback assistant",
      "Custom integrations",
      "A dedicated strategist",
    ],
    checkoutUrl: "[PLACEHOLDER_GHL_CHECKOUT_PRO_AI]",
  },
] as const;
