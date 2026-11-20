import { OwnerNote } from "@/components/campania/owner-note";
import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { sorrento } from "@/content/campania/sorrento";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Sorrento.
 *
 * ── Why the hero is HeroMeta and not one of the photographic heroes ──────
 * Every other destination in this cluster opens on a picture. This one opens
 * on three facts, because the page's argument is a geographic correction and
 * a photograph cannot make it. A view of Sorrento looks exactly like a view
 * of the Amalfi Coast to anyone who has not been to either — which is how
 * the confusion this page exists to fix got started.
 *
 * `HeroMeta`'s `facts` strip is three places and the water each one faces.
 * Read in two seconds, it does the work that two paragraphs would do badly:
 * Sorrento north, Positano south, Amalfi south. The rest of the page is
 * consequences of that.
 *
 * There is also no photograph available. The site's images are CC0-only and
 * individually inspected, and none of Sorrento has been licensed yet. The
 * one Campania photograph in the library is of the Amalfi Coast, which is
 * the single image that must not appear here: it would illustrate the error
 * the page is correcting. A page with no picture is better than a page
 * arguing against its own artwork.
 *
 * ── Order: orientation, then arrival, then the restriction ───────────────
 * The sequence is deliberate and is not the usual destination order.
 *
 * `orientation` comes first because every later section depends on it. A
 * reader who still thinks Sorrento is on the Amalfi Coast will misread the
 * arrivals table — they will wonder why the coast road is not the main way
 * in — and will not understand why a Positano add-on is quoted separately.
 *
 * `ztl` comes after `arriving` rather than before it. The restriction only
 * becomes meaningful once you know a car is how most people get here; put
 * first, it reads as a reason not to come.
 *
 * `checklist` is last of the substantive bands, immediately before the
 * owner's note and the form, because it is the only band that asks the
 * reader to do something. Everything above it is there to make its questions
 * answerable.
 *
 * ── Two tables, and why neither is decorative ────────────────────────────
 * `orientation` is a table because it is a comparison across a fixed set of
 * questions — the shape a table exists for, and the shape prose handles
 * worst. `ztl` is a table because the Comune publishes a list of four gates
 * by street, and a reader checking whether their hotel is behind one needs
 * to scan, not read.
 *
 * The ZTL band carries `season`, `hours`, the gate table, the permit rule
 * and a currency warning as five separate blocks rather than one. They are
 * five different kinds of claim, and the warning in particular must not be
 * folded into the others: the cited notice covers 2025, and a layout that
 * merged it into the hours would quietly present a past season as current.
 */
export function SorrentoPage({ locale }: { locale: Locale }) {
  const content = sorrento[locale];

  return (
    <>
      <HeroMeta
        id="sorrento"
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
          href: `#${content.checklist.id}`,
          label: content.hero.secondaryCta,
        }}
        facts={content.hero.bearings.items.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
      />

      {/* The correction. Rows that name a place we have a page for link to
          it from the first cell, so the comparison doubles as navigation
          without a second list of the same three names. */}
      <Band id={content.orientation.id} size="wide">
        <Eyebrow>{content.orientation.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.orientation.id}-heading`}
          lead={content.orientation.lead}
          className="mt-3"
        >
          {content.orientation.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.orientation.caption}
          columns={content.orientation.columns}
          rows={content.orientation.rows.map((row) => ({
            id: row.id,
            cells: row.page
              ? [
                  <a
                    key={row.id}
                    href={pathFor(row.page, locale)}
                    className="underline decoration-1 underline-offset-4 transition-colors hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {row.cells[0]}
                  </a>,
                  ...row.cells.slice(1),
                ]
              : row.cells,
          }))}
        />
        <Paragraphs className="mt-7" items={[content.orientation.note]} />
      </Band>

      {/* Gateways. Sunken, so the two tables do not read as one long table
          with a heading in the middle of it. */}
      <Band id={content.arriving.id} tone="sunken" size="wide">
        <Eyebrow>{content.arriving.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.arriving.id}-heading`}
          lead={content.arriving.lead}
          className="mt-3"
        >
          {content.arriving.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.arriving.caption}
          columns={content.arriving.columns}
          rows={content.arriving.rows.map((row) => ({
            id: row.id,
            cells: row.page
              ? [
                  <a
                    key={row.id}
                    href={pathFor(row.page, locale)}
                    className="underline decoration-1 underline-offset-4 transition-colors hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {row.cells[0]}
                  </a>,
                  ...row.cells.slice(1),
                ]
              : row.cells,
          }))}
        />
        <Paragraphs className="mt-7" items={[content.arriving.note]} />
        {content.arriving.sources.map((source) => (
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

      {/* The ZTL. `season` sits above the heading so the period travels with
          the hours wherever this band is read from, and the currency warning
          is its own Callout rather than a footnote. */}
      <Band id={content.ztl.id} size="wide">
        <Eyebrow>{content.ztl.eyebrow}</Eyebrow>
        <p className="mt-3 type-small text-muted-foreground">
          {content.ztl.season}
        </p>
        <BandHeading
          id={`${content.ztl.id}-heading`}
          lead={content.ztl.lead}
          className="mt-3"
        >
          {content.ztl.heading}
        </BandHeading>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.ztl.hours.map((slot) => (
            <div
              key={slot.id}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <dt className="type-label text-accent-ink">{slot.label}</dt>
              <dd className="mt-2 type-body text-foreground">{slot.value}</dd>
            </div>
          ))}
        </dl>

        <DataTable
          className="mt-8"
          caption={content.ztl.caption}
          columns={content.ztl.columns}
          rows={content.ztl.rows}
        />

        <Callout className="mt-8" heading={content.ztl.permit.heading}>
          <p>{content.ztl.permit.body}</p>
        </Callout>

        <Callout
          className="mt-5"
          tone="accent"
          heading={content.ztl.currency.heading}
        >
          <p>{content.ztl.currency.body}</p>
        </Callout>

        <SourceNote
          className="mt-6"
          href={content.ztl.source.href}
          linkText={content.ztl.source.linkText}
        >
          {content.ztl.source.text}
        </SourceNote>
      </Band>

      {/* What to have ready. Grouped rather than a flat list: a reader
          gathering an address is doing a different job from one counting
          suitcases, and the groups let them stop at the one they need. */}
      <Band id={content.checklist.id} tone="sunken" size="wide">
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
                    {/* Decorative: the label carries the meaning. */}
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

      <Band size="wide">
        <OwnerNote
          claim={content.ownerClaim}
          headingId="sorrento-owner-claim"
        />
      </Band>

      {/* Nearby pages, then an explicit note about the ones that do not
          exist yet. Saying so is better than leaving a reader to wonder
          whether the airport runs are simply missing. */}
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
        <Callout className="mt-8" heading={content.onward.pending.heading}>
          <p>{content.onward.pending.body}</p>
        </Callout>
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
          href: content.closing.secondaryCta.hash
            ? pathWithHash(
                content.closing.secondaryCta.page,
                locale,
                content.closing.secondaryCta.hash,
              )
            : pathFor(content.closing.secondaryCta.page, locale),
          label: content.closing.secondaryCta.label,
        }}
        note={content.closing.note}
      />
    </>
  );
}
