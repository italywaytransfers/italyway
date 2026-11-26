import type { VrnGardaRoute } from "./types";

/**
 * Verona Villafranca Airport (VRN) ↔ Lake Garda.
 *
 * ── The traveller this page is written for ───────────────────────────────
 * Someone who has just landed at Verona, has luggage, and whose hotel is in
 * a town they may not be able to place on a map. Not someone browsing
 * photographs of a lake. The page opens at the baggage belt, not at the
 * scenery, and the first thing it does is answer "do you go where I'm
 * going?" — because that is the question that decides whether they enquire.
 *
 * ── Research re-verified 25 November 2026 ────────────────────────────────
 * Sirmione, re-downloaded and extracted with pdftotext today:
 *
 *   Ordinanza n. 30 del 06/03/2026, Comune di Sirmione, Provincia di
 *   Brescia — "MODIFICHE ALLA DISCIPLINA DI GESTIONE DELLA ZONA A TRAFFICO
 *   LIMITATO ADOTTATA CON ORDINANZA N. 24/2025", itself amending 28/2024,
 *   implementing Deliberazione di Giunta Comunale n. 311 del 19/12/2018.
 *   So the regime is current and has been reissued annually. The zone is
 *   watched by the automated system "K53700/SA", in definitive operation
 *   since 17 February 2020.
 *
 *   Allegato C, TAXI–NCC column: PERIODO UNICO, feriali e festivi,
 *   00:00 - 24:00, "con pedonalizzazione divieto di circolazione", plus the
 *   footnote that decides everything:
 *
 *     (**) TAXI E NCC - INGRESSO CONSENTITO SOLO PER TRASORTO RESIDENTI,
 *          DIMORANTI E SOGGIORNANTI
 *
 *   ("TRASORTO" is a typo for "TRASPORTO" in the original.)
 *
 * ── The Welcome Point: investigated, then withdrawn ───────────────────
 * An earlier draft of this page described a "Welcome Point" procedure from
 * the Comune's FAQ PDF: a taxi/NCC from outside Sirmione passing the barrier
 * and unloading by the Info Point bays in a 30-minute zone, and needing
 * accreditation to reach accommodation inside the centre. On 25 November 2026
 * that was re-examined and REMOVED from the page, because four things
 * together show it is not established as current procedure:
 *
 *   1. Ordinanza n. 30/2026 never mentions a Welcome Point. Nor does
 *      Allegato C — which does name Grifoparking, so the annex is not simply
 *      silent about named facilities.
 *   2. The FAQ is written in the future tense about something new:
 *      "Come funziona il NUOVO Welcome Point? Il nuovo Welcome Point
 *      PERMETTERA di ottimizzare i transiti..." That is announcement copy,
 *      not a standing description.
 *   3. Its filename is faq-ztl-sperimentale.pdf, and the current ordinance
 *      states at lines 58-61 that modifications to the management rules were
 *      made "alla luce dell'esperienza maturata durante la fase di
 *      sperimentazione ed avvio" — so the ordinance supersedes the phase the
 *      FAQ documents.
 *   4. The three current dated notices on the Comune's ZTL topic page
 *      (30 March 2026 "Stagione turistica 2026", 16 March 2026 "Giornate di
 *      pedonalizzazione 2026", 22 December 2025 annual permits) say nothing
 *      about a Welcome Point.
 *
 * The FAQ is therefore treated as historical. No alternative meeting point
 * was invented to replace it: the page now says the stopping and access
 * arrangement is confirmed by the operator for the specific booking.
 *
 * ── What the ordinance DOES establish about permits ──────────────────
 * Lines 115-119, and this is the clause the page now uses:
 *
 *   E istituito il divieto, nella Z.T.L. come sopra definita, di circolazione
 *   dinamica e statica per tutte le categorie di veicoli non compresi e/o
 *   autorizzati ai sensi del predetto Disciplinare di Gestione della Z.T.L.
 *   approvato contestualmente con il presente provvedimento. I veicoli
 *   autorizzati devono essere muniti di apposito contrassegno, cartaceo o
 *   digitale, rilasciato dall'Amministrazione Comunale - Ufficio Traffico
 *   Z.T.L.
 *
 * So the requirement on authorised vehicles is a CONTRASSEGNO (a pass, paper
 * or digital) — not a plate registration. The word "targa" appears nowhere in
 * the ordinance. Plate reading appears only in the FAQ, as the enforcement
 * mechanism for already-authorised plates, which is a different thing again.
 *
 * UNRESOLVED, and the page says so rather than guessing: whether taxi/NCC
 * count as "compresi" (an included category, needing no pass) or
 * "autorizzati" (needing a contrassegno) is settled by the Disciplinare di
 * Gestione, which is approved alongside the ordinance but is NOT published
 * separately on the Comune's ZTL page. Only Allegato C is. So the page states
 * the clause, states that the management rules are not published, and refers
 * the question to the operator.
 *
 * ── The five comuni, each from its own website, read today ──────────────
 *   Peschiera del Garda  "Regione Veneto"; address "Piazzale Betteloni, 3 -
 *                        37019 - VR"
 *   Bardolino            "Regione Veneto" (province not stated)
 *   Sirmione             "Provincia di Brescia" — from the ordinance's own
 *                        letterhead, which is better evidence than the
 *                        "(BS)" the Lake Garda hub had to rely on
 *   Desenzano del Garda  "Provincia di Brescia"; address "Via G. Carducci 4,
 *                        25015 Desenzano del Garda (Bs)"
 *   Lazise               connection failed again (http 000). Unverified, and
 *                        the page says so rather than guessing.
 *
 * ── What could NOT be verified, and is therefore absent ─────────────────
 * aeroportoverona.it returned HTTP 403. So there is nothing here about
 * terminals, arrivals halls, meeting points, waiting allowances or driver
 * contact procedure — all of which the brief forbids inventing and the
 * source could not support. The airport facts used are the ones this project
 * already verified: about 10 km south-west of Verona, in the comune of
 * Villafranca di Verona.
 *
 * The seasonal airport-to-lake bus mentioned on two existing pages carries
 * no source note anywhere in this repository. It is NOT repeated here. The
 * only public-transport fact used is the Airlink, which has a Trenitalia
 * source on the VRN page, and the honest point about it is where it goes:
 * Verona Porta Nuova, which is not the lake.
 *
 * No journey time, distance, fare, vehicle capacity, flight-tracking promise
 * or waiting allowance appears anywhere in this file.
 *
 * ── No photograph ───────────────────────────────────────────────────────
 * The CC0 library holds no image of Lake Garda, any of the five towns, or
 * Verona airport. A lake photograph from somewhere else would be the one
 * visual lie a page about naming the right town cannot afford.
 */

