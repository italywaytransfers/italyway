import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * Venice → Verona.
 *
 * ── One page, not two ────────────────────────────────────────────────────
 * The reverse direction is covered inside this one, in `departure`. Venice
 * → Verona and Verona → Venice are the same service with the same two
 * constraints in the opposite order, and neither has a deadline the other
 * lacks — unlike an airport pair, where an arrival is tracked and a
 * departure is timed backwards from check-in. Two pages here would be
 * reversed-keyword targeting, which is the thing the audit that preceded
 * this file set out to avoid.
 *
 * ── The discovery this page is built on ──────────────────────────────────
 * Every competitor writes that Verona has a ZTL. On the Comune di Verona's
 * readable pages, it does not say so. What is published, and what was
 * actually verified, is something different and more interesting: a winter
 * anti-smog circulation ban under Ordinanza n. 56 of 28 September 2026,
 * applying across the whole comune by vehicle emissions class rather than
 * over a tourist perimeter.
 *
 * Two of its exemptions matter here, and both are quoted on the page:
 *   (b) "taxi ed autovetture in servizio di noleggio con conducente"
 *   (k) guests of accommodation inside the "area interdetta", on arrival
 *       and departure days, holding a copy of the booking
 *
 * Exemption (b) is conditional: the driver must carry an autocertificazione
 * naming the vehicle, the time, the origin, the destination and the reason,
 * and show it to police on request. That condition is the single most
 * useful thing on this page and no competitor states it.
 *
 * ── What is deliberately not claimed ─────────────────────────────────────
 * That Verona has a ZTL. That the ban is camera-enforced. Where the "area
 * interdetta" lies — the term appears in the exemption list and is not
 * defined on any page that could be read. Ordinanza 56 itself was not
 * fetched, so nothing is attributed to its text beyond what the Comune's
 * own summary pages state.
 *
 * Also absent, as everywhere on this site: journey times, distances, fares,
 * vehicle capacity, waiting, availability, and any promise of hotel-door
 * access at either end.
 *
 * ── The Venice end is linked, not repeated ───────────────────────────────
 * /routes/venice-to-marco-polo-airport already explains the first leg from
 * an island address in full. This page states the consequence in two rows
 * and points there, so the two pages do not compete.
 */

const veronaEn = {
  text:
    "Verona's winter restriction, and the exemptions quoted here, are published by " +
    "the Comune di Verona: a circulation ban under Ordinanza n. 56 of 28 September " +
    "2026, in force from 1 October 2026, Monday to Friday 08:30–19:30 excluding " +
    "holidays, extended to every day during orange and red air-quality alerts. The " +
    "exemption list names taxis and hire cars with driver, and separately the " +
    "vehicles of guests of accommodation inside the restricted area. Read " +
    "25 November 2026; the Comune reissues these measures each winter:",
  linkText: "the Comune di Verona's exemptions to Ordinanza n. 56",
  href: "https://www.comune.verona.it/Amministrazione/Documenti-e-dati/Documenti-tecnici-di-supporto/Limitazioni-alla-circolazione-per-i-veicoli-piu-inquinanti-le-deroghe",
};

const veronaIt = {
  text:
    "La limitazione invernale di Verona e le deroghe qui citate sono pubblicate dal " +
    "Comune di Verona: un divieto di circolazione previsto dall'Ordinanza n. 56 del " +
    "28 settembre 2026, in vigore dal 1° ottobre 2026, dal lunedì al venerdì dalle " +
    "8.30 alle 19.30 esclusi i festivi, esteso a tutti i giorni durante le allerte " +
    "arancioni e rosse. L'elenco delle deroghe cita i taxi e le autovetture a " +
    "noleggio con conducente e, separatamente, i veicoli degli ospiti delle " +
    "strutture ricettive nell'area interdetta. Consultato il 25 novembre 2026; il " +
    "Comune ripropone queste misure ogni inverno:",
  linkText: "le deroghe all'Ordinanza n. 56 del Comune di Verona",
  href: "https://www.comune.verona.it/Amministrazione/Documenti-e-dati/Documenti-tecnici-di-supporto/Limitazioni-alla-circolazione-per-i-veicoli-piu-inquinanti-le-deroghe",
};

