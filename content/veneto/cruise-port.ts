import type { VeniceCruisePort } from "./types";

/**
 * Venice cruise terminals.
 *
 * ── What is sourced ──────────────────────────────────────────────────────
 * Venezia Terminal Passeggeri (vtp.it), the company holding the passenger
 * terminal concession. Read 23 November 2026 and re-checked 25 November,
 * when the page was still live and the Marghera sentence unchanged. It
 * supports: the list of berths and terminals; that a ship moored at
 * Marghera has its passengers handled at the Marittima cruise port, reached
 * by free dedicated shuttles; that Piazzale Roma is the "porta d'ingresso
 * alla Città Storica", connected to the Marittima area by the people mover;
 * and that VTP operates one official port car park.
 *
 * The Autorità di Sistema Portuale del Mare Adriatico Settentrionale
 * supports the existence of a Cruise Commissioner with power to create
 * temporary berths, Marghera among them, for ships of 25,000 GT and above.
 *
 * ── What no source supports, and why the page says so ────────────────────
 * Not one official page consulted names a pickup point for a taxi, a
 * private car or an NCC at any Venice cruise berth. VTP does not mention
 * those vehicles at all; the port authority's traffic rules govern
 * exceptional loads and working machinery, not passenger cars. The Comune
 * di Venezia site and the access-fee site both returned empty bodies.
 *
 * So this page states no meeting point. It explains the chain a passenger
 * actually moves along and says the final arrangement is confirmed with the
 * operator. Competitors assert Piazzale Roma or "the terminal"; neither is
 * published as a rule, and inventing one here would be the single most
 * damaging thing this page could do.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances, fares, parking charges, shuttle timetables, the
 * access fee (the authority's own site could not be read), any claim about
 * the Giudecca Canal, and any statement that a particular ship uses a
 * particular berth. The passenger's own cruise documentation decides that,
 * and it is the one source that is always current for them.
 */

const vtpEn = {
  text:
    "The berths and terminals listed here, and the arrangement by which a ship " +
    "moored at Marghera has its passengers handled at the Marittima cruise port " +
    "with free dedicated shuttles, are published by Venezia Terminal Passeggeri, " +
    "which holds the passenger terminal concession. Read 23 November 2026 and " +
    "re-checked on 25 November. Berth allocation changes by season and by sailing:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const vtpIt = {
  text:
    "Gli attracchi e i terminal qui elencati, e il fatto che una nave ormeggiata a " +
    "Marghera faccia salire i passeggeri al Porto Crociere di Marittima con navette " +
    "gratuite dedicate, sono pubblicati da Venezia Terminal Passeggeri, che ha in " +
    "concessione la stazione marittima passeggeri. Consultato il 23 novembre 2026 e " +
    "riverificato il 25 novembre. L'assegnazione degli ormeggi cambia con la " +
    "stagione e con la singola partenza:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const portEn = {
  text:
    "That the port's President holds the role of Cruise Commissioner, with power to " +
    "create a limited number of temporary berths — Marghera among them — for ships " +
    "of 25,000 gross tonnes and above, is published by the Autorità di Sistema " +
    "Portuale del Mare Adriatico Settentrionale. Read 23 November 2026:",
  linkText: "the North Adriatic Sea Port Authority on passenger traffic",
  href: "https://www.port.venice.it/offerta-portuale/servizi-portuali/traffico-passeggeri/",
};

const portIt = {
  text:
    "Che il Presidente del porto ricopra il ruolo di Commissario Straordinario per " +
    "le crociere, con il compito di realizzare un numero limitato di approdi " +
    "temporanei — fra cui Marghera — per navi di stazza pari o superiore a 25.000 " +
    "tonnellate, è pubblicato dall'Autorità di Sistema Portuale del Mare Adriatico " +
    "Settentrionale. Consultato il 23 novembre 2026:",
  linkText: "l'Autorità di Sistema Portuale sul traffico passeggeri",
  href: "https://www.port.venice.it/offerta-portuale/servizi-portuali/traffico-passeggeri/",
};

