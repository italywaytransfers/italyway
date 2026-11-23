import type { Locale } from "@/lib/site";
import type { RoutePage } from "../page-types";

/**
 * The two journeys that begin at the cruise port.
 *
 * ── Why these are not the existing pages reversed ────────────────────────
 * `content/rome/routes.ts` already holds Rome → Civitavecchia and Fiumicino
 * → Civitavecchia. Those are written for someone *catching* a ship: the
 * clock runs towards an all-aboard time and the risk is being late.
 *
 * These two are the opposite situation and almost nothing carries over. The
 * passenger is already in Italy, standing on a quay, with their luggage,
 * inside a working commercial port they have never seen before. The question
 * is no longer "when must I leave" but "where am I, and where can a car
 * actually be".
 *
 * ── What the port publishes, and the gap that matters ────────────────────
 * Port Mobility publishes the port's gates, its piers and its internal
 * shuttle. It does **not** publish anything about taxis, private cars or
 * NCC: the words do not appear on its shuttle, terminal, access or map
 * pages. So this file states where the port says vehicles may enter, and
 * says plainly that the meeting arrangement itself is confirmed with the
 * operator rather than invented here.
 *
 * That gap is the single most important thing on these pages. Every
 * competitor asserts a meeting point. The honest version is that the port
 * authority does not publish one.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances and our own prices. The port's terminal *count*
 * is also absent: its own pages give four in one place and five in another,
 * so no number is stated. The published taxi tariff is quoted where it is
 * genuinely decision-useful, attributed and dated, exactly as the Positano
 * page quotes a municipal rate card — it is someone else's published fare,
 * not ours.
 */

const portEn = {
  text:
    "The cruise piers, the free shuttle to the Largo della Pace service centre, the " +
    "separate CSP service to the railway station on sailing days, and the three " +
    "port gates and what each admits are published by Port Mobility, which runs " +
    "mobility services for the port of Civitavecchia, across its shuttle and " +
    "port-map pages. Read on 23 November 2026. Note what is not there: those pages " +
    "say nothing about taxis, private cars or NCC vehicles, and name no meeting " +
    "point for them:",
  linkText: "Port Mobility's shuttle and port-map pages",
  href: "https://civitavecchia.portmobility.it/en/node/shuttles",
};

const portIt = {
  text:
    "Le banchine crociere, la navetta gratuita per il centro servizi di Largo della " +
    "Pace, il servizio separato CSP per la stazione ferroviaria nei giorni di scalo " +
    "e i tre varchi portuali con ciò che ciascuno ammette sono pubblicati da Port " +
    "Mobility, che gestisce la mobilità del porto di Civitavecchia, fra la pagina " +
    "delle navette e quella della mappa. Consultate il 23 novembre 2026. Si noti " +
    "ciò che non c'è: quelle pagine non dicono nulla su taxi, auto private o NCC, e " +
    "non indicano alcun punto d'incontro per loro:",
  linkText: "le pagine navette e mappa del porto di Port Mobility",
  href: "https://civitavecchia.portmobility.it/en/node/shuttles",
};



const fcoEn = {
  text:
    "Fiumicino's two regulated traffic areas, and the fixed taxi fare between the " +
    "port of Civitavecchia and the airport, are published by the airport operator " +
    "in the ENAC service charter for Fiumicino dated 8 May 2026. The fare is the " +
    "licensed taxi tariff, not a price of ours. Read on 23 November 2026:",
  linkText: "the ENAC service charter for Fiumicino, 8 May 2026",
  href: "https://www.enac.gov.it/app/uploads/2026/05/ADR_REL_CartaServizi_FCO_2026_05_08.pdf",
};

const fcoIt = {
  text:
    "Le due aree a traffico regolamentato di Fiumicino e la tariffa fissa del taxi " +
    "fra il porto di Civitavecchia e l'aeroporto sono pubblicate dal gestore " +
    "aeroportuale nella Carta dei Servizi ENAC di Fiumicino dell'8 maggio 2026. La " +
    "tariffa è quella del taxi autorizzato, non un nostro prezzo. Consultata il 23 " +
    "novembre 2026:",
  linkText: "la Carta dei Servizi ENAC di Fiumicino dell'8 maggio 2026",
  href: "https://www.enac.gov.it/app/uploads/2026/05/ADR_REL_CartaServizi_FCO_2026_05_08.pdf",
};

/* ── Civitavecchia → Rome ──────────────────────────────────────────────── */

