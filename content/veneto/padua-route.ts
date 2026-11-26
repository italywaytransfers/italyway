import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * Venice ↔ Padua.
 *
 * ── ONE page, not two ────────────────────────────────────────────────────
 * The same decision the registry records for Venice ↔ Verona, for the same
 * reason: neither direction carries a deadline the other lacks. Unlike an
 * airport pair, where an arrival is tracked and a departure runs to
 * check-in, this is a hotel-to-hotel journey whose constraints are simply
 * mirrored. The return is covered in the `departure` section; a second URL
 * would exist only to target the reversed phrase.
 *
 * ── The spine ────────────────────────────────────────────────────────────
 * "Both ends stop the car short, and for opposite reasons."
 *
 * At the Venice end a car cannot reach the address at all — the road runs
 * out, and that is geography, not regulation. At the Padua end a car very
 * nearly can: a hired car is admitted to the restricted centre and even to
 * the pedestrian areas inside it, and then barred from five named streets.
 *
 * So the journey is bounded by two refusals of completely different kinds,
 * and the useful content is telling them apart. Travellers who have just
 * learned Venice's lesson tend to over-apply it and assume Padua's centre is
 * equally unreachable; it is not, and that mistake costs them a worse
 * drop-off than they needed to accept.
 *
 * ── What this page does NOT re-explain ───────────────────────────────────
 * Venice's access geography. It has a hub, and that hub's whole job is the
 * road/water split. This page states the consequence in two sentences and
 * links, which is what keeps the two pages from competing. Likewise Padua's
 * four permissions live on the Padua hub; here only the one that bears on
 * arrival is named, with a link.
 *
 * ── Sources ──────────────────────────────────────────────────────────────
 * The Padua facts come from the Comune's own ordinances, read 25 November
 * 2026 and cited on the Padua hub: Ordinanza n. 2023/62/0437 (the ZTL) and
 * n. 2023/62/0464 (the pedestrian areas inside it). Nothing about Venice is
 * asserted here that the Venice pages do not already carry.
 *
 * No distance, no journey time, no fare, no vehicle capacity. The rail
 * alternative is not described either: this is not a train-comparison page,
 * and inventing a timetable to argue against would be worse than silence.
 */

const paduaZtlEn = {
  text:
    "Padua's limited-traffic zone admits taxis and hire cars with driver for " +
    "service operations without issuing a permit, provided the vehicle is under " +
    "3.5 tonnes and its number plate is registered in the Comune's “lista bianca " +
    "ZTL”; a separate ordinance admits them to the pedestrian areas inside the " +
    "zone but excludes five named streets. Read 25 November 2026:",
  linkText: "the Comune di Padova on its historic-centre ZTL",
  href: "https://www.comune.padova.it/zona-traffico-limitato-ztl-centro-storico",
};

const paduaZtlIt = {
  text:
    "La zona a traffico limitato di Padova ammette taxi e auto a noleggio con " +
    "conducente per operazioni di servizio senza rilasciare alcun titolo " +
    "autorizzatorio, purché il veicolo sia sotto le 3,5 t e la targa risulti " +
    "registrata nella «lista bianca ZTL» del Comune; una seconda ordinanza li " +
    "ammette nelle aree pedonali interne alla zona ma esclude cinque vie " +
    "indicate per nome. Consultato il 25 novembre 2026:",
  linkText: "il Comune di Padova sulla ZTL del centro storico",
  href: "https://www.comune.padova.it/zona-traffico-limitato-ztl-centro-storico",
};

