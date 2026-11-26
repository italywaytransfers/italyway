import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DataTable,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  NumberedSteps,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroSplit } from "@/components/site/heroes";
import { veniceCruisePort } from "@/content/veneto/cruise-port";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Venice cruise terminals.
 *
 * ── The photograph, and the one that was rejected ────────────────────────
 * `venice-vaporetto` — a water bus at a floating landing stage. It was
 * chosen because it states the page's premise before a word is read: past
 * a certain line this city moves by water, which is exactly why the berth
 * and the meeting point are different places.
 *
 * The library also holds `cruise-ship-dock`, which would look more obvious
 * here and is not used. Its own record describes it as a cruise ship at an
 * unidentified pier, and it is not Venice. Putting another port's quayside
 * at the top of a page about Venice's quaysides would be the one visual
 * lie this page cannot afford.
 *
 * No photo credit is rendered anywhere. The library's provenance record is
 * internal by design — see the header of content/photos.ts — and every
 * image here is CC0 or public domain, so none is required.
 *
 * ── Why the order is this order ──────────────────────────────────────────
 * `berths` first, because a reader cannot act on anything else until they
 * know Venice has more than one cruise location. `chain` second, as the
 * narrative spine: ship, shuttle, terminal, road, destination. `places`
 * third, naming the five links apart — the same information as the chain,
 * deliberately repeated in a different shape, because conflating two of
 * them is the failure this page exists to prevent and once is not enough.
 *
 * Then the commercial half: where you are going, what to have ready, and
 * what goes wrong. `mistakes` is last before the FAQ because it is the
 * section a reader returns to after they have understood the rest.
 *
 * ── No meeting point is rendered, anywhere ───────────────────────────────
 * `places.confirmWithOperator` is the only answer to "where will the car
 * be", and it is a callout rather than a data row on purpose: a row invites
 * a future editor to fill it with an address. No official source publishes
 * one. Nothing shared was modified to build this page.
 */
export function VeniceCruisePortPage({ locale }: { locale: Locale }) {
  const content = veniceCruisePort[locale];

  return (
    <>
      <HeroSplit
        id="venice-cruise-port"
        locale={locale}
        breadcrumbLabel={content.breadcrumbLabel}
        eyebrow={content.hero.eyebrow}
        h1={content.hero.h1}
        lead={content.hero.lead}
        primaryCta={{
          href: quotePathFor(locale),
          label: content.hero.primaryCta,
        }}
        secondaryCta={{
          href: pathFor("venice", locale),
          label: content.hero.secondaryCta,
        }}
        photoSlug="venice-vaporetto"
      />

      {/* Venice is not one cruise terminal. Everything follows from this. */}
      <Band id={content.berths.id} size="wide">
        <Eyebrow>{content.berths.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.berths.id}-heading`}
          lead={content.berths.lead}
          className="mt-3"
        >
          {content.berths.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.berths.caption}
          columns={content.berths.columns}
          rows={content.berths.rows}
        />
        <Paragraphs className="mt-7" items={[content.berths.note]} />
        {content.berths.sources.map((source) => (
          <SourceNote
            key={source.href + source.linkText}
            className="mt-5"
            href={source.href}
            linkText={source.linkText}
          >
            {source.text}
          </SourceNote>
        ))}
      </Band>

      {/* The spine: ship → shuttle → terminal → road → destination. */}
      <Band id={content.chain.id} tone="sunken" size="content">
        <Eyebrow>{content.chain.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.chain.id}-heading`}
          lead={content.chain.lead}
          className="mt-3"
        >
          {content.chain.heading}
        </BandHeading>
        <NumberedSteps className="mt-8" items={content.chain.steps} />
        <Paragraphs className="mt-7" items={[content.chain.note]} />
        <SourceNote
          className="mt-5"
          href={content.chain.source.href}
          linkText={content.chain.source.linkText}
        >
          {content.chain.source.text}
        </SourceNote>
      </Band>

      {/* The same five links, named apart. Repetition is the point. */}
      <Band id={content.places.id} size="content">
        <Eyebrow>{content.places.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.places.id}-heading`}
          lead={content.places.lead}
          className="mt-3"
        >
          {content.places.heading}
        </BandHeading>
        <DefinitionList className="mt-8" items={content.places.items} />
        <Callout
          className="mt-8"
          tone="accent"
          heading={content.places.confirmWithOperator.heading}
        >
          <p>{content.places.confirmWithOperator.body}</p>
        </Callout>
      </Band>

      <Band id={content.onward.id} tone="sunken" size="wide">
        <Eyebrow>{content.onward.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.onward.id}-heading`}
          lead={content.onward.lead}
          className="mt-3"
        >
          {content.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={content.onward.items.map((item) => ({
            id: item.id,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
        <Paragraphs className="mt-7" items={[content.onward.note]} />
      </Band>

      <Band id={content.checklist.id} size="wide">
        <Eyebrow>{content.checklist.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.checklist.id}-heading`}
          lead={content.checklist.lead}
          className="mt-3"
        >
          {content.checklist.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.checklist.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`${content.checklist.id}-${group.id}`}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3
                id={`${content.checklist.id}-${group.id}`}
                className="type-label text-accent-ink"
              >
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    {/* Decorative; the label carries the meaning. */}
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <div>
                      <p className="type-body font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="mt-1 type-small text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Paragraphs className="mt-7" items={[content.checklist.note]} />
      </Band>

      {/* Wrong / instead, as two columns per row. */}
      <Band id={content.mistakes.id} tone="sunken" size="wide">
        <Eyebrow>{content.mistakes.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.mistakes.id}-heading`}
          lead={content.mistakes.lead}
          className="mt-3"
        >
          {content.mistakes.heading}
        </BandHeading>
        <ul className="mt-8 space-y-5">
          {content.mistakes.items.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-border bg-surface p-6 sm:grid sm:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] sm:gap-8"
            >
              <p className="type-body font-medium text-foreground">
                {item.wrong}
              </p>
              <p className="mt-2 type-body text-muted-foreground sm:mt-0">
                {item.instead}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      <Band id={content.faq.id} size="wide">
        <Eyebrow>{content.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.faq.id}-heading`}
          lead={content.faq.lead}
          className="mt-3"
        >
          {content.faq.heading}
        </BandHeading>
        <QuestionList className="mt-8" items={content.faq.items} />
      </Band>

      <ClosingCta
        id={content.closing.id}
        heading={content.closing.heading}
        body={content.closing.body}
        primaryCta={{
          href: quotePathFor(locale),
          label: content.closing.primaryCta,
        }}
        secondaryCta={{
          href: pathFor(content.closing.secondaryCta.page, locale),
          label: content.closing.secondaryCta.label,
        }}
        note={content.closing.note}
      />
    </>
  );
}
