import type { PaduaHub } from "./types";

/**
 * Padua.
 *
 * ── The one idea this page is built on ───────────────────────────────────
 * In Padua "can a car take me there?" has four different answers, and they
 * are not the same answer at different strengths — they are four separate
 * permissions granted by different instruments. A hired car may enter the
 * ZTL. It may also enter the pedestrian areas inside the ZTL. It may NOT
 * enter five named streets. And it has no automatic right to the reserved
 * lanes, two of which are on the railway station forecourt.
 *
 * Every competitor page on this subject says "Padua has a ZTL but taxis are
 * exempt". That sentence is wrong twice over, and the ordinances say so.
 *
 * ── Sources, all read 25 November 2026 ───────────────────────────────────
 * Three ordinances of the Comune di Padova, downloaded and extracted with
 * pdftotext after two fetching agents returned them as raw binary:
 *
 *   437/2023  Ordinanza n. 2023/62/0437 del 23/05/2023 — the ZTL itself
 *   464/2023  Ordinanza n. 2023/62/0464 del 25/05/2023 — the pedestrian
 *             areas inside the ZTL
 *   38/2025   Ordinanza del Sindaco n. 38 del 30/09/2025 — the ecological
 *             Sundays
 *
 * 437/2023 is still the governing text: the Comune's own ZTL page, last
 * updated 6 February 2026, cites "Ordinanza n. 437 del 23/05/2023".
 *
 * ── The quotations that carry the page ───────────────────────────────────
 * 437/2023, admitted without any permit but with a registration duty:
 *
 *   f) taxi e autoveicoli da noleggio con conducente per operazioni di
 *      servizio purché di massa complessiva inferiore ai 3,5 t
 *
 *   ...senza rilascio di apposito titolo autorizzatorio ma con obbligo di
 *   registrazione del numero di targa in un'apposita "lista bianca ZTL",
 *   anche a posteriori entro le 48 (quarantotto) ore successive al transito
 *
 *   In caso di omessa registrazione del numero di targa i transiti vengono
 *   considerati abusivi.
 *
 * 464/2023, the pedestrian areas, with the five exclusions:
 *
 *   g) taxi e veicoli adibiti a noleggio con conducente purché di massa
 *      complessiva inferiore ai 3,5 t, ad eccezione di via Cavour, piazza
 *      Cavour, piazza Pedrocchi, via VIII Febbraio e piazzetta Garzeria
 *
 * 38/2025, the ecological Sundays, where a booked transfer is exempt:
 *
 *   3. l'esenzione dal divieto di cui al punto 1 delle seguenti categorie
 *      di veicoli a motore: ... b) autobus adibiti al servizio pubblico di
 *      linea e turistici, taxi ed autovetture in servizio di noleggio con
 *      conducente
 *
 * ── What is deliberately NOT here ────────────────────────────────────────
 * No promise that the operator will register the plate. The owner confirmed
 * service coverage; nobody has confirmed that drivers use Padua's lista
 * bianca. The rule is explained and the arrangement is sent to the operator.
 * `whitelist.caution` exists in the type for exactly this reason.
 *
 * No current ecological-Sunday dates. The series I read ran 5 October 2025
 * to 26 April 2026 and has passed; the Comune's page announcing the next one
 * is JavaScript-rendered and returned no readable text, so the page says the
 * scheme recurs and names no date. Same discipline as Sirmione.
 *
 * No UNESCO claim. whc.unesco.org returned 403 for both Padua inscriptions.
 * An inaccessible source is not evidence, so the Scrovegni Chapel and the
 * botanical garden are simply absent rather than described from memory.
 *
 * No province. "Comune di Padova" is how the ordinances head themselves, and
 * they place the city under Regione Veneto air-quality planning (P.R.T.R.A.,
 * D.G.R.V. 377/2025, Accordo di Bacino Padano). That is the sourced extent of
 * the administrative geography, and it is also why the restrictions exist —
 * which is better content than a province name would have been.
 *
 * Prato della Valle and the Basilica appear only where a source puts them:
 * Prato della Valle has a tram-lane camera gate and sits on a road axis that
 * stays open on ecological Sundays; the Basilica stands by the via del Santo
 * ZTL gate. Nothing is said about either building.
 *
 * ── No photograph ───────────────────────────────────────────────────────
 * The CC0 library holds 26 images and not one is Padua. The three Venice
 * photographs would be a geographic lie on this page. It has no hero image.
 */

const ztlEn = {
  text:
    "Padua's limited-traffic zone, its electronic gates and the entry rule for " +
    "taxis and hire cars with driver are set by the Comune di Padova in Ordinanza " +
    "n. 2023/62/0437 of 23 May 2023, which admits them without a permit but " +
    "requires the number plate to be registered in a “lista bianca ZTL”. The " +
    "Comune's ZTL page, last updated 6 February 2026, still cites that ordinance. " +
    "Read 25 November 2026:",
  linkText: "the Comune di Padova on its historic-centre ZTL",
  href: "https://www.comune.padova.it/zona-traffico-limitato-ztl-centro-storico",
};

const ztlIt = {
  text:
    "La zona a traffico limitato di Padova, i suoi varchi elettronici e la regola " +
    "d'ingresso per taxi e auto a noleggio con conducente sono stabiliti dal Comune " +
    "di Padova con l'Ordinanza n. 2023/62/0437 del 23 maggio 2023, che li ammette " +
    "senza titolo autorizzatorio ma impone la registrazione della targa in " +
    "un'apposita «lista bianca ZTL». La pagina ZTL del Comune, aggiornata al 6 " +
    "febbraio 2026, cita ancora quell'ordinanza. Consultato il 25 novembre 2026:",
  linkText: "il Comune di Padova sulla ZTL del centro storico",
  href: "https://www.comune.padova.it/zona-traffico-limitato-ztl-centro-storico",
};

