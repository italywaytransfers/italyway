import type { Locale } from "@/lib/site";
import type { RoutePage } from "../page-types";

/**
 * Rome to Tivoli.
 *
 * ── A transfer page, deliberately not a day-trip page ────────────────────
 * The owner's instruction was one page rather than two competing ones, and
 * this is the commercial half: a vehicle, a driver, two addresses and a
 * date. The destination page at /destinations/tivoli answers "where am I
 * going"; this one answers "how is the journey arranged".
 *
 * Keeping that line is what stops the pair cannibalising each other. This
 * page does not describe the villas; that page does not describe the
 * booking.
 *
 * ── What is not promised here ────────────────────────────────────────────
 * No waiting time, no return leg as standard, no itinerary, no guide, no
 * admission, no multiple stops as an entitlement. The brief was explicit
 * and so is the page: those are things to ask about in a quotation, and
 * what is possible comes back from the operator in writing. A day-trip page
 * that implies a waiting car and a fixed itinerary is selling a product
 * that has not been confirmed to exist.
 *
 * ── The sourcing position ────────────────────────────────────────────────
 * Every official Tivoli source was unreachable when this was written: the
 * Villae institute, the Ministry of Culture, UNESCO, the Comune di Tivoli
 * and levillae.com. So there is no distance, no duration, no address and
 * nothing about parking or access at the far end. What survives is the one
 * fact a booking turns on — Tivoli has two destinations and the request has
 * to name one — which is a statement about the booking, not about geography
 * this file cannot evidence.
 */

