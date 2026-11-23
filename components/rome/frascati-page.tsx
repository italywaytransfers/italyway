import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { frascati } from "@/content/rome/frascati";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Frascati.
 *
 * ── Shares primitives with Tivoli, not a layout ──────────────────────────
 * Both pages are built from the same shared blocks, as Sorrento and Lazio
 * are, and nothing shared was modified for any of them. What they do not
 * share is a shape: Tivoli opens on a two-row comparison table because its
 * whole argument is a split, and carries an explicit band about unreadable
 * sources. Frascati has neither, so it has neither section.
 *
 * `draws` is a reasons list rather than a sightseeing list — three cards,
 * because three is what there honestly is. `access` ends in `checkDirect`,
 * which is advice to ask the venue phrased as help rather than as a
 * disclaimer. That was the brief's explicit instruction: do not repeat the
 * limitation band by reflex.
 */
export function FrascatiPage({ locale }: { locale: Locale }) {
  const content = frascati[locale];

  return (
    <>
      <HeroMeta
        id="frascati"
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
          href: pathFor("route-rome-frascati", locale),
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

      <Band id={content.draws.id} tone="sunken" size="wide">
        <Eyebrow>{content.draws.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.draws.id}-heading`}
          lead={content.draws.lead}
          className="mt-3"
        >
          {content.draws.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.draws.items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="type-label text-accent-ink">{item.label}</h3>
              <p className="mt-3 type-body text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Band id={content.access.id} size="content">
        <Eyebrow>{content.access.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.access.id}-heading`}
          lead={content.access.lead}
          className="mt-3"
        >
          {content.access.heading}
        </BandHeading>
        <dl className="mt-8 space-y-6">
          {content.access.items.map((item) => (
            <div key={item.term}>
              <dt className="type-label text-accent-ink">{item.term}</dt>
              <dd className="mt-2 max-w-[68ch] type-body text-muted-foreground">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
        <Callout className="mt-8" heading={content.access.checkDirect.heading}>
          <p>{content.access.checkDirect.body}</p>
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