const pedestrianEn = {
  text:
    "The pedestrian areas inside the ZTL are governed separately, by Ordinanza n. " +
    "2023/62/0464 of 25 May 2023, which admits taxis and hire cars with driver " +
    "under the same 3.5-tonne limit but excludes five named streets and squares. " +
    "Read 25 November 2026:",
  linkText: "the Comune's ordinance on the pedestrian areas",
  href: "https://www.comune.padova.it/sites/default/files/attachment/AreePedonali_0.pdf",
};

const pedestrianIt = {
  text:
    "Le aree pedonali interne alla ZTL sono disciplinate a parte, dall'Ordinanza n. " +
    "2023/62/0464 del 25 maggio 2023, che ammette taxi e auto a noleggio con " +
    "conducente con lo stesso limite di 3,5 t ma esclude cinque vie e piazze " +
    "indicate per nome. Consultato il 25 novembre 2026:",
  linkText: "l'ordinanza del Comune sulle aree pedonali",
  href: "https://www.comune.padova.it/sites/default/files/attachment/AreePedonali_0.pdf",
};

const sundaysEn = {
  text:
    "The car-free Sundays are instituted by the Mayor of Padua under Regione Veneto " +
    "air-quality planning. The series we read — Ordinanza del Sindaco n. 38 of 30 " +
    "September 2025 — banned combustion and hybrid vehicles from the centre between " +
    "8:30 and 18:30 on seven named Sundays and exempted taxis and hire cars with " +
    "driver by category. Those dates have passed; the scheme is reissued each " +
    "season. Read 25 November 2026:",
  linkText: "the Comune di Padova on its ecological Sundays",
  href: "https://www.comune.padova.it/novita/notizie/domenica-ecologica-del-4-ottobre-2026",
};

const sundaysIt = {
  text:
    "Le domeniche ecologiche sono istituite dal Sindaco di Padova nell'ambito della " +
    "pianificazione regionale veneta sulla qualità dell'aria. La serie che abbiamo " +
    "letto — Ordinanza del Sindaco n. 38 del 30 settembre 2025 — vietava la " +
    "circolazione dei veicoli endotermici e ibridi in centro dalle 8:30 alle 18:30 " +
    "in sette domeniche indicate, esentando per categoria taxi e auto a noleggio " +
    "con conducente. Quelle date sono passate; il provvedimento viene riproposto " +
    "ogni stagione. Consultato il 25 novembre 2026:",
  linkText: "il Comune di Padova sulle domeniche ecologiche",
  href: "https://www.comune.padova.it/novita/notizie/domenica-ecologica-del-4-ottobre-2026",
};

