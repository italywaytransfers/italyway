import type { RoutePage } from "../page-types";
import type { Locale } from "@/lib/site";

/**
 * Campania's route pages.
 *
 * ── What makes this route its own page rather than a paragraph ───────────
 * Naples airport to Sorrento is the most requested journey in the region,
 * and the thing worth saying about it is not the road. It is that **both
 * ends are controlled zones**, governed by two different authorities, with
 * two different rules, and that each one decides something about how the
 * journey begins or finishes.
 *
 * At the airport, ENAC Ordinanza n. 3/2025 puts the airport roads inside a
 * Zona a Traffico Controllato with a fifteen-minute transit limit, and it
 * separates where a private-hire vehicle may collect from where it may set
 * down. At the other end, the Comune di Sorrento closes its centre to
 * traffic in the evenings in season, behind four camera gates, on a permit
 * rather than a payment.
 *
 * Neither fact is invented here. Both are already sourced on the pages they
 * belong to — content/campania/nap-airport.ts for the ordinance and
 * content/campania/sorrento.ts for the ZTL — and this page cites the same
 * documents rather than paraphrasing those pages. That is also what keeps it
 * from being a rewrite of either: the airport page explains the ordinance,
 * the Sorrento page explains the town, and this page explains what the two
 * together mean for one journey.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Distance, duration, price, waiting allowance, cancellation terms, vehicle
 * capacity, availability, and any bay, kerb, lane or terminal exit. The
 * ordinance identifies its bays by annexed site drawings that were not
 * legible, so the airport page refuses to place anything physically and this
 * page keeps that refusal rather than quietly relaxing it.
 *
 * ── No photograph ────────────────────────────────────────────────────────
 * `hero.photo` is unset. The Sicily routes carry one because CC0 images of
 * Taormina, Ortigia and Cefalù were licensed for them. Nothing of Sorrento
 * has been, and the library's one Campania image is of the Amalfi Coast,
 * which is the single picture that must not illustrate a Sorrento page.
 */

const ordEn = {
  text:
    "The controlled zone at the airport, the fifteen-minute transit limit and the " +
    "separation between where a private-hire vehicle may collect and where it may " +
    "set down are established by ENAC Ordinanza n. 3/2025, signed by the Direzione " +
    "Territoriale Campania on 4 December 2025 and in force from 10 December 2025. " +
    "ENAC is the Italian civil aviation authority; the ordinance is published by the " +
    "airport operator. Read on 27 October 2026:",
  linkText: "the ENAC ordinances published by the airport operator",
  href: "https://www.aeroportodinapoli.it/en/ordinanze-e.n.a.c.",
};

const ordIt = {
  text:
    "La zona a traffico controllato in aeroporto, il limite di quindici minuti e la " +
    "distinzione fra i luoghi in cui un veicolo a noleggio con conducente può " +
    "prelevare e quelli in cui può far scendere i passeggeri sono stabiliti " +
    "dall'Ordinanza ENAC n. 3/2025, firmata dalla Direzione Territoriale Campania il " +
    "4 dicembre 2025 ed entrata in vigore il 10 dicembre 2025. L'ENAC è l'Ente " +
    "Nazionale per l'Aviazione Civile; l'ordinanza è pubblicata dal gestore " +
    "aeroportuale. Consultata il 27 ottobre 2026:",
  linkText: "le ordinanze ENAC pubblicate dal gestore aeroportuale",
  href: "https://www.aeroportodinapoli.it/en/ordinanze-e.n.a.c.",
};

const ztlEn = {
  text:
    "Sorrento's seasonal restricted zone, its hours and its four electronic gates are " +
    "published by the Comune di Sorrento in a notice dated 28 March 2025, which sets " +
    "out the 2025 season. Read on 20 November 2026, when the Comune's ZTL topic listed " +
    "nothing more recent, so confirm the season's dates for your own travel year:",
  linkText: "the Comune di Sorrento's ZTL notice",
  href: "https://www.comune.sorrento.na.it/it/novita/page/sorrento-viabilita-ritorna-la-zona-a-traffico-limitato",
};

