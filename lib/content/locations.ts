import type { LandingContent } from "@/lib/landing";

/**
 * Location landing pages rendered by `app/locations/[slug]/page.tsx`.
 *
 * `chicago` and `macomb` are NOT here — they have hand-written static routes
 * that take precedence over the dynamic `[slug]` segment. They appear in
 * `locationIndex` below so the hub and sitemap link them.
 *
 * Every entry needs real local detail — submarkets, housing stock, the
 * business mix that actually concentrates there. A page that only swaps the
 * city name is a doorway page and will be demoted; don't ship one.
 */
export const locations: LandingContent[] = [
  {
    slug: "naperville",
    kind: "location",
    indexTitle: "Naperville",
    indexBlurb:
      "DuPage's largest market — affluent homeowners and a dense professional-services base that decides fast.",
    metaTitle: "AI Receptionist in Naperville, IL | Stop Missing Service Calls",
    metaDescription:
      "AI receptionist for Naperville, IL service businesses. Answer, qualify, and book leads 24/7 across DuPage County and the I-88 corridor. Plans from $549/mo.",
    eyebrow: "Naperville, Illinois",
    h1: { pre: "AI receptionist for", accent: "Naperville, IL", post: " service businesses." },
    heroSub:
      "We install an AI receptionist on top of your existing phone, website, and inbox so missed calls, after-hours leads, and form fills get answered, qualified, and booked without you touching them.",
    problem: {
      heading: "Naperville homeowners have options and money. They book whoever answers first.",
      paragraphs: [
        "Naperville is one of the most affluent markets in Illinois, and that cuts both ways. The homes are big, the budgets are real, and the jobs are worth having — but the homeowner calling about a furnace, a remodel, a tutor, or a dentist has a full page of well-reviewed options and zero patience for voicemail. They call the next name on the list and book whoever picks up.",
        "The business base here is dense: home-services contractors covering the big District 203 and 204 neighborhoods, professional and financial services along the I-88 research corridor, medical and dental practices, and the trades that keep large homes running. In every one of them, the lead goes to the fastest responder, not the best Yelp page.",
        "You don't need a bigger ad budget to win in Naperville. You need the calls and forms you already get answered in seconds — at 2pm on a Tuesday and at 9pm on a Sunday.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop in another affluent metro market outside Detroit. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for a Naperville HVAC company, a downtown dental practice, or a financial advisor off Washington Street. The install doesn't care which industry it's plugged into — it cares that a lead reached you and got an answer in seconds.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "Every unanswered call triggers an SMS within seconds. The conversation continues over text until the lead is qualified and a time is on your calendar.",
      },
      {
        title: "AI chat on your site",
        body: "A 24/7 chat agent on your website plus SMS, WhatsApp, and Instagram DM, trained on your services, pricing ranges, and the parts of DuPage you cover.",
      },
      {
        title: "Voice AI (Climbing plan)",
        body: "Picks up the phone when you can't. Qualifies, books, and hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "CRM and follow-up",
        body: "Every lead tracked. Reminders, follow-up sequences, and Google review requests fire automatically — the reviews that win a comparison-shopping Naperville buyer.",
      },
    ],
    local: {
      heading: "Across Naperville and the I-88 corridor.",
      paragraphs: [
        "We work with service businesses throughout Naperville — downtown and the Riverwalk district, the neighborhoods around Edward Hospital, and out toward Route 59 and the Aurora and Wheaton borders — plus the broader DuPage and Will County footprint. The system is remote-first, so it runs the same whether you're a solo operator or a multi-location practice.",
        "It's trained on your service-area boundaries. If you only run jobs inside Naperville and the immediate suburbs, the agent qualifies that during the call and books only in-area leads. If you cover the whole I-88 corridor out to Naperville, Lisle, and Warrenville, it routes by ZIP without manual triage.",
        "Run a particular trade? See how this works for home-services contractors, dental practices, and law firms — or step back to the Chicago overview for the full metro picture.",
      ],
    },
    faqs: [
      {
        q: "Do you only work with businesses inside Naperville city limits?",
        a: "No. The system is remote and works for any service business across DuPage and Will County and the I-88 corridor — Naperville, Lisle, Warrenville, Aurora, Wheaton, and the markets between. We highlight Naperville because the density of high-value service businesses here makes the lead leak large and immediate.",
      },
      {
        q: "How fast can a Naperville business go live?",
        a: "Most installs go live in 5 to 7 days. We use your existing business number with call forwarding, plug into your calendar, and train the agent on your services, pricing, and service area before any real leads reach it.",
      },
      {
        q: "Can it handle the volume during a seasonal rush?",
        a: "Yes — that's the point. The weeks when call volume spikes, like the first hard freeze for an HVAC company or tax season for an accountant, are exactly when you can't get to the phone. The agent answers every lead in parallel and never goes to voicemail.",
      },
      {
        q: "Will it book leads outside my service area?",
        a: "No. The agent is trained on your boundaries and qualifies the address during the conversation, so it only books work you actually want to drive to. If you cover Naperville but not the far west or south, it draws that line automatically.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation",
    geo: { kind: "suburb", city: "Naperville", state: "Illinois" },
  },

  {
    slug: "oak-park",
    kind: "location",
    indexTitle: "Oak Park",
    indexBlurb:
      "A dense, walkable near-west market of century-old homes and busy professional households.",
    metaTitle: "AI Receptionist in Oak Park, IL | Stop Missing Service Calls",
    metaDescription:
      "AI receptionist for Oak Park, IL service businesses. Answer, qualify, and book leads 24/7 across the near-west suburbs and into the city. Plans from $549/mo.",
    eyebrow: "Oak Park, Illinois",
    h1: { pre: "AI receptionist for", accent: "Oak Park, IL", post: " service businesses." },
    heroSub:
      "We install an AI receptionist on top of your existing phone, website, and inbox so missed calls, after-hours leads, and form fills get answered, qualified, and booked without you touching them.",
    problem: {
      heading: "Old houses, busy commuters, and a phone that's always ringing at the wrong time.",
      paragraphs: [
        "Oak Park's housing stock is a service contractor's whole business: century-old homes, historic Frank Lloyd Wright-era construction, original plumbing, knob-and-tube surprises, slate roofs, and finished basements that flood. The work is steady — but the homeowner with water coming through the ceiling isn't leaving a voicemail. They're calling down the list until someone picks up.",
        "The households here are dual-income professionals who commute into the Loop on the Green Line and Metra. They deal with home and family logistics in the margins — early morning, late evening, weekends — which is exactly when most local businesses send calls to voicemail. The dentist, the tutor, the contractor, the law office that answers at 8pm gets the appointment.",
        "Winning Oak Park isn't about spending more. It's about answering the leads you already get the moment they come in, instead of losing them to River Forest or the next contractor on Google.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for an Oak Park plumber fielding a burst-pipe call, a dental practice on Lake Street, or a family-law firm near the courthouse. The install doesn't care which industry it's plugged into — it cares that a lead reached you and got an answer in seconds.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "Every unanswered call triggers an SMS within seconds — usually before the caller has dialed the next business. The conversation continues over text until a time is on your calendar.",
      },
      {
        title: "AI chat on your site",
        body: "A 24/7 chat agent on your website plus SMS, WhatsApp, and Instagram DM, trained on your services and the near-west neighborhoods you cover.",
      },
      {
        title: "Voice AI (Climbing plan)",
        body: "Picks up the phone when you can't. Qualifies, books, and hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "CRM and follow-up",
        body: "Every lead tracked. Reminders, follow-up sequences, and Google review requests fire automatically — no spreadsheets, no forgotten callbacks.",
      },
    ],
    local: {
      heading: "Oak Park, River Forest, and the near-west side.",
      paragraphs: [
        "We work with service businesses across Oak Park — the Avenue and Hemingway districts, the blocks around Lake Street and Marion, and the residential streets full of historic homes — plus River Forest, Forest Park, Berwyn, and the adjacent West Side city neighborhoods. The system is remote-first and runs the same for a single-truck operator or a small practice.",
        "Because so much of the work here is on old, idiosyncratic buildings, the agent is trained to ask the qualifying questions that matter — age of the home, the system involved, access, urgency — so you walk into the job already knowing what you're dealing with instead of finding out on the doorstep.",
        "Run a specific trade? See how this works for home-services contractors, dental practices, and law firms — or zoom out to the Chicago overview for the full metro picture.",
      ],
    },
    faqs: [
      {
        q: "Do you only work with businesses inside Oak Park?",
        a: "No. The system is remote and serves the whole near-west side — Oak Park, River Forest, Forest Park, Berwyn, and the bordering West Side Chicago neighborhoods. We highlight Oak Park because its mix of old homes and busy professional households generates a steady stream of leads that voicemail quietly loses.",
      },
      {
        q: "Can the agent ask questions specific to older homes?",
        a: "Yes. We train the qualification flow on your trade. For contractors working Oak Park's historic housing stock, that means capturing the home's age, the system involved, access, and urgency up front — so the job is properly scoped before your tech ever drives out.",
      },
      {
        q: "How fast can an Oak Park business go live?",
        a: "Most installs go live in 5 to 7 days. We forward your existing number, connect your calendar, and train the agent on your services and service area before any real leads reach it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
      {
        q: "Can it handle Spanish-speaking callers?",
        a: "Bilingual handling is available on the Climbing plan. The agent detects the caller's language, switches to Spanish, and runs the full qualification and booking flow without a hand-off. On Awake, the agent is English-only.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation",
    geo: { kind: "suburb", city: "Oak Park", state: "Illinois" },
  },

  {
    slug: "schaumburg",
    kind: "location",
    indexTitle: "Schaumburg",
    indexBlurb:
      "The northwest suburbs' commercial hub — retail, hospitality, and corporate-corridor service demand.",
    metaTitle: "AI Receptionist in Schaumburg, IL | Stop Missing Service Calls",
    metaDescription:
      "AI receptionist for Schaumburg, IL service businesses. Answer, qualify, and book leads 24/7 across the northwest suburbs and the I-90 corridor. Plans from $549/mo.",
    eyebrow: "Schaumburg, Illinois",
    h1: { pre: "AI receptionist for", accent: "Schaumburg, IL", post: " service businesses." },
    heroSub:
      "We install an AI receptionist on top of your existing phone, website, and inbox so missed calls, after-hours leads, and form fills get answered, qualified, and booked without you touching them.",
    problem: {
      heading: "A commercial hub means more leads — and more of them going to voicemail.",
      paragraphs: [
        "Schaumburg is the commercial center of the northwest suburbs: Woodfield, the office parks along the I-90 corridor, restaurants and hospitality serving a daytime and shopping crowd, and the home-services and professional businesses that support a dense residential base. Volume is the upside and the problem — more leads means more calls hitting voicemail when your team is heads-down.",
        "The competition is direct. A customer choosing a restaurant near Woodfield, a contractor for a Hoffman Estates home, or an office for a routine appointment is comparing several businesses at once and booking whoever responds first and clearly. Slow to answer reads as 'closed' or 'not interested,' and they move on.",
        "The fix isn't more marketing into an already-crowded market. It's making sure the leads you generate get answered in seconds, every time, so your existing demand converts instead of leaking to the business next door.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for a Schaumburg restaurant fielding catering inquiries, an HVAC company covering Hoffman Estates and Hanover Park, or a medical office near Woodfield. The install doesn't care which industry it's plugged into — it cares that a lead reached you and got an answer in seconds.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "Every unanswered call triggers an SMS within seconds. The conversation continues over text until the lead is qualified and a time is on your calendar.",
      },
      {
        title: "DM auto-reply",
        body: "Instagram, Facebook, WhatsApp, and Google Business Messages get instant replies — the channels a shopping and dining crowd actually uses to reach a business.",
      },
      {
        title: "Voice AI (Climbing plan)",
        body: "Picks up the phone when you can't. Qualifies, books, and hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "CRM and follow-up",
        body: "Every lead tracked. Reminders, follow-up sequences, and Google review requests fire automatically — the reviews that move you up the Woodfield-area map pack.",
      },
    ],
    local: {
      heading: "Schaumburg and the northwest suburbs.",
      paragraphs: [
        "We work with service businesses across Schaumburg — around Woodfield and the Golf Road retail strip, the I-90 office corridor, and the surrounding residential neighborhoods — plus Hoffman Estates, Hanover Park, Roselle, Streamwood, and the broader northwest suburban footprint. The system is remote-first and scales from a single location to a multi-site operation.",
        "It's trained on your service area and routes by location, so a contractor covering the northwest suburbs isn't fielding leads from the South Side, and a restaurant's catering inquiries get captured with the date, headcount, and budget your events lead needs.",
        "Run a specific trade? See how this works for home-services contractors, restaurants, and dental practices — or step back to the Chicago overview for the full metro picture.",
      ],
    },
    faqs: [
      {
        q: "Do you only work with businesses inside Schaumburg?",
        a: "No. The system is remote and covers the northwest suburbs — Schaumburg, Hoffman Estates, Hanover Park, Roselle, Streamwood, and the markets along I-90. We highlight Schaumburg because its commercial density means a lot of leads, and a lot of them currently go to voicemail.",
      },
      {
        q: "We're a retail or restaurant business — does this fit?",
        a: "Yes. For high-traffic retail and hospitality, the agent fields reservation and inquiry calls during the rush, captures catering and event leads 24/7, and answers the hours-and-location questions that tie up your staff — so the team stays with the customers in front of them.",
      },
      {
        q: "How fast can a Schaumburg business go live?",
        a: "Most installs go live in 5 to 7 days. We forward your existing number, connect your calendar or booking system, and train the agent on your business before any real leads reach it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
      {
        q: "Can it route leads by location across several suburbs?",
        a: "Yes. The agent qualifies the address or ZIP during the conversation and routes by your rules, so multi-suburb operators only book the work they want and the right team gets the lead.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation",
    geo: { kind: "suburb", city: "Schaumburg", state: "Illinois" },
  },

  {
    slug: "lincoln-park",
    kind: "location",
    indexTitle: "Lincoln Park",
    indexBlurb:
      "A dense, affluent North Side neighborhood with a busy renovation economy and high-value local services.",
    metaTitle: "AI Receptionist in Lincoln Park, Chicago | Never Miss a Lead",
    metaDescription:
      "AI receptionist for Lincoln Park service businesses. Answer, qualify, and book leads 24/7 across Chicago's North Side. Plans from $549/mo.",
    eyebrow: "Lincoln Park, Chicago",
    h1: { pre: "AI receptionist for", accent: "Lincoln Park", post: " service businesses." },
    heroSub:
      "We install an AI receptionist on top of your existing phone, website, and inbox so missed calls, after-hours leads, and form fills get answered, qualified, and booked without you touching them.",
    problem: {
      heading: "A dense, affluent neighborhood where the fastest responder wins the job.",
      paragraphs: [
        "Lincoln Park packs a lot of high-value demand into a small footprint: renovated greystones and brownstones, condos and rentals around DePaul, and a steady renovation economy that keeps contractors, designers, and trades busy. It's also home to dentists, med spas, salons, fitness studios, and professional offices serving residents who are time-poor and quick to book whoever answers.",
        "These customers run on their phones and on tight schedules. They message a business on Instagram, fill out a form between meetings, or call on the walk home — and if they hit voicemail or a slow inbox, they've already tapped the next result. The neighborhood's density means there's always a next result one block over.",
        "You don't need more visibility on a busy block. You need the calls, forms, and DMs you already get answered the instant they land, so the lead books with you instead of the business next door.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for a Lincoln Park general contractor, a dental practice off Halsted, or a med spa near Armitage. The install doesn't care which industry it's plugged into — it cares that a lead reached you and got an answer in seconds.",
      ],
    },
    system: [
      {
        title: "DM auto-reply",
        body: "Instagram and Facebook are where Lincoln Park customers actually message local businesses. The agent replies in seconds with answers, pricing, and a booking link instead of letting the DM sit unread.",
      },
      {
        title: "Missed-call text-back",
        body: "Every unanswered call triggers an instant SMS. The conversation continues over text until the lead is qualified and a time is on your calendar.",
      },
      {
        title: "Voice AI (Climbing plan)",
        body: "Picks up the phone when you can't. Qualifies, books, and hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "CRM and follow-up",
        body: "Every lead tracked. Reminders, follow-up sequences, and Google review requests fire automatically — the reviews that win a comparison-shopping neighbor.",
      },
    ],
    local: {
      heading: "Lincoln Park and the North Side.",
      paragraphs: [
        "We work with service businesses across Lincoln Park — the blocks around Armitage and Halsted, the DePaul area, Old Town and Lakeview on either side, and the lakefront residential streets — and out across the North Side. The system is remote-first, so it runs the same for a solo practitioner or a small multi-location business.",
        "Dense urban service work has its own qualifying questions — building access, parking, unit type, timing windows — and the agent is trained to capture them up front so a job is properly scoped before anyone is dispatched into tight North Side streets.",
        "Run a specific trade? See how this works for home-services contractors, dental practices, and restaurants — or zoom out to the Chicago overview for the full metro picture.",
      ],
    },
    faqs: [
      {
        q: "Do you only work with businesses physically in Lincoln Park?",
        a: "No. The system is remote and serves businesses across Chicago's North Side — Lincoln Park, Lakeview, Old Town, Bucktown, and the surrounding neighborhoods. We highlight Lincoln Park because its density and spending power mean a constant flow of leads that voicemail and slow inboxes quietly lose.",
      },
      {
        q: "Most of my leads come through Instagram DMs. Does it handle that?",
        a: "Yes. DM auto-reply covers Instagram, Facebook, WhatsApp, and Google Business Messages. The agent answers in seconds with the info the customer asked for and a way to book, instead of the message waiting hours for someone to see it.",
      },
      {
        q: "How fast can a Lincoln Park business go live?",
        a: "Most installs go live in 5 to 7 days. We forward your existing number, connect your booking system, and train the agent on your services and neighborhood before any real leads reach it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
      {
        q: "Can it capture the details a city job needs, like access and parking?",
        a: "Yes. We train the qualification flow to ask what matters for dense urban work — building access, unit type, parking, and timing windows — so the job is scoped before your team navigates North Side traffic and one-way streets.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation",
    geo: { kind: "neighborhood", name: "Lincoln Park", city: "Chicago", state: "Illinois" },
  },

  {
    slug: "west-loop",
    kind: "location",
    indexTitle: "West Loop",
    indexBlurb:
      "Fulton Market and Restaurant Row — hospitality, tech offices, and new-build residents who book on their phones.",
    metaTitle: "AI Receptionist in West Loop, Chicago | Never Miss a Lead",
    metaDescription:
      "AI receptionist for West Loop and Fulton Market businesses. Answer reservations, inquiries, and service calls 24/7 across the near-west side. From $549/mo.",
    eyebrow: "West Loop, Chicago",
    h1: { pre: "AI receptionist for", accent: "West Loop", post: " businesses." },
    heroSub:
      "We install an AI receptionist on top of your existing phone, website, and inbox so reservation calls, after-hours inquiries, and form fills get answered, qualified, and booked without you touching them.",
    problem: {
      heading: "Restaurant Row and a tech-office corridor — high demand, thin time to answer it.",
      paragraphs: [
        "The West Loop and Fulton Market are Chicago's fastest-moving district: Randolph's Restaurant Row, the tech and corporate offices that anchor the neighborhood, and a wave of new residential high-rises bringing in residents who run their whole lives from their phones. The demand is enormous — and the time anyone has to answer a call is almost none.",
        "For the restaurants and hospitality businesses, the phone rings hardest at exactly the hours the floor is slammed: a reservation, an eight-top, a buyout inquiry, a catering order — gone to voicemail because every hand is on service. For the professional and service businesses, leads come in from busy people during off-hours and get one shot to be answered before they move on.",
        "In a neighborhood this competitive, slow-to-respond loses. The fix isn't more marketing — it's answering every reservation, inquiry, and form the second it arrives, so the demand you already have converts instead of leaking to the spot next door.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Not a Fulton Market restaurant — but the same lesson about answering fast. Before the system went live, calls that came in while the team was busy died in voicemail and the business went elsewhere. In its first week, it booked 10 jobs that would otherwise have been lost.",
        "For a West Loop business, that's a host or front desk that never steps away. During the rush, the agent fields the reservation call, captures the private-event lead, or books the appointment — so your team stays with the guests and clients in front of them.",
      ],
    },
    system: [
      {
        title: "Reservation & inquiry calls during the rush",
        body: "When the floor is slammed and the line is busy, the agent answers, takes the reservation or routes it to your booking tool, and captures the overflow you'd otherwise lose to voicemail.",
      },
      {
        title: "Catering & private-event capture",
        body: "Buyouts, large parties, and catering — your highest-margin inquiries — get captured 24/7 with date, headcount, and budget, and land as a lead your events lead can close.",
      },
      {
        title: "DM auto-reply",
        body: "Instagram, Facebook, WhatsApp, and Google Business Messages get instant replies with hours, menus, booking links, and answers — the channels this neighborhood actually uses.",
      },
      {
        title: "Voice AI & follow-up (Climbing)",
        body: "Voice AI picks up when no one can, and automated reminders plus review requests keep tables full and ratings high. Bilingual English/Spanish handling is available on this plan.",
      },
    ],
    local: {
      heading: "West Loop, Fulton Market, and the near-west side.",
      paragraphs: [
        "We work with businesses across the West Loop and Fulton Market — Randolph and Fulton, the Green and Pink Line corridor, and the residential towers filling in around them — plus the greater near-west side and into the Loop. The system is remote-first and fits a single restaurant or a multi-location group.",
        "It's trained on your business — menu, hours, policies, services, and event offerings — and handles reservations and inquiries the way a great host or front desk would. For anything that needs judgment, like comping or a complaint, it routes straight to your manager with the context.",
        "Run a restaurant or a professional practice? See how this works for restaurants and hospitality, law firms, and dental practices — or zoom out to the Chicago overview for the full metro picture.",
      ],
    },
    faqs: [
      {
        q: "Do you only work with businesses in the West Loop?",
        a: "No. The system is remote and serves the near-west side and the Loop — the West Loop, Fulton Market, the West Town and River West edges, and into downtown. We highlight the West Loop because its mix of restaurants, offices, and new residents generates more inbound demand than most teams can answer live.",
      },
      {
        q: "We're a restaurant — does it replace OpenTable?",
        a: "No, it sits in front of it. The agent handles the phone calls, DMs, and inquiries that come in around your reservation system and routes bookings into the tool you already use. It captures the demand your platform never sees because it arrived by phone or DM during the rush.",
      },
      {
        q: "Can it capture catering and private-event inquiries?",
        a: "Yes, and in a buyout-heavy district like Fulton Market that's often the biggest reason to run it. The agent captures the date, headcount, budget, and details 24/7 and hands your events team a qualified lead instead of a voicemail returned two days later.",
      },
      {
        q: "How fast can a West Loop business go live?",
        a: "Most businesses are live in 5 to 7 days on Awake. We connect your number and accounts and train the agent on your menu, services, and policies before it handles a real guest or client. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation",
    geo: { kind: "neighborhood", name: "West Loop", city: "Chicago", state: "Illinois" },
  },
];

export function getLocation(slug: string): LandingContent | undefined {
  return locations.find((l) => l.slug === slug);
}

export type LocationGroup =
  | "Chicago"
  | "Chicago neighborhoods"
  | "Suburbs & collar counties"
  | "Detroit metro";

/** Hub + sitemap registry. Includes the static `chicago` and `macomb` routes. */
export const locationIndex: {
  slug: string;
  title: string;
  blurb: string;
  group: LocationGroup;
}[] = [
  {
    slug: "chicago",
    title: "Chicago",
    blurb:
      "The full metro overview — Chicagoland, Cook County, and the collar counties.",
    group: "Chicago",
  },
  {
    slug: "lincoln-park",
    title: "Lincoln Park",
    blurb: locations.find((l) => l.slug === "lincoln-park")!.indexBlurb,
    group: "Chicago neighborhoods",
  },
  {
    slug: "west-loop",
    title: "West Loop",
    blurb: locations.find((l) => l.slug === "west-loop")!.indexBlurb,
    group: "Chicago neighborhoods",
  },
  {
    slug: "naperville",
    title: "Naperville",
    blurb: locations.find((l) => l.slug === "naperville")!.indexBlurb,
    group: "Suburbs & collar counties",
  },
  {
    slug: "oak-park",
    title: "Oak Park",
    blurb: locations.find((l) => l.slug === "oak-park")!.indexBlurb,
    group: "Suburbs & collar counties",
  },
  {
    slug: "schaumburg",
    title: "Schaumburg",
    blurb: locations.find((l) => l.slug === "schaumburg")!.indexBlurb,
    group: "Suburbs & collar counties",
  },
  {
    slug: "macomb",
    title: "Macomb, MI",
    blurb:
      "Our home market in the Detroit metro — where Car Hub booked 10 jobs in week one.",
    group: "Detroit metro",
  },
];
