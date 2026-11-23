import type { Locale } from "@/lib/site";
import type { RoutePage } from "../page-types";

/**
 * Rome to Frascati.
 *
 * ── Its own file, beside day-routes.ts ───────────────────────────────────
 * Tivoli's route lives in `day-routes.ts`. This one sits next to it rather
 * than inside it, because that file is already long and a single module per
 * journey stays easier to read than one that grows with every town added.
 * Both are day journeys out of Rome; neither shares a paragraph with the
 * other.
 *
 * ── Deliberately not a copy of the Tivoli route ──────────────────────────
 * Tivoli's page turns on a choice between two destinations. Frascati has no
 * such split. What it has is a hill town where the *address* decides
 * whether a vehicle can reach you at all, and an evening-visit pattern that
 * makes the return leg the thing people arrange too late.
 *
 * So this page leads on the address and on the return, where Tivoli leads
 * on which villa. Same service, different difficulty.
 *
 * ── What is not promised ─────────────────────────────────────────────────
 * No waiting, no return as standard, no tour, no tasting, no table, no
 * cellar visit, no admission, no multiple stops and no itinerary. The brief
 * ruled each of those out unless the operator had confirmed it, and none
 * has been confirmed. They appear here only as things to ask about.
 *
 * No journey time, distance or fare either, as everywhere else on this site.
 */

