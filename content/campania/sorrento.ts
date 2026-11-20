import type { SorrentoDestination } from "./types";

/**
 * Sorrento.
 *
 * ── The correction this page exists to make ──────────────────────────────
 * Sorrento is sold as "the Amalfi Coast" by almost everyone who sells it,
 * and it is not on the Amalfi Coast. It stands on the northern shore of the
 * Sorrentine peninsula, looking across the Bay of Naples at Vesuvius.
 * Positano and Amalfi are on the southern shore, looking at open sea. The
 * two are separated by the ridge of the peninsula.
 *
 * That is not pedantry. It is the single fact that most changes what a
 * traveller should book, because a journey between the two sides crosses the
 * ridge rather than running along a coast, and because a reader who believes
 * Sorrento is "next to Positano" will mis-plan every day of their trip.
 *
 * ── What this page does not say ──────────────────────────────────────────
 * No journey times, no distances, no fares, no frequencies. None could be
 * sourced to a publisher this environment could actually read, and the house
 * rule is that an unread source is not a source.
 *
 * EAV's site did not respond when this page was written, so nothing is stated
 * about Circumvesuviana timetables, journey times or the Campania Express
 * beyond the bare fact that the railway is EAV's to publish. The link is
 * given so a reader can check it; no figure is reproduced from memory.
 *
 * ── What is sourced ──────────────────────────────────────────────────────
 * The ZTL, in full, from the Comune di Sorrento's own notice: the season, the
 * hours, the four electronic gates by street, and the permit rule. That
 * notice is dated 28 March 2025 and covers the 2025 season; the Comune's ZTL
 * topic listed nothing newer when this page was written, so the page says
 * which season it is quoting rather than implying it is the current one.
 * `ztl.currency` exists for that reason and must not be deleted to tidy the
 * layout.
 *
 * The airport coach is sourced to the operator, Autolinee Curreri, and only
 * for the fact that it runs and where it boards. Its own page warns that its
 * times are indicative, so no time is quoted here.
 */

const comuneZtlEn = {
  text:
    "The season, the hours, the four electronic gates and the permit rule are set " +
    "out by the Comune di Sorrento in its notice “Sorrento. Viabilità, ritorna la " +
    "Zona a Traffico Limitato”, dated 28 March 2025 and last updated 9 May 2025. " +
    "Read on 20 November 2026, when the Comune's ZTL topic listed nothing newer:",
  linkText: "the Comune di Sorrento's ZTL notice of 28 March 2025",
  href: "https://www.comune.sorrento.na.it/it/novita/page/sorrento-viabilita-ritorna-la-zona-a-traffico-limitato",
};

const comuneZtlIt = {
  text:
    "La stagione, gli orari, i quattro varchi elettronici e la regola sui permessi " +
    "sono indicati dal Comune di Sorrento nell'avviso «Sorrento. Viabilità, ritorna " +
    "la Zona a Traffico Limitato», del 28 marzo 2025 e aggiornato il 9 maggio 2025. " +
    "Consultato il 20 novembre 2026, quando nell'argomento ZTL del Comune non " +
    "risultava nulla di più recente:",
  linkText: "l'avviso ZTL del Comune di Sorrento del 28 marzo 2025",
  href: "https://www.comune.sorrento.na.it/it/novita/page/sorrento-viabilita-ritorna-la-zona-a-traffico-limitato",
};

const curreriEn = {
  text:
    "That a scheduled coach runs between Naples airport and Sorrento, and that it " +
    "boards at the airport's bus parking area, is stated by the operator, Autolinee " +
    "Curreri. Its own page says the times it shows are indicative, so none is " +
    "reproduced here. Read on 20 November 2026:",
  linkText: "Curreri Viaggi's airport shuttle page",
  href: "https://curreriviaggi.it/en/",
};

const curreriIt = {
  text:
    "Che un pullman di linea colleghi l'aeroporto di Napoli e Sorrento, e che la " +
    "salita avvenga nell'area bus dell'aeroporto, è dichiarato dall'operatore, " +
    "Autolinee Curreri. La sua stessa pagina avverte che gli orari indicati sono " +
    "orientativi, perciò qui non se ne riporta nessuno. Consultata il 20 novembre 2026:",
  linkText: "la pagina dello shuttle aeroportuale di Curreri Viaggi",
  href: "https://curreriviaggi.it/en/",
};