const en: PaduaHub = {
  meta: {
    title: "Padua Private Transfers – Four Kinds of Permission",
    description:
      "A hired car may enter Padua's restricted centre, and its pedestrian " +
      "squares, and not five named streets. What that means for your transfer.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Padua",
    h1: "Private transfers in Padua",
    lead:
      "Padua lets a booked car into places most Italian cities keep it out of — " +
      "and then stops it in five streets you have never heard of. “Is the centre " +
      "restricted?” is the wrong question here. There are four different " +
      "permissions, they come from three different ordinances, and only one of " +
      "them is about the car.",
    primaryCta: "Request a quotation",
    secondaryCta: "Venice to Padua",
    facts: [
      { label: "Centre", value: "Two zones, two clocks" },
      { label: "Hired cars", value: "Admitted, with the plate registered" },
      { label: "Vehicle limit", value: "Under 3.5 tonnes" },
    ],
  },

  permissions: {
    id: "permissions",
    eyebrow: "The thing nobody explains",
    heading: "Four permissions, and why they are not one permission",
    lead:
      "These are four separate things granted by separate instruments. Holding " +
      "the first says nothing about holding the fourth, and that is where almost " +
      "every confident answer about Padua goes wrong.",
    tiers: [
      {
        id: "ztl",
        rank: "One",
        name: "Entering the limited-traffic zone",
        grants:
          "Taxis and hire cars with driver are admitted to the historic-centre ZTL for service operations, with no permit issued, provided the vehicle is under 3.5 tonnes total mass.",
        withholds:
          "It does not come free of conditions: the plate must be in the ZTL white list. And it says nothing about the pedestrian areas inside the zone, which are a separate ordinance.",
      },
      {
        id: "pedestrian",
        rank: "Two",
        name: "Entering a pedestrian area inside the zone",
        grants:
          "A second ordinance admits the same vehicles, under the same 3.5-tonne limit, into the pedestrian areas within the ZTL — which is more than most Italian centres allow.",
        withholds:
          "Five streets and squares are excluded by name. There a hired car is in the same position as any other vehicle, whatever its ZTL standing.",
      },
      {
        id: "lanes",
        rank: "Three",
        name: "Using a reserved lane",
        grants:
          "Nothing automatically. Reserved lanes across the comune are a separate authorisation — the ordinance calls it Titolo Autorizzatorio Tipo 9 — and taxis and hire cars are not listed in that category by the ZTL ordinance.",
        withholds:
          "This matters at the railway station, where two of the camera gates watch reserved lanes on the forecourt. ZTL entitlement is not a lane entitlement.",
      },
      {
        id: "stopping",
        rank: "Four",
        name: "Actually stopping where you are standing",
        grants:
          "Nothing that any ordinance can give you. Being allowed to drive along a street is not being able to halt on it with a boot open and passengers getting out.",
        withholds:
          "This is the one that decides your arrival, and it is settled by the address and the operator rather than by the rules above.",
      },
    ],
    note:
      "We set these out because the distinction is practical, not pedantic. The " +
      "question worth asking before you travel is the fourth one, and it is the " +
      "only one no public document answers.",
    sources: [ztlEn, pedestrianEn],
  },

  whitelist: {
    id: "white-list",
    eyebrow: "The rule found nowhere else",
    heading: "No permit — but the number plate has to be on a list",
    lead:
      "Padua's answer to hired cars is unusual enough to be worth reading twice. " +
      "There is no permit to apply for. There is a list, and a deadline that runs " +
      "backwards.",
    rule: {
      quote:
        "senza rilascio di apposito titolo autorizzatorio ma con obbligo di " +
        "registrazione del numero di targa in un'apposita “lista bianca ZTL”, anche " +
        "a posteriori entro le 48 (quarantotto) ore successive al transito",
      gloss:
        "“without any authorisation being issued, but with an obligation to " +
        "register the number plate in a ZTL white list — including afterwards, " +
        "within the 48 hours following the transit”",
    },
    paragraphs: [
      "So the vehicle is not waved through on sight and it is not kept out either. It is admitted on condition that its plate is recorded, and Padua is unusually forgiving about when: the registration may be made after the car has already driven in, up to two days later. Almost no Italian city writes that down.",
      "Forgiveness has an edge, though. The same ordinance states that where the plate has not been registered, the transits are treated as unauthorised — and the zone is watched by electronic gates in both directions, so a transit that was never registered is a recorded one.",
      "There is also a ceiling that matters when you are counting luggage rather than reading regulations. The category covers vehicles under 3.5 tonnes total mass. A larger van or minibus does not qualify under it, so the size of the vehicle and the reach of the permission are the same question in Padua.",
    ],
    caution: {
      heading: "What we will not promise you",
      body:
        "That the plate will be registered. Our operators serve Padua, and that " +
        "is confirmed — but whether a given driver uses the Comune's white list is " +
        "an operational matter nobody has confirmed to us, and we are not going to " +
        "assume it on your behalf. Send the address, say it is inside the zone, and " +
        "have the operator confirm the access arrangement in writing before you " +
        "travel.",
    },
    source: ztlEn,
  },

  clocks: {
    id: "clocks",
    eyebrow: "When the restrictions apply",
    heading: "One centre, two clocks — and some Sundays of its own",
    lead:
      "The zone is split in two, and the two halves do not keep the same hours. " +
      "Which half your address sits in changes what time means.",
    caption:
      "The hours of Padua's two ZTL zones, as Ordinanza 2023/62/0437 states them",
    columns: ["Zone", "Weekdays", "Sundays and holidays"],
    rows: [
      {
        id: "zona-a",
        cells: [
          "Zona A",
          "8:00 – 23:30",
          "14:00 – 23:30 — a later start, so a holiday morning is not the same as a weekday one",
        ],
      },
      {
        id: "zona-b",
        cells: [
          "Zona B",
          "00:00 – 24:00",
          "00:00 – 24:00 — restricted around the clock, every day, with no quiet hour to aim for",
        ],
      },
    ],
    sundays: {
      heading: "And the car-free Sundays, where a transfer is the exception",
      body:
        "Padua also closes its centre to combustion and hybrid vehicles on " +
        "scheduled Sundays between 8:30 and 18:30, under the Mayor's ordinance and " +
        "Veneto regional air-quality planning. On those days the restriction is far " +
        "wider than the ZTL and catches ordinary private cars across a large " +
        "perimeter. Taxis and hire cars with driver are exempt by category — so a " +
        "booked transfer is one of the few road journeys that still works.",
      note:
        "We name no dates. The series we read ran from 5 October 2025 to 26 April " +
        "2026 and has passed, and the Comune sets the next one season by season. If " +
        "you are travelling on a winter or spring Sunday, it is worth checking the " +
        "Comune's current notice — a stale list would be worse than none.",
    },
    sources: [ztlEn, sundaysEn],
  },

  where: {
    id: "where",
    eyebrow: "Your address decides everything",
    heading: "Where you are staying, and what it changes",
    lead:
      "Three situations, and the only thing we need from you in order to tell " +
      "them apart is the full address.",
    groups: [
      {
        id: "centre",
        heading: "Inside the historic centre",
        subheading: "Where all four permissions are live at once",
        items: [
          {
            term: "The zone, and which half",
            detail:
              "Zona A keeps hours; Zona B is restricted continuously. Your hotel knows which it is on, and the answer changes how arrival timing is planned.",
          },
          {
            term: "The gates you would come through",
            detail:
              "The ordinance records six ZTL entry gates currently in service, in via Busonera, Largo Europa, via del Santo, at ponte San Gregorio Barbarigo, via Vescovado and riviera Mussato.",
          },
          {
            term: "By the Basilica",
            detail:
              "If you are staying near the Basilica of Saint Anthony, via del Santo is one of those six gates — the street itself is the controlled way in, and piazza del Santo lies inside the restricted area.",
          },
        ],
      },
      {
        id: "mainland",
        heading: "Outside the centre",
        subheading: "An ordinary Italian arrival",
        items: [
          {
            term: "The car comes to the address",
            detail:
              "Most of Padua is outside the restricted area, and a transfer there ends the way it would anywhere else in Italy: at the door, with the luggage.",
          },
          {
            term: "Prato della Valle",
            detail:
              "On the southern edge of the centre, and worth knowing for two documented reasons: it carries a camera gate on the tram lane, and it sits on a road axis the Comune keeps open as an exception on the car-free Sundays.",
          },
          {
            term: "What we still need",
            detail:
              "The full address, because the boundary is a line on a map and not a feeling about how central somewhere looks.",
          },
        ],
      },
      {
        id: "station",
        heading: "Arriving by train",
        subheading: "The clearest illustration of tier three",
        items: [
          {
            term: "There is no station page here, deliberately",
            detail:
              "Padua does not have Venice's problem of two confusably named stations, so the useful content is this section rather than a separate page competing with it.",
          },
          {
            term: "Camera gates on the forecourt",
            detail:
              "The ordinance records gates on piazzale della Stazione on both the south-east and north-west sides, watching reserved lanes rather than the ZTL.",
          },
          {
            term: "So where will the car be?",
            detail:
              "We will not invent an answer. Being permitted in the zone is not permission to use the forecourt's reserved lanes, and the meeting point is confirmed by the operator and nobody else.",
          },
        ],
      },
    ],
    forbidden: {
      heading: "The five places a hired car may not go",
      body:
        "The pedestrian-areas ordinance admits taxis and hire cars with driver, " +
        "then excludes these by name. In them a booked car has no standing the rest " +
        "of the zone gives it, so an address on one of them changes where your " +
        "journey can end:",
      streets: [
        "via Cavour",
        "piazza Cavour",
        "piazza Pedrocchi",
        "via VIII Febbraio",
        "piazzetta Garzeria",
      ],
    },
    source: pedestrianEn,
  },

  send: {
    id: "send",
    heading: "What to send for a Padua transfer",
    lead:
      "Six lines. The second one is the one that makes this city answerable.",
    items: [
      "The full address in Padua, with anything the property has told you about arriving by car.",
      "Whether it is inside the historic centre — and, if the hotel knows, which zone.",
      "Where you are starting: a Venice or Verona address, an airport terminal, or a station.",
      "The date and the time you would like to travel, and the day of the week.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
    ],
    note:
      "If your address is on one of the five excluded streets, say so. It is the " +
      "one detail that changes the end of the journey rather than the planning of " +
      "it.",
  },

  comparison: {
    id: "comparison",
    eyebrow: "Four cities, four regimes",
    heading: "Why “taxis are exempt” is never the answer",
    lead:
      "This site has now read the rules in four Italian cities, and no two of " +
      "them treat a hired car the same way. These are different legal " +
      "instruments, not one permission with local variations — and none of them " +
      "transfers to the next city.",
    items: [
      {
        id: "rome",
        city: "Rome",
        page: "rome",
        rule: "Taxis and hire cars with driver are exempt by category, and the exemption carried over from the previous rules rather than depending on what the vehicle runs on.",
      },
      {
        id: "verona",
        city: "Verona",
        page: "verona",
        rule: "A winter restriction by emissions class, with hire cars exempt on condition the driver carries a self-declaration — the permission travels in the glovebox.",
      },
      {
        id: "sirmione",
        city: "Sirmione",
        page: "route-verona-sirmione",
        rule: "Entry at any hour of any day, but only to carry residents, people living there or people staying there. The permission depends on who is in the car.",
      },
      {
        id: "padua",
        city: "Padua",
        page: null,
        rule: "No permit at all, but the plate must be on the white list — and uniquely, it may be put there up to 48 hours after the journey. The permission depends on paperwork that can follow the car.",
      },
    ],
    note:
      "Each of those pages carries its own source. We have put them side by side " +
      "once, here, because a reader planning more than one Italian city is the " +
      "person most likely to assume the first answer applies to the second.",
  },

  onward: {
    id: "onward",
    eyebrow: "Related",
    heading: "Getting to Padua, and the region around it",
    lead: "Pages that exist today, each written for its own purpose.",
    items: [
      {
        id: "route-venice-padua",
        page: "route-venice-padua",
        label: "Venice to Padua",
        detail:
          "The journey between them, in both directions, and the two very different reasons a car stops short at each end.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfers in Venice",
        detail:
          "The city where a road transfer cannot reach the address at all — the opposite problem to this one.",
      },
      {
        id: "venice-marco-polo",
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "The airport most travellers arrive at for Padua.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfers in Verona",
        detail: "The other end of the Veneto, with a restriction of a third kind.",
      },
      {
        id: "lake-garda",
        page: "lake-garda",
        label: "Lake Garda transfers",
        detail: "If Padua is one stop on a wider Veneto itinerary.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about transfers in Padua",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can a private transfer enter Padua's limited-traffic zone?",
        answer:
          "Yes. The Comune admits taxis and hire cars with driver to the " +
          "historic-centre ZTL for service operations, with no permit issued, " +
          "provided the vehicle is under 3.5 tonnes total mass. The condition is " +
          "not a permit but a registration: the number plate must be recorded in " +
          "the ZTL white list.",
      },
      {
        question: "Do NCC vehicles need a ZTL permit in Padua?",
        answer:
          "No permit is issued for them at all — that is what makes Padua " +
          "different. What is required instead is that the plate appears in the " +
          "Comune's “lista bianca ZTL”, and the ordinance allows that to be done " +
          "retrospectively, within the 48 hours after the transit. Where the plate " +
          "was never registered, the ordinance says the transits are treated as " +
          "unauthorised.",
      },
      {
        question: "What are the ZTL hours in Padua?",
        answer:
          "They depend which of the two zones you mean. Zona A runs 8:00 to 23:30 " +
          "on weekdays and 14:00 to 23:30 on Sundays and holidays. Zona B is " +
          "restricted 00:00 to 24:00, weekdays and holidays alike. A 30 km/h limit " +
          "applies across both.",
      },
      {
        question: "Will the car reach my hotel door in the centre?",
        answer:
          "We will not promise that, and no ordinance can. Permission to drive " +
          "along a street is not the ability to stop on it while luggage comes out. " +
          "Send the full address and the operator will tell you where the journey " +
          "can realistically end before you travel rather than on the day.",
      },
      {
        question: "Are there streets in Padua a private transfer cannot use?",
        answer:
          "Yes, five of them, named in the pedestrian-areas ordinance: via " +
          "Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio and " +
          "piazzetta Garzeria. Taxis and hire cars are otherwise admitted to the " +
          "pedestrian areas inside the ZTL, which makes these exclusions easy to " +
          "miss and worth stating.",
      },
      {
        question: "Can you collect us from Padova railway station?",
        answer:
          "Ask, and send your train details. What we will not do is promise a spot " +
          "on the station forecourt: the ordinance records camera gates there " +
          "watching reserved lanes, and being entitled to enter the ZTL is not " +
          "being entitled to use a reserved lane. The meeting point is the " +
          "operator's to confirm.",
      },
      {
        question: "What happens on Padua's car-free Sundays?",
        answer:
          "On scheduled Sundays the city bans combustion and hybrid vehicles from " +
          "the centre between 8:30 and 18:30, over a perimeter much wider than the " +
          "ZTL. Taxis and hire cars with driver are exempt by category, so a booked " +
          "transfer still runs when a private car would not. The dates are set each " +
          "season, so check the Comune's current notice.",
      },
      {
        question: "Does the 3.5-tonne limit affect a large group?",
        answer:
          "It can, and it is worth raising early. The category that admits taxis " +
          "and hire cars covers vehicles under 3.5 tonnes total mass, so a larger " +
          "minibus is not covered by it. Tell us the group size and the luggage and " +
          "the operator can advise on what that means for reaching a central " +
          "address.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the address, and say if it is in the centre",
    body:
      "Those two lines decide which of the four permissions your journey actually " +
      "needs, and they are the difference between a quotation and a guess. The " +
      "reply comes back in writing before anything is confirmed.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Venice to Padua", page: "route-venice-padua" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles or employ drivers directly, and " +
      "nothing here is an offer of access to a restricted street.",
  },
};

const it: PaduaHub = {
  meta: {
    title: "Trasferimenti privati a Padova – I quattro permessi",
    description:
      "Un'auto a noleggio può entrare nel centro di Padova, e nelle sue piazze " +
      "pedonali, ma non in cinque vie. Che cosa comporta per il transfer.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Padova",
    h1: "Trasferimenti privati a Padova",
    lead:
      "Padova fa entrare un'auto prenotata dove quasi tutte le città italiane la " +
      "tengono fuori, e poi la ferma in cinque vie di cui nessuno vi ha mai " +
      "parlato. «Il centro è chiuso?» qui è la domanda sbagliata: i permessi sono " +
      "quattro, vengono da tre ordinanze diverse e uno solo riguarda l'auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Da Venezia a Padova",
    facts: [
      { label: "Centro", value: "Due zone, due orari" },
      { label: "Auto a noleggio", value: "Ammesse, con la targa registrata" },
      { label: "Limite del veicolo", value: "Sotto le 3,5 tonnellate" },
    ],
  },

  permissions: {
    id: "permissions",
    eyebrow: "Ciò che nessuno spiega",
    heading: "Quattro permessi, e perché non sono un permesso solo",
    lead:
      "Sono quattro cose distinte, concesse da strumenti distinti. Avere il primo " +
      "non dice nulla sul quarto, ed è esattamente lì che sbaglia quasi ogni " +
      "risposta sicura su Padova.",
    tiers: [
      {
        id: "ztl",
        rank: "Uno",
        name: "Entrare nella zona a traffico limitato",
        grants:
          "Taxi e auto a noleggio con conducente sono ammessi nella ZTL del centro storico per operazioni di servizio, senza rilascio di alcun titolo autorizzatorio, purché il veicolo sia di massa complessiva inferiore alle 3,5 t.",
        withholds:
          "Non è però privo di condizioni: la targa deve essere nella lista bianca ZTL. E non dice nulla sulle aree pedonali interne alla zona, che sono un'altra ordinanza.",
      },
      {
        id: "pedestrian",
        rank: "Due",
        name: "Entrare in un'area pedonale dentro la zona",
        grants:
          "Una seconda ordinanza ammette gli stessi veicoli, con lo stesso limite di 3,5 t, nelle aree pedonali interne alla ZTL: più di quanto conceda la maggior parte dei centri storici italiani.",
        withholds:
          "Cinque vie e piazze sono escluse per nome. Lì un'auto a noleggio si trova nella stessa posizione di qualsiasi altro veicolo, indipendentemente dalla sua posizione in ZTL.",
      },
      {
        id: "lanes",
        rank: "Tre",
        name: "Percorrere una corsia riservata",
        grants:
          "Nulla in automatico. Le corsie riservate del territorio comunale richiedono un'autorizzazione a parte — l'ordinanza la chiama Titolo Autorizzatorio Tipo 9 — e l'ordinanza ZTL non elenca taxi e NCC in quella categoria.",
        withholds:
          "Conta alla stazione, dove due dei varchi controllano corsie riservate sul piazzale. Essere ammessi in ZTL non è essere ammessi in corsia.",
      },
      {
        id: "stopping",
        rank: "Quattro",
        name: "Fermarsi davvero dove siete voi",
        grants:
          "Nulla che un'ordinanza possa concedere. Poter percorrere una via non significa potersi fermare con il baule aperto e i passeggeri che scendono.",
        withholds:
          "È il permesso che decide il vostro arrivo, e lo stabiliscono l'indirizzo e l'operatore, non le regole qui sopra.",
      },
    ],
    note:
      "Lo spieghiamo perché la distinzione è pratica e non pedante. La domanda che " +
      "conviene porsi prima di partire è la quarta, ed è la sola a cui nessun " +
      "documento pubblico risponda.",
    sources: [ztlIt, pedestrianIt],
  },

  whitelist: {
    id: "white-list",
    eyebrow: "La regola che non si trova altrove",
    heading: "Nessun titolo — ma la targa deve stare in un elenco",
    lead:
      "La risposta di Padova alle auto a noleggio è abbastanza insolita da " +
      "meritare una seconda lettura. Non c'è un permesso da chiedere. C'è un " +
      "elenco, e un termine che corre all'indietro.",
    rule: {
      quote:
        "senza rilascio di apposito titolo autorizzatorio ma con obbligo di " +
        "registrazione del numero di targa in un'apposita «lista bianca ZTL», anche " +
        "a posteriori entro le 48 (quarantotto) ore successive al transito",
      gloss:
        "nessuna autorizzazione viene rilasciata, ma la targa va registrata in una " +
        "lista bianca ZTL — anche dopo, entro le 48 ore successive al transito",
    },
    paragraphs: [
      "Il veicolo non passa dunque a vista e non viene nemmeno escluso. È ammesso a condizione che la targa risulti registrata, e Padova è insolitamente tollerante sul quando: la registrazione può avvenire dopo che l'auto è già entrata, fino a due giorni dopo. Quasi nessun comune italiano lo mette per iscritto.",
      "La tolleranza ha però un limite. La stessa ordinanza stabilisce che in caso di omessa registrazione della targa i transiti sono considerati abusivi — e la zona è controllata da varchi elettronici in ingresso e in uscita: un transito non registrato è comunque un transito rilevato.",
      "C'è poi un tetto che conta quando si contano i bagagli e non i regolamenti. La categoria riguarda veicoli di massa complessiva inferiore alle 3,5 t. Un van o un minibus più grande non vi rientra: a Padova la dimensione del mezzo e la portata del permesso sono la stessa domanda.",
    ],
    caution: {
      heading: "Che cosa non vi promettiamo",
      body:
        "Che la targa venga registrata. I nostri operatori servono Padova, ed è " +
        "confermato, ma se un determinato autista utilizzi la lista bianca del " +
        "Comune è una questione operativa che nessuno ci ha confermato, e non la " +
        "diamo per scontata al vostro posto. Inviate l'indirizzo, precisate che è " +
        "dentro la zona e fatevi confermare per iscritto dall'operatore come sarà " +
        "gestito l'accesso prima di partire.",
    },
    source: ztlIt,
  },

  clocks: {
    id: "clocks",
    eyebrow: "Quando valgono le limitazioni",
    heading: "Un centro, due orari — e alcune domeniche tutte sue",
    lead:
      "La zona è divisa in due, e le due metà non seguono lo stesso orario. In " +
      "quale si trovi il vostro indirizzo cambia il significato dell'ora.",
    caption:
      "Gli orari delle due zone ZTL di Padova, come li indica l'Ordinanza 2023/62/0437",
    columns: ["Zona", "Giorni feriali", "Domeniche e festivi"],
    rows: [
      {
        id: "zona-a",
        cells: [
          "Zona A",
          "8:00 – 23:30",
          "14:00 – 23:30 — inizio più tardi: una mattina festiva non è come una mattina feriale",
        ],
      },
      {
        id: "zona-b",
        cells: [
          "Zona B",
          "00:00 – 24:00",
          "00:00 – 24:00 — limitata tutto il giorno, ogni giorno, senza un'ora tranquilla da scegliere",
        ],
      },
    ],
    sundays: {
      heading: "E le domeniche ecologiche, dove il transfer è l'eccezione",
      body:
        "Padova chiude inoltre il centro ai veicoli endotermici e ibridi in alcune " +
        "domeniche programmate, dalle 8:30 alle 18:30, con ordinanza del Sindaco " +
        "nell'ambito della pianificazione regionale veneta sulla qualità dell'aria. " +
        "In quei giorni la limitazione è molto più ampia della ZTL e riguarda le " +
        "normali auto private su un perimetro esteso. Taxi e auto a noleggio con " +
        "conducente sono esentati per categoria: un transfer prenotato è uno dei " +
        "pochi spostamenti su strada che continuano a funzionare.",
      note:
        "Non indichiamo date. La serie che abbiamo letto andava dal 5 ottobre 2025 " +
        "al 26 aprile 2026 ed è trascorsa, e il Comune fissa le successive stagione " +
        "per stagione. Se viaggiate in una domenica d'inverno o di primavera, " +
        "conviene verificare l'avviso aggiornato del Comune: un elenco scaduto " +
        "sarebbe peggio di nessun elenco.",
    },
    sources: [ztlIt, sundaysIt],
  },

  where: {
    id: "where",
    eyebrow: "L'indirizzo decide tutto",
    heading: "Dove alloggiate, e che cosa cambia",
    lead:
      "Tre situazioni, e per distinguerle ci serve una cosa sola: l'indirizzo " +
      "completo.",
    groups: [
      {
        id: "centre",
        heading: "Dentro il centro storico",
        subheading: "Dove i quattro permessi valgono tutti insieme",
        items: [
          {
            term: "La zona, e quale metà",
            detail:
              "La Zona A ha orari; la Zona B è limitata in continuazione. Il vostro albergo sa in quale si trova, e la risposta cambia come si pianifica l'orario d'arrivo.",
          },
          {
            term: "I varchi da cui entrereste",
            detail:
              "L'ordinanza registra sei varchi ZTL in ingresso attualmente in servizio: via Busonera, Largo Europa, via del Santo, ponte San Gregorio Barbarigo, via Vescovado e riviera Mussato.",
          },
          {
            term: "Accanto alla Basilica",
            detail:
              "Se alloggiate vicino alla Basilica di Sant'Antonio, via del Santo è uno di quei sei varchi: la via stessa è l'accesso controllato, e piazza del Santo si trova dentro l'area limitata.",
          },
        ],
      },
      {
        id: "mainland",
        heading: "Fuori dal centro",
        subheading: "Un arrivo italiano ordinario",
        items: [
          {
            term: "L'auto arriva all'indirizzo",
            detail:
              "Gran parte di Padova è fuori dall'area limitata, e lì un transfer finisce come in qualsiasi altro luogo d'Italia: alla porta, con i bagagli.",
          },
          {
            term: "Prato della Valle",
            detail:
              "Al margine sud del centro, e da conoscere per due motivi documentati: ha un varco sulla corsia del tram ed è su un asse viario che il Comune mantiene in deroga nelle domeniche ecologiche.",
          },
          {
            term: "Che cosa ci serve comunque",
            detail:
              "L'indirizzo completo, perché il confine è una linea su una mappa e non un'impressione su quanto un luogo sembri centrale.",
          },
        ],
      },
      {
        id: "station",
        heading: "Arrivare in treno",
        subheading: "L'esempio più chiaro del terzo permesso",
        items: [
          {
            term: "Qui non c'è una pagina sulla stazione, di proposito",
            detail:
              "Padova non ha il problema veneziano delle due stazioni dal nome confondibile: il contenuto utile è questa sezione, non una pagina a parte che le farebbe concorrenza.",
          },
          {
            term: "Varchi sul piazzale",
            detail:
              "L'ordinanza registra varchi in piazzale della Stazione sia sul lato sud-est sia sul lato nord-ovest, a controllo delle corsie riservate e non della ZTL.",
          },
          {
            term: "Dove sarà allora l'auto?",
            detail:
              "Non inventiamo una risposta. Essere ammessi nella zona non è essere ammessi nelle corsie riservate del piazzale, e il punto d'incontro lo conferma l'operatore e nessun altro.",
          },
        ],
      },
    ],
    forbidden: {
      heading: "I cinque luoghi in cui un'auto a noleggio non può andare",
      body:
        "L'ordinanza sulle aree pedonali ammette taxi e auto a noleggio con " +
        "conducente, e poi esclude per nome questi. Lì un'auto prenotata non ha la " +
        "posizione che il resto della zona le riconosce: un indirizzo su una di " +
        "esse cambia dove può finire il viaggio:",
      streets: [
        "via Cavour",
        "piazza Cavour",
        "piazza Pedrocchi",
        "via VIII Febbraio",
        "piazzetta Garzeria",
      ],
    },
    source: pedestrianIt,
  },

  send: {
    id: "send",
    heading: "Che cosa inviare per un transfer a Padova",
    lead:
      "Sei righe. La seconda è quella che rende rispondibile questa città.",
    items: [
      "L'indirizzo completo a Padova, con quanto la struttura vi ha detto sull'arrivo in auto.",
      "Se è dentro il centro storico e, se l'albergo lo sa, in quale zona.",
      "Da dove partite: un indirizzo a Venezia o a Verona, un terminal aeroportuale o una stazione.",
      "La data, l'ora in cui vorreste viaggiare e il giorno della settimana.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
    ],
    note:
      "Se il vostro indirizzo è in una delle cinque vie escluse, ditelo. È il " +
      "dettaglio che cambia la fine del viaggio, non la sua organizzazione.",
  },

  comparison: {
    id: "comparison",
    eyebrow: "Quattro città, quattro regimi",
    heading: "Perché «i taxi sono esenti» non è mai la risposta",
    lead:
      "Questo sito ha letto finora le regole di quattro città italiane, e nessuna " +
      "tratta un'auto a noleggio come un'altra. Sono strumenti giuridici diversi, " +
      "non un unico permesso con varianti locali, e nessuno di essi si trasferisce " +
      "alla città successiva.",
    items: [
      {
        id: "rome",
        city: "Roma",
        page: "rome",
        rule: "Taxi e auto a noleggio con conducente sono esenti per categoria, e l'esenzione è stata confermata rispetto alla precedente regolamentazione invece di dipendere dall'alimentazione del veicolo.",
      },
      {
        id: "verona",
        city: "Verona",
        page: "verona",
        rule: "Una limitazione invernale per classe emissiva, con le auto a noleggio in deroga a condizione che l'autista abbia un'autocertificazione: il permesso viaggia nel cruscotto.",
      },
      {
        id: "sirmione",
        city: "Sirmione",
        page: "route-verona-sirmione",
        rule: "Ingresso a qualsiasi ora di qualsiasi giorno, ma solo per trasportare residenti, dimoranti e soggiornanti. Il permesso dipende da chi si trova in auto.",
      },
      {
        id: "padua",
        city: "Padova",
        page: null,
        rule: "Nessun titolo autorizzatorio, ma la targa deve stare nella lista bianca — e, unico caso, può esservi inserita fino a 48 ore dopo il viaggio. Il permesso dipende da un adempimento che può seguire l'auto.",
      },
    ],
    note:
      "Ciascuna di quelle pagine porta la propria fonte. Le abbiamo affiancate una " +
      "volta sola, qui, perché chi programma più di una città italiana è la persona " +
      "più esposta al rischio di credere che la prima risposta valga per la " +
      "seconda.",
  },

  onward: {
    id: "onward",
    eyebrow: "Collegate",
    heading: "Arrivare a Padova, e la regione attorno",
    lead: "Pagine che esistono oggi, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "route-venice-padua",
        page: "route-venice-padua",
        label: "Da Venezia a Padova",
        detail:
          "Il viaggio tra le due città, in entrambe le direzioni, e i due motivi molto diversi per cui l'auto si ferma prima a ciascun capo.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfer a Venezia",
        detail:
          "La città dove un transfer su strada non può proprio arrivare all'indirizzo: il problema opposto a questo.",
      },
      {
        id: "venice-marco-polo",
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "L'aeroporto da cui arriva la maggior parte dei viaggiatori per Padova.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfer a Verona",
        detail: "L'altro capo del Veneto, con una limitazione di terzo tipo.",
      },
      {
        id: "lake-garda",
        page: "lake-garda",
        label: "Transfer sul Lago di Garda",
        detail: "Se Padova è una tappa di un itinerario veneto più ampio.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sui transfer a Padova",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Un transfer privato può entrare nella ZTL di Padova?",
        answer:
          "Sì. Il Comune ammette taxi e auto a noleggio con conducente nella ZTL " +
          "del centro storico per operazioni di servizio, senza rilascio di alcun " +
          "titolo autorizzatorio, purché il veicolo sia di massa complessiva " +
          "inferiore alle 3,5 t. La condizione non è un permesso ma una " +
          "registrazione: la targa deve essere inserita nella lista bianca ZTL.",
      },
      {
        question: "Gli NCC hanno bisogno di un permesso ZTL a Padova?",
        answer:
          "Per loro non viene rilasciato alcun permesso: è proprio questo che rende " +
          "Padova diversa. Serve invece che la targa risulti nella «lista bianca " +
          "ZTL» del Comune, e l'ordinanza consente di farlo anche a posteriori, " +
          "entro le 48 ore successive al transito. In caso di omessa registrazione, " +
          "l'ordinanza stabilisce che i transiti siano considerati abusivi.",
      },
      {
        question: "Quali sono gli orari della ZTL a Padova?",
        answer:
          "Dipende da quale delle due zone. La Zona A vale dalle 8:00 alle 23:30 " +
          "nei giorni feriali e dalle 14:00 alle 23:30 nelle domeniche e nei " +
          "festivi. La Zona B è limitata dalle 00:00 alle 24:00, feriali e festivi " +
          "allo stesso modo. In entrambe vale il limite di 30 km/h.",
      },
      {
        question: "L'auto arriverà alla porta del mio albergo in centro?",
        answer:
          "Non lo promettiamo, e nessuna ordinanza può farlo. Poter percorrere una " +
          "via non significa potersi fermare mentre scendono i bagagli. Inviate " +
          "l'indirizzo completo e l'operatore vi dirà dove il viaggio può " +
          "realisticamente finire, prima di partire e non il giorno stesso.",
      },
      {
        question: "Ci sono vie di Padova in cui un transfer privato non può passare?",
        answer:
          "Sì, cinque, indicate per nome nell'ordinanza sulle aree pedonali: via " +
          "Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio e piazzetta " +
          "Garzeria. Taxi e auto a noleggio sono per il resto ammessi nelle aree " +
          "pedonali interne alla ZTL, e proprio per questo queste esclusioni " +
          "sfuggono facilmente e vanno dette.",
      },
      {
        question: "Potete venirci a prendere alla stazione di Padova?",
        answer:
          "Chiedetelo e inviate i dati del treno. Quello che non facciamo è " +
          "promettere un posto sul piazzale della stazione: l'ordinanza registra " +
          "lì dei varchi a controllo delle corsie riservate, ed essere ammessi in " +
          "ZTL non è essere ammessi in una corsia riservata. Il punto d'incontro lo " +
          "conferma l'operatore.",
      },
      {
        question: "Che cosa succede nelle domeniche ecologiche di Padova?",
        answer:
          "In alcune domeniche programmate la città vieta la circolazione dei " +
          "veicoli endotermici e ibridi in centro dalle 8:30 alle 18:30, su un " +
          "perimetro molto più ampio della ZTL. Taxi e auto a noleggio con " +
          "conducente sono esentati per categoria, quindi un transfer prenotato " +
          "circola quando un'auto privata non potrebbe. Le date si fissano ogni " +
          "stagione: verificate l'avviso aggiornato del Comune.",
      },
      {
        question: "Il limite di 3,5 t riguarda un gruppo numeroso?",
        answer:
          "Può riguardarlo, e conviene dirlo subito. La categoria che ammette taxi " +
          "e auto a noleggio copre veicoli di massa complessiva inferiore alle 3,5 " +
          "t, quindi un minibus più grande non vi rientra. Indicateci quante " +
          "persone siete e quanti bagagli avete e l'operatore vi dirà che cosa " +
          "comporta per raggiungere un indirizzo centrale.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviate l'indirizzo, e dite se è in centro",
    body:
      "Quelle due righe decidono quale dei quattro permessi serva davvero al " +
      "vostro viaggio, e sono la differenza tra un preventivo e una supposizione. " +
      "La risposta torna per iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Da Venezia a Padova", page: "route-venice-padua" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli, non impieghiamo direttamente gli " +
      "autisti e nulla di quanto qui scritto costituisce un'offerta di accesso a " +
      "una via soggetta a limitazioni.",
  },
};

export const paduaHub: Record<"en" | "it", PaduaHub> = { en, it };
