import type { LakeGardaHub } from "./types";

/**
 * Lake Garda.
 *
 * ── What changed, and why this page now exists ───────────────────────────
 * Until 25 November 2026 the Verona page stated in print that no Lake Garda
 * town could be named as served, because operator coverage had not been
 * confirmed. The owner has now confirmed it for five towns, so the caution
 * has been replaced by this page rather than quietly deleted.
 *
 * ── Sourcing ─────────────────────────────────────────────────────────────
 * Each town's administrative position is quoted from its own comune's
 * website, read 25 November 2026, and they differ in how much they state:
 *
 *   Peschiera   "Regione Veneto", address "37019 ... VR" (region + sigla)
 *   Bardolino   "Regione Veneto"                         (region only)
 *   Sirmione    "Sirmione (BS)", links Regione Lombardia (both)
 *   Desenzano   links "Provincia di Brescia"             (province only)
 *   Lazise      site refused the connection              (nothing)
 *
 * The table reproduces that unevenness instead of tidying it into a column
 * of matching labels. Lazise's row says the site could not be read, which
 * is the truth and is more useful than a guess dressed as a fact.
 *
 * The Comune di Garda states "Regione Veneto - Provincia di Verona" - the
 * most complete self-description of any town on this shore - and is NOT in
 * the table. Coverage was confirmed for five towns and Garda is not one of
 * them. Noted here so a future editor does not add it thinking it was an
 * oversight; adding it would publish an offer nobody authorised.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances, fares, ferry timetables, parking, hotel
 * recommendations, and any claim that the lake belongs to one region. No
 * third region is named: nothing read states that any Garda comune lies in
 * Trentino, so the page says two regions and stops.
 *
 * ── No photograph ───────────────────────────────────────────────────────
 * The CC0 library holds no image of Lake Garda or any of these five towns.
 * A lake photograph from somewhere else would be the one thing this page
 * must not do, so it has no hero image.
 */

const comuniEn = {
  text:
    "Each town's region and province are quoted from that comune's own website, " +
    "read 25 November 2026. They state different amounts: Sirmione gives both its " +
    "province and its region, Bardolino only its region, Desenzano only its " +
    "province. Lazise's site refused the connection, and nothing is claimed for it " +
    "beyond the shore it sits on:",
  linkText: "the Comune di Sirmione",
  href: "https://www.comune.sirmione.bs.it/",
};

const comuniIt = {
  text:
    "Regione e provincia di ciascun paese sono riprese dal sito del rispettivo " +
    "comune, consultato il 25 novembre 2026. Indicano quantità diverse di " +
    "informazioni: Sirmione pubblica provincia e regione, Bardolino solo la " +
    "regione, Desenzano solo la provincia. Il sito di Lazise ha rifiutato la " +
    "connessione e per quel comune non affermiamo nulla oltre alla sponda su cui " +
    "si trova:",
  linkText: "il Comune di Sirmione",
  href: "https://www.comune.sirmione.bs.it/",
};