const en: VeniceCruisePort = {
  meta: {
    title: "Venice Cruise Terminal Transfers – Marittima Pickups",
    description:
      "Your berth, your terminal and the place a car can meet you are three " +
      "different things in Venice. What to check before booking a transfer.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Venice",
    h1: "Venice cruise terminal transfers",
    lead:
      "In most ports the ship, the terminal and the waiting car are the same " +
      "place. In Venice they may be three. A ship can be moored at Marghera while " +
      "its passengers are handled at Marittima, and past a certain line the city " +
      "has no roads at all. Booking a transfer to “Venice cruise port” " +
      "leaves all of that unsaid.",
    primaryCta: "Request a quotation",
    secondaryCta: "Transfers in Venice",
  },

  berths: {
    id: "berths",
    eyebrow: "Where ships tie up",
    heading: "Venice is not one cruise terminal",
    lead:
      "The terminal operator lists several locations, and they are not " +
      "interchangeable. Your cruise documentation names the one that applies to " +
      "your sailing — this table is here so you know what you are looking at when " +
      "it does.",
    caption: "Cruise berths and terminals at Venice, as the terminal operator lists them",
    columns: ["Location", "What the operator lists", "Why it matters to a transfer"],
    rows: [
      {
        id: "marittima",
        cells: [
          "Marittima",
          "Seven berths and five cruise terminals, in the historic city",
          "The main cruise site, and where passengers from some other berths are handled. The busiest answer, but not the only one.",
        ],
      },
      {
        id: "marghera",
        cells: [
          "Marghera (Banchina Liguria, Banchina Lombardia)",
          "One berth each, on the mainland",
          "The operator states that a ship moored here has its passengers handled at Marittima, with free dedicated shuttles. The ship and the passenger are in different places.",
        ],
      },
      {
        id: "fusina",
        cells: [
          "Fusina",
          "Two berths, one cruise terminal",
          "A separate site with its own terminal, where the operator says check-in and embarkation happen on the spot.",
        ],
      },
      {
        id: "sanbasilio",
        cells: [
          "San Basilio",
          "Two berths, one cruise terminal",
          "Also in the city, also with its own terminal. Not the same place as Marittima.",
        ],
      },
      {
        id: "chioggia",
        cells: [
          "Chioggia",
          "One berth, one cruise terminal",
          "A separate port some way south of Venice. If your ship calls here, a transfer is a different journey entirely.",
        ],
      },
    ],
    note:
      "The port authority has also been given power to create a limited number of " +
      "temporary berths, Marghera included, for larger ships. Which one your " +
      "sailing uses is decided by the cruise line and can change — your own " +
      "documentation is the only source that is current for your date.",
    sources: [vtpEn, portEn],
  },

  chain: {
    id: "chain",
    eyebrow: "The part nobody explains",
    heading: "From the ship to a road, step by step",
    lead:
      "A transfer begins where the road begins, and in Venice that can be some " +
      "distance from where you woke up. This is the sequence, and the point at " +
      "which a car becomes possible.",
    steps: [
      {
        title: "Your ship is at a berth",
        body:
          "Which berth is set by the cruise line, not by you, and not by us. It may be at Marittima in the historic city, at Marghera on the mainland, or at one of the other sites above.",
      },
      {
        title: "A shuttle may be involved",
        body:
          "The terminal operator states that passengers of a ship moored at Marghera are taken to the Marittima cruise port by free dedicated shuttles. Where your ship berths at a site with its own terminal, the operator says check-in and embarkation happen there instead.",
      },
      {
        title: "You reach a cruise terminal",
        body:
          "A building with check-in and baggage handling. It is a passenger facility, not a car park, and reaching it is not the same as reaching a vehicle.",
      },
      {
        title: "A road-accessible point",
        body:
          "Somewhere a vehicle may legally and physically wait. No official source names one for private cars, taxis or hire cars with driver at any Venice cruise berth — which is why this step is agreed with your operator rather than stated here.",
      },
      {
        title: "Your onward journey",
        body:
          "Airport, railway station, hotel or another city. From the road-accessible point onwards it is an ordinary transfer, and everything before it is the part worth planning.",
      },
    ],
    note:
      "The terminal operator describes Piazzale Roma as the gateway to the historic " +
      "city, connected to the Marittima area by the people mover. That is useful " +
      "orientation. It is not a statement that your transfer will meet you there, " +
      "and this page does not make one.",
    source: vtpEn,
  },

  places: {
    id: "places",
    eyebrow: "Five places, five names",
    heading: "These are not the same location",
    lead:
      "Almost every problem on this journey comes from treating two of these as " +
      "one. Named apart, the booking becomes straightforward.",
    items: [
      {
        term: "The berth",
        detail:
          "Where the hull is tied up. Could be in the historic city, could be on the mainland at Marghera. It is a quayside, and it is not where a transfer meets you.",
      },
      {
        term: "The shuttle stop",
        detail:
          "Where the cruise line's own free shuttle collects or sets down, where one is running for your sailing. Operated by the port and the line, not by any transfer company.",
      },
      {
        term: "The cruise terminal",
        detail:
          "The check-in building. Marittima has five; Fusina, San Basilio and Chioggia have one each. Being at a terminal does not by itself mean a car can reach you.",
      },
      {
        term: "The road-accessible meeting point",
        detail:
          "Where your driver can lawfully and physically wait. This is the one that matters for the booking, and the one no official source publishes.",
      },
      {
        term: "Your destination",
        detail:
          "Airport, station, hotel, another city. Straightforward once the four above are settled, and the usual cause of a missed connection when they are not.",
      },
    ],
    confirmWithOperator: {
      heading: "Where you will actually be met is confirmed with your operator",
      body:
        "We will not print a meeting point here, because no official source " +
        "publishes one. Venezia Terminal Passeggeri does not address taxis, private " +
        "cars or hire cars with driver anywhere on its site, and the port " +
        "authority's traffic rules cover freight and working machinery rather than " +
        "passenger vehicles. What you get instead is a confirmed arrangement in " +
        "writing for your own ship and date, before you disembark — which is worth " +
        "more than a street name that may not apply to your sailing.",
    },
  },

  onward: {
    id: "onward",
    eyebrow: "After the port",
    heading: "Where the journey goes next",
    lead:
      "Each of these has a page of its own. Tell us which, and the quotation can " +
      "be specific about both ends.",
    items: [
      {
        id: "marco-polo",
        page: "venice-marco-polo",
        label: "Venice Marco Polo Airport (VCE)",
        detail: "The main airport, and the most common onward journey from a cruise.",
      },
      {
        id: "treviso",
        page: "treviso-airport",
        label: "Treviso Airport (TSF)",
        detail: "The second airport, further out, used mostly by low-cost airlines.",
      },
      {
        id: "stations",
        page: "venice-stations",
        label: "Venice railway stations",
        detail: "Santa Lucia on the island, Mestre on the mainland — and which one your train actually uses.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfers in Venice",
        detail: "The city itself: where a road transfer can end, and why the road stops where it does.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Verona",
        detail: "Further west in the Veneto, if the cruise is the start of a longer trip.",
      },
    ],
    note:
      "A journey to a hotel is an enquiry like any other: send the full address, " +
      "not the hotel name. Whether the property is on the island, on the mainland " +
      "or in Mestre changes the arrangement completely, and the Venice page " +
      "explains why.",
  },

  checklist: {
    id: "checklist",
    eyebrow: "Before you disembark",
    heading: "What to have ready",
    lead:
      "Gathered the night before, this turns a quotation into a confirmed " +
      "arrangement rather than an exchange of questions.",
    groups: [
      {
        id: "ship",
        heading: "Your sailing",
        items: [
          {
            id: "vessel",
            label: "Ship name and cruise line",
            detail:
              "Both. The line decides the berth and runs any shuttle, so naming it tells the operator more than the ship alone.",
          },
          {
            id: "date",
            label: "The date you disembark",
            detail:
              "Not the date the cruise ends on the brochure, if those differ. Berth allocation varies by day.",
          },
          {
            id: "berth",
            label: "The terminal or berth in your documentation",
            detail:
              "Marittima, Marghera, Fusina, San Basilio or Chioggia. If the paperwork does not say, say that too — it is useful information in itself.",
          },
          {
            id: "time",
            label: "Your disembarkation time",
            detail:
              "As the cruise line has given it, by deck or luggage group. It is the variable the whole morning turns on.",
          },
        ],
      },
      {
        id: "party",
        heading: "Who and what",
        items: [
          {
            id: "passengers",
            label: "Adults and children, counted separately",
            detail:
              "With the children's ages, so any seat is arranged in advance rather than found on the quay.",
          },
          {
            id: "luggage",
            label: "Hold cases and cabin bags, counted separately",
            detail:
              "Cruise luggage is the heaviest most people travel with, and it decides the vehicle more often than the passenger count does.",
          },
          {
            id: "access",
            label: "Any mobility or accessibility needs",
            detail:
              "Step-free access, a wheelchair, help with luggage, or someone who cannot manage a long walk. This changes what is arranged, so it belongs in the first message.",
          },
        ],
      },
      {
        id: "after",
        heading: "Where you are going",
        items: [
          {
            id: "destination",
            label: "The destination in full",
            detail:
              "A terminal rather than an airport. A station rather than a city. A full street address rather than a hotel name.",
          },
          {
            id: "service",
            label: "Flight or train details, if there are any",
            detail:
              "The number and the departure time. A flight that leaves at midday and one that leaves at six are different journeys from the same quay.",
          },
          {
            id: "contact",
            label: "A mobile number that works ashore",
            detail:
              "It is how the meeting completes on the day, particularly if disembarkation runs late.",
          },
        ],
      },
    ],
    note:
      "Nothing here commits you. A quotation prices one journey on one date and " +
      "comes back in writing, with the meeting arrangement, before anything is " +
      "confirmed.",
  },

  mistakes: {
    id: "mistakes",
    eyebrow: "What goes wrong",
    heading: "The mistakes that cost people their morning",
    lead:
      "Every one of these is common, and every one is avoidable with a line of " +
      "text in the original request.",
    items: [
      {
        id: "portname",
        wrong: "Booking a transfer to “Venice cruise port” and nothing more",
        instead:
          "Name the terminal or berth from your documentation. Venice has several, in two different places, and the name alone does not identify one.",
      },
      {
        id: "berth",
        wrong: "Assuming the car will be waiting where the ship is tied up",
        instead:
          "Treat the berth and the meeting point as separate until your operator confirms otherwise. At Marghera in particular, passengers are handled somewhere other than the ship.",
      },
      {
        id: "marghera",
        wrong: "Confusing Marghera with Marittima because both are “Venice”",
        instead:
          "Marghera is on the mainland; Marittima is in the historic city. The terminal operator runs free shuttles between them precisely because they are not the same place.",
      },
      {
        id: "shuttle",
        wrong: "Ignoring the cruise line's own shuttle instructions",
        instead:
          "Read them before booking anything. They determine where you will physically be when your transfer is due, which is the information the operator needs most.",
      },
      {
        id: "hotel",
        wrong: "Giving a hotel name without the street address",
        instead:
          "Send the full address. In Venice the difference between an island address and a mainland one is the difference between a short walk and an impossible one.",
      },
      {
        id: "luggage",
        wrong: "Not mentioning the luggage",
        instead:
          "Count hold cases and cabin bags separately in the request. A party of four with nine cases needs a different vehicle from a party of four with four.",
      },
      {
        id: "access",
        wrong: "Assuming a driver can enter a restricted or pedestrian area",
        instead:
          "Assume the opposite and let the operator tell you otherwise. Much of Venice has no road access at all, and no permit changes water into tarmac.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked before a Venice cruise transfer",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Where will I meet my private driver at Venice cruise port?",
        answer:
          "At a point your operator confirms for your ship and date. No official " +
          "source publishes a pickup location for private cars, taxis or hire cars " +
          "with driver at any Venice cruise berth, so we will not print one. You " +
          "receive the arrangement in writing before you disembark.",
      },
      {
        question: "Can a private car collect passengers beside the ship?",
        answer:
          "We do not promise it, anywhere in Venice. The terminal operator's pages " +
          "do not address private vehicles at the berths at all, and the port " +
          "authority's traffic rules cover freight and working machinery rather than " +
          "passenger cars. Treat the quayside and the meeting point as separate " +
          "places until your operator says otherwise.",
      },
      {
        question: "What happens if my ship docks at Marghera?",
        answer:
          "Venezia Terminal Passeggeri states that passengers of a ship moored at " +
          "Marghera are taken to the Marittima cruise port, with free dedicated " +
          "shuttles. Marghera is on the mainland and Marittima is in the historic " +
          "city, so you and your ship end the morning in different places. Say which " +
          "your documentation names when you request a quotation.",
      },
      {
        question: "Is the shuttle between Marghera and Marittima free?",
        answer:
          "The terminal operator describes it as a free dedicated shuttle service. " +
          "It is run by the port and the cruise line, not by us, and it is not a " +
          "private transfer — it moves you between port facilities, not to your " +
          "hotel, your station or your airport.",
      },
      {
        question: "Is Piazzale Roma the cruise port pickup point?",
        answer:
          "Not as a rule, and we do not present it as one. The terminal operator " +
          "describes Piazzale Roma as the gateway to the historic city, connected to " +
          "the Marittima area by the people mover. That is orientation, not a " +
          "meeting arrangement, and yours is confirmed with your operator.",
      },
      {
        question: "How do I arrange a transfer to Marco Polo Airport?",
        answer:
          "Send the ship, the disembarkation date and time, the terminal your " +
          "documentation names, your flight number and departure time, and the " +
          "passenger and luggage counts. The flight number settles the terminal and " +
          "the check-in deadline; the rest settles the vehicle and the meeting.",
      },
      {
        question: "Can I travel from the cruise terminal to Venezia Santa Lucia?",
        answer:
          "It can be requested like any other journey, and the station page explains " +
          "what Santa Lucia and Mestre each mean for a vehicle. As always the first " +
          "part of the journey depends on where your ship actually berths.",
      },
      {
        question: "We are travelling with a lot of suitcases. Does that matter?",
        answer:
          "More than almost anything else you can tell us. Cruise parties routinely " +
          "carry more and heavier luggage than their numbers suggest, and it decides " +
          "the vehicle. Count hold cases and cabin bags separately in the request " +
          "rather than on the quayside.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the ship, the date and where you are going",
    body:
      "Those three lines start a quotation. Add the terminal your documentation " +
      "names and the flight or train at the other end, and the reply can confirm " +
      "the meeting arrangement rather than ask you for it.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Venice", page: "venice" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles, employ drivers directly, or hold any " +
      "arrangement with a cruise line or terminal operator.",
  },
};

const it: VeniceCruisePort = {
  meta: {
    title: "Transfer dal porto crociere di Venezia – Marittima",
    description:
      "L'ormeggio, il terminal e il punto in cui un'auto può attendervi a Venezia " +
      "sono tre cose diverse. Che cosa verificare prima di prenotare un transfer.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Venezia",
    h1: "Transfer dal porto crociere di Venezia",
    lead:
      "Nella maggior parte dei porti la nave, il terminal e l'auto in attesa sono " +
      "lo stesso luogo. A Venezia possono essere tre. Una nave può essere ormeggiata " +
      "a Marghera mentre i suoi passeggeri vengono gestiti a Marittima, e oltre una " +
      "certa linea la città non ha strade. Prenotare un transfer per il " +
      "«porto di Venezia» lascia tutto questo non detto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer a Venezia",
  },

  berths: {
    id: "berths",
    eyebrow: "Dove ormeggiano le navi",
    heading: "Venezia non è un unico terminal crociere",
    lead:
      "Il gestore dei terminal elenca più sedi, e non sono intercambiabili. La " +
      "vostra documentazione di crociera indica quella che riguarda la vostra " +
      "partenza: questa tabella serve a capire che cosa state leggendo.",
    caption: "Attracchi e terminal crociere a Venezia, come li elenca il gestore",
    columns: ["Sede", "Che cosa elenca il gestore", "Perché conta per un transfer"],
    rows: [
      {
        id: "marittima",
        cells: [
          "Marittima",
          "Sette attracchi e cinque terminal crociere, nella città storica",
          "La sede crocieristica principale, e il luogo in cui vengono gestiti i passeggeri di alcuni altri ormeggi. La risposta più frequente, non l'unica.",
        ],
      },
      {
        id: "marghera",
        cells: [
          "Marghera (Banchina Liguria, Banchina Lombardia)",
          "Un attracco ciascuna, sulla terraferma",
          "Il gestore indica che una nave ormeggiata qui fa gestire i passeggeri a Marittima, con navette gratuite dedicate. Nave e passeggero non sono nello stesso posto.",
        ],
      },
      {
        id: "fusina",
        cells: [
          "Fusina",
          "Due attracchi, un terminal crociere",
          "Una sede a sé con terminal proprio, dove secondo il gestore check-in e imbarco avvengono sul posto.",
        ],
      },
      {
        id: "sanbasilio",
        cells: [
          "San Basilio",
          "Due attracchi, un terminal crociere",
          "Anch'essa in città e anch'essa con terminal proprio. Non coincide con Marittima.",
        ],
      },
      {
        id: "chioggia",
        cells: [
          "Chioggia",
          "Un attracco, un terminal crociere",
          "Un porto distinto, parecchio più a sud di Venezia. Se la nave scala qui, il transfer è tutt'altro viaggio.",
        ],
      },
    ],
    note:
      "All'Autorità portuale è stato inoltre attribuito il compito di realizzare un " +
      "numero limitato di approdi temporanei, Marghera compresa, per le navi più " +
      "grandi. Quale usi la vostra partenza lo decide la compagnia e può cambiare: " +
      "la vostra documentazione è l'unica fonte sempre aggiornata per la vostra data.",
    sources: [vtpIt, portIt],
  },

  chain: {
    id: "chain",
    eyebrow: "La parte che nessuno spiega",
    heading: "Dalla nave alla strada, un passaggio alla volta",
    lead:
      "Un transfer comincia dove comincia la strada, e a Venezia può essere lontano " +
      "da dove vi siete svegliati. Questa è la sequenza, e il punto in cui un'auto " +
      "diventa possibile.",
    steps: [
      {
        title: "La nave è a un ormeggio",
        body:
          "Quale lo stabilisce la compagnia, non voi e non noi. Può essere a Marittima nella città storica, a Marghera sulla terraferma o in una delle altre sedi qui sopra.",
      },
      {
        title: "Può esserci una navetta",
        body:
          "Il gestore indica che i passeggeri di una nave ormeggiata a Marghera raggiungono il Porto Crociere di Marittima con navette gratuite dedicate. Dove la nave attracca in una sede con terminal proprio, check-in e imbarco avvengono invece lì.",
      },
      {
        title: "Si arriva a un terminal crociere",
        body:
          "Un edificio con check-in e gestione bagagli. È una struttura per passeggeri, non un parcheggio: arrivarci non equivale a raggiungere un veicolo.",
      },
      {
        title: "Un punto raggiungibile su strada",
        body:
          "Un luogo in cui un veicolo possa legalmente e fisicamente attendere. Nessuna fonte ufficiale ne indica uno per auto private, taxi o NCC presso gli attracchi crociere di Venezia: per questo questo passaggio si concorda con l'operatore invece di dichiararlo qui.",
      },
      {
        title: "Il vostro proseguimento",
        body:
          "Aeroporto, stazione, albergo o un'altra città. Dal punto su strada in poi è un transfer ordinario: tutto ciò che viene prima è la parte da pianificare.",
      },
    ],
    note:
      "Il gestore descrive piazzale Roma come la porta d'ingresso alla città " +
      "storica, collegata all'area Marittima dal people mover. È un utile " +
      "orientamento. Non è l'indicazione che il vostro transfer vi attenderà lì, e " +
      "questa pagina non lo afferma.",
    source: vtpIt,
  },

  places: {
    id: "places",
    eyebrow: "Cinque luoghi, cinque nomi",
    heading: "Non sono lo stesso posto",
    lead:
      "Quasi ogni problema su questo tragitto nasce dal trattarne due come uno. " +
      "Distinguendoli, la prenotazione diventa semplice.",
    items: [
      {
        term: "L'ormeggio",
        detail:
          "Dove è ormeggiato lo scafo. Può essere nella città storica o sulla terraferma a Marghera. È una banchina, e non è dove vi attende un transfer.",
      },
      {
        term: "La fermata della navetta",
        detail:
          "Dove la navetta gratuita della compagnia vi prende o vi lascia, quando ce n'è una per la vostra partenza. È gestita dal porto e dalla compagnia, non da una società di transfer.",
      },
      {
        term: "Il terminal crociere",
        detail:
          "L'edificio del check-in. Marittima ne ha cinque; Fusina, San Basilio e Chioggia uno ciascuno. Essere a un terminal non significa di per sé che un'auto possa raggiungervi.",
      },
      {
        term: "Il punto d'incontro su strada",
        detail:
          "Dove il vostro autista può attendere legalmente e materialmente. È quello che conta per la prenotazione, ed è quello che nessuna fonte ufficiale pubblica.",
      },
      {
        term: "La vostra destinazione",
        detail:
          "Aeroporto, stazione, albergo, un'altra città. Semplice una volta chiariti i quattro precedenti, e causa abituale di coincidenze perse quando non lo sono.",
      },
    ],
    confirmWithOperator: {
      heading: "Dove verrete davvero prelevati lo conferma l'operatore",
      body:
        "Non pubblichiamo qui un punto d'incontro, perché nessuna fonte ufficiale ne " +
        "indica uno. Venezia Terminal Passeggeri non tratta taxi, auto private o NCC " +
        "in nessuna pagina del proprio sito, e il regolamento di circolazione " +
        "dell'Autorità portuale riguarda merci e mezzi operativi, non le auto dei " +
        "passeggeri. Quello che ricevete è un accordo confermato per iscritto per la " +
        "vostra nave e la vostra data, prima dello sbarco: vale più di un nome di " +
        "strada che per la vostra partenza potrebbe non valere.",
    },
  },

  onward: {
    id: "onward",
    eyebrow: "Dopo il porto",
    heading: "Dove prosegue il viaggio",
    lead:
      "Ognuna di queste ha una pagina propria. Diteci quale, e il preventivo potrà " +
      "essere preciso su entrambi i capi.",
    items: [
      {
        id: "marco-polo",
        page: "venice-marco-polo",
        label: "Aeroporto di Venezia Marco Polo (VCE)",
        detail: "L'aeroporto principale, e il proseguimento più frequente dopo una crociera.",
      },
      {
        id: "treviso",
        page: "treviso-airport",
        label: "Aeroporto di Treviso (TSF)",
        detail: "Il secondo scalo, più lontano, usato soprattutto dalle compagnie low cost.",
      },
      {
        id: "stations",
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail: "Santa Lucia sull'isola, Mestre sulla terraferma, e quale usa davvero il vostro treno.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfer a Venezia",
        detail: "La città: dove può finire un transfer su strada e perché la strada finisce lì.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Verona",
        detail: "Più a ovest nel Veneto, se la crociera è l'inizio di un viaggio più lungo.",
      },
    ],
    note:
      "Un viaggio verso un albergo è una richiesta come le altre: inviate " +
      "l'indirizzo completo, non il nome della struttura. Che si trovi sull'isola, " +
      "sulla terraferma o a Mestre cambia tutto, e la pagina su Venezia spiega perché.",
  },

  checklist: {
    id: "checklist",
    eyebrow: "Prima di sbarcare",
    heading: "Che cosa avere pronto",
    lead:
      "Raccolto la sera prima, trasforma un preventivo in un accordo confermato " +
      "invece che in uno scambio di domande.",
    groups: [
      {
        id: "ship",
        heading: "La vostra partenza",
        items: [
          {
            id: "vessel",
            label: "Nome della nave e compagnia",
            detail:
              "Entrambi. È la compagnia a decidere l'ormeggio e a gestire le navette: indicarla dice all'operatore più del solo nome della nave.",
          },
          {
            id: "date",
            label: "La data in cui sbarcate",
            detail:
              "Non quella di fine crociera sul dépliant, se differiscono. L'assegnazione degli ormeggi cambia di giorno in giorno.",
          },
          {
            id: "berth",
            label: "Il terminal o l'ormeggio indicato nei documenti",
            detail:
              "Marittima, Marghera, Fusina, San Basilio o Chioggia. Se la documentazione non lo dice, ditelo: è un'informazione utile di per sé.",
          },
          {
            id: "time",
            label: "L'orario di sbarco",
            detail:
              "Come ve l'ha comunicato la compagnia, per ponte o per gruppo bagagli. È la variabile attorno a cui ruota tutta la mattina.",
          },
        ],
      },
      {
        id: "party",
        heading: "Chi e con che cosa",
        items: [
          {
            id: "passengers",
            label: "Adulti e bambini, contati separatamente",
            detail:
              "Con l'età dei bambini, così il seggiolino si predispone prima e non si cerca sulla banchina.",
          },
          {
            id: "luggage",
            label: "Valigie da stiva e bagagli a mano, contati a parte",
            detail:
              "Quello da crociera è il bagaglio più pesante con cui si viaggia, e determina il veicolo più spesso del numero di passeggeri.",
          },
          {
            id: "access",
            label: "Eventuali esigenze di mobilità o accessibilità",
            detail:
              "Accesso senza gradini, una carrozzina, aiuto con i bagagli o qualcuno che non può camminare a lungo. Cambia l'organizzazione: va nel primo messaggio.",
          },
        ],
      },
      {
        id: "after",
        heading: "Dove andate",
        items: [
          {
            id: "destination",
            label: "La destinazione per esteso",
            detail:
              "Un terminal e non un aeroporto. Una stazione e non una città. Un indirizzo completo e non il nome di un albergo.",
          },
          {
            id: "service",
            label: "Dati del volo o del treno, se ci sono",
            detail:
              "Numero e orario di partenza. Un volo a mezzogiorno e uno alle sei sono viaggi diversi dalla stessa banchina.",
          },
          {
            id: "contact",
            label: "Un numero di cellulare attivo a terra",
            detail:
              "È così che l'incontro si conclude il giorno stesso, soprattutto se lo sbarco va per le lunghe.",
          },
        ],
      },
    ],
    note:
      "Nulla di questo vi impegna. Un preventivo quota un viaggio in una data " +
      "precisa e torna per iscritto, con le modalità dell'incontro, prima di " +
      "qualsiasi conferma.",
  },

  mistakes: {
    id: "mistakes",
    eyebrow: "Che cosa va storto",
    heading: "Gli errori che costano la mattinata",
    lead:
      "Sono tutti frequenti e tutti evitabili con una riga nella richiesta iniziale.",
    items: [
      {
        id: "portname",
        wrong: "Prenotare un transfer per il «porto di Venezia» e basta",
        instead:
          "Indicate il terminal o l'ormeggio riportato nei vostri documenti. Venezia ne ha diversi, in due luoghi distinti, e il solo nome non ne identifica uno.",
      },
      {
        id: "berth",
        wrong: "Dare per scontato che l'auto attenda dove è ormeggiata la nave",
        instead:
          "Considerate ormeggio e punto d'incontro separati finché l'operatore non dice il contrario. A Marghera in particolare i passeggeri vengono gestiti altrove.",
      },
      {
        id: "marghera",
        wrong: "Confondere Marghera e Marittima perché entrambe sono «Venezia»",
        instead:
          "Marghera è sulla terraferma, Marittima nella città storica. Il gestore fa circolare navette gratuite fra le due proprio perché non sono lo stesso posto.",
      },
      {
        id: "shuttle",
        wrong: "Ignorare le istruzioni sulle navette della compagnia",
        instead:
          "Leggetele prima di prenotare qualsiasi cosa. Determinano dove vi troverete fisicamente quando è atteso il transfer: è l'informazione che serve di più all'operatore.",
      },
      {
        id: "hotel",
        wrong: "Dare il nome dell'albergo senza l'indirizzo",
        instead:
          "Inviate l'indirizzo completo. A Venezia la differenza fra un indirizzo sull'isola e uno sulla terraferma è quella fra una breve camminata e una impossibile.",
      },
      {
        id: "luggage",
        wrong: "Non segnalare i bagagli",
        instead:
          "Contate valigie da stiva e bagagli a mano separatamente nella richiesta. Quattro persone con nove valigie richiedono un veicolo diverso da quattro con quattro.",
      },
      {
        id: "access",
        wrong: "Dare per scontato che un autista possa entrare in un'area riservata o pedonale",
        instead:
          "Partite dal presupposto contrario e lasciate che sia l'operatore a dirvi altro. Gran parte di Venezia non ha accesso stradale, e nessun permesso trasforma l'acqua in asfalto.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande prima di un transfer dal porto di Venezia",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Dove incontro l'autista al porto crociere di Venezia?",
        answer:
          "In un punto che l'operatore conferma per la vostra nave e la vostra data. " +
          "Nessuna fonte ufficiale pubblica un luogo di prelievo per auto private, " +
          "taxi o NCC presso gli attracchi crociere di Venezia, quindi non ne " +
          "stampiamo uno. L'accordo vi arriva per iscritto prima dello sbarco.",
      },
      {
        question: "Un'auto privata può prelevare i passeggeri accanto alla nave?",
        answer:
          "Non lo promettiamo, in nessun punto di Venezia. Le pagine del gestore dei " +
          "terminal non trattano i veicoli privati alle banchine, e il regolamento di " +
          "circolazione dell'Autorità portuale riguarda merci e mezzi operativi. " +
          "Considerate banchina e punto d'incontro due luoghi distinti finché " +
          "l'operatore non dice altro.",
      },
      {
        question: "Che cosa succede se la nave attracca a Marghera?",
        answer:
          "Venezia Terminal Passeggeri indica che i passeggeri di una nave ormeggiata " +
          "a Marghera raggiungono il Porto Crociere di Marittima con navette gratuite " +
          "dedicate. Marghera è sulla terraferma e Marittima nella città storica: voi " +
          "e la nave finite la mattina in posti diversi. Indicate quale nomina la " +
          "vostra documentazione quando chiedete un preventivo.",
      },
      {
        question: "La navetta fra Marghera e Marittima è gratuita?",
        answer:
          "Il gestore la descrive come un servizio di navette gratuite dedicate. È " +
          "gestita dal porto e dalla compagnia, non da noi, e non è un transfer " +
          "privato: vi sposta fra strutture portuali, non verso l'albergo, la " +
          "stazione o l'aeroporto.",
      },
      {
        question: "Piazzale Roma è il punto di prelievo del porto crociere?",
        answer:
          "Non come regola, e non lo presentiamo così. Il gestore descrive piazzale " +
          "Roma come la porta d'ingresso alla città storica, collegata all'area " +
          "Marittima dal people mover. È orientamento, non un accordo d'incontro: il " +
          "vostro lo conferma l'operatore.",
      },
      {
        question: "Come organizzo un transfer per l'aeroporto Marco Polo?",
        answer:
          "Inviate nave, data e ora di sbarco, il terminal indicato nei documenti, " +
          "numero e orario del volo e il conteggio di passeggeri e bagagli. Il numero " +
          "del volo fissa terminal e chiusura del check-in; il resto determina veicolo " +
          "e incontro.",
      },
      {
        question: "Posso andare dal terminal crociere a Venezia Santa Lucia?",
        answer:
          "Si può richiedere come qualsiasi altro viaggio, e la pagina sulle stazioni " +
          "spiega che cosa comportano Santa Lucia e Mestre per un veicolo. Come " +
          "sempre, la prima parte del tragitto dipende da dove la nave ormeggia " +
          "davvero.",
      },
      {
        question: "Viaggiamo con molte valigie. Cambia qualcosa?",
        answer:
          "Più di quasi ogni altra cosa che possiate dirci. I gruppi in crociera " +
          "portano spesso più bagagli di quanti il numero suggerisca, ed è questo a " +
          "determinare il veicolo. Contate stiva e cabina separatamente nella " +
          "richiesta, non sulla banchina.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci nave, data e destinazione",
    body:
      "Queste tre righe avviano un preventivo. Aggiungete il terminal indicato nei " +
      "documenti e il volo o il treno all'altro capo, e la risposta potrà confermare " +
      "l'incontro invece di chiedervelo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Venezia", page: "venice" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli, non impieghiamo direttamente gli " +
      "autisti e non abbiamo accordi con compagnie di crociera o gestori di terminal.",
  },
};

export const veniceCruisePort = { en, it };
