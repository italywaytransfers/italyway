import type { HotelTransfersPage } from "./types";

/**
 * Rome hotel transfers.
 *
 * ── What is sourced here, and what is deliberately not ───────────────────
 * One source, used once. Roma Servizi per la Mobilità lists, under the
 * exemptions for each of the five central limited-traffic zones, "le
 * categorie di legge, i taxi, le auto a noleggio con conducente (NCC)" —
 * the category a booked private transfer belongs to. Read 23 November 2026.
 *
 * What that page does **not** say is also load-bearing. It states no
 * permit, plate registration or authorisation step for NCC, so none is
 * described here. It says nothing about how the central zones are
 * monitored, so this page claims nothing about cameras — the same
 * correction was applied to the Rome hub on the same day. And it names no
 * provision for hotels registering a guest's vehicle, so the page tells
 * readers to ask their hotel rather than implying the hotel can authorise
 * anything.
 *
 * ── Why the ZTL section is short on purpose ──────────────────────────────
 * /destinations/rome carries the zones, the hours and the districts. This
 * page states the one fact a hotel pickup turns on and links there. That is
 * what keeps two pages from competing for the same query: the hub owns
 * "Rome transfers" and the districts, this page owns "Rome hotel pickup".
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * ZTL timetables, a district directory, a hotel directory, journey times,
 * distances, fares, and any promise that a vehicle will reach a particular
 * door.
 */

const ztlEn = {
  text:
    "That taxis and cars for hire with driver — noleggio con conducente, the " +
    "category a booked transfer belongs to — are among the exemptions for Rome's " +
    "central limited-traffic zones is published by Roma Servizi per la Mobilità. " +
    "Read 23 November 2026. The agency sets these rules by ordinance and changes " +
    "them, including seasonally:",
  linkText: "Roma Servizi per la Mobilità on the central ZTLs",
  href: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/",
};

const ztlIt = {
  text:
    "Che i taxi e le auto a noleggio con conducente — la categoria a cui " +
    "appartiene un transfer prenotato — rientrino fra le esenzioni delle zone a " +
    "traffico limitato del centro di Roma è pubblicato da Roma Servizi per la " +
    "Mobilità. Consultato il 23 novembre 2026. L'agenzia fissa queste regole per " +
    "ordinanza e le modifica, anche stagionalmente:",
  linkText: "Roma Servizi per la Mobilità sulle ZTL del centro",
  href: "https://romamobilita.it/muoversi-a-roma/ztl-in-centro/",
};

