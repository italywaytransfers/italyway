import type { FrascatiDestination } from "./types";

/**
 * Frascati.
 *
 * ── What is sourced, and what is not ─────────────────────────────────────
 * Two sources could be read on 23 November 2026. The Parco regionale dei
 * Castelli Romani exists and publishes its own site; VisitLazio, the
 * Regione Lazio's official tourism site, names the Unione dei Comuni dei
 * Castelli Romani and its "Castelli Romani | Castelli Domani" bid for
 * Italian Capital of Culture 2029. Those establish the Castelli Romani as a
 * real administrative and territorial grouping rather than a tourist
 * coinage, and that is all they are used for here.
 *
 * The Comune di Frascati's site did not respond, so nothing is stated about
 * a limited-traffic zone, parking, coach access or municipal visitor
 * information. villaaldobrandini.it is a wine producer's site, not a
 * heritage body: it describes the villa as built by Cardinal Pietro
 * Aldobrandini and as the residence of the Aldobrandini princes and a venue
 * for events, and it does not say the villa or its gardens are open to the
 * public. That distinction is preserved below — the page says the villa is
 * privately held and tells the reader to check access directly, which is
 * true and useful, rather than asserting an opening it cannot evidence.
 *
 * ── No limitation band, deliberately ─────────────────────────────────────
 * Tivoli carries an explicit block about unreadable sources because its
 * whole page turns on that gap. Repeating it here would be a tic rather
 * than a device. Where this page cannot state something it says "check
 * directly", in the voice of advice. See `access.checkDirect`.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances, fares, opening hours, ticket prices, ZTL hours,
 * parking locations, restaurant or winery recommendations, and any claim
 * that a particular villa or cellar can be visited.
 */