const civRomeEn: RoutePage = {
  meta: {
    title: "Civitavecchia to Rome Transfer – Book a Private Car",
    description:
      "Leaving your ship at Civitavecchia for Rome. How the port is laid out, which " +
      "gate vehicles use, and why the meeting point is confirmed with the operator.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Civitavecchia cruise port",
    to: "Rome",
    eyebrow: "Route",
    h1: "Civitavecchia cruise port to Rome",
    lead:
      "You disembark into a working commercial port, not onto a street. Between " +
      "the ship's gangway and any road vehicle there is a stretch of port that is " +
      "controlled, gated and served by its own shuttle. Knowing that shape in " +
      "advance is most of what makes this transfer go smoothly.",
    primaryCta: "Request a quote",
    secondaryCta: "About the cruise port",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance of ours appears here: the operator confirms the arrangement, and " +
      "the price comes to you in writing before anything is confirmed.",
  },

  lead: {
    id: "port-shape",
    eyebrow: "What the port actually looks like",
    heading: "The quay, the shuttle and the gate are three different places",
    text:
      "Almost every disappointment on this journey comes from imagining a car " +
      "waiting at the bottom of the gangway. The port's own published layout " +
      "explains why that is not how it works.",
    columns: [
      {
        id: "inside",
        heading: "Inside the port",
        subheading: "Between your ship and the port's edge",
        rows: [
          {
            term: "The piers",
            detail:
              "Cruise ships berth at piers 10, 11, 12, 12bis, 13, 13bis and 25. Most run along the Cristoforo Colombo antemurale; pier 25 sits on the opposite side of it.",
          },
          {
            term: "The free shuttle",
            detail:
              "Port Mobility runs a shuttle that connects all the cruise piers with the Largo della Pace service centre, scheduled around the ships' arrivals.",
          },
          {
            term: "Largo della Pace",
            detail:
              "The port describes it as the point of reference for cruise passengers: a service centre, an information point, and a pedestrian entrance on Via del Lazzaretto.",
          },
        ],
      },
      {
        id: "vehicles",
        heading: "Where vehicles can be",
        subheading: "What the port publishes about its gates",
        rows: [
          {
            term: "Vespucci gate",
            detail:
              "The port calls it the only entrance for passengers' vehicles and for those holding a valid entry ticket. Open 24 hours and under port security surveillance.",
          },
          {
            term: "The other two gates",
            detail:
              "Nord is for vehicles under customs control and goods transport. Fortezza admits emergency services, the Armed Forces, police and public administration vehicles.",
          },
          {
            term: "What is not published",
            detail:
              "Any designated taxi, private-car or NCC meeting point, and whether a car may approach the ship's side at all. The port's pages do not address it, so neither do we.",
          },
        ],
      },
    ],
    source: portEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead:
      "One end is inside a port you are leaving for the first time; the other is " +
      "a city address. The uncertainty is almost entirely at the port end.",
    from: {
      id: "civitavecchia",
      label: "Pickup",
      name: "Civitavecchia cruise port",
      page: "civitavecchia",
      linkText: "About Civitavecchia cruise port",
      items: [
        {
          term: "Your ship and its pier",
          detail:
            "Send the vessel name and the disembarkation date. The pier decides how far the port's own shuttle has to carry you before any road vehicle is possible.",
        },
        {
          term: "The meeting point is agreed, not assumed",
          detail:
            "The port authority publishes no meeting point for private vehicles. The operator confirms where the driver will be for your sailing, in advance and in writing.",
        },
        {
          term: "Luggage",
          detail:
            "Count hold cases and cabin bags separately. Cruise luggage is the heaviest most people travel with, and it decides the vehicle rather than the passenger count.",
        },
      ],
    },
    to: {
      id: "rome",
      label: "Drop-off",
      name: "Rome",
      page: "rome",
      linkText: "Transfers in Rome",
      items: [
        {
          term: "The full address",
          detail:
            "Hotel name and street. Rome's historic centre has restricted zones of its own, and the address decides how close a vehicle can lawfully stop.",
        },
        {
          term: "Hotel, station or onward flight",
          detail:
            "If this leg ends at a railway station or continues to an airport, say so: a station drop and a hotel drop are different arrangements at the Rome end.",
        },
        {
          term: "Arriving before check-in",
          detail:
            "Ships dock early and hotel rooms are not always ready. If you intend to leave bags and go out, mention it, because it changes where you actually want to be set down.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Six lines, and the quotation can be specific rather than hedged.",
    items: [
      "The ship's name and the date it docks at Civitavecchia.",
      "How many passengers, adults and children separately, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately — cruise luggage decides the vehicle.",
      "The full Rome address, including anything the hotel has told you about restricted-zone access.",
      "A mobile number that works ashore, which is how the meeting is completed on the day.",
      "Whether you also want the return to the port, or an onward leg to an airport, quoted now.",
    ],
    note:
      "Nothing here commits you. A quotation prices one journey on one date, and " +
      "asking for one costs nothing.",
  },

  departure: {
    id: "departure",
    eyebrow: "The other direction",
    heading: "Going back to join a ship",
    lead:
      "The reverse journey already has its own pages, and it is a different " +
      "problem, so it is not covered here.",
    paragraphs: [
      "Travelling towards a ship, the clock runs to an all-aboard time set by the cruise line, and that deadline rather than the road is what shapes the booking. Two pages already cover it: Rome to Civitavecchia, and Fiumicino airport to Civitavecchia for passengers flying in on embarkation day.",
      "If you are joining a ship rather than leaving one, use those. They are written for the boarding deadline, which this page is not.",
    ],
    note:
      "Both directions are arranged the same way and quoted individually. Only the " +
      "risk is different, and it runs the other way.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked after disembarking",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can the car meet me at the ship?",
        answer:
          "We do not promise it. The port's published pages describe its gates and " +
          "its internal shuttle but say nothing about taxis, private cars or NCC " +
          "vehicles, and name no meeting point for them. Rather than assert an " +
          "arrangement the port does not publish, the operator confirms the meeting " +
          "point for your sailing before the day.",
      },
      {
        question: "What is Largo della Pace?",
        answer:
          "The port's service centre, which it describes as the point of reference " +
          "for cruise passengers. A free shuttle connects all the cruise piers to it, " +
          "scheduled around the ships' arrivals. It also holds an information point " +
          "and a pedestrian entrance on Via del Lazzaretto.",
      },
      {
        question: "Which gate do vehicles use?",
        answer:
          "The Vespucci gate. The port calls it the only entrance for passengers' " +
          "vehicles and for holders of a valid entry ticket, open 24 hours. The Nord " +
          "gate is for goods and customs traffic; the Fortezza gate admits emergency, " +
          "military, police and public-administration vehicles.",
      },
      {
        question: "How long does it take to reach Rome?",
        answer:
          "We publish no figure. Disembarkation is the variable part — it depends on " +
          "the ship, the pier and how the terminal is clearing that morning — and a " +
          "single number on a page would be read as a promise. The operator advises " +
          "for your sailing.",
      },
      {
        question: "Is there a train instead?",
        answer:
          "Yes. Port Mobility states that a service run by CSP connects Civitavecchia " +
          "railway station with the cruise ships on sailing days only, for cruise " +
          "passengers, departing from the small square outside the station. The port " +
          "also notes the Fortezza gate is about 600 metres from the station. A train " +
          "then needs a second connection at the Rome end, with your luggage.",
      },
      {
        question: "We are a large group with a lot of luggage. Does that change things?",
        answer:
          "It changes the vehicle, which is settled before the day rather than on the " +
          "quay. Give the passenger count and the case count separately when you ask. " +
          "Cruise parties routinely carry more and heavier luggage than their numbers " +
          "suggest, and that is the figure that decides what is sent.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "civitavecchia",
        label: "Civitavecchia cruise port",
        detail: "The port in full: its piers, its gates and how it is laid out.",
      },
      {
        page: "rome",
        label: "Rome",
        detail: "The destination hub, and what the city's own access rules mean for a car.",
      },
      {
        page: "route-rome-civitavecchia",
        label: "Rome to Civitavecchia",
        detail: "The outbound leg, written for the all-aboard deadline rather than disembarkation.",
      },
      {
        page: "route-civ-fco",
        label: "Civitavecchia to Fiumicino Airport",
        detail: "If a flight follows the cruise rather than a stay in Rome.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the ship and the address",
    body:
      "Those two lines carry most of a quotation. With the vessel and date the " +
      "operator can work to your actual disembarkation, and with the full Rome " +
      "address the drop-off can account for the city's restricted zones.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Civitavecchia cruise port", page: "civitavecchia" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const civRomeIt: RoutePage = {
  meta: {
    title: "Transfer da Civitavecchia a Roma – Prenota un'auto",
    description:
      "Lasciare la nave a Civitavecchia per Roma. Com'è fatto il porto, quale varco " +
      "usano i veicoli e perché il punto d'incontro si conferma con l'operatore.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Porto crociere di Civitavecchia",
    to: "Roma",
    eyebrow: "Tratta",
    h1: "Dal porto crociere di Civitavecchia a Roma",
    lead:
      "Si sbarca dentro un porto commerciale in attività, non su una strada. Fra la " +
      "passerella della nave e qualsiasi veicolo su gomma c'è un tratto di porto " +
      "controllato, con varchi e una navetta propria. Conoscerne prima la forma è " +
      "gran parte di ciò che rende semplice questo transfer.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sul porto crociere",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono nostri prezzi, durate o distanze: l'operatore conferma " +
      "l'organizzazione e il prezzo vi arriva per iscritto prima di ogni conferma.",
  },

  lead: {
    id: "port-shape",
    eyebrow: "Com'è fatto davvero il porto",
    heading: "La banchina, la navetta e il varco sono tre luoghi diversi",
    text:
      "Quasi ogni delusione su questo tragitto nasce dall'immaginare un'auto in " +
      "attesa ai piedi della passerella. La planimetria pubblicata dal porto spiega " +
      "perché non funziona così.",
    columns: [
      {
        id: "inside",
        heading: "Dentro il porto",
        subheading: "Fra la nave e il limite del porto",
        rows: [
          {
            term: "Le banchine",
            detail:
              "Le navi da crociera ormeggiano alle banchine 10, 11, 12, 12bis, 13, 13bis e 25. Quasi tutte lungo l'antemurale Cristoforo Colombo; la 25 si trova sul lato opposto.",
          },
          {
            term: "La navetta gratuita",
            detail:
              "Port Mobility gestisce una navetta che collega tutte le banchine crociere con il centro servizi di Largo della Pace, con orari legati agli arrivi delle navi.",
          },
          {
            term: "Largo della Pace",
            detail:
              "Il porto lo descrive come il punto di riferimento dei crocieristi: centro servizi, punto informazioni e ingresso pedonale su via del Lazzaretto.",
          },
        ],
      },
      {
        id: "vehicles",
        heading: "Dove possono stare i veicoli",
        subheading: "Che cosa pubblica il porto sui propri varchi",
        rows: [
          {
            term: "Varco Vespucci",
            detail:
              "Il porto lo indica come l'unico ingresso per i veicoli dei passeggeri e per chi possiede un titolo d'ingresso valido. Aperto 24 ore e sorvegliato.",
          },
          {
            term: "Gli altri due varchi",
            detail:
              "Il Nord è per i veicoli soggetti a controllo doganale e per il trasporto merci. Il Fortezza ammette mezzi di emergenza, Forze Armate, Polizia e pubblica amministrazione.",
          },
          {
            term: "Che cosa non è pubblicato",
            detail:
              "Nessun punto d'incontro indicato per taxi, auto private o NCC, né se un'auto possa avvicinarsi alla nave. Le pagine del porto non lo trattano: non lo facciamo nemmeno noi.",
          },
        ],
      },
    ],
    source: portIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead:
      "Da una parte un porto che lasciate per la prima volta, dall'altra un " +
      "indirizzo in città. L'incertezza è quasi tutta dal lato del porto.",
    from: {
      id: "civitavecchia",
      label: "Punto di prelievo",
      name: "Porto crociere di Civitavecchia",
      page: "civitavecchia",
      linkText: "Sul porto crociere di Civitavecchia",
      items: [
        {
          term: "La nave e la sua banchina",
          detail:
            "Indicate il nome della nave e la data di sbarco. La banchina determina quanta strada la navetta del porto debba coprire prima che un veicolo su gomma sia possibile.",
        },
        {
          term: "Il punto d'incontro si concorda, non si presume",
          detail:
            "L'autorità portuale non pubblica alcun punto d'incontro per i veicoli privati. L'operatore conferma in anticipo e per iscritto dove sarà l'autista per il vostro scalo.",
        },
        {
          term: "I bagagli",
          detail:
            "Contate separatamente valigie da stiva e bagagli a mano. Quello da crociera è il bagaglio più pesante con cui si viaggia, e determina il veicolo più del numero di persone.",
        },
      ],
    },
    to: {
      id: "rome",
      label: "Punto di discesa",
      name: "Roma",
      page: "rome",
      linkText: "Transfer a Roma",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Nome dell'albergo e via. Il centro storico di Roma ha zone a traffico limitato proprie, e l'indirizzo decide quanto vicino un veicolo possa legalmente fermarsi.",
        },
        {
          term: "Albergo, stazione o volo successivo",
          detail:
            "Se la tratta finisce in stazione o prosegue verso un aeroporto, ditelo: a Roma una discesa in stazione e una in albergo sono organizzazioni diverse.",
        },
        {
          term: "Arrivare prima del check-in",
          detail:
            "Le navi attraccano presto e le camere non sono sempre pronte. Se pensate di lasciare i bagagli e uscire, segnalatelo: cambia dove conviene davvero scendere.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead: "Sei righe, e il preventivo potrà essere preciso invece che prudente.",
    items: [
      "Il nome della nave e la data di attracco a Civitavecchia.",
      "Quanti passeggeri, adulti e bambini separatamente, con l'età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte: il bagaglio da crociera determina il veicolo.",
      "L'indirizzo completo a Roma, con quanto l'albergo vi ha detto sull'accesso alle zone a traffico limitato.",
      "Un numero di cellulare attivo a terra: è così che l'incontro si conclude il giorno stesso.",
      "Se volete già a preventivo anche il ritorno al porto o un proseguimento verso un aeroporto.",
    ],
    note:
      "Nulla di questo vi impegna. Un preventivo quota un viaggio in una data " +
      "precisa, e chiederlo non costa nulla.",
  },

  departure: {
    id: "departure",
    eyebrow: "L'altra direzione",
    heading: "Tornare per imbarcarsi",
    lead:
      "Il tragitto inverso ha già pagine proprie ed è un problema diverso: qui non " +
      "viene trattato.",
    paragraphs: [
      "Andando verso la nave, l'orologio corre verso l'orario di imbarco fissato dalla compagnia, ed è quella scadenza, non la strada, a determinare la prenotazione. Due pagine se ne occupano già: da Roma a Civitavecchia e dall'aeroporto di Fiumicino a Civitavecchia, per chi atterra il giorno stesso dell'imbarco.",
      "Se dovete raggiungere una nave invece di lasciarla, usate quelle: sono scritte per la scadenza d'imbarco, cosa che questa pagina non è.",
    ],
    note:
      "Entrambe le direzioni si organizzano allo stesso modo e si preventivano " +
      "singolarmente. Cambia solo il rischio, che corre nel senso opposto.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande dopo lo sbarco",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "L'auto può venire a prendermi sotto la nave?",
        answer:
          "Non lo promettiamo. Le pagine pubblicate dal porto descrivono varchi e " +
          "navetta interna ma non dicono nulla su taxi, auto private o NCC, e non " +
          "indicano per loro alcun punto d'incontro. Invece di affermare un accordo " +
          "che il porto non pubblica, è l'operatore a confermare il punto d'incontro " +
          "per il vostro scalo prima del giorno stesso.",
      },
      {
        question: "Che cos'è Largo della Pace?",
        answer:
          "Il centro servizi del porto, che lo descrive come il punto di riferimento " +
          "dei crocieristi. Una navetta gratuita collega tutte le banchine crociere, " +
          "con orari legati agli arrivi delle navi. Ospita anche un punto informazioni " +
          "e un ingresso pedonale su via del Lazzaretto.",
      },
      {
        question: "Quale varco usano i veicoli?",
        answer:
          "Il varco Vespucci. Il porto lo indica come l'unico ingresso per i veicoli " +
          "dei passeggeri e per chi ha un titolo d'ingresso valido, aperto 24 ore. Il " +
          "varco Nord è per merci e dogana; il Fortezza ammette mezzi di emergenza, " +
          "militari, di polizia e della pubblica amministrazione.",
      },
      {
        question: "Quanto ci vuole per arrivare a Roma?",
        answer:
          "Non pubblichiamo una cifra. La parte variabile è lo sbarco: dipende dalla " +
          "nave, dalla banchina e da come il terminal sta smaltendo quella mattina. Un " +
          "numero secco verrebbe letto come una promessa. L'operatore vi consiglia per " +
          "il vostro scalo.",
      },
      {
        question: "C'è un treno, in alternativa?",
        answer:
          "Sì. Port Mobility indica che un servizio gestito da CSP collega la stazione " +
          "di Civitavecchia alle navi solo nei giorni di scalo, riservato ai " +
          "crocieristi, con partenza dal piazzale davanti alla stazione. Il porto " +
          "segnala anche che il varco Fortezza dista circa 600 metri dalla stazione. " +
          "Il treno richiede poi una seconda coincidenza a Roma, con i bagagli.",
      },
      {
        question: "Siamo un gruppo numeroso con molti bagagli. Cambia qualcosa?",
        answer:
          "Cambia il veicolo, che si decide prima e non sulla banchina. Indicate " +
          "separatamente il numero di persone e quello delle valigie quando scrivete. " +
          "I gruppi in crociera portano spesso più bagagli di quanti il numero " +
          "suggerisca, ed è quel dato a determinare che cosa viene inviato.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "civitavecchia",
        label: "Porto crociere di Civitavecchia",
        detail: "Il porto per esteso: banchine, varchi e com'è organizzato.",
      },
      {
        page: "rome",
        label: "Roma",
        detail: "La destinazione, e che cosa comportano per un'auto le regole d'accesso della città.",
      },
      {
        page: "route-rome-civitavecchia",
        label: "Da Roma a Civitavecchia",
        detail: "La tratta di andata, scritta per l'orario d'imbarco e non per lo sbarco.",
      },
      {
        page: "route-civ-fco",
        label: "Da Civitavecchia all'aeroporto di Fiumicino",
        detail: "Se dopo la crociera c'è un volo invece di un soggiorno a Roma.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicateci la nave e l'indirizzo",
    body:
      "Quelle due righe sono già quasi tutto un preventivo. Con nave e data " +
      "l'operatore lavora sul vostro sbarco reale; con l'indirizzo completo a Roma " +
      "la discesa può tenere conto delle zone a traffico limitato.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Porto crociere di Civitavecchia", page: "civitavecchia" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

/* ── Civitavecchia → Fiumicino Airport ─────────────────────────────────── */

const civFcoEn: RoutePage = {
  meta: {
    title: "Civitavecchia to Fiumicino Airport – Book Your Driver",
    description:
      "Cruise to flight in one day. Disembarkation against check-in, what the port " +
      "publishes about its gates, and how a private car reaches the terminals.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Civitavecchia cruise port",
    to: "Rome Fiumicino Airport (FCO)",
    eyebrow: "Route",
    h1: "Civitavecchia cruise port to Fiumicino Airport",
    lead:
      "Two timetables that were never designed to meet. A ship clears its " +
      "passengers when it clears them, and an airline closes check-in when it " +
      "closes it. This transfer sits in the gap, and the gap is the whole reason " +
      "the page exists.",
    primaryCta: "Request a quote",
    secondaryCta: "About Fiumicino Airport",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance of ours appears here, and nothing on this page is a guarantee that " +
      "a particular flight can be made.",
  },

  lead: {
    id: "two-clocks",
    eyebrow: "What makes this route different",
    heading: "Disembarkation time is not a departure time",
    text:
      "On every other airport run the passenger controls when they leave. Here " +
      "they do not: the ship does. That single difference is what the booking has " +
      "to absorb.",
    columns: [
      {
        id: "ship",
        heading: "The end you do not control",
        subheading: "Clearing the ship and the port",
        rows: [
          {
            term: "Disembarkation",
            detail:
              "The cruise line sets it, by deck or by luggage group, and it is the variable part of the morning. We publish no figure for it, because it is not ours to publish.",
          },
          {
            term: "Crossing the port",
            detail:
              "A free shuttle connects the cruise piers with the Largo della Pace service centre. That stretch happens before any road vehicle is involved.",
          },
          {
            term: "Where a car can be",
            detail:
              "The port names the Vespucci gate as the only entrance for passengers' vehicles. It publishes no meeting point for taxis, private cars or NCC, so the operator confirms yours.",
          },
        ],
      },
      {
        id: "flight",
        heading: "The end that will not wait",
        subheading: "Arriving at Fiumicino",
        rows: [
          {
            term: "Two regulated areas",
            detail:
              "The airport operator publishes a Controlled Traffic Zone — the Kiss&Go area, for passengers and companions heading to Terminals 1 and 3 — and a separate Limited Traffic Zone.",
          },
          {
            term: "Which one a hired car uses",
            detail:
              "The charter states the ZTL is closed to general traffic because it is reserved for taxis, NCC and buses, and vehicles authorised by law enforcement.",
          },
          {
            term: "Cameras on both",
            detail:
              "Both zones are controlled by an automatic electronic detection system with cameras, which is why the route in is a rule rather than a preference.",
          },
        ],
      },
    ],
    source: fcoEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A quay at one end, a terminal at the other",
    lead:
      "The questions at each end are different, and neither is about the road.",
    from: {
      id: "civitavecchia",
      label: "Pickup",
      name: "Civitavecchia cruise port",
      page: "civitavecchia",
      linkText: "About Civitavecchia cruise port",
      items: [
        {
          term: "Ship, date and disembarkation time",
          detail:
            "Send all three. The cruise line's own disembarkation schedule, not an estimate, is what the operator times the collection against.",
        },
        {
          term: "The meeting point is confirmed, never assumed",
          detail:
            "The port publishes nothing about where private vehicles meet passengers. We will not invent one; the operator settles it for your sailing in advance.",
        },
        {
          term: "Luggage, counted honestly",
          detail:
            "A cruise party's cases are the usual reason a vehicle turns out to be too small. Hold and cabin bags separately, every time.",
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
            "It gives the terminal and the check-in deadline in one line. The charter's Kiss&Go area serves Terminals 1 and 3; your flight decides which matters to you.",
        },
        {
          term: "Airline and departure time",
          detail:
            "A departure is timed backwards from check-in closing, not forwards from disembarkation. The airline's own cut-off is the number the operator works to.",
        },
        {
          term: "What we will not promise",
          detail:
            "That any particular flight can be made. Disembarkation is outside everyone's control, and a page that implied otherwise would be selling certainty it does not have.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "This is the route where incomplete information costs the most, because the " +
      "whole arrangement hinges on two fixed times at opposite ends.",
    items: [
      "The ship's name, the date it docks, and the disembarkation time the cruise line has given you.",
      "The flight number and its departure time — not just the airport.",
      "Passengers as adults and children, with ages, so any child seat is arranged in advance.",
      "Hold cases and cabin bags separately, including anything oversized.",
      "A mobile number reachable ashore before you clear the port.",
      "Whether anyone in the party needs step-free access or assistance with luggage.",
    ],
    note:
      "If the gap between disembarkation and check-in looks tight, say so when you " +
      "ask. It is better discussed in a quotation than discovered on the quay.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about a cruise-to-flight day",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Will I make my flight?",
        answer:
          "We cannot promise that, and no honest operator can. Disembarkation is set " +
          "by the cruise line and varies with the ship and the morning. What the " +
          "operator can do is work to your actual disembarkation time and the " +
          "airline's check-in deadline, and tell you if the two look too close before " +
          "you book rather than after.",
      },
      {
        question: "Where will the driver meet me at the port?",
        answer:
          "At a point the operator confirms for your sailing. The port's published " +
          "pages cover its gates, piers and internal shuttle, but say nothing about " +
          "taxis, private cars or NCC vehicles and name no meeting point for them. We " +
          "would rather tell you where the published record stops.",
      },
      {
        question: "Which terminal does the car go to at Fiumicino?",
        answer:
          "The one your flight departs from, which the flight number settles. The " +
          "airport's charter describes the Kiss&Go area as serving Terminals 1 and 3, " +
          "and a separate Limited Traffic Zone reserved for taxis, NCC and buses. " +
          "Send the flight number and the approach is decided before the day.",
      },
      {
        question: "Is a taxi cheaper?",
        answer:
          "There is a published fixed taxi fare for this journey: the airport's ENAC " +
          "service charter of 8 May 2026 lists €130 each way between the port of " +
          "Civitavecchia and Fiumicino, including supplements. That is the licensed " +
          "taxi tariff, not a price of ours — we quote each transfer individually, and " +
          "you can compare the two before deciding.",
      },
      {
        question: "Can we stop in Rome on the way to the airport?",
        answer:
          "Ask when you request the quotation. A stop changes the vehicle's time and " +
          "the routing, so it is priced as part of the journey rather than added on " +
          "the day. Whether it fits at all depends on the gap between your " +
          "disembarkation and your check-in.",
      },
      {
        question: "What if the ship docks late?",
        answer:
          "Tell the operator as soon as you know. Because the collection is timed " +
          "against disembarkation rather than a fixed hour, a late berth is a change " +
          "to the plan rather than a missed pickup — but only if it is communicated. " +
          "That is why a reachable mobile number is on the list above.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "civitavecchia",
        label: "Civitavecchia cruise port",
        detail: "The port in full: its piers, its gates and how it is laid out.",
      },
      {
        page: "fiumicino",
        label: "Rome Fiumicino Airport (FCO)",
        detail: "The airport's two regulated traffic areas, and what each is for.",
      },
      {
        page: "route-civ-rome",
        label: "Civitavecchia to Rome",
        detail: "If the cruise ends with a stay in the city rather than a flight home.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Fiumicino Airport to Civitavecchia",
        detail: "The opposite day: flying in and joining a ship before it sails.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the ship and the flight",
    body:
      "Two fixed times at opposite ends of one morning. With both, the operator can " +
      "tell you whether the day works before you commit to it — which is more useful " +
      "than a price alone.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Fiumicino Airport", page: "fiumicino" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. Nothing here is a guarantee that a particular flight can be met.",
  },
};

const civFcoIt: RoutePage = {
  meta: {
    title: "Da Civitavecchia all'aeroporto di Fiumicino – Prenota",
    description:
      "Dalla crociera al volo in giornata. Lo sbarco contro il check-in, che cosa " +
      "pubblica il porto sui varchi e come un'auto privata arriva ai terminal.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Porto crociere di Civitavecchia",
    to: "Aeroporto di Roma Fiumicino (FCO)",
    eyebrow: "Tratta",
    h1: "Dal porto di Civitavecchia all'aeroporto di Fiumicino",
    lead:
      "Due orari che nessuno ha pensato per incontrarsi. Una nave sbarca i " +
      "passeggeri quando li sbarca, e una compagnia aerea chiude il check-in quando " +
      "lo chiude. Questo transfer sta nel mezzo, ed è proprio quel margine la " +
      "ragione di questa pagina.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto di Fiumicino",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono nostri prezzi, durate o distanze, e nulla in questa pagina " +
      "garantisce che un determinato volo possa essere preso.",
  },

  lead: {
    id: "two-clocks",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "L'ora dello sbarco non è l'ora della partenza",
    text:
      "In ogni altra tratta aeroportuale è il passeggero a decidere quando partire. " +
      "Qui no: decide la nave. È questa sola differenza che la prenotazione deve " +
      "assorbire.",
    columns: [
      {
        id: "ship",
        heading: "Il capo che non controllate",
        subheading: "Lasciare la nave e il porto",
        rows: [
          {
            term: "Lo sbarco",
            detail:
              "Lo stabilisce la compagnia, per ponte o per gruppo bagagli, ed è la parte variabile della mattina. Non ne pubblichiamo una stima, perché non spetta a noi.",
          },
          {
            term: "Attraversare il porto",
            detail:
              "Una navetta gratuita collega le banchine crociere con il centro servizi di Largo della Pace. Quel tratto avviene prima che entri in gioco qualsiasi veicolo su gomma.",
          },
          {
            term: "Dove può stare un'auto",
            detail:
              "Il porto indica il varco Vespucci come unico ingresso per i veicoli dei passeggeri. Non pubblica punti d'incontro per taxi, auto private o NCC: lo conferma l'operatore.",
          },
        ],
      },
      {
        id: "flight",
        heading: "Il capo che non aspetta",
        subheading: "Arrivare a Fiumicino",
        rows: [
          {
            term: "Due aree regolamentate",
            detail:
              "Il gestore pubblica una Zona a Traffico Controllato — l'area Kiss&Go, per passeggeri e accompagnatori diretti ai Terminal 1 e 3 — e una Zona a Traffico Limitato separata.",
          },
          {
            term: "Quale usa un'auto a noleggio",
            detail:
              "La Carta dei Servizi indica che alla ZTL è vietato l'accesso perché riservata a taxi, NCC, bus e veicoli autorizzati delle Forze dell'Ordine.",
          },
          {
            term: "Telecamere su entrambe",
            detail:
              "Entrambe le zone sono controllate da un sistema automatico di rilevamento elettronico con telecamere: per questo la via d'accesso è una regola, non una preferenza.",
          },
        ],
      },
    ],
    source: fcoIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Una banchina da una parte, un terminal dall'altra",
    lead:
      "Le domande ai due capi sono diverse, e nessuna riguarda la strada in mezzo.",
    from: {
      id: "civitavecchia",
      label: "Punto di prelievo",
      name: "Porto crociere di Civitavecchia",
      page: "civitavecchia",
      linkText: "Sul porto crociere di Civitavecchia",
      items: [
        {
          term: "Nave, data e ora di sbarco",
          detail:
            "Indicatele tutte e tre. È il programma di sbarco della compagnia, non una stima, il riferimento su cui l'operatore calcola il prelievo.",
        },
        {
          term: "Il punto d'incontro si conferma, non si presume",
          detail:
            "Il porto non pubblica nulla su dove i veicoli privati incontrino i passeggeri. Non lo inventiamo: lo stabilisce in anticipo l'operatore per il vostro scalo.",
        },
        {
          term: "Bagagli, contati con onestà",
          detail:
            "Le valigie di un gruppo in crociera sono il motivo abituale per cui un veicolo si rivela troppo piccolo. Stiva e cabina separati, sempre.",
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
            "Dà in una riga il terminal e la scadenza del check-in. L'area Kiss&Go della Carta dei Servizi serve i Terminal 1 e 3; il vostro volo dice quale vi riguarda.",
        },
        {
          term: "Compagnia e orario di partenza",
          detail:
            "Una partenza si calcola a ritroso dalla chiusura del check-in, non in avanti dallo sbarco. È il limite della compagnia il numero su cui lavora l'operatore.",
        },
        {
          term: "Che cosa non promettiamo",
          detail:
            "Che un determinato volo si riesca a prendere. Lo sbarco è fuori dal controllo di tutti, e una pagina che lasciasse intendere il contrario venderebbe una certezza che non ha.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "È la tratta in cui le informazioni incomplete costano di più, perché tutto " +
      "dipende da due orari fissi ai capi opposti della stessa mattina.",
    items: [
      "Il nome della nave, la data di attracco e l'ora di sbarco indicata dalla compagnia.",
      "Il numero del volo e il suo orario di partenza, non il solo aeroporto.",
      "I passeggeri divisi fra adulti e bambini, con le età, così il seggiolino si predispone prima.",
      "Valigie da stiva e bagagli a mano separati, compreso tutto ciò che è fuori misura.",
      "Un numero di cellulare raggiungibile a terra prima di uscire dal porto.",
      "Se qualcuno nel gruppo ha bisogno di accesso senza gradini o di aiuto con i bagagli.",
    ],
    note:
      "Se il margine fra sbarco e check-in sembra stretto, ditelo quando scrivete: " +
      "meglio discuterne in un preventivo che scoprirlo sulla banchina.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su una giornata crociera-volo",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Farò in tempo per il volo?",
        answer:
          "Non possiamo prometterlo, e nessun operatore onesto può. Lo sbarco lo " +
          "decide la compagnia di crociera e varia con la nave e con la mattina. " +
          "L'operatore può lavorare sulla vostra ora di sbarco reale e sulla chiusura " +
          "del check-in, e dirvi se i due orari sembrano troppo vicini prima della " +
          "prenotazione, non dopo.",
      },
      {
        question: "Dove mi aspetta l'autista al porto?",
        answer:
          "In un punto che l'operatore conferma per il vostro scalo. Le pagine " +
          "pubblicate dal porto trattano varchi, banchine e navetta interna, ma non " +
          "dicono nulla su taxi, auto private o NCC e non indicano per loro alcun " +
          "punto d'incontro. Preferiamo dirvi dove si ferma la documentazione " +
          "pubblicata.",
      },
      {
        question: "A quale terminal arriva l'auto a Fiumicino?",
        answer:
          "A quello da cui parte il vostro volo, che il numero del volo determina. La " +
          "Carta dei Servizi descrive l'area Kiss&Go come dedicata ai Terminal 1 e 3, " +
          "e una Zona a Traffico Limitato separata riservata a taxi, NCC e bus. " +
          "Inviate il numero del volo e l'avvicinamento si decide prima del giorno.",
      },
      {
        question: "Il taxi costa meno?",
        answer:
          "Per questo tragitto esiste una tariffa fissa pubblicata: la Carta dei " +
          "Servizi ENAC dell'aeroporto dell'8 maggio 2026 indica 130 euro per tratta " +
          "fra il porto di Civitavecchia e Fiumicino, supplementi compresi. È la " +
          "tariffa del taxi autorizzato, non un nostro prezzo: noi preventiviamo ogni " +
          "transfer singolarmente e potete confrontare prima di decidere.",
      },
      {
        question: "Possiamo fermarci a Roma andando in aeroporto?",
        answer:
          "Chiedetelo quando richiedete il preventivo. Una sosta cambia i tempi del " +
          "veicolo e il percorso, quindi si quota come parte del viaggio e non si " +
          "aggiunge il giorno stesso. Se poi ci stia davvero dipende dal margine fra " +
          "il vostro sbarco e il vostro check-in.",
      },
      {
        question: "E se la nave attracca in ritardo?",
        answer:
          "Avvisate l'operatore appena lo sapete. Poiché il prelievo è calcolato sullo " +
          "sbarco e non su un'ora fissa, un ormeggio in ritardo è una modifica al " +
          "piano e non un appuntamento mancato — ma solo se viene comunicato. Per " +
          "questo nell'elenco qui sopra c'è un numero di cellulare raggiungibile.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "civitavecchia",
        label: "Porto crociere di Civitavecchia",
        detail: "Il porto per esteso: banchine, varchi e com'è organizzato.",
      },
      {
        page: "fiumicino",
        label: "Aeroporto di Roma Fiumicino (FCO)",
        detail: "Le due aree a traffico regolamentato dell'aeroporto, e a che cosa servono.",
      },
      {
        page: "route-civ-rome",
        label: "Da Civitavecchia a Roma",
        detail: "Se la crociera finisce con un soggiorno in città invece che con un volo.",
      },
      {
        page: "route-fco-civitavecchia",
        label: "Dall'aeroporto di Fiumicino a Civitavecchia",
        detail: "La giornata opposta: atterrare e imbarcarsi prima che la nave parta.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci la nave e il volo",
    body:
      "Due orari fissi ai capi opposti della stessa mattina. Con entrambi " +
      "l'operatore può dirvi se la giornata regge prima che vi impegniate: più utile " +
      "di un prezzo da solo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Aeroporto di Fiumicino", page: "fiumicino" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Nulla qui garantisce che un determinato volo possa essere preso.",
  },
};

export const routeCivRome: Record<Locale, RoutePage> = {
  en: civRomeEn,
  it: civRomeIt,
};

export const routeCivFco: Record<Locale, RoutePage> = {
  en: civFcoEn,
  it: civFcoIt,
};