const eavEn = {
  text:
    "Sorrento is the end of the Circumvesuviana railway from Naples, which is run by " +
    "EAV. Its timetable is EAV's to publish and changes with the season, so no " +
    "frequency or journey time is quoted here. The operator's site did not respond " +
    "when this page was written on 20 November 2026; check it directly:",
  linkText: "EAV, the railway's operator",
  href: "https://www.eavsrl.it/",
};

const eavIt = {
  text:
    "Sorrento è il capolinea della ferrovia Circumvesuviana da Napoli, gestita da " +
    "EAV. L'orario è di competenza di EAV e cambia con la stagione, perciò qui non " +
    "si riporta alcuna frequenza né durata. Il sito dell'operatore non ha risposto " +
    "quando questa pagina è stata scritta, il 20 novembre 2026; verificatelo direttamente:",
  linkText: "EAV, il gestore della ferrovia",
  href: "https://www.eavsrl.it/",
};

const en: SorrentoDestination = {
  meta: {
    title: "Sorrento Private Transfers & Airport Links – Book a Car",
    description:
      "Sorrento faces the Bay of Naples, not the Amalfi Coast. How to reach it " +
      "from Naples airport, what the evening ZTL restricts, and what to send " +
      "for a quote.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Sorrentine peninsula",
    h1: "Private transfers to Sorrento",
    lead:
      "Sorrento is not on the Amalfi Coast, whatever the brochures say. It looks " +
      "north across the Bay of Naples at Vesuvius, while Positano and Amalfi look " +
      "south at open sea from the far side of the same ridge. Almost everything that " +
      "matters about getting here follows from that one fact.",
    primaryCta: "Request a quotation",
    secondaryCta: "What to have ready",
    bearings: {
      heading: "Which water each place faces",
      items: [
        { id: "sorrento", label: "Sorrento", value: "North, to the Bay of Naples and Vesuvius" },
        { id: "positano", label: "Positano", value: "South, to the open Tyrrhenian" },
        { id: "amalfi", label: "Amalfi", value: "South, further along the same shore" },
      ],
    },
  },

  orientation: {
    id: "orientation",
    eyebrow: "The distinction nobody draws",
    heading: "Sorrento, Positano and Amalfi are not interchangeable",
    lead:
      "These three are sold as one destination and planned as one destination, which " +
      "is how people end up booking a hotel on the wrong side of a mountain. The same " +
      "four questions, answered for each.",
    caption: "Sorrento compared with the two Amalfi Coast towns most often confused with it",
    columns: ["Place", "Which coast", "Faces", "Arriving by road means"],
    rows: [
      {
        id: "sorrento",
        cells: [
          "Sorrento",
          "Sorrentine peninsula, northern shore",
          "The Bay of Naples and Vesuvius",
          "Approaching from the Naples side, without crossing the ridge",
        ],
      },
      {
        id: "positano",
        page: "positano",
        cells: [
          "Positano",
          "Amalfi Coast, southern shore",
          "Open sea to the south",
          "Crossing the peninsula, then the coast road",
        ],
      },
      {
        id: "amalfi",
        page: "amalfi",
        cells: [
          "Amalfi",
          "Amalfi Coast, southern shore",
          "Open sea to the south",
          "The coast road, from either the Sorrento or the Salerno end",
        ],
      },
    ],
    note:
      "This is why a transfer between Sorrento and Positano is not the short hop a map " +
      "suggests. It crosses the spine of the peninsula and then follows a road cut into " +
      "a cliff. We publish no duration for it, because the honest answer depends on the " +
      "season, the hour and the traffic on a single road.",
  },

  arriving: {
    id: "arriving",
    eyebrow: "Gateways",
    heading: "What actually reaches Sorrento",
    lead:
      "Four ways in, and they are not equivalent. The railway and the coach are " +
      "scheduled services run by other companies; sailings are seasonal; a private " +
      "transfer is the only one that collects you where you are standing.",
    caption: "How travellers reach Sorrento, and who operates each option",
    columns: ["Route in", "Operated by", "What it means in practice"],
    rows: [
      {
        id: "airport",
        page: "nap-airport",
        cells: [
          "Naples airport (NAP)",
          "Scheduled coach, or a private transfer",
          "The nearest airport. A coach runs from the airport's bus area; a private car meets the flight.",
        ],
      },
      {
        id: "rail",
        cells: [
          "Circumvesuviana railway",
          "EAV",
          "Sorrento is the end of the line from Naples. Luggage and steps are the usual complaint.",
        ],
      },
      {
        id: "sea",
        cells: [
          "Marina Piccola, Sorrento's port",
          "Several ferry and hydrofoil operators",
          "Seasonal sailings across the bay and to Capri. Check the operator for the current season.",
        ],
      },
      {
        id: "naples",
        page: "naples",
        cells: [
          "Naples city, station or cruise quay",
          "Private transfer",
          "Door to door from wherever in Naples you actually are, the cruise terminal included.",
        ],
      },
    ],
    note:
      "We arrange journeys with independent licensed operators and quote each one " +
      "individually. We do not own vehicles, and we publish no timetable of our own.",
    sources: [eavEn, curreriEn],
  },

  ztl: {
    id: "ztl",
    eyebrow: "Restricted zone",
    heading: "Sorrento's centre closes to traffic in the evening",
    lead:
      "Sorrento operates a seasonal zona a traffico limitato over its centre, enforced " +
      "by camera at four gates. It matters for a transfer because it governs how close " +
      "to your door a car may lawfully stop, and at what hour.",
    season: "The Comune's most recent published notice covers 1 April to 25 October",
    hours: [
      { id: "daily", label: "Every day", value: "19:30 to 04:00 the following morning" },
      { id: "holidays", label: "Public holidays, additionally", value: "10:00 to 13:00" },
    ],
    caption: "The four electronic gates, as the Comune lists them",
    columns: ["Gate", "Where it stands"],
    rows: [
      { id: "fuorimura", cells: ["Via Fuorimura", "At the start of Viale Caruso"] },
      { id: "italia", cells: ["Corso Italia", "At the Chiesa del Carmine"] },
      { id: "correale", cells: ["Via Correale", "By the Achille Lauro municipal car park"] },
      { id: "sanfrancesco", cells: ["Via San Francesco", "At the junction with Via Luigi De Maio"] },
    ],
    permit: {
      heading: "Entry needs a permit, not a payment",
      body:
        "Unlike some Italian towns, this is not a charge a visitor can simply pay. The " +
        "Comune states that entering the ZTL requires a valid annual permit, reserved " +
        "for residents, people who work there and other categories set out in the " +
        "regulation. A visitor's hire car is not one of those categories.",
    },
    currency: {
      heading: "Check the season before you travel",
      body:
        "The notice this is taken from is dated 28 March 2025 and sets out the 2025 " +
        "season. When this page was written the Comune's ZTL topic listed nothing newer, " +
        "so treat the dates above as the most recently published schedule rather than a " +
        "confirmed one for your travel year. The hours and the gates are the stable " +
        "part; the season's start and end are what to check.",
    },
    source: comuneZtlEn,
  },

  checklist: {
    id: "checklist",
    eyebrow: "Before you ask",
    heading: "What to have ready for a Sorrento quotation",
    lead:
      "Every journey here is priced individually, and the items below are what change " +
      "the answer. Having them to hand turns several emails into one.",
    groups: [
      {
        id: "where",
        heading: "Where, exactly",
        items: [
          {
            id: "address",
            label: "The full address in Sorrento",
            detail:
              "Not just the hotel name. Whether it sits inside the ZTL, and whether its " +
              "street takes a car at all, decides where you can be set down.",
          },
          {
            id: "pickup",
            label: "Where you are starting",
            detail:
              "Airport terminal, railway station, cruise quay or an address. For a flight, " +
              "the number and arrival time; for a ship, the vessel and the berth.",
          },
          {
            id: "side",
            label: "Which side of the peninsula you go to next",
            detail:
              "If Positano or Amalfi follows, say so when you ask. It is a different " +
              "journey from anything on the Sorrento side, not an extension of it.",
          },
        ],
      },
      {
        id: "who",
        heading: "Who is travelling",
        items: [
          {
            id: "passengers",
            label: "How many adults and children",
            detail:
              "Children's ages matter, because a child's seat is arranged in advance " +
              "rather than found in the boot.",
          },
          {
            id: "luggage",
            label: "Cases, and the awkward items",
            detail:
              "Hold cases and cabin bags separately. Say if there is a pushchair, golf " +
              "clubs, a cello or a wheelchair — those decide the vehicle.",
          },
        ],
      },
      {
        id: "when",
        heading: "When",
        items: [
          {
            id: "time",
            label: "Date and time, and which way the clock runs",
            detail:
              "An arrival is timed from the flight or the ship. A departure is timed " +
              "backwards from check-in, and the evening ZTL can affect where the car is " +
              "able to wait for you.",
          },
          {
            id: "return",
            label: "Whether you want the return as well",
            detail:
              "Quoting both at once is usually simpler than coming back to it, " +
              "particularly for an early departure.",
          },
        ],
      },
    ],
    note:
      "None of this commits you. A quotation is a price for a specific journey on a " +
      "specific day, and asking for one costs nothing.",
  },

  ownerClaim: {
    label: "What we can tell you ourselves",
    heading: "How a Sorrento transfer is actually arranged",
    body:
      "We coordinate each journey with licensed local operators on the peninsula " +
      "rather than running vehicles ourselves, and every booking is quoted " +
      "individually before it is confirmed. Where an address sits inside the " +
      "restricted zone, the driver agrees the nearest lawful setting-down point with " +
      "you in advance, so that it is settled before you are standing in the street " +
      "with your cases rather than after.",
  },

  onward: {
    id: "onward",
    eyebrow: "Nearby",
    heading: "The rest of the bay, and the coast beyond",
    lead:
      "Pages that exist today. Each is written for its own place rather than spun " +
      "from this one.",
    items: [
      {
        id: "route-nap-sorrento",
        page: "route-nap-sorrento",
        label: "Naples airport to Sorrento",
        detail: "The journey itself: a controlled zone at the airport, a restricted centre here.",
      },
      {
        id: "naples",
        page: "naples",
        label: "Naples",
        detail: "The city, its stations and the quays that share its name.",
      },
      {
        id: "nap-airport",
        page: "nap-airport",
        label: "Naples airport (NAP)",
        detail: "The gateway for almost everyone arriving here by air.",
      },
      {
        id: "positano",
        page: "positano",
        label: "Positano",
        detail: "Over the ridge, and the strictest access rules on the coast.",
      },
      {
        id: "amalfi",
        page: "amalfi",
        label: "Amalfi",
        detail: "Further along the southern shore, reached by the coast road.",
      },
      {
        id: "ravello",
        page: "ravello",
        label: "Ravello",
        detail: "Above Amalfi, and a climb rather than a coastal run.",
      },
      {
        id: "pompeii",
        page: "pompeii",
        label: "Pompeii",
        detail: "On the Naples side, and a common stop on the way in or out.",
      },
    ],
    pending: {
      heading: "Not yet written",
      body:
        "The Naples airport run to Sorrento now has its own page, linked above. The " +
        "equivalents for Positano and Amalfi are planned and are not linked until they " +
        "exist, because a link to a page that is not there is worse than no link at all.",
    },
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked before travelling to Sorrento",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Is Sorrento on the Amalfi Coast?",
        answer:
          "No. Sorrento is on the northern side of the Sorrentine peninsula, facing the " +
          "Bay of Naples and Vesuvius. The Amalfi Coast is the southern side of the same " +
          "peninsula, where Positano and Amalfi are. They are close on a map and " +
          "separated by a mountain ridge in practice.",
      },
      {
        question: "Which airport should I fly into for Sorrento?",
        answer:
          "Naples (NAP) is the nearest. There is no airport on the peninsula itself, so " +
          "the connection onward is by road either way — a scheduled coach, or a private " +
          "transfer that meets the flight.",
      },
      {
        question: "Can a car drop me at my hotel door in Sorrento?",
        answer:
          "Sometimes, and it depends on the address and the hour. The centre is a " +
          "restricted zone in the evenings in season, entry needs an annual permit rather " +
          "than a payment, and some streets in the old town are too narrow for a car " +
          "regardless. Give the full address when you ask and the setting-down point can " +
          "be agreed in advance.",
      },
      {
        question: "What are the ZTL hours in Sorrento?",
        answer:
          "The Comune's most recently published notice sets them at 19:30 to 04:00 every " +
          "day, with an additional 10:00 to 13:00 window on public holidays, over a season " +
          "running from 1 April to 25 October. That notice is dated March 2025, so confirm " +
          "the season's dates for your own travel year.",
      },
      {
        question: "How long does it take to get from Sorrento to Positano?",
        answer:
          "We publish no figure, because an honest one does not exist as a single number. " +
          "The road crosses the peninsula and then runs along a cliff, and in high season " +
          "the difference between a quiet morning and a busy afternoon is substantial. Ask, " +
          "and the quotation will be for your date and time.",
      },
      {
        question: "Is there a train to Sorrento?",
        answer:
          "Yes. Sorrento is the end of the Circumvesuviana line from Naples, run by EAV. " +
          "Timetables and fares are EAV's to publish and vary by season, so check the " +
          "operator directly rather than relying on a figure quoted elsewhere.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the journey and we will price it",
    body:
      "One form, one reply. Include the full Sorrento address and the flight, ship or " +
      "train it connects with, and the quotation can account for the restricted zone " +
      "rather than discovering it on the night.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Naples airport", page: "nap-airport" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price on this page is a published tariff, because there is none.",
  },
};