const ztlIt = {
  text:
    "La zona a traffico limitato stagionale di Sorrento, i suoi orari e i suoi quattro " +
    "varchi elettronici sono pubblicati dal Comune di Sorrento in un avviso del 28 " +
    "marzo 2025, relativo alla stagione 2025. Consultato il 20 novembre 2026, quando " +
    "nell'argomento ZTL del Comune non risultava nulla di più recente: verificate " +
    "quindi le date della stagione per il vostro anno di viaggio:",
  linkText: "l'avviso ZTL del Comune di Sorrento",
  href: "https://www.comune.sorrento.na.it/it/novita/page/sorrento-viabilita-ritorna-la-zona-a-traffico-limitato",
};

const napSorrentoEn: RoutePage = {
  meta: {
    title: "Naples Airport to Sorrento Transfer – Book a Private Car",
    description:
      "A private car from Naples airport to Sorrento: the airport's controlled " +
      "zone, Sorrento's evening restricted centre, and what to send with your " +
      "request.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Naples Airport (NAP)",
    to: "Sorrento",
    eyebrow: "Route",
    h1: "Naples Airport to Sorrento",
    lead:
      "The most requested transfer in Campania, and a journey with a rule at each " +
      "end. The airport's roads are a controlled zone with a fifteen-minute clock " +
      "and named places a private-hire car may use; Sorrento's centre closes to " +
      "traffic in the evening behind four camera gates. Between them, the road is " +
      "the straightforward part.",
    primaryCta: "Request a quote",
    secondaryCta: "About Naples Airport",
    note:
      "We arrange these transfers with licensed local transfer companies and " +
      "drivers; we do not own vehicles or employ drivers directly. No price, " +
      "journey time or road distance appears here: the operator confirms the " +
      "routing, and the price comes to you in writing before anything is confirmed.",
  },

  lead: {
    id: "two-zones",
    eyebrow: "What makes this route different",
    heading: "Two controlled zones, two authorities, one journey",
    text:
      "Most airport routes have one restriction to think about. This one has two, " +
      "and they are unrelated to each other — a civil-aviation ordinance at the " +
      "start, a municipal ordinance at the finish. Each decides something you " +
      "would otherwise discover on the day.",
    columns: [
      {
        id: "airport",
        heading: "At the airport",
        subheading: "ENAC Ordinanza n. 3/2025, in force since 10 December 2025",
        rows: [
          {
            term: "A controlled zone",
            detail:
              "The airport roads lie inside a Zona a Traffico Controllato instituted under Law 33/2012, with camera-monitored entry and exit gates.",
          },
          {
            term: "Fifteen minutes",
            detail:
              "The ordinance sets a maximum transit time of fifteen minutes inside the zone, enforced by approved automatic equipment. A car cannot sit and wait for a late passenger.",
          },
          {
            term: "Collection and set-down are different",
            detail:
              "The ordinance governs the two separately and prohibits either anywhere other than the places it names. This is why being collected is an arrangement rather than a kerbside meeting.",
          },
        ],
      },
      {
        id: "sorrento",
        heading: "At Sorrento",
        subheading: "Comune di Sorrento, seasonal restricted zone",
        rows: [
          {
            term: "Evenings, in season",
            detail:
              "The most recently published notice sets the zone from 19:30 to 04:00 daily, with an extra 10:00 to 13:00 window on public holidays, over a season running 1 April to 25 October.",
          },
          {
            term: "A permit, not a payment",
            detail:
              "Entry requires a valid annual permit reserved for residents, people who work there and other categories in the regulation. It is not a charge a visitor's car can simply pay.",
          },
          {
            term: "What that means for arriving",
            detail:
              "An evening arrival at an address inside the zone finishes at the nearest lawful setting-down point rather than the door. Sending the full address is what lets that be settled in advance.",
          },
        ],
      },
    ],
    source: ordEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead:
      "A large international airport at one end and a town with a restricted " +
      "historic centre at the other. Each end has its own question, and neither " +
      "is about the road between them.",
    from: {
      id: "nap",
      label: "Pickup",
      name: "Naples International Airport (NAP)",
      page: "nap-airport",
      linkText: "About Naples Airport",
      items: [
        {
          term: "The flight number",
          detail:
            "The single most useful line in a request. With it, a delay or a diversion is seen as it happens rather than discovered on landing, and the fifteen-minute clock is not started too early.",
        },
        {
          term: "Being met",
          detail:
            "Collection happens at the places the ordinance names, not at a kerb of your choosing. The precise arrangement is confirmed with the operator and your driver for your own journey.",
        },
        {
          term: "What we will not tell you",
          detail:
            "A terminal exit, a lane, a bay number or a walking direction. The ordinance identifies its bays by annexed site drawings that were not legible enough to place anything physically, so we publish none of it rather than guess.",
        },
      ],
    },
    to: {
      id: "sorrento",
      label: "Drop-off",
      name: "Sorrento",
      page: "sorrento",
      linkText: "Transfers in Sorrento",
      items: [
        {
          term: "The full address",
          detail:
            "Not the hotel name alone. Whether it stands inside the restricted zone, and whether its street takes a car at all, decides where the journey can lawfully end.",
        },
        {
          term: "The hour you land",
          detail:
            "An afternoon arrival and a 21:00 arrival at the same address are different journeys, because the zone is active for one and not the other.",
        },
        {
          term: "Not the Amalfi Coast",
          detail:
            "Sorrento is on the northern side of the peninsula, facing the Bay of Naples. If Positano or Amalfi follows later in your trip, that is a separate journey over the ridge rather than an extension of this one.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Each line below changes either the price or the arrangement. Sending them " +
      "together turns several exchanges into one reply.",
    items: [
      "The flight number and its scheduled arrival time, so the driver tracks the aircraft rather than the clock.",
      "The full Sorrento address, including anything the property has told you about access or the restricted zone.",
      "How many adults and children, with the children's ages, because a child's seat is arranged in advance.",
      "Hold cases and cabin bags counted separately, and any awkward item — a pushchair, golf clubs, a wheelchair.",
      "Whether you want the return to the airport quoted at the same time.",
      "A mobile number reachable on landing, which is how the meeting actually completes.",
    ],
    note:
      "None of it commits you. A quotation is a price for one journey on one day, " +
      "sent in writing before anything is confirmed.",
  },

  departure: {
    id: "departure",
    eyebrow: "The journey home",
    heading: "Leaving Sorrento for a flight",
    lead:
      "The return is not simply this page reversed, and one detail catches people " +
      "out more than any other.",
    paragraphs: [
      "A departure is timed backwards from check-in rather than forwards from a landing, so the useful number in the request is the flight's departure time, not the hour you would like to leave. The operator works the collection time back from it.",
      "The restricted zone matters differently on the way out. It runs until 04:00, so a very early departure — the kind that catches the first wave of flights out of Naples — can fall inside it at the Sorrento end. Where that applies, the car meets you at the nearest lawful point rather than the door, and knowing the address in advance is what makes that a plan instead of a surprise at five in the morning.",
      "At the airport end the same ordinance governs setting down as governs collection, and it treats them separately: a drop-off is a brief stop in the places the ordinance names, not a wait.",
    ],
    note:
      "Nothing here is a statement about how early you should leave. That depends " +
      "on the airline, the season and the day, and the operator advises on it for " +
      "your own departure.",
    source: ztlEn,
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about this journey",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "How long does a transfer from Naples Airport to Sorrento take?",
        answer:
          "We do not publish a figure. The honest answer varies with the season, the " +
          "hour and the traffic, and a single number on a page would be quoted back to " +
          "us as a promise. The operator confirms the routing and the timing for your " +
          "own date when it replies to your request.",
      },
      {
        question: "Where does the driver meet me at Naples Airport?",
        answer:
          "At the places ENAC's ordinance permits for a private-hire vehicle, which are " +
          "not the same as the bays a friend collecting you may use. We deliberately do " +
          "not publish a terminal exit or bay number: the ordinance identifies them by " +
          "annexed drawings that were not legible, so the arrangement is confirmed with " +
          "your driver rather than guessed at here.",
      },
      {
        question: "Can the car wait if my flight is delayed?",
        answer:
          "The airport's controlled zone has a fifteen-minute transit limit, so a vehicle " +
          "cannot simply sit inside it waiting. That is precisely why the flight number " +
          "matters: with it the operator tracks the aircraft and times the approach to " +
          "the actual landing. Any waiting allowance is a matter for the operator's own " +
          "terms, confirmed in writing, and is not something this page states.",
      },
      {
        question: "Can I be dropped at my hotel door in Sorrento?",
        answer:
          "It depends on the address and the hour. The centre is a restricted zone in the " +
          "evenings in season, entry needs an annual permit rather than a payment, and " +
          "some old-town streets are too narrow for a car in any case. Send the full " +
          "address with the request and the setting-down point is agreed in advance.",
      },
      {
        question: "Is a private transfer the only way from Naples Airport to Sorrento?",
        answer:
          "No. A scheduled coach runs between the airport and Sorrento, and there is also " +
          "the Circumvesuviana railway from Naples, though reaching it means getting into " +
          "the city first since the airport has no railway station. A private transfer is " +
          "the option that collects you on arrival and goes to one address.",
      },
      {
        question: "Is Sorrento on the Amalfi Coast?",
        answer:
          "No, and it matters for planning. Sorrento is on the northern side of the " +
          "Sorrentine peninsula facing the Bay of Naples; Positano and Amalfi are on the " +
          "southern side. A journey from Sorrento to either crosses the ridge and is " +
          "quoted separately from this one.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "sorrento",
        label: "Sorrento",
        detail: "The destination in full: the restricted zone, the gateways and how it differs from the Amalfi Coast.",
      },
      {
        page: "nap-airport",
        label: "Naples Airport (NAP)",
        detail: "The controlled zone, the fifteen-minute limit and what the ordinance permits, in detail.",
      },
      {
        page: "naples",
        label: "Naples",
        detail: "The city, its stations and the quays that share its name.",
      },
      {
        page: "pompeii",
        label: "Pompeii",
        detail: "On the same side of the bay, and a frequent stop between the two ends of this route.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the flight and the address",
    body:
      "Those two lines are most of a quotation. With the flight number the driver " +
      "tracks the aircraft, and with the full address the setting-down point can be " +
      "settled before you land rather than negotiated on the pavement.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Sorrento", page: "sorrento" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price on this page is a published tariff, because there is " +
      "none.",
  },
};

const napSorrentoIt: RoutePage = {
  meta: {
    title: "Aeroporto di Napoli–Sorrento – Prenota un'auto privata",
    description:
      "Un'auto privata dall'aeroporto di Napoli a Sorrento: la zona controllata " +
      "dell'aeroporto, la ZTL serale di Sorrento e che cosa inviare con la " +
      "richiesta.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Aeroporto di Napoli (NAP)",
    to: "Sorrento",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Napoli a Sorrento",
    lead:
      "Il transfer più richiesto della Campania, e un viaggio con una regola a " +
      "ciascun capo. Le strade dell'aeroporto sono una zona a traffico controllato " +
      "con un limite di quindici minuti e luoghi precisi in cui un'auto a noleggio " +
      "con conducente può operare; il centro di Sorrento chiude al traffico la sera " +
      "dietro quattro varchi elettronici. In mezzo, la strada è la parte semplice.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Napoli",
    note:
      "Organizziamo questi transfer con società e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono prezzi, durate o distanze: l'operatore conferma il percorso e il " +
      "prezzo vi arriva per iscritto prima di qualsiasi conferma.",
  },

  lead: {
    id: "two-zones",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Due zone controllate, due autorità, un solo viaggio",
    text:
      "Quasi tutte le tratte aeroportuali hanno una sola limitazione da considerare. " +
      "Questa ne ha due, per di più indipendenti fra loro: un'ordinanza dell'aviazione " +
      "civile alla partenza, un'ordinanza comunale all'arrivo. Ciascuna decide " +
      "qualcosa che altrimenti scoprireste sul posto.",
    columns: [
      {
        id: "airport",
        heading: "In aeroporto",
        subheading: "Ordinanza ENAC n. 3/2025, in vigore dal 10 dicembre 2025",
        rows: [
          {
            term: "Una zona controllata",
            detail:
              "Le strade aeroportuali rientrano in una Zona a Traffico Controllato istituita ai sensi della Legge 33/2012, con varchi di entrata e uscita sorvegliati da telecamere.",
          },
          {
            term: "Quindici minuti",
            detail:
              "L'ordinanza fissa in quindici minuti il tempo massimo di transito nella zona, rilevato con apparecchiature automatiche omologate. Un'auto non può sostare in attesa di un passeggero in ritardo.",
          },
          {
            term: "Prelievo e discesa sono distinti",
            detail:
              "L'ordinanza li disciplina separatamente e vieta entrambi al di fuori dei luoghi che indica. Per questo essere prelevati è un accordo, non un incontro a bordo strada.",
          },
        ],
      },
      {
        id: "sorrento",
        heading: "A Sorrento",
        subheading: "Comune di Sorrento, zona a traffico limitato stagionale",
        rows: [
          {
            term: "La sera, in stagione",
            detail:
              "L'avviso pubblicato più di recente fissa la zona dalle 19.30 alle 4, tutti i giorni, con una fascia aggiuntiva dalle 10 alle 13 nei festivi, in una stagione dal 1° aprile al 25 ottobre.",
          },
          {
            term: "Un permesso, non un pagamento",
            detail:
              "Per entrare serve un regolare permesso annuale, riservato a residenti, lavoratori e alle altre categorie previste dal regolamento. Non è una tariffa che l'auto di un turista possa semplicemente pagare.",
          },
          {
            term: "Che cosa comporta all'arrivo",
            detail:
              "Un arrivo serale a un indirizzo interno alla zona si conclude nel punto di discesa lecito più vicino, non davanti alla porta. Inviare l'indirizzo completo è ciò che permette di deciderlo prima.",
          },
        ],
      },
    ],
    source: ordIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead:
      "Un grande aeroporto internazionale da una parte e una cittadina con il centro " +
      "storico a traffico limitato dall'altra. Ogni capo ha la sua domanda, e nessuna " +
      "delle due riguarda la strada in mezzo.",
    from: {
      id: "nap",
      label: "Punto di prelievo",
      name: "Aeroporto Internazionale di Napoli (NAP)",
      page: "nap-airport",
      linkText: "Sull'aeroporto di Napoli",
      items: [
        {
          term: "Il numero del volo",
          detail:
            "La riga più utile di una richiesta. Con quello, un ritardo o un dirottamento si vedono mentre accadono invece di scoprirli all'atterraggio, e il conto dei quindici minuti non parte troppo presto.",
        },
        {
          term: "L'incontro",
          detail:
            "Il prelievo avviene nei luoghi indicati dall'ordinanza, non a un marciapiede scelto da voi. L'accordo preciso viene confermato con l'operatore e con il vostro autista per il vostro viaggio.",
        },
        {
          term: "Quello che non vi diremo",
          detail:
            "Un'uscita del terminal, una corsia, un numero di stallo o un percorso a piedi. L'ordinanza individua gli stalli rinviando a planimetrie allegate che non erano leggibili abbastanza da collocarli fisicamente: perciò non ne pubblichiamo nessuno invece di tirare a indovinare.",
        },
      ],
    },
    to: {
      id: "sorrento",
      label: "Punto di discesa",
      name: "Sorrento",
      page: "sorrento",
      linkText: "Transfer a Sorrento",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Non il solo nome dell'albergo. Se si trovi dentro la zona a traffico limitato, e se la sua strada sia percorribile in auto, determina dove il viaggio può legalmente concludersi.",
        },
        {
          term: "L'ora in cui atterrate",
          detail:
            "Un arrivo nel pomeriggio e uno alle 21 allo stesso indirizzo sono due viaggi diversi, perché per l'uno la zona è attiva e per l'altro no.",
        },
        {
          term: "Non è la Costiera Amalfitana",
          detail:
            "Sorrento è sul versante nord della penisola, di fronte al Golfo di Napoli. Se più avanti nel viaggio ci sono Positano o Amalfi, quello è un tragitto a sé oltre il crinale, non un prolungamento di questo.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Ogni voce qui sotto cambia il prezzo o l'organizzazione. Inviarle insieme " +
      "trasforma più scambi in una sola risposta.",
    items: [
      "Il numero del volo e l'orario previsto di arrivo, così l'autista segue l'aereo e non l'orologio.",
      "L'indirizzo completo a Sorrento, con quanto la struttura vi ha detto sull'accesso o sulla zona a traffico limitato.",
      "Quanti adulti e quanti bambini, con l'età dei bambini, perché il seggiolino si predispone in anticipo.",
      "Bagagli da stiva e da cabina contati separatamente, e gli oggetti ingombranti: passeggino, sacca da golf, carrozzina.",
      "Se volete che sia preventivato anche il ritorno in aeroporto.",
      "Un numero di cellulare raggiungibile all'atterraggio: è così che l'incontro si conclude davvero.",
    ],
    note:
      "Nulla di tutto questo vi impegna. Un preventivo è il prezzo di un viaggio in " +
      "un giorno preciso, inviato per iscritto prima di qualsiasi conferma.",
  },

  departure: {
    id: "departure",
    eyebrow: "Il viaggio di ritorno",
    heading: "Partire da Sorrento per un volo",
    lead:
      "Il ritorno non è semplicemente questa pagina al contrario, e un dettaglio in " +
      "particolare coglie di sorpresa più di ogni altro.",
    paragraphs: [
      "Una partenza si calcola a ritroso dal check-in, non in avanti da un atterraggio: il dato utile nella richiesta è quindi l'orario di partenza del volo, non l'ora in cui vorreste muovervi. L'operatore ricava da lì l'orario di prelievo.",
      "La zona a traffico limitato pesa in modo diverso in uscita. Resta attiva fino alle 4, perciò una partenza molto mattutina — quelle della prima ondata di voli da Napoli — può ricadervi dentro dal lato di Sorrento. Dove accade, l'auto vi attende nel punto lecito più vicino anziché davanti alla porta: conoscere prima l'indirizzo è ciò che rende tutto questo un piano e non una sorpresa alle cinque del mattino.",
      "Dal lato dell'aeroporto la stessa ordinanza disciplina la discesa come il prelievo, e li tratta separatamente: lasciare un passeggero è una fermata breve nei luoghi indicati dall'ordinanza, non un'attesa.",
    ],
    note:
      "Niente di tutto questo indica con quanto anticipo dobbiate partire. Dipende " +
      "dalla compagnia, dalla stagione e dal giorno, e l'operatore vi consiglia per " +
      "la vostra partenza.",
    source: ztlIt,
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su questa tratta",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Quanto dura il transfer dall'aeroporto di Napoli a Sorrento?",
        answer:
          "Non pubblichiamo una cifra. La risposta onesta varia con la stagione, l'ora e " +
          "il traffico, e un numero secco su una pagina ci verrebbe citato come una " +
          "promessa. L'operatore conferma percorso e tempi per la vostra data quando " +
          "risponde alla richiesta.",
      },
      {
        question: "Dove mi aspetta l'autista all'aeroporto di Napoli?",
        answer:
          "Nei luoghi che l'ordinanza ENAC consente a un veicolo a noleggio con " +
          "conducente, che non sono gli stessi stalli utilizzabili da un amico venuto a " +
          "prendervi. Non pubblichiamo di proposito un'uscita del terminal o un numero di " +
          "stallo: l'ordinanza li individua con planimetrie allegate non leggibili, " +
          "perciò l'accordo si conferma con il vostro autista.",
      },
      {
        question: "L'auto può aspettare se il volo è in ritardo?",
        answer:
          "La zona controllata dell'aeroporto ha un limite di transito di quindici " +
          "minuti, quindi un veicolo non può restare lì ad aspettare. È proprio per " +
          "questo che il numero del volo conta: con quello l'operatore segue l'aereo e " +
          "calcola l'avvicinamento sull'atterraggio effettivo. Eventuali franchigie di " +
          "attesa rientrano nelle condizioni dell'operatore, confermate per iscritto, e " +
          "non sono indicate in questa pagina.",
      },
      {
        question: "Posso essere lasciato davanti all'albergo a Sorrento?",
        answer:
          "Dipende dall'indirizzo e dall'ora. In stagione il centro è zona a traffico " +
          "limitato la sera, per entrare serve un permesso annuale e non un pagamento, e " +
          "alcune strade del centro storico sono comunque troppo strette per un'auto. " +
          "Inviate l'indirizzo completo e il punto di discesa si concorda prima.",
      },
      {
        question: "Il transfer privato è l'unico modo per andare dall'aeroporto a Sorrento?",
        answer:
          "No. Un pullman di linea collega l'aeroporto e Sorrento, e c'è anche la " +
          "ferrovia Circumvesuviana da Napoli, che però richiede prima di raggiungere la " +
          "città, perché l'aeroporto non ha stazione ferroviaria. Il transfer privato è " +
          "l'opzione che vi prende all'arrivo e porta a un solo indirizzo.",
      },
      {
        question: "Sorrento è in Costiera Amalfitana?",
        answer:
          "No, e per l'organizzazione del viaggio conta. Sorrento è sul versante nord " +
          "della penisola sorrentina, di fronte al Golfo di Napoli; Positano e Amalfi " +
          "sono sul versante sud. Un tragitto da Sorrento verso l'una o l'altra supera il " +
          "crinale e viene preventivato a parte rispetto a questo.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "sorrento",
        label: "Sorrento",
        detail: "La destinazione per esteso: la zona a traffico limitato, gli accessi e la differenza con la Costiera.",
      },
      {
        page: "nap-airport",
        label: "Aeroporto di Napoli (NAP)",
        detail: "La zona controllata, il limite dei quindici minuti e ciò che l'ordinanza consente, nel dettaglio.",
      },
      {
        page: "naples",
        label: "Napoli",
        detail: "La città, le sue stazioni e le banchine che ne portano il nome.",
      },
      {
        page: "pompeii",
        label: "Pompei",
        detail: "Sullo stesso lato del golfo, e una sosta frequente fra i due capi di questa tratta.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicateci il volo e l'indirizzo",
    body:
      "Quelle due righe sono già quasi tutto un preventivo. Con il numero del volo " +
      "l'autista segue l'aereo; con l'indirizzo completo il punto di discesa si " +
      "stabilisce prima che atterriate, invece di trattarlo sul marciapiede.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Sorrento", page: "sorrento" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Nessun prezzo in questa pagina è una tariffa pubblicata, perché " +
      "non ne esiste una.",
  },
};

export const routeNapSorrento: Record<Locale, RoutePage> = {
  en: napSorrentoEn,
  it: napSorrentoIt,
};