const en: HotelTransfersPage = {
  meta: {
    title: "Rome Hotel Transfers – Airport, Port and Station Pickups",
    description:
      "How a hotel pickup in Rome is arranged: what to send, why the meeting point " +
      "is agreed in advance, and what to confirm with your hotel.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Rome",
    h1: "Hotel transfers in Rome",
    lead:
      "A car to or from where you are staying, arranged in advance. The part that " +
      "catches people out is not whether a transfer is allowed into the centre — " +
      "it usually is — but whether the street outside the door can take a vehicle " +
      "at all. This page is about settling that before the morning of travel.",
    primaryCta: "Request a quotation",
    secondaryCta: "Transfers in Rome",
    facts: [
      { label: "What we need", value: "The hotel's street address, not just its name" },
      { label: "Limited-traffic zones", value: "Hire cars with driver are among the exemptions" },
      { label: "Meeting point", value: "Agreed before you travel, not on the day" },
    ],
  },

  details: {
    id: "details",
    eyebrow: "What to send",
    heading: "What a hotel pickup needs from you",
    lead:
      "A booking made from a hotel name alone is the commonest reason a pickup " +
      "goes wrong. These are the details that let the arrangement be settled in " +
      "advance instead of negotiated on the pavement.",
    groups: [
      {
        id: "where",
        heading: "Where you are staying",
        items: [
          {
            id: "name",
            label: "The hotel's full name",
            detail:
              "In full, as it is written. Rome has several hotels with near-identical names, and a partial one is how a car ends up outside the wrong building.",
          },
          {
            id: "address",
            label: "The full street address",
            detail:
              "Street and number, not the district or the nearest landmark. This is what decides whether the vehicle reaches the door or an agreed point nearby.",
          },
          {
            id: "entrance",
            label: "Anything the hotel has told you about arriving by car",
            detail:
              "Some properties have a separate entrance for vehicles, or advise a particular corner. They know their own street; pass on whatever they say.",
          },
        ],
      },
      {
        id: "when",
        heading: "When, and who",
        items: [
          {
            id: "time",
            label: "The date and pickup time",
            detail:
              "For a departure the operator works the time backwards from the deadline at the other end, so the flight, train or sailing matters more than the hour you had in mind.",
          },
          {
            id: "passengers",
            label: "Adults and children, counted separately",
            detail:
              "With the children's ages, so any seat is arranged in advance rather than found on the morning.",
          },
          {
            id: "luggage",
            label: "Hold cases and cabin bags, counted separately",
            detail:
              "Plus anything awkward: a pushchair, golf clubs, an instrument, a wheelchair. Luggage decides the vehicle more often than the number of passengers does.",
          },
        ],
      },
      {
        id: "going",
        heading: "Where you are going",
        items: [
          {
            id: "destination",
            label: "The destination, in the same detail",
            detail:
              "An airport is not a destination; a terminal is. A port is not a destination; a ship and a date are.",
          },
          {
            id: "service",
            label: "The flight, train or ship",
            detail:
              "A flight number, a train, or a vessel and sailing date. Arriving, it lets the operator follow the actual service; leaving, it sets the deadline.",
          },
          {
            id: "return",
            label: "Whether you want the return quoted too",
            detail:
              "Asking for both at once is usually simpler than coming back to it, particularly for an early departure.",
          },
        ],
      },
    ],
    note:
      "None of this commits you. A quotation prices one journey on one date, and " +
      "it comes back in writing before anything is confirmed.",
  },

  access: {
    id: "access",
    eyebrow: "The distinction that matters",
    heading: "Allowed on the street is not the same as able to use it",
    lead:
      "These two are constantly confused, and they have different answers. One is " +
      "a rule; the other is the width of a lane.",
    caption: "Permission to enter compared with physical access, for a hotel pickup in Rome",
    columns: ["The question", "What decides it", "What it means for your pickup"],
    rows: [
      {
        id: "permission",
        cells: [
          "May the car enter a limited-traffic zone?",
          "The city's ZTL rules",
          "Roma Servizi per la Mobilità lists cars for hire with driver among the exemptions for the central zones. A booked transfer is in that category.",
        ],
      },
      {
        id: "physical",
        cells: [
          "Can it actually drive to the door?",
          "The street itself",
          "Many central lanes are narrow or pedestrian, and some close for works, markets or events. No exemption makes a road wider, and this is the part that decides most pickups.",
        ],
      },
      {
        id: "outcome",
        cells: [
          "So where will I be met?",
          "Your address, agreed in advance",
          "Often at the door; in the oldest parts of the centre, at a point a short walk away. Either way it is settled when the journey is arranged, not on the day.",
        ],
      },
    ],
    note:
      "We do not promise that a vehicle will reach every hotel entrance in Rome, " +
      "because for some addresses that is not physically true. What we will do is " +
      "tell you where the meeting point is before you travel.",
    source: ztlEn,
  },

  meeting: {
    id: "meeting",
    eyebrow: "Before the day",
    heading: "Why the meeting point is agreed in advance",
    lead:
      "It takes one message to settle and saves the worst ten minutes of a trip.",
    paragraphs: [
      "A driver arriving at an address they cannot stop at has two bad options: circle, or stop somewhere they should not. Agreeing the point beforehand removes the choice. For most addresses it is simply the door; for an address on a pedestrian lane it is a named corner, a square or the nearest street a car can wait on.",
      "This is also why the full address matters more than the hotel name. The operator works out what is possible from the street, not from the booking site's description, and the answer comes back to you in writing with the quotation rather than being discovered on the morning.",
    ],
    askHotel: {
      heading: "Ask your hotel what they advise",
      body:
        "Reception deals with arriving cars every day and will usually tell you " +
        "exactly where drivers stop, which can differ from what a map suggests. " +
        "Send us what they say. We have no way to register a vehicle on your " +
        "behalf and no arrangement with any hotel — what we have is their street, " +
        "and their advice about it is the most useful thing you can forward.",
    },
  },

  journeys: {
    id: "journeys",
    eyebrow: "From the door",
    heading: "Journeys that can start where you are staying",
    lead:
      "Each of these has a page of its own. A hotel pickup is the starting point " +
      "rather than a different service.",
    items: [
      {
        id: "fiumicino",
        page: "route-rome-fco",
        label: "Your hotel to Fiumicino Airport",
        detail: "The departure, timed backwards from check-in rather than forwards from the hour you leave.",
      },
      {
        id: "ciampino",
        page: "route-rome-cia",
        label: "Your hotel to Ciampino Airport",
        detail: "Rome's other airport, where the rules for a hired car are entirely different.",
      },
      {
        id: "civitavecchia",
        page: "route-rome-civitavecchia",
        label: "Your hotel to Civitavecchia cruise port",
        detail: "Sailing day, counted backwards from the all-aboard time.",
      },
      {
        id: "stations",
        page: "rome-stations",
        label: "Rome railway station transfers",
        detail: "Termini, Tiburtina, Ostiense and San Pietro, and which one your train actually uses.",
      },
      {
        id: "arriving-fco",
        page: "route-fco-rome",
        label: "Fiumicino Airport to your hotel",
        detail: "The other direction, where the flight is tracked and the address is the harder half.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfers in Rome",
        detail: "The city hub, with the full ZTL detail and what each district means for a vehicle.",
      },
    ],
    note:
      "Any of these can be requested from your accommodation. The vehicle, the " +
      "exact pickup arrangement and the price are confirmed in the quotation — " +
      "nothing on this page is a statement that a particular service is available " +
      "on a particular date.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about hotel pickups in Rome",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "What details do you need for a hotel pickup?",
        answer:
          "The hotel's full name and street address, the date and time, how many " +
          "adults and children with the children's ages, hold and cabin bags counted " +
          "separately, and where you are going — with the flight, train or ship if " +
          "there is one. Anything the hotel has told you about arriving by car is " +
          "useful on top of that.",
      },
      {
        question: "Can a private transfer collect passengers inside a Rome ZTL?",
        answer:
          "Roma Servizi per la Mobilità lists cars for hire with driver among the " +
          "exemptions for the central limited-traffic zones, and a booked transfer is " +
          "in that category. That settles permission. It does not settle whether the " +
          "particular street can take a vehicle, which is a separate question and the " +
          "one that more often decides where you are met.",
      },
      {
        question: "What if my hotel is on a pedestrian street?",
        answer:
          "Then the pickup is at an agreed point nearby — typically the closest " +
          "corner or square a car can wait on. It is arranged when you book, so you " +
          "know where to walk to before you travel rather than working it out with " +
          "luggage in hand.",
      },
      {
        question: "Can the driver collect us outside the hotel?",
        answer:
          "For most addresses in Rome, yes. For addresses on narrow or pedestrian " +
          "lanes in the oldest parts of the centre, often not, and we will say so " +
          "rather than let you expect it. The answer depends on your street and comes " +
          "with the quotation.",
      },
      {
        question: "Can I request an airport or cruise-port transfer from my hotel?",
        answer:
          "Yes — that is the most common request on this page. Fiumicino, Ciampino " +
          "and Civitavecchia all have their own route pages, and a hotel pickup is " +
          "simply where that journey starts. The vehicle and the arrangement are " +
          "confirmed in the quotation.",
      },
      {
        question: "Should I contact the hotel before the pickup?",
        answer:
          "It helps. Reception sees cars arrive all day and usually knows exactly " +
          "where drivers stop, which is not always what a map suggests. Forward what " +
          "they tell you with your request. We hold no arrangement with any hotel and " +
          "cannot register a vehicle on your behalf.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the hotel address and where you are going",
    body:
      "Those two lines are most of a quotation. With the street rather than the " +
      "hotel name, the meeting point can be settled before you travel instead of " +
      "sorted out at the kerb.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles, employ drivers directly, or hold any " +
      "arrangement with a hotel.",
  },
};

