import type { PageId } from "@/lib/routes";
import type { PageChrome, Source, Step, Term } from "../page-types";

export type {
  Cta,
  Endpoint,
  Faq,
  Meta,
  PageChrome,
  RoutePage,
  Source,
  Step,
  Term,
} from "../page-types";

/**
 * The shapes the Veneto cluster's content files satisfy.
 *
 * The type that matters most here is `EndpointSplit`, and it exists because
 * of one fact: Venice is the only city in this project where a road transfer
 * cannot finish at the address. Every Venice page has to say where a car can
 * end and what happens after that, so the distinction is modelled in the type
 * system rather than left to prose discipline — a page cannot describe a
 * destination without placing it on one side of the split.
 */

/* ── The Venice distinction, as a type ────────────────────────────────── */

export type EndpointSplit = {
  /** Places a road vehicle can actually reach. */
  road: {
    label: string;
    heading: string;
    note: string;
    items: { id: string; name: string; detail: string }[];
  };
  /** Places where the last leg is on foot or on water, and is not ours. */
  water: {
    label: string;
    heading: string;
    note: string;
    items: { id: string; name: string; detail: string }[];
  };
};

/* ── Venice hub ───────────────────────────────────────────────────────── */

export type VeniceHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    split: EndpointSplit;
  };
  why: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  arrivals: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
  /** The city access fee: real, volatile, and not a transfer matter. */
  accessFee: {
    heading: string;
    paragraphs: string[];
    source: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Verona hub: three ways in ────────────────────────────────────────── */

export type VeronaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    modes: { id: string; label: string; name: string; detail: string }[];
  };
  station: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    airlink: { heading: string; body: string };
    source: Source;
  };
  // The caution here was a refusal until 25 November 2026: no Garda town
  // could be named because coverage was unconfirmed. Coverage was then
  // confirmed for five towns, so the refusal became a pointer and the
  // section gained `link`. The heading stayed `caution` because what it
  // still carries is a limit — five named towns, not the whole lake.
  garda: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    caution: { heading: string; body: string };
    link: { page: PageId; label: string };
    /**
     * Added 26 November 2026. The section had carried an unsourced claim
     * about a seasonal airport-to-lake bus since it was written, sitting next
     * to a Trenitalia source note that covers the Airlink and nothing else -
     * so a reader could reasonably have mis-attributed it. ATV publishes the
     * service, so the claim now cites ATV. Optional, so nothing else breaks.
     */
    source?: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Venice Marco Polo ────────────────────────────────────────────────── */

export type MarcoPolo = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  facts: { label: string; value: string }[];
  factsSource: Source;
  /** The land side and the water side, as the homepage already calls them. */
  sides: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    split: EndpointSplit;
    source: Source;
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Treviso: the distance the name conceals ──────────────────────────── */

export type TrevisoAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    diagram: {
      caption: string;
      nodes: { id: string; label: string; detail: string; emphasis?: boolean }[];
      gaps: string[];
    };
  };
  identity: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    facts: { label: string; value: string }[];
    source: Source;
  };
  consequences: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Verona Villafranca: city or lake ─────────────────────────────────── */

export type VeronaAirport = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  fork: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    columns: {
      id: string;
      heading: string;
      subheading: string;
      rows: Term[];
    }[];
    /** Same reason as `VeronaHub.garda.source` above. Optional. */
    source?: Source;
  };
  airlink: {
    id: string;
    heading: string;
    paragraphs: string[];
    source: Source;
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Venice stations: two places, one name ────────────────────────────── */

export type VeniceStations = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  compare: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    columns: {
      id: string;
      heading: string;
      subheading: string;
      rows: Term[];
    }[];
    source: Source;
  };
  bridge: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Venice cruise terminals ──────────────────────────────────────────── */

/**
 * The cruise-port page, and why it is not shaped like Civitavecchia's.
 *
 * ── The problem this page exists to solve ────────────────────────────────
 * At every other cruise port on this site the question is "where in the
 * port can a car be". At Venice there is a question before that one: the
 * berth your ship uses may not be the place your cruise line checks you in,
 * and neither is necessarily somewhere a road vehicle can go. Venezia
 * Terminal Passeggeri states that a ship moored at Marghera embarks its
 * passengers at Marittima, by free dedicated shuttle. A passenger who books
 * a transfer to "Venice cruise port" has not said which of those they mean.
 *
 * So the page is built as a chain — berth, shuttle, terminal, road point,
 * destination — rather than as a description of a place. `chain` is the
 * spine; `places` exists so the five links can be told apart by name,
 * because conflating them is the actual failure mode.
 *
 * ── What the type deliberately cannot express ────────────────────────────
 * There is no field for a meeting point, and that is not an oversight. No
 * official source consulted names a pickup point for taxis, private cars or
 * NCC at any Venice cruise berth — VTP does not address it and the port
 * authority's traffic rules cover freight, not passenger cars. A field here
 * would invite someone to fill it in. `confirmWithOperator` carries the
 * honest answer instead and must not be replaced by an address.
 */