const en: RoutePage = {
  meta: {
    title: "Venice to Padua Transfer – Private Car, Both Directions",
    description:
      "Both ends stop the car short, for opposite reasons: Venice runs out of " +
      "road, Padua restricts five streets. One page, both directions.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Venice",
    to: "Padua",
    eyebrow: "Route",
    h1: "Venice to Padua",
    lead:
      "Two cities close enough to be done before lunch, and both of them stop a " +
      "car short of the address — for reasons that have nothing to do with each " +
      "other. In Venice the road simply ends. In Padua the road carries on and " +
      "the rules take over. Knowing which problem you are solving at each end is " +
      "most of what makes this journey smooth.",
    primaryCta: "Request a quote",
    secondaryCta: "Transfers in Padua",
    note:
      "This page covers both directions. We arrange these transfers with licensed " +
      "local operators and drivers; we do not own vehicles or employ drivers " +
      "directly. No price, journey time or distance appears here, and no rail " +
      "comparison either — the quotation comes from the operator.",
  },

  lead: {
    id: "two-refusals",
    eyebrow: "What makes this route different",
    heading: "Two ends, two completely different refusals",
    text:
      "Most intercity transfers have one awkward end. This one has two, and " +
      "travellers who have just learned the Venice lesson tend to apply it to " +
      "Padua, where it is wrong in a way that costs them.",
    columns: [
      {
        id: "venice-end",
        heading: "The Venice end",
        subheading: "Geography, not regulation",
        rows: [
          {
            term: "The road runs out",
            detail:
              "No permit exists that would let a car further, because there is no road to be permitted onto. Venice's historic centre has no vehicle access at all, and that is the end of it.",
          },
          {
            term: "So the car meets you at the edge",
            detail:
              "Piazzale Roma and the Tronchetto are where the causeway delivers vehicles. Getting between there and your Venice address is on foot or on water, and it is not part of a road transfer.",
          },
          {
            term: "Unless you are on the mainland",
            detail:
              "Mestre and Marghera are ordinary addresses, reached to the door. If you are staying there, the Venice end of this journey has no awkwardness at all.",
          },
        ],
      },
      {
        id: "padua-end",
        heading: "The Padua end",
        subheading: "Regulation, not geography",
        rows: [
          {
            term: "The road carries on",
            detail:
              "Padua's centre is a normal city centre with streets a car can physically drive down. What governs it is a limited-traffic zone with electronic gates, not a lagoon.",
          },
          {
            term: "And a hired car is admitted",
            detail:
              "This is the part people get wrong. The Comune admits taxis and hire cars with driver to the zone for service operations, with no permit issued, on condition the plate is registered and the vehicle is under 3.5 tonnes.",
          },
          {
            term: "With five exceptions, by name",
            detail:
              "The pedestrian-areas ordinance admits the same vehicles and then excludes via Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio and piazzetta Garzeria. An address on one of those changes the ending.",
          },
        ],
      },
    ],
    source: paduaZtlEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "What we need at each end",
    lead:
      "The same two questions in both directions, asked of whichever city you " +
      "are leaving and whichever you are arriving in.",
    from: {
      id: "venice",
      label: "The Venice end",
      name: "Venice",
      page: "venice",
      linkText: "Transfers in Venice",
      items: [
        {
          term: "Historic centre, or mainland",
          detail:
            "The single most useful thing you can tell us. A centro storico address means a road gateway and a walk or a boat; a Mestre or Marghera address means the door. The Venice hub sets out the split in full.",
        },
        {
          term: "Which gateway, if it is the centre",
          detail:
            "Piazzale Roma and the Tronchetto are not the same place and not interchangeable for a pickup. Say which one your property or your water service points you to.",
        },
        {
          term: "Luggage, honestly counted",
          detail:
            "It matters more at this end than almost anywhere in Italy, because some of the distance is covered by you rather than by the car. Hold cases and cabin bags counted separately.",
        },
      ],
    },
    to: {
      id: "padua",
      label: "The Padua end",
      name: "Padua",
      page: "padua",
      linkText: "Transfers in Padua",
      items: [
        {
          term: "The full address, and whether it is central",
          detail:
            "Padua's centre is restricted in two zones that keep different hours, and your hotel knows which one it sits in. The Padua page explains the four separate permissions involved.",
        },
        {
          term: "Whether it is one of the five streets",
          detail:
            "If your address is on via Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio or piazzetta Garzeria, say so. It is the one detail that changes where the journey can end.",
        },
        {
          term: "The day, not just the time",
          detail:
            "Padua restricts combustion and hybrid vehicles across a wide perimeter on scheduled Sundays. Hire cars with driver are exempt by category, but the day is still worth telling the operator.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead: "Seven lines, and the first two carry most of the weight.",
    items: [
      "Your full address in Venice, and whether it is in the historic centre or on the mainland.",
      "Your full address in Padua, and whether it is inside the restricted centre.",
      "Which direction you are travelling, or both if you want the return as well.",
      "The date, the time and the day of the week.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Anything either property has told you about arriving by car.",
    ],
    note:
      "If you want the journey in both directions, ask for both in one message. It " +
      "is one conversation with one operator rather than two unconnected " +
      "bookings, and the return is the half people forget until the morning they " +
      "need it.",
  },

  departure: {
    id: "padua-to-venice",
    eyebrow: "The other direction",
    heading: "Padua to Venice, which is not simply this page reversed",
    lead:
      "The same two cities, the same pair of constraints — but they arrive in " +
      "the opposite order, and that changes what you need to decide in advance.",
    paragraphs: [
      "Going out from Padua, the awkward end comes last. The pickup is ordinary: a car at an address, or as close to it as the zone and the street allow, with the access arrangement settled by the operator beforehand. What needs deciding early is the far end — because arriving in Venice means arriving at a road gateway, and if your onward leg is a water service or a walk with luggage, the drop-off point is the decision rather than the time.",
      "Coming in to Padua, the awkward end comes first. You are collected at a Venice road gateway, having already crossed from the centre by water or on foot, and the arrival is the straightforward half. The thing to settle early here is the Padua address: whether it is inside the restricted centre, and whether it is on one of the five excluded streets.",
      "That is why this is one page and not two. Neither direction carries a deadline the other lacks — unlike an airport transfer, where an arrival is tracked and a departure runs to check-in. Here the difference is only which end you solve first, and a second URL would say the same things in a different order.",
    ],
    note:
      "Ask for the return in the same message as the outbound and the operator " +
      "can plan both ends once. Say which direction matters more to you if the " +
      "timings are tight.",
  },

  mistakes: {
    id: "mistakes",
    eyebrow: "What goes wrong",
    heading: "Four bookings that cause trouble, and the fix",
    lead:
      "None of these is careless. Each is a reasonable assumption that happens " +
      "not to hold on this particular journey.",
    items: [
      {
        id: "venice-as-address",
        wrong: "“Pick us up in Venice” — naming the city, with a hotel in the historic centre.",
        instead:
          "Name the gateway. A car cannot come to a centro storico address at all, so an unqualified “Venice” leaves the operator guessing between Piazzale Roma and the Tronchetto, and leaves you to discover the difference on the day.",
      },
      {
        id: "padua-as-venice",
        wrong: "Assuming Padua's centre is unreachable too, because Venice's was.",
        instead:
          "Ask. Padua admits hired cars to its restricted centre and even to the pedestrian areas inside it. Travellers who assume otherwise accept a drop-off further out than they needed to, having applied the right lesson to the wrong city.",
      },
      {
        id: "big-vehicle",
        wrong: "Booking the largest vehicle for a group and a central Padua hotel.",
        instead:
          "Mention both together. The category that admits taxis and hire cars to Padua's zone covers vehicles under 3.5 tonnes; a larger minibus is not covered by it, so group size and central access are one question, not two.",
      },
      {
        id: "forgotten-return",
        wrong: "Booking the outbound now and the return later.",
        instead:
          "Ask for both at once. The return crosses the same two constraints in reverse and is the half most often left until the last morning, when the awkward end is the one you have not planned for.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about Venice and Padua",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can a private transfer take me from Venice to Padua?",
        answer:
          "Yes, and in both directions. What varies is where each end of the " +
          "journey actually begins and finishes: a Venice historic-centre address " +
          "is reached by a road gateway rather than by car, while a Padua address " +
          "is usually reached properly, including inside the restricted centre.",
      },
      {
        question: "Where will the car collect me in Venice?",
        answer:
          "At a road gateway — Piazzale Roma or the Tronchetto — if you are " +
          "staying in the historic centre, because no vehicle can go further. If " +
          "you are staying in Mestre or Marghera, at the address like anywhere " +
          "else. Our Venice page explains why the road stops where it does.",
      },
      {
        question: "Will the car reach my hotel in Padua?",
        answer:
          "Often closer than people expect, and we still will not promise the " +
          "door. Padua admits hire cars with driver to its limited-traffic zone " +
          "and to the pedestrian areas inside it, under a 3.5-tonne limit and a " +
          "plate-registration duty — but being allowed along a street is not " +
          "being able to stop on it. Send the address and the operator will say.",
      },
      {
        question: "Is Padua to Venice a different booking?",
        answer:
          "It is the same service in the opposite order, which is why it shares " +
          "this page rather than having one of its own. The practical difference " +
          "is which end you settle first: going to Venice, decide the gateway " +
          "early; coming to Padua, decide the address early.",
      },
      {
        question: "Do I need to tell you the day of the week?",
        answer:
          "It helps. Padua's two zones keep different hours, with one restricted " +
          "around the clock and the other starting later on Sundays and holidays, " +
          "and the city also runs scheduled car-free Sundays over a wide " +
          "perimeter. Hire cars with driver are exempt from that one by category.",
      },
      {
        question: "Can you do the journey with a stop on the way?",
        answer:
          "Ask when you request the quote, and say where. We publish no itinerary " +
          "or duration here, so a stop is something the operator prices and " +
          "confirms rather than something this page can promise.",
      },
      {
        question: "Which airport should I use for this journey?",
        answer:
          "Most travellers arriving for either city come through Venice Marco " +
          "Polo. If your journey starts at the airport rather than in Venice " +
          "itself, the airport page is the better starting point, and it sets out " +
          "the land side and the water side separately.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "padua",
        label: "Transfers in Padua",
        detail: "The four separate permissions a car needs in Padua, and which one decides your arrival.",
      },
      {
        page: "venice",
        label: "Transfers in Venice",
        detail: "Where a road transfer can end, and everything that lies past it.",
      },
      {
        page: "route-venice-vce",
        label: "Venice to Marco Polo Airport",
        detail: "The departure leg, if Padua comes before a flight home.",
      },
      {
        page: "venice-marco-polo",
        label: "Venice Marco Polo (VCE)",
        detail: "The airport most travellers reach either city through.",
      },
      {
        page: "route-venice-verona",
        label: "Venice to Verona",
        detail: "The other Veneto intercity journey, with its own pair of restrictions.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Two addresses, and which way round",
    body:
      "That is the whole of what turns this into a quotation: where you are in " +
      "each city, and which direction you need — or both. The reply comes back in " +
      "writing before anything is confirmed.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Transfers in Padua", page: "padua" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is " +
      "published.",
  },
};

const it: RoutePage = {
  meta: {
    title: "Da Venezia a Padova – Transfer privato nei due sensi",
    description:
      "I due capi fermano l'auto per motivi opposti: a Venezia finisce la " +
      "strada, a Padova cinque vie sono vietate. Una pagina, due direzioni.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Venezia",
    to: "Padova",
    eyebrow: "Tratta",
    h1: "Da Venezia a Padova",
    lead:
      "Due città abbastanza vicine da fare tutto prima di pranzo, e entrambe " +
      "fermano l'auto prima dell'indirizzo — per ragioni che non hanno nulla in " +
      "comune. A Venezia la strada semplicemente finisce. A Padova la strada " +
      "continua e subentrano le regole. Sapere quale dei due problemi state " +
      "risolvendo a ciascun capo è quasi tutto ciò che rende liscio questo " +
      "viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer a Padova",
    note:
      "Questa pagina copre entrambe le direzioni. Organizziamo questi transfer " +
      "con operatori e autisti locali autorizzati: non possediamo veicoli e non " +
      "impieghiamo direttamente gli autisti. Qui non compaiono prezzi, durate o " +
      "distanze, e nemmeno confronti con il treno: il preventivo arriva " +
      "dall'operatore.",
  },

  lead: {
    id: "two-refusals",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Due capi, due rifiuti del tutto diversi",
    text:
      "Quasi tutti i transfer tra città hanno un capo scomodo. Questo ne ha due, " +
      "e chi ha appena imparato la lezione veneziana tende ad applicarla a " +
      "Padova, dove è sbagliata in un modo che costa.",
    columns: [
      {
        id: "venice-end",
        heading: "Il capo veneziano",
        subheading: "Geografia, non regolamento",
        rows: [
          {
            term: "La strada finisce",
            detail:
              "Non esiste permesso che porti un'auto più avanti, perché non c'è una strada da autorizzare. Il centro storico di Venezia non ha alcun accesso veicolare, e la questione finisce lì.",
          },
          {
            term: "Quindi l'auto vi trova al margine",
            detail:
              "Piazzale Roma e il Tronchetto sono i punti dove il ponte translagunare consegna i veicoli. Da lì al vostro indirizzo si va a piedi o in barca, e non fa parte di un transfer su strada.",
          },
          {
            term: "A meno che siate in terraferma",
            detail:
              "Mestre e Marghera sono indirizzi ordinari, raggiunti alla porta. Se alloggiate lì, il capo veneziano di questo viaggio non ha alcuna complicazione.",
          },
        ],
      },
      {
        id: "padua-end",
        heading: "Il capo padovano",
        subheading: "Regolamento, non geografia",
        rows: [
          {
            term: "La strada continua",
            detail:
              "Il centro di Padova è un normale centro urbano, con vie fisicamente percorribili da un'auto. Lo governa una zona a traffico limitato con varchi elettronici, non una laguna.",
          },
          {
            term: "E un'auto a noleggio è ammessa",
            detail:
              "È la parte che si sbaglia. Il Comune ammette taxi e auto a noleggio con conducente nella zona per operazioni di servizio, senza rilascio di titolo, a condizione che la targa sia registrata e il veicolo stia sotto le 3,5 t.",
          },
          {
            term: "Con cinque eccezioni, per nome",
            detail:
              "L'ordinanza sulle aree pedonali ammette gli stessi veicoli e poi esclude via Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio e piazzetta Garzeria. Un indirizzo su una di esse cambia il finale.",
          },
        ],
      },
    ],
    source: paduaZtlIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Che cosa ci serve a ciascun capo",
    lead:
      "Le stesse due domande in entrambe le direzioni, poste alla città che " +
      "lasciate e a quella in cui arrivate.",
    from: {
      id: "venice",
      label: "Il capo veneziano",
      name: "Venezia",
      page: "venice",
      linkText: "Transfer a Venezia",
      items: [
        {
          term: "Centro storico o terraferma",
          detail:
            "La cosa più utile che possiate dirci. Un indirizzo in centro storico significa un varco stradale e poi piedi o barca; un indirizzo a Mestre o Marghera significa la porta. La pagina su Venezia lo spiega per esteso.",
        },
        {
          term: "Quale varco, se è il centro",
          detail:
            "Piazzale Roma e il Tronchetto non sono lo stesso luogo e non sono interscambiabili per un prelievo. Indicate quale vi segnala la struttura o il vostro servizio acqueo.",
        },
        {
          term: "I bagagli, contati con onestà",
          detail:
            "Qui contano più che quasi in ogni altro luogo d'Italia, perché una parte del percorso la fate voi e non l'auto. Valigie da stiva e bagagli a mano contati a parte.",
        },
      ],
    },
    to: {
      id: "padua",
      label: "Il capo padovano",
      name: "Padova",
      page: "padua",
      linkText: "Transfer a Padova",
      items: [
        {
          term: "L'indirizzo completo, e se è centrale",
          detail:
            "Il centro di Padova è limitato in due zone con orari diversi, e il vostro albergo sa in quale si trova. La pagina su Padova spiega i quattro permessi distinti in gioco.",
        },
        {
          term: "Se è una delle cinque vie",
          detail:
            "Se il vostro indirizzo è in via Cavour, piazza Cavour, piazza Pedrocchi, via VIII Febbraio o piazzetta Garzeria, ditelo. È il dettaglio che cambia dove può finire il viaggio.",
        },
        {
          term: "Il giorno, non solo l'ora",
          detail:
            "Padova limita i veicoli endotermici e ibridi su un perimetro ampio in alcune domeniche programmate. Le auto a noleggio con conducente sono esenti per categoria, ma vale la pena indicare il giorno all'operatore.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead: "Sette righe, e le prime due portano quasi tutto il peso.",
    items: [
      "L'indirizzo completo a Venezia, precisando se è in centro storico o in terraferma.",
      "L'indirizzo completo a Padova, precisando se è dentro il centro limitato.",
      "In quale direzione viaggiate, o entrambe se volete anche il ritorno.",
      "La data, l'ora e il giorno della settimana.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Quanto ciascuna delle due strutture vi ha detto sull'arrivo in auto.",
    ],
    note:
      "Se volete il viaggio in entrambe le direzioni, chiedetele in un unico " +
      "messaggio. È una conversazione sola con un operatore solo invece di due " +
      "prenotazioni slegate, e il ritorno è la metà che ci si dimentica fino alla " +
      "mattina in cui serve.",
  },

  departure: {
    id: "padua-to-venice",
    eyebrow: "L'altra direzione",
    heading: "Da Padova a Venezia, che non è questa pagina al contrario",
    lead:
      "Le stesse due città e gli stessi due vincoli, ma arrivano nell'ordine " +
      "inverso, e questo cambia ciò che va deciso in anticipo.",
    paragraphs: [
      "Partendo da Padova, il capo scomodo viene per ultimo. Il prelievo è ordinario: un'auto a un indirizzo, o il più vicino possibile compatibilmente con la zona e con la via, con l'accesso concordato prima dall'operatore. Da decidere presto è l'altro capo, perché arrivare a Venezia significa arrivare a un varco stradale: se poi proseguite in barca o a piedi con i bagagli, il punto di discesa è la vera decisione, più dell'orario.",
      "Arrivando a Padova, il capo scomodo viene per primo. Vi si preleva a un varco stradale veneziano, dopo che avete già lasciato il centro in barca o a piedi, e l'arrivo è la metà semplice. Qui va definito presto l'indirizzo padovano: se è dentro il centro limitato e se è in una delle cinque vie escluse.",
      "Per questo è una pagina sola e non due. Nessuna delle due direzioni ha una scadenza che l'altra non abbia, a differenza di un transfer aeroportuale, dove un arrivo si monitora e una partenza corre verso il check-in. Qui cambia solo quale capo si risolve prima, e un secondo indirizzo direbbe le stesse cose in un altro ordine.",
    ],
    note:
      "Chiedete il ritorno nello stesso messaggio dell'andata e l'operatore può " +
      "pianificare i due capi una volta sola. Indicate quale direzione vi importa " +
      "di più se gli orari sono stretti.",
  },

  mistakes: {
    id: "mistakes",
    eyebrow: "Che cosa va storto",
    heading: "Quattro prenotazioni che creano problemi, e come rimediare",
    lead:
      "Nessuna di queste è una leggerezza. Ognuna è un'ipotesi ragionevole che " +
      "però non vale per questo viaggio.",
    items: [
      {
        id: "venice-as-address",
        wrong: "«Prelevateci a Venezia» — indicando la città, con un albergo in centro storico.",
        instead:
          "Indicate il varco. Un'auto non può proprio arrivare a un indirizzo in centro storico: un «Venezia» generico lascia l'operatore a scegliere tra Piazzale Roma e il Tronchetto, e lascia a voi scoprire la differenza il giorno stesso.",
      },
      {
        id: "padua-as-venice",
        wrong: "Dare per scontato che anche il centro di Padova sia irraggiungibile, perché lo era quello di Venezia.",
        instead:
          "Chiedete. Padova ammette le auto a noleggio nel centro limitato e perfino nelle aree pedonali interne. Chi presume il contrario accetta una discesa più lontana del necessario, applicando la lezione giusta alla città sbagliata.",
      },
      {
        id: "big-vehicle",
        wrong: "Prenotare il veicolo più grande per un gruppo e un albergo nel centro di Padova.",
        instead:
          "Diteci le due cose insieme. La categoria che ammette taxi e auto a noleggio nella zona di Padova riguarda veicoli sotto le 3,5 t: un minibus più grande non vi rientra, quindi numero di persone e accesso al centro sono una domanda sola.",
      },
      {
        id: "forgotten-return",
        wrong: "Prenotare l'andata adesso e il ritorno più avanti.",
        instead:
          "Chiedeteli insieme. Il ritorno attraversa gli stessi due vincoli al contrario ed è la metà che più spesso si rimanda all'ultima mattina, quando il capo scomodo è proprio quello che non avete pianificato.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su Venezia e Padova",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Un transfer privato può portarmi da Venezia a Padova?",
        answer:
          "Sì, e in entrambe le direzioni. Cambia dove ciascun capo del viaggio " +
          "inizia e finisce davvero: un indirizzo nel centro storico di Venezia si " +
          "raggiunge tramite un varco stradale e non in auto, mentre un indirizzo " +
          "padovano di solito si raggiunge per davvero, anche dentro il centro " +
          "limitato.",
      },
      {
        question: "Dove mi preleva l'auto a Venezia?",
        answer:
          "A un varco stradale — Piazzale Roma o il Tronchetto — se alloggiate in " +
          "centro storico, perché nessun veicolo può andare oltre. Se alloggiate a " +
          "Mestre o Marghera, all'indirizzo come altrove. La nostra pagina su " +
          "Venezia spiega perché la strada finisce dove finisce.",
      },
      {
        question: "L'auto arriverà al mio albergo a Padova?",
        answer:
          "Spesso più vicino di quanto si pensi, e comunque non promettiamo la " +
          "porta. Padova ammette le auto a noleggio con conducente nella zona a " +
          "traffico limitato e nelle aree pedonali interne, con un limite di 3,5 t " +
          "e l'obbligo di registrare la targa, ma poter percorrere una via non " +
          "significa potervisi fermare. Inviate l'indirizzo e l'operatore vi dirà.",
      },
      {
        question: "Da Padova a Venezia è una prenotazione diversa?",
        answer:
          "È lo stesso servizio nell'ordine inverso: per questo condivide questa " +
          "pagina invece di averne una propria. La differenza pratica è quale capo " +
          "si definisce prima: andando a Venezia, decidete presto il varco; " +
          "arrivando a Padova, decidete presto l'indirizzo.",
      },
      {
        question: "Devo indicarvi il giorno della settimana?",
        answer:
          "Aiuta. Le due zone di Padova hanno orari diversi, una limitata tutto il " +
          "giorno e l'altra con inizio più tardi nelle domeniche e nei festivi, e " +
          "la città organizza anche domeniche ecologiche su un perimetro ampio. Da " +
          "quelle le auto a noleggio con conducente sono esenti per categoria.",
      },
      {
        question: "Potete fare il viaggio con una sosta lungo il percorso?",
        answer:
          "Chiedetelo quando richiedete il preventivo, indicando dove. Qui non " +
          "pubblichiamo itinerari né durate, quindi una sosta è qualcosa che " +
          "l'operatore quota e conferma, non che questa pagina possa promettere.",
      },
      {
        question: "Quale aeroporto conviene per questo viaggio?",
        answer:
          "Chi arriva per una delle due città passa in genere da Venezia Marco " +
          "Polo. Se il viaggio inizia in aeroporto invece che a Venezia, la pagina " +
          "dell'aeroporto è il punto di partenza migliore: distingue il lato terra " +
          "dal lato acqua.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "padua",
        label: "Transfer a Padova",
        detail: "I quattro permessi distinti che servono a un'auto a Padova, e quale decide il vostro arrivo.",
      },
      {
        page: "venice",
        label: "Transfer a Venezia",
        detail: "Dove può finire un transfer su strada, e tutto ciò che sta oltre.",
      },
      {
        page: "route-venice-vce",
        label: "Da Venezia all'aeroporto Marco Polo",
        detail: "La tratta di partenza, se Padova precede il volo di ritorno.",
      },
      {
        page: "venice-marco-polo",
        label: "Venezia Marco Polo (VCE)",
        detail: "L'aeroporto da cui si raggiungono entrambe le città.",
      },
      {
        page: "route-venice-verona",
        label: "Da Venezia a Verona",
        detail: "L'altra tratta veneta tra città, con la sua coppia di limitazioni.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Due indirizzi, e in quale senso",
    body:
      "È tutto ciò che trasforma questo in un preventivo: dove siete in ciascuna " +
      "città e quale direzione vi serve, o entrambe. La risposta torna per " +
      "iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Padova", page: "padua" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché " +
      "non ne pubblichiamo.",
  },
};

export const routeVenicePadua: Record<Locale, RoutePage> = { en, it };