const romeTivoliEn: RoutePage = {
  meta: {
    title: "Rome to Tivoli Transfer – Book a Private Car and Driver",
    description:
      "A private car from Rome to Tivoli. Which of the two destinations you name, " +
      "what to send for a quotation, and what a transfer does and does not include.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Rome",
    to: "Tivoli",
    eyebrow: "Route",
    h1: "Rome to Tivoli",
    lead:
      "A car and a driver from your Rome address to Tivoli. The one decision that " +
      "shapes the whole journey is which Tivoli you mean: Villa d'Este and Villa " +
      "Adriana are separate destinations, and the car goes to the one you name.",
    primaryCta: "Request a quote",
    secondaryCta: "About Tivoli",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. This is transport, not a tour: " +
      "no guide, admission or itinerary is included. No price, journey time or road " +
      "distance appears here.",
  },

  lead: {
    id: "which-tivoli",
    eyebrow: "The decision that shapes the booking",
    heading: "Which of the two destinations is this journey for?",
    text:
      "A request that says only \"Tivoli\" leaves the most important detail open. " +
      "These are the three things a booking can actually mean, and each is quoted " +
      "differently.",
    columns: [
      {
        id: "one",
        heading: "One destination",
        subheading: "The straightforward booking",
        rows: [
          {
            term: "Villa d'Este",
            detail: "Named in the request, the car goes there and the journey is a single drop-off.",
          },
          {
            term: "Villa Adriana",
            detail: "Also known as Hadrian's Villa. A separate destination with its own entrance, not reached from the other.",
          },
          {
            term: "Why naming it matters",
            detail: "They are not the same address. A driver cannot infer which you meant, and the wrong one costs a large part of the day.",
          },
        ],
      },
      {
        id: "more",
        heading: "More than one stop",
        subheading: "Possible, but ask rather than assume",
        rows: [
          {
            term: "Both sites in one journey",
            detail: "Two destinations rather than one. Describe it in the request and it can be quoted as such; it is not an extension of a single transfer.",
          },
          {
            term: "Waiting, or a return leg",
            detail: "Neither is included as standard. Say what you have in mind and the operator confirms in writing what is possible for your date.",
          },
          {
            term: "What we will not pretend",
            detail: "That a car waits by default, that a return is automatic, or that an itinerary comes with the booking. None of that is promised anywhere on this site.",
          },
        ],
      },
    ],
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A Rome address, and a destination that needs naming",
    lead:
      "The Rome end behaves like any city pickup. The Tivoli end is where this " +
      "route differs from every other journey out of the city.",
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
            "Street and number, not a district or a landmark. Parts of central Rome are restricted, and where a car may collect you is decided by the street.",
        },
        {
          term: "The time you want to leave",
          detail:
            "Unlike an airport run there is no external deadline, so the pickup time is yours to choose. Traffic leaving Rome varies with the hour, and the operator will advise.",
        },
        {
          term: "Who is travelling",
          detail:
            "Adults and children separately, with the children's ages, so any seat is arranged in advance rather than found on the morning.",
        },
      ],
    },
    to: {
      id: "tivoli",
      label: "Drop-off",
      name: "Tivoli",
      page: "tivoli",
      linkText: "About Tivoli",
      items: [
        {
          term: "Which destination",
          detail:
            "Villa d'Este, Villa Adriana, or both. This is the single most useful line in the request and the one the whole arrangement turns on.",
        },
        {
          term: "What happens after the drop-off",
          detail:
            "If you want the driver to return for you, or to wait, say so when you ask. Neither is assumed, and what is possible is confirmed for your date.",
        },
        {
          term: "Where visiting details come from",
          detail:
            "Not from us. Addresses, parking, opening times and access are published by the two sites themselves, and their official channels are the only place those stay current. We arrange the journey; they answer everything about the visit.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Five lines, and the first one matters more than the rest put together.",
    items: [
      "Which destination: Villa d'Este, Villa Adriana, or both.",
      "The full Rome address you want to be collected from, with anything the property has said about restricted access.",
      "The date and the time you would like to leave.",
      "Whether you want one way only, or a return — and if a return, roughly when.",
      "How many adults and children, with the children's ages, and anything bulky you are carrying.",
    ],
    note:
      "Nothing here commits you. A quotation prices one journey on one date, and " +
      "asking for one costs nothing.",
  },

  departure: {
    id: "coming-back",
    eyebrow: "The return",
    heading: "Getting back to Rome",
    lead:
      "A return is a separate leg, and treating it as automatic is the commonest " +
      "misunderstanding on a journey like this one.",
    paragraphs: [
      "A one-way transfer ends when you are set down. If you want a car to bring you back to Rome, that is a second journey and it is quoted as one — which is better for you than an assumed arrangement nobody wrote down.",
      "Whether a driver can wait rather than return is a question for the operator, not something this page can answer in advance. Describe what you want in the request and the answer comes back in writing, specific to your date, before anything is confirmed.",
    ],
    note:
      "We would rather quote a return you actually want than imply a waiting car " +
      "that was never agreed.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about the journey to Tivoli",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Which Tivoli destination should I give you?",
        answer:
          "The one your tickets or plans are for — Villa d'Este or Villa Adriana. " +
          "They are separate destinations with separate entrances, so a car sent to " +
          "one has not taken you to the other. If you intend to see both, say so and " +
          "it is quoted as two stops.",
      },
      {
        question: "Is this a day trip or a transfer?",
        answer:
          "A transfer: a vehicle and a driver between two addresses. There is no " +
          "guide, no admission, no commentary and no fixed itinerary. If you want the " +
          "car to wait or to return for you, that is arranged and priced as part of " +
          "the quotation rather than assumed.",
      },
      {
        question: "How long does it take to reach Tivoli from Rome?",
        answer:
          "We publish no figure. Traffic leaving Rome varies greatly with the hour " +
          "and the day, and a single number would be read as a promise. Give your " +
          "preferred departure time in the request and the operator advises for that " +
          "date.",
      },
      {
        question: "Can the driver wait while we visit?",
        answer:
          "Ask, and describe how long you expect to be. Waiting is not included as " +
          "standard and is not something this page can promise on the operator's " +
          "behalf. What is possible comes back in writing with the quotation.",
      },
      {
        question: "Can we visit both villas in one journey?",
        answer:
          "Describe it in the request. It is two destinations rather than one, so it " +
          "is quoted as two stops rather than treated as a longer single transfer. " +
          "Whether it fits your day is a question of timing the operator can help " +
          "with once the plan is known.",
      },
      {
        question: "Do you book tickets for the villas?",
        answer:
          "No. We arrange the journey only. Tickets, opening times and access are " +
          "handled by the sites themselves, and their official channels are the only " +
          "reliable source for them.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "tivoli",
        label: "Tivoli",
        detail: "The destination: two famous places under one town's name, and how they differ for a booking.",
      },
      {
        page: "rome",
        label: "Transfers in Rome",
        detail: "The city you are starting from, and what its access rules mean for a pickup.",
      },
      {
        page: "lazio",
        label: "Transfers in Lazio",
        detail: "The region, and everything else arranged in it.",
      },
      {
        page: "rome-stations",
        label: "Rome railway station transfers",
        detail: "If the journey starts from a station rather than a hotel.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Name the destination and the pickup address",
    body:
      "Villa d'Este or Villa Adriana, your Rome address, the date and whether you " +
      "want a return. That is a complete request, and the quotation comes back in " +
      "writing before anything is confirmed.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Tivoli", page: "tivoli" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No guide, admission or itinerary is included, and no waiting or " +
      "return is implied unless it is quoted.",
  },
};

const romeTivoliIt: RoutePage = {
  meta: {
    title: "Da Roma a Tivoli – Prenota un'auto con autista privato",
    description:
      "Un'auto privata da Roma a Tivoli. Quale delle due destinazioni indicare, che " +
      "cosa inviare per un preventivo e che cosa comprende davvero un transfer.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Roma",
    to: "Tivoli",
    eyebrow: "Tratta",
    h1: "Da Roma a Tivoli",
    lead:
      "Un'auto con autista dal vostro indirizzo a Roma fino a Tivoli. L'unica " +
      "decisione che dà forma all'intero viaggio è quale Tivoli intendiate: Villa " +
      "d'Este e Villa Adriana sono destinazioni distinte, e l'auto va a quella che " +
      "indicate.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Su Tivoli",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Questo è " +
      "trasporto, non un'escursione: non sono compresi guida, ingressi né itinerario. " +
      "Qui non compaiono prezzi, durate o distanze.",
  },

  lead: {
    id: "which-tivoli",
    eyebrow: "La decisione che dà forma alla prenotazione",
    heading: "Per quale delle due destinazioni è questo viaggio?",
    text:
      "Una richiesta che dice soltanto «Tivoli» lascia aperto il dettaglio più " +
      "importante. Queste sono le tre cose che una prenotazione può voler dire, e " +
      "ciascuna si preventiva in modo diverso.",
    columns: [
      {
        id: "one",
        heading: "Una destinazione",
        subheading: "La prenotazione lineare",
        rows: [
          {
            term: "Villa d'Este",
            detail: "Indicata nella richiesta, l'auto va lì e il viaggio è una singola discesa.",
          },
          {
            term: "Villa Adriana",
            detail: "La villa di Adriano. Destinazione distinta con ingresso proprio, non raggiungibile dall'altra.",
          },
          {
            term: "Perché indicarla conta",
            detail: "Non sono lo stesso indirizzo. Un autista non può indovinare quale intendevate, e sbagliare costa gran parte della giornata.",
          },
        ],
      },
      {
        id: "more",
        heading: "Più di una tappa",
        subheading: "Possibile, ma va chiesto, non dato per scontato",
        rows: [
          {
            term: "Entrambi i siti in un viaggio",
            detail: "Due destinazioni, non una. Descrivetelo nella richiesta e si preventiva come tale: non è il prolungamento di un singolo transfer.",
          },
          {
            term: "Attesa o ritorno",
            detail: "Nessuno dei due è compreso di base. Dite che cosa avete in mente e l'operatore conferma per iscritto che cosa è possibile per la vostra data.",
          },
          {
            term: "Che cosa non fingeremo",
            detail: "Che un'auto attenda per impostazione predefinita, che il ritorno sia automatico o che un itinerario sia incluso. Nulla di tutto ciò è promesso in questo sito.",
          },
        ],
      },
    ],
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Un indirizzo a Roma, e una destinazione da indicare",
    lead:
      "Il capo romano si comporta come ogni prelievo in città. È il capo di Tivoli a " +
      "distinguere questa tratta da ogni altro viaggio fuori città.",
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
            "Via e numero, non un quartiere o un monumento. Parti del centro di Roma sono soggette a limitazioni, e dove un'auto possa prelevarvi lo decide la via.",
        },
        {
          term: "L'ora in cui volete partire",
          detail:
            "A differenza di una tratta aeroportuale non c'è una scadenza esterna: l'orario lo scegliete voi. Il traffico in uscita da Roma cambia con l'ora, e l'operatore vi consiglia.",
        },
        {
          term: "Chi viaggia",
          detail:
            "Adulti e bambini separatamente, con le età, così il seggiolino si predispone in anticipo e non si cerca la mattina stessa.",
        },
      ],
    },
    to: {
      id: "tivoli",
      label: "Punto di discesa",
      name: "Tivoli",
      page: "tivoli",
      linkText: "Su Tivoli",
      items: [
        {
          term: "Quale destinazione",
          detail:
            "Villa d'Este, Villa Adriana o entrambe. È la riga più utile della richiesta e quella su cui ruota tutta l'organizzazione.",
        },
        {
          term: "Che cosa succede dopo la discesa",
          detail:
            "Se volete che l'autista torni a prendervi o che attenda, ditelo subito. Nessuna delle due cose è data per scontata, e ciò che è possibile si conferma per la vostra data.",
        },
        {
          term: "Da dove vengono i dati sulla visita",
          detail:
            "Non da noi. Indirizzi, parcheggi, orari e accessi sono pubblicati dai due siti stessi, e i loro canali ufficiali sono l'unico posto in cui restano aggiornati. Noi organizziamo il viaggio; loro rispondono su tutto ciò che riguarda la visita.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Cinque righe, e la prima conta più di tutte le altre messe insieme.",
    items: [
      "Quale destinazione: Villa d'Este, Villa Adriana o entrambe.",
      "L'indirizzo completo a Roma per il prelievo, con quanto la struttura vi ha detto sull'accesso limitato.",
      "La data e l'ora in cui vorreste partire.",
      "Se volete solo andata o anche il ritorno, e in questo caso all'incirca quando.",
      "Quanti adulti e bambini, con le età dei bambini, e qualsiasi cosa ingombrante portiate.",
    ],
    note:
      "Nulla di questo vi impegna. Un preventivo quota un viaggio in una data " +
      "precisa, e chiederlo non costa nulla.",
  },

  departure: {
    id: "coming-back",
    eyebrow: "Il ritorno",
    heading: "Tornare a Roma",
    lead:
      "Il ritorno è una tratta a sé, e darlo per automatico è l'equivoco più comune " +
      "su un viaggio come questo.",
    paragraphs: [
      "Un transfer di sola andata finisce quando scendete. Se volete un'auto che vi riporti a Roma, quello è un secondo viaggio e si preventiva come tale: per voi è meglio di un accordo presunto che nessuno ha messo per iscritto.",
      "Se un autista possa attendere invece di tornare è una domanda per l'operatore, non qualcosa che questa pagina possa stabilire in anticipo. Descrivete ciò che volete nella richiesta e la risposta arriva per iscritto, specifica per la vostra data, prima di qualsiasi conferma.",
    ],
    note:
      "Preferiamo preventivare un ritorno che volete davvero piuttosto che lasciar " +
      "intendere un'auto in attesa mai concordata.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sul viaggio per Tivoli",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Quale destinazione di Tivoli devo indicarvi?",
        answer:
          "Quella per cui avete biglietti o programmi: Villa d'Este o Villa Adriana. " +
          "Sono destinazioni distinte con ingressi distinti, quindi un'auto mandata " +
          "all'una non vi ha portati all'altra. Se volete vederle entrambe, ditelo: si " +
          "preventiva come due tappe.",
      },
      {
        question: "È un'escursione o un transfer?",
        answer:
          "Un transfer: un veicolo e un autista fra due indirizzi. Non ci sono guida, " +
          "ingressi, commento né itinerario fisso. Se volete che l'auto attenda o " +
          "torni a prendervi, si organizza e si quota dentro il preventivo invece di " +
          "darlo per scontato.",
      },
      {
        question: "Quanto ci vuole per arrivare a Tivoli da Roma?",
        answer:
          "Non pubblichiamo una cifra. Il traffico in uscita da Roma varia molto con " +
          "l'ora e con il giorno, e un numero secco verrebbe letto come una promessa. " +
          "Indicate l'orario di partenza preferito nella richiesta e l'operatore vi " +
          "consiglia per quella data.",
      },
      {
        question: "L'autista può attendere durante la visita?",
        answer:
          "Chiedetelo, indicando quanto pensate di fermarvi. L'attesa non è compresa " +
          "di base e non è qualcosa che questa pagina possa promettere al posto " +
          "dell'operatore. Ciò che è possibile torna per iscritto con il preventivo.",
      },
      {
        question: "Possiamo visitare entrambe le ville in un solo viaggio?",
        answer:
          "Descrivetelo nella richiesta. Sono due destinazioni e non una, quindi si " +
          "preventiva come due tappe invece di trattarlo come un unico transfer più " +
          "lungo. Se poi stia nella vostra giornata è una questione di tempi su cui " +
          "l'operatore può aiutarvi una volta noto il programma.",
      },
      {
        question: "Prenotate voi i biglietti per le ville?",
        answer:
          "No. Organizziamo solo il viaggio. Biglietti, orari e accessi sono gestiti " +
          "dai siti stessi, e i loro canali ufficiali sono l'unica fonte affidabile.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "tivoli",
        label: "Tivoli",
        detail: "La destinazione: due luoghi famosi sotto il nome di un paese, e come differiscono per una prenotazione.",
      },
      {
        page: "rome",
        label: "Transfer a Roma",
        detail: "La città da cui partite, e che cosa comportano per il prelievo le sue regole d'accesso.",
      },
      {
        page: "lazio",
        label: "Transfer nel Lazio",
        detail: "La regione, e tutto il resto di ciò che vi organizziamo.",
      },
      {
        page: "rome-stations",
        label: "Transfer dalle stazioni di Roma",
        detail: "Se il viaggio comincia da una stazione invece che da un albergo.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicate la destinazione e l'indirizzo di prelievo",
    body:
      "Villa d'Este o Villa Adriana, il vostro indirizzo a Roma, la data e se volete " +
      "il ritorno. Questa è una richiesta completa, e il preventivo torna per " +
      "iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Tivoli", page: "tivoli" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non sono compresi guida, ingressi né itinerario, e nessuna " +
      "attesa o ritorno è sottintesa se non è preventivata.",
  },
};

export const routeRomeTivoli: Record<Locale, RoutePage> = {
  en: romeTivoliEn,
  it: romeTivoliIt,
};