const it: SorrentoDestination = {
  meta: {
    title: "Transfer privati per Sorrento – Prenota il tuo autista",
    description:
      "Sorrento guarda il Golfo di Napoli, non la Costiera Amalfitana. Come " +
      "arrivarci dall'aeroporto, cosa limita la ZTL serale e cosa preparare " +
      "per un preventivo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Penisola sorrentina",
    h1: "Transfer privati per Sorrento",
    lead:
      "Sorrento non è in Costiera Amalfitana, qualunque cosa dicano i dépliant. Guarda " +
      "a nord, verso il Golfo di Napoli e il Vesuvio, mentre Positano e Amalfi guardano " +
      "a sud, verso il mare aperto, dall'altro versante dello stesso crinale. Quasi " +
      "tutto ciò che conta per arrivare qui discende da questo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Che cosa preparare",
    bearings: {
      heading: "Verso quale mare guarda ciascun luogo",
      items: [
        { id: "sorrento", label: "Sorrento", value: "A nord, sul Golfo di Napoli e il Vesuvio" },
        { id: "positano", label: "Positano", value: "A sud, sul Tirreno aperto" },
        { id: "amalfi", label: "Amalfi", value: "A sud, più avanti sulla stessa costa" },
      ],
    },
  },

  orientation: {
    id: "orientation",
    eyebrow: "La distinzione che nessuno fa",
    heading: "Sorrento, Positano e Amalfi non sono intercambiabili",
    lead:
      "Vengono vendute come un'unica destinazione e pianificate come un'unica " +
      "destinazione: così si finisce per prenotare un albergo dal lato sbagliato di una " +
      "montagna. Le stesse quattro domande, per ciascuna.",
    caption: "Sorrento a confronto con i due centri della Costiera con cui è più spesso confusa",
    columns: ["Luogo", "Quale costa", "Guarda", "Arrivare in auto significa"],
    rows: [
      {
        id: "sorrento",
        cells: [
          "Sorrento",
          "Penisola sorrentina, versante nord",
          "Il Golfo di Napoli e il Vesuvio",
          "Arrivare dal lato di Napoli, senza valicare il crinale",
        ],
      },
      {
        id: "positano",
        page: "positano",
        cells: [
          "Positano",
          "Costiera Amalfitana, versante sud",
          "Il mare aperto a sud",
          "Attraversare la penisola, poi la strada costiera",
        ],
      },
      {
        id: "amalfi",
        page: "amalfi",
        cells: [
          "Amalfi",
          "Costiera Amalfitana, versante sud",
          "Il mare aperto a sud",
          "La strada costiera, dal lato di Sorrento o da quello di Salerno",
        ],
      },
    ],
    note:
      "Per questo un transfer tra Sorrento e Positano non è il breve salto che suggerisce " +
      "una cartina. Supera la dorsale della penisola e poi segue una strada scavata nella " +
      "roccia. Non pubblichiamo una durata, perché la risposta onesta dipende dalla " +
      "stagione, dall'ora e dal traffico su un'unica strada.",
  },

  arriving: {
    id: "arriving",
    eyebrow: "Porte d'accesso",
    heading: "Che cosa arriva davvero a Sorrento",
    lead:
      "Quattro vie d'accesso, e non sono equivalenti. La ferrovia e il pullman sono " +
      "servizi di linea gestiti da altre società; i collegamenti via mare sono " +
      "stagionali; un transfer privato è l'unico che vi prende dove vi trovate.",
    caption: "Come si raggiunge Sorrento e chi gestisce ciascuna opzione",
    columns: ["Via d'accesso", "Gestita da", "Che cosa significa in pratica"],
    rows: [
      {
        id: "airport",
        page: "nap-airport",
        cells: [
          "Aeroporto di Napoli (NAP)",
          "Pullman di linea, o transfer privato",
          "L'aeroporto più vicino. Un pullman parte dall'area bus; l'auto privata attende il volo.",
        ],
      },
      {
        id: "rail",
        cells: [
          "Ferrovia Circumvesuviana",
          "EAV",
          "Sorrento è il capolinea da Napoli. Bagagli e scale sono la lamentela ricorrente.",
        ],
      },
      {
        id: "sea",
        cells: [
          "Marina Piccola, il porto di Sorrento",
          "Diversi operatori di traghetti e aliscafi",
          "Collegamenti stagionali nel golfo e per Capri. Verificate la stagione con l'operatore.",
        ],
      },
      {
        id: "naples",
        page: "naples",
        cells: [
          "Napoli città, stazione o banchina crociere",
          "Transfer privato",
          "Porta a porta da dove vi trovate davvero a Napoli, terminal crociere compreso.",
        ],
      },
    ],
    note:
      "Organizziamo ogni viaggio con operatori locali autorizzati e lo preventiviamo " +
      "singolarmente. Non possediamo veicoli e non pubblichiamo un orario nostro.",
    sources: [eavIt, curreriIt],
  },

  ztl: {
    id: "ztl",
    eyebrow: "Zona a traffico limitato",
    heading: "La sera il centro di Sorrento chiude al traffico",
    lead:
      "Sorrento applica una zona a traffico limitato stagionale sul centro, controllata " +
      "da telecamere in quattro varchi. Conta per un transfer perché stabilisce quanto " +
      "vicino alla porta un'auto possa legalmente fermarsi, e a che ora.",
    season: "L'avviso più recente del Comune riguarda il periodo dal 1° aprile al 25 ottobre",
    hours: [
      { id: "daily", label: "Tutti i giorni", value: "Dalle 19.30 alle 4 del mattino seguente" },
      { id: "holidays", label: "Nei giorni festivi, in più", value: "Dalle 10 alle 13" },
    ],
    caption: "I quattro varchi elettronici, come li elenca il Comune",
    columns: ["Varco", "Dove si trova"],
    rows: [
      { id: "fuorimura", cells: ["Via Fuorimura", "All'inizio di viale Caruso"] },
      { id: "italia", cells: ["Corso Italia", "All'altezza della chiesa del Carmine"] },
      { id: "correale", cells: ["Via Correale", "Nei pressi del parcheggio comunale Achille Lauro"] },
      { id: "sanfrancesco", cells: ["Via San Francesco", "All'intersezione con via Luigi De Maio"] },
    ],
    permit: {
      heading: "Per entrare serve un permesso, non un pagamento",
      body:
        "A differenza di altri centri italiani, non è una tariffa che un visitatore possa " +
        "semplicemente pagare. Il Comune indica che per accedere alla ZTL occorre un " +
        "regolare permesso annuale, riservato a residenti, lavoratori e alle altre " +
        "categorie previste dal regolamento. L'auto a noleggio di un turista non rientra " +
        "in quelle categorie.",
    },
    currency: {
      heading: "Verificate la stagione prima di partire",
      body:
        "L'avviso da cui questi dati provengono è del 28 marzo 2025 e riguarda la stagione " +
        "2025. Quando questa pagina è stata scritta, nell'argomento ZTL del Comune non " +
        "risultava nulla di più recente: consideratele quindi le date pubblicate più di " +
        "recente, non quelle confermate per il vostro anno di viaggio. Gli orari e i varchi " +
        "sono la parte stabile; l'inizio e la fine della stagione sono ciò da verificare.",
    },
    source: comuneZtlIt,
  },

  checklist: {
    id: "checklist",
    eyebrow: "Prima di scrivere",
    heading: "Che cosa preparare per un preventivo su Sorrento",
    lead:
      "Ogni viaggio qui è preventivato singolarmente, e gli elementi qui sotto sono " +
      "quelli che cambiano la risposta. Averli pronti trasforma più email in una sola.",
    groups: [
      {
        id: "where",
        heading: "Dove, esattamente",
        items: [
          {
            id: "address",
            label: "L'indirizzo completo a Sorrento",
            detail:
              "Non il solo nome dell'albergo. Se si trovi dentro la ZTL, e se la sua strada " +
              "sia percorribile in auto, determina dove potete scendere.",
          },
          {
            id: "pickup",
            label: "Da dove partite",
            detail:
              "Terminal aeroportuale, stazione, banchina crociere o un indirizzo. Per un volo, " +
              "numero e orario di arrivo; per una nave, nome e ormeggio.",
          },
          {
            id: "side",
            label: "Su quale versante andrete poi",
            detail:
              "Se dopo c'è Positano o Amalfi, ditelo subito. È un viaggio diverso da qualsiasi " +
              "tragitto sul versante di Sorrento, non un suo prolungamento.",
          },
        ],
      },
      {
        id: "who",
        heading: "Chi viaggia",
        items: [
          {
            id: "passengers",
            label: "Quanti adulti e quanti bambini",
            detail:
              "L'età dei bambini conta, perché il seggiolino si predispone in anticipo e non " +
              "si trova nel bagagliaio.",
          },
          {
            id: "luggage",
            label: "Valigie, e gli oggetti ingombranti",
            detail:
              "Bagagli da stiva e da cabina separatamente. Segnalate passeggini, sacche da " +
              "golf, un violoncello o una carrozzina: determinano il veicolo.",
          },
        ],
      },
      {
        id: "when",
        heading: "Quando",
        items: [
          {
            id: "time",
            label: "Data e ora, e in che senso corre l'orologio",
            detail:
              "Un arrivo si calcola dal volo o dalla nave. Una partenza si calcola a ritroso " +
              "dal check-in, e la ZTL serale può incidere su dove l'auto possa attendervi.",
          },
          {
            id: "return",
            label: "Se volete anche il ritorno",
            detail:
              "Preventivare entrambi insieme è in genere più semplice che tornarci sopra, " +
              "soprattutto per una partenza all'alba.",
          },
        ],
      },
    ],
    note:
      "Nulla di tutto questo vi impegna. Un preventivo è il prezzo di un viaggio preciso " +
      "in un giorno preciso, e chiederlo non costa nulla.",
  },

  ownerClaim: {
    label: "Quello che possiamo dirvi direttamente",
    heading: "Come viene organizzato davvero un transfer per Sorrento",
    body:
      "Coordiniamo ogni viaggio con operatori locali autorizzati della penisola, senza " +
      "gestire veicoli in proprio, e ogni prenotazione è preventivata singolarmente prima " +
      "di essere confermata. Quando un indirizzo si trova dentro la zona a traffico " +
      "limitato, l'autista concorda in anticipo con voi il punto di discesa lecito più " +
      "vicino, così che sia deciso prima e non mentre siete in strada con le valigie.",
  },

  onward: {
    id: "onward",
    eyebrow: "Nei dintorni",
    heading: "Il resto del golfo, e la costa oltre il crinale",
    lead:
      "Pagine che esistono oggi. Ognuna è scritta per il proprio luogo, non ricavata da " +
      "questa.",
    items: [
      {
        id: "route-nap-sorrento",
        page: "route-nap-sorrento",
        label: "Dall'aeroporto di Napoli a Sorrento",
        detail: "Il viaggio vero e proprio: una zona controllata in aeroporto, un centro limitato qui.",
      },
      {
        id: "naples",
        page: "naples",
        label: "Napoli",
        detail: "La città, le sue stazioni e le banchine che ne portano il nome.",
      },
      {
        id: "nap-airport",
        page: "nap-airport",
        label: "Aeroporto di Napoli (NAP)",
        detail: "La porta d'accesso per quasi chiunque arrivi qui in aereo.",
      },
      {
        id: "positano",
        page: "positano",
        label: "Positano",
        detail: "Oltre il crinale, con le regole d'accesso più severe della costa.",
      },
      {
        id: "amalfi",
        page: "amalfi",
        label: "Amalfi",
        detail: "Più avanti sul versante sud, raggiunta dalla strada costiera.",
      },
      {
        id: "ravello",
        page: "ravello",
        label: "Ravello",
        detail: "Sopra Amalfi: una salita, non un percorso costiero.",
      },
      {
        id: "pompeii",
        page: "pompeii",
        label: "Pompei",
        detail: "Sul lato di Napoli, e una sosta frequente all'andata o al ritorno.",
      },
    ],
    pending: {
      heading: "Non ancora scritte",
      body:
        "Il collegamento dall'aeroporto di Napoli a Sorrento ha ora una pagina propria, " +
        "collegata qui sopra. Quelle per Positano e Amalfi sono previste e non vengono " +
        "collegate finché non esistono, perché un link a una pagina che non c'è è peggio " +
        "di nessun link.",
    },
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande prima di partire per Sorrento",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Sorrento è in Costiera Amalfitana?",
        answer:
          "No. Sorrento si trova sul versante nord della penisola sorrentina, di fronte al " +
          "Golfo di Napoli e al Vesuvio. La Costiera Amalfitana è il versante sud della " +
          "stessa penisola, dove si trovano Positano e Amalfi. Sulla cartina sono vicine; " +
          "nella realtà le separa un crinale montuoso.",
      },
      {
        question: "Su quale aeroporto conviene atterrare per Sorrento?",
        answer:
          "Napoli (NAP) è il più vicino. Sulla penisola non c'è nessun aeroporto, quindi il " +
          "proseguimento avviene comunque su strada: un pullman di linea, oppure un transfer " +
          "privato che attende il volo.",
      },
      {
        question: "Un'auto può lasciarmi davanti all'albergo a Sorrento?",
        answer:
          "A volte sì, e dipende dall'indirizzo e dall'ora. In stagione il centro è zona a " +
          "traffico limitato la sera, per entrare serve un permesso annuale e non un " +
          "pagamento, e alcune strade del centro storico sono comunque troppo strette per " +
          "un'auto. Indicate l'indirizzo completo e il punto di discesa si concorda prima.",
      },
      {
        question: "Quali sono gli orari della ZTL a Sorrento?",
        answer:
          "L'avviso più recente del Comune li fissa dalle 19.30 alle 4, tutti i giorni, con " +
          "una fascia aggiuntiva dalle 10 alle 13 nei giorni festivi, in una stagione che va " +
          "dal 1° aprile al 25 ottobre. Quell'avviso è del marzo 2025: verificate le date " +
          "della stagione per il vostro anno di viaggio.",
      },
      {
        question: "Quanto ci vuole da Sorrento a Positano?",
        answer:
          "Non pubblichiamo una cifra, perché una risposta onesta non esiste come numero " +
          "unico. La strada attraversa la penisola e poi corre lungo una parete di roccia, e " +
          "in alta stagione la differenza tra una mattina tranquilla e un pomeriggio " +
          "affollato è notevole. Chiedete: il preventivo sarà per la vostra data e ora.",
      },
      {
        question: "C'è un treno per Sorrento?",
        answer:
          "Sì. Sorrento è il capolinea della linea Circumvesuviana da Napoli, gestita da EAV. " +
          "Orari e tariffe sono di competenza di EAV e variano con la stagione: verificate " +
          "direttamente con l'operatore invece di fidarvi di un dato riportato altrove.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Raccontateci il viaggio e lo mettiamo a preventivo",
    body:
      "Un modulo, una risposta. Indicate l'indirizzo completo a Sorrento e il volo, la " +
      "nave o il treno a cui si collega: così il preventivo potrà tenere conto della zona " +
      "a traffico limitato, invece di scoprirla la sera stessa.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Napoli", page: "nap-airport" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Nessun prezzo in questa pagina è una tariffa pubblicata, perché non " +
      "ne esiste una.",
  },
};

export const sorrento = { en, it };
