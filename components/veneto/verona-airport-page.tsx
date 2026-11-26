import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  CompareColumns,
  Eyebrow,
  LinkIndex,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { veronaAirport } from "@/content/veneto/verona-airport";
import { pathFor, pathWithHash } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Verona Villafranca.
 *
 * ── The composition, and why it is this one ───────────────────────────────
 * A small airport with two quite different exits, so the page is a fork: the
 * city on one side, Lake Garda on the other, side by side as equals.
 *
 * The right-hand column is the careful one. Garda is a genuine road
 * destination from this airport — the site's own homepage says so — and since
 * 25 November 2026 five towns are confirmed. Until that day this column
 * refused to name any of them; it now names exactly those five and stops
 * there, because the limit moved rather than disappeared. A reader who only
 * skims the column still cannot come away believing the whole shoreline is
 * on offer.
 *
 * The Airlink sits below as a callout rather than as a third column, because
 * it is a public service and should not be laid out as one of our options.
 */
export function VeronaAirportPage({ locale }: { locale: Locale }) {
  const c = veronaAirport[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroMeta
        id="verona-airport"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        facts={c.hero.facts}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{ href: `#${c.fork.id}`, label: c.hero.secondaryCta }}
      />

      <Band id={c.fork.id} labelledBy={`${c.fork.id}-heading`}>
        <Eyebrow>{c.fork.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.fork.id}-heading`}
          lead={c.fork.lead}
          className="mt-4"
        >
          {c.fork.heading}
        </BandHeading>
        <CompareColumns columns={c.fork.columns} className="mt-10" />
        {/* ATV's own page. The lake column states a seasonal bus service, and
            until 26 November 2026 that claim carried no source. */}
        {c.fork.source ? (
          <SourceNote
            href={c.fork.source.href}
            linkText={c.fork.source.linkText}
            className="mt-8 border-t border-border pt-5"
          >
            {c.fork.source.text}
          </SourceNote>
        ) : null}
      </Band>

      <Band
        id={c.airlink.id}
        labelledBy={`${c.airlink.id}-heading`}
        tone="sunken"
        size="prose"
        spacing="tight"
      >
        <h2 id={`${c.airlink.id}-heading`} className="sr-only">
          {c.airlink.heading}
        </h2>
        <Callout heading={c.airlink.heading}>
          {c.airlink.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <SourceNote
            href={c.airlink.source.href}
            linkText={c.airlink.source.linkText}
            className="pt-2"
          >
            {c.airlink.source.text}
          </SourceNote>
        </Callout>
      </Band>

      <Band
        id={c.onward.id}
        labelledBy={`${c.onward.id}-heading`}
        spacing="tight"
      >
        <BandHeading id={`${c.onward.id}-heading`}>
          {c.onward.heading}
        </BandHeading>
        <LinkIndex
          className="mt-6"
          items={c.onward.items.map((item) => ({
            id: item.page,
            href: pathFor(item.page, locale),
            label: item.label,
            detail: item.detail,
          }))}
        />
      </Band>

      <Band id={c.faq.id} labelledBy={`${c.faq.id}-heading`} tone="deep">
        <Eyebrow tone="deep">{c.faq.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.faq.id}-heading`}
          lead={c.faq.lead}
          tone="deep"
          className="mt-4"
        >
          {c.faq.heading}
        </BandHeading>
        <QuestionList items={c.faq.items} tone="deep" className="mt-10" />
      </Band>

      <ClosingCta
        id={c.closing.id}
        heading={c.closing.heading}
        body={c.closing.body}
        primaryCta={{ href: quote, label: c.closing.primaryCta }}
        secondaryCta={{
          href: pathWithHash(
            c.closing.secondaryCta.page,
            locale,
            c.closing.secondaryCta.hash,
          ),
          label: c.closing.secondaryCta.label,
        }}
        note={c.closing.note}
        tone="sunken"
      />
    </>
  );
}