const sirmioneOrdEn = {
  text:
    "Sirmione's limited-traffic zone and its entry rule for taxis and hire cars " +
    "with driver are published by the Comune di Sirmione in Ordinanza n. 30 of 6 " +
    "March 2026, which amends the 2025 ordinance and implements a 2018 council " +
    "resolution. Its Allegato C gives taxis and NCC a single period covering " +
    "weekdays and holidays, 00:00 to 24:00, with entry permitted only to carry " +
    "residents, people living there and people staying there. The zone is watched " +
    "by an automated system in operation since February 2020. Re-read 25 November " +
    "2026:",
  linkText: "the Comune di Sirmione on its ZTL",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const sirmioneOrdIt = {
  text:
    "La zona a traffico limitato di Sirmione e la regola d'ingresso per taxi e " +
    "auto a noleggio con conducente sono pubblicate dal Comune di Sirmione " +
    "nell'Ordinanza n. 30 del 6 marzo 2026, che modifica quella del 2025 e attua " +
    "una deliberazione di Giunta del 2018. L'Allegato C assegna a taxi e NCC un " +
    "periodo unico, feriali e festivi, dalle 00:00 alle 24:00, con ingresso " +
    "consentito solo per trasportare residenti, dimoranti e soggiornanti. La zona " +
    "è presidiata da un sistema automatizzato in funzione dal febbraio 2020. " +
    "Riconsultato il 25 novembre 2026:",
  linkText: "il Comune di Sirmione sulla propria ZTL",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const sirmionePermitEn = {
  text:
    "The permit position is set out in the same ordinance: circulation in the " +
    "zone, moving or stationary, is forbidden to vehicle categories not included " +
    "in or authorised under the ZTL management rules approved alongside it, and " +
    "authorised vehicles must carry a pass — paper or digital — issued by the " +
    "Comune's ZTL traffic office. Those management rules are not published " +
    "separately, so which categories need a pass is not a question this page can " +
    "answer; it is one for the operator. Read 25 November 2026:",
  linkText: "the Comune di Sirmione's published ZTL documents",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const sirmionePermitIt = {
  text:
    "La questione dei titoli è nella stessa ordinanza: nella zona è vietata la " +
    "circolazione, dinamica e statica, alle categorie di veicoli non comprese o " +
    "non autorizzate ai sensi del disciplinare di gestione della ZTL approvato " +
    "contestualmente, e i veicoli autorizzati devono essere muniti di apposito " +
    "contrassegno, cartaceo o digitale, rilasciato dall'Ufficio Traffico ZTL del " +
    "Comune. Quel disciplinare non è pubblicato a parte: quali categorie debbano " +
    "avere il contrassegno non è una domanda a cui questa pagina possa " +
    "rispondere, ma una da porre all'operatore. Consultato il 25 novembre 2026:",
  linkText: "i documenti ZTL pubblicati dal Comune di Sirmione",
  href: "https://www.comune.sirmione.bs.it/it/documenti_pubblici/regolamentazione-della-ztl",
};

const comuniEn = {
  text:
    "Each town's region or province is quoted from its own comune's website, read " +
    "25 November 2026, and they publish different amounts: Peschiera del Garda " +
    "gives “Regione Veneto” and VR in its address, Bardolino its region only, " +
    "Desenzano del Garda the Provincia di Brescia, and Sirmione's own ordinance is " +
    "headed Provincia di Brescia. For Lazise this page makes no administrative " +
    "claim at all, and names only the shore it sits on:",
  linkText: "the Comune di Peschiera del Garda",
  href: "https://www.comune.peschieradelgarda.vr.it/",
};

const comuniIt = {
  text:
    "Regione o provincia di ciascun paese sono riprese dal sito del rispettivo " +
    "comune, consultato il 25 novembre 2026, e pubblicano quantità diverse di " +
    "informazioni: Peschiera del Garda indica «Regione Veneto» e VR " +
    "nell'indirizzo, Bardolino solo la regione, Desenzano del Garda la Provincia " +
    "di Brescia, e l'ordinanza di Sirmione porta in testa Provincia di Brescia. Il " +
    "Per Lazise questa pagina non avanza alcuna affermazione amministrativa e " +
    "indica soltanto la sponda su cui si trova:",
  linkText: "il Comune di Peschiera del Garda",
  href: "https://www.comune.peschieradelgarda.vr.it/",
};

const atvEn = {
  text:
    "The seasonal bus from the airport to the lake is ATV's route 482, which " +
    "the operator describes as running hourly between Verona Airport and Lake " +
    "Garda, listing its stops as Catullo airport, Villafranca, Valeggio, " +
    "Peschiera and San Benedetto. ATV gives the current season as ending 18 " +
    "October 2026 and resuming 21 March 2027, and sets those dates season by " +
    "season. Read 26 November 2026:",
  linkText: "ATV publishes its Lake Garda lines and timetables",
  href: "https://www.atv.verona.it/en/LineeLago",
};

const airlinkEn = {
  text:
    "The Verona Airlink is a combined train-and-bus service under a single ticket " +
    "linking the airport with Verona Porta Nuova, run by Trenitalia with ATV. It " +
    "is listed here only to be clear about where it goes, which is the station in " +
    "Verona and not the lake:",
  linkText: "Trenitalia publishes the Airlink's current details",
  href: "https://www.trenitalia.com/en/connections/verona-airlink.html",
};

const atvIt = {
  text:
    "Il bus stagionale dall'aeroporto al lago \u00e8 la linea 482 di ATV, che " +
    "l'azienda descrive come collegamento a cadenza oraria fra l'aeroporto di " +
    "Verona e il Lago di Garda, con fermate indicate ad aeroporto Catullo, " +
    "Villafranca, Valeggio, Peschiera e San Benedetto. ATV indica la stagione " +
    "in corso come conclusa il 18 ottobre 2026 e in ripresa dal 21 marzo 2027, " +
    "e fissa quelle date stagione per stagione. Consultato il 26 novembre 2026:",
  linkText: "ATV pubblica le linee e gli orari del Lago di Garda",
  href: "https://www.atv.verona.it/it/LineeLago",
};

const airlinkIt = {
  text:
    "L'Airlink di Verona è un servizio combinato treno più bus con biglietto unico " +
    "che collega l'aeroporto a Verona Porta Nuova, gestito da Trenitalia con ATV. " +
    "È citato qui solo per essere chiari su dove arrivi: alla stazione di Verona e " +
    "non al lago:",
  linkText: "Trenitalia pubblica i dettagli aggiornati dell'Airlink",
  href: "https://www.trenitalia.com/it/verona-airlink.html",
};

const en: VrnGardaRoute = {
  meta: {
    title: "Verona Airport to Lake Garda – Transfers to Five Towns",
    description:
      "Private transfers from Verona Airport to five confirmed Lake Garda towns, " +
      "and back for your flight. Name the town and we can quote the journey.",
  },
  breadcrumbLabel: "Breadcrumb",

  hero: {
    from: "Verona Airport (VRN)",
    to: "Lake Garda",
    eyebrow: "Route",
    h1: "Verona Airport to Lake Garda",
    lead:
      "You have landed at Verona, the cases are off the belt, and the booking " +
      "confirmation in your pocket names a town rather than a lake. That is the " +
      "part worth getting right before you travel: we arrange private transfers " +
      "to five confirmed Lake Garda towns, and which one you name changes the " +
      "road, the province and sometimes how close a car can get.",
    primaryCta: "Request a quotation",
    secondaryCta: "Lake Garda transfers",
    note:
      "The five towns are Peschiera del Garda, Lazise, Bardolino, Sirmione and " +
      "Desenzano del Garda. We arrange these journeys with licensed local " +
      "operators; we do not own vehicles or employ drivers directly. No price, " +
      "journey time or distance appears on this page, and nothing here is an " +
      "offer of access to a restricted street.",
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "From landing to moving",
    heading: "How an airport transfer to the lake is actually arranged",
    lead:
      "Nothing about this is complicated, but it is arranged in advance rather " +
      "than found on arrival, and the detail you send is what the quotation is " +
      "built from.",
    paragraphs: [
      "Verona Villafranca sits about 10 kilometres south-west of Verona, in the comune of Villafranca di Verona, which puts it on the right side of the city for the lake's southern and eastern shores. That is the whole of the geographic good news, and it is why this airport is the one most lake-bound travellers use.",
      "What follows is a request rather than a checkout. You send the flight, the date, the town and the address, and the operator comes back with a written quotation for that specific journey. There is no price list on this page to pick from, because the price depends on the town, the vehicle the group and the luggage need, and the hour — and a figure invented to look competitive would only be renegotiated later.",
    ],
    terms: [
      {
        term: "Why the exact town comes first",
        detail:
          "“Lake Garda” is roughly fifty kilometres of shoreline across two provinces. Peschiera and Desenzano are not the same drive, and a quotation cannot be prepared for a shoreline.",
      },
      {
        term: "Why the flight number matters",
        detail:
          "It identifies the arrival the journey is being planned around. We make no promise here about how a delay is handled — that is the operator's arrangement to state, and it is worth asking them to state it.",
      },
      {
        term: "Why luggage is counted, not estimated",
        detail:
          "Hold cases and cabin bags take different space, and a group that fits in a car on paper may not once the boot is loaded. Counting them is what makes the quoted vehicle the right one.",
      },
      {
        term: "What we cannot settle from here",
        detail:
          "Where exactly the car meets you at the airport, and where exactly it may stop at the other end. Both are the operator's to confirm, and both are asked about more often than anything else.",
      },
    ],
    note:
      "Where the car meets you at the airport, and how long it can wait, are " +
      "settled as part of the enquiry rather than published here — they depend on " +
      "the operator and on the arrangements in force when you travel. Ask for " +
      "them in writing with your quotation, and you will have them before you fly " +
      "rather than on the pavement.",
  },

  towns: {
    id: "towns",
    eyebrow: "Where you are actually going",
    heading: "The five confirmed towns, and what differs about each",
    lead:
      "These are the destinations our operators have confirmed. They are not " +
      "interchangeable: two are in the Veneto, two are in the province of " +
      "Brescia, and one has a barrier at the entrance to its old town.",
    items: [
      {
        id: "peschiera",
        name: "Peschiera del Garda",
        comune: "Its comune publishes “Regione Veneto” and gives VR in its address",
        suits:
          "Travellers whose stay sits at the lake's south-eastern corner, and anyone whose onward plans involve the railway — Peschiera is the main rail gateway on this side of the lake, which is why it also suits people arriving by air and leaving by train.",
        matters:
          "The town is built around a fortified centre crossed by water, so “Peschiera” covers addresses of quite different character. The full street address is what tells the operator which kind yours is.",
      },
      {
        id: "lazise",
        name: "Lazise",
        comune: "On the Veneto shore between Peschiera del Garda and Bardolino",
        suits:
          "Stays a little north of Peschiera, and this is the town on the list where “where exactly?” does the most work: a great deal of the accommodation sold as Lazise is spread back from the water across campsites, residences and holiday villages rather than gathered in one centre.",
        matters:
          "The property's full address, and the name it trades under if that differs from the street. Two places a few minutes apart here can be a lakefront hotel and a holiday village along a side road, and the name alone will not tell an operator which yours is.",
      },
      {
        id: "bardolino",
        name: "Bardolino",
        comune: "Its comune publishes “Regione Veneto”; it does not state a province on its site",
        suits:
          "Lakefront stays further up the eastern shore, and visitors whose reason for coming is a cellar rather than a hotel — the name is a wine denomination as well as a town, so some arrivals here are not to an address with a reception desk.",
        matters:
          "If your destination is a producer or an agriturismo rather than a hotel, say so and send the address. Those sit back in the hills behind the town, and they are a different drive from the promenade.",
      },
      {
        id: "sirmione",
        name: "Sirmione",
        comune: "Its own ordinance is headed Comune di Sirmione, Provincia di Brescia",
        suits:
          "Stays on the peninsula and around its base — and this is the one town on the list where the answer to “can the car bring us to the door?” is genuinely complicated. The next section is about nothing else.",
        matters:
          "Whether your address is inside the walled historic centre, and whether you are staying overnight in the town. Both change what is permitted, and only you can answer them.",
      },
      {
        id: "desenzano",
        name: "Desenzano del Garda",
        comune: "Its comune publishes the Provincia di Brescia; its address gives 25015 and (Bs)",
        suits:
          "The lake's south-western corner, in Lombardy. The largest of the southern towns, another rail arrival point, and the usual choice for travellers who want a town with its own life rather than a resort.",
        matters:
          "It is on the opposite side of the lake's foot from Peschiera, in a different province. Travellers who book “Lake Garda” and mean Desenzano are the ones most often surprised by that, so the town name earns its place in the request.",
      },
    ],
    note:
      "Nothing we read states that any of these five comuni lies in Trentino, so " +
      "this page names two regions rather than three. If your accommodation is " +
      "further north on the lake, ask rather than assuming it falls under the list " +
      "above — the answer will be about your town specifically.",
    sources: [comuniEn],
  },

  sirmione: {
    id: "sirmione-access",
    eyebrow: "The one town that needs explaining",
    heading: "Sirmione: four different things, and only one is about us",
    lead:
      "Our operators serve Sirmione. That is confirmed, and it is not the same " +
      "statement as “the car will bring you to your hotel door”. The Comune " +
      "publishes the rest, and it is worth reading in order.",
    chain: [
      {
        title: "One. We can arrange the journey",
        body:
          "Sirmione is one of the five confirmed towns, so a transfer there from Verona Airport can be arranged and quoted. This is the only link in the chain that is ours to confirm.",
      },
      {
        title: "Two. Hired cars may enter the zone, on one condition",
        body:
          "The Comune's Allegato C gives taxis and hire cars with driver a single period — weekdays and holidays alike, 00:00 to 24:00 — with entry permitted only to carry residents, people living there and people staying there. If you are staying in Sirmione, that condition is about you and it is met. If you are visiting for the day, it is not.",
      },
      {
        title: "Three. Being a permitted category is not the same as holding a pass",
        body:
          "The ordinance forbids circulation in the zone — moving or stationary — to vehicle categories not included in or authorised under the management rules approved alongside it, and requires authorised vehicles to carry a pass issued by the Comune's ZTL traffic office. Those management rules are not published separately, so whether a given hired car needs one is a question for the operator rather than for this page.",
      },
      {
        title: "Four. Where you will actually be set down",
        body:
          "That is the operator's to confirm, not ours to publish. The ordinance describes which categories are permitted and on what condition; it does not establish that a particular lane can take a vehicle, that there is somewhere to wait, or what a given driver holds on the day you travel.",
      },
    ],
    caution: {
      heading: "What we are not promising",
      body:
        "That the vehicle holds whatever the zone requires on the day, or that it " +
        "will reach your hotel entrance, or where exactly you will be set down. " +
        "Coverage of the town is confirmed and the rest is not ours to promise. " +
        "Say you are staying inside the walls when you ask, and have the operator " +
        "confirm in writing how access and the drop-off will be handled for your " +
        "booking before you travel.",
    },
    sources: [sirmioneOrdEn, sirmionePermitEn],
  },

  compare: {
    id: "compare",
    eyebrow: "One airport, five destinations",
    heading: "Why the town name does more work than you would think",
    lead:
      "The same flight, the same airport, five different journeys. This is the " +
      "table to glance at before you write the request.",
    caption:
      "The five confirmed Lake Garda destinations from Verona Airport, with what each comune publishes and the one detail that changes the quotation",
    columns: ["Town", "Shore and administration", "The detail that matters most"],
    rows: [
      {
        id: "peschiera",
        cells: [
          "Peschiera del Garda",
          "South-eastern corner; Regione Veneto, VR",
          "The full street address — the centre and the outskirts are different arrivals",
        ],
      },
      {
        id: "lazise",
        cells: [
          "Lazise",
          "Veneto shore, between Peschiera and Bardolino",
          "Whether the property is on the lakefront or set back from it",
        ],
      },
      {
        id: "bardolino",
        cells: [
          "Bardolino",
          "Eastern shore; Regione Veneto",
          "Whether you are going to a hotel or to a producer in the hills behind",
        ],
      },
      {
        id: "sirmione",
        cells: [
          "Sirmione",
          "Southern peninsula; Provincia di Brescia",
          "Whether the address is inside the walls, and whether you are staying overnight",
        ],
      },
      {
        id: "desenzano",
        cells: [
          "Desenzano del Garda",
          "South-western corner; Provincia di Brescia",
          "That it is a different province from Peschiera, and a different drive",
        ],
      },
    ],
    note:
      "No distances, durations or prices appear in this table, and that is " +
      "deliberate rather than an omission. They depend on the address, the hour " +
      "and the traffic, and a figure published here would be a guess dressed as " +
      "information. The operator quotes the journey you describe.",
  },

  arrival: {
    id: "arrival",
    eyebrow: "Arriving",
    heading: "What to send for an arrival transfer",
    lead:
      "Eight lines. Send them in one message and the reply can be a quotation " +
      "rather than a list of questions.",
    items: [
      "The arrival date.",
      "The flight number, and the scheduled arrival time.",
      "The town — Peschiera, Lazise, Bardolino, Sirmione or Desenzano — not “Lake Garda”.",
      "The full address of the hotel or accommodation.",
      "How many passengers, adults and children separately.",
      "Hold cases and cabin bags counted separately, plus anything oversized.",
      "Child seats or any other requirement, with the children's ages.",
      "Whether you also want the return journey to the airport.",
    ],
    note:
      "Accurate details let the operator prepare a quotation for the right " +
      "vehicle rather than a cautious one. Asking for a child seat is a request, " +
      "not a confirmation: whether one is available for your journey is answered " +
      "in the reply.",
  },

  ret: {
    id: "return",
    eyebrow: "Going home",
    heading: "Lake Garda back to Verona Airport",
    lead:
      "The return is a different booking with a different anxiety. On the way in " +
      "the flight has already landed; on the way out it leaves without you.",
    paragraphs: [
      "So the planning runs backwards from the departure time, and the pickup is agreed with the operator rather than chosen from a table on this page. We publish no recommended buffer and no journey duration, because both depend on the town, the hour and the day — and a buffer invented here is the one number a traveller would most regret trusting.",
      "The other half of the return is the part people forget: how the car reaches you on the morning you leave. At a lakefront hotel with its own forecourt that is nothing. Inside Sirmione's historic centre it is the same access question as on arrival, answered in the same place — and it is easier to settle a week before than at seven in the morning with cases in the hall.",
    ],
    items: [
      "The departure date and the flight number.",
      "The scheduled departure time from Verona.",
      "The full pickup address, and the town.",
      "Anything the property has told you about where a car can wait.",
      "How many passengers and how much luggage, counted as before.",
      "Whether this is a return leg of an arrival we have already quoted.",
    ],
    cta: "Request a return quotation",
    note:
      "Agree the pickup time with the operator for your specific flight and " +
      "journey. If we quoted your arrival, say so when you ask: it is one " +
      "conversation rather than two unconnected bookings.",
  },

  transport: {
    id: "alternatives",
    eyebrow: "An honest comparison",
    heading: "When a private transfer is worth it, and when it is not",
    lead:
      "We are not going to tell you this is always the right choice. It is the " +
      "right choice for some arrivals and an expensive habit for others.",
    columns: [
      {
        id: "private",
        heading: "A private transfer suits",
        body:
          "Arrivals where the luggage, the group or the address makes a connection awkward rather than merely slower.",
        points: [
          "Several suitcases, where every change of vehicle has to be carried.",
          "Families with young children, car seats and the patience budget that comes with them.",
          "A group travelling together, where splitting across services costs more than it saves.",
          "Accommodation away from a station or a bus stop, which is most of the lake's shoreline.",
          "Late arrivals, and anyone who would rather have the onward journey settled before boarding.",
        ],
      },
      {
        id: "other",
        heading: "Other options may suit better",
        body:
          "Journeys where the public network happens to go where you are going, and you are travelling light.",
        points: [
          "Two people with cabin bags and no fixed schedule.",
          "A stay beside a station, where the last part of the trip is a short walk.",
          "Travellers for whom the cost matters more than the door-to-door convenience.",
          "Anyone whose plans are still moving, where a flexible ticket beats a booked car.",
        ],
      },
    ],
    note:
      "Two things are worth separating before you compare. The Airlink, the " +
      "airport's combined train-and-bus service, goes to Verona Porta Nuova \u2014 " +
      "so it answers the question of reaching Verona's station, not the question " +
      "of reaching a town on the lake. ATV does run a seasonal bus that reaches " +
      "the lake, route 482, which it describes as hourly in its operating " +
      "season; it was not running when this page was written, it serves stops " +
      "rather than addresses, and it will not take you and your cases to a hotel " +
      "door. We publish no timetable, fare or journey time for either service, " +
      "and no claim that a transfer is faster or cheaper.",
    sources: [airlinkEn, atvEn],
  },

  confirm: {
    id: "confirm",
    heading: "What to check before you send the request",
    lead:
      "Most transfer problems are one of these, decided weeks earlier and " +
      "noticed on the day.",
    items: [
      "The airport is Verona Villafranca (VRN) — not Venice, Treviso or Bergamo.",
      "You have named one of the five towns, and it is the town your booking actually says.",
      "The address is the full one, including anything the property said about car access.",
      "The date is the local arrival date, not the date you left home.",
      "The flight number and scheduled time are the current ones, after any airline change.",
      "The passenger count includes children, with their ages.",
      "The luggage is counted rather than estimated.",
      "Any child seat or special requirement is stated as a request to be confirmed.",
      "The return journey is included in the same message if you need one.",
      "If the address is inside Sirmione's historic centre, you have said so.",
    ],
    note:
      "The last line is the one that most often changes an answer. Everything " +
      "else affects the vehicle and the timing; that one affects where the " +
      "journey can end.",
  },

  process: {
    id: "process",
    eyebrow: "What happens next",
    heading: "How the quotation works",
    lead:
      "Four steps, and none of them takes your card details. This is an enquiry " +
      "service, so the first reply is a price for your journey rather than a " +
      "confirmation.",
    steps: [
      {
        title: "You send the request",
        body:
          "The quotation form takes the journey, the date and the passenger details. The more of the checklist above it carries, the fewer questions come back.",
      },
      {
        title: "We pass it to a licensed local operator",
        body:
          "We are not the operator. The journey is arranged with an independent licensed company that serves the town you named.",
      },
      {
        title: "A written quotation comes back",
        body:
          "For your journey, your vehicle and your luggage — not a band from a price list. This is the point to ask about anything the page has deliberately left to the operator: the meeting point, the access arrangement, a child seat.",
      },
      {
        title: "You confirm, or you do not",
        body:
          "Nothing is booked until you agree the quotation. We publish no instant confirmation and no guaranteed availability, because neither would be true.",
      },
    ],
    note:
      "If anything in the reply does not match what you asked for, say so before " +
      "confirming. A quotation is easy to correct; an arrival is not.",
  },

  related: {
    id: "related",
    eyebrow: "Related",
    heading: "The lake, the airport and the region",
    lead: "Pages that exist today, each written for its own purpose.",
    items: [
      {
        id: "lake-garda",
        page: "lake-garda",
        label: "Lake Garda transfers",
        detail: "The five towns in more detail, and why the lake is not one destination.",
      },
      {
        id: "verona-airport",
        page: "verona-airport",
        label: "Verona Villafranca Airport (VRN)",
        detail: "The airport itself, the run into the city, and what the Airlink does not solve.",
      },
      {
        id: "route-verona-sirmione",
        page: "route-verona-sirmione",
        label: "Verona to Sirmione",
        detail: "The same destination from the city instead of the airport, with its access rules in full.",
      },
      {
        id: "route-vrn-verona",
        page: "route-vrn-verona",
        label: "Verona Airport to Verona",
        detail: "If the city, not the lake, is where you are heading first.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfers in Verona",
        detail: "The city at the other end of the airport road, and its own winter restriction.",
      },
      {
        id: "route-venice-verona",
        page: "route-venice-verona",
        label: "Venice to Verona",
        detail: "If the lake follows a stay in Venice rather than a flight.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Questions",
    heading: "Asked about Verona Airport and Lake Garda",
    lead: "Short answers first, with the reasoning after.",
    items: [
      {
        question: "Can I book a private transfer from Verona Airport to Lake Garda?",
        answer:
          "Yes, to five confirmed towns: Peschiera del Garda, Lazise, Bardolino, " +
          "Sirmione and Desenzano del Garda. Send the flight, the date, the town " +
          "and the full address, and a licensed local operator returns a written " +
          "quotation for that journey. Name the town rather than the lake — the " +
          "shoreline crosses two provinces and a quotation cannot be prepared for " +
          "it as a whole.",
      },
      {
        question: "Which Lake Garda towns do you serve from Verona Airport?",
        answer:
          "Peschiera del Garda, Lazise, Bardolino, Sirmione and Desenzano del " +
          "Garda. That is the confirmed list and it is deliberately short: the " +
          "rest of the shoreline is not included. If your accommodation is " +
          "elsewhere on the lake, ask and the answer will be about that place " +
          "specifically rather than about Lake Garda in general.",
      },
      {
        question: "Can I arrange a transfer from Verona Airport to Peschiera del Garda or Desenzano?",
        answer:
          "Both, and it is worth knowing they sit on opposite sides of the lake's " +
          "foot in different administrations — Peschiera publishes Regione Veneto " +
          "with VR in its address, while Desenzano publishes the Provincia di " +
          "Brescia. They are two different journeys, so the town name belongs in " +
          "the request.",
      },
      {
        question: "What about Lazise and Bardolino?",
        answer:
          "Both are confirmed, and for both the useful detail is the street " +
          "rather than the town. Much of what is called Lazise sits back from the " +
          "water, and Bardolino is a wine denomination as well as a town, so some " +
          "arrivals there are to a producer in the hills rather than to a hotel on " +
          "the promenade. Send the full address either way.",
      },
      {
        question: "Can a private transfer take me into Sirmione's historic centre?",
        answer:
          "Only to carry residents, people living there or people staying there — " +
          "the Comune's Allegato C permits taxi and NCC entry on that condition, " +
          "across a single period covering weekdays and holidays, 00:00 to 24:00. " +
          "Separately, the ordinance forbids circulation to categories not " +
          "included in or authorised under its management rules and requires " +
          "authorised vehicles to carry a pass from the Comune's ZTL traffic " +
          "office — and those rules are not published separately, so we do not " +
          "state what any particular vehicle needs. Where you can actually be set " +
          "down is confirmed by the operator for your booking.",
      },
      {
        question: "Can the vehicle reach my hotel entrance?",
        answer:
          "Sometimes, and we will not promise it before seeing the address. " +
          "Lakeside towns have old centres and lakefront promenades closed to " +
          "traffic, and being permitted along a street is not the same as being " +
          "able to stop on it while luggage comes out. Send the address and the " +
          "operator will tell you where the journey can realistically end.",
      },
      {
        question: "Can I book a return transfer from Lake Garda to Verona Airport?",
        answer:
          "Yes, and asking for it in the same message as the arrival is easier " +
          "than treating it as a second booking. Send the departure date, the " +
          "flight number and scheduled departure time, and the full pickup " +
          "address. The pickup time is agreed with the operator for your flight " +
          "and journey — we publish no recommended buffer, because the honest one " +
          "depends on your town and your hour.",
      },
      {
        question: "What information should I provide when requesting a quotation?",
        answer:
          "The arrival or departure date, the flight number and scheduled time, " +
          "the town, the full accommodation address, the number of passengers " +
          "with children's ages, the luggage counted by type, any child seat or " +
          "special requirement, and whether you need the return. Accurate details " +
          "let the operator quote the right vehicle rather than a cautious one.",
      },
      {
        question: "Can I travel with several suitcases, or request a child seat?",
        answer:
          "Count the cases and the cabin bags separately in your request, and ask " +
          "for the seat with the child's age. Both are requests rather than " +
          "confirmations: the vehicle that suits the load, and whether a seat is " +
          "available for your journey, are answered in the quotation rather than " +
          "assumed here.",
      },
      {
        question: "Is a private transfer better than public transport to the lake?",
        answer:
          "It depends on your luggage, your group and your address, and we are " +
          "not going to claim it is always faster or cheaper. One thing is worth " +
          "separating though: the airport's Airlink service runs to Verona Porta " +
          "Nuova, so it answers the question of reaching Verona's station rather " +
          "than reaching a town on the lake.",
      },
      {
        question: "How close is Verona Airport to Lake Garda?",
        answer:
          "We publish no distance or journey time, for any of the five towns. " +
          "What can be said is that the airport lies about 10 kilometres " +
          "south-west of Verona, in the comune of Villafranca di Verona, which " +
          "puts it on the side of the city nearer the lake's southern and eastern " +
          "shores. The drive itself depends on the town, the hour and the address.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Name the town, send the flight",
    body:
      "Those two lines turn a Lake Garda enquiry into a quotation for a real " +
      "journey: one of five confirmed towns, and the arrival we are planning " +
      "around. Add the address, the passengers and the luggage, and say whether " +
      "you need the return as well. The reply comes back in writing before " +
      "anything is confirmed.",
    primaryCta: "Request a quotation",
    secondaryCta: { label: "Lake Garda transfers", page: "lake-garda" },
    note:
      "Journeys are arranged with independent licensed operators and quoted " +
      "individually. We do not own vehicles, employ drivers directly, publish " +
      "prices, or offer access to any restricted street.",
  },
};

const it: VrnGardaRoute = {
  meta: {
    title: "Aeroporto di Verona – Lago di Garda: transfer privati",
    description:
      "Transfer privati dall'aeroporto di Verona a cinque località confermate del " +
      "Lago di Garda, e il ritorno per il volo. Indicate il paese.",
  },
  breadcrumbLabel: "Percorso di navigazione",

  hero: {
    from: "Aeroporto di Verona (VRN)",
    to: "Lago di Garda",
    eyebrow: "Tratta",
    h1: "Dall'aeroporto di Verona al Lago di Garda",
    lead:
      "Siete atterrati a Verona, le valigie sono fuori dal nastro e la conferma " +
      "che avete in tasca indica un paese, non un lago. È la parte da chiarire " +
      "prima di partire: organizziamo transfer privati verso cinque località " +
      "confermate del Lago di Garda, e quale indicate cambia la strada, la " +
      "provincia e a volte quanto un'auto possa avvicinarsi.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: "Transfer sul Lago di Garda",
    note:
      "Le cinque località sono Peschiera del Garda, Lazise, Bardolino, Sirmione e " +
      "Desenzano del Garda. Organizziamo questi viaggi con operatori locali " +
      "autorizzati: non possediamo veicoli e non impieghiamo direttamente gli " +
      "autisti. In questa pagina non compaiono prezzi, durate o distanze, e nulla " +
      "qui costituisce un'offerta di accesso a una via soggetta a limitazioni.",
  },

  howItWorks: {
    id: "how-it-works",
    eyebrow: "Dall'atterraggio alla partenza",
    heading: "Come si organizza davvero un transfer dall'aeroporto al lago",
    lead:
      "Non c'è nulla di complicato, ma si organizza prima e non si trova " +
      "all'arrivo: il preventivo nasce dai dettagli che inviate.",
    paragraphs: [
      "Verona Villafranca si trova circa 10 chilometri a sud-ovest di Verona, nel comune di Villafranca di Verona: il lato della città giusto per le sponde meridionale e orientale del lago. È tutta la buona notizia geografica, ed è il motivo per cui questo è l'aeroporto scelto da chi va al Garda.",
      "Quello che segue è una richiesta, non un acquisto. Inviate volo, data, paese e indirizzo, e l'operatore risponde con un preventivo scritto per quel viaggio preciso. In questa pagina non c'è un listino da cui scegliere, perché il prezzo dipende dalla località, dal veicolo che servono gruppo e bagagli e dall'ora: una cifra inventata per sembrare competitiva verrebbe solo rinegoziata dopo.",
    ],
    terms: [
      {
        term: "Perché il paese viene prima di tutto",
        detail:
          "«Lago di Garda» è una cinquantina di chilometri di riva su due province. Peschiera e Desenzano non sono lo stesso tragitto, e un preventivo non si prepara per una riva.",
      },
      {
        term: "Perché serve il numero del volo",
        detail:
          "Identifica l'arrivo attorno a cui si pianifica il viaggio. Qui non promettiamo nulla su come venga gestito un ritardo: lo deve dichiarare l'operatore, e vale la pena chiederglielo.",
      },
      {
        term: "Perché i bagagli si contano, non si stimano",
        detail:
          "Valigie da stiva e bagagli a mano occupano spazi diversi, e un gruppo che sulla carta entra in un'auto può non entrarci a baule pieno. Contarli è ciò che rende giusto il veicolo preventivato.",
      },
      {
        term: "Che cosa non possiamo definire da qui",
        detail:
          "Dove esattamente l'auto vi incontra in aeroporto e dove esattamente può fermarsi all'arrivo. Sono entrambe cose che conferma l'operatore, e sono le più richieste di tutte.",
      },
    ],
    note:
      "Dove l'auto vi incontra in aeroporto e quanto possa attendere si " +
      "definiscono nella richiesta e non si pubblicano qui: dipendono " +
      "dall'operatore e dalle condizioni in vigore quando viaggiate. Chiedeteli " +
      "per iscritto insieme al preventivo e li avrete prima di partire, non sul " +
      "marciapiede.",
  },

  towns: {
    id: "towns",
    eyebrow: "Dove state andando davvero",
    heading: "Le cinque località confermate, e che cosa cambia in ciascuna",
    lead:
      "Sono le destinazioni confermate dai nostri operatori. Non sono " +
      "interscambiabili: due sono in Veneto, due in provincia di Brescia e una ha " +
      "una barriera all'ingresso del centro storico.",
    items: [
      {
        id: "peschiera",
        name: "Peschiera del Garda",
        comune: "Il suo comune pubblica «Regione Veneto» e indica VR nell'indirizzo",
        suits:
          "Chi alloggia nell'angolo sud-orientale del lago e chiunque abbia programmi legati alla ferrovia: Peschiera è la principale porta ferroviaria di questa sponda, perciò va bene anche per chi arriva in aereo e riparte in treno.",
        matters:
          "Il paese è costruito attorno a un centro fortificato attraversato dall'acqua, quindi «Peschiera» comprende indirizzi di natura molto diversa. L'indirizzo completo è ciò che dice all'operatore quale sia il vostro.",
      },
      {
        id: "lazise",
        name: "Lazise",
        comune: "Sulla sponda veneta, tra Peschiera del Garda e Bardolino",
        suits:
          "Soggiorni un po' a nord di Peschiera, ed è la località dell'elenco in cui «dove esattamente?» conta di più: molta della ricettività venduta come Lazise è distribuita nell'entroterra tra campeggi, residence e villaggi turistici, e non raccolta in un unico centro.",
        matters:
          "L'indirizzo completo della struttura, e il nome con cui si presenta se è diverso dalla via. Qui due posti a pochi minuti l'uno dall'altro possono essere un hotel sul lungolago e un villaggio turistico lungo una strada secondaria: il nome da solo non dice all'operatore quale sia il vostro.",
      },
      {
        id: "bardolino",
        name: "Bardolino",
        comune: "Il suo comune pubblica «Regione Veneto»; sul sito non indica la provincia",
        suits:
          "Soggiorni sul lungolago più a nord lungo la sponda orientale, e chi viene per una cantina invece che per un albergo: il nome è anche una denominazione vinicola, quindi non tutti gli arrivi sono a un indirizzo con una reception.",
        matters:
          "Se la destinazione è un produttore o un agriturismo e non un hotel, ditelo e inviate l'indirizzo. Si trovano nelle colline dietro il paese e sono un tragitto diverso dal lungolago.",
      },
      {
        id: "sirmione",
        name: "Sirmione",
        comune: "La sua ordinanza porta in testa Comune di Sirmione, Provincia di Brescia",
        suits:
          "Soggiorni sulla penisola e attorno alla sua base, e qui la risposta a «l'auto può portarci alla porta?» è davvero complicata. La sezione successiva parla solo di questo.",
        matters:
          "Se il vostro indirizzo è dentro il centro storico cinto da mura e se pernottate in paese. Entrambe le cose cambiano ciò che è consentito, e potete dirle solo voi.",
      },
      {
        id: "desenzano",
        name: "Desenzano del Garda",
        comune: "Il suo comune pubblica la Provincia di Brescia; l'indirizzo indica 25015 e (Bs)",
        suits:
          "L'angolo sud-occidentale, in Lombardia. Il maggiore dei paesi meridionali, un altro punto d'arrivo ferroviario e la scelta abituale di chi vuole una città con una vita propria invece di una località turistica.",
        matters:
          "Si trova sul lato opposto del basso lago rispetto a Peschiera, in un'altra provincia. Chi prenota «Lago di Garda» intendendo Desenzano è il più esposto a questa sorpresa: per questo il nome del paese va messo nella richiesta.",
      },
    ],
    note:
      "Nulla di quanto abbiamo letto afferma che uno di questi cinque comuni si " +
      "trovi in Trentino: questa pagina nomina quindi due regioni e non tre. Se la " +
      "vostra struttura è più a nord sul lago, chiedete invece di presumere che " +
      "rientri nell'elenco: la risposta riguarderà quella località in particolare.",
    sources: [comuniIt],
  },

  sirmione: {
    id: "sirmione-access",
    eyebrow: "L'unica località che va spiegata",
    heading: "Sirmione: quattro cose diverse, e una sola riguarda noi",
    lead:
      "I nostri operatori servono Sirmione. È confermato, e non è la stessa " +
      "affermazione di «l'auto vi porterà alla porta dell'albergo». Il resto lo " +
      "pubblica il Comune, e conviene leggerlo in ordine.",
    chain: [
      {
        title: "Uno. Il viaggio lo possiamo organizzare",
        body:
          "Sirmione è una delle cinque località confermate: un transfer dall'aeroporto di Verona si può organizzare e preventivare. È l'unico anello della catena che spetta a noi confermare.",
      },
      {
        title: "Due. Le auto a noleggio possono entrare, a una condizione",
        body:
          "L'Allegato C del Comune assegna a taxi e auto a noleggio con conducente un periodo unico — feriali e festivi — dalle 00:00 alle 24:00, con ingresso consentito solo per trasportare residenti, dimoranti e soggiornanti. Se soggiornate a Sirmione, quella condizione riguarda voi ed è soddisfatta. Se venite in giornata, no.",
      },
      {
        title: "Tre. Essere una categoria ammessa non significa avere il contrassegno",
        body:
          "L'ordinanza vieta nella zona la circolazione, dinamica e statica, alle categorie di veicoli non comprese o non autorizzate ai sensi del disciplinare di gestione approvato contestualmente, e impone ai veicoli autorizzati di essere muniti di contrassegno rilasciato dall'Ufficio Traffico ZTL del Comune. Quel disciplinare non è pubblicato a parte: se una determinata auto a noleggio ne abbia bisogno è una domanda per l'operatore e non per questa pagina.",
      },
      {
        title: "Quattro. Dove scenderete davvero",
        body:
          "Lo conferma l'operatore, non lo pubblichiamo noi. L'ordinanza descrive quali categorie siano ammesse e a quale condizione; non stabilisce che un determinato vicolo sia percorribile, né che ci sia dove attendere, né di che cosa disponga un dato autista il giorno in cui viaggiate.",
      },
    ],
    caution: {
      heading: "Che cosa non promettiamo",
      body:
        "Che il veicolo abbia, quel giorno, quanto la zona richiede, né che arrivi " +
        "all'ingresso del vostro albergo, né dove esattamente scenderete. La " +
        "copertura della località è confermata; il resto non spetta a noi " +
        "prometterlo. Quando scrivete, dite che alloggiate dentro le mura e " +
        "fatevi confermare per iscritto dall'operatore come saranno gestiti " +
        "l'accesso e la discesa per la vostra prenotazione, prima di partire.",
    },
    sources: [sirmioneOrdIt, sirmionePermitIt],
  },

  compare: {
    id: "compare",
    eyebrow: "Un aeroporto, cinque destinazioni",
    heading: "Perché il nome del paese conta più di quanto sembri",
    lead:
      "Lo stesso volo, lo stesso aeroporto, cinque viaggi diversi. È la tabella " +
      "da guardare prima di scrivere la richiesta.",
    caption:
      "Le cinque destinazioni confermate sul Lago di Garda dall'aeroporto di Verona, con ciò che pubblica ciascun comune e il dettaglio che cambia il preventivo",
    columns: ["Località", "Sponda e amministrazione", "Il dettaglio che conta di più"],
    rows: [
      {
        id: "peschiera",
        cells: [
          "Peschiera del Garda",
          "Angolo sud-orientale; Regione Veneto, VR",
          "L'indirizzo completo: centro e periferia sono arrivi diversi",
        ],
      },
      {
        id: "lazise",
        cells: [
          "Lazise",
          "Sponda veneta, tra Peschiera e Bardolino",
          "Se la struttura è sul lungolago o nell'entroterra",
        ],
      },
      {
        id: "bardolino",
        cells: [
          "Bardolino",
          "Sponda orientale; Regione Veneto",
          "Se andate in albergo o da un produttore nelle colline dietro",
        ],
      },
      {
        id: "sirmione",
        cells: [
          "Sirmione",
          "Penisola meridionale; Provincia di Brescia",
          "Se l'indirizzo è dentro le mura e se pernottate",
        ],
      },
      {
        id: "desenzano",
        cells: [
          "Desenzano del Garda",
          "Angolo sud-occidentale; Provincia di Brescia",
          "Che è una provincia diversa da Peschiera, e un tragitto diverso",
        ],
      },
    ],
    note:
      "In questa tabella non compaiono distanze, durate o prezzi, ed è una scelta " +
      "e non una dimenticanza. Dipendono dall'indirizzo, dall'ora e dal traffico, " +
      "e una cifra pubblicata qui sarebbe una supposizione travestita da " +
      "informazione. L'operatore preventiva il viaggio che descrivete.",
  },

  arrival: {
    id: "arrival",
    eyebrow: "Arrivare",
    heading: "Che cosa inviare per il transfer di arrivo",
    lead:
      "Otto righe. Inviatele in un unico messaggio e la risposta potrà essere un " +
      "preventivo invece di un elenco di domande.",
    items: [
      "La data di arrivo.",
      "Il numero del volo e l'orario previsto di arrivo.",
      "La località — Peschiera, Lazise, Bardolino, Sirmione o Desenzano — non «Lago di Garda».",
      "L'indirizzo completo dell'albergo o della struttura.",
      "Quanti passeggeri, adulti e bambini separatamente.",
      "Valigie da stiva e bagagli a mano contati a parte, più tutto ciò che è fuori misura.",
      "Seggiolini o altre esigenze particolari, con le età dei bambini.",
      "Se desiderate anche il viaggio di ritorno in aeroporto.",
    ],
    note:
      "Dettagli precisi permettono all'operatore di preventivare il veicolo " +
      "giusto invece di uno prudenziale. Chiedere un seggiolino è una richiesta, " +
      "non una conferma: se sia disponibile per il vostro viaggio ve lo dice la " +
      "risposta.",
  },

  ret: {
    id: "return",
    eyebrow: "Tornare",
    heading: "Dal Lago di Garda all'aeroporto di Verona",
    lead:
      "Il ritorno è un'altra prenotazione con un'altra preoccupazione. " +
      "All'andata il volo è già atterrato; al ritorno parte senza di voi.",
    paragraphs: [
      "La pianificazione va quindi all'indietro, dall'orario di partenza, e l'ora del prelievo si concorda con l'operatore invece di scegliersi da una tabella in questa pagina. Non pubblichiamo né un margine consigliato né una durata, perché dipendono dalla località, dall'ora e dal giorno — e un margine inventato qui è il numero che un viaggiatore rimpiangerebbe di più di aver creduto.",
      "L'altra metà del ritorno è quella che si dimentica: come l'auto arriva a voi la mattina della partenza. In un albergo sul lungolago con uno spiazzo proprio non è nulla. Dentro il centro storico di Sirmione è la stessa questione d'accesso dell'arrivo, e si risolve nello stesso posto: ed è più facile sistemarla una settimana prima che alle sette del mattino con le valigie nell'ingresso.",
    ],
    items: [
      "La data di partenza e il numero del volo.",
      "L'orario previsto di partenza da Verona.",
      "L'indirizzo completo di prelievo e la località.",
      "Quanto la struttura vi ha detto su dove un'auto possa attendere.",
      "Quanti passeggeri e quanti bagagli, contati come prima.",
      "Se è il ritorno di un arrivo che vi abbiamo già preventivato.",
    ],
    cta: "Richiedi un preventivo per il ritorno",
    note:
      "Concordate l'ora del prelievo con l'operatore per il vostro volo e il " +
      "vostro tragitto. Se abbiamo preventivato l'andata, segnalatelo quando " +
      "scrivete: è una conversazione sola invece di due prenotazioni slegate.",
  },

  transport: {
    id: "alternatives",
    eyebrow: "Un confronto onesto",
    heading: "Quando conviene un transfer privato e quando no",
    lead:
      "Non vi diremo che è sempre la scelta giusta. Lo è per certi arrivi ed è " +
      "un'abitudine costosa per altri.",
    columns: [
      {
        id: "private",
        heading: "Il transfer privato conviene",
        body:
          "Negli arrivi in cui bagagli, gruppo o indirizzo rendono una coincidenza scomoda e non soltanto più lenta.",
        points: [
          "Più valigie, dove ogni cambio di mezzo va portato a mano.",
          "Famiglie con bambini piccoli, seggiolini e la pazienza che ne consegue.",
          "Un gruppo che viaggia insieme, dove dividersi tra più servizi costa più di quanto risparmi.",
          "Strutture lontane da una stazione o da una fermata: cioè gran parte della riva del lago.",
          "Arrivi in orari tardi, e chiunque preferisca avere il proseguimento sistemato prima di imbarcarsi.",
        ],
      },
      {
        id: "other",
        heading: "Altre soluzioni possono convenire di più",
        body:
          "Nei viaggi in cui la rete pubblica passa proprio dove andate e viaggiate leggeri.",
        points: [
          "Due persone con bagaglio a mano e nessun orario fisso.",
          "Un soggiorno accanto a una stazione, dove l'ultimo tratto è una breve camminata.",
          "Chi dà più peso al costo che alla comodità porta a porta.",
          "Chi ha programmi ancora in movimento, dove un biglietto flessibile batte un'auto prenotata.",
        ],
      },
    ],
    note:
      "Prima di confrontare conviene distinguere due cose. L'Airlink, il " +
      "servizio combinato treno più bus dell'aeroporto, arriva a Verona Porta " +
      "Nuova: risolve quindi il problema di raggiungere la stazione di Verona, " +
      "non quello di raggiungere una località sul lago. ATV gestisce invece un " +
      "bus stagionale che arriva al lago, la linea 482, descritta come oraria " +
      "nella stagione di esercizio: non era in servizio quando questa pagina è " +
      "stata scritta, serve fermate e non indirizzi, e non vi porterà con le " +
      "valigie alla porta di un albergo. Qui non pubblichiamo orari, tariffe o " +
      "durate di nessuno dei due servizi, né affermiamo che un transfer sia " +
      "più rapido o più economico.",
    sources: [airlinkIt, atvIt],
  },

  confirm: {
    id: "confirm",
    heading: "Che cosa verificare prima di inviare la richiesta",
    lead:
      "Quasi tutti i problemi di un transfer sono uno di questi, deciso settimane " +
      "prima e scoperto il giorno stesso.",
    items: [
      "L'aeroporto è Verona Villafranca (VRN), non Venezia, Treviso o Bergamo.",
      "Avete indicato una delle cinque località, ed è quella che dice davvero la vostra prenotazione.",
      "L'indirizzo è completo, con quanto la struttura ha detto sull'accesso in auto.",
      "La data è quella dell'arrivo in Italia, non quella in cui siete partiti da casa.",
      "Numero del volo e orario previsto sono quelli attuali, dopo eventuali cambi della compagnia.",
      "Il numero dei passeggeri include i bambini, con le loro età.",
      "I bagagli sono contati e non stimati.",
      "Eventuali seggiolini o esigenze particolari sono indicati come richiesta da confermare.",
      "Il viaggio di ritorno è incluso nello stesso messaggio, se vi serve.",
      "Se l'indirizzo è dentro il centro storico di Sirmione, lo avete detto.",
    ],
    note:
      "L'ultima riga è quella che più spesso cambia una risposta. Tutte le altre " +
      "incidono su veicolo e orari; quella incide su dove possa finire il viaggio.",
  },

  process: {
    id: "process",
    eyebrow: "Che cosa succede dopo",
    heading: "Come funziona il preventivo",
    lead:
      "Quattro passaggi, e in nessuno vi chiediamo la carta. Questo è un servizio " +
      "di richiesta: la prima risposta è un prezzo per il vostro viaggio, non una " +
      "conferma.",
    steps: [
      {
        title: "Inviate la richiesta",
        body:
          "Il modulo raccoglie il viaggio, la data e i dati dei passeggeri. Più cose della lista qui sopra contiene, meno domande torneranno indietro.",
      },
      {
        title: "La passiamo a un operatore locale autorizzato",
        body:
          "Non siamo noi l'operatore. Il viaggio viene organizzato con un'azienda indipendente e autorizzata che serve la località che avete indicato.",
      },
      {
        title: "Torna un preventivo scritto",
        body:
          "Per il vostro viaggio, il vostro veicolo e i vostri bagagli, non per una fascia di listino. È il momento di chiedere tutto ciò che questa pagina lascia volutamente all'operatore: il punto d'incontro, l'accesso, un seggiolino.",
      },
      {
        title: "Confermate, oppure no",
        body:
          "Nulla è prenotato finché non accettate il preventivo. Non pubblichiamo conferme immediate né disponibilità garantite, perché non sarebbe vero.",
      },
    ],
    note:
      "Se qualcosa nella risposta non corrisponde a ciò che avete chiesto, " +
      "segnalatelo prima di confermare. Un preventivo si corregge facilmente; un " +
      "arrivo no.",
  },

  related: {
    id: "related",
    eyebrow: "Collegate",
    heading: "Il lago, l'aeroporto e la regione",
    lead: "Pagine che esistono oggi, ciascuna scritta per il proprio scopo.",
    items: [
      {
        id: "lake-garda",
        page: "lake-garda",
        label: "Transfer sul Lago di Garda",
        detail: "Le cinque località nel dettaglio, e perché il lago non è una destinazione sola.",
      },
      {
        id: "verona-airport",
        page: "verona-airport",
        label: "Aeroporto di Verona Villafranca (VRN)",
        detail: "L'aeroporto, il tragitto verso la città e che cosa l'Airlink non risolve.",
      },
      {
        id: "route-verona-sirmione",
        page: "route-verona-sirmione",
        label: "Da Verona a Sirmione",
        detail: "La stessa destinazione dalla città invece che dall'aeroporto, con le regole d'accesso per esteso.",
      },
      {
        id: "route-vrn-verona",
        page: "route-vrn-verona",
        label: "Dall'aeroporto di Verona alla città",
        detail: "Se prima del lago la destinazione è la città.",
      },
      {
        id: "verona",
        page: "verona",
        label: "Transfer a Verona",
        detail: "La città all'altro capo della strada dell'aeroporto, con la sua limitazione invernale.",
      },
      {
        id: "route-venice-verona",
        page: "route-venice-verona",
        label: "Da Venezia a Verona",
        detail: "Se il lago segue un soggiorno a Venezia invece di un volo.",
      },
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "Domande",
    heading: "Le domande su aeroporto di Verona e Lago di Garda",
    lead: "Prima la risposta breve, poi il perché.",
    items: [
      {
        question: "Posso prenotare un transfer privato dall'aeroporto di Verona al Lago di Garda?",
        answer:
          "Sì, verso cinque località confermate: Peschiera del Garda, Lazise, " +
          "Bardolino, Sirmione e Desenzano del Garda. Inviate volo, data, " +
          "località e indirizzo completo, e un operatore locale autorizzato " +
          "risponde con un preventivo scritto per quel viaggio. Indicate il paese " +
          "e non il lago: la riva attraversa due province e per l'insieme non si " +
          "può preparare un preventivo.",
      },
      {
        question: "Quali località del Lago di Garda servite dall'aeroporto di Verona?",
        answer:
          "Peschiera del Garda, Lazise, Bardolino, Sirmione e Desenzano del " +
          "Garda. È l'elenco confermato ed è volutamente breve: il resto della " +
          "riva non è compreso. Se la vostra struttura è altrove sul lago, " +
          "chiedete: la risposta riguarderà quel luogo in particolare e non il " +
          "Lago di Garda in generale.",
      },
      {
        question: "Posso organizzare un transfer per Peschiera del Garda o per Desenzano?",
        answer:
          "Entrambi, e conviene sapere che si trovano su lati opposti del basso " +
          "lago e in amministrazioni diverse: Peschiera pubblica Regione Veneto " +
          "con VR nell'indirizzo, Desenzano la Provincia di Brescia. Sono due " +
          "viaggi diversi, quindi il nome della località va nella richiesta.",
      },
      {
        question: "E per Lazise e Bardolino?",
        answer:
          "Entrambe sono confermate, e per entrambe il dettaglio utile è la via " +
          "più che il paese. Molto di ciò che si chiama Lazise sta nell'entroterra, " +
          "e Bardolino è anche una denominazione vinicola: alcuni arrivi sono da " +
          "un produttore nelle colline e non in un albergo sul lungolago. In " +
          "entrambi i casi inviate l'indirizzo completo.",
      },
      {
        question: "Un transfer privato può entrare nel centro storico di Sirmione?",
        answer:
          "Solo per trasportare residenti, dimoranti o soggiornanti: l'Allegato C " +
          "del Comune consente l'ingresso a taxi e NCC a quella condizione, in un " +
          "periodo unico valido feriali e festivi dalle 00:00 alle 24:00. A parte, " +
          "l'ordinanza vieta la circolazione alle categorie non comprese o non " +
          "autorizzate ai sensi del proprio disciplinare di gestione e impone ai " +
          "veicoli autorizzati il contrassegno dell'Ufficio Traffico ZTL del " +
          "Comune: quel disciplinare non è pubblicato a parte, quindi non diciamo " +
          "di che cosa abbia bisogno un veicolo specifico. Dove potrete " +
          "effettivamente scendere lo conferma l'operatore per la vostra " +
          "prenotazione.",
      },
      {
        question: "L'auto può arrivare all'ingresso del mio albergo?",
        answer:
          "A volte, e non lo promettiamo prima di vedere l'indirizzo. I paesi sul " +
          "lago hanno centri antichi e lungolaghi chiusi al traffico, ed essere " +
          "ammessi a percorrere una via non significa potervisi fermare mentre " +
          "scendono i bagagli. Inviate l'indirizzo e l'operatore vi dirà dove il " +
          "viaggio può realisticamente finire.",
      },
      {
        question: "Posso prenotare il ritorno dal Lago di Garda all'aeroporto di Verona?",
        answer:
          "Sì, e chiederlo nello stesso messaggio dell'andata è più semplice che " +
          "trattarlo come una seconda prenotazione. Inviate data di partenza, " +
          "numero del volo e orario previsto, e l'indirizzo completo di prelievo. " +
          "L'ora del prelievo si concorda con l'operatore per il vostro volo e il " +
          "vostro tragitto: non pubblichiamo un margine consigliato, perché quello " +
          "onesto dipende dalla vostra località e dalla vostra ora.",
      },
      {
        question: "Quali informazioni devo fornire per il preventivo?",
        answer:
          "Data di arrivo o di partenza, numero del volo e orario previsto, la " +
          "località, l'indirizzo completo della struttura, il numero di " +
          "passeggeri con le età dei bambini, i bagagli contati per tipo, " +
          "eventuali seggiolini o esigenze particolari e se vi serve il ritorno. " +
          "Dettagli precisi permettono di preventivare il veicolo giusto invece " +
          "di uno prudenziale.",
      },
      {
        question: "Posso viaggiare con più valigie o chiedere un seggiolino?",
        answer:
          "Contate valigie e bagagli a mano separatamente nella richiesta, e " +
          "chiedete il seggiolino indicando l'età del bambino. Sono richieste e " +
          "non conferme: il veicolo adatto al carico e la disponibilità di un " +
          "seggiolino per il vostro viaggio si stabiliscono nel preventivo, non " +
          "si danno per scontati qui.",
      },
      {
        question: "Conviene più un transfer privato o i mezzi pubblici?",
        answer:
          "Dipende da bagagli, gruppo e indirizzo, e non sosteniamo che sia " +
          "sempre più rapido o più economico. Una cosa va però distinta: " +
          "l'Airlink dell'aeroporto arriva a Verona Porta Nuova, quindi risolve " +
          "il problema di raggiungere la stazione di Verona e non quello di " +
          "raggiungere una località sul lago.",
      },
      {
        question: "Quanto dista l'aeroporto di Verona dal Lago di Garda?",
        answer:
          "Non pubblichiamo distanze né durate, per nessuna delle cinque " +
          "località. Si può dire che l'aeroporto si trova circa 10 chilometri a " +
          "sud-ovest di Verona, nel comune di Villafranca di Verona: il lato " +
          "della città più vicino alle sponde meridionale e orientale del lago. Il " +
          "tragitto dipende poi dalla località, dall'ora e dall'indirizzo.",
      },
    ],
  },

  closing: {
    id: "request",
    heading: "Indicate la località, inviate il volo",
    body:
      "Quelle due righe trasformano una richiesta sul Lago di Garda in un " +
      "preventivo per un viaggio reale: una delle cinque località confermate e " +
      "l'arrivo attorno a cui pianifichiamo. Aggiungete indirizzo, passeggeri e " +
      "bagagli, e dite se vi serve anche il ritorno. La risposta torna per " +
      "iscritto prima di qualsiasi conferma.",
    primaryCta: "Richiedi un preventivo",
    secondaryCta: { label: "Transfer sul Lago di Garda", page: "lake-garda" },
    note:
      "I viaggi sono organizzati con operatori locali autorizzati e preventivati " +
      "singolarmente. Non possediamo veicoli, non impieghiamo direttamente gli " +
      "autisti, non pubblichiamo prezzi e non offriamo accesso ad alcuna via " +
      "soggetta a limitazioni.",
  },
};

export const routeVrnGarda: Record<"en" | "it", VrnGardaRoute> = { en, it };