const romeFrascatiEn: RoutePage = {
  meta: {
    title: "Rome to Frascati Transfer – Private Car and Driver",
    description:
      "A private car from Rome to Frascati. The address detail that decides your " +
      "drop-off in a hill town, and how to ask for the return leg.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Rome",
    to: "Frascati",
    eyebrow: "Route",
    h1: "Rome to Frascati",
    lead:
      "A short run out of the city into the Castelli Romani. The road is the easy " +
      "part; what decides how the journey ends is the address you give, because a " +
      "small town on a slope is not uniformly reachable by car.",
    primaryCta: "Request a quote",
    secondaryCta: "About Frascati",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. This is transport, not a tour: " +
      "no guide, tasting, table, admission or itinerary is included. No price, " +
      "journey time or road distance appears here.",
  },

  lead: {
    id: "the-address",
    eyebrow: "What makes this route different",
    heading: "In a hill town the address does the work",
    text:
      "On an airport run the flight number is the critical line. Here it is the " +
      "street. These are the two things a request has to settle, and most requests " +
      "settle neither.",
    columns: [
      {
        id: "where",
        heading: "Where exactly you are going",
        subheading: "Not simply “Frascati”",
        rows: [
          {
            term: "A street, ideally a number",
            detail: "It lets the operator judge where the vehicle can stop and how far you will walk at the end. A town name cannot do that.",
          },
          {
            term: "What kind of place",
            detail: "A restaurant in the centre, a villa on the edge and a cellar in the surrounding hills are three different arrivals with three different answers.",
          },
          {
            term: "What they advise",
            detail: "If your destination has told you anything about arriving by car, pass it on. They know their own street better than any general rule.",
          },
        ],
      },
      {
        id: "back",
        heading: "Whether you are coming back",
        subheading: "The question people answer too late",
        rows: [
          {
            term: "A return is a second leg",
            detail: "It is not part of the outward booking and is not assumed. Ask for it with the original request and it is quoted alongside.",
          },
          {
            term: "Evening journeys",
            detail: "Many visits here run into the evening. If yours does, say so: a late return is easier arranged in advance than found afterwards.",
          },
          {
            term: "Waiting",
            detail: "Not included as standard. Say roughly how long you expect to be and the operator will confirm in writing what is possible for your date.",
          },
        ],
      },
    ],
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A Rome address, and a hill town street",
    lead:
      "Both ends are addresses rather than terminals, which makes this a simpler " +
      "journey than an airport run and a fussier one than it looks.",
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
            "Street and number. Parts of central Rome are restricted, and where a car may collect you is decided by the street rather than the district.",
        },
        {
          term: "The time you want to leave",
          detail:
            "There is no external deadline on this journey, so the hour is yours to choose. Traffic leaving Rome varies with it, and the operator will advise.",
        },
        {
          term: "Who is travelling",
          detail:
            "Adults and children separately, with the children's ages so any seat is arranged in advance rather than found on the day.",
        },
      ],
    },
    to: {
      id: "frascati",
      label: "Drop-off",
      name: "Frascati",
      page: "frascati",
      linkText: "About Frascati",
      items: [
        {
          term: "The street, not the town",
          detail:
            "The single most useful line in the request. A hill town centre is compact and sloping, and the street decides where the vehicle can practically stop.",
        },
        {
          term: "Whether you want the return",
          detail:
            "Ask for it now rather than later. A return to Rome is quoted as its own leg, and arranging it in advance is easier than arranging it at the end of an evening.",
        },
        {
          term: "What we do not arrange",
          detail:
            "Tables, tastings, cellar visits, tickets or guides. We take you to the address you give us; everything that happens there you book yourself.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead: "Five lines, and the second one matters most.",
    items: [
      "Your full Rome pickup address, with anything the property has said about restricted access.",
      "The destination address in Frascati — the street, not just the town.",
      "The date and the time you would like to leave.",
      "Whether you want a return to Rome, and roughly when.",
      "How many adults and children, with the children's ages.",
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
      "More people get caught out by this on the Frascati run than on any other day " +
      "journey from the city, because so many visits end late.",
    paragraphs: [
      "A one-way transfer finishes when you are set down. If you want a car back to Rome it is a second journey, quoted as one — and asking for it with your original request is far easier than arranging it from a restaurant late in the evening.",
      "Whether a driver can wait rather than return is for the operator to confirm, not for this page to promise. Say roughly how long you expect to be and the answer comes back in writing, specific to your date, before anything is agreed.",
    ],
    note:
      "We would rather quote a return you actually want than leave you assuming a " +
      "car that was never booked.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about the journey to Frascati",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "What address should I give you in Frascati?",
        answer:
          "The street you are actually heading for, with a number if you have one. " +
          "The town name alone is not enough: the centre is compact and on a slope, " +
          "and where a vehicle can stop depends on the street rather than the town.",
      },
      {
        question: "Can the car drop me in the historic centre?",
        answer:
          "It depends on the street and the hour, as it does in most small Italian " +
          "centres. Send the address and, if your destination has advised anything " +
          "about arriving by car, pass that on. Between the two the drop-off can be " +
          "settled before you travel.",
      },
      {
        question: "Do you include a wine tasting or book a restaurant?",
        answer:
          "No. We arrange the journey only. Tastings, tables and cellar visits are " +
          "yours to book, we make no recommendations, and nothing on this site should " +
          "be read as including them.",
      },
      {
        question: "Can the driver wait while we have lunch?",
        answer:
          "Ask, and say roughly how long. Waiting is not included as standard and is " +
          "not something this page can promise on the operator's behalf. What is " +
          "possible comes back in writing with the quotation.",
      },
      {
        question: "How long does it take from Rome?",
        answer:
          "We publish no figure. Traffic out of Rome varies greatly with the hour and " +
          "the day, and a single number would be read as a promise. Give your " +
          "preferred departure time and the operator will advise for that date.",
      },
      {
        question: "Can we go on to another town in the Castelli Romani?",
        answer:
          "Describe what you have in mind when you ask. Additional stops change the " +
          "vehicle's time and are quoted into the journey rather than added on the " +
          "day; they are not an entitlement that comes with the booking.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "frascati",
        label: "Frascati",
        detail: "The destination: what takes visitors there, and what decides an arrival.",
      },
      {
        page: "rome",
        label: "Transfers in Rome",
        detail: "The city you are starting from, and what its access rules mean for a pickup.",
      },
      {
        page: "route-rome-tivoli",
        label: "Rome to Tivoli",
        detail: "The other day journey out of the city, on the opposite side of Rome.",
      },
      {
        page: "lazio",
        label: "Transfers in Lazio",
        detail: "The region, and everything else arranged in it.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send both addresses and the date",
    body:
      "Where you are starting in Rome, the street you want in Frascati, and whether " +
      "you want bringing back. That is a complete request, and the quotation comes " +
      "back in writing before anything is confirmed.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Frascati", page: "frascati" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No guide, tasting, table or admission is included, and no " +
      "waiting or return is implied unless it is quoted.",
  },
};

const romeFrascatiIt: RoutePage = {
  meta: {
    title: "Transfer da Roma a Frascati – Auto privata con autista",
    description:
      "Un'auto privata da Roma a Frascati. Il dettaglio dell'indirizzo che decide " +
      "dove scendete in un paese in collina, e come chiedere il ritorno.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Roma",
    to: "Frascati",
    eyebrow: "Tratta",
    h1: "Da Roma a Frascati",
    lead:
      "Un breve tragitto fuori città, verso i Castelli Romani. La strada è la parte " +
      "facile; a decidere come finisce il viaggio è l'indirizzo che indicate, perché " +
      "un paese piccolo in pendenza non è ovunque raggiungibile in auto.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Su Frascati",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Questo è " +
      "trasporto, non un'escursione: non sono compresi guida, degustazioni, tavoli, " +
      "ingressi né itinerari. Qui non compaiono prezzi, durate o distanze.",
  },

  lead: {
    id: "the-address",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "In un paese in collina è l'indirizzo a fare il lavoro",
    text:
      "In una tratta aeroportuale la riga decisiva è il numero del volo. Qui è la " +
      "via. Sono due le cose che una richiesta deve definire, e quasi nessuna " +
      "richiesta ne definisce anche una sola.",
    columns: [
      {
        id: "where",
        heading: "Dove state andando esattamente",
        subheading: "Non semplicemente “Frascati”",
        rows: [
          {
            term: "Una via, possibilmente con il numero",
            detail: "Permette all'operatore di valutare dove il veicolo possa fermarsi e quanto camminerete alla fine. Il nome del paese non lo consente.",
          },
          {
            term: "Che tipo di luogo",
            detail: "Un ristorante in centro, una villa ai margini e una cantina sui colli attorno sono tre arrivi diversi con tre risposte diverse.",
          },
          {
            term: "Che cosa vi hanno detto",
            detail: "Se la vostra destinazione vi ha indicato qualcosa su come arrivare in auto, riferitecelo. Conoscono la propria via meglio di qualsiasi regola generale.",
          },
        ],
      },
      {
        id: "back",
        heading: "Se tornate indietro",
        subheading: "La domanda a cui si risponde troppo tardi",
        rows: [
          {
            term: "Il ritorno è una seconda tratta",
            detail: "Non fa parte della prenotazione di andata e non si dà per scontato. Chiedetelo con la richiesta iniziale e viene quotato insieme.",
          },
          {
            term: "I viaggi serali",
            detail: "Qui molte visite proseguono fino a sera. Se è il vostro caso, ditelo: un ritorno tardi si organizza meglio prima che dopo.",
          },
          {
            term: "L'attesa",
            detail: "Non è compresa di base. Indicate all'incirca quanto pensate di fermarvi e l'operatore confermerà per iscritto che cosa è possibile per la vostra data.",
          },
        ],
      },
    ],
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Un indirizzo a Roma, e una via in collina",
    lead:
      "Entrambi i capi sono indirizzi e non terminal: questo rende il viaggio più " +
      "semplice di una tratta aeroportuale e più delicato di quanto sembri.",
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
            "Via e numero. Parti del centro di Roma sono soggette a limitazioni, e dove un'auto possa prelevarvi lo decide la via, non il quartiere.",
        },
        {
          term: "L'ora in cui volete partire",
          detail:
            "Su questo viaggio non c'è una scadenza esterna: l'orario lo scegliete voi. Il traffico in uscita da Roma cambia con l'ora, e l'operatore vi consiglia.",
        },
        {
          term: "Chi viaggia",
          detail:
            "Adulti e bambini separatamente, con le età, così il seggiolino si predispone in anticipo invece di cercarlo il giorno stesso.",
        },
      ],
    },
    to: {
      id: "frascati",
      label: "Punto di discesa",
      name: "Frascati",
      page: "frascati",
      linkText: "Su Frascati",
      items: [
        {
          term: "La via, non il paese",
          detail:
            "La riga più utile della richiesta. Il centro di un paese in collina è raccolto e in pendenza, e la via decide dove il veicolo possa fermarsi concretamente.",
        },
        {
          term: "Se volete il ritorno",
          detail:
            "Chiedetelo subito, non dopo. Il rientro a Roma si quota come tratta a sé, e organizzarlo prima è più semplice che farlo a fine serata.",
        },
        {
          term: "Che cosa non organizziamo",
          detail:
            "Tavoli, degustazioni, visite in cantina, biglietti o guide. Vi portiamo all'indirizzo che ci date; tutto ciò che accade lì lo prenotate voi.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead: "Cinque righe, e la seconda è la più importante.",
    items: [
      "L'indirizzo completo di prelievo a Roma, con quanto la struttura vi ha detto sull'accesso limitato.",
      "L'indirizzo di destinazione a Frascati: la via, non solo il paese.",
      "La data e l'ora in cui vorreste partire.",
      "Se volete il ritorno a Roma, e all'incirca quando.",
      "Quanti adulti e bambini, con le età dei bambini.",
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
      "Su Frascati questo coglie di sorpresa più persone che su qualsiasi altra " +
      "gita fuori città, perché moltissime visite finiscono tardi.",
    paragraphs: [
      "Un transfer di sola andata finisce quando scendete. Se volete un'auto per tornare a Roma è un secondo viaggio e si quota come tale: chiederlo insieme alla richiesta iniziale è molto più semplice che organizzarlo da un ristorante a tarda sera.",
      "Se un autista possa attendere invece di tornare spetta all'operatore confermarlo, non a questa pagina prometterlo. Indicate all'incirca quanto pensate di fermarvi e la risposta arriva per iscritto, specifica per la vostra data, prima di qualsiasi accordo.",
    ],
    note:
      "Preferiamo preventivare un ritorno che volete davvero piuttosto che lasciarvi " +
      "contare su un'auto mai prenotata.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sul viaggio per Frascati",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Quale indirizzo devo indicarvi a Frascati?",
        answer:
          "La via verso cui siete davvero diretti, con il numero se lo avete. Il solo " +
          "nome del paese non basta: il centro è raccolto e in pendenza, e dove un " +
          "veicolo possa fermarsi dipende dalla via, non dal paese.",
      },
      {
        question: "L'auto può lasciarmi nel centro storico?",
        answer:
          "Dipende dalla via e dall'ora, come in quasi tutti i piccoli centri " +
          "italiani. Inviate l'indirizzo e, se la vostra destinazione vi ha dato " +
          "indicazioni su come arrivare in auto, riferitecele. Fra le due cose la " +
          "discesa si definisce prima di partire.",
      },
      {
        question: "È compresa una degustazione o prenotate voi il ristorante?",
        answer:
          "No. Organizziamo solo il viaggio. Degustazioni, tavoli e visite in cantina " +
          "li prenotate voi, non diamo consigli, e nulla in questo sito va letto come " +
          "se li comprendesse.",
      },
      {
        question: "L'autista può aspettare mentre pranziamo?",
        answer:
          "Chiedetelo, indicando all'incirca quanto. L'attesa non è compresa di base " +
          "e non è qualcosa che questa pagina possa promettere al posto " +
          "dell'operatore. Ciò che è possibile torna per iscritto con il preventivo.",
      },
      {
        question: "Quanto ci vuole da Roma?",
        answer:
          "Non pubblichiamo una cifra. Il traffico in uscita da Roma varia molto con " +
          "l'ora e con il giorno, e un numero secco verrebbe letto come una promessa. " +
          "Indicate l'orario di partenza preferito e l'operatore vi consiglia per " +
          "quella data.",
      },
      {
        question: "Possiamo proseguire verso un altro paese dei Castelli Romani?",
        answer:
          "Descrivete che cosa avete in mente quando scrivete. Le tappe aggiuntive " +
          "cambiano i tempi del veicolo e si quotano dentro il viaggio invece di " +
          "aggiungersi il giorno stesso: non sono un diritto compreso nella " +
          "prenotazione.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "frascati",
        label: "Frascati",
        detail: "La destinazione: che cosa vi porta i visitatori e che cosa decide un arrivo.",
      },
      {
        page: "rome",
        label: "Transfer a Roma",
        detail: "La città da cui partite, e che cosa comportano per il prelievo le sue regole d'accesso.",
      },
      {
        page: "route-rome-tivoli",
        label: "Da Roma a Tivoli",
        detail: "L'altra gita fuori città, dal lato opposto di Roma.",
      },
      {
        page: "lazio",
        label: "Transfer nel Lazio",
        detail: "La regione, e tutto il resto di ciò che vi organizziamo.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci i due indirizzi e la data",
    body:
      "Da dove partite a Roma, la via che volete a Frascati e se desiderate essere " +
      "riportati indietro. Questa è una richiesta completa, e il preventivo torna " +
      "per iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Frascati", page: "frascati" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non sono compresi guida, degustazioni, tavoli né ingressi, e " +
      "nessuna attesa o ritorno è sottintesa se non è preventivata.",
  },
};

export const routeRomeFrascati: Record<Locale, RoutePage> = {
  en: romeFrascatiEn,
  it: romeFrascatiIt,
};
