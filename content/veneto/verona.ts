import type { Locale } from "@/lib/site";
import type { VeronaHub } from "./types";

/**
 * The Verona hub.
 *
 * Verona earns its place in this cluster partly by being Venice's opposite:
 * an ordinary road city where a transfer ends at the address. The page says
 * so plainly, because after the Venice pages that is genuinely useful
 * information rather than a platitude.
 *
 * The one place it has to be careful is Lake Garda. The airport is a real
 * road gateway to the lake — the site's own homepage already says so — and
 * since 25 November 2026 coverage is confirmed for five named towns. Until
 * that day this section refused to name any of them; it now points at the
 * Lake Garda hub, which names exactly those five and no more. The page
 * therefore names the lake as a direction and explicitly refuses to name a
 * town as served. See `docs/veneto-research-log.md` §3.
 */

const en: VeronaHub = {
  meta: {
    title: "Private transfers in Verona",
    description:
      "Verona after Venice: an ordinary road city where a car reaches the address. The airport, Porta Nuova station and the honest position on Lake Garda.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    eyebrow: "Verona and the Veneto",
    h1: "Private transfers in Verona",
    lead: "After Venice, Verona is a relief to explain. It is a road city: a car reaches the address, the airport is a short way out to the south-west, and the station is in the middle of town. The useful questions here are about timing, not about whether the journey is possible at all.",
    primaryCta: "Request a quotation",
    secondaryCta: "The station and the Airlink",
    modes: [
      {
        id: "air",
        label: "By air",
        name: "Villafranca (VRN)",
        detail:
          "About 10 km south-west of the city, in the comune of Villafranca di Verona.",
      },
      {
        id: "rail",
        label: "By rail",
        name: "Verona Porta Nuova",
        detail:
          "The city's principal station, and the point most rail journeys into Verona end at.",
      },
      {
        id: "road",
        label: "By road",
        name: "The address itself",
        detail:
          "Unlike Venice, a transfer here finishes where you are actually going.",
      },
    ],
  },

  station: {
    id: "station",
    eyebrow: "The station",
    heading: "Porta Nuova, and the link to the airport",
    lead: "Verona's main station does two jobs for a traveller: it is a destination in itself, and it is where the airport connection runs to.",
    paragraphs: [
      "Porta Nuova is Verona's principal station and the point most rail journeys into the city end at. For a transfer it behaves like any mainline station — a car can reach the area outside it, and exactly where it waits is a matter for the arrangement rather than for geography.",
      "It is also the Verona end of the airport connection, which makes it the one place in the city where the road and rail options genuinely overlap. If you are weighing a transfer against the train, this is where the comparison actually happens.",
    ],
    airlink: {
      heading: "The Verona Airlink",
      body: "Trenitalia runs a combined train-and-bus service under a single ticket, linking Verona Porta Nuova with the airport in partnership with ATV. The bus leg runs roughly every twenty minutes at peak times and every forty minutes otherwise, with departures from Porta Nuova between 05:15 and 22:50 and from the airport between 05:35 and 23:10. It is a public service and not ours, and it is a different proposition from a car that takes your luggage to an address.",
    },
    source: {
      text: "Service structure and operating hours as published by Trenitalia and checked in October 2026. Public timetables change, and no fare is quoted here because fares change more often still:",
      linkText: "Trenitalia publishes the Airlink's current details",
      href: "https://www.trenitalia.com/en/connections/verona-airlink.html",
    },
  },

  garda: {
    id: "garda",
    eyebrow: "Towards the lake",
    heading: "Verona and Lake Garda",
    lead: "The airport is a common road gateway to the lake. That is a geographic fact, and this page is careful to keep it one.",
    paragraphs: [
      "Lake Garda lies west of Verona, and Villafranca is the airport most travellers use for its southern and eastern shores. ATV runs a seasonal bus from that airport to the lake, route 482, hourly in its operating season — a public service listed here as context rather than as an option we provide, and one that does not run all year.",
      "Two things make the lake harder to arrange than it looks, and both are worth raising before you ask. Garda has a Verona side and a Lombardy side — two regions, each setting its own traffic rules — and a town on one shore is not a short hop from a town on the other. And “Lake Garda” is not a destination in itself: like Lake Como, it is a shoreline with towns on it, and which town you name decides the road entirely.",
    ],
    caution: {
      heading: "Which towns, exactly",
      body: "Five are confirmed — Peschiera del Garda, Lazise, Bardolino, Sirmione and Desenzano del Garda — and the rest of the shoreline is not. That is a deliberately short list rather than a claim on the whole lake. Say the town when you ask, and the answer will be about that town rather than about the lake in general.",
    },
    link: { page: "lake-garda", label: "Lake Garda transfers, town by town" },
    source: {
    text:
      "The seasonal bus between the airport and the lake is ATV's route 482, " +
      "which the operator describes as running hourly between Verona Airport " +
      "and Lake Garda, listing the stops as Catullo airport, Villafranca, " +
      "Valeggio, Peschiera and San Benedetto. ATV gives its current season as " +
      "ending 18 October 2026 and resuming 21 March 2027, so it is not running " +
      "as this is written and its dates are set season by season rather than " +
      "fixed. Read 26 November 2026:",
    linkText: "ATV publishes its Lake Garda lines and timetables",
    href: "https://www.atv.verona.it/en/LineeLago",
  },
  },

  onward: {
    id: "onward",
    heading: "From Verona",
    items: [
      {
        page: "verona-airport",
        label: "Verona Villafranca Airport (VRN)",
        detail: "The airport in full, and the two directions people leave it in.",
      },
      {
        page: "lake-garda",
        label: "Lake Garda transfers",
        detail: "The five confirmed towns, and what each comune says about itself.",
      },
      {
        page: "route-verona-sirmione",
        label: "Verona to Sirmione",
        detail: "The one lake journey whose destination has access rules of its own.",
      },
      {
        page: "route-vrn-verona",
        label: "Verona Airport to Verona",
        detail: "The short run into the city.",
      },
      {
        page: "route-venice-verona",
        label: "Venice to Verona",
        detail:
          "The transfer between the two cities, in either direction.",
      },
      {
        page: "venice",
        label: "Transfers in Venice",
        detail:
          "The other end of the region, and a completely different set of rules.",
      },
    ],
  },

  faq: {
    id: "questions",
    eyebrow: "Questions",
    heading: "Verona questions",
    lead: "Fewer than Venice generates, which is rather the point.",
    items: [
      {
        question: "Can a car reach my hotel in Verona?",
        answer:
          "In the ordinary course, yes. Verona is a road city, and that is what makes it so different from Venice at the other end of the same region. Street width and local access rules still apply as they would anywhere, but there is no equivalent of Venice's road limit.",
      },
      {
        question: "How far is the airport from the city?",
        answer:
          "About 10 km south-west, in the comune of Villafranca di Verona. How long that takes depends on the hour and the address at the other end, so no journey time is quoted here.",
      },
      {
        question: "Is the Airlink a better option than a transfer?",
        answer:
          "It is a different one. It is a public train-and-bus service to Porta Nuova under a single ticket, which answers the question of reaching the station — but not the question of reaching an address with luggage. Which matters more depends on where you are staying.",
      },
      {
        question: "Can you take me to Lake Garda?",
        answer:
          "Yes, to five towns: Peschiera del Garda, Lazise, Bardolino, Sirmione and Desenzano del Garda. Name the one you mean, because the lake has two sides in two different regions and the town decides the road. Sirmione has rules of its own, and its own page, since a hired car may enter its historic centre only when carrying someone staying there.",
      },
      {
        question: "I am visiting both Venice and Verona. Is that one trip?",
        answer:
          "They are two cities in one region, connected by direct trains. If you want a car between them, say so and it will be answered — but the rail link is good enough that it is worth comparing before you decide.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "An ordinary request, for once",
    body: "The flight or train, the date and time, the address, and how many of you there are with how much luggage. In Verona that is genuinely all it takes.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Verona Airport", page: "verona-airport" },
    note: "A request is not a booking. Nothing is arranged until you have a reply setting out the vehicle, the price and the meeting arrangement, and you have agreed to it.",
  },
};

const it: VeronaHub = {
  meta: {
    title: "Transfer privati a Verona",
    description:
      "Verona è una città raggiungibile su strada: l'auto arriva all'indirizzo. L'aeroporto, la stazione di Porta Nuova e cosa sapere sul Lago di Garda.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    eyebrow: "Verona e il Veneto",
    h1: "Transfer privati a Verona",
    lead: "Dopo Venezia, spiegare Verona è un sollievo. È una città su strada: l'auto arriva all'indirizzo, l'aeroporto è poco fuori a sud-ovest e la stazione sta in mezzo alla città. Qui le domande utili riguardano gli orari, non se il viaggio sia possibile.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "La stazione e l'Airlink",
    modes: [
      {
        id: "air",
        label: "In aereo",
        name: "Villafranca (VRN)",
        detail:
          "A circa 10 km a sud-ovest della città, nel comune di Villafranca di Verona.",
      },
      {
        id: "rail",
        label: "In treno",
        name: "Verona Porta Nuova",
        detail:
          "La stazione principale della città, dove termina la maggior parte dei viaggi in treno verso Verona.",
      },
      {
        id: "road",
        label: "Su strada",
        name: "L'indirizzo stesso",
        detail:
          "A differenza di Venezia, qui il transfer finisce dove dovete andare davvero.",
      },
    ],
  },

  station: {
    id: "stazione",
    eyebrow: "La stazione",
    heading: "Porta Nuova e il collegamento con l'aeroporto",
    lead: "La stazione principale di Verona fa due cose per chi viaggia: è una destinazione e, insieme, è il capolinea del collegamento aeroportuale.",
    paragraphs: [
      "Porta Nuova è la stazione principale di Verona e il punto in cui termina la maggior parte dei viaggi in treno verso la città. Per un transfer si comporta come qualsiasi stazione di linea: un'auto può raggiungere l'area antistante, e dove esattamente attenda è una questione di accordo, non di geografia.",
      "È anche il capo veronese del collegamento con l'aeroporto, il che ne fa l'unico punto della città in cui strada e ferrovia si sovrappongono davvero. Se state confrontando un transfer con il treno, è qui che il confronto ha senso.",
    ],
    airlink: {
      heading: "Il Verona Airlink",
      body: "Trenitalia gestisce un servizio combinato treno più bus con biglietto unico che collega Verona Porta Nuova all'aeroporto in collaborazione con ATV. La tratta in bus è prevista all'incirca ogni venti minuti nelle ore di punta e ogni quaranta nelle altre, con partenze da Porta Nuova fra le 5.15 e le 22.50 e dall'aeroporto fra le 5.35 e le 23.10. È un servizio pubblico e non nostro, ed è un'altra cosa rispetto a un'auto che porta i vostri bagagli a un indirizzo.",
    },
    source: {
      text: "Struttura del servizio e orari come pubblicati da Trenitalia e verificati nell'ottobre 2026. Gli orari dei servizi pubblici cambiano, e qui non indichiamo tariffe perché le tariffe cambiano ancora più spesso:",
      linkText: "Trenitalia pubblica i dettagli aggiornati dell'Airlink",
      href: "https://www.trenitalia.com/it/treni_regionali/veneto/verona-airlink.html",
    },
  },

  garda: {
    id: "garda",
    eyebrow: "Verso il lago",
    heading: "Verona e il Lago di Garda",
    lead: "L'aeroporto è una porta d'accesso stradale abituale al lago. È un dato geografico, e questa pagina sta attenta a non farne altro.",
    paragraphs: [
      "Il Lago di Garda si trova a ovest di Verona, e Villafranca è l'aeroporto che la maggior parte dei viaggiatori usa per le sponde meridionale e orientale. ATV gestisce un bus stagionale da quell'aeroporto al lago, la linea 482, a cadenza oraria nella stagione di esercizio: un servizio pubblico citato qui come contesto e non come un'opzione che offriamo noi, e che non circola tutto l'anno.",
      "Due cose rendono il lago più complicato di quanto sembri, ed entrambe vanno dette prima di chiedere. Il Garda ha una sponda veronese e una lombarda — due regioni, ciascuna con regole di circolazione proprie — e un paese su una non è a due passi da un paese sull'altra. E «Lago di Garda» non è una destinazione: come per il Lago di Como, è una riva con dei paesi sopra, e il paese che indicate determina completamente la strada.",
    ],
    caution: {
      heading: "Quali paesi, esattamente",
      body: "Cinque sono confermati — Peschiera del Garda, Lazise, Bardolino, Sirmione e Desenzano del Garda — e il resto della riva no. È un elenco volutamente breve e non una pretesa su tutto il lago. Dite il paese quando scrivete, e la risposta parlerà di quel paese invece che del lago in generale.",
    },
    link: { page: "lake-garda", label: "Transfer sul Lago di Garda, paese per paese" },
    source: {
    text:
      "Il bus stagionale fra l'aeroporto e il lago \u00e8 la linea 482 di ATV, che " +
      "l'azienda descrive come collegamento a cadenza oraria fra l'aeroporto di " +
      "Verona e il Lago di Garda, con fermate indicate ad aeroporto Catullo, " +
      "Villafranca, Valeggio, Peschiera e San Benedetto. ATV indica la stagione " +
      "in corso come conclusa il 18 ottobre 2026 e in ripresa dal 21 marzo " +
      "2027: non \u00e8 quindi in servizio mentre scriviamo, e le date si fissano " +
      "stagione per stagione e non una volta per sempre. Consultato il 26 " +
      "novembre 2026:",
    linkText: "ATV pubblica le linee e gli orari del Lago di Garda",
    href: "https://www.atv.verona.it/it/LineeLago",
  },
  },

  onward: {
    id: "proseguimenti",
    heading: "Da Verona",
    items: [
      {
        page: "lake-garda",
        label: "Transfer sul Lago di Garda",
        detail: "Le cinque località confermate, e che cosa dice di sé ciascun comune.",
      },
      {
        page: "route-verona-sirmione",
        label: "Da Verona a Sirmione",
        detail: "L'unico viaggio sul lago la cui destinazione ha regole d'accesso proprie.",
      },
      {
        page: "verona-airport",
        label: "Aeroporto di Verona Villafranca (VRN)",
        detail: "L'aeroporto per esteso e le due direzioni in cui se ne esce.",
      },
      {
        page: "route-vrn-verona",
        label: "Dall'aeroporto di Verona alla città",
        detail: "Il breve tragitto verso il centro.",
      },
      {
        page: "route-venice-verona",
        label: "Da Venezia a Verona",
        detail:
          "Il transfer fra le due città, in entrambe le direzioni.",
      },
      {
        page: "venice",
        label: "Transfer a Venezia",
        detail:
          "L'altro capo della regione, con regole completamente diverse.",
      },
    ],
  },

  faq: {
    id: "domande",
    eyebrow: "Domande",
    heading: "Domande su Verona",
    lead: "Meno di quante ne generi Venezia, ed è proprio questo il punto.",
    items: [
      {
        question: "Un'auto può arrivare al mio hotel a Verona?",
        answer:
          "Di norma sì. Verona è una città su strada, ed è ciò che la rende così diversa da Venezia, all'altro capo della stessa regione. La larghezza delle vie e le regole locali di accesso valgono come ovunque, ma non esiste nulla di paragonabile al limite stradale veneziano.",
      },
      {
        question: "Quanto dista l'aeroporto dalla città?",
        answer:
          "Circa 10 km a sud-ovest, nel comune di Villafranca di Verona. Quanto tempo richieda dipende dall'ora e dall'indirizzo di arrivo: per questo qui non trovate una durata.",
      },
      {
        question: "L'Airlink è meglio di un transfer?",
        answer:
          "È un'altra cosa. È un servizio pubblico treno più bus fino a Porta Nuova con biglietto unico: risolve il problema di raggiungere la stazione, non quello di arrivare a un indirizzo con i bagagli. Quale conti di più dipende da dove alloggiate.",
      },
      {
        question: "Mi portate sul Lago di Garda?",
        answer:
          "Sì, in cinque paesi: Peschiera del Garda, Lazise, Bardolino, Sirmione e Desenzano del Garda. Indicate quale intendete, perché il lago ha due sponde in due regioni diverse ed è il paese a determinare la strada. Sirmione ha regole proprie, e una pagina propria, perché un'auto a noleggio può entrare nel suo centro storico solo se trasporta chi vi soggiorna.",
      },
      {
        question: "Visito sia Venezia sia Verona: è un unico viaggio?",
        answer:
          "Sono due città della stessa regione, collegate da treni diretti. Se volete un'auto fra le due, ditelo e vi risponderemo — ma il collegamento ferroviario è abbastanza buono da meritare un confronto prima di decidere.",
      },
    ],
  },

  closing: {
    id: "richiesta",
    heading: "Per una volta, una richiesta normale",
    body: "Il volo o il treno, la data e l'ora, l'indirizzo, quante persone siete e quanti bagagli avete. A Verona serve davvero solo questo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "L'aeroporto di Verona", page: "verona-airport" },
    note: "Una richiesta non è una prenotazione. Nulla è organizzato finché non ricevete una risposta che indica veicolo, prezzo e modalità d'incontro e non l'avete accettata.",
  },
};

export const veronaHub: Record<Locale, VeronaHub> = { en, it };
