import type { Locale } from "@/lib/site";
import type { RoutePage } from "./types";

/**
 * Venice → Marco Polo Airport.
 *
 * ── Why this is not the inbound page reversed ────────────────────────────
 * `routes.ts` already holds Marco Polo → Venice, and its own lead says it
 * plainly: "The departure end is simple. The arrival end is Venice, with
 * everything that implies." That is true of an arrival, and it is exactly
 * backwards for a departure.
 *
 * Leaving Venice, the hard end comes first. Your accommodation may have no
 * road outside it at all, so before a car can begin there is a journey on
 * foot or on water that you make yourself, with your luggage, against a
 * deadline set by an airline. No page on this site covers that. A grep for
 * "check-in" across the Veneto content returned matches in one file — the
 * cruise page written days ago — and nothing in the airport cluster.
 *
 * So the page is built around the first leg, not the drive. That is the
 * part travellers get wrong and the part no competitor explains.
 *
 * ── The airport end is deliberately thin, and here is why ────────────────
 * veneziaairport.it returns HTTP 403 to automated requests. Nothing about
 * VCE's terminals, drop-off arrangements, any kiss-and-fly provision, or
 * where a hired car may set down could be read from the operator, and that
 * block was not worked around. So this page states none of it and links to
 * the airport page instead.
 *
 * Worth knowing for whoever edits next: the existing Marco Polo page cites
 * Wikipedia rather than the operator. That is below this project's usual
 * standard and is not something this file should lean on — which is a
 * second reason the airport end here stays short.
 *
 * ── Deliberately absent ──────────────────────────────────────────────────
 * Journey times, distances, fares, how early to arrive, water-taxi costs,
 * vehicle capacity, waiting, availability, and any drop-off bay or vehicle
 * permission at the airport. The one timing statement is that the airline
 * sets the deadline, which is true everywhere and invents nothing.
 */

const vtpEn = {
  text:
    "That Piazzale Roma is the road gateway to the historic city is published by " +
    "Venezia Terminal Passeggeri, which describes it as the “porta d'ingresso " +
    "alla Città Storica”. Read 25 November 2026. It is orientation rather than " +
    "an instruction: where your own transfer begins is agreed with the operator:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const vtpIt = {
  text:
    "Che piazzale Roma sia la porta d'accesso su strada alla città storica è " +
    "pubblicato da Venezia Terminal Passeggeri, che lo definisce «porta d'ingresso " +
    "alla Città Storica». Consultato il 25 novembre 2026. È un orientamento, non " +
    "un'istruzione: dove cominci il vostro transfer si concorda con l'operatore:",
  linkText: "Venezia Terminal Passeggeri",
  href: "https://www.vtp.it/",
};

