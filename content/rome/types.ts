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
 * The shapes the Rome cluster's content files satisfy.
 *
 * Each page type has its own shape rather than sharing one generic one. That
 * is deliberate: a route page has two endpoints and a port page has a
 * checklist, and a single `sections: Section[]` type that could hold either
 * would let a page quietly become a different page without the compiler
 * noticing.
 *
 * The primitives they are built from — and the route page type, which Milan
 * uses too — live in `content/page-types.ts`.
 */

/* ── Destination hub ──────────────────────────────────────────────────── */

export type RomeHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  arrival: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    rows: {
      id: string;
      role: string;
      name: string;
      page: PageId;
      fact: string;
      body: string;
    }[];
    note: string;
  };
  access: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    zones: Term[];
    source: Source;
  };
  districts: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
  routes: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
  beyond: {
    heading: string;
    paragraphs: string[];
    source: Source;
  };
};

/* ── Airport hubs ─────────────────────────────────────────────────────── */

export type AirportHub = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note?: string;
  };
  facts: { label: string; value: string }[];
  factsSource: Source;
  terminals: {
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
  sequence: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
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
    items: { page: PageId; label: string; detail: string }[];
  };
};

/** Ciampino: comparison-led, and the one page in the cluster with no photograph. */
export type SecondAirport = PageChrome & {
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
  practical: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    sections: { heading: string; paragraphs: string[] }[];
  };
  onward: {
    id: string;
    heading: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Cruise port ──────────────────────────────────────────────────────── */

export type CruisePort = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
  };
  geography: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    stages: { label: string; title: string; body: string }[];
    source: Source;
  };
  confirm: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    steps: Step[];
    warning: { heading: string; body: string };
  };
  connections: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { page: PageId; label: string; detail: string }[];
  };
};

/* ── Station reference page ───────────────────────────────────────────── */

export type StationsPage = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
  };
  table: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; name: string; scale: string; note: string }[];
    source: Source;
  };
  handover: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  assistance: {
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

/* ── Lazio: the regional pillar ───────────────────────────────────────── */

/**
 * The region above Rome, added 23 November 2026.
 *
 * ── What this page is, and what it must not become ───────────────────────
 * Sicily and Puglia already have pillars, and Lazio did not: Rome hung
 * directly off the homepage. This fills that gap, and the temptation it has
 * to resist is writing a tourism article about Lazio.
 *
 * It is a coverage map. Its job is to say what this site actually arranges
 * in this region and route the reader to the right page — which means it
 * names only pages that exist. `coverage` is therefore a table of real
 * entities with real `page` links, and `limits` exists so the page can say
 * out loud that the region is covered selectively rather than exhaustively.
 * Without that sentence the page would imply coverage of a hundred comuni
 * it knows nothing about.
 */
export type LazioPillar = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  intro: { id: string; eyebrow: string; heading: string; paragraphs: string[] };
  /** The region as a set of booking journeys, each pointing at a real page. */
  coverage: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    groups: {
      id: string;
      heading: string;
      lead: string;
      items: { id: string; page: PageId; label: string; detail: string }[];
    }[];
  };
  /** Said plainly: selected places, not the whole region. */
  limits: { id: string; heading: string; body: string; note: string };
  practical: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
};

/* ── Tivoli ───────────────────────────────────────────────────────────── */

/**
 * Tivoli, and the one thing a transfer page must get right about it.
 *
 * ── Why `sites` is a table of two and not a paragraph ────────────────────
 * Tivoli's two famous places are not in the same place. A visitor who books
 * a car "to Tivoli" without saying which one may be set down a long way
 * from where they meant to be. The table exists to force that choice to the
 * surface before it becomes a problem on the day.
 *
 * ── The sourcing problem, recorded here because it shapes the page ───────
 * Every official source for Tivoli was unreachable when this page was
 * written on 23 November 2026: the Villae institute site and the Ministry
 * of Culture did not respond at all, and UNESCO, the Comune di Tivoli and
 * levillae.com refused automated requests outright. Six attempts, six
 * failures.
 *
 * So this page states no address, no distance, no opening hours, no parking
 * arrangement, no accessibility provision and no shuttle between the two
 * sites — because not one of those could be read from a publisher. What it
 * does say is the thing a transfer actually turns on: that there are two
 * destinations under one town's name, and that the booking has to name one.
 * `unverified` carries that admission to the reader rather than hiding it.
 */
