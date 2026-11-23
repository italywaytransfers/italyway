import type { LazioPillar } from "./types";

/**
 * Lazio.
 *
 * ── A coverage map, not a guidebook ──────────────────────────────────────
 * Sicily and Puglia have pillars; Lazio did not, and Rome hung straight off
 * the homepage. This page closes that gap and does one job: say what this
 * site actually arranges in the region and send the reader to the page that
 * answers their journey.
 *
 * Every entity named below is a page that exists. Nothing is listed as
 * "coming soon", and no comune appears merely because it is in Lazio. The
 * `limits` band says so in as many words, because a regional page that
 * implies blanket coverage is the easiest kind of page to write and the
 * fastest way to lose a reader who books on the strength of it.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances, fares, and any description of Lazio as a
 * destination in the tourism sense. The reader arriving here is choosing a
 * transfer, not deciding where to go on holiday.
 */

const en: LazioPillar = {
  meta: {
    title: "Lazio Private Transfers – Rome, Airports & Cruise Port",
    description:
      "Private transfers across Lazio: Rome and its two airports, the Civitavecchia " +
      "cruise port, railway stations and Tivoli. What we arrange, and where.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Region",
    h1: "Private transfers in Lazio",
    lead:
      "Almost everyone arriving in Lazio arrives for Rome, and almost every " +
      "transfer here starts or ends at one of four places: two airports, a cruise " +
      "port, or a city address. This page is the map of what we arrange in the " +
      "region and which page answers your journey.",
    primaryCta: "Request a quotation",
    secondaryCta: "Transfers in Rome",
    facts: [
      { label: "Airports", value: "Fiumicino (FCO) and Ciampino (CIA)" },
      { label: "Cruise port", value: "Civitavecchia" },
      { label: "Beyond Rome", value: "Tivoli" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "What this page is",
    heading: "A coverage map for one region",
    paragraphs: [
      "Lazio is the region around Rome, and for a transfer business that geography is unusually simple: the demand concentrates on a handful of fixed points rather than spreading across the region. Two international airports serve the city. One cruise port, Civitavecchia, handles the ships. The railway stations sit inside Rome itself.",
      "What follows is organised the way a booking is made — by where you are starting and where you are going — rather than by what is worth seeing. Every page named below exists and is linked; nothing here is a promise about a page that has not been written.",
    ],
  },

  coverage: {
    id: "coverage",
    eyebrow: "What we arrange here",
    heading: "By the journey you are actually making",
    lead:
      "Four groups, matching the four ways people arrive in and leave this region. " +
      "Each links the page written for that journey.",
    groups: [
      {
        id: "airports",
        heading: "Rome's two airports",
        lead:
          "They are on opposite sides of the city and are regulated differently, " +
          "which matters more than which looks nearer on a map.",
        items: [
          {
            id: "fiumicino",
            page: "fiumicino",
            label: "Rome Fiumicino Airport (FCO)",
            detail: "The larger airport, with two regulated traffic areas and a lane reserved for private hire.",
          },
          {
            id: "ciampino",
            page: "ciampino",
            label: "Rome Ciampino Airport (CIA)",
            detail: "The smaller one, mostly low-cost, with an entirely separate rulebook for hired cars.",
          },
          {
            id: "route-fco-rome",
            page: "route-fco-rome",
            label: "Fiumicino Airport to Rome",
            detail: "Arriving: the flight is tracked, and the city address is the harder half.",
          },
          {
            id: "route-cia-rome",
            page: "route-cia-rome",
            label: "Ciampino Airport to Rome",
            detail: "The shorter run in, and what decides how it ends.",
          },
          {
            id: "route-rome-fco",
            page: "route-rome-fco",
            label: "Rome to Fiumicino Airport",
            detail: "Leaving: timed backwards from check-in, not forwards from a landing.",
          },
          {
            id: "route-rome-cia",
            page: "route-rome-cia",
            label: "Rome to Ciampino Airport",
            detail: "The departure where naming the right Rome airport matters most.",
          },
        ],
      },
      {
        id: "cruise",
        heading: "Civitavecchia cruise port",
        lead:
          "The port for Rome, and a working commercial port rather than a kerb. " +
          "Both directions are covered, and they are different problems.",
        items: [
          {
            id: "civitavecchia",
            page: "civitavecchia",
            label: "Civitavecchia cruise port",
            detail: "The port itself: its piers, its three gates and what each one admits.",
          },
          {
            id: "route-civ-rome",
            page: "route-civ-rome",
            label: "Civitavecchia to Rome",
            detail: "Disembarkation day, and where a car can actually be.",
          },
          {
            id: "route-civ-fco",
            page: "route-civ-fco",
            label: "Civitavecchia to Fiumicino Airport",
            detail: "Cruise to flight, with two timetables that never meet.",
          },
          {
            id: "route-rome-civitavecchia",
            page: "route-rome-civitavecchia",
            label: "Rome to Civitavecchia",
            detail: "Sailing day, counted backwards from the all-aboard time.",
          },
          {
            id: "route-fco-civitavecchia",
            page: "route-fco-civitavecchia",
            label: "Fiumicino Airport to Civitavecchia",
            detail: "Flying in and sailing the same day, or the day before.",
          },
        ],
      },
      {
        id: "city",
        heading: "Rome itself",
        lead:
          "The city hub and its railway stations, which are the other fixed points " +
          "a transfer starts or ends at.",
        items: [
          {
            id: "rome",
            page: "rome",
            label: "Transfers in Rome",
            detail: "The city, its restricted areas, and what an address decides about a pickup.",
          },
          {
            id: "rome-stations",
            page: "rome-stations",
            label: "Rome railway station transfers",
            detail: "Termini, Tiburtina, Ostiense and San Pietro, and which one your train actually uses.",
          },
        ],
      },
      {
        id: "beyond",
        heading: "Beyond the city",
        lead:
          "Where we arrange journeys outside Rome, each with a page of its own " +
          "rather than a mention.",
        items: [
          {
            id: "tivoli",
            page: "tivoli",
            label: "Tivoli",
            detail: "Two famous destinations under one town's name, and why the booking has to say which.",
          },
          {
            id: "route-rome-tivoli",
            page: "route-rome-tivoli",
            label: "Rome to Tivoli",
            detail: "The journey out, as a transfer rather than a tour.",
          },
        ],
      },
    ],
  },

  limits: {
    id: "limits",
    heading: "Selected places, not the whole region",
    body:
      "Lazio has three hundred and seventy-eight comuni. This site has pages for a " +
      "handful of them, and listing the rest would be padding. If your journey " +
      "starts or ends somewhere not named on this page, that does not mean it " +
      "cannot be arranged — it means there is no page about it, so ask and the " +
      "answer will be specific to your journey rather than generic.",
    note:
      "We would rather a short list that is true than a long one that is " +
      "decorative. Pages are added when there is something particular to say.",
  },

  practical: {
    id: "practical",
    eyebrow: "The same four questions",
    heading: "What every Lazio quotation needs",
    lead:
      "Whichever page you end on, the request looks much the same. These are the " +
      "details that change the answer.",
    items: [
      {
        term: "Where exactly, at both ends",
        detail:
          "A full street address rather than a hotel name, a terminal rather than an airport, a pier or a vessel rather than a port. Rome's centre has restricted areas, and the address decides where a car can lawfully stop.",
      },
      {
        term: "The flight, train or ship",
        detail:
          "A flight number, a train, or a vessel and date. Arriving, it lets the operator follow the actual service; leaving, it gives the deadline the collection is timed backwards from.",
      },
      {
        term: "Who is travelling, and with what",
        detail:
          "Adults and children separately, with the children's ages so a seat can be arranged in advance, and hold cases counted apart from cabin bags. Luggage decides the vehicle more often than passenger numbers do.",
      },
      {
        term: "Whether you want the return",
        detail:
          "Quoting both legs at once is usually simpler than coming back to it, particularly for an early departure or a sailing day.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about transfers in Lazio",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Which Rome airport should I use?",
        answer:
          "Whichever your flight uses — it is not a choice most travellers get to " +
          "make. Fiumicino (FCO) is the larger of the two and Ciampino (CIA) is " +
          "mostly low-cost. They sit on opposite sides of the city and are regulated " +
          "separately, so a transfer booked for one cannot simply be redirected to " +
          "the other.",
      },
      {
        question: "Do you cover the whole of Lazio?",
        answer:
          "No, and the pages on this site are the honest list. We have written pages " +
          "for Rome, its two airports, the Civitavecchia cruise port, the city's " +
          "railway stations and Tivoli. A journey elsewhere in the region can still " +
          "be quoted; there is simply no page about it yet.",
      },
      {
        question: "Is Civitavecchia the port for Rome?",
        answer:
          "Yes. It is the cruise port serving the city, and it is a working " +
          "commercial port rather than a terminal on a street. Its own page covers " +
          "the piers, the three gates and which vehicles each admits.",
      },
      {
        question: "Can you quote a journey that stops somewhere on the way?",
        answer:
          "Ask when you request the quotation and describe the stop. It changes the " +
          "vehicle's time and sometimes the vehicle itself, so it is priced into the " +
          "journey rather than added on the day. What it is not is a guided tour: we " +
          "arrange transport, not sightseeing.",
      },
      {
        question: "How much does a transfer in Lazio cost?",
        answer:
          "Every journey is quoted individually, and no price on this site is a " +
          "published tariff, because there is none. Send the two ends, the date and " +
          "the passenger and luggage counts, and the price comes back in writing " +
          "before anything is confirmed.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the two ends and the date",
    body:
      "Whichever journey in Lazio you are making, that is where a quotation starts. " +
      "Add the flight, train or ship it connects with and the reply can be specific " +
      "rather than hedged.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Transfers in Rome", page: "rome" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles or employ drivers directly.",
  },
};

const it: LazioPillar = {
  meta: {
    title: "Transfer privati nel Lazio – Roma, aeroporti e porto",
    description:
      "Transfer privati nel Lazio: Roma e i suoi due aeroporti, il porto crociere di " +
      "Civitavecchia, le stazioni e Tivoli. Che cosa organizziamo, e dove.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Regione",
    h1: "Transfer privati nel Lazio",
    lead:
      "Quasi tutti arrivano nel Lazio per Roma, e quasi ogni transfer qui comincia o " +
      "finisce in uno di quattro luoghi: due aeroporti, un porto crociere o un " +
      "indirizzo in città. Questa pagina è la mappa di ciò che organizziamo nella " +
      "regione e di quale pagina risponde al vostro viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer a Roma",
    facts: [
      { label: "Aeroporti", value: "Fiumicino (FCO) e Ciampino (CIA)" },
      { label: "Porto crociere", value: "Civitavecchia" },
      { label: "Oltre Roma", value: "Tivoli" },
    ],
  },

  intro: {
    id: "intro",
    eyebrow: "Che cos'è questa pagina",
    heading: "Una mappa della copertura di una sola regione",
    paragraphs: [
      "Il Lazio è la regione attorno a Roma e, per un'attività di transfer, quella geografia è insolitamente semplice: la domanda si concentra su pochi punti fissi invece di distribuirsi sul territorio. Due aeroporti internazionali servono la città. Un solo porto crociere, Civitavecchia, accoglie le navi. Le stazioni ferroviarie sono dentro Roma.",
      "Quello che segue è organizzato come si fa una prenotazione — da dove partite e dove andate — e non per ciò che vale la pena vedere. Ogni pagina citata qui sotto esiste ed è collegata: non c'è alcuna promessa su pagine non ancora scritte.",
    ],
  },

  coverage: {
    id: "coverage",
    eyebrow: "Che cosa organizziamo qui",
    heading: "In base al viaggio che state davvero facendo",
    lead:
      "Quattro gruppi, corrispondenti ai quattro modi in cui si arriva e si riparte " +
      "da questa regione. Ciascuno rimanda alla pagina scritta per quel viaggio.",
    groups: [
      {
        id: "airports",
        heading: "I due aeroporti di Roma",
        lead:
          "Si trovano su lati opposti della città e sono disciplinati in modo " +
          "diverso: conta più di quale sembri più vicino sulla cartina.",
        items: [
          {
            id: "fiumicino",
            page: "fiumicino",
            label: "Aeroporto di Roma Fiumicino (FCO)",
            detail: "Lo scalo maggiore, con due aree a traffico regolamentato e una corsia riservata al noleggio con conducente.",
          },
          {
            id: "ciampino",
            page: "ciampino",
            label: "Aeroporto di Roma Ciampino (CIA)",
            detail: "Il più piccolo, soprattutto low cost, con un regolamento del tutto diverso per le auto a noleggio.",
          },
          {
            id: "route-fco-rome",
            page: "route-fco-rome",
            label: "Dall'aeroporto di Fiumicino a Roma",
            detail: "All'arrivo il volo viene seguito: la metà difficile è l'indirizzo in città.",
          },
          {
            id: "route-cia-rome",
            page: "route-cia-rome",
            label: "Dall'aeroporto di Ciampino a Roma",
            detail: "Il tragitto più breve verso la città, e da che cosa dipende la sua conclusione.",
          },
          {
            id: "route-rome-fco",
            page: "route-rome-fco",
            label: "Da Roma all'aeroporto di Fiumicino",
            detail: "In partenza: si calcola a ritroso dal check-in, non in avanti da un atterraggio.",
          },
          {
            id: "route-rome-cia",
            page: "route-rome-cia",
            label: "Da Roma all'aeroporto di Ciampino",
            detail: "La partenza in cui indicare l'aeroporto romano giusto conta di più.",
          },
        ],
      },
      {
        id: "cruise",
        heading: "Il porto crociere di Civitavecchia",
        lead:
          "Il porto di Roma, e un porto commerciale in attività più che un " +
          "marciapiede. Entrambe le direzioni sono coperte, e sono problemi diversi.",
        items: [
          {
            id: "civitavecchia",
            page: "civitavecchia",
            label: "Porto crociere di Civitavecchia",
            detail: "Il porto in sé: le banchine, i tre varchi e che cosa ciascuno ammette.",
          },
          {
            id: "route-civ-rome",
            page: "route-civ-rome",
            label: "Da Civitavecchia a Roma",
            detail: "Il giorno dello sbarco, e dove un'auto può davvero stare.",
          },
          {
            id: "route-civ-fco",
            page: "route-civ-fco",
            label: "Da Civitavecchia all'aeroporto di Fiumicino",
            detail: "Dalla crociera al volo, con due orari che non si incontrano mai.",
          },
          {
            id: "route-rome-civitavecchia",
            page: "route-rome-civitavecchia",
            label: "Da Roma a Civitavecchia",
            detail: "Il giorno dell'imbarco, contato a ritroso dall'orario di salita a bordo.",
          },
          {
            id: "route-fco-civitavecchia",
            page: "route-fco-civitavecchia",
            label: "Dall'aeroporto di Fiumicino a Civitavecchia",
            detail: "Atterrare e imbarcarsi lo stesso giorno, o il giorno prima.",
          },
        ],
      },
      {
        id: "city",
        heading: "Roma stessa",
        lead:
          "La città e le sue stazioni ferroviarie, gli altri punti fissi da cui un " +
          "transfer parte o a cui arriva.",
        items: [
          {
            id: "rome",
            page: "rome",
            label: "Transfer a Roma",
            detail: "La città, le sue zone a traffico limitato e che cosa decide un indirizzo sul prelievo.",
          },
          {
            id: "rome-stations",
            page: "rome-stations",
            label: "Transfer dalle stazioni di Roma",
            detail: "Termini, Tiburtina, Ostiense e San Pietro, e quale usa davvero il vostro treno.",
          },
        ],
      },
      {
        id: "beyond",
        heading: "Oltre la città",
        lead:
          "Dove organizziamo viaggi fuori Roma, ciascuno con una pagina propria e " +
          "non con una semplice menzione.",
        items: [
          {
            id: "tivoli",
            page: "tivoli",
            label: "Tivoli",
            detail: "Due destinazioni famose sotto il nome di un solo paese, e perché la prenotazione deve dire quale.",
          },
          {
            id: "route-rome-tivoli",
            page: "route-rome-tivoli",
            label: "Da Roma a Tivoli",
            detail: "Il viaggio di andata, come transfer e non come escursione guidata.",
          },
        ],
      },
    ],
  },

  limits: {
    id: "limits",
    heading: "Luoghi selezionati, non l'intera regione",
    body:
      "Il Lazio ha trecentosettantotto comuni. Questo sito ha pagine per una " +
      "manciata di essi, ed elencare gli altri sarebbe riempitivo. Se il vostro " +
      "viaggio parte o arriva in un luogo non citato in questa pagina, non significa " +
      "che non si possa organizzare: significa che non esiste una pagina a riguardo, " +
      "quindi chiedete e la risposta sarà specifica per il vostro viaggio anziché " +
      "generica.",
    note:
      "Preferiamo un elenco breve e vero a uno lungo e decorativo. Le pagine si " +
      "aggiungono quando c'è qualcosa di preciso da dire.",
  },

  practical: {
    id: "practical",
    eyebrow: "Sempre le stesse quattro domande",
    heading: "Che cosa serve a ogni preventivo nel Lazio",
    lead:
      "Su qualunque pagina finiate, la richiesta è quasi identica. Questi sono i " +
      "dati che cambiano la risposta.",
    items: [
      {
        term: "Dove esattamente, a entrambi i capi",
        detail:
          "Un indirizzo completo e non il nome di un albergo, un terminal e non un aeroporto, una banchina o una nave e non un porto. Il centro di Roma ha aree limitate, e l'indirizzo decide dove un'auto possa legalmente fermarsi.",
      },
      {
        term: "Il volo, il treno o la nave",
        detail:
          "Un numero di volo, un treno, oppure nave e data. In arrivo permette all'operatore di seguire il servizio reale; in partenza dà la scadenza da cui si calcola a ritroso il prelievo.",
      },
      {
        term: "Chi viaggia, e con che cosa",
        detail:
          "Adulti e bambini separatamente, con le età perché il seggiolino si predisponga in anticipo, e valigie da stiva contate a parte dai bagagli a mano. Il bagaglio determina il veicolo più spesso del numero di passeggeri.",
      },
      {
        term: "Se volete anche il ritorno",
        detail:
          "Preventivare entrambe le tratte insieme è di solito più semplice che tornarci sopra, soprattutto per una partenza all'alba o per un giorno d'imbarco.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sui transfer nel Lazio",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Quale aeroporto di Roma conviene usare?",
        answer:
          "Quello che usa il vostro volo: per quasi tutti i viaggiatori non è una " +
          "scelta. Fiumicino (FCO) è il maggiore dei due e Ciampino (CIA) è " +
          "soprattutto low cost. Si trovano su lati opposti della città e sono " +
          "disciplinati separatamente, quindi un transfer prenotato per l'uno non si " +
          "può semplicemente dirottare sull'altro.",
      },
      {
        question: "Coprite tutto il Lazio?",
        answer:
          "No, e le pagine di questo sito sono l'elenco onesto. Abbiamo scritto " +
          "pagine per Roma, i suoi due aeroporti, il porto crociere di Civitavecchia, " +
          "le stazioni ferroviarie della città e Tivoli. Un viaggio altrove nella " +
          "regione si può comunque preventivare: semplicemente non esiste ancora una " +
          "pagina a riguardo.",
      },
      {
        question: "Civitavecchia è il porto di Roma?",
        answer:
          "Sì. È il porto crociere che serve la città, ed è un porto commerciale in " +
          "attività più che un terminal su una strada. La sua pagina tratta le " +
          "banchine, i tre varchi e quali veicoli ciascuno ammette.",
      },
      {
        question: "Potete preventivare un viaggio con una sosta lungo il percorso?",
        answer:
          "Chiedetelo in fase di preventivo descrivendo la sosta. Cambia i tempi del " +
          "veicolo e a volte il veicolo stesso, quindi si quota dentro il viaggio e " +
          "non si aggiunge il giorno stesso. Quello che non è: una visita guidata. " +
          "Organizziamo trasporto, non escursioni.",
      },
      {
        question: "Quanto costa un transfer nel Lazio?",
        answer:
          "Ogni viaggio è preventivato singolarmente, e nessun prezzo su questo sito " +
          "è una tariffa pubblicata, perché non ne esistono. Inviate i due capi, la " +
          "data e il numero di passeggeri e bagagli: il prezzo torna per iscritto " +
          "prima di qualsiasi conferma.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicateci i due capi e la data",
    body:
      "Qualunque sia il viaggio nel Lazio, è da lì che parte un preventivo. " +
      "Aggiungete il volo, il treno o la nave a cui si collega e la risposta potrà " +
      "essere precisa invece che prudente.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Roma", page: "rome" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli e non impieghiamo direttamente gli autisti.",
  },
};

export const lazio = { en, it };
