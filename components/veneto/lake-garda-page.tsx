import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroBand } from "@/components/site/heroes";
import { lakeGarda } from "@/content/veneto/lake-garda";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Lake Garda.
 *
 * ── Why this hero, with no photograph ────────────────────────────────────
 * `HeroBand` — dense, typographic, deep navy, no image at all. Two reasons.
 *
 * First, the honest one: the CC0 library holds no photograph of Lake Garda
 * or of any of the five towns. The nearest thing would be a lake somewhere
 * else, and a page whose entire argument is "which town you name changes
 * everything" cannot open with a picture of the wrong place.
 *
 * Second, it suits the argument. The three facts in the band are the page
 * in miniature — the towns, the two regions, and what actually decides the
 * journey — and a reader who takes only those has still taken the point.
 * Lake Como's hub uses `HeroTowns` because it has a backdrop to use; this
 * one has words, so it leads with words.
 *
 * No photo credit is rendered. Nothing is credited because nothing is shown.
 *
 * ── Why the towns table is shaped the way it is ──────────────────────────
 * The middle column quotes each comune's own description of itself, and the
 * quotations do not match: one gives region and province, one gives only a
 * region, one only a province, and Lazise's site refused the connection so
 * its cell says so. That unevenness is deliberately preserved rather than
 * tidied into a uniform column, because a uniform column would be partly
 * invented. It is also the one thing on this subject no competitor does.
 *
 * ── Order ────────────────────────────────────────────────────────────────
 * `shape` before `towns`: a reader cannot use the table until they know the
 * lake spans two regions and two sets of rules. `coverage` immediately
 * after, because the table is the most quotable thing here and the sentence
 * it must not be read as — "so a car can reach my door" — needs answering
 * on the same screen. Then the commercial half, then the FAQ.
 *
 * Only one route page links out of the `onward` index as a lake journey:
 * Verona → Sirmione. The other four towns deliberately have none, so no
 * link here promises a page that does not exist.
 */
export function LakeGardaPage({ locale }: { locale: Locale }) {
  const content = lakeGarda[locale];

  return (
    <>
      <HeroBand
        id="lake-garda"
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
          href: pathFor("route-verona-sirmione", locale),
          label: content.hero.secondaryCta,
        }}
        facts={content.hero.facts}
      />

      {/* One lake, two regions. Nothing below makes sense before this. */}
      <Band id={content.shape.id} size="content">
        <Eyebrow>{content.shape.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.shape.id}-heading`}
          lead={content.shape.lead}
          className="mt-3"
        >
          {content.shape.heading}
        </BandHeading>
        <Paragraphs className="mt-7" items={content.shape.paragraphs} />
      </Band>

      {/* Each comune, quoted as it describes itself. Unevenness preserved. */}
      <Band id={content.towns.id} tone="sunken" size="wide">
        <Eyebrow>{content.towns.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.towns.id}-heading`}
          lead={content.towns.lead}
          className="mt-3"
        >
          {content.towns.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.towns.caption}
          columns={content.towns.columns}
          rows={content.towns.rows}
        />
        <Paragraphs className="mt-7" items={[content.towns.note]} />
        <SourceNote
          className="mt-5"
          href={content.towns.source.href}
          linkText={content.towns.source.linkText}
        >
          {content.towns.source.text}
        </SourceNote>
      </Band>

      {/* What the table must not be read as. */}
      <Band id={content.coverage.id} size="content">
        <Eyebrow>{content.coverage.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.coverage.id}-heading`}
          lead={content.coverage.lead}
          className="mt-3"
        >
          {content.coverage.heading}
        </BandHeading>
        <Paragraphs className="mt-7" items={content.coverage.paragraphs} />
        <Callout
          className="mt-8"
          tone="accent"
          heading={content.coverage.caution.heading}
        >
          <p>{content.coverage.caution.body}</p>
        </Callout>
      </Band>

      <Band id={content.send.id} tone="sunken" size="content">
        <BandHeading
          id={`${content.send.id}-heading`}
          lead={content.send.lead}
        >
          {content.send.heading}
        </BandHeading>
        <Checklist className="mt-8" items={content.send.items} />
        <Paragraphs className="mt-7" items={[content.send.note]} />
      </Band>

      <Band id={content.onward.id} size="wide">
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
      </Band>

      <Band id={content.faq.id} tone="sunken" size="wide">
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