export type VeniceCruisePort = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  /** Where ships actually tie up, as the terminal operator lists them. */
  berths: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
    /**
     * Two publishers, not one. The berth list comes from the terminal
     * operator; the temporary-berth arrangement that explains why Marghera
     * is in use at all comes from the port authority. Attributing both to
     * VTP would have credited it with something it never said.
     */
    sources: Source[];
  };
  /** Ship → shuttle → terminal → road → destination, in order. */
  chain: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
    source: Source;
  };
  /** Five locations people merge into one. Named apart, on purpose. */
  places: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    confirmWithOperator: { heading: string; body: string };
  };
  /** Onward journeys, each an existing page. No invented routes. */
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
    note: string;
  };
  /** What to have ready before the gangway. */
  checklist: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: {
      id: string;
      heading: string;
      items: { id: string; label: string; detail: string }[];
    }[];
    note: string;
  };
  /** The specific errors that cost people their morning. */
  mistakes: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; wrong: string; instead: string }[];
  };
};

/* ── Lake Garda ───────────────────────────────────────────────────────── */

/**
 * The lake hub, modelled on Milan's Lake Como page and differing where the
 * lake differs.
 *
 * ── The fact the page is built on ────────────────────────────────────────
 * Lake Garda is not one administration. Each comune's own site states its
 * own position, and they do not agree with each other: Garda publishes
 * "Regione Veneto - Provincia di Verona"; Sirmione gives "Sirmione (BS)"
 * under Regione Lombardia; Desenzano links "Provincia di Brescia". A
 * traveller who books "a transfer to Lake Garda" has named a shoreline
 * spanning two regions, not a destination.
 *
 * `towns` therefore carries an `authority` field per town, quoting what
 * that comune publishes about itself rather than a tidy generalisation.
 * Where a comune's site did not state its province, the field says so —
 * that is why the field is prose and not an enum.
 *
 * ── Why `coverage` exists ────────────────────────────────────────────────
 * Until 25 November 2026 the Verona page said in print that no Garda town
 * could be named as served, because coverage had not been confirmed. It
 * now has been, for these five. `coverage` is the block that states the
 * new position plainly and keeps the old caution's honesty: coverage of a
 * town is not the same as reaching a particular door in it.
 */
export type LakeGardaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  shape: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  /** Five towns, each with what its own comune publishes about itself. */
  towns: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
    source: Source;
  };
  /** What confirmed coverage does and does not mean. */
  coverage: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    caution: { heading: string; body: string };
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};

/* ── Padua ────────────────────────────────────────────────────────────── */

/**
 * The Padua hub.
 *
 * Padua is the fourth city in this project to restrict its centre and the
 * first where "am I allowed in?" has four separate answers. The type makes
 * that structural rather than editorial: `permissions` is a ladder of tiers,
 * each with what it grants AND what it withholds, so a page cannot describe
 * one kind of permission without stating what it does not cover.
 *
 * That shape exists because of a real failure mode. Padua admits taxis and
 * hire cars with driver to the ZTL, and to the pedestrian areas inside it,
 * and names five streets where even they may not go, and controls reserved
 * lanes separately — including two camera gates on the station forecourt.
 * Conflating any two of those produces a confident sentence that is wrong.
 */
export type PaduaHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  /** The four-tier ladder. Each tier states its own limit. */
  permissions: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    tiers: {
      id: string;
      rank: string;
      name: string;
      grants: string;
      withholds: string;
    }[];
    note: string;
    sources: Source[];
  };
  /**
   * The lista bianca and the 48 hours. The page's single most distinctive
   * fact, and the one carrying an unconfirmed operational dependency, so
   * `caution` is required rather than optional.
   */
  whitelist: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    rule: { quote: string; gloss: string };
    paragraphs: string[];
    caution: { heading: string; body: string };
    source: Source;
  };
  /** Two clocks: the zone hours, and the ecological Sundays. */
  clocks: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    sundays: { heading: string; body: string; note: string };
    sources: Source[];
  };
  /** Where you are staying, and the streets no hired car may use. */
  where: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: { id: string; heading: string; subheading: string; items: Term[] }[];
    forbidden: { heading: string; body: string; streets: string[] };
    source: Source;
  };
  send: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  /**
   * Four cities, four regimes. Each row links to the page that carries the
   * citation rather than restating the rule, which is what keeps this a
   * comparison instead of four duplicated explanations.
   */
  comparison: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; city: string; page: PageId | null; rule: string }[];
    note: string;
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};

/* ── Verona Airport ↔ Lake Garda ──────────────────────────────────────── */

