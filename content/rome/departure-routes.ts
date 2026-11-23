import type { Locale } from "@/lib/site";
import type { RoutePage } from "../page-types";

/**
 * Leaving Rome for one of its two airports.
 *
 * ── Why these are not the arrival pages reversed ─────────────────────────
 * `content/rome/routes.ts` holds Fiumicino → Rome and Ciampino → Rome. Those
 * are written for someone landing: the flight number lets a driver track the
 * aircraft, and the risk is a delay nobody controls.
 *
 * Going the other way almost nothing carries over. The clock runs backwards
 * from a check-in deadline the traveller is responsible for, the pickup is a
 * hotel door rather than an arrivals hall, and — the part that actually
 * justifies two separate pages — **the two airports regulate arriving
 * vehicles in completely different ways.**
 *
 * ── The contrast these pages are built on ────────────────────────────────
 * Fiumicino's service charter describes two regulated areas: a Controlled
 * Traffic Zone (the Kiss&Go area, for passengers and companions heading to
 * Terminals 1 and 3, with a fifteen-minute transit) and a Limited Traffic
 * Zone closed to general traffic *because it is reserved for taxis, NCC and
 * buses*. A hired car is therefore admitted to the restricted lane.
 *
 * Ciampino is the opposite. ENAC Ordinanza 42/2025 makes NCC collection
 * happen from a buffer car park on Viale R. Ferrario, with a paid ticket, a
 * twenty-minute limit at the pick-up car park and a service sheet to produce
 * on demand. Drop-off is confined to dedicated temporary stopping spaces,
 * with unloading at the stalls in Piazza Leonardo da Vinci.
 *
 * Same city, same company, two incompatible sets of rules. That is why
 * naming the wrong airport is not a small mistake, and it is the spine of
 * the Ciampino page.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances and prices of ours. The charter states a distance
 * from Rome and the ordinance states parking charges; neither is reproduced,
 * because this site does not publish distances or imply our own pricing. The
 * published fixed *taxi* tariff is quoted once, attributed and dated, where
 * a reader is genuinely choosing between a taxi and a booked car.
 */

const fcoEn = {
  text:
    "Fiumicino's two regulated traffic areas, the fifteen-minute Kiss&Go transit, " +
    "the reservation of the Limited Traffic Zone to taxis, NCC and buses, and the " +
    "fixed taxi fare quoted here are published by the airport operator in the ENAC " +
    "service charter for Fiumicino dated 8 May 2026. Read on 23 November 2026:",
  linkText: "the ENAC service charter for Fiumicino, 8 May 2026",
  href: "https://www.enac.gov.it/app/uploads/2026/05/ADR_REL_CartaServizi_FCO_2026_05_08.pdf",
};

const fcoIt = {
  text:
    "Le due aree a traffico regolamentato di Fiumicino, il transito di quindici " +
    "minuti nell'area Kiss&Go, la riserva della Zona a Traffico Limitato a taxi, " +
    "NCC e bus e la tariffa fissa del taxi qui citata sono pubblicate dal gestore " +
    "aeroportuale nella Carta dei Servizi ENAC di Fiumicino dell'8 maggio 2026. " +
    "Consultata il 23 novembre 2026:",
  linkText: "la Carta dei Servizi ENAC di Fiumicino dell'8 maggio 2026",
  href: "https://www.enac.gov.it/app/uploads/2026/05/ADR_REL_CartaServizi_FCO_2026_05_08.pdf",
};

const ciaEn = {
  text:
    "Ciampino's rules for private-hire vehicles — the dedicated temporary stopping " +
    "spaces for setting down, the unloading stalls in Piazza Leonardo da Vinci, the " +
    "buffer car park on Viale R. Ferrario for collections, the twenty-minute limit " +
    "and the service sheet — are set by ENAC Ordinanza n. 42/2025 Lazio of " +
    "11 December 2025, published online on 12 December 2025. Read on " +
    "23 November 2026:",
  linkText: "ENAC Ordinanza 42/2025 Lazio",
  href: "https://www.enac.gov.it/la-normativa/normativa-enac/ordinanza-42-2025-lazio/",
};

const ciaIt = {
  text:
    "Le regole di Ciampino per i veicoli a noleggio con conducente — gli spazi di " +
    "fermata temporanea dedicati per la discesa, gli stalli di scarico in piazza " +
    "Leonardo da Vinci, il parcheggio polmone di viale R. Ferrario per i prelievi, " +
    "il limite di venti minuti e il foglio di servizio — sono stabilite " +
    "dall'Ordinanza ENAC n. 42/2025 Lazio dell'11 dicembre 2025, pubblicata online " +
    "il 12 dicembre 2025. Consultata il 23 novembre 2026:",
  linkText: "Ordinanza ENAC 42/2025 Lazio",
  href: "https://www.enac.gov.it/la-normativa/normativa-enac/ordinanza-42-2025-lazio/",
};

/* ── Rome → Fiumicino ──────────────────────────────────────────────────── */

