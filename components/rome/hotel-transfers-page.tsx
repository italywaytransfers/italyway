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
import { HeroBand } from "@/components/site/heroes";
import { hotelTransfers } from "@/content/rome/hotel-transfers";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Rome hotel transfers.
 *
 * ── HeroBand, not the HeroMeta the other new pages use ───────────────────
 * Sorrento, Lazio, Tivoli and Frascati all open on `HeroMeta`. This one
 * opens on `HeroBand`, which renders on the deep brand colour: a service
 * page should not look like a destination page, and the band is the
 * cheapest honest way to say so without inventing a palette.
 *
 * Its three facts are the three things a reader arrives wanting to know —
 * what we need, whether a hired car may enter a ZTL, and when the meeting
 * point is settled. Not decoration.
 *
 * ── Order is the argument ────────────────────────────────────────────────
 * `details` comes first, before the explanation. Most readers arriving here
 * want to send a request, and making them read about limited-traffic zones
 * before they can see what to include would be writing for ourselves.
 *
 * `access` follows, because it is the thing that most often surprises
 * people, and its table keeps the two confused questions physically apart —
 * permitted to enter, versus able to drive down. Then `meeting` explains
 * the consequence, and `journeys` sends the reader to the route page they
 * actually need.
 *
 * ── Scope discipline, enforced by what is absent ─────────────────────────
 * No ZTL timetable and no district list: both live on /destinations/rome
 * and are linked rather than repeated. That is what stops this page
 * competing with the hub for the same query, and it is the whole reason the
 * Stage 5 audit recommended one process page instead of eight district
 * pages. Nothing shared was modified to build it.
 */
export function HotelTransfersPage({ locale }: { locale: Locale }) {
  const content = hotelTransfers[locale];

  return (
    <>
      <HeroBand
        id="rome-hotel-transfers"
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
          href: pathFor("rome", locale),
          label: content.hero.secondaryCta,
        }}
        facts={content.hero.facts}
      />

      {/* What to send, before any explanation of why. */}
      <Band id={content.details.id} size="wide">
        <Eyebrow>{content.details.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.details.id}-heading`}
          lead={content.details.lead}
          className="mt-3"
        >
          {content.details.heading}
        </BandHeading>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.details.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`${content.details.id}-${group.id}`}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3
                id={`${content.details.id}-${group.id}`}
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

        <Paragraphs className="mt-7" items={[content.details.note]} />
      </Band>

      {/* The two confused questions, kept apart. */}
      <Band id={content.access.id} tone="sunken" size="wide">
        <Eyebrow>{content.access.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.access.id}-heading`}
          lead={content.access.lead}
          className="mt-3"
        >
          {content.access.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.access.caption}
          columns={content.access.columns}
          rows={content.access.rows}
        />
        <Paragraphs className="mt-7" items={[content.access.note]} />
        <SourceNote
          className="mt-5"
          href={content.access.source.href}
          linkText={content.access.source.linkText}
        >
          {content.access.source.text}
        </SourceNote>
      </Band>

      <Band id={content.meeting.id} size="content">
        <Eyebrow>{content.meeting.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.meeting.id}-heading`}
          lead={content.meeting.lead}
          className="mt-3"
        >
          {content.meeting.heading}
        </BandHeading>
        <Paragraphs className="mt-6" items={content.meeting.paragraphs} />
        <Callout className="mt-8" heading={content.meeting.askHotel.heading}>
          <p>{content.meeting.askHotel.body}</p>
        </Callout>
      </Band>

      <Band id={content.journeys.id} tone="sunken" size="wide">
        <Eyebrow>{content.journeys.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.journeys.id}-heading`}
          lead={content.journeys.lead}
          className="mt-3"
        >
          {content.journeys.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={content.journeys.items.map((item) => ({
            id: item.id,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
        <Paragraphs className="mt-7" items={[content.journeys.note]} />
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
