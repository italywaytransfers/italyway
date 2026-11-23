import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  DataTable,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { tivoli } from "@/content/rome/tivoli";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Tivoli.
 *
 * ── A short page, laid out so the shortness reads as deliberate ──────────
 * This page knows less about its subject than any other destination page on
 * the site, because every official Tivoli source was unreachable when it
 * was written. The layout is built around that rather than disguising it.
 *
 * The `sites` table carries almost the whole argument: two destinations,
 * three rows, side by side. Then `unverified` states in plain words what is
 * missing and why — placed immediately after the table, where a reader who
 * has just learned there are two sites will next want addresses and hours
 * and needs to be told, there and then, that this page does not have them.
 *
 * Burying that admission at the foot of the page, or omitting it, would
 * leave a thin page pretending to be a complete one. It is the most
 * important block here and must not be removed to balance the layout.
 *
 * ── No photograph, and no component changes ──────────────────────────────
 * Nothing of Tivoli is in the CC0 library, so the hero is `HeroMeta` like
 * Sorrento's and Lazio's. Every block below is a shared primitive used as
 * it already exists; nothing shared was modified for this page.
 */
export function TivoliPage({ locale }: { locale: Locale }) {
  const content = tivoli[locale];

  return (
    <>
      <HeroMeta
        id="tivoli"
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
          href: pathFor("route-rome-tivoli", locale),
          label: content.hero.secondaryCta,
        }}
        facts={content.hero.facts}
      />

      <Band id={content.intro.id} size="content">
        <Eyebrow>{content.intro.eyebrow}</Eyebrow>
        <BandHeading id={`${content.intro.id}-heading`} className="mt-3">
          {content.intro.heading}
        </BandHeading>
        <Paragraphs className="mt-6" items={content.intro.paragraphs} />
      </Band>

      {/* The whole point of the page. */}
      <Band id={content.sites.id} tone="sunken" size="wide">
        <Eyebrow>{content.sites.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.sites.id}-heading`}
          lead={content.sites.lead}
          className="mt-3"
        >
          {content.sites.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.sites.caption}
          columns={content.sites.columns}
          rows={content.sites.rows}
        />
        <Paragraphs className="mt-7" items={[content.sites.note]} />
      </Band>

      {/* Immediately after the table, where the question it answers arises. */}
      <Band id={content.unverified.id} size="content">
        <Callout tone="accent" heading={content.unverified.heading}>
          <p>{content.unverified.body}</p>
        </Callout>
        <Paragraphs className="mt-6" items={[content.unverified.note]} />
      </Band>

      <Band id={content.planning.id} tone="sunken" size="content">
        <Eyebrow>{content.planning.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.planning.id}-heading`}
          lead={content.planning.lead}
          className="mt-3"
        >
          {content.planning.heading}
        </BandHeading>
        <dl className="mt-8 space-y-6">
          {content.planning.items.map((item) => (
            <div key={item.term}>
              <dt className="type-label text-accent-ink">{item.term}</dt>
              <dd className="mt-2 max-w-[68ch] type-body text-muted-foreground">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
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