const en: FrascatiDestination = {
  meta: {
    title: "Frascati Transfers – Castelli Romani Hill Town Near Rome",
    description:
      "Frascati sits in the hills south-east of Rome. What takes visitors there, " +
      "and the address details that decide where a private car can set you down.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Lazio",
    h1: "Transfers to Frascati",
    lead:
      "Frascati is one of the hill towns in the Castelli Romani, close enough to " +
      "Rome to be a half-day and far enough to feel like leaving the city. For a " +
      "transfer the useful question is not what to see but where, precisely, the " +
      "car should stop — which in a hill town is rarely the address you first think of.",
    primaryCta: "Request a quotation",
    secondaryCta: "Rome to Frascati",
    facts: [
      { label: "Where", value: "The hills south-east of Rome" },
      { label: "Area", value: "Castelli Romani" },
      { label: "What decides the drop-off", value: "A street address, not the town name" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "Why people come",
    heading: "A hill town within reach of the city",
    paragraphs: [
      "Frascati is one of a group of towns in the hills south-east of Rome known as the Castelli Romani. The grouping is not only a tourist label: the area has its own regional park, the Parco regionale dei Castelli Romani, and its comuni act together as the Unione dei Comuni dei Castelli Romani, which in 2026 put forward a joint bid for Italian Capital of Culture 2029.",
      "Most people travelling from Rome go for an afternoon or an evening rather than a stay, which shapes what a transfer needs to know. The journey is short enough that the arrangement at each end matters more than the road between them.",
    ],
  },

  draws: {
    id: "draws",
    eyebrow: "What takes visitors there",
    heading: "The reasons people ask for this journey",
    lead:
      "Three, in rough order of how often they come up in a request. None of them " +
      "is something we sell — we arrange the transport that gets you there.",
    items: [
      {
        id: "wine",
        label: "The wine, and eating around it",
        detail:
          "Frascati's name is carried by a white wine made in the surrounding hills, and a great many visits are built around a long lunch or an evening rather than a monument. We do not book tables, cellars or tastings, and we make no recommendations.",
      },
      {
        id: "centre",
        label: "The historic centre",
        detail:
          "A compact old town on a slope. Compact and sloping is the part that matters for a car: the useful detail in a booking is the street you want to reach, because a hill town's centre is not uniformly reachable by vehicle.",
      },
      {
        id: "villas",
        label: "The villas, including Villa Aldobrandini",
        detail:
          "Frascati is known for its grand villas. Villa Aldobrandini is the most prominent, built for Cardinal Pietro Aldobrandini and still associated with the Aldobrandini family, who present it as a private residence and an events venue. Whether any part is open when you visit is a question for the villa, not for us.",
      },
    ],
  },

  access: {
    id: "access",
    eyebrow: "Arriving",
    heading: "What decides where a car can stop",
    lead:
      "Frascati is a small town on a hill, and that geography does more to shape an " +
      "arrival than anything else about it.",
    items: [
      {
        term: "A street address, not the town",
        detail:
          "\"Frascati\" is a destination for a map and not for a driver. The street, and ideally the number, is what lets the operator work out where the vehicle can actually stop and how far you will walk.",
      },
      {
        term: "Where you are actually going",
        detail:
          "A restaurant in the centre, a villa on the edge of town and a cellar in the surrounding hills are three different arrivals. Naming the destination rather than the town is the single most useful thing in a request.",
      },
      {
        term: "The time of day",
        detail:
          "Evening journeys are common here, and an evening arrival in a small centre is a different proposition from a quiet weekday afternoon. Say which you are planning so the arrangement suits it.",
      },
      {
        term: "Getting back",
        detail:
          "A return to Rome is a separate leg rather than part of the outward booking. If you want one, ask for it when you request the quotation and the operator will confirm what is possible for your date.",
      },
    ],
    checkDirect: {
      heading: "Check access with the place you are visiting",
      body:
        "Villas, cellars and restaurants each set their own arrangements for arriving " +
        "by car, and some streets in the old centre are restricted at certain hours. " +
        "Ask the place you are going to what they advise for a vehicle, and tell us " +
        "what they say — it is the quickest route to a drop-off that works, and they " +
        "know their own street better than any general guidance could.",
    },
  },

  onward: {
    id: "onward",
    eyebrow: "Related",
    heading: "The journey, and the region around it",
    lead: "Pages that exist, each written for its own purpose.",
    items: [
      {
        id: "route-rome-frascati",
        page: "route-rome-frascati",
        label: "Rome to Frascati",
        detail: "The transfer itself: pickup in Rome, and what to send for a quotation.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfers in Rome",
        detail: "The city you are most likely starting from, and what its access rules mean for a pickup.",
      },
      {
        id: "tivoli",
        page: "tivoli",
        label: "Tivoli",
        detail: "The other day journey out of Rome, on the opposite side of the city.",
      },
      {
        id: "lazio",
        page: "lazio",
        label: "Transfers in Lazio",
        detail: "The region, and everything else arranged in it.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about getting to Frascati",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Where is Frascati?",
        answer:
          "In the hills south-east of Rome, among the towns known as the Castelli " +
          "Romani — an area with its own regional park and a union of comuni that act " +
          "together. It is close enough to the city that most visits are a half-day " +
          "or an evening rather than an overnight stay.",
      },
      {
        question: "Can a car take me into the historic centre?",
        answer:
          "It depends on the street and the hour. Frascati's old centre is compact " +
          "and on a slope, and small Italian centres commonly restrict vehicles at " +
          "certain times. Give the street address in your request and ask your " +
          "destination what they advise for arriving by car; between the two the " +
          "drop-off can be settled before you travel.",
      },
      {
        question: "Can I visit Villa Aldobrandini?",
        answer:
          "That is a question for the villa. It is associated with the Aldobrandini " +
          "family, who present it as a private residence and a venue for events, and " +
          "we have no basis for telling you whether any part is open on your date. " +
          "Check with them directly, and we will take you wherever you arrange to go.",
      },
      {
        question: "Do you arrange wine tastings or restaurant bookings?",
        answer:
          "No. We arrange the journey only — a vehicle and a driver between two " +
          "addresses. Tastings, tables and tickets are yours to book, and we make no " +
          "recommendations about which to choose.",
      },
      {
        question: "How long does the journey from Rome take?",
        answer:
          "We publish no figure. Traffic leaving Rome varies a great deal with the " +
          "hour and the day, and a single number on a page would be read as a " +
          "promise. Tell us when you would like to leave and the operator will advise " +
          "for that date.",
      },
      {
        question: "Can the driver wait and bring us back?",
        answer:
          "Ask when you request the quotation and say roughly how long you expect to " +
          "be. Waiting and a return leg are both arranged and priced as part of the " +
          "quotation rather than assumed, and the operator confirms in writing what " +
          "is possible.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the address, not just the town",
    body:
      "The street you are heading for, where in Rome you are starting, and the date. " +
      "With those three a quotation can be specific, and the car stops somewhere " +
      "that actually suits where you are going.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Rome to Frascati", page: "route-rome-frascati" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No tour, tasting, table or admission is included.",
  },
};

const it: FrascatiDestination = {
  meta: {
    title: "Transfer per Frascati – Castelli Romani vicino a Roma",
    description:
      "Frascati si trova sui colli a sud-est di Roma. Che cosa vi porta i " +
      "visitatori e quali dettagli decidono dove un'auto privata può fermarsi.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Lazio",
    h1: "Transfer per Frascati",
    lead:
      "Frascati è uno dei paesi collinari dei Castelli Romani: abbastanza vicino a " +
      "Roma da essere una mezza giornata, abbastanza lontano da dare la sensazione " +
      "di aver lasciato la città. Per un transfer la domanda utile non è che cosa " +
      "vedere ma dove, esattamente, debba fermarsi l'auto: in un paese in collina " +
      "raramente è l'indirizzo che viene in mente per primo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Da Roma a Frascati",
    facts: [
      { label: "Dove", value: "Sui colli a sud-est di Roma" },
      { label: "Area", value: "Castelli Romani" },
      { label: "Che cosa decide la discesa", value: "Un indirizzo, non il nome del paese" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "Perché ci si va",
    heading: "Un paese in collina a portata di città",
    paragraphs: [
      "Frascati è uno dei paesi sui colli a sud-est di Roma noti come Castelli Romani. Non è soltanto un'etichetta turistica: l'area ha un proprio parco regionale, il Parco regionale dei Castelli Romani, e i suoi comuni agiscono insieme come Unione dei Comuni dei Castelli Romani, che nel 2026 ha presentato una candidatura congiunta a Capitale Italiana della Cultura 2029.",
      "Chi parte da Roma ci va quasi sempre per un pomeriggio o una sera più che per un soggiorno, e questo determina ciò che a un transfer serve sapere. Il tragitto è abbastanza breve perché l'organizzazione ai due capi conti più della strada in mezzo.",
    ],
  },

  draws: {
    id: "draws",
    eyebrow: "Che cosa attira i visitatori",
    heading: "I motivi per cui ci si fa portare",
    lead:
      "Tre, all'incirca nell'ordine in cui compaiono nelle richieste. Nessuno è " +
      "qualcosa che vendiamo noi: organizziamo il trasporto che vi ci porta.",
    items: [
      {
        id: "wine",
        label: "Il vino, e il mangiare che gli ruota attorno",
        detail:
          "Il nome di Frascati è portato da un vino bianco prodotto sui colli circostanti, e moltissime visite nascono attorno a un pranzo lungo o a una serata più che a un monumento. Non prenotiamo tavoli, cantine o degustazioni, e non diamo consigli.",
      },
      {
        id: "centre",
        label: "Il centro storico",
        detail:
          "Un centro raccolto e in pendenza. Raccolto e in pendenza è la parte che conta per un'auto: il dato utile in una prenotazione è la via che volete raggiungere, perché il centro di un paese in collina non è ovunque accessibile a un veicolo.",
      },
      {
        id: "villas",
        label: "Le ville, fra cui Villa Aldobrandini",
        detail:
          "Frascati è nota per le sue ville. Villa Aldobrandini è la più celebre, costruita per il cardinale Pietro Aldobrandini e tuttora legata alla famiglia Aldobrandini, che la presenta come dimora privata e sede di eventi. Se qualche parte sia visitabile nella vostra data è una domanda per la villa, non per noi.",
      },
    ],
  },

  access: {
    id: "access",
    eyebrow: "L'arrivo",
    heading: "Che cosa decide dove un'auto può fermarsi",
    lead:
      "Frascati è un paese piccolo su un colle, e questa geografia incide " +
      "sull'arrivo più di qualsiasi altra cosa.",
    items: [
      {
        term: "Un indirizzo, non il paese",
        detail:
          "«Frascati» è una destinazione per una cartina, non per un autista. La via, e possibilmente il numero, è ciò che permette all'operatore di capire dove il veicolo possa davvero fermarsi e quanto camminerete.",
      },
      {
        term: "Dove state andando davvero",
        detail:
          "Un ristorante in centro, una villa ai margini del paese e una cantina sui colli attorno sono tre arrivi diversi. Indicare la destinazione invece del paese è la cosa più utile di tutta la richiesta.",
      },
      {
        term: "L'ora del giorno",
        detail:
          "Qui i viaggi serali sono frequenti, e un arrivo di sera in un centro piccolo è cosa diversa da un pomeriggio feriale tranquillo. Dite quale state programmando, così l'organizzazione vi si adatta.",
      },
      {
        term: "Il ritorno",
        detail:
          "Il rientro a Roma è una tratta a sé e non fa parte della prenotazione di andata. Se lo volete, chiedetelo in fase di preventivo e l'operatore confermerà che cosa è possibile per la vostra data.",
      },
    ],
    checkDirect: {
      heading: "Verificate l'accesso con il luogo che visitate",
      body:
        "Ville, cantine e ristoranti stabiliscono ciascuno come si arriva in auto, e " +
        "alcune strade del centro storico sono soggette a limitazioni in certe fasce " +
        "orarie. Chiedete al luogo in cui andate che cosa consigliano per un veicolo e " +
        "riferitecelo: è la via più rapida a una discesa che funziona, e conoscono la " +
        "propria strada meglio di qualsiasi indicazione generica.",
    },
  },

  onward: {
    id: "onward",
    eyebrow: "Collegate",
    heading: "Il viaggio, e la regione attorno",
    lead: "Pagine che esistono, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "route-rome-frascati",
        page: "route-rome-frascati",
        label: "Da Roma a Frascati",
        detail: "Il transfer in sé: il prelievo a Roma e che cosa inviare per un preventivo.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfer a Roma",
        detail: "La città da cui con ogni probabilità partite, e che cosa comportano per il prelievo le sue regole d'accesso.",
      },
      {
        id: "tivoli",
        page: "tivoli",
        label: "Tivoli",
        detail: "L'altra gita fuori Roma, dal lato opposto della città.",
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
    heading: "Le domande su come arrivare a Frascati",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Dove si trova Frascati?",
        answer:
          "Sui colli a sud-est di Roma, fra i paesi noti come Castelli Romani: " +
          "un'area con un proprio parco regionale e un'unione di comuni che agiscono " +
          "insieme. È abbastanza vicina alla città perché quasi tutte le visite siano " +
          "una mezza giornata o una serata, non un pernottamento.",
      },
      {
        question: "Un'auto può entrare nel centro storico?",
        answer:
          "Dipende dalla via e dall'ora. Il centro di Frascati è raccolto e in " +
          "pendenza, e i centri storici italiani limitano spesso i veicoli in certe " +
          "fasce. Indicate la via nella richiesta e chiedete alla vostra destinazione " +
          "che cosa consigliano per arrivare in auto: fra le due cose la discesa si " +
          "definisce prima di partire.",
      },
      {
        question: "Si può visitare Villa Aldobrandini?",
        answer:
          "È una domanda per la villa. È legata alla famiglia Aldobrandini, che la " +
          "presenta come dimora privata e sede di eventi, e non abbiamo elementi per " +
          "dirvi se qualche parte sia aperta nella vostra data. Verificate " +
          "direttamente con loro: noi vi portiamo dove avrete concordato di andare.",
      },
      {
        question: "Organizzate degustazioni o prenotazioni al ristorante?",
        answer:
          "No. Organizziamo solo il viaggio: un veicolo e un autista fra due " +
          "indirizzi. Degustazioni, tavoli e biglietti li prenotate voi, e non diamo " +
          "consigli su quali scegliere.",
      },
      {
        question: "Quanto dura il viaggio da Roma?",
        answer:
          "Non pubblichiamo una cifra. Il traffico in uscita da Roma varia molto con " +
          "l'ora e con il giorno, e un numero secco verrebbe letto come una promessa. " +
          "Diteci quando vorreste partire e l'operatore vi consiglierà per quella data.",
      },
      {
        question: "L'autista può aspettare e riportarci indietro?",
        answer:
          "Chiedetelo in fase di preventivo indicando all'incirca quanto pensate di " +
          "fermarvi. L'attesa e il ritorno si organizzano e si quotano dentro il " +
          "preventivo invece di darli per scontati, e l'operatore conferma per " +
          "iscritto che cosa è possibile.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicateci l'indirizzo, non solo il paese",
    body:
      "La via verso cui siete diretti, da dove partite a Roma e la data. Con questi " +
      "tre dati il preventivo può essere preciso, e l'auto si ferma in un punto che " +
      "serve davvero a dove state andando.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Da Roma a Frascati", page: "route-rome-frascati" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non sono compresi escursioni, degustazioni, tavoli né ingressi.",
  },
};

export const frascati = { en, it };
