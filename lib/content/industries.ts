import type { LandingContent } from "@/lib/landing";

/**
 * Industry landing pages rendered by `app/industries/[slug]/page.tsx`.
 *
 * `auto-dealerships` is intentionally NOT here — it has a hand-written static
 * route at `app/industries/auto-dealerships/page.tsx` that takes precedence
 * over the dynamic `[slug]` segment. It still appears in `industryIndex` below
 * so the hub and sitemap link it.
 *
 * Each entry must carry its own unique problem/proof/local/FAQ copy. Do not
 * ship a city- or niche-swapped clone — thin doorway pages get demoted.
 */
export const industries: LandingContent[] = [
  {
    slug: "home-services",
    kind: "industry",
    indexTitle: "Home Services",
    indexBlurb:
      "HVAC, plumbing, roofing, electrical, cleaning, and landscaping — capture every emergency call and after-hours lead.",
    metaTitle: "AI Receptionist for Home Services | HVAC, Plumbing, Roofing",
    metaDescription:
      "AI receptionist for HVAC, plumbing, roofing, and electrical pros. Answer emergency and after-hours calls, qualify jobs, and book service 24/7. From $549/mo.",
    eyebrow: "Industries — Home Services",
    h1: {
      pre: "AI lead automation for",
      accent: "home services",
      post: " contractors.",
    },
    heroSub:
      "Every missed call, after-hours emergency, and website form fill gets answered, qualified, and booked — while your techs are under a sink, on a roof, or in an attic with no signal.",
    problem: {
      heading: "The phone rings while you're on a job. The lead calls the next contractor.",
      paragraphs: [
        "Home services runs on the phone, and the phone always rings at the worst time. You're elbow-deep in a furnace, on a ladder, or driving between calls with the radio up. It goes to voicemail. The homeowner with the leaking water heater doesn't leave a message — they tap the next result on Google and book whoever picks up first.",
        "After hours is worse. A burst pipe at 11pm, a furnace that quits during a January cold snap, a roof leaking through a Saturday storm — these are your highest-margin emergency jobs, and they're decided in the ten minutes it takes the homeowner to call down the list. If your line goes to a generic voicemail, you've already lost it.",
        "More ad spend won't fix a speed-to-answer problem. The leads you're already paying for — Google, Angi, truck wraps, referrals — convert based on who responds first. Close that gap and the same lead flow books more work.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit — a different trade, but the exact same leak. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for an HVAC company taking emergency no-heat calls, a plumber fielding burst-pipe panics, or a roofer quoting storm damage. The install doesn't care which trade it's plugged into — it cares that a lead reached you and got a real answer in seconds.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "The moment a call goes unanswered, the caller gets an SMS — usually before they've finished dialing the next contractor. The conversation continues over text until the job is qualified and on your calendar.",
      },
      {
        title: "Emergency triage",
        body: "The agent asks the questions you'd ask: what's failing, how urgent, the address and service area, whether it's covered. Real emergencies get flagged and routed to you now; routine work gets booked for the next open slot.",
      },
      {
        title: "Voice AI that picks up (Climbing)",
        body: "When you can't get to the phone, the voice agent answers, qualifies, and books — then hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "After-hours coverage",
        body: "Nights, weekends, holidays, and the dead zone while you're on a job. The agent runs the same play 24/7, so a Sunday-night no-heat call is booked for Monday morning instead of lost.",
      },
      {
        title: "Review requests on autopilot",
        body: "When a job is marked complete, the system asks for the Google review at the moment the customer is happiest. More reviews is how you out-rank the contractor down the road in the map pack.",
      },
      {
        title: "Every lead tracked",
        body: "Missed calls handled, texts answered, jobs booked, no-shows recovered — in one dashboard. No more guessing how many leads slipped through last week.",
      },
    ],
    local: {
      heading: "From Chicago bungalows to Naperville new builds.",
      paragraphs: [
        "Chicagoland's housing stock is a service contractor's dream and headache: century-old two-flats in Oak Park and Logan Square with original cast-iron, lakefront condos in Lincoln Park, sprawling new construction in Naperville and Schaumburg, and everything between. Different homes, same pattern — the call comes in, and whoever answers first wins the job.",
        "The system is remote and trained on your service area, your trades, and your dispatch rules. Whether you're a single-truck operator covering the North Side or a multi-crew shop running the collar counties, it qualifies by ZIP and job type before it ever books, so you're not driving an hour for a job outside your zone.",
        "Seasonal surges are where it earns its keep. The first hard freeze, the spring storm season, the summer AC rush — the weeks when call volume triples are exactly the weeks you can't get to the phone. The agent doesn't get overwhelmed.",
      ],
    },
    faqs: [
      {
        q: "Can it tell a real emergency from a routine job?",
        a: "Yes. We train the qualification flow on your definition of an emergency — no heat, active leak, no power, gas smell — and the agent escalates those to you immediately with the address and details. Routine requests get booked into your next available slot without interrupting you.",
      },
      {
        q: "Does it work with my existing phone number?",
        a: "Yes. We forward your existing business number, so nothing changes for your customers and you keep the number. The agent picks up the calls and texts you'd otherwise miss; anything it can't handle routes to you with the full conversation attached.",
      },
      {
        q: "Will it book jobs outside my service area?",
        a: "No. The agent is trained on your service-area boundaries and dispatch rules. It qualifies the address during the conversation and only books in-area work. If you cover the city but not the far suburbs, it draws that line for you.",
      },
      {
        q: "How fast can a contracting business go live?",
        a: "Most installs go live in 5 to 7 days. We use your existing number, plug into your calendar, and train the agent on your trades, pricing ranges, and service area before any real leads hit it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
      {
        q: "Can it handle Spanish-speaking customers?",
        a: "Bilingual handling is available on the Climbing plan. The agent detects the caller's language, switches to Spanish, and runs the full qualification and booking flow without a hand-off. On Awake, the agent is English-only.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation for Home Services",
    audienceType: "Home Services Contractors",
  },

  {
    slug: "dental-practices",
    kind: "industry",
    indexTitle: "Dental & Orthodontics",
    indexBlurb:
      "Fill the schedule, recover no-shows, and reactivate lapsed patients without adding front-desk staff.",
    metaTitle: "AI Receptionist for Dental Practices | Book New Patients 24/7",
    metaDescription:
      "AI front desk for dental and orthodontic practices. Book new patients 24/7, cut no-shows, and reactivate lapsed patients — without adding staff. From $549/mo.",
    eyebrow: "Industries — Dental & Orthodontics",
    h1: {
      pre: "AI front desk for",
      accent: "dental practices",
      post: " and orthodontists.",
    },
    heroSub:
      "New-patient calls get answered while your front desk is checking someone out, the schedule fills itself, and lapsed patients come back — without hiring another receptionist.",
    problem: {
      heading: "A new-patient call goes to voicemail. That's a $3,000 lifetime patient lost in 30 seconds.",
      paragraphs: [
        "Your front desk is one or two people, and they're busy: checking patients out, verifying insurance, handling the lobby. When a new-patient call comes in during that crush, it goes to voicemail. New patients don't leave voicemails — they call the next practice on their insurance list. A single missed new-patient call is a lifetime of cleanings, fillings, and referrals walking out the door.",
        "Then there's the leak you can measure: no-shows and last-minute cancellations that leave a chair empty and a hygienist idle. And the bigger one you can't see — the patients who haven't booked a recall in 18 months and quietly became someone else's patients.",
        "Hiring solves none of this cleanly. Another front-desk hire is expensive, hard to staff, and still goes home at 5pm. The calls and forms that come in evenings and weekends — when people actually have time to deal with the dentist — keep going unanswered.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Different business, identical mechanics: before the AI receptionist went live, after-hours calls died in voicemail and new leads went to the next name on the list. In its first week live, the system booked 10 appointments the shop would have lost.",
        "Swap 'oil change' for 'new-patient exam' and the workflow is the same. A prospective patient calls during your lunch block or fills out a form at 9pm. The agent answers in seconds, collects the insurance and reason for the visit, and puts a real appointment on the schedule before they shop your competitor down the street.",
      ],
    },
    system: [
      {
        title: "New-patient calls, always answered",
        body: "When the front desk is slammed or the office is closed, the agent picks up, captures insurance and chief complaint, and books the new-patient exam. The first practice to answer usually wins the patient.",
      },
      {
        title: "24/7 online booking",
        body: "Chat on your site, plus Instagram and Facebook DMs, route into your scheduler. Patients book the slot they want at 10pm without a phone call — the way they book everything else.",
      },
      {
        title: "No-show and recall reminders",
        body: "Automated SMS and email reminders cut no-shows, and recall reminders nudge patients due for a cleaning back into the chair before they drift.",
      },
      {
        title: "Lapsed-patient reactivation",
        body: "A tailored text campaign to patients who haven't been in for 12+ months pulls dormant revenue back onto the schedule. See the database reactivation page for how the campaign runs.",
      },
      {
        title: "Insurance-aware qualification",
        body: "The agent collects carrier and plan details up front and flags out-of-network callers so your team isn't doing eligibility triage on the phone during the rush.",
      },
      {
        title: "Reviews that build trust",
        body: "After a visit, the system requests a Google review at the moment patients are happiest — the reviews that decide which practice a new patient chooses.",
      },
    ],
    local: {
      heading: "Built for independent practices across Chicagoland.",
      paragraphs: [
        "From a solo general practice in Lincoln Park to a multi-op group in Naperville or an orthodontist in Schaumburg, the bottleneck is the same: a small front-desk team that can't be on the phone and in the lobby at once. The system covers the calls and messages they can't get to, without changing how the practice runs day to day.",
        "Everything stays HIPAA-conscious and in your accounts: your phone number, your scheduler, your patient list. The agent collects what it needs to book and flags anything clinical for your team rather than trying to answer it. It schedules; your clinicians and front desk stay in control of care.",
        "Evenings and weekends are the unlock. The single biggest window for new-patient booking is when people are off work and finally dealing with the toothache they've ignored for a week — exactly when most practices are dark.",
      ],
    },
    faqs: [
      {
        q: "Is this HIPAA-compliant?",
        a: "The agent is built to collect only what's needed to schedule — name, contact, insurance, and reason for visit — and to route anything clinical to your team rather than answer it. We configure it conservatively and keep patient data in your own accounts. We'll walk your office through exactly what is and isn't captured during onboarding.",
      },
      {
        q: "Does it integrate with our practice management software?",
        a: "By default we book into a connected calendar and push the patient details into your workflow via email and automation, which covers most front-office setups without custom work. Tighter, direct integrations are scoped on the Climbing plan when your PMS supports it.",
      },
      {
        q: "Can it reactivate patients who haven't been in for a while?",
        a: "Yes. We run a one-time reactivation campaign against your list of lapsed patients — a tailored SMS that re-engages them and routes replies into live booking. It's one of the fastest ways to fill near-term openings from patients you already earned.",
      },
      {
        q: "Will patients know they're talking to AI?",
        a: "The agent is straightforward and on-brand, not a gimmick pretending to be a person. Most patients just experience it as a fast, helpful front desk that answered immediately and got them booked. Anything outside its scope hands off to your team with the full context.",
      },
      {
        q: "How fast can a practice go live?",
        a: "Most practices are live in 5 to 7 days on Awake. We connect your scheduler, train the agent on your services, providers, and insurance setup, and test it before any real patients reach it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Front Desk & Patient Booking for Dental Practices",
    audienceType: "Dental and Orthodontic Practices",
  },

  {
    slug: "law-firms",
    kind: "industry",
    indexTitle: "Law Firms",
    indexBlurb:
      "Intake every potential client the moment they call — the firm that answers first signs the case.",
    metaTitle: "AI Receptionist for Law Firms | 24/7 Legal Intake & Booking",
    metaDescription:
      "AI intake for law firms. Answer every potential-client call 24/7, screen the matter, and book consultations before they call the next attorney. From $549/mo.",
    eyebrow: "Industries — Law Firms",
    h1: {
      pre: "AI client intake for",
      accent: "law firms",
      post: " that never misses a call.",
    },
    heroSub:
      "Every potential new client gets answered, screened, and scheduled the moment they reach out — whether it's a car-accident call at midnight or a divorce inquiry over the weekend.",
    problem: {
      heading: "A potential client who reaches voicemail calls the next firm on the list.",
      paragraphs: [
        "Legal leads are urgent and they don't wait. Someone just got hurt, arrested, served, or fired. They're anxious, they're searching, and they're calling three or four firms in a row. The first attorney's office to pick up and sound competent usually signs the case. A call that hits your voicemail is a signed retainer at the firm down the street.",
        "Attorneys can't fix this by answering more — you're in court, in a deposition, or with a client, and you should be. A traditional answering service just takes a message, which means the lead still waits, still cools, and still calls around. By the time someone calls back, the case is gone.",
        "And the highest-intent calls come at the worst times: the DUI at 1am, the accident on a Sunday, the wrongful-termination call during business hours when your one intake person is already on another line.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. The trade is different, the dynamic is identical: speed-to-answer decides who gets the business. Before the system went live, after-hours calls died in voicemail and leads went to whoever picked up first. In its first week, it booked 10 jobs the shop would have lost.",
        "For a firm, that's an intake specialist who never goes home. A potential client calls at midnight, the agent answers in seconds, runs your intake script, captures the matter details, and books the consultation — so you walk into the morning with a qualified appointment instead of a voicemail you have to chase.",
      ],
    },
    system: [
      {
        title: "24/7 new-client intake",
        body: "Every call and form gets answered immediately, day or night. The agent runs your intake script, captures the facts of the matter, and books the consultation while the prospect is still motivated.",
      },
      {
        title: "Conflict-aware screening",
        body: "The agent collects the names and basics you need to run a conflict check and qualifies the matter type before it books, so you're not spending billable time screening calls that were never a fit.",
      },
      {
        title: "Missed-call text-back",
        body: "Any call you can't take triggers an instant SMS. Most prospects who'd have called the next firm stay in a text conversation with yours instead, and get scheduled.",
      },
      {
        title: "Consultation booking",
        body: "Qualified prospects land on your calendar as a confirmed consult — with the matter details, contact info, and intake notes attached — instead of a callback you have to play phone tag to set.",
      },
      {
        title: "Practice-area routing",
        body: "PI, family, criminal, estate, employment — the agent routes by matter type and urgency to the right attorney or intake queue, and escalates true emergencies to you in real time.",
      },
      {
        title: "Bilingual intake (Climbing)",
        body: "In bilingual markets the agent detects Spanish and runs the entire intake in-language without a hand-off, so you capture clients an English-only line would lose.",
      },
    ],
    local: {
      heading: "For solo and small firms across Chicago and the collar counties.",
      paragraphs: [
        "Whether you're a personal-injury solo in the Loop, a family-law firm in Oak Park, or a criminal-defense practice covering Cook and DuPage, you're competing against firms with full-time intake teams and 24-hour call centers. This levels that — every after-hours and overflow call gets a fast, professional answer that books the consult, without the overhead of staffing a night desk.",
        "The agent works your existing number and calendar and is trained on your practice areas, your intake questions, and the matters you do and don't take. It schedules and screens; it never gives legal advice or quotes outcomes. That line stays firmly with your attorneys.",
        "For high-volume practice areas like personal injury and criminal defense, where every signed case is worth multiples of the monthly cost, recovering even one lost intake a month pays for the system several times over.",
      ],
    },
    faqs: [
      {
        q: "Does the AI give legal advice?",
        a: "No, and that's deliberate. The agent handles intake and scheduling only — it collects the facts, screens the matter, and books the consultation. It never offers legal advice, quotes outcomes, or discusses strategy. Anything that needs an attorney is captured and routed to you.",
      },
      {
        q: "Can it run a conflict check before booking?",
        a: "It collects the party names and matter basics you need to run your conflict check and can flag potential conflicts for your team to clear before the consultation. The final conflict determination stays with your firm; the agent just makes sure you have what you need up front.",
      },
      {
        q: "How does it handle different practice areas?",
        a: "We train the intake flow per practice area — the questions for a car-accident intake are different from a divorce or an estate matter. The agent routes by matter type and urgency, runs the right script, and escalates genuine emergencies to you immediately.",
      },
      {
        q: "What about confidentiality?",
        a: "Intake data stays in your own accounts, and the agent is configured to collect only what your intake process requires. We'll review exactly what's captured and how it's stored during onboarding so it fits your firm's confidentiality obligations.",
      },
      {
        q: "How fast can a firm go live?",
        a: "Most firms are live in 5 to 7 days on Awake. We forward your existing number, connect your calendar, and train the agent on your practice areas and intake script before any real callers reach it. The Climbing plan with 24/7 voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Client Intake & Consultation Booking for Law Firms",
    audienceType: "Law Firms and Legal Practices",
  },

  {
    slug: "restaurants",
    kind: "industry",
    indexTitle: "Restaurants & Hospitality",
    indexBlurb:
      "Answer reservation calls, catering inquiries, and DMs during the dinner rush — without pulling staff off the floor.",
    metaTitle: "AI Receptionist for Restaurants | Reservations & Catering 24/7",
    metaDescription:
      "AI phone and DM agent for restaurants. Answer reservation calls during the rush and capture catering and event leads 24/7 — staff stay on the floor. From $549/mo.",
    eyebrow: "Industries — Restaurants & Hospitality",
    h1: {
      pre: "AI reservations and inquiries for",
      accent: "restaurants",
      post: ".",
    },
    heroSub:
      "Reservation calls get answered during the dinner rush, catering and private-event inquiries get captured 24/7, and your staff stay on the floor instead of on hold.",
    problem: {
      heading: "The phone rings off the hook at 7pm — exactly when no one can answer it.",
      paragraphs: [
        "A ringing phone during service is a no-win. If a server stops to answer it, they've abandoned a table. If no one answers, a reservation, a large party, or a catering inquiry just went to voicemail — or to the restaurant down the block. The busiest, most profitable hours are precisely when you have the least capacity to pick up.",
        "The high-value calls are the ones you can least afford to miss: the eight-top for Saturday, the office holiday party, the wedding-rehearsal dinner, the $4,000 catering order. Those don't leave voicemails and try again. They book wherever someone answers and sounds like they want the business.",
        "Meanwhile the simple stuff — are you open, do you take walk-ins, where do I park, do you have gluten-free — eats your staff's attention all night for questions a guest should be able to get answered instantly.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Not a restaurant — but the same lesson about answering fast. Before the system went live, calls that came in while the team was busy died in voicemail and the business went elsewhere. In its first week, the agent booked 10 jobs that would otherwise have been lost.",
        "For a restaurant, that's a host who never leaves the stand. During the rush, the agent fields the reservation call, captures the catering lead, and answers the where-do-I-park question — so your team stays with the guests in front of them and you stop bleeding the calls that come in at exactly the wrong moment.",
      ],
    },
    system: [
      {
        title: "Reservation calls during the rush",
        body: "When the line is busy and the floor is slammed, the agent answers, takes the reservation or routes it to your booking system, and handles the overflow you'd otherwise send to voicemail.",
      },
      {
        title: "Catering & private-event capture",
        body: "Your highest-margin inquiries — large parties, catering, buyouts, rehearsal dinners — get captured 24/7 with the date, headcount, and budget, and land as a lead your events lead can close.",
      },
      {
        title: "DM auto-reply",
        body: "Instagram and Facebook are where guests actually message you. The agent replies to DMs in seconds with hours, menus, booking links, and answers, instead of letting them sit unread until tomorrow.",
      },
      {
        title: "Instant FAQ answers",
        body: "Hours, location, parking, dietary options, dress code, walk-in policy — the questions that eat your staff's night get answered immediately, in your voice, across phone, chat, and DM.",
      },
      {
        title: "After-hours coverage",
        body: "The reservation requests and catering inquiries that come in after close or before open don't wait until someone clocks in. They're captured and answered the moment they arrive.",
      },
      {
        title: "Win-back & reviews",
        body: "Post-visit review requests build the rating that fills tables, and a reactivation text can bring past guests back for a slow Tuesday. See the database reactivation page for how that runs.",
      },
    ],
    local: {
      heading: "From Fulton Market to the neighborhoods.",
      paragraphs: [
        "Chicago is one of the great restaurant cities, and that means brutal competition for every cover. A guest deciding between three spots on Randolph Street, a group planning a private dinner in the West Loop, a family looking for catering in Naperville — they're all making a fast decision, and the restaurant that responds first and clearly has a real edge.",
        "The agent works your existing number and social accounts and is trained on your menu, hours, policies, and event offerings. It handles reservations and inquiries the way you'd want a great host to; for anything it shouldn't decide — comping, complaints, special requests — it routes straight to your manager.",
        "It's built around the way hospitality actually runs: the heaviest demand and the thinnest staffing hit at the same hours. The system absorbs that overflow so a fully-booked Friday doesn't cost you a fully-booked Saturday.",
      ],
    },
    faqs: [
      {
        q: "Does it replace OpenTable or my reservation system?",
        a: "No — it sits in front of it. The agent handles the phone calls, DMs, and inquiries that come in around your booking system, and routes reservations into the tool you already use. It captures the demand your reservation platform never sees because it came in by phone or DM during the rush.",
      },
      {
        q: "Can it handle catering and large private-event inquiries?",
        a: "Yes, and those are usually the highest-value reason to run it. The agent captures the date, headcount, budget, and details 24/7 and hands your events team a qualified lead — instead of a voicemail that gets returned two days later after the host already booked elsewhere.",
      },
      {
        q: "What about reservations versus walk-ins and comps?",
        a: "The agent books and answers within the rules you set. Anything that needs judgment — comping a table, handling a complaint, a special accommodation — it routes to your manager with the context rather than deciding on its own.",
      },
      {
        q: "Will it answer Instagram and Facebook messages?",
        a: "Yes. DM auto-reply covers Instagram, Facebook, WhatsApp, and Google Business Messages — where a lot of guests actually reach out. They get an instant answer with hours, menu, or a booking link instead of waiting until someone checks the inbox tomorrow.",
      },
      {
        q: "How fast can a restaurant go live?",
        a: "Most restaurants are live in 5 to 7 days on Awake. We connect your number and social accounts and train the agent on your menu, hours, policies, and event offerings before it handles a real guest. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Reservations & Inquiry Handling for Restaurants",
    audienceType: "Restaurants and Hospitality Businesses",
  },
];

export function getIndustry(slug: string): LandingContent | undefined {
  return industries.find((i) => i.slug === slug);
}

/** Hub + sitemap registry. Includes the static `auto-dealerships` route. */
export const industryIndex: { slug: string; title: string; blurb: string }[] = [
  {
    slug: "home-services",
    title: "Home Services",
    blurb: industries[0].indexBlurb,
  },
  {
    slug: "auto-dealerships",
    title: "Auto Dealerships",
    blurb:
      "Answer every Cars.com and AutoTrader lead, qualify trade-ins, and book test drives 24/7.",
  },
  {
    slug: "dental-practices",
    title: "Dental & Orthodontics",
    blurb: industries[1].indexBlurb,
  },
  {
    slug: "law-firms",
    title: "Law Firms",
    blurb: industries[2].indexBlurb,
  },
  {
    slug: "restaurants",
    title: "Restaurants & Hospitality",
    blurb: industries[3].indexBlurb,
  },
];