const en: LakeGardaHub = {
  meta: {
    title: "Lake Garda Private Transfers – Five Towns, Two Regions",
    description:
      "Lake Garda is a shoreline, not a destination. Which town you name decides " +
      "the road, the region and the rules. The five we can arrange.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Lake Garda",
    h1: "Private transfers to Lake Garda",
    lead:
      "“Lake Garda” is not somewhere a car can take you. It is roughly " +
      "fifty kilometres of shoreline with towns along both sides, in two different " +
      "regions with two different sets of rules. Naming the town is the whole of " +
      "what makes this journey answerable.",
    primaryCta: "Request a quotation",
    secondaryCta: "Verona to Sirmione",
    facts: [
      { label: "Towns we arrange", value: "Peschiera, Lazise, Bardolino, Sirmione, Desenzano" },
      { label: "Regions", value: "Veneto on the east shore, Lombardy on the south-west" },
      { label: "What decides the journey", value: "The town, then the address" },
    ],
  },

  shape: {
    id: "shape",
    eyebrow: "The thing to understand first",
    heading: "One lake, two regions, no single authority",
    lead:
      "Most of what makes a Garda transfer awkward comes from one fact: the " +
      "lake is a border, and nobody is in charge of all of it.",
    paragraphs: [
      "Most lakes are a destination. Garda is a boundary. Its eastern shore lies in the Veneto, in the province of Verona; its south-western corner lies in Lombardy, in the province of Brescia. That is not a technicality for a transfer: regions and comuni set their own traffic rules, and two towns a short distance apart across the water can be governed quite differently.",
      "It also means the lake has no single transport authority to consult, and no single answer to “can a car reach my hotel”. Each comune decides that for itself. Sirmione, for instance, runs a limited-traffic zone over its historic centre with one electronically monitored entry point — and the rules for a hired car there are unlike anything on the Veneto shore.",
      "So the useful first question is not how to get to Lake Garda. It is which town you are actually going to, and the answer changes the road, the region and sometimes whether a vehicle can reach the door at all.",
    ],
  },

  towns: {
    id: "towns",
    eyebrow: "Where we can take you",
    heading: "Five towns, and what each one's comune says about itself",
    lead:
      "These are the destinations our operators have confirmed. The administrative " +
      "column is quoted from each town's own website, because they do not all " +
      "state the same things.",
    caption: "Confirmed Lake Garda destinations, with the region and province each comune publishes",
    columns: ["Town", "What its comune publishes", "What it means for a transfer"],
    rows: [
      {
        id: "peschiera",
        cells: [
          "Peschiera del Garda",
          "Regione Veneto; address given as 37019, VR",
          "The lake's south-east corner and its main railway gateway. A common first stop for travellers arriving by train rather than by air.",
        ],
      },
      {
        id: "lazise",
        cells: [
          "Lazise",
          "Site refused the connection; not verified",
          "On the Veneto shore north of Peschiera. We can arrange the journey; we simply could not read the comune's own page to quote it.",
        ],
      },
      {
        id: "bardolino",
        cells: [
          "Bardolino",
          "Regione Veneto; province not stated on its site",
          "Further up the same eastern shore. A lakefront town whose name is also a wine denomination, which is why some arrivals are for a cellar rather than a hotel.",
        ],
      },
      {
        id: "sirmione",
        cells: [
          "Sirmione",
          "“Sirmione (BS)”, under Regione Lombardia",
          "A peninsula on the southern shore, in Lombardy. Its historic centre is a limited-traffic zone with a single monitored entry — the one town here where access needs explaining before you book.",
        ],
      },
      {
        id: "desenzano",
        cells: [
          "Desenzano del Garda",
          "Links “Provincia di Brescia”; region not stated on its site",
          "The south-western corner, also in Brescia's province. The largest of the southern towns and another railway arrival point.",
        ],
      },
    ],
    note:
      "Nothing we read states that any of these comuni lies in Trentino, so this " +
      "page names two regions rather than three. If your destination is further " +
      "north on the lake, say so when you ask rather than assuming it is covered " +
      "by the list above.",
    source: comuniEn,
  },

  coverage: {
    id: "coverage",
    eyebrow: "What confirmed coverage means",
    heading: "We can reach these towns. The door is a separate question",
    lead:
      "Our operators have confirmed they serve the five towns above. That is a real " +
      "statement and a limited one, and the difference matters.",
    paragraphs: [
      "Coverage means a transfer to that town can be arranged and quoted. It does not mean a vehicle can stop outside any address within it. Lakeside towns have old centres, narrow lanes and lakefront promenades closed to traffic, and at Sirmione there is a limited-traffic zone with rules that depend on who is in the car.",
      "So the pattern is the same as everywhere else on this site: send the full address, and the operator tells you where the journey can realistically end before you travel rather than on the day.",
    ],
    caution: {
      heading: "What this page still does not claim",
      body:
        "That a car will reach your hotel entrance. That any particular street is " +
        "passable. That a town beyond the five listed can be served — if yours is " +
        "not here, ask, and the answer will be about your town rather than about " +
        "the lake in general.",
    },
  },

  send: {
    id: "send",
    heading: "What to send for a Lake Garda transfer",
    lead:
      "The first line matters more than the rest put together, and it is the one " +
      "most requests leave out.",
    items: [
      "The town — Peschiera, Lazise, Bardolino, Sirmione or Desenzano — not “Lake Garda”.",
      "The full address in that town, including anything the property has told you about arriving by car.",
      "Where you are starting: a Verona or Venice address, an airport terminal, or a station.",
      "The date and the time you would like to travel.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
    ],
    note:
      "If you are staying in the historic centre of Sirmione, say so explicitly. " +
      "The rules there turn on whether the passengers are staying in the town, " +
      "which is a question only you can answer.",
  },

  onward: {
    id: "onward",
    eyebrow: "Related",
    heading: "Getting to the lake, and the region around it",
    lead: "Pages that exist today, each written for its own purpose.",
    items: [
      {
        id: "route-verona-sirmione",
        page: "route-verona-sirmione",
        label: "Verona to Sirmione",
        detail: "The one lake journey with a page of its own, because its destination has rules the others do not.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfers in Verona",
        detail: "The usual road gateway to the lake's southern and eastern shores.",
      },
      {
        id: "padua",
        page: "padua",
        label: "Transfers in Padua",
        detail: "The other end of the region, and the Veneto city whose access rules most reward reading first.",
      },
      {
        id: "route-vrn-garda",
        page: "route-vrn-garda",
        label: "Verona Airport to Lake Garda",
        detail: "The arrival journey to any of the five towns, and the return for a departing flight.",
      },
      {
        id: "verona-airport",
        page: "verona-airport",
        label: "Verona Villafranca Airport (VRN)",
        detail: "The airport most travellers use for this part of the lake.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfers in Venice",
        detail: "The other end of the region, and a completely different set of rules.",
      },
      {
        id: "route-venice-verona",
        page: "route-venice-verona",
        label: "Venice to Verona",
        detail: "If the lake follows a stay in Venice, this is the leg before it.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about Lake Garda transfers",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Which Lake Garda towns can you arrange transfers to?",
        answer:
          "Peschiera del Garda, Lazise, Bardolino, Sirmione and Desenzano del Garda. " +
          "Those are the destinations our operators have confirmed. If your " +
          "town is not on that list, ask rather than assume — the answer will be " +
          "specific to it.",
      },
      {
        question: "Is Lake Garda in the Veneto?",
        answer:
          "Partly. Its eastern shore is: the Comune di Peschiera del Garda publishes " +
          "“Regione Veneto” and gives VR in its own address. But " +
          "Sirmione states “Sirmione (BS)” under Regione Lombardia, and " +
          "Desenzano links the Provincia di Brescia. The lake spans two regions, and " +
          "each comune sets its own traffic rules.",
      },
      {
        question: "Can the car take me to my hotel door?",
        answer:
          "Sometimes, and we will not promise it before seeing the address. Lakeside " +
          "towns have old centres and lakefront promenades where vehicles cannot go, " +
          "and Sirmione has a limited-traffic zone over its historic centre. Send the " +
          "full address and the operator will tell you where the journey can end.",
      },
      {
        question: "Why do you not have a page for each town?",
        answer:
          "Because four of the five would say the same thing with the name changed, " +
          "and that helps nobody. Sirmione has its own page because its access rules " +
          "are genuinely different. For the others, this page plus your address is " +
          "all the information a quotation needs.",
      },
      {
        question: "Can you arrange a boat as part of the transfer?",
        answer:
          "No. We arrange road transport only. The lake has its own ferry operators " +
          "and they are nothing to do with us — if your plan involves crossing the " +
          "water, the car takes you to the town and the crossing is yours to book.",
      },
      {
        question: "How long does it take from Verona?",
        answer:
          "We publish no figure. It depends on the town, the season and the hour, and " +
          "the lake's two shores are not equidistant from anywhere. Tell us the town " +
          "and your preferred time, and the operator advises for that journey.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Name the town, then the address",
    body:
      "That is the whole of what turns a Lake Garda enquiry into a quotation. Add " +
      "where you are starting and when, and the reply can be about your journey " +
      "rather than about the lake.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Verona to Sirmione", page: "route-verona-sirmione" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles, employ drivers directly, or operate " +
      "any boat service on the lake.",
  },
};

const it: LakeGardaHub = {
  meta: {
    title: "Transfer privati per il Lago di Garda – Cinque località",
    description:
      "Il Lago di Garda è una riva, non una destinazione. La località che indicate " +
      "decide strada, regione e regole. Le cinque che organizziamo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Lago di Garda",
    h1: "Transfer privati per il Lago di Garda",
    lead:
      "«Lago di Garda» non è un luogo in cui un'auto possa portarvi. È una " +
      "cinquantina di chilometri di riva con paesi su entrambi i lati, in due " +
      "regioni diverse con due insiemi di regole diversi. Indicare la località è " +
      "tutto ciò che rende rispondibile questo viaggio.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Da Verona a Sirmione",
    facts: [
      { label: "Località servite", value: "Peschiera, Lazise, Bardolino, Sirmione, Desenzano" },
      { label: "Regioni", value: "Veneto sulla sponda est, Lombardia a sud-ovest" },
      { label: "Che cosa decide il viaggio", value: "La località, poi l'indirizzo" },
    ],
  },

  shape: {
    id: "shape",
    eyebrow: "La prima cosa da capire",
    heading: "Un lago, due regioni, nessuna autorità unica",
    lead:
      "Quasi tutto ciò che rende complicato un transfer sul Garda nasce da un " +
      "dato: il lago è un confine, e nessuno lo governa per intero.",
    paragraphs: [
      "Quasi tutti i laghi sono una destinazione. Il Garda è un confine. La sponda orientale è in Veneto, in provincia di Verona; l'angolo sud-occidentale è in Lombardia, in provincia di Brescia. Per un transfer non è un dettaglio tecnico: regioni e comuni stabiliscono regole di circolazione proprie, e due paesi vicini sulle due rive possono essere disciplinati in modo molto diverso.",
      "Significa anche che il lago non ha un'unica autorità dei trasporti da consultare, né una risposta unica alla domanda «un'auto può arrivare al mio albergo». Lo decide ogni comune per sé. Sirmione, per esempio, ha una zona a traffico limitato sul centro storico con un unico varco controllato elettronicamente, e le regole per un'auto a noleggio lì non somigliano a nulla della sponda veneta.",
      "La prima domanda utile, quindi, non è come arrivare al Lago di Garda. È in quale località state andando davvero: la risposta cambia la strada, la regione e, a volte, se un veicolo possa arrivare alla porta.",
    ],
  },

  towns: {
    id: "towns",
    eyebrow: "Dove possiamo portarvi",
    heading: "Cinque località, e che cosa dice di sé ciascun comune",
    lead:
      "Sono le destinazioni confermate dai nostri operatori. La colonna " +
      "amministrativa è ripresa dal sito di ciascun paese, perché non indicano " +
      "tutti le stesse cose.",
    caption: "Destinazioni confermate sul Lago di Garda, con regione e provincia pubblicate da ciascun comune",
    columns: ["Località", "Che cosa pubblica il suo comune", "Che cosa comporta per un transfer"],
    rows: [
      {
        id: "peschiera",
        cells: [
          "Peschiera del Garda",
          "Regione Veneto; indirizzo indicato come 37019, VR",
          "L'angolo sud-orientale del lago e la sua principale porta ferroviaria. Prima tappa frequente per chi arriva in treno anziché in aereo.",
        ],
      },
      {
        id: "lazise",
        cells: [
          "Lazise",
          "Il sito ha rifiutato la connessione; non verificato",
          "Sulla sponda veneta a nord di Peschiera. Il viaggio lo organizziamo; semplicemente non siamo riusciti a leggere la pagina del comune per citarla.",
        ],
      },
      {
        id: "bardolino",
        cells: [
          "Bardolino",
          "Regione Veneto; provincia non indicata sul sito",
          "Più a nord sulla stessa sponda orientale. Un paese sul lago il cui nome è anche una denominazione vinicola: per questo alcuni arrivi sono diretti a una cantina e non a un albergo.",
        ],
      },
      {
        id: "sirmione",
        cells: [
          "Sirmione",
          "«Sirmione (BS)», sotto Regione Lombardia",
          "Una penisola sulla sponda meridionale, in Lombardia. Il centro storico è zona a traffico limitato con un unico varco controllato: l'unica località qui in cui l'accesso va spiegato prima di prenotare.",
        ],
      },
      {
        id: "desenzano",
        cells: [
          "Desenzano del Garda",
          "Rimanda alla «Provincia di Brescia»; regione non indicata sul sito",
          "L'angolo sud-occidentale, anch'esso in provincia di Brescia. Il maggiore dei paesi meridionali e un altro punto d'arrivo ferroviario.",
        ],
      },
    ],
    note:
      "Nulla di quanto abbiamo letto afferma che uno di questi comuni si trovi in " +
      "Trentino: questa pagina nomina quindi due regioni e non tre. Se la vostra " +
      "destinazione è più a nord sul lago, ditelo quando scrivete invece di " +
      "presumere che rientri nell'elenco qui sopra.",
    source: comuniIt,
  },

  coverage: {
    id: "coverage",
    eyebrow: "Che cosa significa copertura confermata",
    heading: "Raggiungiamo queste località. La porta è un'altra questione",
    lead:
      "I nostri operatori hanno confermato di servire le cinque località qui sopra. " +
      "È " +
      "un'affermazione reale ed è limitata, e la differenza conta.",
    paragraphs: [
      "Copertura significa che un transfer verso quella località si può organizzare e preventivare. Non significa che un veicolo possa fermarsi davanti a qualsiasi indirizzo al suo interno. I paesi sul lago hanno centri antichi, vicoli stretti e lungolaghi chiusi al traffico, e a Sirmione c'è una zona a traffico limitato con regole che dipendono da chi si trova in auto.",
      "Vale quindi lo schema di sempre: inviate l'indirizzo completo e l'operatore vi dirà dove il viaggio può realisticamente finire, prima di partire e non il giorno stesso.",
    ],
    caution: {
      heading: "Che cosa questa pagina continua a non affermare",
      body:
        "Che un'auto arrivi all'ingresso del vostro albergo. Che una determinata " +
        "strada sia percorribile. Che si possa servire una località oltre alle cinque " +
        "elencate: se la vostra non c'è, chiedete, e la risposta riguarderà quella " +
        "località e non il lago in generale.",
    },
  },

  send: {
    id: "send",
    heading: "Che cosa inviare per un transfer sul Lago di Garda",
    lead:
      "La prima riga conta più di tutte le altre messe insieme, ed è quella che " +
      "quasi tutte le richieste dimenticano.",
    items: [
      "La località — Peschiera, Lazise, Bardolino, Sirmione o Desenzano — non «Lago di Garda».",
      "L'indirizzo completo in quella località, con quanto la struttura vi ha detto sull'arrivo in auto.",
      "Da dove partite: un indirizzo a Verona o a Venezia, un terminal aeroportuale o una stazione.",
      "La data e l'ora in cui vorreste viaggiare.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
    ],
    note:
      "Se alloggiate nel centro storico di Sirmione, ditelo esplicitamente. Lì le " +
      "regole dipendono dal fatto che i passeggeri soggiornino in paese, ed è una " +
      "cosa che potete dirci solo voi.",
  },

  onward: {
    id: "onward",
    eyebrow: "Collegate",
    heading: "Arrivare al lago, e la regione attorno",
    lead: "Pagine che esistono oggi, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "route-verona-sirmione",
        page: "route-verona-sirmione",
        label: "Da Verona a Sirmione",
        detail: "L'unico viaggio sul lago con una pagina propria, perché la destinazione ha regole che le altre non hanno.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfer a Verona",
        detail: "La solita porta d'accesso su strada alle sponde meridionale e orientale del lago.",
      },
      {
        id: "padua",
        page: "padua",
        label: "Transfer a Padova",
        detail: "L'altro capo della regione, e la citt\u00e0 veneta le cui regole d'accesso conviene leggere per prime.",
      },
      {
        id: "route-vrn-garda",
        page: "route-vrn-garda",
        label: "Dall'aeroporto di Verona al Lago di Garda",
        detail: "Il viaggio d'arrivo verso una delle cinque località, e il ritorno per il volo.",
      },
      {
        id: "verona-airport",
        page: "verona-airport",
        label: "Aeroporto di Verona Villafranca (VRN)",
        detail: "L'aeroporto usato da quasi tutti i viaggiatori per questa parte del lago.",
      },
      {
        id: "venice",
        page: "venice",
        label: "Transfer a Venezia",
        detail: "L'altro capo della regione, con un insieme di regole del tutto diverso.",
      },
      {
        id: "route-venice-verona",
        page: "route-venice-verona",
        label: "Da Venezia a Verona",
        detail: "Se il lago segue un soggiorno a Venezia, questa è la tratta precedente.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande sui transfer per il Lago di Garda",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Per quali località del Lago di Garda organizzate transfer?",
        answer:
          "Peschiera del Garda, Lazise, Bardolino, Sirmione e Desenzano del Garda. " +
          "Sono le destinazioni confermate dai nostri operatori. Se la vostra " +
          "non è in elenco, chiedete invece di darlo per scontato: la risposta sarà " +
          "specifica per quella località.",
      },
      {
        question: "Il Lago di Garda è in Veneto?",
        answer:
          "In parte. La sponda orientale sì: il Comune di Peschiera del Garda " +
          "pubblica «Regione Veneto» e indica VR nel proprio indirizzo. Ma Sirmione " +
          "indica " +
          "«Sirmione (BS)» sotto Regione Lombardia e Desenzano rimanda alla Provincia " +
          "di Brescia. Il lago attraversa due regioni, e ogni comune stabilisce le " +
          "proprie regole di circolazione.",
      },
      {
        question: "L'auto può portarmi alla porta dell'albergo?",
        answer:
          "A volte, e non lo promettiamo prima di vedere l'indirizzo. I paesi sul " +
          "lago hanno centri antichi e lungolaghi dove i veicoli non possono andare, " +
          "e Sirmione ha una zona a traffico limitato sul centro storico. Inviate " +
          "l'indirizzo completo e l'operatore vi dirà dove il viaggio può finire.",
      },
      {
        question: "Perché non c'è una pagina per ogni località?",
        answer:
          "Perché quattro delle cinque direbbero la stessa cosa cambiando il nome, e " +
          "non " +
          "servirebbe a nessuno. Sirmione ha una pagina propria perché le sue regole " +
          "d'accesso sono davvero diverse. Per le altre, questa pagina più il vostro " +
          "indirizzo sono tutto ciò che serve a un preventivo.",
      },
      {
        question: "Potete organizzare anche un battello nel transfer?",
        answer:
          "No. Organizziamo solo trasporto su strada. Il lago ha i propri operatori " +
          "di navigazione e non hanno nulla a che fare con noi: se il vostro " +
          "programma prevede una traversata, l'auto vi porta in paese e la traversata " +
          "la prenotate voi.",
      },
      {
        question: "Quanto ci vuole da Verona?",
        answer:
          "Non pubblichiamo una cifra. Dipende dalla località, dalla stagione e " +
          "dall'ora, e le due sponde del lago non sono equidistanti da nessun luogo. " +
          "Indicate la località e l'orario preferito: l'operatore vi consiglia per " +
          "quel viaggio.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicate la località, poi l'indirizzo",
    body:
      "È tutto ciò che trasforma una richiesta sul Lago di Garda in un preventivo. " +
      "Aggiungete da dove partite e quando, e la risposta potrà riguardare il vostro " +
      "viaggio invece del lago.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Da Verona a Sirmione", page: "route-verona-sirmione" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli, non impieghiamo direttamente gli " +
      "autisti e non gestiamo alcun servizio di navigazione sul lago.",
  },
};

export const lakeGarda = { en, it };
