import type { TrevisoCity } from "./types";

/**
 * Treviso, the city.
 *
 * ── The gap this page closes ─────────────────────────────────────────────
 * The TSF airport page tells a reader twice that Treviso is a city in its own
 * right and worth considering — at content/veneto/treviso.ts lines 93 and 146
 * — and until now there was nowhere to send them. No `treviso` city PageId
 * existed. This page is that destination, and the airport page now links to
 * it instead of stranding the thought.
 *
 * ── The research position, stated plainly ────────────────────────────────
 * Treviso's historic centre is a limited-traffic zone and the Comune runs a
 * permit system through the Polizia Locale. Beyond that structural fact, the
 * authoritative current text could NOT be retrieved:
 *
 *   ztltreviso.it            HTTP 500 from every network tried, serving a
 *                            Regione del Veneto "servizio non disponibile"
 *                            page. Its /varchi, /categorie-previste and /pass
 *                            paths return no response at all.
 *   comune.treviso.it        connection refused
 *   the portal's download    TLS handshake failure
 *   endpoint
 *
 * What WAS obtained, from the Comune's own delibere host
 * (www2.comune.treviso.it), is the "Disciplinare per la circolazione stradale
 * nella Zona a Traffico Limitato", version 4, Settore Polizia Locale — PDF
 * created 21 February 2017. It states that circulating in the ZTL requires a
 * pass or contrassegno obtained by declaration to the Polizia Locale; lists
 * "Taxi e NCC in servizio" with a pass duration of "permanente"; allows an
 * unregistered plate to be regularised within five days of the first transit,
 * capped at ten plate changes a year; and gives guests of accommodation in the
 * ZTL a pass "per la durata del soggiorno".
 *
 * NONE of that detail is published on this page as the current rule, and the
 * decision is deliberate. The document is nearly ten years old, an earlier
 * 2014 version said the OPPOSITE for taxis and NCC — admitting them "senza
 * limitazioni orarie e senza necessità di premunirsi di apposito permesso" —
 * and there is evidence of a further restricted area added in 2025. A regime
 * that has already reversed once, read from a document that old, is not
 * something to state as law on a commercial page.
 *
 * So this page publishes the DISTINCTIONS instead: eligibility, a permit, a
 * registered plate, a guest arrangement, a pedestrian street, a reserved
 * lane, and somewhere a car can physically stop. Those hold whatever the
 * current table says, they are what a traveller actually needs, and no
 * competitor page explains a single one of them.
 *
 * Not published anywhere here, because none of it could be verified from a
 * primary source: gate counts, gate hours, the via Manin night window, the
 * via Roggia street list, the plate-change cap, or any pass category.
 *
 * ── UPDATED 26 November 2026 ───────────────────────────────────
 * The owner has confirmed two things that change the page's tone without
 * changing its evidence: partner drivers serve the whole Treviso area, and
 * the operation CAN obtain the passes Treviso access requires. The access
 * section previously read as though a centre address might be unreachable;
 * it now says the transfer can be arranged and a pass obtained where the
 * journey needs one.
 *
 * What did NOT change is the legal position below: the current ordinance
 * text is still unobtainable, so the page still publishes no gate list, no
 * hours and no permit category. Operational capability and verified current
 * law are kept apart on purpose. The four things the page still refuses to
 * promise are unchanged: a blanket street permission, a hotel doorway, a
 * replacement vehicle inheriting an authorisation, and a guest permit
 * covering a hired car.
 *
 * ── Operator coverage ────────────────────────────────────────────────────
 * The owner has confirmed partner drivers serve Treviso city. That is a
 * coverage statement and nothing more. It does not establish that a given
 * driver holds a centre permit, that a vehicle is registered, or that any
 * particular doorway can be reached — and the page says so rather than
 * letting the reader infer otherwise. A guest's own permit is never presented
 * as covering a hired vehicle.
 *
 * ── No photograph ───────────────────────────────────────────────────────
 * The CC0 library holds no image of Treviso, its station or its centre. The
 * Venice photographs would be a geographic lie on a page whose argument is
 * that Treviso is a different place from both Venice and its own airport.
 */