const romeFcoEn: RoutePage = {
  meta: {
    title: "Rome to Fiumicino Airport Transfer – Book a Private Car",
    description:
      "A private car from Rome to Fiumicino. Departure timing, the airport's two " +
      "regulated zones, and what a booked car may do that a friend's car may not.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Rome",
    to: "Rome Fiumicino Airport (FCO)",
    eyebrow: "Route",
    h1: "Rome to Fiumicino Airport",
    lead:
      "Going out is not coming in reversed. Nobody tracks your aircraft on the way " +
      "to the airport: the deadline is check-in, and you own it. What a booked car " +
      "adds is a fixed collection time at your door and admission to a lane at the " +
      "airport that a private car is not allowed to use.",
    primaryCta: "Request a quote",
    secondaryCta: "About Fiumicino Airport",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance of ours appears here: the operator confirms the arrangement, and the " +
      "price comes to you in writing before anything is confirmed.",
  },

  lead: {
    id: "two-zones",
    eyebrow: "What makes the airport end different",
    heading: "Fiumicino has two regulated areas, and they are not interchangeable",
    text:
      "The airport operator's own service charter describes two controlled areas " +
      "with cameras on both. Which one your vehicle may use depends on what kind of " +
      "vehicle it is — and that is the practical difference between being driven " +
      "and being dropped off by a friend.",
    columns: [
      {
        id: "ztc",
        heading: "Kiss&Go — the Controlled Traffic Zone",
        subheading: "For passengers and the people seeing them off",
        rows: [
          {
            term: "Who it is for",
            detail:
              "The charter describes it as reserved for all departing and arriving passengers and their companions, leading to Terminals 1 and 3.",
          },
          {
            term: "Fifteen minutes",
            detail:
              "The charter states a transit time of fifteen minutes within the area. It is a zone you pass through, not one you wait in.",
          },
          {
            term: "What that means in practice",
            detail:
              "This is the area a friend or relative driving you would use. It suits a quick set-down and nothing longer.",
          },
        ],
      },
      {
        id: "ztl",
        heading: "The Limited Traffic Zone",
        subheading: "Closed to general traffic",
        rows: [
          {
            term: "Who it is reserved for",
            detail:
              "The charter states access is prohibited because the zone is reserved for taxis, NCC — licensed private-hire vehicles — buses, and vehicles authorised by law enforcement.",
          },
          {
            term: "Why it matters to you",
            detail:
              "A booked private-hire car belongs to that category. That is a real difference from the Kiss&Go lane, and it is the clearest practical argument for booking rather than being dropped off.",
          },
          {
            term: "Enforcement",
            detail:
              "Both zones are controlled by an automatic electronic detection system with cameras, so the distinction is enforced rather than advisory.",
          },
        ],
      },
    ],
    source: fcoEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A door in Rome, a terminal at Fiumicino",
    lead:
      "One end is wherever you slept; the other is decided entirely by your flight " +
      "number.",
    from: {
      id: "rome",
      label: "Pickup",
      name: "Rome",
      page: "rome",
      linkText: "Transfers in Rome",
      items: [
        {
          term: "The full address",
          detail:
            "Hotel, apartment or office, with the street. Parts of central Rome are restricted, and the address decides whether the car reaches the door or the nearest lawful point.",
        },
        {
          term: "Collection time, not departure time",
          detail:
            "The operator works the collection back from your check-in deadline. You do not need to calculate it; you need to supply the flight it is calculated from.",
        },
        {
          term: "Early departures",
          detail:
            "Before dawn the city is quieter but the narrow streets are no wider. If you are leaving very early from a restricted address, say so when you ask.",
        },
      ],
    },
    to: {
      id: "fiumicino",
      label: "Drop-off",
      name: "Rome Fiumicino Airport (FCO)",
      page: "fiumicino",
      linkText: "About Fiumicino Airport",
      items: [
        {
          term: "The flight number",
          detail:
            "It settles the terminal and the check-in deadline together. The charter's Kiss&Go area serves Terminals 1 and 3; your flight decides which one you need.",
        },
        {
          term: "Airline and departure time",
          detail:
            "Check-in closing, not take-off, is the real deadline, and it differs by airline and by whether you have hold luggage.",
        },
        {
          term: "What we will not state",
          detail:
            "A kerb, a door number or a walking direction inside the airport. The charter names zones, not meeting spots, and the arrangement is confirmed with the driver.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Each line changes either the price or the collection time. Together they " +
      "turn an exchange of emails into one reply.",
    items: [
      "The flight number and its departure time, so the collection can be timed backwards from check-in.",
      "The full Rome address, with anything the property has told you about restricted-zone access.",
      "Adults and children separately, with the children's ages, so any seat is arranged in advance.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Whether you have hold luggage to check, which changes how early you need to be there.",
      "A mobile number reachable on the morning of travel.",
    ],
    note:
      "Nothing here commits you. A quotation prices one journey on one date, and " +
      "asking for one costs nothing.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked before a departure from Rome",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "How early should the car collect me?",
        answer:
          "The operator advises for your flight, because the honest answer depends on " +
          "the airline, the season, whether you are checking luggage and where in Rome " +
          "you are starting. We publish no blanket figure: a single number would be " +
          "wrong for most of the people reading it.",
      },
      {
        question: "Can the driver come into the airport, or do I walk from a car park?",
        answer:
          "The airport's charter states that the Limited Traffic Zone is reserved for " +
          "taxis, NCC and buses, with general access prohibited. A booked private-hire " +
          "car falls in that category. The exact set-down arrangement is confirmed " +
          "with the driver; we do not publish kerbs or door numbers.",
      },
      {
        question: "What is Kiss&Go, and is that where I will be dropped?",
        answer:
          "Kiss&Go is the Controlled Traffic Zone the charter describes as reserved for " +
          "passengers and their companions, leading to Terminals 1 and 3, with a " +
          "fifteen-minute transit. It is the area someone's own car would use. A " +
          "private-hire vehicle is in the separate reserved category described above.",
      },
      {
        question: "Is it cheaper to take a taxi?",
        answer:
          "There is a published fixed taxi fare for part of this journey: the airport's " +
          "ENAC service charter of 8 May 2026 lists €55 each way between the area " +
          "inside the Aurelian Walls and Fiumicino, including supplements, with other " +
          "fixed fares for other starting points. That is the licensed taxi tariff, not " +
          "a price of ours. We quote individually, and a booked car differs in being " +
          "arranged in advance for a specific time.",
      },
      {
        question: "Which terminal do I need?",
        answer:
          "Your flight number settles it, which is why it is the first thing on the " +
          "list above. The charter describes the Kiss&Go area as serving Terminals 1 " +
          "and 3. Send the flight number and the approach is decided before the day " +
          "rather than at a junction.",
      },
      {
        question: "Can we stop on the way, or collect someone from a second address?",
        answer:
          "Ask when you request the quotation. A second pickup or a stop changes the " +
          "vehicle's time and sometimes the vehicle itself, so it is priced into the " +
          "journey rather than added on the morning.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "fiumicino",
        label: "Rome Fiumicino Airport (FCO)",
        detail: "The airport in full, including both regulated traffic areas.",
      },
      {
        page: "rome",
        label: "Rome",
        detail: "The city hub, and what its own access rules mean for a vehicle.",
      },
      {
        page: "route-fco-rome",
        label: "Fiumicino Airport to Rome",
        detail: "The arrival leg, written for a tracked flight rather than a check-in deadline.",
      },
      {
        page: "route-rome-cia",
        label: "Rome to Ciampino Airport",
        detail: "Rome's other airport, where the rules for a hired car are entirely different.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the flight and the address",
    body:
      "Those two lines are most of a quotation. The flight gives the deadline the " +
      "collection is timed from; the address decides where the car can actually " +
      "reach you.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Fiumicino Airport", page: "fiumicino" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const romeFcoIt: RoutePage = {
  meta: {
    title: "Da Roma all'aeroporto di Fiumicino – Prenota un'auto",
    description:
      "Un'auto privata dal vostro indirizzo a Roma fino a Fiumicino. I tempi della " +
      "partenza, le due zone regolamentate e che cosa può fare un'auto prenotata.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Roma",
    to: "Aeroporto di Roma Fiumicino (FCO)",
    eyebrow: "Tratta",
    h1: "Da Roma all'aeroporto di Fiumicino",
    lead:
      "Partire non è arrivare al contrario. Andando in aeroporto nessuno segue il " +
      "vostro aereo: la scadenza è il check-in, e spetta a voi. Quello che aggiunge " +
      "un'auto prenotata è un orario fisso davanti alla porta e l'accesso a una " +
      "corsia che in aeroporto un'auto privata non può usare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Fiumicino",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono nostri prezzi, durate o distanze: l'operatore conferma " +
      "l'organizzazione e il prezzo vi arriva per iscritto prima di ogni conferma.",
  },

  lead: {
    id: "two-zones",
    eyebrow: "Che cosa cambia dal lato aeroporto",
    heading: "Fiumicino ha due aree regolamentate, e non sono intercambiabili",
    text:
      "La Carta dei Servizi del gestore descrive due aree controllate, entrambe con " +
      "telecamere. Quale possa usare il vostro veicolo dipende da che veicolo è: ed " +
      "è questa la differenza pratica fra farsi accompagnare da un autista e farsi " +
      "lasciare da un amico.",
    columns: [
      {
        id: "ztc",
        heading: "Kiss&Go — la Zona a Traffico Controllato",
        subheading: "Per i passeggeri e per chi li accompagna",
        rows: [
          {
            term: "A chi è riservata",
            detail:
              "La Carta dei Servizi la descrive come riservata a tutti i passeggeri in partenza o in arrivo e ai loro accompagnatori, diretti ai Terminal 1 e 3.",
          },
          {
            term: "Quindici minuti",
            detail:
              "La Carta indica un tempo di transito di quindici minuti all'interno dell'area. È una zona che si attraversa, non in cui si attende.",
          },
          {
            term: "Che cosa comporta in pratica",
            detail:
              "È l'area che userebbe un amico o un parente che vi accompagna. Va bene per una discesa rapida e per nulla di più lungo.",
          },
        ],
      },
      {
        id: "ztl",
        heading: "La Zona a Traffico Limitato",
        subheading: "Chiusa al traffico generale",
        rows: [
          {
            term: "A chi è riservata",
            detail:
              "La Carta indica il divieto d'accesso perché la zona è riservata a taxi, NCC — i veicoli a noleggio con conducente autorizzati — bus e veicoli autorizzati delle Forze dell'Ordine.",
          },
          {
            term: "Perché vi riguarda",
            detail:
              "Un'auto a noleggio con conducente prenotata rientra in quella categoria. È una differenza reale rispetto alla corsia Kiss&Go, ed è l'argomento più concreto per prenotare.",
          },
          {
            term: "I controlli",
            detail:
              "Entrambe le zone sono controllate da un sistema automatico di rilevamento elettronico con telecamere: la distinzione è fatta rispettare, non solo consigliata.",
          },
        ],
      },
    ],
    source: fcoIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Una porta a Roma, un terminal a Fiumicino",
    lead:
      "Da una parte c'è dove avete dormito; dall'altra decide tutto il numero del " +
      "vostro volo.",
    from: {
      id: "rome",
      label: "Punto di prelievo",
      name: "Roma",
      page: "rome",
      linkText: "Transfer a Roma",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Albergo, appartamento o ufficio, con la via. Parti del centro di Roma sono soggette a limitazioni, e l'indirizzo decide se l'auto arrivi alla porta o al punto lecito più vicino.",
        },
        {
          term: "Ora di prelievo, non di partenza",
          detail:
            "L'operatore calcola il prelievo a ritroso dalla chiusura del check-in. Non dovete farlo voi: dovete solo indicare il volo da cui si calcola.",
        },
        {
          term: "Partenze all'alba",
          detail:
            "Prima dell'alba la città è più tranquilla ma i vicoli non sono più larghi. Se partite molto presto da un indirizzo in zona limitata, segnalatelo subito.",
        },
      ],
    },
    to: {
      id: "fiumicino",
      label: "Punto di discesa",
      name: "Aeroporto di Roma Fiumicino (FCO)",
      page: "fiumicino",
      linkText: "Sull'aeroporto di Fiumicino",
      items: [
        {
          term: "Il numero del volo",
          detail:
            "Determina insieme il terminal e la scadenza del check-in. L'area Kiss&Go della Carta dei Servizi serve i Terminal 1 e 3: il volo dice quale vi serve.",
        },
        {
          term: "Compagnia e orario di partenza",
          detail:
            "La scadenza vera è la chiusura del check-in, non il decollo, e cambia con la compagnia e con la presenza di bagagli da stiva.",
        },
        {
          term: "Che cosa non indicheremo",
          detail:
            "Un marciapiede, un numero di porta o un percorso a piedi dentro l'aeroporto. La Carta nomina zone, non punti d'incontro: l'accordo si conferma con l'autista.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Ogni riga cambia il prezzo o l'ora del prelievo. Insieme trasformano uno " +
      "scambio di email in una sola risposta.",
    items: [
      "Il numero del volo e il suo orario di partenza, per calcolare il prelievo a ritroso dal check-in.",
      "L'indirizzo completo a Roma, con quanto la struttura vi ha detto sull'accesso alle zone limitate.",
      "Adulti e bambini separatamente, con le età, così il seggiolino si predispone prima.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Se avete bagagli da imbarcare, perché cambia quanto anticipo serve.",
      "Un numero di cellulare raggiungibile la mattina della partenza.",
    ],
    note:
      "Nulla di questo vi impegna. Un preventivo quota un viaggio in una data " +
      "precisa, e chiederlo non costa nulla.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande prima di una partenza da Roma",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Con quanto anticipo deve passare l'auto?",
        answer:
          "L'operatore vi consiglia per il vostro volo, perché la risposta onesta " +
          "dipende dalla compagnia, dalla stagione, dalla presenza di bagagli da " +
          "imbarcare e da dove vi trovate a Roma. Non pubblichiamo una cifra valida " +
          "per tutti: sarebbe sbagliata per la maggior parte di chi la legge.",
      },
      {
        question: "L'autista può entrare in aeroporto o devo camminare da un parcheggio?",
        answer:
          "La Carta dei Servizi indica che la Zona a Traffico Limitato è riservata a " +
          "taxi, NCC e bus, con divieto d'accesso agli altri. Un'auto a noleggio con " +
          "conducente prenotata rientra in quella categoria. Il punto esatto di " +
          "discesa si conferma con l'autista: non pubblichiamo marciapiedi né numeri " +
          "di porta.",
      },
      {
        question: "Che cos'è il Kiss&Go, ed è lì che scenderò?",
        answer:
          "Il Kiss&Go è la Zona a Traffico Controllato che la Carta descrive come " +
          "riservata ai passeggeri e ai loro accompagnatori, diretta ai Terminal 1 e " +
          "3, con un transito di quindici minuti. È l'area che userebbe l'auto di un " +
          "conoscente. Un veicolo a noleggio con conducente rientra invece nella " +
          "categoria riservata descritta sopra.",
      },
      {
        question: "Conviene di più il taxi?",
        answer:
          "Per una parte di questo tragitto esiste una tariffa fissa pubblicata: la " +
          "Carta dei Servizi ENAC dell'8 maggio 2026 indica 55 euro per tratta fra " +
          "l'area interna alle Mura Aureliane e Fiumicino, supplementi compresi, con " +
          "altre tariffe fisse per altri punti di partenza. È la tariffa del taxi " +
          "autorizzato, non un nostro prezzo. Noi preventiviamo singolarmente, e " +
          "un'auto prenotata si distingue perché è organizzata prima per un'ora precisa.",
      },
      {
        question: "Di quale terminal ho bisogno?",
        answer:
          "Lo determina il numero del volo: per questo è la prima voce dell'elenco qui " +
          "sopra. La Carta descrive l'area Kiss&Go come dedicata ai Terminal 1 e 3. " +
          "Inviate il numero del volo e l'avvicinamento si decide prima, non a un " +
          "bivio.",
      },
      {
        question: "Possiamo fare una sosta o prendere qualcuno a un secondo indirizzo?",
        answer:
          "Chiedetelo quando richiedete il preventivo. Un secondo prelievo o una sosta " +
          "cambiano i tempi del veicolo e a volte il veicolo stesso, quindi si quotano " +
          "dentro il viaggio e non si aggiungono la mattina.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "fiumicino",
        label: "Aeroporto di Roma Fiumicino (FCO)",
        detail: "L'aeroporto per esteso, comprese entrambe le aree a traffico regolamentato.",
      },
      {
        page: "rome",
        label: "Roma",
        detail: "La città, e che cosa comportano per un veicolo le sue regole d'accesso.",
      },
      {
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino a Roma",
        detail: "La tratta d'arrivo, scritta per un volo da seguire e non per un check-in.",
      },
      {
        page: "route-rome-cia",
        label: "Da Roma all'aeroporto di Ciampino",
        detail: "L'altro aeroporto di Roma, dove per un'auto a noleggio valgono regole del tutto diverse.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci il volo e l'indirizzo",
    body:
      "Quelle due righe sono già quasi tutto un preventivo. Il volo dà la scadenza " +
      "da cui si calcola il prelievo; l'indirizzo decide dove l'auto può davvero " +
      "raggiungervi.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Fiumicino", page: "fiumicino" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

/* ── Rome → Ciampino ───────────────────────────────────────────────────── */

const romeCiaEn: RoutePage = {
  meta: {
    title: "Rome to Ciampino Airport Transfer – Book Your Driver",
    description:
      "A private car from Rome to Ciampino. Why naming the wrong Rome airport is " +
      "costly, and the rules a hired car follows at Ciampino rather than Fiumicino.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Rome",
    to: "Rome Ciampino Airport (CIA)",
    eyebrow: "Route",
    h1: "Rome to Ciampino Airport",
    lead:
      "Rome has two airports and they are not near each other. Ciampino is the " +
      "smaller one, used mostly by low-cost airlines, and it regulates hired cars in " +
      "a completely different way from Fiumicino. Naming the wrong one is the most " +
      "expensive mistake available on this journey.",
    primaryCta: "Request a quote",
    secondaryCta: "About Ciampino Airport",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance of ours appears here: the operator confirms the arrangement, and the " +
      "price comes to you in writing before anything is confirmed.",
  },

  lead: {
    id: "not-fiumicino",
    eyebrow: "What makes this route different",
    heading: "Ciampino is not Fiumicino, and the rules prove it",
    text:
      "These are two separate airports with separate rulebooks. The contrast below " +
      "is not trivia — it is why the flight number and the airport name both belong " +
      "in your request, and why a booking made for the wrong one cannot simply be " +
      "redirected.",
    columns: [
      {
        id: "cia",
        heading: "At Ciampino",
        subheading: "ENAC Ordinanza 42/2025, of 11 December 2025",
        rows: [
          {
            term: "Setting down",
            detail:
              "Private-hire vehicles may stop in the restricted zone only in the dedicated temporary stopping spaces, and only for the time strictly necessary to unload passengers and luggage.",
          },
          {
            term: "The unloading stalls",
            detail:
              "The ordinance names the stalls in Piazza Leonardo da Vinci for setting passengers and luggage down, with a defined route afterwards via Via F. Baracca, Via M. Mameli and Viale R. Ferrario.",
          },
          {
            term: "Collecting, by contrast",
            detail:
              "For arrivals, a non-subconcessionaire hired car must wait in the buffer car park on Viale R. Ferrario, pay at the meter, carry a service sheet, and is limited to twenty minutes at the pick-up car park.",
          },
        ],
      },
      {
        id: "fco",
        heading: "At Fiumicino",
        subheading: "For comparison only",
        rows: [
          {
            term: "A reserved lane",
            detail:
              "Fiumicino's charter reserves its Limited Traffic Zone for taxis, NCC and buses, with general access prohibited. There is no buffer car park in that arrangement.",
          },
          {
            term: "A different zone for private cars",
            detail:
              "The separate Kiss&Go area serves departing and arriving passengers and their companions for Terminals 1 and 3, with a fifteen-minute transit.",
          },
          {
            term: "Why the contrast matters",
            detail:
              "Two airports in one city, one operator, two incompatible sets of rules. A driver cannot treat them the same, which is why the booking must name the right one.",
          },
        ],
      },
    ],
    source: ciaEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A door in Rome, a small airport south-east of it",
    lead:
      "The Rome end behaves like any departure. The Ciampino end is where this " +
      "route differs from everything else in the city.",
    from: {
      id: "rome",
      label: "Pickup",
      name: "Rome",
      page: "rome",
      linkText: "Transfers in Rome",
      items: [
        {
          term: "The full address",
          detail:
            "With the street, not just the hotel name. Central Rome has restricted areas of its own, and the address decides where the car can lawfully wait for you.",
        },
        {
          term: "Collection time",
          detail:
            "Timed backwards from check-in closing. Low-cost carriers often close earlier relative to departure than full-service airlines, which is one more reason the flight number matters.",
        },
        {
          term: "Early departures",
          detail:
            "Ciampino handles a great deal of early-morning traffic. If yours is one of them, say so: a pre-dawn collection from a restricted address needs settling in advance.",
        },
      ],
    },
    to: {
      id: "ciampino",
      label: "Drop-off",
      name: "Rome Ciampino Airport (CIA)",
      page: "ciampino",
      linkText: "About Ciampino Airport",
      items: [
        {
          term: "The flight number and the airport name",
          detail:
            "Both. Several airlines fly similar routes from both Rome airports, and the flight number is what removes the ambiguity before a car is dispatched.",
        },
        {
          term: "Where the car may stop",
          detail:
            "In the dedicated temporary stopping spaces the ordinance sets aside, for the time the unloading takes. It is a set-down, not a wait.",
        },
        {
          term: "What we will not state",
          detail:
            "A door, a kerb or a bay number. The ordinance identifies its areas by annexed site drawings, so this page names the rule and leaves the physical detail to the driver.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "The first line on this list matters more here than on any other Rome route.",
    items: [
      "The flight number — this is what confirms Ciampino rather than Fiumicino.",
      "The departure time, and the airline if the flight number is a codeshare.",
      "The full Rome address, with anything the property has said about restricted access.",
      "Adults and children separately, with ages, so any child seat is arranged in advance.",
      "Hold cases and cabin bags counted separately, including sports equipment or instruments.",
      "A mobile number reachable on the morning of travel.",
    ],
    note:
      "If you are not certain which Rome airport you are flying from, send the " +
      "flight number and let the operator confirm it. That is a far cheaper way to " +
      "find out than arriving at the wrong one.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about Rome's second airport",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "How do I know whether I am flying from Ciampino or Fiumicino?",
        answer:
          "Check the three-letter code on your booking: CIA is Ciampino, FCO is " +
          "Fiumicino. If the booking says only Rome, the airline's own flight details " +
          "name the airport. They are two separate airports on opposite sides of the " +
          "city, and a transfer booked for one cannot simply be redirected to the other.",
      },
      {
        question: "Where will the driver set me down at Ciampino?",
        answer:
          "In the dedicated temporary stopping spaces the ENAC ordinance sets aside " +
          "for private-hire vehicles, for the time the unloading takes. The ordinance " +
          "also names the stalls in Piazza Leonardo da Vinci for setting down " +
          "passengers and luggage. We do not publish a bay number: the ordinance " +
          "identifies its areas by annexed drawings, and the driver confirms the detail.",
      },
      {
        question: "Why can the car wait at Fiumicino but not at Ciampino?",
        answer:
          "Because the two airports are regulated separately. Fiumicino's charter " +
          "reserves a traffic zone for taxis, NCC and buses. Ciampino's ordinance " +
          "routes hired cars through a buffer car park on Viale R. Ferrario for " +
          "collections, with a twenty-minute limit at the pick-up car park and a " +
          "service sheet to produce on request. Same city, different rulebooks.",
      },
      {
        question: "Is Ciampino closer to the centre than Fiumicino?",
        answer:
          "They sit on opposite sides of Rome, and we publish no distance or journey " +
          "time for either, because traffic and the time of day change the answer more " +
          "than the map does. What matters for your booking is which airport your " +
          "flight actually uses, not which looks nearer.",
      },
      {
        question: "My flight is very early. Can a car still collect me?",
        answer:
          "Ask when you request the quotation, giving the flight and the address. " +
          "Pre-dawn departures are routine at Ciampino, but a very early collection " +
          "from a restricted-access street is worth settling in advance rather than at " +
          "five in the morning.",
      },
      {
        question: "What if my flight is moved to the other airport?",
        answer:
          "Tell the operator as soon as the airline tells you. It is a different " +
          "journey on different rules, not an adjustment, so it needs re-quoting " +
          "rather than redirecting. The earlier it is known, the more straightforward " +
          "that is.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "ciampino",
        label: "Rome Ciampino Airport (CIA)",
        detail: "The airport in full, and how it differs from Fiumicino.",
      },
      {
        page: "rome",
        label: "Rome",
        detail: "The city hub, and what its own access rules mean for a vehicle.",
      },
      {
        page: "route-cia-rome",
        label: "Ciampino Airport to Rome",
        detail: "The arrival leg, where the rules for collecting a passenger apply instead.",
      },
      {
        page: "route-rome-fco",
        label: "Rome to Fiumicino Airport",
        detail: "The other departure, with an entirely different set of airport rules.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the flight number first",
    body:
      "It confirms the airport, the terminal and the deadline in one line. With the " +
      "Rome address alongside it, the collection time and the set-down can both be " +
      "settled before the morning of travel.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Ciampino Airport", page: "ciampino" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const romeCiaIt: RoutePage = {
  meta: {
    title: "Da Roma all'aeroporto di Ciampino – Prenota l'autista",
    description:
      "Un'auto privata da Roma a Ciampino. Perché sbagliare aeroporto costa caro e " +
      "quali regole segue a Ciampino un'auto a noleggio, diverse da Fiumicino.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Roma",
    to: "Aeroporto di Roma Ciampino (CIA)",
    eyebrow: "Tratta",
    h1: "Da Roma all'aeroporto di Ciampino",
    lead:
      "Roma ha due aeroporti e non sono vicini fra loro. Ciampino è il più piccolo, " +
      "usato soprattutto dalle compagnie low cost, e disciplina le auto a noleggio in " +
      "modo del tutto diverso da Fiumicino. Sbagliare aeroporto è l'errore più caro " +
      "possibile su questo tragitto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Ciampino",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono nostri prezzi, durate o distanze: l'operatore conferma " +
      "l'organizzazione e il prezzo vi arriva per iscritto prima di ogni conferma.",
  },

  lead: {
    id: "not-fiumicino",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Ciampino non è Fiumicino, e le regole lo dimostrano",
    text:
      "Sono due aeroporti distinti con due regolamenti distinti. Il confronto qui " +
      "sotto non è una curiosità: è il motivo per cui nella richiesta servono sia il " +
      "numero del volo sia il nome dell'aeroporto, e per cui una prenotazione fatta " +
      "per quello sbagliato non si può semplicemente dirottare.",
    columns: [
      {
        id: "cia",
        heading: "A Ciampino",
        subheading: "Ordinanza ENAC 42/2025, dell'11 dicembre 2025",
        rows: [
          {
            term: "La discesa",
            detail:
              "I veicoli a noleggio con conducente possono sostare in ZTL solo negli spazi di fermata temporanea dedicati, e solo per il tempo strettamente necessario a far scendere passeggeri e bagagli.",
          },
          {
            term: "Gli stalli di scarico",
            detail:
              "L'ordinanza indica gli stalli di piazza Leonardo da Vinci per far scendere passeggeri e bagagli, con un percorso prestabilito dopo: via F. Baracca, via M. Mameli, viale R. Ferrario.",
          },
          {
            term: "Il prelievo, al contrario",
            detail:
              "Per gli arrivi, un'auto a noleggio non subconcessionaria deve attendere nel parcheggio polmone di viale R. Ferrario, pagare al parcometro, avere il foglio di servizio e rispettare venti minuti al parcheggio di accosto.",
          },
        ],
      },
      {
        id: "fco",
        heading: "A Fiumicino",
        subheading: "Solo per confronto",
        rows: [
          {
            term: "Una corsia riservata",
            detail:
              "La Carta dei Servizi di Fiumicino riserva la sua Zona a Traffico Limitato a taxi, NCC e bus, con divieto d'accesso agli altri. In quell'assetto non esiste un parcheggio polmone.",
          },
          {
            term: "Una zona diversa per le auto private",
            detail:
              "L'area Kiss&Go, separata, serve i passeggeri in partenza e in arrivo e i loro accompagnatori per i Terminal 1 e 3, con un transito di quindici minuti.",
          },
          {
            term: "Perché il confronto conta",
            detail:
              "Due aeroporti in una città, un solo gestore, due regolamenti incompatibili. Un autista non può trattarli allo stesso modo: per questo la prenotazione deve indicare quello giusto.",
          },
        ],
      },
    ],
    source: ciaIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Una porta a Roma, un piccolo aeroporto a sud-est",
    lead:
      "Il capo romano si comporta come ogni partenza. È il capo di Ciampino a " +
      "distinguere questa tratta da ogni altra in città.",
    from: {
      id: "rome",
      label: "Punto di prelievo",
      name: "Roma",
      page: "rome",
      linkText: "Transfer a Roma",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Con la via, non il solo nome dell'albergo. Il centro di Roma ha aree soggette a limitazioni, e l'indirizzo decide dove l'auto possa legalmente attendervi.",
        },
        {
          term: "L'ora del prelievo",
          detail:
            "Si calcola a ritroso dalla chiusura del check-in. Le compagnie low cost chiudono spesso prima rispetto all'orario di partenza: un motivo in più perché il numero del volo conti.",
        },
        {
          term: "Partenze all'alba",
          detail:
            "Ciampino muove moltissimo traffico di prima mattina. Se è il vostro caso, ditelo: un prelievo prima dell'alba da una strada ad accesso limitato va definito in anticipo.",
        },
      ],
    },
    to: {
      id: "ciampino",
      label: "Punto di discesa",
      name: "Aeroporto di Roma Ciampino (CIA)",
      page: "ciampino",
      linkText: "Sull'aeroporto di Ciampino",
      items: [
        {
          term: "Numero del volo e nome dell'aeroporto",
          detail:
            "Entrambi. Diverse compagnie operano rotte simili da tutti e due gli aeroporti di Roma, e il numero del volo elimina l'ambiguità prima che parta un'auto.",
        },
        {
          term: "Dove l'auto può fermarsi",
          detail:
            "Negli spazi di fermata temporanea dedicati previsti dall'ordinanza, per il tempo dello scarico. È una fermata, non un'attesa.",
        },
        {
          term: "Che cosa non indicheremo",
          detail:
            "Una porta, un marciapiede o un numero di stallo. L'ordinanza individua le aree tramite planimetrie allegate: qui enunciamo la regola e lasciamo il dettaglio all'autista.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "La prima voce di questo elenco conta qui più che in qualsiasi altra tratta romana.",
    items: [
      "Il numero del volo: è ciò che conferma Ciampino e non Fiumicino.",
      "L'orario di partenza, e la compagnia se il numero del volo è in code share.",
      "L'indirizzo completo a Roma, con quanto la struttura vi ha detto sull'accesso limitato.",
      "Adulti e bambini separatamente, con le età, così il seggiolino si predispone prima.",
      "Valigie da stiva e bagagli a mano contati a parte, attrezzatura sportiva e strumenti compresi.",
      "Un numero di cellulare raggiungibile la mattina della partenza.",
    ],
    note:
      "Se non siete certi da quale aeroporto di Roma partite, inviate il numero del " +
      "volo e lasciate che lo confermi l'operatore. È un modo molto meno costoso di " +
      "scoprirlo rispetto ad arrivare a quello sbagliato.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sul secondo aeroporto di Roma",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Come faccio a sapere se parto da Ciampino o da Fiumicino?",
        answer:
          "Controllate il codice di tre lettere sulla prenotazione: CIA è Ciampino, " +
          "FCO è Fiumicino. Se la prenotazione dice solo Roma, i dettagli del volo " +
          "della compagnia indicano l'aeroporto. Sono due scali distinti su lati " +
          "opposti della città, e un transfer prenotato per l'uno non si può " +
          "semplicemente dirottare sull'altro.",
      },
      {
        question: "Dove mi farà scendere l'autista a Ciampino?",
        answer:
          "Negli spazi di fermata temporanea che l'ordinanza ENAC riserva ai veicoli a " +
          "noleggio con conducente, per il tempo dello scarico. L'ordinanza indica " +
          "anche gli stalli di piazza Leonardo da Vinci per far scendere passeggeri e " +
          "bagagli. Non pubblichiamo un numero di stallo: l'ordinanza individua le aree " +
          "con planimetrie allegate, e il dettaglio lo conferma l'autista.",
      },
      {
        question: "Perché a Fiumicino l'auto può attendere e a Ciampino no?",
        answer:
          "Perché i due aeroporti sono disciplinati separatamente. La Carta di " +
          "Fiumicino riserva una zona di traffico a taxi, NCC e bus. L'ordinanza di " +
          "Ciampino fa passare le auto a noleggio dal parcheggio polmone di viale R. " +
          "Ferrario per i prelievi, con venti minuti al parcheggio di accosto e un " +
          "foglio di servizio da esibire su richiesta. Stessa città, regolamenti diversi.",
      },
      {
        question: "Ciampino è più vicino al centro di Fiumicino?",
        answer:
          "Si trovano su lati opposti di Roma, e per nessuno dei due pubblichiamo " +
          "distanze o durate, perché il traffico e l'ora cambiano la risposta più della " +
          "cartina. Per la vostra prenotazione conta quale aeroporto usa davvero il " +
          "vostro volo, non quale sembri più vicino.",
      },
      {
        question: "Il mio volo è molto presto. Un'auto può comunque venire a prendermi?",
        answer:
          "Chiedetelo in fase di preventivo, indicando volo e indirizzo. Le partenze " +
          "prima dell'alba sono abituali a Ciampino, ma un prelievo molto mattutino da " +
          "una strada ad accesso limitato conviene definirlo prima, non alle cinque del " +
          "mattino.",
      },
      {
        question: "E se il volo venisse spostato sull'altro aeroporto?",
        answer:
          "Avvisate l'operatore appena ve lo comunica la compagnia. È un viaggio " +
          "diverso con regole diverse, non una modifica: va ripreventivato, non " +
          "dirottato. Prima lo si sa, più semplice è.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "ciampino",
        label: "Aeroporto di Roma Ciampino (CIA)",
        detail: "L'aeroporto per esteso, e in che cosa differisce da Fiumicino.",
      },
      {
        page: "rome",
        label: "Roma",
        detail: "La città, e che cosa comportano per un veicolo le sue regole d'accesso.",
      },
      {
        page: "route-cia-rome",
        label: "Dall'aeroporto di Ciampino a Roma",
        detail: "La tratta d'arrivo, dove valgono invece le regole sul prelievo dei passeggeri.",
      },
      {
        page: "route-rome-fco",
        label: "Da Roma all'aeroporto di Fiumicino",
        detail: "L'altra partenza, con un insieme di regole aeroportuali del tutto diverso.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci prima di tutto il numero del volo",
    body:
      "Conferma in una riga l'aeroporto, il terminal e la scadenza. Con accanto " +
      "l'indirizzo a Roma, l'ora del prelievo e il punto di discesa si definiscono " +
      "entrambi prima della mattina della partenza.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Ciampino", page: "ciampino" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

export const routeRomeFco: Record<Locale, RoutePage> = {
  en: romeFcoEn,
  it: romeFcoIt,
};

export const routeRomeCia: Record<Locale, RoutePage> = {
  en: romeCiaEn,
  it: romeCiaIt,
};
