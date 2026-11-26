import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * Verona → Sirmione.
 *
 * ── Why this town and not the other four ─────────────────────────────────
 * The Lake Garda hub covers five confirmed destinations and gives none of
 * them a page of its own, because four of them would say the same thing
 * with the name changed. Sirmione is the exception, and this file exists
 * because of one verified rule that applies nowhere else on the lake.
 *
 * ── The rule, and how it was obtained ────────────────────────────────────
 * Sirmione's historic centre is a ZTL under art. 7 comma 9 of the Codice
 * della Strada, instituted by Deliberazione di Giunta Comunale n. 311 of
 * 19 December 2018 and governed by Ordinanza n. 30/2026, with a single
 * entry point monitored by the automated system "K53700/SA".
 *
 * Its Allegato C sets out entry rules per category. For taxis and NCC it
 * gives a single period — feriali e festivi, weekdays and holidays alike —
 * of 00:00 to 24:00, with this footnote:
 *
 *   (**) TAXI E NCC - INGRESSO CONSENTITO SOLO PER TRASORTO RESIDENTI,
 *        DIMORANTI E SOGGIORNANTI
 *
 * ("trasorto" is a typo for "trasporto" in the original.) So a hired car
 * may enter at any hour of any day, but **only** carrying residents,
 * people living there or people staying there. A day visitor is not a
 * soggiornante, and that single distinction is the page.
 *
 * This is the opposite of Rome, where NCC are exempt outright, and of
 * Verona, where they are exempt subject to a self-declaration. Three
 * cities, three regimes — and no competitor states Sirmione's.
 *
 * Both PDFs had defeated two fetching agents, which reported them as
 * unreadable binary. They were downloaded directly and read with
 * pdftotext. Worth recording: "the tool could not read it" is not the same
 * as "it cannot be read".
 *
 * ── What is NOT claimed ──────────────────────────────────────────────────
 * The pedestrianisation dates. Allegato C lists them for 2026 — a total
 * ban on circulation for every category, 14:00 to 19:00, on named days
 * between April and September. Those dates have passed and no 2027 list is
 * published, so the page states that such days exist and recur, and names
 * none of them.
 *
 * Nor is the summer/winter split applied to taxis and NCC: their row is
 * "PERIODO UNICO", a single period, so unlike other categories it does not
 * change with the season. That is stated because the annex states it.
 *
 * Nothing about where inside the ZTL a vehicle may stop, whether a hotel
 * can register a plate, or what the 2027 regime will be.
 */