const vtpEn = {
  text:
    "That Piazzale Roma is the road gateway to the historic city — the " +
    "“porta d'ingresso alla Città Storica” — is published by Venezia " +
    "Terminal Passeggeri. Read 25 November 2026. Where your own journey begins is " +
    "agreed with the operator for your address, not assumed from this:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const vtpIt = {
  text:
    "Che piazzale Roma sia la porta d'accesso su strada alla città storica — la " +
    "«porta d'ingresso alla Città Storica» — è pubblicato da Venezia Terminal " +
    "Passeggeri. Consultato il 25 novembre 2026. Da dove cominci il vostro viaggio " +
    "si concorda con l'operatore per il vostro indirizzo, non si deduce da qui:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const en: RoutePage = {
  meta: {
    title: "Venice to Verona Private Transfer – Car with Driver",
    description:
      "A car between two cities that each restrict traffic differently. What " +
      "decides your pickup in Venice and your arrival in Verona.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Venice",
    to: "Verona",
    eyebrow: "Route",
    h1: "Venice to Verona",
    lead:
      "Between two cities that both restrict traffic — and restrict it in " +
      "completely different ways. Venice simply has no road outside your door. " +
      "Verona has roads, but in winter it decides which engines may use them. " +
      "Neither is a reason not to go; both are reasons to arrange the journey " +
      "rather than improvise it.",
    primaryCta: "Request a quote",
    secondaryCta: "Transfers in Verona",
    photo: "venice-grand-canal",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance appears here, and nothing on this page promises a vehicle will " +
      "reach a particular door at either end.",
  },

  lead: {
    id: "two-restrictions",
    eyebrow: "What makes this different from an ordinary drive",
    heading: "Two cities, two unrelated reasons a car cannot simply stop",
    text:
      "Most intercity transfers are a road with an address at each end. This one " +
      "has a constraint at each end, and they have nothing to do with each other. " +
      "Knowing which applies to you is most of the booking.",
    columns: [
      {
        id: "venice",
        heading: "Leaving Venice",
        subheading: "A geographical problem",
        rows: [
          {
            term: "The historic centre has no roads",
            detail:
              "If you are staying on the island, the first leg is on foot or by water and you make it yourself. No permit and no operator changes that — there is nowhere for a car to be.",
          },
          {
            term: "Mestre and the mainland are ordinary",
            detail:
              "A road outside the door, luggage in the boot, and none of the above applies. Which of the two you mean is the single most useful line in your request.",
          },
          {
            term: "Where the car actually starts",
            detail:
              "A road-accessible point agreed for your address. Piazzale Roma is the city's road gateway, but we do not present it as everybody's pickup point, because the right one depends on where you slept.",
          },
        ],
      },
      {
        id: "verona",
        heading: "Arriving in Verona",
        subheading: "A regulatory problem, and not the one you expect",
        rows: [
          {
            term: "Not a tourist ZTL — an emissions ban",
            detail:
              "The Comune publishes a winter circulation ban across the whole municipal area, Monday to Friday 08:30 to 19:30 excluding holidays, extended to every day during orange and red air-quality alerts. It restricts vehicles by emissions class, not visitors by postcode.",
          },
          {
            term: "Hire cars with driver are exempt — with a condition",
            detail:
              "The exemption list names taxis and cars for hire with driver. It is conditional: the driver must carry a self-declaration giving the vehicle, the time, the origin, the destination and the reason, and show it to police on request.",
          },
          {
            term: "Guests of hotels in the restricted area",
            detail:
              "Separately exempted on arrival and departure days, for the journey to and from the property, holding a copy of the booking. Useful to know if you are driving yourself; your transfer relies on the exemption above instead.",
          },
        ],
      },
    ],
    source: veronaEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "Where the journey starts and where it stops",
    lead:
      "Both ends are addresses rather than terminals, and both need more than a " +
      "city name.",
    from: {
      id: "venice",
      label: "Pickup",
      name: "Venice",
      page: "venice",
      linkText: "Transfers in Venice",
      items: [
        {
          term: "The full address, island or mainland",
          detail:
            "Not the property name. Whether it stands on the island or in Mestre decides whether a car can reach you at all, and the Venice page explains why the road stops where it does.",
        },
        {
          term: "If you are on the island, the first leg",
          detail:
            "On foot or by water to an agreed road point, with your luggage. Our Venice to Marco Polo page sets that out in full; the same applies here, with a different road at the far end.",
        },
        {
          term: "Luggage, counted honestly",
          detail:
            "Hold cases and cabin bags separately. On an island departure this decides how you reach the car as much as what the car needs to be.",
        },
      ],
    },
    to: {
      id: "verona",
      label: "Drop-off",
      name: "Verona",
      page: "verona",
      linkText: "Transfers in Verona",
      items: [
        {
          term: "The full address again",
          detail:
            "Verona's old centre is compact and parts of it are narrow. Exemption from a circulation ban is not the same as a street a vehicle can use, and only the address tells the operator which you are dealing with.",
        },
        {
          term: "The date, because the restriction is seasonal",
          detail:
            "The ban the Comune publishes runs through the winter and is reissued each year. A July arrival and a January one are not governed by the same thing.",
        },
        {
          term: "What we will not promise",
          detail:
            "That the car reaches your hotel door. We can say what the published exemptions are; we cannot say that a particular street is passable, and we will not pretend otherwise.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Six lines. The first two carry more weight on this route than anywhere else " +
      "in the Veneto.",
    items: [
      "Your full Venice address, and whether it is on the island or the mainland.",
      "Your full Verona address, not just the city.",
      "The date and the time you would like to travel.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Whether you want the return journey quoted at the same time.",
    ],
    note:
      "If either address is one you are unsure about — an island alley, a lane in " +
      "Verona's centre — send it anyway and say so. Working that out is the " +
      "operator's job and the reason this journey is quoted rather than listed.",
  },

  departure: {
    id: "the-other-way",
    eyebrow: "Verona to Venice",
    heading: "The same journey, with the problems reversed",
    lead:
      "There is no separate page for the return, because it is not a separate " +
      "service — it is this one with the two constraints in the opposite order.",
    paragraphs: [
      "Leaving Verona, the restriction comes first: if you are travelling on a weekday morning or afternoon in winter, your car is moving under the exemption described above, with the driver's self-declaration in the vehicle. Arriving in Venice, the geography comes last — the car can take you as far as the road goes and no further, and from there you continue on foot or by water with your luggage.",
      "That reversal changes where the awkward part of the day sits, and nothing else. The request needs exactly the same six lines, and the quotation is worked the same way. Ask for both legs at once if you want them; it is simpler than coming back to it.",
    ],
    note:
      "We quote each direction individually. Neither is a standing service, and " +
      "neither is implied by the other being possible.",
    source: vtpEn,
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about travelling between Venice and Verona",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Does Verona have a ZTL my transfer needs a permit for?",
        answer:
          "Not one we can find published. What the Comune di Verona does publish is " +
          "a winter circulation ban across the whole municipal area, restricting " +
          "vehicles by emissions class rather than drawing a tourist perimeter. Its " +
          "exemption list names taxis and cars for hire with driver, so a booked " +
          "transfer travels under that exemption — on a condition, below.",
      },
      {
        question: "What is the condition on the exemption?",
        answer:
          "A self-declaration. The Comune states that an exempt vehicle must carry " +
          "an autocertificazione giving the vehicle's details, the time, the origin, " +
          "the destination and the reason for the journey, and show it to road " +
          "police on request. It is the driver's to carry, not yours, but it is the " +
          "part of this journey most often not mentioned at all.",
      },
      {
        question: "When does the Verona restriction apply?",
        answer:
          "The Comune's published measure runs Monday to Friday, 08:30 to 19:30, " +
          "excluding holidays, and extends to every day including weekends during " +
          "orange and red air-quality alerts. It is a winter measure, reissued each " +
          "year, so check the dates for your own travel date rather than assuming " +
          "this year's.",
      },
      {
        question: "Can the car collect me from my hotel in Venice?",
        answer:
          "On the mainland or in Mestre, usually yes. In the historic centre, no — " +
          "there is no road outside it, and you reach an agreed road point on foot " +
          "or by water first. Our Venice to Marco Polo Airport page explains that " +
          "first leg in detail; the same applies whatever your destination.",
      },
      {
        question: "Can the car drop me at my hotel door in Verona?",
        answer:
          "Sometimes, and we will not promise it in advance. Being exempt from a " +
          "circulation ban says nothing about whether a particular street in a " +
          "compact old centre can take a vehicle. Send the full address and the " +
          "operator will tell you where the journey can realistically end.",
      },
      {
        question: "Is there a page for Verona to Venice?",
        answer:
          "No, deliberately. It is the same service with the two constraints " +
          "reversed — the restriction first, the geography last — and a second page " +
          "would exist only to repeat this one with the words swapped. The section " +
          "above covers it, and the quotation works the same either way.",
      },
      {
        question: "How long does the journey take?",
        answer:
          "We publish no figure. Traffic, the season and the time of day move it too " +
          "much for a single number to be honest, and on this route the first leg in " +
          "Venice varies more than the road does. Give your preferred departure time " +
          "and the operator will advise for your date.",
      },
      {
        question: "Can we stop somewhere on the way?",
        answer:
          "Describe what you have in mind when you ask. A stop changes the vehicle's " +
          "time and sometimes the vehicle, so it is priced into the journey rather " +
          "than added on the day, and it is not an entitlement that comes with the " +
          "booking.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Related pages",
    items: [
      {
        page: "venice",
        label: "Transfers in Venice",
        detail: "Where a road transfer can end, and why the road stops where it does.",
      },
      {
        page: "verona",
        label: "Transfers in Verona",
        detail: "The city at the other end, its station and the road to Lake Garda.",
      },
      {
        page: "route-venice-vce",
        label: "Venice to Marco Polo Airport",
        detail: "The first leg from an island address, set out in full.",
      },
      {
        page: "verona-airport",
        label: "Verona Villafranca Airport (VRN)",
        detail: "If the journey continues by air from the Verona end.",
      },
      {
        page: "venice-stations",
        label: "Venice railway stations",
        detail: "Santa Lucia and Mestre, if you are comparing the train with a car.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send both addresses and the date",
    body:
      "Island or mainland in Venice, the street in Verona, and when you want to " +
      "travel. The date matters more here than on most routes, because one end of " +
      "the journey is governed by a measure that only applies for part of the year.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Transfers in Verona", page: "verona" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const it: RoutePage = {
  meta: {
    title: "Da Venezia a Verona – Transfer privato con autista",
    description:
      "Un'auto fra due città che limitano il traffico in modi diversi. Che cosa " +
      "decide il prelievo a Venezia e l'arrivo a Verona.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Venezia",
    to: "Verona",
    eyebrow: "Tratta",
    h1: "Da Venezia a Verona",
    lead:
      "Fra due città che limitano entrambe il traffico, e lo limitano in modi del " +
      "tutto diversi. Venezia, semplicemente, non ha una strada davanti alla vostra " +
      "porta. Verona le strade ce le ha, ma d'inverno decide quali motori possano " +
      "percorrerle. Nessuno dei due è un motivo per non andarci: entrambi sono " +
      "motivi per organizzare il viaggio invece di improvvisarlo.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer a Verona",
    photo: "venice-grand-canal",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono prezzi, durate o distanze, e nulla in questa pagina promette che un " +
      "veicolo raggiunga una determinata porta a uno dei due capi.",
  },

  lead: {
    id: "two-restrictions",
    eyebrow: "Che cosa la distingue da un normale viaggio in auto",
    heading: "Due città, due motivi scollegati per cui un'auto non può fermarsi",
    text:
      "Quasi tutti i transfer fra città sono una strada con un indirizzo a ciascun " +
      "capo. Questo ha un vincolo a ciascun capo, e i due non c'entrano nulla fra " +
      "loro. Sapere quale vi riguarda è gran parte della prenotazione.",
    columns: [
      {
        id: "venice",
        heading: "Partire da Venezia",
        subheading: "Un problema geografico",
        rows: [
          {
            term: "Il centro storico non ha strade",
            detail:
              "Se alloggiate sull'isola, la prima tratta è a piedi o via acqua e la fate voi. Nessun permesso e nessun operatore la cambiano: non c'è un posto dove un'auto possa stare.",
          },
          {
            term: "Mestre e la terraferma sono ordinarie",
            detail:
              "Una strada davanti alla porta, i bagagli nel bagagliaio e nulla di quanto sopra vi riguarda. Precisare quale dei due è la riga più utile della vostra richiesta.",
          },
          {
            term: "Da dove parte davvero l'auto",
            detail:
              "Da un punto su strada concordato per il vostro indirizzo. Piazzale Roma è la porta d'accesso su strada della città, ma non la presentiamo come il punto di prelievo di tutti: quello giusto dipende da dove avete dormito.",
          },
        ],
      },
      {
        id: "verona",
        heading: "Arrivare a Verona",
        subheading: "Un problema normativo, e non quello che vi aspettate",
        rows: [
          {
            term: "Non una ZTL turistica, ma un divieto per emissioni",
            detail:
              "Il Comune pubblica un divieto invernale di circolazione su tutto il territorio comunale, dal lunedì al venerdì dalle 8.30 alle 19.30 esclusi i festivi, esteso a tutti i giorni durante le allerte arancioni e rosse. Limita i veicoli per classe emissiva, non i visitatori per quartiere.",
          },
          {
            term: "Le auto a noleggio con conducente sono in deroga, con una condizione",
            detail:
              "L'elenco delle deroghe cita i taxi e le autovetture in servizio di noleggio con conducente. È condizionata: l'autista deve avere con sé un'autocertificazione con veicolo, orario, partenza, destinazione e motivo, da esibire alla polizia stradale su richiesta.",
          },
          {
            term: "Gli ospiti delle strutture nell'area interdetta",
            detail:
              "Sono in deroga a parte, nei giorni di arrivo e partenza e per il solo tragitto da e verso la struttura, con copia della prenotazione. Utile se guidate voi; il vostro transfer si basa invece sulla deroga qui sopra.",
          },
        ],
      },
    ],
    source: veronaIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Dove comincia il viaggio e dove finisce",
    lead:
      "Entrambi i capi sono indirizzi e non terminal, ed entrambi richiedono più " +
      "del nome di una città.",
    from: {
      id: "venice",
      label: "Punto di prelievo",
      name: "Venezia",
      page: "venice",
      linkText: "Transfer a Venezia",
      items: [
        {
          term: "L'indirizzo completo, isola o terraferma",
          detail:
            "Non il nome della struttura. Che si trovi sull'isola o a Mestre decide se un'auto possa raggiungervi, e la pagina su Venezia spiega perché la strada finisce dove finisce.",
        },
        {
          term: "Se siete sull'isola, la prima tratta",
          detail:
            "A piedi o via acqua fino a un punto su strada concordato, con i bagagli. La nostra pagina da Venezia al Marco Polo la spiega per esteso: qui vale lo stesso, con un'altra strada all'altro capo.",
        },
        {
          term: "Bagagli, contati con onestà",
          detail:
            "Valigie da stiva e bagagli a mano separatamente. In una partenza dall'isola determinano come raggiungete l'auto quanto che cosa debba essere l'auto.",
        },
      ],
    },
    to: {
      id: "verona",
      label: "Punto di discesa",
      name: "Verona",
      page: "verona",
      linkText: "Transfer a Verona",
      items: [
        {
          term: "Di nuovo l'indirizzo completo",
          detail:
            "Il centro storico di Verona è raccolto e in parte stretto. Essere in deroga a un divieto di circolazione non equivale a una strada percorribile: solo l'indirizzo dice all'operatore con quale delle due ha a che fare.",
        },
        {
          term: "La data, perché la limitazione è stagionale",
          detail:
            "Il divieto pubblicato dal Comune vale per l'inverno e viene riproposto ogni anno. Un arrivo a luglio e uno a gennaio non sono regolati dalla stessa cosa.",
        },
        {
          term: "Che cosa non promettiamo",
          detail:
            "Che l'auto arrivi alla porta del vostro albergo. Possiamo dire quali siano le deroghe pubblicate; non possiamo dire che una certa strada sia percorribile, e non fingeremo il contrario.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Sei righe. Le prime due pesano su questa tratta più che su qualsiasi altra " +
      "in Veneto.",
    items: [
      "L'indirizzo completo a Venezia, precisando se è sull'isola o in terraferma.",
      "L'indirizzo completo a Verona, non solo la città.",
      "La data e l'ora in cui vorreste viaggiare.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Se volete a preventivo anche il viaggio di ritorno.",
    ],
    note:
      "Se uno dei due indirizzi vi lascia in dubbio — una calle sull'isola, un " +
      "vicolo nel centro di Verona — inviatelo comunque dicendolo. Capirlo è " +
      "compito dell'operatore, ed è il motivo per cui questo viaggio si preventiva " +
      "invece di listarlo.",
  },

  departure: {
    id: "the-other-way",
    eyebrow: "Da Verona a Venezia",
    heading: "Lo stesso viaggio, con i problemi invertiti",
    lead:
      "Non esiste una pagina separata per il ritorno, perché non è un servizio " +
      "separato: è questo con i due vincoli nell'ordine opposto.",
    paragraphs: [
      "Partendo da Verona il vincolo viene per primo: se viaggiate in un giorno feriale d'inverno, mattina o pomeriggio, la vostra auto si muove in deroga come descritto sopra, con l'autocertificazione dell'autista a bordo. Arrivando a Venezia la geografia viene per ultima: l'auto vi porta fin dove arriva la strada e non oltre, e da lì si prosegue a piedi o via acqua con i bagagli.",
      "Questa inversione cambia soltanto dove si colloca la parte scomoda della giornata. La richiesta ha bisogno esattamente delle stesse sei righe e il preventivo si costruisce allo stesso modo. Se volete entrambe le tratte, chiedetele insieme: è più semplice che tornarci sopra.",
    ],
    note:
      "Preventiviamo ogni direzione singolarmente. Nessuna delle due è un servizio " +
      "di linea, e nessuna è sottintesa dal fatto che l'altra sia possibile.",
    source: vtpIt,
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su come spostarsi fra Venezia e Verona",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Verona ha una ZTL per cui serve un permesso al transfer?",
        answer:
          "Non una che risulti pubblicata. Quello che il Comune di Verona pubblica è " +
          "un divieto invernale di circolazione su tutto il territorio comunale, che " +
          "limita i veicoli per classe emissiva invece di tracciare un perimetro " +
          "turistico. Il suo elenco di deroghe cita taxi e autovetture a noleggio con " +
          "conducente: un transfer prenotato viaggia in quella deroga, a una " +
          "condizione indicata qui sotto.",
      },
      {
        question: "Qual è la condizione della deroga?",
        answer:
          "Un'autocertificazione. Il Comune indica che il veicolo in deroga deve " +
          "averne una con i dati del mezzo, l'orario, la partenza, la destinazione e " +
          "il motivo del viaggio, da esibire alla polizia stradale su richiesta. " +
          "Spetta all'autista e non a voi, ma è la parte di questo viaggio di cui più " +
          "spesso non si parla affatto.",
      },
      {
        question: "Quando si applica la limitazione di Verona?",
        answer:
          "La misura pubblicata dal Comune vale dal lunedì al venerdì, dalle 8.30 " +
          "alle 19.30, esclusi i festivi, e si estende a tutti i giorni, weekend " +
          "compresi, durante le allerte arancioni e rosse. È una misura invernale, " +
          "riproposta ogni anno: verificate le date per la vostra data di viaggio " +
          "invece di dare per buone quelle di quest'anno.",
      },
      {
        question: "L'auto può venire a prendermi in albergo a Venezia?",
        answer:
          "In terraferma o a Mestre di solito sì. Nel centro storico no: davanti non " +
          "c'è una strada, e si raggiunge prima a piedi o via acqua un punto " +
          "concordato. La nostra pagina da Venezia all'aeroporto Marco Polo spiega " +
          "quella prima tratta nel dettaglio, e vale qualunque sia la destinazione.",
      },
      {
        question: "L'auto può lasciarmi davanti all'albergo a Verona?",
        answer:
          "A volte, e non lo promettiamo in anticipo. Essere in deroga a un divieto " +
          "di circolazione non dice nulla su quanto una certa strada di un centro " +
          "storico raccolto sia percorribile. Inviate l'indirizzo completo e " +
          "l'operatore vi dirà dove il viaggio può realisticamente finire.",
      },
      {
        question: "Esiste una pagina da Verona a Venezia?",
        answer:
          "No, di proposito. È lo stesso servizio con i due vincoli invertiti — prima " +
          "la limitazione, poi la geografia — e una seconda pagina esisterebbe solo " +
          "per ripetere questa a parole scambiate. La sezione qui sopra la copre, e " +
          "il preventivo funziona allo stesso modo in entrambe le direzioni.",
      },
      {
        question: "Quanto dura il viaggio?",
        answer:
          "Non pubblichiamo una cifra. Traffico, stagione e ora del giorno la fanno " +
          "variare troppo perché un numero unico sia onesto, e su questa tratta la " +
          "prima parte a Venezia varia più della strada. Indicate l'orario di " +
          "partenza preferito e l'operatore vi consiglia per la vostra data.",
      },
      {
        question: "Possiamo fermarci lungo il percorso?",
        answer:
          "Descrivete che cosa avete in mente quando scrivete. Una sosta cambia i " +
          "tempi del veicolo e a volte il veicolo stesso, quindi si quota dentro il " +
          "viaggio invece di aggiungersi il giorno stesso, e non è un diritto " +
          "compreso nella prenotazione.",
      },
    ],
  },

  related: {
    id: "related",
    heading: "Pagine collegate",
    items: [
      {
        page: "venice",
        label: "Transfer a Venezia",
        detail: "Dove può finire un transfer su strada, e perché la strada finisce lì.",
      },
      {
        page: "verona",
        label: "Transfer a Verona",
        detail: "La città all'altro capo, la sua stazione e la strada per il lago di Garda.",
      },
      {
        page: "route-venice-vce",
        label: "Da Venezia all'aeroporto Marco Polo",
        detail: "La prima tratta da un indirizzo sull'isola, spiegata per esteso.",
      },
      {
        page: "verona-airport",
        label: "Aeroporto di Verona Villafranca (VRN)",
        detail: "Se dal lato veronese il viaggio prosegue in aereo.",
      },
      {
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail: "Santa Lucia e Mestre, se state confrontando il treno con l'auto.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci i due indirizzi e la data",
    body:
      "Isola o terraferma a Venezia, la via a Verona e quando volete viaggiare. Qui " +
      "la data conta più che su quasi ogni altra tratta, perché un capo del viaggio " +
      "è regolato da una misura che vale solo per una parte dell'anno.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Verona", page: "verona" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

export const routeVeniceVerona: Record<Locale, RoutePage> = { en, it };