const en: TrevisoCity = {
  meta: {
    title: "Treviso Private Transfers – City, Airports, Station",
    description:
      "Private transfers to and from Treviso city: from either airport, the " +
      "station, or your hotel door. Send the address and we quote the journey.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Treviso",
    h1: "Private transfers in Treviso",
    lead:
      "Most people who need a car in Treviso are not sightseeing. They have a " +
      "meeting at nine, or a hotel inside the walls and two suitcases, or a train " +
      "that has just put them on a station forecourt in a city they have never " +
      "driven in. This page is for arranging that journey — in either direction.",
    primaryCta: "Request a quotation",
    secondaryCta: "Treviso Airport (TSF)",
    facts: [
      { label: "Arrivals we cover", value: "Both airports, the station, any address" },
      { label: "Centre", value: "Restricted — the address decides the ending" },
      { label: "Return journeys", value: "Quoted in the same conversation" },
    ],
  },

  arriving: {
    id: "arriving",
    eyebrow: "However you get here",
    heading: "Four ways people arrive in Treviso, and what each one needs",
    lead:
      "The city is reached from two different airports, a mainline station and " +
      "the rest of the Veneto. What changes between them is not the destination " +
      "but the detail we need in order to plan the arrival.",
    items: [
      {
        id: "tsf",
        name: "Treviso Airport (TSF)",
        page: "treviso-airport",
        linkText: "Treviso Airport in full",
        detail:
          "The airport that carries the city's name, and the one most Treviso-bound passengers land at. For a transfer into the city this is the short leg of anyone's trip — which is exactly why the destination address does more work here than the origin does.",
        needs:
          "The flight number, the date and the scheduled arrival time, plus the full address in Treviso.",
      },
      {
        id: "vce",
        name: "Venice Marco Polo (VCE)",
        page: "venice-marco-polo",
        linkText: "Venice Marco Polo in full",
        detail:
          "A great many Treviso arrivals come through Venice's main airport rather than Treviso's, because the long-haul and full-service routes land there. A transfer from VCE to Treviso is an ordinary road journey with an ordinary ending — unlike a transfer from VCE into Venice, where the road stops at the edge of the city.",
        needs:
          "The same flight details, and the Treviso address. Say Treviso explicitly: a request naming only “Venice airport” tells us where you land, not where you are going.",
      },
      {
        id: "station",
        name: "Treviso railway station",
        detail:
          "Treviso Centrale sits just south of the historic centre and handles regional and intercity services. Arriving by train means you already have your luggage in hand and a short, awkward last leg — which is the classic case for arranging the car in advance rather than looking for one on arrival.",
        needs:
          "The train's arrival time and the date, plus a mobile number. The meeting point is agreed with the operator, because a station forecourt is not somewhere we will promise a space sight unseen.",
      },
      {
        id: "veneto",
        name: "Elsewhere in the Veneto",
        page: "padua",
        linkText: "Transfers in Padua",
        detail:
          "Treviso is within ordinary road reach of Venice, Padua and the rest of the region, so a transfer here is often one leg of a wider itinerary rather than an airport run. Those journeys are arranged the same way, with both addresses instead of a flight.",
        needs:
          "Both full addresses, the date and time, and whether you want the return as well.",
      },
    ],
    note:
      "The airport and the city are two different destinations, and a request " +
      "that names only “Treviso” is genuinely ambiguous. If you mean the " +
      "terminal, say the terminal; if you mean an address in the city, send the " +
      "address.",
  },

  address: {
    id: "address",
    eyebrow: "Where you are staying",
    heading: "Why the exact address decides more than the town name",
    lead:
      "Treviso is a walled city with a restricted centre and a good deal of " +
      "accommodation outside it. Those are two quite different arrivals, and the " +
      "street is what tells them apart.",
    groups: [
      {
        id: "centre",
        heading: "Inside the walls",
        subheading: "Where access rules come into it",
        items: [
          {
            term: "Hotels in the historic centre",
            detail:
              "Reached by streets that are narrow, partly restricted and in places closed to traffic. The journey can be arranged; where it ends is settled by the operator once they have the address.",
          },
          {
            term: "Ask reception one question",
            detail:
              "“Can a car reach your entrance, and is there anywhere to stop?” They answer it for guests every week, and their answer is worth more than any general rule we could print.",
          },
          {
            term: "Apartments and guesthouses",
            detail:
              "Often on a lane with no reception desk and nobody to meet you. Send the full address, the door number and a mobile number, and say if there is a gate or a code.",
          },
        ],
      },
      {
        id: "outside",
        heading: "Outside the centre",
        subheading: "An ordinary Italian arrival",
        items: [
          {
            term: "Business hotels and the ring roads",
            detail:
              "Much of Treviso's business accommodation sits outside the walls with its own forecourt or car park. These arrivals have no access question at all: the car comes to the door.",
          },
          {
            term: "Company addresses",
            detail:
              "An industrial estate or an office park is usually straightforward, but the entrance can be some distance from the postal address. If you have a gate name or a building number, send it.",
          },
          {
            term: "Holiday accommodation and the countryside",
            detail:
              "Agriturismi and villas around Treviso are reached on minor roads where the pin on a booking confirmation is not always the driveway. The property's own arrival note is the most useful thing you can forward.",
          },
        ],
      },
    ],
    note:
      "We do not publish a list of which Treviso streets a car can use, and we " +
      "would not trust one that we had. The address goes to the operator, who " +
      "answers it for your journey.",
  },

  access: {
    id: "access",
    eyebrow: "The part competitors skip",
    heading: "Seven different things people mean by “can the car get there?”",
    lead:
      "Treviso's centre is a limited-traffic zone, and the Comune administers " +
      "access through its local police. Travellers tend to treat all of this as " +
      "one question. It is seven, and holding one answer tells you nothing about " +
      "the next.",
    layers: [
      {
        id: "coverage",
        name: "Our service coverage",
        isIt:
          "Confirmed: partner drivers provide private transfers to and from Treviso city, including to addresses inside the restricted centre, and where a pass is needed for the journey the operation can arrange one.",
        isNot:
          "Not a blanket permission for every street. The arrangement is made for your journey against your address and vehicle, which is why the address matters more here than the town name.",
      },
      {
        id: "eligibility",
        name: "Whether the vehicle class is eligible",
        isIt:
          "A question about categories: which kinds of vehicle the Comune's rules admit to the zone at all.",
        isNot:
          "Not a permission that attaches to your booking. A category being listed does not put a particular car through a particular gate on a particular evening.",
      },
      {
        id: "permit",
        name: "Holding a permit",
        isIt:
          "The Comune issues passes for its limited-traffic zone through the Polizia Locale, and where your journey needs one the operation can obtain it. This is the part travellers assume is impossible, and it is not.",
        isNot:
          "Not automatic, and not something a vehicle carries simply by being an eligible kind. It is arranged for a journey, which is why the booking needs your address rather than just the city.",
      },
      {
        id: "plate",
        name: "Having the right plate registered",
        isIt:
          "Camera-enforced zones work from number plates, so a permit is only effective for the plate recorded against it.",
        isNot:
          "Not automatic when a replacement vehicle is sent. If your operator substitutes a car, the registration is their matter to handle, and a fair thing to ask them about.",
      },
      {
        id: "guest",
        name: "A guest permit from your hotel",
        isIt:
          "Accommodation inside restricted areas can often arrange access for guests. Worth asking your hotel about for your own car.",
        isNot:
          "Not cover for a hired vehicle, and this is the one people most often get wrong. A permit arranged for a guest is not a permission we can rely on for a transfer, and nobody should tell you otherwise.",
      },
      {
        id: "pedestrian",
        name: "A pedestrian street or a reserved lane",
        isIt:
          "A separate regime again. Pedestrian areas and bus or taxi lanes are governed by their own rules, not by the traffic zone around them.",
        isNot:
          "Not covered by anything above. This is the distinction that catches people out at the station and in the squares.",
      },
      {
        id: "stopping",
        name: "Somewhere the car can actually stop",
        isIt:
          "The only one that decides your arrival: a place a vehicle can halt long enough for people and cases to get out.",
        isNot:
          "Not established by any permission at all. Being allowed along a street is not being able to stand on it.",
      },
    ],
    caution: {
      heading: "What still gets confirmed for your booking",
      body:
        "Three things, and they are settled per journey rather than in general: " +
        "which arrangement your destination needs, which vehicle is coming and " +
        "what it is authorised for, and the point where it can actually stop. " +
        "The Comune sets and revises its own rules and publishes the current " +
        "ones, so we quote no gate list or permit category here. Send your full " +
        "address with the request and the operator confirms the access and " +
        "drop-off arrangement in writing before you travel.",
    },
    note:
      "If your destination is outside the walls, none of this applies to your " +
      "journey and the car comes to the address. It is worth knowing which of the " +
      "two situations you are in before you travel, and the address answers it.",
  },

  ret: {
    id: "return",
    eyebrow: "Going back",
    heading: "Leaving Treviso: the half people arrange too late",
    lead:
      "The return is a separate booking with the opposite pressure. Arriving, " +
      "the flight has landed and the day is yours. Leaving, something departs " +
      "whether or not the car has found you.",
    paragraphs: [
      "So it is planned backwards from the departure, and the pickup time is agreed with the operator rather than taken from a table on this page. We publish no recommended margin and no journey duration, because the honest figure depends on which airport you are flying from, the hour, the day and where in the city you are starting — and a margin invented here is the one number a traveller would most regret trusting.",
      "The other half of it is where the car can reach you on the morning you leave. A business hotel with its own forecourt is nothing. A guesthouse on a lane inside the walls is the same access question as on arrival, answered the same way — and far easier settled a week ahead than at six in the morning with cases in a hallway.",
      "If you are leaving from a company address or a meeting rather than a hotel, say so. An office park at the end of a working day is a different pickup from a hotel at dawn, and the operator would rather know in advance.",
    ],
    items: [
      "The departure date, and which airport or station you are heading to.",
      "The flight or train number and its scheduled departure time.",
      "The full pickup address in Treviso, and a mobile number.",
      "Anything the property has told you about where a car can wait.",
      "How many passengers and how much luggage, counted by type.",
      "Whether this is the return leg of an arrival we have already quoted.",
    ],
    cta: "Request a return quotation",
    note:
      "Ask for the return in the same message as the arrival and it stays one " +
      "conversation with one operator. Agree the pickup time with them for your " +
      "specific departure.",
  },

  alternatives: {
    id: "alternatives",
    eyebrow: "An honest comparison",
    heading: "When a private transfer is the right call, and when it is not",
    lead:
      "Treviso is a small city with public transport that works. A private " +
      "transfer is not automatically the better answer, and we are not going to " +
      "pretend it is.",
    columns: [
      {
        id: "private",
        heading: "A transfer earns its cost when",
        body:
          "The luggage, the group, the hour or the address turns a connection from slower into genuinely awkward.",
        points: [
          "You have real suitcases, and every change of vehicle means carrying them.",
          "You are a family with young children, or a group travelling together.",
          "Your accommodation is away from the station or outside the walls.",
          "You are arriving late, or on a schedule you cannot move.",
          "You are going to a meeting and would rather not arrive having improvised.",
        ],
      },
      {
        id: "other",
        heading: "Something else may suit better when",
        body:
          "You are travelling light and the public network happens to go where you are going.",
        points: [
          "Two of you with cabin bags and a flexible afternoon.",
          "You are staying near the station, where the last stretch is a short walk.",
          "Cost matters to you more than door-to-door convenience.",
          "Your plans are still moving and a flexible ticket beats a booked car.",
        ],
      },
    ],
    note:
      "We publish no timetable, fare or frequency for any bus or train service " +
      "here, and no claim that a transfer is faster or cheaper. Those figures " +
      "change, the operators publish them, and a stale number on this page would " +
      "help nobody.",
  },

  prepare: {
    id: "prepare",
    heading: "What to have ready before you ask",
    lead:
      "Send these in one message and the reply can be a quotation rather than a " +
      "list of questions.",
    items: [
      "Where you are starting: a terminal, the station, or a full address.",
      "The full destination address in Treviso, with the door or building number.",
      "The date, and the pickup time — or the flight or train details instead.",
      "How many passengers, adults and children separately, with the children's ages.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Child seats or any other requirement, stated as a request to be confirmed.",
      "A mobile number the driver can reach on the day.",
      "Whether you need the return journey as well.",
      "Anything the property has said about car access, gates or codes.",
    ],
    note:
      "Accurate details let the operator quote the right vehicle instead of a " +
      "cautious one. A child seat or a particular vehicle is a request answered " +
      "in the quotation, not something this page can promise you in advance.",
  },

  process: {
    id: "process",
    eyebrow: "What happens next",
    heading: "How the quotation works",
    lead:
      "Four steps, and none of them asks for your card. This is an enquiry " +
      "service: the first reply is a price for your journey, not a confirmation.",
    steps: [
      {
        title: "You send the request",
        body:
          "The quotation form takes the journey, the date and the passenger details. The more of the checklist above it carries, the fewer questions come back to you.",
      },
      {
        title: "It goes to a licensed local operator",
        body:
          "We are not the operator. The journey is arranged with an independent licensed company that serves Treviso.",
      },
      {
        title: "A written quotation comes back",
        body:
          "For your journey, your vehicle and your luggage. This is the moment to ask about everything this page has deliberately left open — the meeting point, the access arrangement, a child seat.",
      },
      {
        title: "You confirm, or you do not",
        body:
          "Nothing is booked until you accept the quotation. We publish no instant confirmation, fixed price or guaranteed availability, because none of those would be true.",
      },
    ],
    note:
      "If anything in the reply does not match what you asked for, say so before " +
      "confirming. A quotation is easy to correct; an arrival is not.",
  },

  onward: {
    id: "onward",
    eyebrow: "Related",
    heading: "The airports, and the cities around Treviso",
    lead: "Pages that exist today, each written for its own purpose.",
    items: [
      {
        id: "treviso-airport",
        page: "treviso-airport",
        label: "Treviso Airport (TSF)",
        detail: "The airport that carries the city's name, and what its distance from Venice changes.",
      },
      {
        id: "venice-marco-polo",
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "The airport most long-haul arrivals use, with its land side and water side set out separately.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfers in Venice",
        detail: "Half an hour away and the opposite problem: a city a road transfer cannot finish in.",
      },
      {
        id: "padua",
        page: "padua",
        label: "Transfers in Padua",
        detail: "The other Veneto city with a restricted centre, and four separate permissions of its own.",
      },
      {
        id: "route-tsf-venice",
        page: "route-tsf-venice",
        label: "Treviso Airport to Venice",
        detail: "If Venice, not Treviso, is where you are actually heading from the airport.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfers in Verona",
        detail: "The far end of the region, if Treviso is one stop on a longer itinerary.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about transfers in Treviso",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can I book a private transfer to Treviso city?",
        answer:
          "Yes. Partner drivers provide private transfers to and from Treviso " +
          "city, and the journey is quoted individually once we have the details. " +
          "Send where you are starting, the full Treviso address, the date and " +
          "the passenger and luggage numbers, and a licensed local operator " +
          "returns a written quotation.",
      },
      {
        question: "Do you provide transfers from Treviso Airport to the city?",
        answer:
          "Yes, and it is one of the shortest journeys we arrange — which is why " +
          "the destination address matters more than the origin on this one. Send " +
          "the flight number, the date and the scheduled arrival time with the " +
          "full address, and say whether the address is inside the walls.",
      },
      {
        question: "Can I travel from Venice Marco Polo Airport to Treviso?",
        answer:
          "Yes, and it is a more ordinary journey than it sounds: a road transfer " +
          "from VCE to Treviso ends at the address, unlike a transfer from VCE " +
          "into Venice, where the road stops at the edge of the historic centre. " +
          "Name Treviso explicitly in the request — saying only “Venice airport” " +
          "tells us where you land, not where you are going.",
      },
      {
        question: "Can I arrange a pickup at Treviso railway station?",
        answer:
          "Yes — send the train's arrival time, the date and a mobile number. " +
          "What we will not do is promise you a particular spot on the station " +
          "forecourt. Station approaches commonly include lanes reserved for " +
          "buses and taxis, which are governed separately from the traffic zone " +
          "around them, so the meeting point is agreed with the operator.",
      },
      {
        question: "Can a private-transfer vehicle enter Treviso's restricted centre?",
        answer:
          "Yes — transfers to addresses inside the restricted centre can be " +
          "arranged, and where the journey needs a pass the operation can obtain " +
          "one. What is settled per booking rather than in advance is which " +
          "arrangement your address needs, which vehicle is sent and where it can " +
          "stop. Send the full address with your request and the operator confirms " +
          "those in writing before you travel.",
      },
      {
        question: "Do taxis and hire cars need a permit for Treviso's zone?",
        answer:
          "The Comune runs a permit system for its limited-traffic zone, applied " +
          "for through the Polizia Locale, and where your transfer needs a pass the " +
          "operation can arrange it. We do not publish the current category table " +
          "here, because the Comune sets and revises it and its own published " +
          "version is the one that counts. Ask the operator what applies to your " +
          "journey and to confirm it in writing.",
      },
      {
        question: "Can the vehicle reach my hotel entrance?",
        answer:
          "Often yes, and we will not promise it before seeing the address. " +
          "Permission to drive along a street is not the same as being able to " +
          "stop on it while luggage comes out, and inside the walls some lanes " +
          "take no vehicle at all. Send the full address and the operator will " +
          "tell you where the journey can realistically end.",
      },
      {
        question: "What if my hotel is inside a restricted area?",
        answer:
          "Say so when you ask — it is the detail that shapes the arrangement, " +
          "not an obstacle to it. Transfers into restricted areas can be arranged, " +
          "with a pass where one is needed. It is still worth asking reception " +
          "whether a car can reach the entrance and whether there is anywhere to " +
          "stop, because a permission to drive a street is not a place to halt on " +
          "it. One thing we will not do is lean on a guest permit: a permit " +
          "arranged for your own car is not cover for a hired vehicle.",
      },
      {
        question: "Can I arrange the return journey to the airport?",
        answer:
          "Yes, and asking for it in the same message as the arrival is easier " +
          "than treating it as a second booking. Send the departure date, the " +
          "flight or train details and the full pickup address. The pickup time is " +
          "agreed with the operator for your specific departure — we publish no " +
          "recommended margin, because the honest one depends on your airport, " +
          "your hour and where in the city you start.",
      },
      {
        question: "What information should I provide for a quotation?",
        answer:
          "Where you start, the full destination address, the date and time or " +
          "the flight or train details, the passenger count with children's ages, " +
          "the luggage counted by type, any child seat or special requirement, a " +
          "mobile number, and whether you need the return. Accurate details let " +
          "the operator quote the right vehicle rather than a cautious one.",
      },
      {
        question: "Can I travel with several suitcases, or ask for a child seat?",
        answer:
          "Count the cases and the cabin bags separately in your request, and ask " +
          "for the seat with the child's age. Both are requests rather than " +
          "confirmations: the vehicle that suits the load, and whether a seat is " +
          "available for your journey, are settled in the quotation instead of " +
          "assumed here.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the address, and where you are coming from",
    body:
      "Those two lines turn a Treviso enquiry into a quotation for a real " +
      "journey. Add the date, the flight or train, the passengers and the " +
      "luggage, and say whether you need the return as well. The reply comes " +
      "back in writing before anything is confirmed.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Treviso Airport (TSF)", page: "treviso-airport" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles, employ drivers directly, publish " +
      "prices, or offer access to any restricted street.",
  },
};

const it: TrevisoCity = {
  meta: {
    title: "Transfer privati a Treviso – città, aeroporti, stazione",
    description:
      "Transfer privati da e per Treviso città: dai due aeroporti, dalla " +
      "stazione o dal vostro albergo. Inviate l'indirizzo e preventiviamo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Treviso",
    h1: "Transfer privati a Treviso",
    lead:
      "Chi ha bisogno di un'auto a Treviso, di solito, non è in giro per " +
      "turismo. Ha una riunione alle nove, o un albergo dentro le mura e due " +
      "valigie, o un treno che l'ha appena lasciato sul piazzale di una stazione " +
      "in una città in cui non ha mai guidato. Questa pagina serve a organizzare " +
      "quel viaggio, in entrambe le direzioni.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Aeroporto di Treviso (TSF)",
    facts: [
      { label: "Arrivi coperti", value: "I due aeroporti, la stazione, qualsiasi indirizzo" },
      { label: "Centro", value: "A traffico limitato: decide l'indirizzo" },
      { label: "Ritorni", value: "Preventivati nella stessa richiesta" },
    ],
  },

  arriving: {
    id: "arriving",
    eyebrow: "Da qualunque parte arriviate",
    heading: "Quattro modi di arrivare a Treviso, e che cosa serve per ciascuno",
    lead:
      "La città si raggiunge da due aeroporti diversi, da una stazione di linea " +
      "e dal resto del Veneto. Tra loro non cambia la destinazione, ma il " +
      "dettaglio che ci serve per organizzare l'arrivo.",
    items: [
      {
        id: "tsf",
        name: "Aeroporto di Treviso (TSF)",
        page: "treviso-airport",
        linkText: "L'aeroporto di Treviso per esteso",
        detail:
          "L'aeroporto che porta il nome della città, e quello su cui atterra la maggior parte di chi è diretto a Treviso. Per un transfer verso il centro è la tratta breve del viaggio: proprio per questo l'indirizzo di destinazione conta più del punto di partenza.",
        needs:
          "Numero del volo, data e orario previsto di arrivo, più l'indirizzo completo a Treviso.",
      },
      {
        id: "vce",
        name: "Venezia Marco Polo (VCE)",
        page: "venice-marco-polo",
        linkText: "Venezia Marco Polo per esteso",
        detail:
          "Moltissimi arrivi verso Treviso passano dall'aeroporto principale di Venezia e non da quello trevigiano, perché lì atterrano i voli di linea e intercontinentali. Un transfer da VCE a Treviso è un normale viaggio su strada con una fine normale, a differenza di un transfer da VCE verso Venezia, dove la strada si ferma al limite della città.",
        needs:
          "Gli stessi dati del volo e l'indirizzo a Treviso. Dite esplicitamente Treviso: una richiesta che indica solo «aeroporto di Venezia» dice dove atterrate, non dove andate.",
      },
      {
        id: "station",
        name: "Stazione ferroviaria di Treviso",
        detail:
          "Treviso Centrale si trova appena a sud del centro storico e serve treni regionali e intercity. Arrivare in treno significa avere già i bagagli in mano e un ultimo tratto breve e scomodo: il caso classico in cui conviene organizzare l'auto prima invece di cercarla all'arrivo.",
        needs:
          "L'orario di arrivo del treno e la data, più un numero di cellulare. Il punto d'incontro si concorda con l'operatore: su un piazzale di stazione non promettiamo uno spazio senza averlo verificato.",
      },
      {
        id: "veneto",
        name: "Altrove in Veneto",
        page: "padua",
        linkText: "Transfer a Padova",
        detail:
          "Treviso è a normale distanza stradale da Venezia, Padova e dal resto della regione: spesso un transfer qui è una tappa di un itinerario più ampio e non un trasferimento aeroportuale. Quei viaggi si organizzano allo stesso modo, con i due indirizzi invece del volo.",
        needs:
          "I due indirizzi completi, data e ora, e se volete anche il ritorno.",
      },
    ],
    note:
      "L'aeroporto e la città sono due destinazioni diverse, e una richiesta che " +
      "dice soltanto «Treviso» è davvero ambigua. Se intendete il terminal, " +
      "scrivete il terminal; se intendete un indirizzo in città, inviate " +
      "l'indirizzo.",
  },

  address: {
    id: "address",
    eyebrow: "Dove alloggiate",
    heading: "Perché l'indirizzo esatto decide più del nome della città",
    lead:
      "Treviso è una città cinta da mura con un centro a traffico limitato e " +
      "molta ricettività al di fuori. Sono due arrivi molto diversi, ed è la via a " +
      "distinguerli.",
    groups: [
      {
        id: "centre",
        heading: "Dentro le mura",
        subheading: "Dove entrano in gioco le regole d'accesso",
        items: [
          {
            term: "Alberghi nel centro storico",
            detail:
              "Si raggiungono per strade strette, in parte soggette a limitazioni e in alcuni punti chiuse al traffico. Il viaggio si organizza; dove finisce lo stabilisce l'operatore quando ha l'indirizzo.",
          },
          {
            term: "Fate una domanda alla reception",
            detail:
              "«Un'auto può arrivare al vostro ingresso, e c'è dove fermarsi?» Rispondono ai clienti ogni settimana, e la loro risposta vale più di qualsiasi regola generale che potremmo stampare.",
          },
          {
            term: "Appartamenti e affittacamere",
            detail:
              "Spesso in un vicolo, senza reception e senza nessuno ad accogliervi. Inviate l'indirizzo completo, il numero civico e un cellulare, e dite se c'è un cancello o un codice.",
          },
        ],
      },
      {
        id: "outside",
        heading: "Fuori dal centro",
        subheading: "Un arrivo italiano ordinario",
        items: [
          {
            term: "Alberghi business e le circonvallazioni",
            detail:
              "Buona parte della ricettività d'affari di Treviso è fuori dalle mura, con piazzale o parcheggio propri. Questi arrivi non hanno alcuna questione d'accesso: l'auto arriva alla porta.",
          },
          {
            term: "Indirizzi aziendali",
            detail:
              "Una zona industriale o un parco uffici in genere non pone problemi, ma l'ingresso può essere lontano dall'indirizzo postale. Se avete il nome di un varco o il numero di un edificio, inviatelo.",
          },
          {
            term: "Case vacanza e campagna",
            detail:
              "Gli agriturismi e le ville attorno a Treviso si raggiungono su strade secondarie, dove il segnaposto della conferma non è sempre il vialetto d'ingresso. La nota d'arrivo della struttura è la cosa più utile che potete inoltrarci.",
          },
        ],
      },
    ],
    note:
      "Non pubblichiamo un elenco delle vie di Treviso percorribili in auto, e " +
      "non ci fideremmo di un elenco simile nemmeno se lo avessimo. L'indirizzo " +
      "va all'operatore, che risponde per il vostro viaggio.",
  },

  access: {
    id: "access",
    eyebrow: "La parte che i concorrenti saltano",
    heading: "Sette cose diverse che si intendono con «l'auto ci arriva?»",
    lead:
      "Il centro di Treviso è una zona a traffico limitato e il Comune ne " +
      "amministra gli accessi tramite la polizia locale. I viaggiatori tendono a " +
      "considerarlo tutto un'unica domanda. Sono sette, e avere una risposta non " +
      "dice nulla sulla successiva.",
    layers: [
      {
        id: "coverage",
        name: "La nostra copertura di servizio",
        isIt:
          "Confermata: gli autisti partner effettuano transfer privati da e per Treviso città, anche verso indirizzi dentro il centro a traffico limitato, e dove il viaggio richiede un contrassegno l'organizzazione è in grado di ottenerlo.",
        isNot:
          "Non è un permesso generalizzato per ogni via. L'accordo si predispone per il vostro viaggio, sul vostro indirizzo e sul veicolo: per questo qui l'indirizzo conta più del nome della città.",
      },
      {
        id: "eligibility",
        name: "Se la categoria del veicolo sia ammessa",
        isIt:
          "È una questione di categorie: quali tipi di veicolo le regole del Comune ammettano nella zona.",
        isNot:
          "Non è un permesso legato alla vostra prenotazione. Che una categoria sia elencata non fa passare una determinata auto da un determinato varco in una determinata sera.",
      },
      {
        id: "permit",
        name: "Avere un titolo",
        isIt:
          "Il Comune rilascia contrassegni per la propria zona a traffico limitato tramite la Polizia Locale, e dove il vostro viaggio ne richiede uno l'organizzazione può ottenerlo. È la parte che i viaggiatori danno per impossibile, e non lo è.",
        isNot:
          "Non è automatico, e non è qualcosa che un veicolo porti con sé solo perché appartiene a una categoria ammessa. Si predispone per un viaggio: ecco perché alla prenotazione serve il vostro indirizzo e non solo la città.",
      },
      {
        id: "plate",
        name: "Avere la targa giusta registrata",
        isIt:
          "Le zone controllate da telecamere lavorano sulle targhe: un titolo è efficace solo per la targa che vi è associata.",
        isNot:
          "Non è automatico quando viene inviato un veicolo sostitutivo. Se l'operatore cambia l'auto, la registrazione spetta a lui, ed è una cosa legittima da chiedergli.",
      },
      {
        id: "guest",
        name: "Un permesso ospiti del vostro albergo",
        isIt:
          "Le strutture dentro le aree limitate spesso riescono a predisporre l'accesso per i propri ospiti. Vale la pena chiederlo all'albergo per la vostra auto.",
        isNot:
          "Non copre un veicolo a noleggio, ed è la cosa che si sbaglia più spesso. Un permesso predisposto per un ospite non è un'autorizzazione su cui possiamo contare per un transfer, e nessuno dovrebbe dirvi il contrario.",
      },
      {
        id: "pedestrian",
        name: "Una via pedonale o una corsia riservata",
        isIt:
          "Un regime ancora diverso. Aree pedonali e corsie per bus o taxi sono disciplinate da regole proprie, non dalla zona a traffico limitato che le circonda.",
        isNot:
          "Non è compreso in nulla di quanto precede. È la distinzione che cogli di sorpresa alla stazione e nelle piazze.",
      },
      {
        id: "stopping",
        name: "Un punto in cui l'auto possa davvero fermarsi",
        isIt:
          "L'unica cosa che decide il vostro arrivo: un luogo in cui un veicolo possa sostare il tempo che serve a far scendere persone e valigie.",
        isNot:
          "Non la stabilisce alcun permesso. Poter percorrere una via non significa potervi sostare.",
      },
    ],
    caution: {
      heading: "Che cosa si conferma per la vostra prenotazione",
      body:
        "Tre cose, e si definiscono per ciascun viaggio e non in generale: " +
        "quale accordo richieda la vostra destinazione, quale veicolo arrivi e " +
        "per che cosa sia autorizzato, e il punto in cui possa effettivamente " +
        "fermarsi. Le regole le stabilisce e le aggiorna il Comune, che pubblica " +
        "quelle in vigore: qui non riportiamo quindi elenchi di varchi né " +
        "categorie di contrassegno. Inviate l'indirizzo completo con la " +
        "richiesta e l'operatore vi confermerà per iscritto accesso e discesa " +
        "prima della partenza.",
    },
    note:
      "Se la vostra destinazione è fuori dalle mura, nulla di tutto questo " +
      "riguarda il vostro viaggio e l'auto arriva all'indirizzo. Conviene sapere " +
      "in quale delle due situazioni siete prima di partire, e l'indirizzo lo " +
      "dice.",
  },

  ret: {
    id: "return",
    eyebrow: "Il ritorno",
    heading: "Partire da Treviso: la metà che si organizza troppo tardi",
    lead:
      "Il ritorno è una prenotazione a parte con la pressione opposta. " +
      "All'arrivo il volo è atterrato e la giornata è vostra. Alla partenza " +
      "qualcosa parte, che l'auto vi abbia trovato o no.",
    paragraphs: [
      "Si pianifica quindi all'indietro, dall'orario di partenza, e l'ora del prelievo si concorda con l'operatore invece di prenderla da una tabella in questa pagina. Non pubblichiamo né un margine consigliato né una durata, perché la cifra onesta dipende da quale aeroporto partite, dall'ora, dal giorno e da dove in città cominciate: un margine inventato qui è il numero che si rimpiangerebbe di più di aver creduto.",
      "L'altra metà è dove l'auto possa raggiungervi la mattina della partenza. Un albergo business con il proprio piazzale non pone problemi. Un affittacamere in un vicolo dentro le mura è la stessa questione d'accesso dell'arrivo, e si risolve allo stesso modo: molto più facilmente una settimana prima che alle sei del mattino con le valigie nell'ingresso.",
      "Se partite da un indirizzo aziendale o da una riunione invece che da un albergo, ditelo. Un parco uffici a fine giornata lavorativa è un prelievo diverso da un hotel all'alba, e l'operatore preferisce saperlo prima.",
    ],
    items: [
      "La data di partenza e verso quale aeroporto o stazione andate.",
      "Il numero del volo o del treno e l'orario previsto di partenza.",
      "L'indirizzo completo di prelievo a Treviso e un numero di cellulare.",
      "Quanto la struttura vi ha detto su dove un'auto possa attendere.",
      "Quanti passeggeri e quanti bagagli, contati per tipo.",
      "Se è il ritorno di un arrivo che vi abbiamo già preventivato.",
    ],
    cta: "Richiedi un preventivo per il ritorno",
    note:
      "Chiedete il ritorno nello stesso messaggio dell'andata e resta una " +
      "conversazione sola con un operatore solo. Concordate con lui l'ora del " +
      "prelievo per la vostra partenza.",
  },

  alternatives: {
    id: "alternatives",
    eyebrow: "Un confronto onesto",
    heading: "Quando il transfer privato è la scelta giusta e quando no",
    lead:
      "Treviso è una città piccola con un trasporto pubblico che funziona. Un " +
      "transfer privato non è automaticamente la risposta migliore, e non " +
      "faremo finta che lo sia.",
    columns: [
      {
        id: "private",
        heading: "Il transfer vale il suo costo quando",
        body:
          "Bagagli, gruppo, ora o indirizzo trasformano una coincidenza da più lenta a davvero scomoda.",
        points: [
          "Avete valigie vere, e ogni cambio di mezzo significa portarle a mano.",
          "Siete una famiglia con bambini piccoli, o un gruppo che viaggia insieme.",
          "La struttura è lontana dalla stazione o fuori dalle mura.",
          "Arrivate tardi, o avete un orario che non si può spostare.",
          "Andate a una riunione e preferireste non arrivarci improvvisando.",
        ],
      },
      {
        id: "other",
        heading: "Un'altra soluzione può convenire quando",
        body:
          "Viaggiate leggeri e la rete pubblica passa proprio dove andate.",
        points: [
          "Siete in due con il bagaglio a mano e un pomeriggio flessibile.",
          "Alloggiate vicino alla stazione, dove l'ultimo tratto è una breve camminata.",
          "Il costo vi importa più della comodità porta a porta.",
          "I programmi sono ancora in movimento e un biglietto flessibile batte un'auto prenotata.",
        ],
      },
    ],
    note:
      "Qui non pubblichiamo orari, tariffe o frequenze di alcun servizio di bus " +
      "o treno, né affermiamo che un transfer sia più rapido o più economico. " +
      "Quei dati cambiano, li pubblicano gli operatori, e una cifra scaduta su " +
      "questa pagina non aiuterebbe nessuno.",
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa avere pronto prima di scrivere",
    lead:
      "Inviate queste cose in un unico messaggio e la risposta potrà essere un " +
      "preventivo invece di un elenco di domande.",
    items: [
      "Da dove partite: un terminal, la stazione o un indirizzo completo.",
      "L'indirizzo completo di destinazione a Treviso, con numero civico o dell'edificio.",
      "La data e l'ora del prelievo, oppure i dati del volo o del treno.",
      "Quanti passeggeri, adulti e bambini separatamente, con le età dei bambini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Seggiolini o altre esigenze, indicati come richiesta da confermare.",
      "Un numero di cellulare raggiungibile il giorno del viaggio.",
      "Se vi serve anche il viaggio di ritorno.",
      "Quanto la struttura vi ha detto su accesso in auto, cancelli o codici.",
    ],
    note:
      "Dettagli precisi permettono all'operatore di preventivare il veicolo " +
      "giusto invece di uno prudenziale. Un seggiolino o un veicolo particolare " +
      "è una richiesta a cui risponde il preventivo, non qualcosa che questa " +
      "pagina possa promettervi in anticipo.",
  },

  process: {
    id: "process",
    eyebrow: "Che cosa succede dopo",
    heading: "Come funziona il preventivo",
    lead:
      "Quattro passaggi, e in nessuno vi chiediamo la carta. Questo è un " +
      "servizio di richiesta: la prima risposta è un prezzo per il vostro " +
      "viaggio, non una conferma.",
    steps: [
      {
        title: "Inviate la richiesta",
        body:
          "Il modulo raccoglie il viaggio, la data e i dati dei passeggeri. Più cose della lista qui sopra contiene, meno domande vi torneranno indietro.",
      },
      {
        title: "Va a un operatore locale autorizzato",
        body:
          "Non siamo noi l'operatore. Il viaggio viene organizzato con un'azienda indipendente e autorizzata che serve Treviso.",
      },
      {
        title: "Torna un preventivo scritto",
        body:
          "Per il vostro viaggio, il vostro veicolo e i vostri bagagli. È il momento di chiedere tutto ciò che questa pagina lascia volutamente aperto: il punto d'incontro, l'accesso, un seggiolino.",
      },
      {
        title: "Confermate, oppure no",
        body:
          "Nulla è prenotato finché non accettate il preventivo. Non pubblichiamo conferme immediate, prezzi fissi né disponibilità garantite, perché non sarebbe vero.",
      },
    ],
    note:
      "Se qualcosa nella risposta non corrisponde a ciò che avete chiesto, " +
      "segnalatelo prima di confermare. Un preventivo si corregge facilmente; un " +
      "arrivo no.",
  },

  onward: {
    id: "onward",
    eyebrow: "Collegate",
    heading: "Gli aeroporti e le città attorno a Treviso",
    lead: "Pagine che esistono oggi, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "treviso-airport",
        page: "treviso-airport",
        label: "Aeroporto di Treviso (TSF)",
        detail: "L'aeroporto che porta il nome della città, e cosa cambia la sua distanza da Venezia.",
      },
      {
        id: "venice-marco-polo",
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "L'aeroporto della maggior parte dei voli di linea, con il lato terra e il lato acqua distinti.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfer a Venezia",
        detail: "A mezz'ora di strada, e con il problema opposto: una città in cui un transfer su strada non può finire.",
      },
      {
        id: "padua",
        page: "padua",
        label: "Transfer a Padova",
        detail: "L'altra città veneta con il centro limitato, e con quattro permessi distinti propri.",
      },
      {
        id: "route-tsf-venice",
        page: "route-tsf-venice",
        label: "Dall'aeroporto di Treviso a Venezia",
        detail: "Se dall'aeroporto la destinazione è Venezia e non Treviso.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfer a Verona",
        detail: "L'altro capo della regione, se Treviso è una tappa di un itinerario più lungo.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sui transfer a Treviso",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Posso prenotare un transfer privato per Treviso città?",
        answer:
          "Sì. Gli autisti partner effettuano transfer privati da e per Treviso " +
          "città, e il viaggio viene preventivato singolarmente quando abbiamo i " +
          "dati. Inviate da dove partite, l'indirizzo completo a Treviso, la data " +
          "e il numero di passeggeri e bagagli: un operatore locale autorizzato " +
          "risponde con un preventivo scritto.",
      },
      {
        question: "Fate transfer dall'aeroporto di Treviso alla città?",
        answer:
          "Sì, ed è uno dei viaggi più brevi che organizziamo: per questo " +
          "l'indirizzo di destinazione conta più del punto di partenza. Inviate " +
          "numero del volo, data e orario previsto di arrivo con l'indirizzo " +
          "completo, e precisate se l'indirizzo è dentro le mura.",
      },
      {
        question: "Posso andare dall'aeroporto di Venezia Marco Polo a Treviso?",
        answer:
          "Sì, ed è un viaggio più ordinario di quanto sembri: un transfer su " +
          "strada da VCE a Treviso finisce all'indirizzo, a differenza di un " +
          "transfer da VCE verso Venezia, dove la strada si ferma al limite del " +
          "centro storico. Indicate Treviso esplicitamente: scrivere solo " +
          "«aeroporto di Venezia» dice dove atterrate, non dove andate.",
      },
      {
        question: "Posso organizzare un prelievo alla stazione di Treviso?",
        answer:
          "Sì: inviate l'orario di arrivo del treno, la data e un numero di " +
          "cellulare. Quello che non facciamo è promettervi un punto preciso sul " +
          "piazzale della stazione. Gli accessi alle stazioni comprendono spesso " +
          "corsie riservate a bus e taxi, disciplinate a parte rispetto alla zona " +
          "a traffico limitato circostante: il punto d'incontro si concorda con " +
          "l'operatore.",
      },
      {
        question: "Un veicolo per transfer privati può entrare nel centro limitato di Treviso?",
        answer:
          "Sì: i transfer verso indirizzi dentro il centro a traffico limitato si " +
          "possono organizzare e, dove il viaggio richiede un contrassegno, " +
          "l'organizzazione è in grado di ottenerlo. Quello che si definisce per " +
          "ciascuna prenotazione è quale accordo serva al vostro indirizzo, quale " +
          "veicolo venga inviato e dove possa fermarsi. Inviate l'indirizzo " +
          "completo e l'operatore ve lo confermerà per iscritto prima della " +
          "partenza.",
      },
      {
        question: "Taxi e NCC hanno bisogno di un titolo per la zona di Treviso?",
        answer:
          "Il Comune gestisce un sistema di contrassegni per la propria zona a " +
          "traffico limitato, da richiedere alla Polizia Locale, e dove il vostro " +
          "transfer ne richiede uno l'organizzazione può predisporlo. Qui non " +
          "riportiamo la tabella delle categorie in vigore, perché la stabilisce " +
          "e la aggiorna il Comune e fa fede la versione che pubblica lui. " +
          "Chiedete all'operatore che cosa valga per il vostro viaggio e fatevelo " +
          "confermare per iscritto.",
      },
      {
        question: "L'auto può arrivare all'ingresso del mio albergo?",
        answer:
          "Spesso sì, e non lo promettiamo prima di vedere l'indirizzo. Poter " +
          "percorrere una via non equivale a potervi sostare mentre scendono i " +
          "bagagli, e dentro le mura alcuni vicoli non ammettono alcun veicolo. " +
          "Inviate l'indirizzo completo e l'operatore vi dirà dove il viaggio può " +
          "realisticamente finire.",
      },
      {
        question: "E se il mio albergo è in un'area soggetta a limitazioni?",
        answer:
          "Ditelo quando scrivete: è il dettaglio che dà forma all'accordo, non un " +
          "ostacolo. I transfer verso le aree limitate si organizzano, con " +
          "contrassegno dove serve. Vale comunque la pena chiedere alla reception " +
          "se un'auto possa arrivare all'ingresso e se ci sia dove fermarsi, " +
          "perché poter percorrere una via non è avere dove sostarvi. Una cosa " +
          "non la faremo: contare su un permesso ospiti. Un permesso predisposto " +
          "per la vostra auto non copre un veicolo a noleggio.",
      },
      {
        question: "Posso organizzare il ritorno verso l'aeroporto?",
        answer:
          "Sì, e chiederlo nello stesso messaggio dell'andata è più semplice che " +
          "trattarlo come una seconda prenotazione. Inviate data di partenza, " +
          "dati del volo o del treno e indirizzo completo di prelievo. L'ora del " +
          "prelievo si concorda con l'operatore per la vostra partenza: non " +
          "pubblichiamo un margine consigliato, perché quello onesto dipende " +
          "dall'aeroporto, dall'ora e da dove in città partite.",
      },
      {
        question: "Quali informazioni devo fornire per il preventivo?",
        answer:
          "Da dove partite, l'indirizzo completo di destinazione, data e ora " +
          "oppure i dati del volo o del treno, il numero di passeggeri con le " +
          "età dei bambini, i bagagli contati per tipo, eventuali seggiolini o " +
          "esigenze particolari, un cellulare e se vi serve il ritorno. Dettagli " +
          "precisi permettono di preventivare il veicolo giusto invece di uno " +
          "prudenziale.",
      },
      {
        question: "Posso viaggiare con più valigie o chiedere un seggiolino?",
        answer:
          "Contate valigie e bagagli a mano separatamente nella richiesta, e " +
          "chiedete il seggiolino indicando l'età del bambino. Sono richieste e " +
          "non conferme: il veicolo adatto al carico e la disponibilità di un " +
          "seggiolino per il vostro viaggio si stabiliscono nel preventivo, non " +
          "si danno per scontati qui.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviate l'indirizzo, e da dove arrivate",
    body:
      "Quelle due righe trasformano una richiesta su Treviso in un preventivo " +
      "per un viaggio reale. Aggiungete la data, il volo o il treno, i " +
      "passeggeri e i bagagli, e dite se vi serve anche il ritorno. La risposta " +
      "torna per iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Treviso (TSF)", page: "treviso-airport" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e " +
      "preventivati singolarmente. Non possediamo veicoli, non impieghiamo " +
      "direttamente gli autisti, non pubblichiamo prezzi e non offriamo accesso " +
      "ad alcuna via soggetta a limitazioni.",
  },
};

export const trevisoCity: Record<"en" | "it", TrevisoCity> = { en, it };
