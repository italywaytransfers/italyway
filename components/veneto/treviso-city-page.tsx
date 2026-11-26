import Link from "next/link";
import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { Cta } from "@/components/site/cta";
import { HeroBand } from "@/components/site/heroes";
import { trevisoCity } from "@/content/veneto/treviso-city";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Treviso, the city.
 *
 * ── Nothing shared was modified ──────────────────────────────────────────
 * Composed entirely from existing primitives — `HeroBand`, `Band`,
 * `DefinitionList`, `Checklist`, `NumberedSteps`, `Callout`, `LinkIndex`,
 * `QuestionList`, `Cta`, `ClosingCta`. No shared component, type or token was
 * touched, so every existing page is unaffected.
 *
 * ── Why HeroBand, and why no photograph ──────────────────────────────────
 * The CC0 library holds no image of Treviso, its station or its centre, and
 * the Venice photographs would be a geographic lie on a page arguing that
 * Treviso is neither Venice nor its own airport. So there is no hero image
 * and nothing is credited, because nothing is shown.
 *
 * `HeroBand` — deep navy, typographic, three facts — carries a page that
 * answers a coverage question rather than a geographic one. Within this
 * cluster the other openings are taken: Venice has HeroEndpoints, Verona
 * HeroModes, Padua HeroMeta, Marco Polo HeroSplit, the routes HeroRoute.
 *
 * ── The access section is the differentiator, and it is a list of layers ─
 * Seven layers, each rendered as what it IS beside what it IS NOT, with the
 * negative given equal weight. The reason is in the content file's header:
 * the authoritative current ZTL text could not be retrieved, so the page
 * publishes the distinctions a traveller needs rather than a category table
 * from a document old enough to mislead. Competitors publish neither.
 *
 * ── Order ────────────────────────────────────────────────────────────────
 * `arriving` first — the reader's own situation, and the four entry points.
 * `address` second, because the address is what every later section turns
 * on. `access` third, once they know whether it applies to them at all.
 * Then the return on a deep band with its own CTA, the honest comparison,
 * the checklist, the process, links and the FAQ.
 */