/**
 * The VRN ↔ Lake Garda route.
 *
 * ── Why this is not the shared `RoutePage` ───────────────────────────────
 * Every other route on this site has two endpoints. This one has one origin
 * and FIVE confirmed destinations in two provinces, one of which has a
 * barrier and an accreditation requirement the other four do not. The shared
 * `RoutePage` models `endpoints.from` and `endpoints.to` as single places,
 * so it cannot express that without either flattening the five towns into
 * prose or adding four or five optional fields to a type every route page in
 * the project shares.
 *
 * A dedicated type was the smaller change. Nothing shared is modified: the
 * page renders with the shared `HeroRoute`, `Band`, `DataTable`,
 * `Checklist`, `NumberedSteps`, `Callout`, `QuestionList`, `SourceNote` and
 * `ClosingCta`, so it keeps the route-page look and the design system while
 * carrying content those primitives can hold and `RoutePage` cannot.
 *
 * ── Why `towns` is shaped the way it is ─────────────────────────────────
 * Each town carries `comune` (what its own comune publishes about itself),
 * `suits` (who actually books it) and `matters` (the one thing that changes
 * the quotation). Five fields rather than a paragraph, because the failure
 * mode here is five interchangeable paragraphs with the name swapped — which
 * is what every competitor page does.
 *
 * ── Why `ret` is a first-class section, not a footnote ──────────────────
 * The return is a different search intent and a different booking: a flight
 * to catch rather than one already landed. It gets its own heading, its own
 * checklist and its own call to action.
 */
export type VrnGardaRoute = PageChrome & {
  hero: {
    from: string;
    to: string;
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  /** The airport arrival, and how an enquiry becomes a quotation. */
  howItWorks: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    terms: Term[];
    note: string;
  };
  /** The five confirmed towns. Not five paragraphs with the name changed. */
  towns: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: {
      id: string;
      name: string;
      comune: string;
      suits: string;
      matters: string;
    }[];
    note: string;
    sources: Source[];
  };
  /** Sirmione's access chain, kept apart from the other four on purpose. */
  sirmione: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    chain: Step[];
    caution: { heading: string; body: string };
    sources: Source[];
  };
  /** One airport, five destinations — why naming the town is the whole job. */
  compare: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
  };
  /** The arrival enquiry. */
  arrival: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** The return. Its own intent, its own checklist, its own CTA. */
  ret: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    items: string[];
    cta: string;
    note: string;
  };
  /**
   * A fair comparison, limited to what a source supports.
   *
   * `sources` is a list because there are now two: Trenitalia for the Airlink
   * into Verona, and ATV for the seasonal line that actually reaches the
   * lake. When the page was first written the second had no source note
   * anywhere in the repository, so the claim was omitted rather than
   * published; ATV's own page supplied it on 26 November 2026.
   */
  transport: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    columns: { id: string; heading: string; body: string; points: string[] }[];
    note: string;
    sources: Source[];
  };
  /** What to check before asking, as a plain checklist. */
  confirm: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  /** How an enquiry actually works here. No invented workflow. */
  process: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
  };
  related: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};

/* -- Treviso city ------------------------------------------------------- */

/**
 * The Treviso city hub.
 *
 * -- Why `access` is layers, not rules --------------------------------
 * Treviso restricts its centre, and the authoritative current text could not
 * be retrieved when this page was written: the Comune ZTL portal returned a
 * server error from every network tried, and the most recent disciplinare
 * obtainable from the Comune delibere host dates from February 2017. There is
 * also evidence of a further restricted area added in 2025.
 *
 * So the page does NOT publish a category table, gate count or hours. What it
 * publishes instead is the set of DISTINCTIONS a traveller actually needs -
 * eligibility, a permit, a registered plate, a temporary guest arrangement, a
 * pedestrian street, a reserved lane, and a place a car can physically stop.
 * Those hold whatever the current table says, and no competitor explains any
 * of them. Each layer carries what it IS and what it is NOT, so a reader
 * cannot take one and assume another.
 *
 * `arriving` entries carry an optional `page` so the airports and the Venice
 * pages are linked rather than re-explained.
 */
export type TrevisoCity = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  arriving: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: {
      id: string;
      name: string;
      page?: PageId;
      linkText?: string;
      detail: string;
      needs: string;
    }[];
    note: string;
  };
  address: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: { id: string; heading: string; subheading: string; items: Term[] }[];
    note: string;
  };
  access: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    layers: { id: string; name: string; isIt: string; isNot: string }[];
    caution: { heading: string; body: string };
    note: string;
  };
  ret: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    items: string[];
    cta: string;
    note: string;
  };
  alternatives: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    columns: { id: string; heading: string; body: string; points: string[] }[];
    note: string;
  };
  prepare: {
    id: string;
    heading: string;
    lead: string;
    items: string[];
    note: string;
  };
  process: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    note: string;
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};
