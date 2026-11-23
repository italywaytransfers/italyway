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
import { lazio } from "@/content/rome/lazio";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Lazio.
 *
 * ── Built from shared blocks, like the Sorrento page ─────────────────────
 * Sicily and Puglia have bespoke pillar components because their pillars
 * carry bespoke devices — Sicily's three corners, Puglia's coastline. Lazio
 * has no such device to justify one, and inventing a shape for its own sake
 * would be worse than reusing the primitives honestly. Nothing shared was
 * modified to build this.
 *
 * ── Why HeroMeta and not a photographic hero ─────────────────────────────
 * The page opens on three facts rather than a picture, for the same reason
 * Sorrento does: the content is a coverage map, and the useful first
 * impression is *what is covered* rather than what the region looks like.
 * No CC0 photograph of Lazio is in the library either.
 *
 * ── The order, which is the argument ─────────────────────────────────────
 * `coverage` is the page and comes first after the introduction. `limits`
 * follows it immediately and deliberately: the admission that the region is
 * covered selectively has to sit directly under the list, where someone who
 * has just scanned it and not found their town will actually read it.
 * Moving it lower, or into a footnote, would turn an honest page into a
 * misleading one.
 */
export function LazioPage({ locale }: { locale: Locale }) {
  const content = lazio[locale];

  return (
    <>
      <HeroMeta
        id="lazio"
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

      <Band id={content.intro.id} size="content">
        <Eyebrow>{content.intro.eyebrow}</Eyebrow>
        <BandHeading id={`${content.intro.id}-heading`} className="mt-3">
          {content.intro.heading}
        </BandHeading>
        <Paragraphs className="mt-6" items={content.intro.paragraphs} />
      </Band>

      {/* The coverage map. Each group is its own section so a reader
          scanning for "the cruise port" lands on a heading rather than a
          paragraph. */}
      <Band id={content.coverage.id} tone="sunken" size="wide">
        <Eyebrow>{content.coverage.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.coverage.id}-heading`}
          lead={content.coverage.lead}
          className="mt-3"
        >
          {content.coverage.heading}
        </BandHeading>

        <div className="mt-10 space-y-10">
          {content.coverage.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`${content.coverage.id}-${group.id}`}
            >
              <h3
                id={`${content.coverage.id}-${group.id}`}
                className="type-h3 text-foreground"
              >
                {group.heading}
              </h3>
              <p className="mt-2 max-w-[62ch] type-body text-muted-foreground">
                {group.lead}
              </p>
              <LinkIndex
                className="mt-5"
                items={group.items.map((item) => ({
                  id: item.id,
                  href: pathFor(item.page, locale),
                  label: item.label,
                  detail: item.detail,
                }))}
              />
            </section>
          ))}
        </div>
      </Band>

      {/* Directly under the list, by design. See the note above. */}
      <Band id={content.limits.id} size="content">
        <Callout tone="accent" heading={content.limits.heading}>
          <p>{content.limits.body}</p>
        </Callout>
        <Paragraphs className="mt-6" items={[content.limits.note]} />
      </Band>

      <Band id={content.practical.id} tone="sunken" size="content">
        <Eyebrow>{content.practical.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.practical.id}-heading`}
          lead={content.practical.lead}
          className="mt-3"
        >
          {content.practical.heading}
        </BandHeading>
        <dl className="mt-8 space-y-6">
          {content.practical.items.map((item) => (
            <div key={item.term}>
              <dt className="type-label text-accent-ink">{item.term}</dt>
              <dd className="mt-2 max-w-[68ch] type-body text-muted-foreground">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
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