const it: HotelTransfersPage = {
  meta: {
    title: "Transfer dagli hotel di Roma – Aeroporti, porto, stazioni",
    description:
      "Come si organizza un prelievo in hotel a Roma: che cosa inviare, perché il " +
      "punto d'incontro si concorda prima e che cosa chiedere alla struttura.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Roma",
    h1: "Transfer dagli hotel di Roma",
    lead:
      "Un'auto da o verso la struttura in cui alloggiate, organizzata in anticipo. " +
      "Ciò che coglie di sorpresa non è se un transfer possa entrare in centro — di " +
      "norma può — ma se la strada davanti alla porta sia percorribile da un " +
      "veicolo. Questa pagina serve a deciderlo prima della mattina della partenza.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer a Roma",
    facts: [
      { label: "Che cosa ci serve", value: "L'indirizzo dell'albergo, non solo il nome" },
      { label: "Zone a traffico limitato", value: "Le auto a noleggio con conducente sono fra le esenzioni" },
      { label: "Punto d'incontro", value: "Concordato prima di partire, non il giorno stesso" },
    ],
  },

  details: {
    id: "details",
    eyebrow: "Che cosa inviare",
    heading: "Che cosa serve per un prelievo in hotel",
    lead:
      "Una prenotazione fatta con il solo nome dell'albergo è il motivo più " +
      "frequente per cui un prelievo va storto. Questi sono i dati che permettono " +
      "di definire tutto prima, invece di trattarlo sul marciapiede.",
    groups: [
      {
        id: "where",
        heading: "Dove alloggiate",
        items: [
          {
            id: "name",
            label: "Il nome completo dell'albergo",
            detail:
              "Per esteso, come è scritto. A Roma esistono alberghi con nomi quasi identici, e un nome parziale è il modo in cui un'auto finisce davanti all'edificio sbagliato.",
          },
          {
            id: "address",
            label: "L'indirizzo completo",
            detail:
              "Via e numero, non il quartiere o il monumento più vicino. È questo a decidere se il veicolo arrivi alla porta o a un punto concordato poco distante.",
          },
          {
            id: "entrance",
            label: "Che cosa vi ha detto l'albergo sull'arrivo in auto",
            detail:
              "Alcune strutture hanno un ingresso separato per i veicoli, o consigliano un angolo preciso. Conoscono la loro strada: riferiteci quello che vi dicono.",
          },
        ],
      },
      {
        id: "when",
        heading: "Quando, e chi",
        items: [
          {
            id: "time",
            label: "La data e l'ora del prelievo",
            detail:
              "Per una partenza l'operatore calcola l'orario a ritroso dalla scadenza all'altro capo: contano più il volo, il treno o la nave dell'ora che avevate in mente.",
          },
          {
            id: "passengers",
            label: "Adulti e bambini, contati separatamente",
            detail:
              "Con l'età dei bambini, così il seggiolino si predispone in anticipo invece di cercarlo la mattina.",
          },
          {
            id: "luggage",
            label: "Valigie da stiva e bagagli a mano, contati a parte",
            detail:
              "Più tutto ciò che è ingombrante: passeggino, sacca da golf, uno strumento, una carrozzina. Il bagaglio determina il veicolo più spesso del numero di passeggeri.",
          },
        ],
      },
      {
        id: "going",
        heading: "Dove andate",
        items: [
          {
            id: "destination",
            label: "La destinazione, con lo stesso dettaglio",
            detail:
              "Un aeroporto non è una destinazione: lo è un terminal. Un porto non è una destinazione: lo sono una nave e una data.",
          },
          {
            id: "service",
            label: "Il volo, il treno o la nave",
            detail:
              "Numero di volo, treno, oppure nave e data di partenza. In arrivo permette di seguire il servizio reale; in partenza fissa la scadenza.",
          },
          {
            id: "return",
            label: "Se volete a preventivo anche il ritorno",
            detail:
              "Chiederli insieme è di solito più semplice che tornarci sopra, soprattutto per una partenza all'alba.",
          },
        ],
      },
    ],
    note:
      "Nulla di questo vi impegna. Un preventivo quota un viaggio in una data " +
      "precisa e arriva per iscritto prima di qualsiasi conferma.",
  },

  access: {
    id: "access",
    eyebrow: "La distinzione che conta",
    heading: "Poter entrare in una strada non è poterla percorrere",
    lead:
      "Le due cose vengono confuse di continuo e hanno risposte diverse. Una è una " +
      "regola; l'altra è la larghezza di un vicolo.",
    caption: "Permesso d'accesso e accessibilità fisica a confronto, per un prelievo in hotel a Roma",
    columns: ["La domanda", "Da che cosa dipende", "Che cosa comporta per il prelievo"],
    rows: [
      {
        id: "permission",
        cells: [
          "L'auto può entrare in una ZTL?",
          "Le regole comunali sulle ZTL",
          "Roma Servizi per la Mobilità elenca le auto a noleggio con conducente fra le esenzioni delle zone del centro. Un transfer prenotato rientra in quella categoria.",
        ],
      },
      {
        id: "physical",
        cells: [
          "Può davvero arrivare alla porta?",
          "La strada stessa",
          "Molti vicoli del centro sono stretti o pedonali, e alcuni chiudono per lavori, mercati o eventi. Nessuna esenzione allarga una strada: è questa la parte che decide quasi tutti i prelievi.",
        ],
      },
      {
        id: "outcome",
        cells: [
          "Dove verrò prelevato, allora?",
          "Il vostro indirizzo, concordato prima",
          "Spesso alla porta; nelle parti più antiche del centro, in un punto a pochi passi. In ogni caso si decide quando si organizza il viaggio, non il giorno stesso.",
        ],
      },
    ],
    note:
      "Non promettiamo che un veicolo raggiunga l'ingresso di qualsiasi albergo di " +
      "Roma, perché per certi indirizzi non è fisicamente vero. Quello che facciamo " +
      "è dirvi dove sarà il punto d'incontro prima che partiate.",
    source: ztlIt,
  },

  meeting: {
    id: "meeting",
    eyebrow: "Prima del giorno",
    heading: "Perché il punto d'incontro si concorda in anticipo",
    lead:
      "Si definisce con un messaggio e risparmia i dieci minuti peggiori di un viaggio.",
    paragraphs: [
      "Un autista che arriva a un indirizzo dove non può fermarsi ha due cattive opzioni: girare in tondo o fermarsi dove non dovrebbe. Concordare prima il punto elimina la scelta. Per quasi tutti gli indirizzi è semplicemente la porta; per un indirizzo su un vicolo pedonale è un angolo preciso, una piazza o la strada percorribile più vicina.",
      "È anche il motivo per cui l'indirizzo completo conta più del nome dell'albergo. L'operatore valuta il possibile a partire dalla strada, non dalla descrizione di un portale di prenotazione, e la risposta vi arriva per iscritto con il preventivo invece di scoprirla la mattina.",
    ],
    askHotel: {
      heading: "Chiedete alla struttura che cosa consiglia",
      body:
        "La reception vede arrivare automobili tutti i giorni e di solito sa " +
        "esattamente dove si fermano gli autisti, che non coincide sempre con ciò " +
        "che suggerisce una mappa. Riferiteci quello che vi dicono. Non possiamo " +
        "registrare un veicolo per vostro conto e non abbiamo accordi con alcun " +
        "albergo: quello che abbiamo è la loro strada, e il loro consiglio è la cosa " +
        "più utile che possiate inoltrarci.",
    },
  },

  journeys: {
    id: "journeys",
    eyebrow: "Dalla porta",
    heading: "I viaggi che possono partire da dove alloggiate",
    lead:
      "Ciascuno ha una pagina propria. Il prelievo in hotel è il punto di partenza, " +
      "non un servizio diverso.",
    items: [
      {
        id: "fiumicino",
        page: "route-rome-fco",
        label: "Dal vostro hotel all'aeroporto di Fiumicino",
        detail: "La partenza, calcolata a ritroso dal check-in e non in avanti dall'ora in cui uscite.",
      },
      {
        id: "ciampino",
        page: "route-rome-cia",
        label: "Dal vostro hotel all'aeroporto di Ciampino",
        detail: "L'altro aeroporto di Roma, dove per un'auto a noleggio valgono regole del tutto diverse.",
      },
      {
        id: "civitavecchia",
        page: "route-rome-civitavecchia",
        label: "Dal vostro hotel al porto di Civitavecchia",
        detail: "Il giorno dell'imbarco, contato a ritroso dall'orario di salita a bordo.",
      },
      {
        id: "stations",
        page: "rome-stations",
        label: "Transfer dalle stazioni di Roma",
        detail: "Termini, Tiburtina, Ostiense e San Pietro, e quale usa davvero il vostro treno.",
      },
      {
        id: "arriving-fco",
        page: "route-fco-rome",
        label: "Dall'aeroporto di Fiumicino al vostro hotel",
        detail: "La direzione opposta, in cui il volo viene seguito e la metà difficile è l'indirizzo.",
      },
      {
        id: "rome",
        page: "rome",
        label: "Transfer a Roma",
        detail: "La pagina della città, con il dettaglio completo sulle ZTL e su che cosa comporta ogni quartiere.",
      },
    ],
    note:
      "Ognuno di questi viaggi può essere richiesto dalla vostra struttura. " +
      "Veicolo, modalità esatta del prelievo e prezzo si confermano nel preventivo: " +
      "nulla in questa pagina afferma che un determinato servizio sia disponibile in " +
      "una determinata data.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sui prelievi in hotel a Roma",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Quali dati servono per un prelievo in hotel?",
        answer:
          "Nome completo dell'albergo e indirizzo, data e ora, quanti adulti e " +
          "bambini con le età dei bambini, valigie da stiva e bagagli a mano contati " +
          "a parte, e dove andate, con volo, treno o nave se ce n'è uno. In più, " +
          "tutto ciò che la struttura vi ha detto sull'arrivo in auto.",
      },
      {
        question: "Un transfer privato può prelevare i passeggeri dentro una ZTL di Roma?",
        answer:
          "Roma Servizi per la Mobilità elenca le auto a noleggio con conducente fra " +
          "le esenzioni delle zone a traffico limitato del centro, e un transfer " +
          "prenotato rientra in quella categoria. Questo risolve il permesso. Non " +
          "risolve se quella strada sia percorribile da un veicolo: è una domanda a " +
          "sé, ed è quella che più spesso decide dove verrete prelevati.",
      },
      {
        question: "E se il mio albergo è su una strada pedonale?",
        answer:
          "Allora il prelievo avviene in un punto concordato poco distante: di solito " +
          "l'angolo o la piazza più vicina in cui un'auto possa attendere. Si " +
          "stabilisce al momento della prenotazione, così sapete dove andare prima di " +
          "partire invece di capirlo con le valigie in mano.",
      },
      {
        question: "L'autista può venire a prenderci davanti all'albergo?",
        answer:
          "Per quasi tutti gli indirizzi di Roma, sì. Per quelli su vicoli stretti o " +
          "pedonali nelle parti più antiche del centro, spesso no, e ve lo diremo " +
          "invece di lasciarvelo credere. La risposta dipende dalla vostra strada e " +
          "arriva con il preventivo.",
      },
      {
        question: "Posso richiedere dal mio hotel un transfer per l'aeroporto o il porto?",
        answer:
          "Sì: è la richiesta più frequente di questa pagina. Fiumicino, Ciampino e " +
          "Civitavecchia hanno pagine proprie, e il prelievo in hotel è semplicemente " +
          "il punto da cui quel viaggio comincia. Veicolo e modalità si confermano nel " +
          "preventivo.",
      },
      {
        question: "Conviene contattare l'albergo prima del prelievo?",
        answer:
          "Aiuta. La reception vede arrivare automobili tutto il giorno e di solito " +
          "sa esattamente dove si fermano gli autisti, cosa che non sempre coincide " +
          "con la mappa. Inoltrateci quello che vi dicono. Non abbiamo accordi con " +
          "alcun albergo e non possiamo registrare un veicolo per vostro conto.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci l'indirizzo dell'albergo e dove andate",
    body:
      "Quelle due righe sono già quasi tutto un preventivo. Con la via invece del " +
      "nome dell'albergo, il punto d'incontro si definisce prima della partenza " +
      "anziché risolverlo sul marciapiede.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli, non impieghiamo direttamente gli " +
      "autisti e non abbiamo accordi con alcun albergo.",
  },
};

export const hotelTransfers = { en, it };