const sirmioneEn = {
  text:
    "Sirmione's limited-traffic zone, its automated access monitoring and the " +
    "entry rule for taxis and hire cars with driver are published by the Comune di " +
    "Sirmione: the zone is governed by Ordinanza n. 30/2026, and its Allegato C " +
    "gives taxis and NCC a single period covering weekdays and holidays, 00:00 to " +
    "24:00, with entry permitted only to carry residents, people living there and " +
    "people staying there. Read 25 November 2026; the Comune reissues these rules " +
    "and publishes pedestrianisation days each season:",
  linkText: "the Comune di Sirmione on its ZTL",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const sirmioneIt = {
  text:
    "La zona a traffico limitato di Sirmione, il suo controllo automatizzato degli accessi e la " +
    "regola d'ingresso per taxi e auto a noleggio con conducente sono pubblicati " +
    "dal Comune di Sirmione: la zona è disciplinata dall'Ordinanza n. 30/2026 e il " +
    "suo Allegato C assegna a taxi e NCC un periodo unico, feriali e festivi, dalle " +
    "00:00 alle 24:00, con ingresso consentito solo per trasportare residenti, " +
    "dimoranti e soggiornanti. Consultato il 25 novembre 2026; il Comune ripropone " +
    "queste regole e pubblica le giornate di pedonalizzazione ogni stagione:",
  linkText: "il Comune di Sirmione sulla propria ZTL",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const en: RoutePage = {
  meta: {
    title: "Verona to Sirmione Transfer – Private Car to Lake Garda",
    description:
      "Sirmione's centre admits a hired car only when it is carrying someone " +
      "staying there. What that means for booking a transfer from Verona.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Verona",
    to: "Sirmione",
    eyebrow: "Route",
    h1: "Verona to Sirmione",
    lead:
      "Reaching Sirmione is simple. Reaching an address inside its historic centre " +
      "is not, and it turns on something unusual: the town admits a hired car at " +
      "any hour of any day — but only when the people in it are staying there. " +
      "Whether that is you is the first thing to settle.",
    primaryCta: "Request a quote",
    secondaryCta: "Lake Garda transfers",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance appears here. The rules below are the Comune's, quoted as " +
      "published, and the arrangement for your own booking is confirmed by the " +
      "operator.",
  },

  lead: {
    id: "two-sirmiones",
    eyebrow: "What makes this route different",
    heading: "The town, and the peninsula inside it",
    text:
      "Sirmione is a comune and, at the end of a narrow peninsula, a walled " +
      "historic centre with one way in. A transfer to the first is ordinary. A " +
      "transfer to the second is governed by a rule most visitors have never " +
      "heard of.",
    columns: [
      {
        id: "comune",
        heading: "Sirmione the town",
        subheading: "Addresses outside the historic centre",
        rows: [
          {
            term: "An ordinary arrival",
            detail:
              "Hotels along the approach and around the peninsula's base are reached like anywhere else: the car comes to the address and the journey ends there.",
          },
          {
            term: "Most accommodation is here",
            detail:
              "The great majority of Sirmione's rooms are outside the walls. If that is you, the section opposite is background rather than instruction.",
          },
          {
            term: "What we still need",
            detail:
              "The full address. It is what tells the operator which of these two situations your booking actually is.",
          },
        ],
      },
      {
        id: "ztl",
        heading: "The historic centre",
        subheading: "A limited-traffic zone with one entry point",
        rows: [
          {
            term: "Watched, and permit-based",
            detail:
              "The ordinance records that the zone is monitored by an automated video-control system for vehicles entering it, and that authorised vehicles must carry a pass — paper or digital — issued by the Comune's ZTL traffic office. Which categories need one is set by management rules the Comune does not publish separately.",
          },
          {
            term: "Taxis and NCC: all hours, one condition",
            detail:
              "The Comune's own annex gives taxis and hire cars with driver a single period — weekdays and holidays alike, 00:00 to 24:00 — with entry permitted only to carry residents, people living there and people staying there.",
          },
          {
            term: "So it depends on you, not the car",
            detail:
              "If you are staying inside the walls, your transfer is carrying a soggiornante and the rule is satisfied. If you are visiting for the day, it is not. That is the distinction the whole journey turns on.",
          },
        ],
      },
    ],
    source: sirmioneEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A Verona address, and a peninsula in Lombardy",
    lead:
      "Two comuni in two regions, each restricting traffic in its own way and for " +
      "its own reasons.",
    from: {
      id: "verona",
      label: "Pickup",
      name: "Verona",
      page: "verona",
      linkText: "Transfers in Verona",
      items: [
        {
          term: "The full address",
          detail:
            "Verona's old centre is compact and parts of it are narrow, so the street decides where a vehicle can wait as much as any regulation does.",
        },
        {
          term: "The date, because Verona restricts too",
          detail:
            "The Comune di Verona publishes a winter circulation ban by emissions class, with hire cars with driver exempt subject to the driver carrying a self-declaration. Our Venice to Verona page sets that out; it is a different regime from Sirmione's.",
        },
        {
          term: "Who is travelling",
          detail:
            "Adults and children separately, with the children's ages, so any seat is arranged before the day rather than on it.",
        },
      ],
    },
    to: {
      id: "sirmione",
      label: "Drop-off",
      name: "Sirmione",
      page: "lake-garda",
      linkText: "Lake Garda transfers",
      items: [
        {
          term: "Whether your address is inside the walls",
          detail:
            "The single most useful thing you can tell us. Your hotel will know, and the answer changes which set of rules applies to the end of the journey.",
        },
        {
          term: "Whether you are staying in Sirmione",
          detail:
            "Not a personal question but a regulatory one. The Comune permits taxi and NCC entry only to carry residents, people living there and people staying there.",
        },
        {
          term: "What we will not promise",
          detail:
            "A stopping place inside the zone. The Comune publishes who may enter; it does not follow that any particular lane can take a vehicle or that it may wait there.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Six lines, and the second is the one that makes this route answerable.",
    items: [
      "Your full Verona pickup address, with anything the property has said about access.",
      "Your full Sirmione address, and whether it is inside the historic centre.",
      "Whether you are staying in Sirmione overnight, or visiting for the day.",
      "The date and the time you would like to travel.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
    ],
    note:
      "If you do not know whether your hotel is inside the zone, ask it before you " +
      "ask us — reception answers that question every day, and it decides how the " +
      "journey ends.",
  },

  departure: {
    id: "pedestrian-days",
    eyebrow: "One thing to check for your date",
    heading: "The days when nothing may circulate",
    lead:
      "Alongside the ZTL, the Comune closes the historic centre completely on " +
      "certain days each season.",
    paragraphs: [
      "The Comune publishes a list of pedestrianisation days on which access to and circulation inside the zone is forbidden to every category of user between 14:00 and 19:00, with narrow exceptions for emergency vehicles and a handful of named cases. On those afternoons the taxi and NCC permission above does not apply.",
      "The dates are set season by season. The published list ran from April to September 2026 and has passed; no list for the coming season had been published when this page was written. If your travel date is in spring or summer, it is worth checking the Comune's current notice, and worth telling the operator so the timing can work around it.",
    ],
    note:
      "We do not reproduce last season's dates as though they were this season's. " +
      "A stale list would be worse than none.",
    source: sirmioneEn,
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about getting to Sirmione",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can a private transfer drive into Sirmione's historic centre?",
        answer:
          "Only to carry residents, people living there or people staying there. The " +
          "Comune's annex gives taxis and hire cars with driver a single period " +
          "covering weekdays and holidays, 00:00 to 24:00, with entry permitted on " +
          "that condition. If you are staying inside the walls the condition is met; " +
          "if you are visiting for the day it is not.",
      },
      {
        question: "Are NCC vehicles exempt from the Sirmione ZTL?",
        answer:
          "No, and this is where Sirmione differs from other Italian towns. In Rome " +
          "hire cars with driver are exempt outright; in Verona they are exempt " +
          "subject to a self-declaration. In Sirmione they are permitted, at any " +
          "hour, but only when carrying someone who belongs in the town. It is a " +
          "permission with a condition, not an exemption.",
      },
      {
        question: "What are the ZTL hours?",
        answer:
          "For taxis and hire cars with driver the annex gives a single period, " +
          "weekdays and holidays, 00:00 to 24:00 — so for this category the hours do " +
          "not change with the season. Other categories have separate summer and " +
          "winter periods, which this page does not reproduce because they do not " +
          "apply to a booked transfer.",
      },
      {
        question: "Will the car reach my hotel door inside the walls?",
        answer:
          "We will not promise that. Being permitted to enter a zone says nothing " +
          "about whether a particular lane can take a vehicle or whether it may stop " +
          "there. Send the address and the operator will tell you where the journey " +
          "can realistically end.",
      },
      {
        question: "What if I am only visiting Sirmione for the day?",
        answer:
          "Then the transfer takes you to the town rather than into the historic " +
          "centre, and you walk the last part as other day visitors do. Say so when " +
          "you ask and the drop-off can be arranged somewhere sensible rather than " +
          "discovered at a barrier.",
      },
      {
        question: "Does the vehicle need a permit for the zone?",
        answer:
          "The ordinance requires authorised vehicles to carry a pass issued by the " +
          "Comune's ZTL traffic office, and forbids circulation to categories not " +
          "included in or authorised under its management rules. Those rules are " +
          "not published separately, so we do not state what a particular hired car " +
          "needs — it is the operator's to confirm, and a good reason to arrange " +
          "this journey in advance rather than hail something on the day.",
      },
      {
        question: "Can you take us to other Lake Garda towns?",
        answer:
          "Yes — Peschiera del Garda, Lazise, Bardolino and Desenzano del Garda are " +
          "all confirmed alongside Sirmione. They have no page of their own because " +
          "none has access rules that need explaining the way Sirmione's do. The " +
          "Lake Garda page covers them.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "lake-garda",
        label: "Lake Garda transfers",
        detail: "The five towns we can reach, and why the lake is not one destination.",
      },
      {
        page: "verona",
        label: "Transfers in Verona",
        detail: "The city you are starting from, and its own winter restriction.",
      },
      {
        page: "route-vrn-garda",
        label: "Verona Airport to Lake Garda",
        detail: "The same destination from the airport, with the other four towns beside it.",
      },
      {
        page: "verona-airport",
        label: "Verona Villafranca Airport (VRN)",
        detail: "If the journey begins at the airport rather than in the city.",
      },
      {
        page: "route-venice-verona",
        label: "Venice to Verona",
        detail: "The leg before this one, if the lake follows a stay in Venice.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Tell us the address, and whether you are staying",
    body:
      "Those two answers decide the whole end of this journey: which rules apply, " +
      "where the car may go, and where you will actually be set down. The " +
      "quotation comes back in writing before anything is confirmed.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Lake Garda transfers", page: "lake-garda" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const it: RoutePage = {
  meta: {
    title: "Da Verona a Sirmione – Transfer privato sul Lago di Garda",
    description:
      "Il centro di Sirmione ammette un'auto a noleggio solo se trasporta chi vi " +
      "soggiorna. Che cosa comporta per un transfer da Verona.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Verona",
    to: "Sirmione",
    eyebrow: "Tratta",
    h1: "Da Verona a Sirmione",
    lead:
      "Arrivare a Sirmione è semplice. Arrivare a un indirizzo dentro il centro " +
      "storico no, e dipende da una regola insolita: il paese ammette un'auto a " +
      "noleggio a qualsiasi ora di qualsiasi giorno, ma solo se chi vi si trova " +
      "soggiorna lì. Stabilire se sia il vostro caso è la prima cosa da fare.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer sul Lago di Garda",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono prezzi, durate o distanze. Le regole qui sotto sono quelle del " +
      "Comune, citate come pubblicate, e l'accordo per la vostra prenotazione lo " +
      "conferma l'operatore.",
  },

  lead: {
    id: "two-sirmiones",
    eyebrow: "Che cosa rende diversa questa tratta",
    heading: "Il paese, e la penisola che contiene",
    text:
      "Sirmione è un comune e, in fondo a una penisola stretta, un centro storico " +
      "cinto da mura con un solo accesso. Un transfer verso il primo è ordinario. " +
      "Un transfer verso il secondo è disciplinato da una regola che quasi nessun " +
      "visitatore conosce.",
    columns: [
      {
        id: "comune",
        heading: "Sirmione paese",
        subheading: "Indirizzi fuori dal centro storico",
        rows: [
          {
            term: "Un arrivo ordinario",
            detail:
              "Gli alberghi lungo la via d'accesso e attorno alla base della penisola si raggiungono come ovunque: l'auto arriva all'indirizzo e lì il viaggio finisce.",
          },
          {
            term: "Qui si trova gran parte delle strutture",
            detail:
              "La grande maggioranza delle camere di Sirmione è fuori dalle mura. Se è il vostro caso, la colonna accanto è contesto e non istruzioni.",
          },
          {
            term: "Che cosa ci serve comunque",
            detail:
              "L'indirizzo completo. È ciò che dice all'operatore in quale delle due situazioni rientri davvero la vostra prenotazione.",
          },
        ],
      },
      {
        id: "ztl",
        heading: "Il centro storico",
        subheading: "Una zona a traffico limitato con un unico varco",
        rows: [
          {
            term: "Controllata, e con contrassegno",
            detail:
              "L'ordinanza registra che la zona è presidiata da un sistema automatizzato di videocontrollo dei veicoli in accesso, e che i veicoli autorizzati devono essere muniti di apposito contrassegno — cartaceo o digitale — rilasciato dall'Ufficio Traffico ZTL del Comune. Quali categorie ne abbiano bisogno è stabilito da un disciplinare che il Comune non pubblica a parte.",
          },
          {
            term: "Taxi e NCC: tutte le ore, una condizione",
            detail:
              "L'allegato del Comune assegna a taxi e autovetture a noleggio con conducente un periodo unico — feriali e festivi — dalle 00:00 alle 24:00, con ingresso consentito solo per trasportare residenti, dimoranti e soggiornanti.",
          },
          {
            term: "Dipende da voi, non dall'auto",
            detail:
              "Se alloggiate dentro le mura, il vostro transfer trasporta un soggiornante e la condizione è soddisfatta. Se venite in giornata, no. È la distinzione su cui ruota tutto il viaggio.",
          },
        ],
      },
    ],
    source: sirmioneIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Un indirizzo a Verona, e una penisola in Lombardia",
    lead:
      "Due comuni in due regioni, ciascuno con un modo proprio di limitare il " +
      "traffico e con ragioni proprie per farlo.",
    from: {
      id: "verona",
      label: "Punto di prelievo",
      name: "Verona",
      page: "verona",
      linkText: "Transfer a Verona",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Il centro storico di Verona è raccolto e in parte stretto: la via decide dove un veicolo possa attendere quanto qualsiasi regolamento.",
        },
        {
          term: "La data, perché anche Verona limita",
          detail:
            "Il Comune di Verona pubblica un divieto invernale di circolazione per classe emissiva, con le auto a noleggio con conducente in deroga a condizione che l'autista abbia un'autocertificazione. La nostra pagina da Venezia a Verona lo spiega: è un regime diverso da quello di Sirmione.",
        },
        {
          term: "Chi viaggia",
          detail:
            "Adulti e bambini separatamente, con le età, così il seggiolino si predispone prima e non il giorno stesso.",
        },
      ],
    },
    to: {
      id: "sirmione",
      label: "Punto di discesa",
      name: "Sirmione",
      page: "lake-garda",
      linkText: "Transfer sul Lago di Garda",
      items: [
        {
          term: "Se il vostro indirizzo è dentro le mura",
          detail:
            "La cosa più utile che possiate dirci. Il vostro albergo lo sa, e la risposta cambia quale insieme di regole valga alla fine del viaggio.",
        },
        {
          term: "Se soggiornate a Sirmione",
          detail:
            "Non è una domanda personale ma normativa. Il Comune consente l'ingresso a taxi e NCC solo per trasportare residenti, dimoranti e soggiornanti.",
        },
        {
          term: "Che cosa non promettiamo",
          detail:
            "Un punto di sosta dentro la zona. Il Comune pubblica chi possa entrare; non ne discende che un determinato vicolo sia percorribile o che vi si possa attendere.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Sei righe, e la seconda è quella che rende rispondibile questa tratta.",
    items: [
      "L'indirizzo completo di prelievo a Verona, con quanto la struttura vi ha detto sull'accesso.",
      "L'indirizzo completo a Sirmione, precisando se è dentro il centro storico.",
      "Se pernottate a Sirmione oppure venite in giornata.",
      "La data e l'ora in cui vorreste viaggiare.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
    ],
    note:
      "Se non sapete se il vostro albergo sia dentro la zona, chiedetelo a loro " +
      "prima che a noi: in reception rispondono a questa domanda ogni giorno, ed è " +
      "da lì che dipende la fine del viaggio.",
  },

  departure: {
    id: "pedestrian-days",
    eyebrow: "Una cosa da verificare per la vostra data",
    heading: "I giorni in cui non circola nulla",
    lead:
      "Oltre alla ZTL, il Comune chiude completamente il centro storico in certe " +
      "giornate di ogni stagione.",
    paragraphs: [
      "Il Comune pubblica un elenco di giornate di pedonalizzazione in cui l'accesso e la circolazione nella zona sono vietati a tutte le categorie di utenti dalle 14:00 alle 19:00, con poche eccezioni per i mezzi di soccorso e alcuni casi indicati. In quei pomeriggi il permesso per taxi e NCC descritto sopra non si applica.",
      "Le date si fissano stagione per stagione. L'elenco pubblicato andava da aprile a settembre 2026 ed è trascorso; quando questa pagina è stata scritta non ne risultava pubblicato uno per la stagione successiva. Se viaggiate in primavera o in estate conviene verificare l'avviso aggiornato del Comune e segnalarlo all'operatore, così da organizzare gli orari di conseguenza.",
    ],
    note:
      "Non riproponiamo le date della scorsa stagione come se fossero quelle di " +
      "questa. Un elenco scaduto sarebbe peggio di nessun elenco.",
    source: sirmioneIt,
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su come arrivare a Sirmione",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Un transfer privato può entrare nel centro storico di Sirmione?",
        answer:
          "Solo per trasportare residenti, dimoranti o soggiornanti. L'allegato del " +
          "Comune assegna a taxi e auto a noleggio con conducente un periodo unico, " +
          "feriali e festivi, dalle 00:00 alle 24:00, con ingresso consentito a " +
          "quella condizione. Se alloggiate dentro le mura la condizione è " +
          "soddisfatta; se venite in giornata no.",
      },
      {
        question: "Gli NCC sono esenti dalla ZTL di Sirmione?",
        answer:
          "No, ed è qui che Sirmione si distingue da altre città italiane. A Roma le " +
          "auto a noleggio con conducente sono esenti senza condizioni; a Verona sono " +
          "in deroga previa autocertificazione. A Sirmione sono ammesse, a qualsiasi " +
          "ora, ma solo se trasportano qualcuno che in paese ci sta. È un permesso " +
          "condizionato, non un'esenzione.",
      },
      {
        question: "Quali sono gli orari della ZTL?",
        answer:
          "Per taxi e auto a noleggio con conducente l'allegato indica un periodo " +
          "unico, feriali e festivi, dalle 00:00 alle 24:00: per questa categoria, " +
          "quindi, gli orari non cambiano con la stagione. Altre categorie hanno " +
          "periodi estivi e invernali distinti, che questa pagina non riporta perché " +
          "non riguardano un transfer prenotato.",
      },
      {
        question: "L'auto arriverà alla porta del mio albergo dentro le mura?",
        answer:
          "Non lo promettiamo. Poter entrare in una zona non dice nulla su quanto un " +
          "determinato vicolo sia percorribile o se vi si possa sostare. Inviate " +
          "l'indirizzo e l'operatore vi dirà dove il viaggio può realisticamente " +
          "finire.",
      },
      {
        question: "E se vengo a Sirmione solo in giornata?",
        answer:
          "Allora il transfer vi porta in paese e non dentro il centro storico, e " +
          "l'ultimo tratto lo fate a piedi come gli altri visitatori giornalieri. " +
          "Ditelo quando scrivete, così la discesa si organizza in un punto sensato " +
          "invece di scoprirlo davanti a un varco.",
      },
      {
        question: "Il veicolo ha bisogno di un contrassegno per la zona?",
        answer:
          "L'ordinanza impone ai veicoli autorizzati di essere muniti di " +
          "contrassegno rilasciato dall'Ufficio Traffico ZTL del Comune, e vieta la " +
          "circolazione alle categorie non comprese o non autorizzate ai sensi del " +
          "proprio disciplinare di gestione. Quel disciplinare non è pubblicato a " +
          "parte, quindi non diciamo di che cosa abbia bisogno una determinata auto " +
          "a noleggio: lo conferma l'operatore, ed è un buon motivo per organizzare " +
          "il viaggio in anticipo invece di cercare un mezzo sul momento.",
      },
      {
        question: "Potete portarci in altre località del Lago di Garda?",
        answer:
          "Sì: Peschiera del Garda, Lazise, Bardolino e Desenzano del Garda sono " +
          "tutte confermate insieme a Sirmione. Non hanno una pagina propria perché " +
          "nessuna ha regole d'accesso che richiedano le spiegazioni necessarie per " +
          "Sirmione. La pagina sul Lago di Garda le copre.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "lake-garda",
        label: "Transfer sul Lago di Garda",
        detail: "Le cinque località che raggiungiamo, e perché il lago non è una destinazione sola.",
      },
      {
        page: "verona",
        label: "Transfer a Verona",
        detail: "La città da cui partite, con la sua limitazione invernale.",
      },
      {
        page: "route-vrn-garda",
        label: "Dall'aeroporto di Verona al Lago di Garda",
        detail: "La stessa destinazione dall'aeroporto, con accanto le altre quattro località.",
      },
      {
        page: "verona-airport",
        label: "Aeroporto di Verona Villafranca (VRN)",
        detail: "Se il viaggio comincia in aeroporto invece che in città.",
      },
      {
        page: "route-venice-verona",
        label: "Da Venezia a Verona",
        detail: "La tratta precedente, se il lago segue un soggiorno a Venezia.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicateci l'indirizzo, e se soggiornate",
    body:
      "Queste due risposte decidono tutta la parte finale del viaggio: quali regole " +
      "si applicano, dove l'auto può andare e dove scenderete davvero. Il preventivo " +
      "torna per iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer sul Lago di Garda", page: "lake-garda" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

export const routeVeronaSirmione: Record<Locale, RoutePage> = { en, it };
