import type { TivoliDestination } from "./types";

/**
 * Tivoli.
 *
 * ── Written under a sourcing failure, and saying so ──────────────────────
 * Every official source for Tivoli was unreachable on 23 November 2026.
 * villae.cultura.gov.it and cultura.gov.it did not respond at all; UNESCO,
 * comune.tivoli.rm.it and levillae.com refused automated requests. Six
 * attempts, six failures, checked twice — once through a fetching agent and
 * once directly.
 *
 * So this page carries no address, no distance, no opening hours, no ticket
 * information, no parking arrangement, no accessibility provision and no
 * claim about a shuttle between the two sites. Not one of those could be
 * read from a publisher, and the house rule is that an unread source is not
 * a source.
 *
 * ── What is left is the part that matters for a transfer ─────────────────
 * Tivoli's two famous places are two different destinations, and a car
 * going to one is not going to the other. That is the fact a booking turns
 * on, it comes from the owner's brief rather than from a publisher, and it
 * is stated as a consequence for the journey rather than as geography this
 * page cannot evidence.
 *
 * The `unverified` band tells the reader all of this in plain words. It is
 * not boilerplate and should not be deleted to tidy the page: it is the
 * difference between a page that is thin and a page that is dishonest.
 */

const en: TivoliDestination = {
  meta: {
    title: "Tivoli Transfers – Villa d'Este and Hadrian's Villa",
    description:
      "Tivoli has two famous destinations and they are not the same address. What " +
      "that means when booking a private transfer, and what to send with a request.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Lazio",
    h1: "Transfers to Tivoli",
    lead:
      "Tivoli is booked as one destination and visited as two. Villa d'Este and " +
      "Villa Adriana are separate places with separate entrances, and a car sent to " +
      "one has not taken you to the other. Deciding which you mean is the whole of " +
      "what this page is for.",
    primaryCta: "Request a quotation",
    secondaryCta: "Rome to Tivoli",
    facts: [
      { label: "Region", value: "Lazio, east of Rome" },
      { label: "Two destinations", value: "Villa d'Este and Villa Adriana" },
      { label: "What decides the drop-off", value: "Which of the two you name" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "Why this page is short",
    heading: "One town, two destinations, one decision",
    paragraphs: [
      "Most pages about Tivoli are written for people deciding whether to go. This one is written for people who have already decided and are arranging the journey, which is a much narrower question: where, exactly, should the car stop?",
      "The answer is not obvious, because the two places people travel to Tivoli for are not the same place. A booking that says only \"Tivoli\" leaves that open, and it is a poor thing to discover with your day already running.",
    ],
  },

  sites: {
    id: "sites",
    eyebrow: "The distinction that matters",
    heading: "Villa d'Este and Villa Adriana are not interchangeable",
    lead:
      "Both are in the comune of Tivoli and both are reasons people make this " +
      "journey. For a transfer they behave as two separate destinations.",
    caption: "The two Tivoli destinations, compared for the purpose of a transfer",
    columns: ["Destination", "Also called", "What it means for the booking"],
    rows: [
      {
        id: "este",
        cells: [
          "Villa d'Este",
          "The Renaissance villa and its gardens",
          "A destination in its own right, with its own entrance. Naming it is what sends the car there rather than to the other site.",
        ],
      },
      {
        id: "adriana",
        cells: [
          "Villa Adriana",
          "Hadrian's Villa",
          "The Roman imperial complex, a separate destination with a separate entrance. Not reached by being dropped at Villa d'Este.",
        ],
      },
      {
        id: "both",
        cells: [
          "Both in one day",
          "Two stops, one journey",
          "Possible to request, but it is two destinations rather than one, so say so when you ask and it can be quoted as such.",
        ],
      },
    ],
    note:
      "If you are not sure which of the two your plans involve, check your tickets " +
      "or your itinerary before requesting the transfer. It costs nothing to " +
      "confirm beforehand and a great deal of the day to discover afterwards.",
  },

  unverified: {
    id: "unverified",
    heading: "Check visiting details with the sites themselves",
    body:
      "Opening times, tickets, parking, accessibility and the addresses of the two " +
      "entrances are not on this page, and that is deliberate rather than an " +
      "oversight. When it was written, not one of the six official sources we tried " +
      "could be read: the Villae institute site and the Ministry of Culture did not " +
      "respond, while UNESCO, the Comune di Tivoli and levillae.com refused " +
      "automated requests. Anything printed here would have come from memory rather " +
      "than from a publisher, and a visiting time remembered wrongly is worse than " +
      "one we never gave.",
    note:
      "Those details change, and the two sites' own official channels are the only " +
      "place they stay current. What this page can tell you is the part that decides " +
      "the journey: which of the two destinations the car is going to, and what to " +
      "send so it goes to the right one.",
  },

  planning: {
    id: "planning",
    eyebrow: "For the journey itself",
    heading: "What a transfer to Tivoli needs from you",
    lead:
      "These are the details that change the arrangement, and none of them depends " +
      "on information this page is missing.",
    items: [
      {
        term: "Which of the two destinations",
        detail:
          "Villa d'Este, Villa Adriana, or both. This is the first line of the request and the one that decides where the car actually goes.",
      },
      {
        term: "Where in Rome you are starting",
        detail:
          "A full address, not a district. Parts of central Rome are restricted, and where the car can collect you is decided by the street rather than the neighbourhood.",
      },
      {
        term: "One way, or there and back",
        detail:
          "A one-way transfer and a return are different arrangements and are priced differently. If you want the car to bring you back, say so when you ask rather than on the day.",
      },
      {
        term: "How many people, and what they are carrying",
        detail:
          "Adults and children separately, with the children's ages for seats. Luggage matters less on a day trip than on an airport run, but a group with bags still decides the vehicle.",
      },
      {
        term: "What this is not",
        detail:
          "We arrange transport. No guide, no admission, no itinerary and no commentary is included, and none is implied anywhere on this site.",
      },
    ],
  },

  onward: {
    id: "onward",
    eyebrow: "Related",
    heading: "The journey, and the region around it",
    lead: "Pages that exist, each written for its own purpose.",
    items: [
      {
        id: "route-rome-tivoli",
        page: "route-rome-tivoli",
        label: "Rome to Tivoli",
        detail: "The transfer itself: pickup in Rome, and naming the right destination at the far end.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfers in Rome",
        detail: "The city you are most likely starting from, and what its access rules mean for a pickup.",
      },
      {
        id: "frascati",
        page: "frascati",
        label: "Frascati",
        detail: "The other day journey out of Rome, in the hills on the opposite side of the city.",
      },
      {
        id: "lazio",
        page: "lazio",
        label: "Transfers in Lazio",
        detail: "The region, and everything else we arrange in it.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about getting to Tivoli",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Are Villa d'Este and Villa Adriana in the same place?",
        answer:
          "No. They are two separate destinations with separate entrances, and a " +
          "transfer to one does not take you to the other. If your day involves both, " +
          "say so when you request the quotation so it can be arranged as two stops " +
          "rather than one drop-off.",
      },
      {
        question: "Which one should I book the car to?",
        answer:
          "The one your tickets or itinerary are for. If you are visiting both, name " +
          "both. We cannot choose for you, and a booking that says only \"Tivoli\" " +
          "leaves the single most important detail of the journey undecided.",
      },
      {
        question: "Do you publish opening hours or ticket prices?",
        answer:
          "No. We could not read a single official source for Tivoli when this page " +
          "was written, and we will not reproduce times or prices from memory. Check " +
          "the sites' own official channels, which are the only reliable source and " +
          "the only one that stays current.",
      },
      {
        question: "Is this a tour?",
        answer:
          "No. It is a private transfer: a vehicle and a driver, taking you from one " +
          "address to another. There is no guide, no admission and no itinerary, and " +
          "nothing on this site should be read as offering them.",
      },
      {
        question: "Can the car wait while we visit, and bring us back?",
        answer:
          "Ask when you request the quotation and describe what you have in mind. A " +
          "return journey and any waiting are part of what is quoted rather than " +
          "assumed, and the operator confirms what is possible for your date in " +
          "writing before anything is agreed.",
      },
      {
        question: "How long does the journey from Rome take?",
        answer:
          "We publish no figure. Traffic leaving Rome varies enormously with the hour " +
          "and the day, and a single number on a page would be read as a promise. The " +
          "operator advises for your date and your pickup time.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Name the destination and the pickup",
    body:
      "Villa d'Este or Villa Adriana, your Rome address, and the date. With those " +
      "three the quotation can be specific, and the car goes where you actually " +
      "intended.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Rome to Tivoli", page: "route-rome-tivoli" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No guide, admission or itinerary is included.",
  },
};

const it: TivoliDestination = {
  meta: {
    title: "Transfer per Tivoli – Villa d'Este e Villa Adriana",
    description:
      "Tivoli ha due destinazioni famose e non sono lo stesso indirizzo. Che cosa " +
      "comporta per un transfer privato e che cosa inviare con la richiesta.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Lazio",
    h1: "Transfer per Tivoli",
    lead:
      "Tivoli si prenota come una destinazione e si visita come due. Villa d'Este e " +
      "Villa Adriana sono luoghi distinti con ingressi distinti, e un'auto mandata " +
      "all'uno non vi ha portati all'altro. Decidere quale intendete è tutto ciò per " +
      "cui questa pagina esiste.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Da Roma a Tivoli",
    facts: [
      { label: "Regione", value: "Lazio, a est di Roma" },
      { label: "Due destinazioni", value: "Villa d'Este e Villa Adriana" },
      { label: "Che cosa decide la discesa", value: "Quale delle due indicate" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "Perché questa pagina è breve",
    heading: "Un paese, due destinazioni, una decisione",
    paragraphs: [
      "Quasi tutte le pagine su Tivoli sono scritte per chi deve decidere se andarci. Questa è scritta per chi ha già deciso e sta organizzando il viaggio, che è una domanda molto più stretta: dove, esattamente, deve fermarsi l'auto?",
      "La risposta non è ovvia, perché i due luoghi per cui si va a Tivoli non sono lo stesso luogo. Una prenotazione che dice soltanto «Tivoli» lascia la questione aperta, ed è una brutta cosa da scoprire con la giornata già avviata.",
    ],
  },

  sites: {
    id: "sites",
    eyebrow: "La distinzione che conta",
    heading: "Villa d'Este e Villa Adriana non sono intercambiabili",
    lead:
      "Entrambe sono nel comune di Tivoli ed entrambe sono motivi per cui si fa " +
      "questo viaggio. Per un transfer si comportano come due destinazioni distinte.",
    caption: "Le due destinazioni di Tivoli, a confronto ai fini di un transfer",
    columns: ["Destinazione", "Detta anche", "Che cosa comporta per la prenotazione"],
    rows: [
      {
        id: "este",
        cells: [
          "Villa d'Este",
          "La villa rinascimentale e i suoi giardini",
          "Una destinazione a sé, con un proprio ingresso. Indicarla è ciò che manda l'auto lì e non all'altro sito.",
        ],
      },
      {
        id: "adriana",
        cells: [
          "Villa Adriana",
          "La villa di Adriano",
          "Il complesso imperiale romano, destinazione distinta con ingresso distinto. Non si raggiunge scendendo a Villa d'Este.",
        ],
      },
      {
        id: "both",
        cells: [
          "Entrambe in giornata",
          "Due tappe, un viaggio",
          "Si può richiedere, ma sono due destinazioni e non una: ditelo quando scrivete e si preventiva come tale.",
        ],
      },
    ],
    note:
      "Se non siete certi di quale delle due riguardi i vostri programmi, " +
      "controllate biglietti o itinerario prima di richiedere il transfer. " +
      "Confermarlo prima non costa nulla; scoprirlo dopo costa gran parte della " +
      "giornata.",
  },

  unverified: {
    id: "unverified",
    heading: "Verificate gli orari e i biglietti con i siti stessi",
    body:
      "Orari di apertura, biglietti, parcheggi, accessibilità e gli indirizzi dei due " +
      "ingressi non compaiono in questa pagina: è una scelta, non una dimenticanza. " +
      "Quando è stata scritta, nessuna delle sei fonti ufficiali che abbiamo provato " +
      "era leggibile: il sito dell'istituto Villae e quello del Ministero della " +
      "Cultura non hanno risposto, mentre UNESCO, il Comune di Tivoli e levillae.com " +
      "hanno rifiutato le richieste automatiche. Qualunque dato avessimo scritto " +
      "sarebbe venuto dalla memoria e non da chi lo pubblica, e un orario ricordato " +
      "male è peggio di un orario mai dato.",
    note:
      "Quei dettagli cambiano, e i canali ufficiali dei due siti sono l'unico posto " +
      "in cui restano aggiornati. Quello che questa pagina può dirvi è la parte che " +
      "decide il viaggio: a quale delle due destinazioni va l'auto, e che cosa " +
      "inviare perché vada a quella giusta.",
  },

  planning: {
    id: "planning",
    eyebrow: "Per il viaggio in sé",
    heading: "Che cosa serve a un transfer per Tivoli",
    lead:
      "Sono i dati che cambiano l'organizzazione, e nessuno dipende dalle " +
      "informazioni che a questa pagina mancano.",
    items: [
      {
        term: "Quale delle due destinazioni",
        detail:
          "Villa d'Este, Villa Adriana o entrambe. È la prima riga della richiesta e quella che decide dove l'auto vada davvero.",
      },
      {
        term: "Da dove partite a Roma",
        detail:
          "Un indirizzo completo, non un quartiere. Parti del centro sono soggette a limitazioni, e dove l'auto può prelevarvi lo decide la via, non la zona.",
      },
      {
        term: "Solo andata o andata e ritorno",
        detail:
          "Un transfer di sola andata e uno con ritorno sono organizzazioni diverse e si preventivano in modo diverso. Se volete che l'auto vi riporti, ditelo subito e non il giorno stesso.",
      },
      {
        term: "Quante persone, e con che cosa",
        detail:
          "Adulti e bambini separatamente, con le età per i seggiolini. In gita il bagaglio conta meno che su una tratta aeroportuale, ma un gruppo con borse determina comunque il veicolo.",
      },
      {
        term: "Che cosa non è",
        detail:
          "Organizziamo trasporto. Nessuna guida, nessun biglietto d'ingresso, nessun itinerario e nessun commento sono compresi, e in nessun punto di questo sito se ne lascia intendere la presenza.",
      },
    ],
  },

  onward: {
    id: "onward",
    eyebrow: "Collegate",
    heading: "Il viaggio, e la regione attorno",
    lead: "Pagine che esistono, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "route-rome-tivoli",
        page: "route-rome-tivoli",
        label: "Da Roma a Tivoli",
        detail: "Il transfer in sé: il prelievo a Roma e come indicare la destinazione giusta all'arrivo.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfer a Roma",
        detail: "La città da cui con ogni probabilità partite, e che cosa comportano per il prelievo le sue regole d'accesso.",
      },
      {
        id: "frascati",
        page: "frascati",
        label: "Frascati",
        detail: "L'altra gita fuori Roma, sui colli dal lato opposto della città.",
      },
      {
        id: "lazio",
        page: "lazio",
        label: "Transfer nel Lazio",
        detail: "La regione, e tutto il resto di ciò che vi organizziamo.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su come arrivare a Tivoli",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Villa d'Este e Villa Adriana sono nello stesso posto?",
        answer:
          "No. Sono due destinazioni distinte con ingressi distinti, e un transfer " +
          "verso l'una non vi porta all'altra. Se la vostra giornata le comprende " +
          "entrambe, ditelo quando richiedete il preventivo, così si organizza come " +
          "due tappe e non come una sola discesa.",
      },
      {
        question: "A quale delle due devo far prenotare l'auto?",
        answer:
          "A quella per cui avete biglietti o itinerario. Se le visitate entrambe, " +
          "indicatele entrambe. Non possiamo sceglierlo noi, e una prenotazione che " +
          "dice solo «Tivoli» lascia indeciso il dettaglio più importante del viaggio.",
      },
      {
        question: "Pubblicate orari di apertura o prezzi dei biglietti?",
        answer:
          "No. Quando questa pagina è stata scritta non siamo riusciti a leggere " +
          "nemmeno una fonte ufficiale su Tivoli, e non riportiamo orari o prezzi a " +
          "memoria. Consultate i canali ufficiali dei due siti: sono l'unica fonte " +
          "affidabile e l'unica che resti aggiornata.",
      },
      {
        question: "È una visita guidata?",
        answer:
          "No. È un transfer privato: un veicolo e un autista che vi portano da un " +
          "indirizzo a un altro. Non ci sono guida, biglietti d'ingresso né " +
          "itinerario, e nulla in questo sito va letto come se li offrisse.",
      },
      {
        question: "L'auto può aspettarci durante la visita e riportarci indietro?",
        answer:
          "Chiedetelo in fase di preventivo descrivendo quello che avete in mente. Il " +
          "ritorno ed eventuali attese fanno parte di ciò che viene preventivato e " +
          "non si danno per scontati: l'operatore conferma per iscritto che cosa sia " +
          "possibile per la vostra data prima di qualsiasi accordo.",
      },
      {
        question: "Quanto dura il viaggio da Roma?",
        answer:
          "Non pubblichiamo una cifra. Il traffico in uscita da Roma varia moltissimo " +
          "con l'ora e con il giorno, e un numero secco verrebbe letto come una " +
          "promessa. L'operatore vi consiglia per la vostra data e il vostro orario " +
          "di prelievo.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicate la destinazione e il prelievo",
    body:
      "Villa d'Este o Villa Adriana, il vostro indirizzo a Roma e la data. Con questi " +
      "tre dati il preventivo può essere preciso, e l'auto va dove intendevate davvero.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Da Roma a Tivoli", page: "route-rome-tivoli" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non sono compresi guida, biglietti d'ingresso né itinerario.",
  },
};

export const tivoli = { en, it };