const venDepEn: RoutePage = {
  meta: {
    title: "Venice to Marco Polo Airport – Private Transfer & Pickup",
    description:
      "Leaving Venice for VCE, the journey starts before the car does. Where a " +
      "vehicle can collect you, and what that means for your flight.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Venice",
    to: "Venice Marco Polo Airport (VCE)",
    eyebrow: "Route",
    h1: "Venice to Marco Polo Airport",
    lead:
      "Arriving in Venice, the difficulty is at the end. Leaving, it is at the " +
      "beginning. If you are staying in the historic centre there is no road " +
      "outside your door, so the first part of this journey is one you make " +
      "yourself — and it is the part worth planning, because the airline is not " +
      "waiting.",
    primaryCta: "Request a quote",
    secondaryCta: "About Marco Polo Airport",
    note:
      "We arrange these transfers with licensed local operators and drivers; we do " +
      "not own vehicles or employ drivers directly. No price, journey time or road " +
      "distance appears here, and nothing on this page is a statement about how " +
      "early you should leave — your airline sets that.",
  },

  lead: {
    id: "first-leg",
    eyebrow: "The part before the car",
    heading: "In Venice a road transfer starts where the road starts",
    text:
      "This is the single difference between leaving Venice and leaving anywhere " +
      "else, and it decides how the whole morning is planned. Which column you are " +
      "in depends on where you slept.",
    columns: [
      {
        id: "centro",
        heading: "Staying in the historic centre",
        subheading: "An island address, no road outside",
        rows: [
          {
            term: "The first leg is yours",
            detail:
              "On foot, by water taxi or by public water bus, from your accommodation to a point a car can reach. No transfer company can shorten it, because no vehicle can drive to you.",
          },
          {
            term: "Luggage changes everything",
            detail:
              "Bridges have steps, and a case has to go up and down each one. Two people with two cabin bags and a family with five hold cases are planning different mornings from the same hotel.",
          },
          {
            term: "What we need from you",
            detail:
              "The full address, so the operator can say which road point actually suits it. A hotel name alone cannot answer that.",
          },
        ],
      },
      {
        id: "mainland",
        heading: "Staying on the mainland or in Mestre",
        subheading: "An ordinary address, with a road outside",
        rows: [
          {
            term: "An ordinary airport transfer",
            detail:
              "The car comes to the door, the luggage goes in the boot, and the journey is like any other departure. Most of this page does not apply to you.",
          },
          {
            term: "Say which it is",
            detail:
              "Mestre and the historic centre are both “Venice” on a booking form and are nothing alike for a vehicle. Naming the one you mean is the whole request.",
          },
          {
            term: "Still send the flight",
            detail:
              "The collection time is worked backwards from your departure, so the flight number matters as much here as anywhere.",
          },
        ],
      },
    ],
    source: vtpEn,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "The two ends",
    heading: "A Venice address, and an airport on the mainland",
    lead:
      "One end needs explaining. The other is an airport like any other, and this " +
      "page does not pretend to know more about it than it does.",
    from: {
      id: "venice",
      label: "Pickup",
      name: "Venice",
      page: "venice",
      linkText: "Transfers in Venice",
      items: [
        {
          term: "The full address",
          detail:
            "Not the hotel name. Whether it is on the island, on the mainland or in Mestre decides whether a car can reach you at all, and the Venice page explains why the road stops where it does.",
        },
        {
          term: "The agreed starting point",
          detail:
            "For an island address this is a road point you walk or travel by water to. It is settled with the operator for your address in advance, not chosen on the morning.",
        },
        {
          term: "Luggage, counted honestly",
          detail:
            "Hold cases and cabin bags separately. On an island departure this is not only about the vehicle — it is about how you reach it.",
        },
      ],
    },
    to: {
      id: "marco-polo",
      label: "Drop-off",
      name: "Venice Marco Polo Airport (VCE)",
      page: "venice-marco-polo",
      linkText: "About Marco Polo Airport",
      items: [
        {
          term: "The flight number and departure time",
          detail:
            "The collection is timed backwards from your airline's deadline, not forwards from when you would like to leave. It is the most useful line in the request.",
        },
        {
          term: "Which airline, if the flight is a codeshare",
          detail:
            "Check-in desks and deadlines follow the operating carrier, and that is not always the airline you booked with.",
        },
        {
          term: "What this page does not state",
          detail:
            "Any drop-off bay, terminal door or vehicle arrangement at the airport. The operator's own site refuses automated access, so none of it could be verified and none is claimed here.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "What to send with the request",
    lead:
      "Six lines. The first two are the ones that change the answer most on this " +
      "particular journey.",
    items: [
      "The full Venice address — island, mainland or Mestre — not just the property name.",
      "The flight number and its departure time, and the operating airline if it is a codeshare.",
      "How many adults and children, with the children's ages for seats.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Whether anyone in the party has difficulty with steps, bridges or walking with luggage.",
      "A mobile number reachable on the morning you travel.",
    ],
    note:
      "If you are not sure whether your address has road access, send it anyway and " +
      "say you are unsure. Working that out is the operator's job, and it is the " +
      "question this journey turns on.",
  },

  departure: {
    id: "arriving-instead",
    eyebrow: "The other direction",
    heading: "Flying into Venice instead?",
    lead:
      "The inbound journey has its own page, and it is a genuinely different " +
      "problem rather than this one reversed.",
    paragraphs: [
      "Arriving, the airport end is straightforward and Venice is the complication: the driver tracks your flight, and the question is how close to your address a car can finish. Leaving, the complication comes first and there is a deadline attached to it.",
      "If you are flying in, use Marco Polo Airport to Venice. It is written for a tracked arrival and for an address you have not seen yet.",
    ],
    note:
      "Both directions are quoted individually. Only the order of the difficulty " +
      "changes, and on a departure it is the half you cannot do at the last minute.",
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked before leaving Venice",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can a car collect me from my hotel in Venice?",
        answer:
          "If your accommodation is on the mainland or in Mestre, usually yes. If it " +
          "is in the historic centre, no — there is no road outside it. You reach a " +
          "road point on foot or by water, and the car meets you there. Which point " +
          "is agreed with the operator for your specific address.",
      },
      {
        question: "Where does the transfer actually start if I am on the island?",
        answer:
          "At a road-accessible point agreed in advance. Piazzale Roma is the city's " +
          "road gateway — the terminal operator calls it the “porta d'ingresso " +
          "alla Città Storica” — but we do not present it as a universal pickup " +
          "point, because the right one depends on where you are staying.",
      },
      {
        question: "How much time should I allow to reach the road with my luggage?",
        answer:
          "We publish no figure, because it depends on your address, your luggage " +
          "and how many bridges lie between. Tell the operator where you are staying " +
          "and what you are carrying, and you will get advice for that address " +
          "rather than a number that suits nobody.",
      },
      {
        question: "Is it easier to leave from Mestre?",
        answer:
          "For a vehicle, yes — a mainland address has a road outside it and the " +
          "transfer is an ordinary one. That is a reason some travellers choose a " +
          "mainland hotel for their last night, though it is your call and not " +
          "something we advise on.",
      },
      {
        question: "What time will the car collect me?",
        answer:
          "Worked backwards from your flight by the operator, who accounts for the " +
          "first leg if you are on the island. We publish no standard margin, and " +
          "your airline sets the check-in deadline the whole plan is built on.",
      },
      {
        question: "Can you arrange a water taxi as well as the car?",
        answer:
          "Ask when you request the quotation and describe where you are staying. " +
          "The water leg and the road leg are different services, and what can be " +
          "arranged is confirmed in writing rather than assumed here.",
      },
      {
        question: "Which terminal does the car take me to at Marco Polo?",
        answer:
          "Your flight decides that, and we deliberately publish nothing about the " +
          "airport's drop-off arrangements: the operator's own website refuses " +
          "automated access, so we could not verify them. Send the flight number and " +
          "the driver will have the current arrangement.",
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
        page: "venice-marco-polo",
        label: "Venice Marco Polo Airport (VCE)",
        detail: "The airport itself, its land side and its water side.",
      },
      {
        page: "route-vce-venice",
        label: "Marco Polo Airport to Venice",
        detail: "The inbound journey, written for a tracked flight and an address you have not seen.",
      },
      {
        page: "venice-stations",
        label: "Venice railway stations",
        detail: "Santa Lucia and Mestre, if the journey starts or ends with a train instead.",
      },
      {
        page: "venice-cruise-port",
        label: "Venice cruise terminals",
        detail: "If you are leaving a ship rather than a hotel, the first leg is different again.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Send the address and the flight",
    body:
      "Those two lines decide everything else: whether a car can reach you, where " +
      "the journey starts if it cannot, and what time it has to begin. The " +
      "quotation comes back in writing before anything is confirmed.",
    primaryCta: "Request a quote",
    secondaryCta: { label: "Transfers in Venice", page: "venice" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. No price of ours appears on this page, because none is published.",
  },
};

const venDepIt: RoutePage = {
  meta: {
    title: "Da Venezia all'aeroporto Marco Polo – Transfer privato",
    description:
      "Partendo da Venezia per VCE il viaggio comincia prima dell'auto. Dove un " +
      "veicolo può prelevarvi e che cosa comporta per il volo.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Venezia",
    to: "Aeroporto di Venezia Marco Polo (VCE)",
    eyebrow: "Tratta",
    h1: "Da Venezia all'aeroporto Marco Polo",
    lead:
      "Arrivando a Venezia la difficoltà è alla fine. Partendo, è all'inizio. Se " +
      "alloggiate nel centro storico davanti alla vostra porta non c'è una strada: " +
      "la prima parte di questo viaggio la fate voi, ed è la parte da pianificare, " +
      "perché la compagnia aerea non aspetta.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Sull'aeroporto Marco Polo",
    note:
      "Organizziamo questi transfer con operatori e autisti locali autorizzati: non " +
      "possediamo veicoli e non impieghiamo direttamente gli autisti. Qui non " +
      "compaiono prezzi, durate o distanze, e nulla in questa pagina indica con " +
      "quanto anticipo partire: lo stabilisce la vostra compagnia aerea.",
  },

  lead: {
    id: "first-leg",
    eyebrow: "La parte prima dell'auto",
    heading: "A Venezia un transfer su strada comincia dove comincia la strada",
    text:
      "È l'unica differenza fra partire da Venezia e partire da qualsiasi altro " +
      "luogo, e determina come si organizza tutta la mattina. In quale colonna vi " +
      "trovate dipende da dove avete dormito.",
    columns: [
      {
        id: "centro",
        heading: "Alloggiate nel centro storico",
        subheading: "Un indirizzo sull'isola, senza strada davanti",
        rows: [
          {
            term: "La prima tratta è vostra",
            detail:
              "A piedi, in taxi acqueo o con il vaporetto, dalla struttura fino a un punto raggiungibile in auto. Nessuna società di transfer può accorciarla, perché nessun veicolo può arrivare da voi.",
          },
          {
            term: "I bagagli cambiano tutto",
            detail:
              "I ponti hanno gradini, e ogni valigia va su e giù da ciascuno. Due persone con due bagagli a mano e una famiglia con cinque valigie da stiva hanno davanti due mattine diverse pur partendo dallo stesso albergo.",
          },
          {
            term: "Che cosa ci serve da voi",
            detail:
              "L'indirizzo completo, così l'operatore può indicare quale punto su strada gli corrisponda davvero. Il solo nome dell'albergo non lo consente.",
          },
        ],
      },
      {
        id: "mainland",
        heading: "Alloggiate in terraferma o a Mestre",
        subheading: "Un indirizzo ordinario, con una strada davanti",
        rows: [
          {
            term: "Un normale transfer aeroportuale",
            detail:
              "L'auto arriva alla porta, i bagagli vanno nel bagagliaio e il viaggio è come qualsiasi altra partenza. Gran parte di questa pagina non vi riguarda.",
          },
          {
            term: "Precisate quale dei due",
            detail:
              "Mestre e il centro storico sono entrambi «Venezia» su un modulo di prenotazione e non si somigliano per nulla per un veicolo. Indicare quale intendete è tutta la richiesta.",
          },
          {
            term: "Inviate comunque il volo",
            detail:
              "L'orario di prelievo si calcola a ritroso dalla partenza: il numero del volo conta qui quanto altrove.",
          },
        ],
      },
    ],
    source: vtpIt,
  },

  endpoints: {
    id: "endpoints",
    eyebrow: "I due capi",
    heading: "Un indirizzo a Venezia, e un aeroporto in terraferma",
    lead:
      "Un capo va spiegato. L'altro è un aeroporto come tanti, e questa pagina non " +
      "finge di saperne più di quanto sappia.",
    from: {
      id: "venice",
      label: "Punto di prelievo",
      name: "Venezia",
      page: "venice",
      linkText: "Transfer a Venezia",
      items: [
        {
          term: "L'indirizzo completo",
          detail:
            "Non il nome dell'albergo. Che sia sull'isola, in terraferma o a Mestre decide se un'auto possa raggiungervi, e la pagina su Venezia spiega perché la strada finisce dove finisce.",
        },
        {
          term: "Il punto di partenza concordato",
          detail:
            "Per un indirizzo sull'isola è un punto su strada che raggiungete a piedi o via acqua. Si definisce in anticipo con l'operatore per il vostro indirizzo, non la mattina stessa.",
        },
        {
          term: "Bagagli, contati con onestà",
          detail:
            "Valigie da stiva e bagagli a mano separatamente. In una partenza dall'isola non riguarda solo il veicolo: riguarda come ci arrivate.",
        },
      ],
    },
    to: {
      id: "marco-polo",
      label: "Punto di discesa",
      name: "Aeroporto di Venezia Marco Polo (VCE)",
      page: "venice-marco-polo",
      linkText: "Sull'aeroporto Marco Polo",
      items: [
        {
          term: "Numero e orario del volo",
          detail:
            "Il prelievo si calcola a ritroso dalla scadenza della compagnia, non in avanti dall'ora in cui vorreste uscire. È la riga più utile della richiesta.",
        },
        {
          term: "Quale compagnia, se il volo è in code share",
          detail:
            "Banchi e scadenze del check-in seguono il vettore operativo, che non sempre coincide con quello con cui avete prenotato.",
        },
        {
          term: "Che cosa questa pagina non indica",
          detail:
            "Nessuna piazzola di discesa, porta del terminal o modalità d'accesso dei veicoli in aeroporto. Il sito del gestore rifiuta le richieste automatiche: nulla di tutto ciò è stato verificato e nulla viene affermato qui.",
        },
      ],
    },
  },

  prepare: {
    id: "prepare",
    heading: "Che cosa inviare con la richiesta",
    lead:
      "Sei righe. Le prime due sono quelle che su questa tratta cambiano di più la " +
      "risposta.",
    items: [
      "L'indirizzo completo a Venezia — isola, terraferma o Mestre — non solo il nome della struttura.",
      "Numero e orario del volo, e la compagnia operativa se si tratta di un code share.",
      "Quanti adulti e bambini, con le età dei bambini per i seggiolini.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Se qualcuno del gruppo ha difficoltà con gradini, ponti o a camminare con i bagagli.",
      "Un numero di cellulare raggiungibile la mattina della partenza.",
    ],
    note:
      "Se non sapete se il vostro indirizzo sia raggiungibile su strada, inviatelo " +
      "comunque dicendo che non ne siete certi. Capirlo è compito dell'operatore, ed " +
      "è la domanda su cui ruota questo viaggio.",
  },

  departure: {
    id: "arriving-instead",
    eyebrow: "L'altra direzione",
    heading: "State invece atterrando a Venezia?",
    lead:
      "Il viaggio in arrivo ha una pagina propria ed è un problema davvero diverso, " +
      "non questo al contrario.",
    paragraphs: [
      "In arrivo il capo aeroportuale è semplice e la complicazione è Venezia: l'autista segue il volo, e la domanda è quanto vicino al vostro indirizzo possa finire un'auto. In partenza la complicazione viene prima, e ha una scadenza attaccata.",
      "Se state atterrando, usate la pagina dall'aeroporto Marco Polo a Venezia: è scritta per un volo da seguire e per un indirizzo che non avete ancora visto.",
    ],
    note:
      "Entrambe le direzioni si preventivano singolarmente. Cambia solo l'ordine " +
      "della difficoltà, e in partenza è la metà che non si improvvisa.",
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande prima di partire da Venezia",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Un'auto può venire a prendermi in albergo a Venezia?",
        answer:
          "Se la struttura è in terraferma o a Mestre, di solito sì. Se è nel centro " +
          "storico, no: davanti non c'è una strada. Raggiungete a piedi o via acqua " +
          "un punto su strada e lì vi attende l'auto. Quale punto si concorda con " +
          "l'operatore per il vostro indirizzo preciso.",
      },
      {
        question: "Da dove parte davvero il transfer se sono sull'isola?",
        answer:
          "Da un punto raggiungibile su strada concordato in anticipo. Piazzale Roma " +
          "è la porta d'accesso su strada della città — il gestore dei terminal la " +
          "definisce «porta d'ingresso alla Città Storica» — ma non la presentiamo " +
          "come punto di prelievo universale, perché quello giusto dipende da dove " +
          "alloggiate.",
      },
      {
        question: "Quanto tempo devo calcolare per raggiungere la strada con i bagagli?",
        answer:
          "Non pubblichiamo una cifra, perché dipende dall'indirizzo, dai bagagli e " +
          "da quanti ponti ci sono in mezzo. Indicate all'operatore dove alloggiate e " +
          "che cosa portate: riceverete un consiglio per quell'indirizzo invece di un " +
          "numero che non va bene per nessuno.",
      },
      {
        question: "È più semplice partire da Mestre?",
        answer:
          "Per un veicolo sì: un indirizzo in terraferma ha una strada davanti e il " +
          "transfer è ordinario. È il motivo per cui alcuni viaggiatori scelgono un " +
          "albergo in terraferma per l'ultima notte, ma è una vostra decisione e non " +
          "qualcosa su cui diamo consigli.",
      },
      {
        question: "A che ora passerà l'auto?",
        answer:
          "Lo calcola a ritroso dal volo l'operatore, tenendo conto della prima " +
          "tratta se siete sull'isola. Non pubblichiamo un margine standard, e la " +
          "scadenza del check-in su cui si costruisce tutto la fissa la vostra " +
          "compagnia aerea.",
      },
      {
        question: "Potete organizzare anche un taxi acqueo oltre all'auto?",
        answer:
          "Chiedetelo in fase di preventivo descrivendo dove alloggiate. La tratta " +
          "via acqua e quella su strada sono servizi distinti, e ciò che è possibile " +
          "viene confermato per iscritto invece di darlo per scontato qui.",
      },
      {
        question: "A quale terminal mi porta l'auto al Marco Polo?",
        answer:
          "Lo stabilisce il vostro volo, e di proposito non pubblichiamo nulla sulle " +
          "modalità di discesa in aeroporto: il sito del gestore rifiuta gli accessi " +
          "automatici e non abbiamo potuto verificarle. Inviate il numero del volo e " +
          "l'autista avrà l'indicazione aggiornata.",
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
        page: "venice-marco-polo",
        label: "Aeroporto di Venezia Marco Polo (VCE)",
        detail: "L'aeroporto in sé, il suo lato terra e il suo lato acqua.",
      },
      {
        page: "route-vce-venice",
        label: "Dall'aeroporto Marco Polo a Venezia",
        detail: "Il viaggio in arrivo, scritto per un volo da seguire e un indirizzo mai visto.",
      },
      {
        page: "venice-stations",
        label: "Le stazioni ferroviarie di Venezia",
        detail: "Santa Lucia e Mestre, se il viaggio comincia o finisce con un treno.",
      },
      {
        page: "venice-cruise-port",
        label: "I terminal crociere di Venezia",
        detail: "Se lasciate una nave invece di un albergo, la prima tratta è diversa ancora.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Inviateci l'indirizzo e il volo",
    body:
      "Quelle due righe decidono tutto il resto: se un'auto possa raggiungervi, da " +
      "dove parta il viaggio se non può, e a che ora debba cominciare. Il preventivo " +
      "torna per iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer a Venezia", page: "venice" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. In questa pagina non compare alcun nostro prezzo, perché non " +
      "ne pubblichiamo.",
  },
};

export const routeVeniceVce: Record<Locale, RoutePage> = {
  en: venDepEn,
  it: venDepIt,
};