export type TivoliDestination = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  intro: { id: string; eyebrow: string; heading: string; paragraphs: string[] };
  /** The two destinations, side by side, so the difference cannot be missed. */
  sites: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    caption: string;
    columns: string[];
    rows: { id: string; cells: string[] }[];
    note: string;
  };
  /** What this page deliberately does not tell you, and why. */
  unverified: { id: string; heading: string; body: string; note: string };
  planning: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};

/* ── Frascati ─────────────────────────────────────────────────────────── */

/**
 * Frascati, in the hills south-east of Rome.
 *
 * ── Why this is not the Tivoli shape ─────────────────────────────────────
 * Tivoli's page turns on one structural fact — two destinations under one
 * name — so it carries a table of two and an explicit band about what could
 * not be sourced. Frascati has no such split, and repeating that band here
 * would turn an editorial device into a tic.
 *
 * The brief was explicit about it: where something cannot be stated, say so
 * in ordinary visitor-facing language ("check with the venue") rather than
 * narrating a research failure. So there is no `unverified` section in this
 * type. `access` carries the qualified wording instead, as advice rather
 * than apology.
 *
 * ── What the page is organised around ────────────────────────────────────
 * The reason people ask for this journey, and the one detail that decides
 * where a car can stop: a hill town's address rather than its name.
 */
export type FrascatiDestination = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
  };
  intro: { id: string; eyebrow: string; heading: string; paragraphs: string[] };
  /** Why people make this journey. Reasons, not a sightseeing list. */
  draws: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; label: string; detail: string }[];
  };
  /**
   * Arrival and access, in visitor-facing terms.
   *
   * `checkDirect` is where anything the site cannot state for itself is
   * handed to the reader as advice. It is not a disclaimer block and should
   * not be written as one.
   */
  access: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: Term[];
    checkDirect: { heading: string; body: string };
  };
  onward: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
  };
};

/* ── Rome hotel transfers ─────────────────────────────────────────────── */

/**
 * The hotel pickup page, modelled on StationsPage above.
 *
 * ── Why this page exists at all ──────────────────────────────────────────
 * The site's navigation has advertised "Hotel transfers" as one of seven
 * services since launch, and no page answered it. The Stage 5 audit also
 * concluded that per-district pages would be doorway pages: the Rome hub
 * already covers the districts and the ZTL, and Roma Mobilità lists NCC
 * under the ZTL exemptions, so "can a car reach me" is not eight different
 * questions. It is one question about a process, which is what this page
 * answers.
 *
 * ── The distinction the page is built on ─────────────────────────────────
 * `access` separates two things that are constantly conflated: whether a
 * vehicle is *permitted* on a street, and whether it can physically *use*
 * it. The first is settled by the ZTL rules and the NCC exemption. The
 * second is settled by the width of the lane and whether it is pedestrian,
 * and no permit changes it. Both rows must stay; collapsing them would
 * recreate the misunderstanding the page exists to remove.
 *
 * ── Scope discipline ─────────────────────────────────────────────────────
 * No district directory, no hotel directory, no ZTL timetable. The ZTL is
 * one short section that links to the Rome hub rather than repeating it,
 * which is also what keeps the two pages from competing.
 */
export type HotelTransfersPage = PageChrome & {
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    /**
     * Three real facts, not three decorations. This page uses `HeroBand`
     * rather than the `HeroMeta` the other new pages use — partly because
     * the deep band distinguishes a service page from a destination one,
     * and partly because these three answer the questions a reader arrives
     * with before any prose does.
     */
    facts: { label: string; value: string }[];
  };
  /** What a request needs. The page's main commercial payload. */
  details: {
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
  /** Permitted to enter vs able to drive down. Keep both. */
  access: {
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
  /** Why the meeting point is agreed before the day. */
  meeting: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    paragraphs: string[];
    askHotel: { heading: string; body: string };
  };
  /** Journeys that can start at the door, each an existing page. */
  journeys: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    items: { id: string; page: PageId; label: string; detail: string }[];
    note: string;
  };
};
