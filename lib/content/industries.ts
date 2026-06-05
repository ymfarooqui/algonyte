import type { LandingContent } from "@/lib/landing";

/**
 * Industry landing pages rendered by `app/industries/[slug]/page.tsx`.
 *
 * `auto-dealerships` is intentionally NOT here, it has a hand-written static
 * route at `app/industries/auto-dealerships/page.tsx` that takes precedence
 * over the dynamic `[slug]` segment. It still appears in `industryIndex` below
 * so the hub and sitemap link it.
 *
 * Each entry must carry its own unique problem/proof/local/FAQ copy. Do not
 * ship a city- or niche-swapped clone, thin doorway pages get demoted.
 */
export const industries: LandingContent[] = [
  {
    slug: "home-services",
    kind: "industry",
    indexTitle: "Home Services",
    indexBlurb:
      "HVAC, plumbing, roofing, electrical, cleaning, and landscaping, capture every emergency call and after-hours lead.",
    metaTitle: "AI Receptionist for Home Services | HVAC, Plumbing, Roofing",
    metaDescription:
      "AI receptionist for HVAC, plumbing, roofing, and electrical pros. Answer emergency and after-hours calls, qualify jobs, and book service 24/7.",
    eyebrow: "Industries, Home Services",
    h1: {
      pre: "AI lead automation for",
      accent: "home services",
      post: " contractors.",
    },
    heroSub:
      "Every missed call, after-hours emergency, and website form fill gets answered, qualified, and booked, while your techs are under a sink, on a roof, or in an attic with no signal.",
    problem: {
      heading: "The phone rings while you're on a job. The lead calls the next contractor.",
      paragraphs: [
        "Home services runs on the phone, and the phone always rings at the worst time. You're elbow-deep in a furnace, on a ladder, or driving between calls with the radio up. It goes to voicemail. The homeowner with the leaking water heater doesn't leave a message, they tap the next result on Google and book whoever picks up first.",
        "After hours is worse. A burst pipe at 11pm, a furnace that quits during a January cold snap, a roof leaking through a Saturday storm, these are your highest-margin emergency jobs, and they're decided in the ten minutes it takes the homeowner to call down the list. If your line goes to a generic voicemail, you've already lost it.",
        "More ad spend won't fix a speed-to-answer problem. The leads you're already paying for, Google, Angi, truck wraps, referrals, convert based on who responds first. Close that gap and the same lead flow books more work.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit, a different trade, but the exact same leak. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for an HVAC company taking emergency no-heat calls, a plumber fielding burst-pipe panics, or a roofer quoting storm damage. The install doesn't care which trade it's plugged into, it cares that a lead reached you and got a real answer in seconds.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "The moment a call goes unanswered, the caller gets an SMS, usually before they've finished dialing the next contractor. The conversation continues over text until the job is qualified and on your calendar.",
      },
      {
        title: "Emergency triage",
        body: "The agent asks the questions you'd ask: what's failing, how urgent, the address and service area, whether it's covered. Real emergencies get flagged and routed to you now; routine work gets booked for the next open slot.",
      },
      {
        title: "Voice AI that picks up (Climbing)",
        body: "When you can't get to the phone, the voice agent answers, qualifies, and books, then hands off with a full transcript. Bilingual English/Spanish handling is available on this plan.",
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
        body: "Missed calls handled, texts answered, jobs booked, no-shows recovered, in one dashboard. No more guessing how many leads slipped through last week.",
      },
    ],
    local: {
      heading: "From Chicago bungalows to Naperville new builds.",
      paragraphs: [
        "Chicagoland's housing stock is a service contractor's dream and headache: century-old two-flats in Oak Park and Logan Square with original cast-iron, lakefront condos in Lincoln Park, sprawling new construction in Naperville and Schaumburg, and everything between. Different homes, same pattern, the call comes in, and whoever answers first wins the job.",
        "The system is remote and trained on your service area, your trades, and your dispatch rules. Whether you're a single-truck operator covering the North Side or a multi-crew shop running the collar counties, it qualifies by ZIP and job type before it ever books, so you're not driving an hour for a job outside your zone.",
        "Seasonal surges are where it earns its keep. The first hard freeze, the spring storm season, the summer AC rush, the weeks when call volume triples are exactly the weeks you can't get to the phone. The agent doesn't get overwhelmed.",
      ],
    },
    faqs: [
      {
        q: "Can it tell a real emergency from a routine job?",
        a: "Yes. We train the qualification flow on your definition of an emergency, no heat, active leak, no power, gas smell, and the agent escalates those to you immediately with the address and details. Routine requests get booked into your next available slot without interrupting you.",
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
      "AI front desk for dental and orthodontic practices. Book new patients 24/7, cut no-shows, and reactivate lapsed patients, without adding staff.",
    eyebrow: "Industries, Dental & Orthodontics",
    h1: {
      pre: "AI front desk for",
      accent: "dental practices",
      post: " and orthodontists.",
    },
    heroSub:
      "New-patient calls get answered while your front desk is checking someone out, the schedule fills itself, and lapsed patients come back, without hiring another receptionist.",
    problem: {
      heading: "A new-patient call goes to voicemail. That's a $3,000 lifetime patient lost in 30 seconds.",
      paragraphs: [
        "Your front desk is one or two people, and they're busy: checking patients out, verifying insurance, handling the lobby. When a new-patient call comes in during that crush, it goes to voicemail. New patients don't leave voicemails, they call the next practice on their insurance list. A single missed new-patient call is a lifetime of cleanings, fillings, and referrals walking out the door.",
        "Then there's the leak you can measure: no-shows and last-minute cancellations that leave a chair empty and a hygienist idle. And the bigger one you can't see, the patients who haven't booked a recall in 18 months and quietly became someone else's patients.",
        "Hiring solves none of this cleanly. Another front-desk hire is expensive, hard to staff, and still goes home at 5pm. The calls and forms that come in evenings and weekends, when people actually have time to deal with the dentist, keep going unanswered.",
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
        body: "Chat on your site, plus Instagram and Facebook DMs, route into your scheduler. Patients book the slot they want at 10pm without a phone call, the way they book everything else.",
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
        body: "After a visit, the system requests a Google review at the moment patients are happiest, the reviews that decide which practice a new patient chooses.",
      },
    ],
    local: {
      heading: "Built for independent practices across Chicagoland.",
      paragraphs: [
        "From a solo general practice in Lincoln Park to a multi-op group in Naperville or an orthodontist in Schaumburg, the bottleneck is the same: a small front-desk team that can't be on the phone and in the lobby at once. The system covers the calls and messages they can't get to, without changing how the practice runs day to day.",
        "Everything stays HIPAA-conscious and in your accounts: your phone number, your scheduler, your patient list. The agent collects what it needs to book and flags anything clinical for your team rather than trying to answer it. It schedules; your clinicians and front desk stay in control of care.",
        "Evenings and weekends are the unlock. The single biggest window for new-patient booking is when people are off work and finally dealing with the toothache they've ignored for a week, exactly when most practices are dark.",
      ],
    },
    faqs: [
      {
        q: "Is this HIPAA-compliant?",
        a: "The agent is built to collect only what's needed to schedule, name, contact, insurance, and reason for visit, and to route anything clinical to your team rather than answer it. We configure it conservatively and keep patient data in your own accounts. We'll walk your office through exactly what is and isn't captured during onboarding.",
      },
      {
        q: "Does it integrate with our practice management software?",
        a: "By default we book into a connected calendar and push the patient details into your workflow via email and automation, which covers most front-office setups without custom work. Tighter, direct integrations are scoped on the Climbing plan when your PMS supports it.",
      },
      {
        q: "Can it reactivate patients who haven't been in for a while?",
        a: "Yes. We run a one-time reactivation campaign against your list of lapsed patients, a tailored SMS that re-engages them and routes replies into live booking. It's one of the fastest ways to fill near-term openings from patients you already earned.",
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
      "Intake every potential client the moment they call, the firm that answers first signs the case.",
    metaTitle: "AI Receptionist for Law Firms | 24/7 Legal Intake & Booking",
    metaDescription:
      "AI intake for law firms. Answer every potential-client call 24/7, screen the matter, and book consultations before they call the next attorney.",
    eyebrow: "Industries, Law Firms",
    h1: {
      pre: "AI client intake for",
      accent: "law firms",
      post: " that never misses a call.",
    },
    heroSub:
      "Every potential new client gets answered, screened, and scheduled the moment they reach out, whether it's a car-accident call at midnight or a divorce inquiry over the weekend.",
    problem: {
      heading: "A potential client who reaches voicemail calls the next firm on the list.",
      paragraphs: [
        "Legal leads are urgent and they don't wait. Someone just got hurt, arrested, served, or fired. They're anxious, they're searching, and they're calling three or four firms in a row. The first attorney's office to pick up and sound competent usually signs the case. A call that hits your voicemail is a signed retainer at the firm down the street.",
        "Attorneys can't fix this by answering more, you're in court, in a deposition, or with a client, and you should be. A traditional answering service just takes a message, which means the lead still waits, still cools, and still calls around. By the time someone calls back, the case is gone.",
        "And the highest-intent calls come at the worst times: the DUI at 1am, the accident on a Sunday, the wrongful-termination call during business hours when your one intake person is already on another line.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. The trade is different, the dynamic is identical: speed-to-answer decides who gets the business. Before the system went live, after-hours calls died in voicemail and leads went to whoever picked up first. In its first week, it booked 10 jobs the shop would have lost.",
        "For a firm, that's an intake specialist who never goes home. A potential client calls at midnight, the agent answers in seconds, runs your intake script, captures the matter details, and books the consultation, so you walk into the morning with a qualified appointment instead of a voicemail you have to chase.",
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
        body: "Qualified prospects land on your calendar as a confirmed consult, with the matter details, contact info, and intake notes attached, instead of a callback you have to play phone tag to set.",
      },
      {
        title: "Practice-area routing",
        body: "PI, family, criminal, estate, employment, the agent routes by matter type and urgency to the right attorney or intake queue, and escalates true emergencies to you in real time.",
      },
      {
        title: "Bilingual intake (Climbing)",
        body: "In bilingual markets the agent detects Spanish and runs the entire intake in-language without a hand-off, so you capture clients an English-only line would lose.",
      },
    ],
    local: {
      heading: "For solo and small firms across Chicago and the collar counties.",
      paragraphs: [
        "Whether you're a personal-injury solo in the Loop, a family-law firm in Oak Park, or a criminal-defense practice covering Cook and DuPage, you're competing against firms with full-time intake teams and 24-hour call centers. This levels that, every after-hours and overflow call gets a fast, professional answer that books the consult, without the overhead of staffing a night desk.",
        "The agent works your existing number and calendar and is trained on your practice areas, your intake questions, and the matters you do and don't take. It schedules and screens; it never gives legal advice or quotes outcomes. That line stays firmly with your attorneys.",
        "For high-volume practice areas like personal injury and criminal defense, where every signed case is worth multiples of the monthly cost, recovering even one lost intake a month pays for the system several times over.",
      ],
    },
    faqs: [
      {
        q: "Does the AI give legal advice?",
        a: "No, and that's deliberate. The agent handles intake and scheduling only, it collects the facts, screens the matter, and books the consultation. It never offers legal advice, quotes outcomes, or discusses strategy. Anything that needs an attorney is captured and routed to you.",
      },
      {
        q: "Can it run a conflict check before booking?",
        a: "It collects the party names and matter basics you need to run your conflict check and can flag potential conflicts for your team to clear before the consultation. The final conflict determination stays with your firm; the agent just makes sure you have what you need up front.",
      },
      {
        q: "How does it handle different practice areas?",
        a: "We train the intake flow per practice area, the questions for a car-accident intake are different from a divorce or an estate matter. The agent routes by matter type and urgency, runs the right script, and escalates genuine emergencies to you immediately.",
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
      "Answer reservation calls, catering inquiries, and DMs during the dinner rush, without pulling staff off the floor.",
    metaTitle: "AI Receptionist for Restaurants | Reservations & Catering 24/7",
    metaDescription:
      "AI phone and DM agent for restaurants. Answer reservation calls during the rush and capture catering and event leads 24/7, staff stay on the floor.",
    eyebrow: "Industries, Restaurants & Hospitality",
    h1: {
      pre: "AI reservations and inquiries for",
      accent: "restaurants",
      post: ".",
    },
    heroSub:
      "Reservation calls get answered during the dinner rush, catering and private-event inquiries get captured 24/7, and your staff stay on the floor instead of on hold.",
    problem: {
      heading: "The phone rings off the hook at 7pm, exactly when no one can answer it.",
      paragraphs: [
        "A ringing phone during service is a no-win. If a server stops to answer it, they've abandoned a table. If no one answers, a reservation, a large party, or a catering inquiry just went to voicemail, or to the restaurant down the block. The busiest, most profitable hours are precisely when you have the least capacity to pick up.",
        "The high-value calls are the ones you can least afford to miss: the eight-top for Saturday, the office holiday party, the wedding-rehearsal dinner, the $4,000 catering order. Those don't leave voicemails and try again. They book wherever someone answers and sounds like they want the business.",
        "Meanwhile the simple stuff, are you open, do you take walk-ins, where do I park, do you have gluten-free, eats your staff's attention all night for questions a guest should be able to get answered instantly.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Not a restaurant, but the same lesson about answering fast. Before the system went live, calls that came in while the team was busy died in voicemail and the business went elsewhere. In its first week, the agent booked 10 jobs that would otherwise have been lost.",
        "For a restaurant, that's a host who never leaves the stand. During the rush, the agent fields the reservation call, captures the catering lead, and answers the where-do-I-park question, so your team stays with the guests in front of them and you stop bleeding the calls that come in at exactly the wrong moment.",
      ],
    },
    system: [
      {
        title: "Reservation calls during the rush",
        body: "When the line is busy and the floor is slammed, the agent answers, takes the reservation or routes it to your booking system, and handles the overflow you'd otherwise send to voicemail.",
      },
      {
        title: "Catering & private-event capture",
        body: "Your highest-margin inquiries, large parties, catering, buyouts, rehearsal dinners, get captured 24/7 with the date, headcount, and budget, and land as a lead your events lead can close.",
      },
      {
        title: "DM auto-reply",
        body: "Instagram and Facebook are where guests actually message you. The agent replies to DMs in seconds with hours, menus, booking links, and answers, instead of letting them sit unread until tomorrow.",
      },
      {
        title: "Instant FAQ answers",
        body: "Hours, location, parking, dietary options, dress code, walk-in policy, the questions that eat your staff's night get answered immediately, in your voice, across phone, chat, and DM.",
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
        "Chicago is one of the great restaurant cities, and that means brutal competition for every cover. A guest deciding between three spots on Randolph Street, a group planning a private dinner in the West Loop, a family looking for catering in Naperville, they're all making a fast decision, and the restaurant that responds first and clearly has a real edge.",
        "The agent works your existing number and social accounts and is trained on your menu, hours, policies, and event offerings. It handles reservations and inquiries the way you'd want a great host to; for anything it shouldn't decide, comping, complaints, special requests, it routes straight to your manager.",
        "It's built around the way hospitality actually runs: the heaviest demand and the thinnest staffing hit at the same hours. The system absorbs that overflow so a fully-booked Friday doesn't cost you a fully-booked Saturday.",
      ],
    },
    faqs: [
      {
        q: "Does it replace OpenTable or my reservation system?",
        a: "No, it sits in front of it. The agent handles the phone calls, DMs, and inquiries that come in around your booking system, and routes reservations into the tool you already use. It captures the demand your reservation platform never sees because it came in by phone or DM during the rush.",
      },
      {
        q: "Can it handle catering and large private-event inquiries?",
        a: "Yes, and those are usually the highest-value reason to run it. The agent captures the date, headcount, budget, and details 24/7 and hands your events team a qualified lead, instead of a voicemail that gets returned two days later after the host already booked elsewhere.",
      },
      {
        q: "What about reservations versus walk-ins and comps?",
        a: "The agent books and answers within the rules you set. Anything that needs judgment, comping a table, handling a complaint, a special accommodation, it routes to your manager with the context rather than deciding on its own.",
      },
      {
        q: "Will it answer Instagram and Facebook messages?",
        a: "Yes. DM auto-reply covers Instagram, Facebook, WhatsApp, and Google Business Messages, where a lot of guests actually reach out. They get an instant answer with hours, menu, or a booking link instead of waiting until someone checks the inbox tomorrow.",
      },
      {
        q: "How fast can a restaurant go live?",
        a: "Most restaurants are live in 5 to 7 days on Awake. We connect your number and social accounts and train the agent on your menu, hours, policies, and event offerings before it handles a real guest. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Reservations & Inquiry Handling for Restaurants",
    audienceType: "Restaurants and Hospitality Businesses",
  },

  {
    slug: "med-spas",
    kind: "industry",
    indexTitle: "Med Spas & Aesthetics",
    indexBlurb:
      "Answer Instagram DMs, book treatments 24/7, and rebook clients on their Botox and filler cycles.",
    metaTitle: "AI Receptionist for Med Spas | Book Treatments 24/7",
    metaDescription:
      "AI front desk for med spas. Answer Instagram DMs, book treatments and consults 24/7, cut no-shows, and rebook clients on their cycle.",
    eyebrow: "Industries, Med Spas & Aesthetics",
    h1: { pre: "AI front desk for", accent: "med spas", post: " and aesthetic clinics." },
    heroSub:
      "Instagram DMs get answered in seconds, treatments and consults book themselves around the clock, and lapsed Botox and filler clients come back, without your front desk watching the inbox during every appointment.",
    problem: {
      heading: "Aesthetic clients book on impulse, at midnight, in your DMs, while you're with a client.",
      paragraphs: [
        "The med spa buying journey is fast and emotional. Someone sees a result on Instagram, decides tonight is finally the night they book Botox or a facial, and they message you at 11pm. If that DM sits until tomorrow, the impulse is gone and they've booked the spa two posts down their feed. Your front desk can't watch the inbox during treatments, and the inbox is where the money is.",
        "Aesthetic clients also research and price-shop hard. They ask about pricing, downtime, what to expect, whether you carry their filler, a dozen questions before they commit. Every one is a chance to win or lose the booking, and every unanswered one is a client drifting to whoever replied first.",
        "Then there's the revenue you've already earned: clients on a three-to-four-month Botox cycle who never rebooked, the filler client who's due, the facial regular who drifted. Without someone actively reaching back out, that recurring revenue quietly leaks.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. A different business, but the same lesson: speed of response decides who books. Before the system went live, after-hours messages and calls died in voicemail and went to the next name on the list. In its first week, it booked 10 jobs the shop would otherwise have lost.",
        "Swap an oil change for a Botox consult and it's the same play. A prospective client DMs at 10pm, the agent answers in seconds with pricing and prep, handles the questions, and books the appointment before the impulse fades or a competitor replies.",
      ],
    },
    system: [
      {
        title: "Instagram & DM booking",
        body: "Instagram and Facebook are where aesthetic clients actually reach out. The agent replies in seconds with pricing, prep, and a booking link, and books the consult or treatment before the impulse fades.",
      },
      {
        title: "24/7 treatment & consult booking",
        body: "Clients book the appointment they want at midnight across web chat, SMS, and DM, no waiting for the front desk to call back tomorrow.",
      },
      {
        title: "Treatment-cycle reactivation",
        body: "A tailored campaign rebooks Botox and filler clients when they're due and wins back facial and laser regulars who drifted. See the database reactivation page for how it runs.",
      },
      {
        title: "No-show protection",
        body: "Automated reminders cut the no-shows that waste booked injector and provider time, with easy rescheduling that turns a conflict into a moved appointment.",
      },
      {
        title: "Question handling",
        body: "Pricing, downtime, candidacy, what's included, the agent answers the research questions that decide a booking, in your brand voice, around the clock.",
      },
      {
        title: "Reviews that sell",
        body: "Post-treatment review requests build the before-and-after social proof aesthetic clients lean on hardest when choosing where to go.",
      },
    ],
    local: {
      heading: "From Gold Coast and River North to the suburbs.",
      paragraphs: [
        "Chicago's aesthetic market is crowded and competitive, Gold Coast, River North, and Lincoln Park med spas, plus a fast-growing suburban scene in Naperville, Oak Brook, and Schaumburg. In every one of them, clients compare several providers at once and book whoever answers and reassures them first.",
        "The system works your existing Instagram, booking tool, and phone, and is trained on your menu, pricing, and protocols. It books and answers within your rules; anything clinical or a judgment call routes to your team. It schedules, your injectors and providers stay in control of care.",
        "The biggest unlock is the inbox. The largest window for booking aesthetic treatments is evenings and weekends, on social, exactly when your front desk is gone and so is your competitors'.",
      ],
    },
    faqs: [
      {
        q: "Does it handle Instagram and Facebook DMs?",
        a: "Yes, for med spas that's usually the main reason to run it. DM auto-reply covers Instagram, Facebook, WhatsApp, and Google Business Messages. The agent answers pricing, downtime, and candidacy questions in seconds and books the consult or treatment before the client moves on.",
      },
      {
        q: "Can it rebook clients on their treatment cycle?",
        a: "Yes. We run reactivation campaigns that reach Botox and filler clients when they're due and win back facial and laser regulars who lapsed. It's one of the fastest ways to recover recurring revenue you already earned.",
      },
      {
        q: "Will it give medical or treatment advice?",
        a: "No. The agent handles questions about pricing, prep, scheduling, and general info, and books appointments. Anything clinical, candidacy decisions, medical questions, is captured and routed to your provider rather than answered. We configure it conservatively and review exactly what it covers.",
      },
      {
        q: "Does it replace my front desk?",
        a: "No, it covers what your front desk can't: the after-hours DMs, the overflow during treatments, the questions that come in while everyone's with a client. Your team keeps doing what they do; the agent catches what they'd otherwise miss.",
      },
      {
        q: "How fast can a med spa go live?",
        a: "Most are live in 5 to 7 days on Awake. We connect your Instagram, booking tool, and number and train the agent on your menu, pricing, and protocols before any real client reaches it. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Front Desk & Booking for Med Spas",
    audienceType: "Med Spas and Aesthetic Clinics",
  },

  {
    slug: "plumbers",
    kind: "industry",
    indexTitle: "Plumbers",
    indexBlurb:
      "Catch every burst-pipe and after-hours emergency call, the highest-margin jobs you can't get to.",
    metaTitle: "AI Receptionist for Plumbers | Capture Every Emergency Call",
    metaDescription:
      "AI receptionist for plumbers. Answer emergency and after-hours calls, triage urgency, and book jobs 24/7, even when you're under a sink.",
    eyebrow: "Industries, Plumbers",
    h1: { pre: "AI lead capture for", accent: "plumbers", post: "." },
    heroSub:
      "Burst pipes, sewer backups, dead water heaters, the emergency calls that pay the most get answered, triaged, and booked the second they ring, even when you're snaking a line at 2am.",
    problem: {
      heading: "When a pipe bursts, the homeowner calls until someone picks up. Make sure it's you.",
      paragraphs: [
        "Plumbing is emergency work, and emergencies don't leave voicemails. A burst pipe at 11pm, sewage backing up into a basement, a water heater that died before a houseful of guests, the homeowner is panicking and calling down the Google list until a human answers. The first plumber to pick up or text back gets the job, and it's usually the highest-margin job of the week.",
        "The trouble is you're a plumber, not a receptionist. You're under a sink, snaking a line, or driving between calls when the phone rings. It goes to voicemail, and the emergency that would have paid for your day goes to the next shop. During a freeze or a heavy rain, when every line in the city is ringing at once, the leak only gets worse.",
        "You don't need more ads to fix this. The emergency calls are already coming. You need them answered the second they ring, at 2pm on a job and at 2am on a Sunday, so the work you're already being called for actually books.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit, a different trade, the same emergency dynamic. Before the AI receptionist went live, after-hours calls died in voicemail and new-customer leads slipped to the next shop on Google. In the first week the system was live, it booked 10 jobs the shop wouldn't have captured otherwise.",
        "The same workflow runs for a plumber fielding a 1am burst-pipe call: the line rings, the agent answers in seconds, qualifies the emergency, captures the address, and either books it or escalates it straight to you. The job that would have died in voicemail is on the calendar instead.",
      ],
    },
    system: [
      {
        title: "Missed-call text-back",
        body: "Every unanswered call triggers an instant SMS, often before the homeowner has dialed the next plumber. The conversation continues over text until the job is qualified and scheduled.",
      },
      {
        title: "Emergency triage",
        body: "The agent asks what's failing, burst, leak, no water, backup, no hot water, flags true emergencies to you immediately, and books routine work like water heaters and drain cleaning into your next slot.",
      },
      {
        title: "Voice AI that answers (Climbing)",
        body: "When you can't pick up, the voice agent does, qualifies the emergency, captures the address, and books or escalates. Bilingual English/Spanish handling is available on this plan.",
      },
      {
        title: "After-hours premium capture",
        body: "Nights, weekends, and holidays are when emergency calls pay the most and most shops are closed. The agent runs 24/7 so those calls become booked jobs, not lost ones.",
      },
      {
        title: "Service-area routing",
        body: "Trained on your boundaries and dispatch rules, it qualifies the address and only books work inside the area you actually run, so you're not driving across the metro for nothing.",
      },
      {
        title: "Reviews on autopilot",
        body: "A completed job triggers a Google review request at the moment the customer is most relieved, the reviews that win the next emergency search.",
      },
    ],
    local: {
      heading: "Chicago's old pipes keep you busy. Don't let the calls leak.",
      paragraphs: [
        "Chicagoland plumbing is steady work by virtue of its housing: cast-iron and clay laterals under century-old two-flats in Oak Park and Logan Square, lead service lines, and finished basements on combined sewers that back up every heavy rain. The work is constant, the only question is whether the call reaches a person or a voicemail.",
        "The system is remote and trained on your trade and territory, whether you're a single-truck operator on the North Side or a multi-crew shop covering DuPage and the collar counties. It captures the after-hours and overflow calls you can't get to and routes by ZIP so you stay in your zone.",
        "This is built for plumbers specifically, but it's part of how we run home-services lead capture across trades. See the home services overview for the bigger picture.",
      ],
    },
    faqs: [
      {
        q: "Can it tell an emergency from a routine call?",
        a: "Yes. We train the flow on your definition of an emergency, burst, active leak, no water, sewage backup, no hot water, and the agent escalates those to you immediately with the address. Routine jobs like water-heater quotes and drain cleaning get booked into your next open slot without interrupting you.",
      },
      {
        q: "Does it work after hours, when the emergency calls actually come?",
        a: "Yes, that's the point. Nights, weekends, and holidays are covered 24/7, so the high-margin 2am burst-pipe call becomes a booked job instead of a voicemail you find in the morning.",
      },
      {
        q: "Will it work with my existing number?",
        a: "Yes. We forward your existing business line, so nothing changes for customers and you keep the number. The agent catches the calls and texts you'd miss; anything it can't handle routes to you with the full conversation attached.",
      },
      {
        q: "Can it handle Spanish-speaking callers?",
        a: "Bilingual handling is available on the Climbing plan. The agent detects the language, switches to Spanish, and runs the full qualification and booking flow without a hand-off. On Awake, the agent is English-only.",
      },
      {
        q: "How fast can a plumbing business go live?",
        a: "Most installs go live in 5 to 7 days. We forward your number, connect your calendar, and train the agent on your services, pricing ranges, and service area first. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation for Plumbers",
    audienceType: "Plumbing Contractors",
  },

  {
    slug: "roofers",
    kind: "industry",
    indexTitle: "Roofers",
    indexBlurb:
      "Win the post-storm race: instant lead response, inspection booking, and estimate follow-up.",
    metaTitle: "AI Receptionist for Roofers | Never Miss a Storm Lead",
    metaDescription:
      "AI receptionist for roofers. Capture every storm lead in seconds, book inspections, qualify insurance claims, and follow up estimates 24/7.",
    eyebrow: "Industries, Roofers",
    h1: { pre: "AI lead capture for", accent: "roofers", post: "." },
    heroSub:
      "When a storm rolls through and every homeowner needs an inspection at once, the agent answers every lead in seconds, books inspections, and follows up estimates until they close.",
    problem: {
      heading: "After a storm, the race is on, and it's won on the phone.",
      paragraphs: [
        "Roofing demand comes in waves, and the biggest waves follow weather. A hail or windstorm rolls through, and suddenly every homeowner in the area needs an inspection at once. Yard signs go up, door-knockers fan out, and the homeowner books whoever responds first and seems most legit. If your phone goes to voicemail during that window, your competitors are signing the jobs your marketing paid to generate.",
        "Roofing leads are also higher-stakes and more complex than most trades: insurance claims, estimates, inspections, financing, a sales cycle that can run weeks. A lead that isn't answered fast and then followed up persistently doesn't just cool, it signs with the roofer who stayed in front of them.",
        "You can't be on a roof and on the phone at the same time, and storm season is exactly when you're on the most roofs. The fix isn't more lead-gen; it's catching and nurturing every storm lead the moment it comes in, then following up until the estimate closes.",
      ],
    },
    proof: {
      heading: "Car Hub, Macomb Township: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Different trade, same truth: the business goes to whoever answers and follows up. Before the system went live, after-hours calls died in voicemail and leads went to the next shop on Google. In its first week, it booked 10 jobs that would otherwise have been lost.",
        "For a roofer, that's a front office that never misses a storm lead and never forgets to follow up. The inspection request comes in, the agent qualifies and books it, captures whether insurance is involved, and keeps the estimate warm until the homeowner signs.",
      ],
    },
    system: [
      {
        title: "Instant storm-lead response",
        body: "Every call, form, and DM triggers a reply in seconds, critical in the post-storm window when the first responder books the inspection.",
      },
      {
        title: "Inspection & estimate booking",
        body: "The agent qualifies the property and damage, captures whether insurance is involved, and books the inspection or estimate straight onto your calendar.",
      },
      {
        title: "Insurance-claim capture",
        body: "It collects the details you need on claim-driven jobs, carrier involvement, damage type, timeline, so your team walks in ready instead of starting cold.",
      },
      {
        title: "Estimate follow-up",
        body: "Roofing closes on the follow-up. Automated, persistent nudges keep pending estimates warm until the homeowner signs, instead of letting them drift.",
      },
      {
        title: "Surge handling",
        body: "When a storm triples your call volume overnight, the agent answers every lead in parallel and never sends one to voicemail.",
      },
      {
        title: "Reviews & referrals",
        body: "Post-job review requests build the reputation that wins the next neighborhood after the next storm.",
      },
    ],
    local: {
      heading: "Built for Chicagoland storm season.",
      paragraphs: [
        "The Chicago area takes its share of hail, straight-line wind, and heavy storms, and every event sets off a scramble across the suburbs and the city, Naperville, Schaumburg, the collar counties, and the bungalow belt. Aging roofs and sudden damage mean leads spike all at once, and the roofer who answers and follows up wins the season.",
        "The system is remote and trained on your services, your pricing approach, and the areas you cover, from a single crew to a multi-team operation. It captures and qualifies the surge, books inspections, and keeps every pending estimate followed up so storm demand turns into signed contracts.",
        "This is tuned for roofers, but it's part of how we run home-services lead capture across trades. See the home services overview for the bigger picture.",
      ],
    },
    faqs: [
      {
        q: "Can it handle the call surge after a big storm?",
        a: "Yes, that's exactly when it earns its keep. When a hailstorm triples your volume overnight, the agent answers every call, form, and DM in parallel, qualifies each, and books inspections without anything hitting voicemail.",
      },
      {
        q: "Does it capture insurance-claim details?",
        a: "Yes. The agent asks whether insurance is involved and collects the damage type, carrier, and timeline you need, so your estimator walks into the inspection with the claim context already in hand.",
      },
      {
        q: "Does it follow up on pending estimates?",
        a: "Yes, and for roofing that's often the difference. Automated, persistent follow-up keeps estimates warm with timely nudges until the homeowner signs or opts out, instead of letting weeks-long sales cycles go cold.",
      },
      {
        q: "Will it work with my existing number and calendar?",
        a: "Yes. We forward your existing line and book into the calendar you already use. Nothing changes for the homeowner; the agent just catches and schedules the leads you'd otherwise miss while you're on a roof.",
      },
      {
        q: "How fast can a roofing business go live?",
        a: "Most installs go live in 5 to 7 days, so you can be ready before the next storm. We train the agent on your services, service area, and follow-up cadence first. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Receptionist & Lead Automation for Roofers",
    audienceType: "Roofing Contractors",
  },

  {
    slug: "accounting-firms",
    kind: "industry",
    indexTitle: "Accounting & CPA Firms",
    indexBlurb:
      "Answer new-client calls through tax season and book consultations without adding seasonal staff.",
    metaTitle: "AI Receptionist for Accounting Firms | Book Clients 24/7",
    metaDescription:
      "AI receptionist for accounting and CPA firms. Answer new-client calls through tax season, book consultations 24/7, and reactivate past clients.",
    eyebrow: "Industries, Accounting & CPA Firms",
    h1: { pre: "AI client intake for", accent: "accounting firms", post: "." },
    heroSub:
      "New-client calls get answered through the tax-season crush, consultations book themselves 24/7, and last year's clients come back before the next deadline, without hiring seasonal front-desk help.",
    problem: {
      heading: "Tax season triples your calls and buries your front desk.",
      paragraphs: [
        "Accounting runs on a brutal calendar. From January to April the phone doesn't stop, new clients who finally opened their mail, existing clients with questions, everyone wanting in before the deadline. Your team is heads-down in returns, and the new-client calls that come in during the crunch go to voicemail. Those are the clients worth the most over a lifetime, and they're calling the next CPA on the list.",
        "The rest of the year the leak is quieter but real: bookkeeping and advisory inquiries, a small business that needs an entity set up, a prospect comparing firms. Appointment-based work means every unbooked consult is revenue that never starts, and a slow reply reads as a firm too busy to take them.",
        "Hiring seasonal front-desk help is expensive and hard to train fast, and it still goes home at five during the weeks people actually call. The fix is catching every new-client inquiry the moment it lands, through the surge and after hours, and booking the consult before they shop elsewhere.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Different business, identical mechanics: the new client goes to whoever answers first. Before the system went live, calls that came in while the team was busy died in voicemail. In its first week, it booked 10 appointments the shop would have lost.",
        "For a firm, that's an intake specialist who works through tax season and never goes home. A prospect calls during the April crush or fills out a form at 9pm; the agent answers, qualifies whether they need tax, bookkeeping, or advisory, and books the consult before they call the next office.",
      ],
    },
    system: [
      {
        title: "24/7 new-client intake",
        body: "Every call and form gets answered immediately, even through tax-season volume. The agent qualifies the service needed and books the consultation while the prospect is still motivated.",
      },
      {
        title: "Service qualification",
        body: "Tax, bookkeeping, advisory, entity setup, payroll, the agent routes by what the prospect actually needs and captures the basics so your first meeting starts informed.",
      },
      {
        title: "Tax-season surge handling",
        body: "When volume triples, the agent answers every lead in parallel and never sends one to voicemail, so the crunch stops costing you new clients.",
      },
      {
        title: "Consultation booking",
        body: "Qualified prospects land on your calendar as confirmed consults with their details attached, instead of a voicemail you return after they've signed with someone else.",
      },
      {
        title: "Off-season reactivation",
        body: "A campaign re-engages last year's one-off tax clients before the next season and surfaces bookkeeping or advisory upsells. See the database reactivation page.",
      },
      {
        title: "Reminders & follow-up",
        body: "Automated reminders cut missed consults, and follow-up keeps document collection and onboarding moving so engagements actually start.",
      },
    ],
    local: {
      heading: "For firms serving Chicago's small businesses and households.",
      paragraphs: [
        "From a solo CPA in Naperville to a small firm in the Loop or Schaumburg, the bottleneck is the same: a lean team that can't be in returns and on the phone at once, especially from January to April. The system covers the calls and inquiries they can't get to without changing how the firm runs.",
        "It works your existing number and scheduler and is trained on your services, your client types, and what you do and don't take. It qualifies and books; it never gives tax advice or quotes a position. That stays firmly with your accountants.",
        "Evenings and weekends matter more than firms think, that's when busy business owners and individuals finally deal with their taxes and books, and when most offices are closed.",
      ],
    },
    faqs: [
      {
        q: "Can it handle the tax-season call surge?",
        a: "Yes, that's when it matters most. When January-to-April volume triples, the agent answers every new-client call and form in parallel, qualifies the service needed, and books consultations so the crunch stops sending prospects to voicemail and to other firms.",
      },
      {
        q: "Does it give tax advice?",
        a: "No, and that's deliberate. The agent handles intake and scheduling only, it qualifies what the prospect needs and books the consult. It never offers tax advice or takes a position; anything substantive is captured and routed to your accountants.",
      },
      {
        q: "What does it capture for a new client?",
        a: "The service they need (tax, bookkeeping, advisory, entity setup, payroll), their situation basics, and contact details, so your first meeting starts informed instead of cold. You set the intake questions.",
      },
      {
        q: "Can it bring back last year's tax clients?",
        a: "Yes. We run reactivation campaigns that re-engage prior-season clients before the next deadline and surface bookkeeping or advisory work, recurring revenue from clients you already earned.",
      },
      {
        q: "How fast can a firm go live?",
        a: "Most firms are live in 5 to 7 days on Awake, ideally before the season starts. We connect your scheduler and train the agent on your services and intake first. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Client Intake & Booking for Accounting Firms",
    audienceType: "Accounting and CPA Firms",
  },

  {
    slug: "real-estate",
    kind: "industry",
    indexTitle: "Real Estate",
    indexBlurb:
      "Answer portal leads in seconds and book showings, an ISA that never sleeps.",
    metaTitle: "AI Lead Response for Real Estate | Answer Leads in Seconds",
    metaDescription:
      "AI lead response for real estate agents and teams. Answer portal leads in seconds, qualify buyers and sellers, and book showings 24/7.",
    eyebrow: "Industries, Real Estate",
    h1: { pre: "AI lead response for", accent: "real estate", post: " agents and teams." },
    heroSub:
      "Every Zillow, Realtor.com, and website lead gets answered in seconds, qualified, and booked onto the right agent's calendar, even while you're in a showing or at a closing.",
    problem: {
      heading: "In real estate, the first agent to respond wins the lead, usually within five minutes.",
      paragraphs: [
        "Portal leads decay faster than in almost any business. A buyer fills out a Zillow or Realtor.com form and is immediately routed to several agents, the one who responds in the first few minutes books the showing, and the rest are calling a lead who already picked someone. Every team lead will tell you the same thing: speed-to-lead is the whole game, and minutes matter.",
        "But agents are the worst-positioned people to respond fast. You're in a showing, at a closing, driving, or with another client. By the time you see the lead, it's cold and signed with whoever answered first. Teams hire ISAs to fix this, but that's expensive, hard to staff around the clock, and still doesn't cover nights and weekends, when a huge share of online home shopping happens.",
        "The leak isn't lead volume; you're already paying for leads. It's the gap between a lead arriving and someone responding. Close that to seconds and the same lead spend produces more booked showings and signed clients.",
      ],
    },
    proof: {
      heading: "Proof from a sister market: 10 booked jobs in week one.",
      paragraphs: [
        "Our first client is an independent auto shop outside Detroit. Not real estate, but the same speed-to-lead rule decides both. Before the system went live, leads that came in after hours or during a rush died in voicemail. In its first week, the agent booked 10 appointments that would otherwise have been lost.",
        "For an agent or team, that's an inside sales rep who answers every portal lead in seconds, qualifies it, books the showing, and routes it to the right person, at 10pm on a Sunday or in the middle of a closing.",
      ],
    },
    system: [
      {
        title: "Instant lead response",
        body: "Every Zillow, Realtor.com, website, and Facebook lead gets answered in seconds, day or night, inside the window where the lead is still deciding who to work with.",
      },
      {
        title: "Buyer & seller qualification",
        body: "The agent qualifies timeline, financing or pre-approval, price range, and area for buyers, and property and motivation for sellers, so you spend time on real opportunities.",
      },
      {
        title: "Showing & consult booking",
        body: "Qualified leads book straight onto the right agent's calendar, a showing, a buyer consult, or a listing appointment, with the details attached.",
      },
      {
        title: "Team lead routing",
        body: "On a team, leads route by agent, area, or price point and escalate hot ones in real time, so no lead sits unworked in a shared inbox.",
      },
      {
        title: "After-hours coverage",
        body: "Evenings and weekends are when people browse homes. The agent runs 24/7 so a 10pm Zillow inquiry is a booked showing, not a next-day callback.",
      },
      {
        title: "Long-cycle follow-up",
        body: "Buyers and sellers move on their own timeline. Automated nurture keeps not-yet-ready leads warm for months until they're ready to act.",
      },
    ],
    local: {
      heading: "For agents and teams across Chicago and the suburbs.",
      paragraphs: [
        "Whether you're a solo agent working Lincoln Park and Lakeview condos, a team covering Naperville and the DuPage suburbs, or a brokerage spanning the metro, you're competing against everyone else who got the same portal lead. Responding first and qualifying well is how you win more of them without buying more.",
        "The system works your existing number, CRM, and lead sources and is trained on your areas, price points, and process. It responds, qualifies, books, and routes to the right agent, while you're showing a home or sitting at a closing.",
        "It's an ISA that never sleeps, never misses a lead, and costs a fraction of staffing one around the clock. Your agents do what they're great at; the system makes sure no lead goes unanswered.",
      ],
    },
    faqs: [
      {
        q: "How fast does it respond to portal leads?",
        a: "Seconds. The moment a Zillow, Realtor.com, website, or Facebook lead hits, the agent replies by text and engages the conversation, inside the first-few-minutes window where the responding agent almost always wins the lead.",
      },
      {
        q: "Does it replace my ISA?",
        a: "It does the core of what an ISA does, instant response, qualification, booking, and follow-up, 24/7, at a fraction of the cost of staffing one around the clock. Many teams use it to cover the nights, weekends, and overflow their ISAs can't.",
      },
      {
        q: "Does it handle both buyer and seller leads?",
        a: "Yes. It qualifies buyers on timeline, financing, price, and area, and sellers on property and motivation, then books the showing, buyer consult, or listing appointment and routes it to the right agent.",
      },
      {
        q: "Can it route leads across a team?",
        a: "Yes. Leads route by agent, area, or price point per your rules, hot leads escalate in real time, and nothing sits unworked in a shared inbox.",
      },
      {
        q: "How fast can an agent or team go live?",
        a: "Most are live in 5 to 7 days on Awake. We connect your lead sources, CRM, and calendar and train the agent on your areas and process first. The Climbing plan with voice AI takes 10 to 14 days.",
      },
    ],
    serviceType: "AI Lead Response & Showing Scheduling for Real Estate",
    audienceType: "Real Estate Agents and Brokerages",
  },
];

export function getIndustry(slug: string): LandingContent | undefined {
  return industries.find((i) => i.slug === slug);
}

// Metadata for industries served by a hand-written static route rather than
// the dynamic [slug] route (their full content lives in app/industries/...).
const STATIC_INDUSTRY_META: Record<string, { title: string; blurb: string }> = {
  "auto-dealerships": {
    title: "Auto Dealerships",
    blurb:
      "Answer every Cars.com and AutoTrader lead, qualify trade-ins, and book test drives 24/7.",
  },
};

// Display order for the hub, footer, and sitemap. Must list every dynamic slug
// (content.test.ts enforces full coverage) plus any static-route slugs.
const INDUSTRY_ORDER = [
  "home-services",
  "plumbers",
  "roofers",
  "auto-dealerships",
  "dental-practices",
  "med-spas",
  "law-firms",
  "accounting-firms",
  "real-estate",
  "restaurants",
];

/** Hub + sitemap registry. Resolves each slug to dynamic content or a static route. */
export const industryIndex: { slug: string; title: string; blurb: string }[] =
  INDUSTRY_ORDER.map((slug) => {
    const c = getIndustry(slug);
    if (c) return { slug, title: c.indexTitle, blurb: c.indexBlurb };
    const s = STATIC_INDUSTRY_META[slug];
    return { slug, title: s.title, blurb: s.blurb };
  });