export function TrevisoCityPage({ locale }: { locale: Locale }) {
  const c = trevisoCity[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroBand
        id="treviso"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: pathFor("treviso-airport", locale),
          label: c.hero.secondaryCta,
        }}
        facts={c.hero.facts}
      />

      {/* Four ways in, each linked rather than re-explained. */}
      <Band id={c.arriving.id} size="wide">
        <Eyebrow>{c.arriving.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arriving.id}-heading`}
          lead={c.arriving.lead}
          className="mt-3"
        >
          {c.arriving.heading}
        </BandHeading>
        <ul className="mt-8 grid gap-5 lg:grid-cols-2">
          {c.arriving.items.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <h3 className="font-heading type-h3 text-foreground">
                {item.name}
              </h3>
              <p className="mt-4 type-body text-muted-foreground">
                {item.detail}
              </p>
              <p className="mt-4 border-t border-border pt-4 type-small text-foreground">
                <span className="font-medium text-accent-ink">
                  {locale === "it" ? "Serve: " : "What we need: "}
                </span>
                {item.needs}
              </p>
              {item.page && item.linkText ? (
                <p className="mt-4">
                  <Link
                    href={pathFor(item.page, locale)}
                    className="type-small font-medium underline underline-offset-4 transition-colors hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {item.linkText}
                  </Link>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <Paragraphs className="mt-7" items={[c.arriving.note]} />
      </Band>

      {/* Inside the walls, or outside. Everything later turns on this. */}
      <Band id={c.address.id} tone="sunken" size="wide">
        <Eyebrow>{c.address.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.address.id}-heading`}
          lead={c.address.lead}
          className="mt-3"
        >
          {c.address.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {c.address.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`${c.address.id}-${group.id}`}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <h3
                id={`${c.address.id}-${group.id}`}
                className="font-heading type-h3 text-foreground"
              >
                {group.heading}
              </h3>
              <p className="mt-2 type-label text-accent-ink">
                {group.subheading}
              </p>
              <DefinitionList className="mt-5" items={group.items} />
            </section>
          ))}
        </div>
        <Paragraphs className="mt-7" items={[c.address.note]} />
      </Band>

      {/* The seven layers. The negatives carry equal weight on purpose. */}
      <Band id={c.access.id} size="wide">
        <Eyebrow>{c.access.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.access.id}-heading`}
          lead={c.access.lead}
          className="mt-3"
        >
          {c.access.heading}
        </BandHeading>
        <ol className="mt-8 space-y-4">
          {c.access.layers.map((layer, index) => (
            <li
              key={layer.id}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-heading type-label text-accent-ink"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading type-h3 text-foreground">
                  {layer.name}
                </h3>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-8">
                <p className="type-body text-foreground">{layer.isIt}</p>
                <p className="type-body text-muted-foreground sm:border-l sm:border-border sm:pl-8">
                  {layer.isNot}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Callout
          className="mt-8"
          tone="accent"
          heading={c.access.caution.heading}
        >
          <p>{c.access.caution.body}</p>
        </Callout>
        <Paragraphs className="mt-7" items={[c.access.note]} />
      </Band>

      {/* The return: its own band, its own checklist, its own CTA. */}
      <Band id={c.ret.id} tone="deep" size="content">
        <Eyebrow tone="deep">{c.ret.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.ret.id}-heading`}
          lead={c.ret.lead}
          tone="deep"
          className="mt-3"
        >
          {c.ret.heading}
        </BandHeading>
        <div className="mt-7 space-y-5">
          {c.ret.paragraphs.map((p) => (
            <p
              key={p.slice(0, 32)}
              className="max-w-[68ch] type-body text-deep-muted"
            >
              {p}
            </p>
          ))}
        </div>
        <Checklist className="mt-8" items={c.ret.items} tone="deep" />
        <p className="mt-7 max-w-[68ch] type-small text-deep-muted">
          {c.ret.note}
        </p>
        <div className="mt-8">
          <Cta href={quote} size="lg">
            {c.ret.cta}
          </Cta>
        </div>
      </Band>

      {/* A comparison allowed to say "not always". */}
      <Band id={c.alternatives.id} size="wide">
        <Eyebrow>{c.alternatives.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.alternatives.id}-heading`}
          lead={c.alternatives.lead}
          className="mt-3"
        >
          {c.alternatives.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {c.alternatives.columns.map((col) => (
            <section
              key={col.id}
              aria-labelledby={`${c.alternatives.id}-${col.id}`}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <h3
                id={`${c.alternatives.id}-${col.id}`}
                className="font-heading type-h3 text-foreground"
              >
                {col.heading}
              </h3>
              <p className="mt-3 type-body text-muted-foreground">{col.body}</p>
              <ul className="mt-5 space-y-3">
                {col.points.map((point) => (
                  <li key={point.slice(0, 28)} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="type-small text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Paragraphs className="mt-7" items={[c.alternatives.note]} />
      </Band>

      <Band id={c.prepare.id} tone="sunken" size="content">
        <BandHeading id={`${c.prepare.id}-heading`} lead={c.prepare.lead}>
          {c.prepare.heading}
        </BandHeading>
        <Checklist className="mt-8" items={c.prepare.items} />
        <Paragraphs className="mt-7" items={[c.prepare.note]} />
      </Band>

      <Band id={c.process.id} size="content">
        <Eyebrow>{c.process.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.process.id}-heading`}
          lead={c.process.lead}
          className="mt-3"
        >
          {c.process.heading}
        </BandHeading>
        <NumberedSteps className="mt-8" items={c.process.steps} />
        <Paragraphs className="mt-7" items={[c.process.note]} />
      </Band>

      <Band id={c.onward.id} tone="sunken" size="wide">
        <Eyebrow>{c.onward.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.onward.id}-heading`}
          lead={c.onward.lead}
          className="mt-3"
        >
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={c.onward.items.map((item) => ({
            id: item.id,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      <Band id={c.faq.id} size="wide">
        <Eyebrow>{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          className="mt-3"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList className="mt-8" items={c.faq.items} />
      </Band>

      <ClosingCta
        id={c.closing.id}
        heading={c.closing.heading}
        body={c.closing.body}
        primaryCta={{ href: quote, label: c.closing.primaryCta }}
        secondaryCta={{
          href: pathFor(c.closing.secondaryCta.page, locale),
          label: c.closing.secondaryCta.label,
        }}
        note={c.closing.note}
      />
    </>
  );
}
