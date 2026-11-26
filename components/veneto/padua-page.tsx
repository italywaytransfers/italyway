import Link from "next/link";
import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
  DataTable,
  DefinitionList,
  Eyebrow,
  LinkIndex,
  Paragraphs,
  QuestionList,
  SourceNote,
} from "@/components/site/blocks";
import { ClosingCta } from "@/components/site/closing-cta";
import { HeroMeta } from "@/components/site/heroes";
import { paduaHub } from "@/content/veneto/padua";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Padua.
 *
 * ── Why HeroMeta, and why no photograph ──────────────────────────────────
 * `HeroMeta` — the compact rule-separated line of facts. Two reasons.
 *
 * The honest one: the CC0 library has 26 photographs and not one is Padua.
 * The three Venice images would be a geographic lie on a page whose entire
 * argument is that Padua is NOT Venice. So there is no hero image, and no
 * credit is rendered anywhere because nothing is shown.
 *
 * The compositional one: within this cluster the openings are already taken
 * — Venice uses HeroEndpoints, Verona HeroModes, Marco Polo HeroSplit, Lake
 * Garda HeroBand. HeroMeta's three facts suit a page that answers a question
 * of eligibility rather than geography: two zones, admitted with the plate
 * registered, under 3.5 tonnes. A reader who takes only those has the page.
 *
 * ── The permission ladder is the page ────────────────────────────────────
 * `permissions` renders as four numbered tiers, each splitting into what it
 * grants and what it withholds. The withholds column is given equal visual
 * weight on purpose: the failure this page prevents is someone reading tier
 * one and believing they have tier four.
 *
 * It sits directly after the hero, before anything commercial, because every
 * later section depends on the distinction. `whitelist` second, since it is
 * the condition attached to tier one and the single most distinctive fact on
 * the site. Then the clocks, then the reader's own address.
 *
 * ── The comparison links out rather than restating ───────────────────────
 * `comparison` renders each city as a link to the page that carries its
 * citation — Rome, Verona, Sirmione — with Padua as the one unlinked row,
 * because the reader is already on it. That keeps four verified regimes side
 * by side without duplicating four explanations, which is the difference
 * between a comparison and a cannibalisation.
 */
export function PaduaPage({ locale }: { locale: Locale }) {
  const content = paduaHub[locale];

  return (
    <>
      <HeroMeta
        id="padua"
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
          href: pathFor("route-venice-padua", locale),
          label: content.hero.secondaryCta,
        }}
        facts={content.hero.facts}
      />

      {/* The ladder. Four tiers, each stating its own limit. */}
      <Band id={content.permissions.id} size="wide">
        <Eyebrow>{content.permissions.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.permissions.id}-heading`}
          lead={content.permissions.lead}
          className="mt-3"
        >
          {content.permissions.heading}
        </BandHeading>
        <ol className="mt-8 space-y-5">
          {content.permissions.tiers.map((tier) => (
            <li
              key={tier.id}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-heading type-label text-accent-ink">
                  {tier.rank}
                </span>
                <h3 className="font-heading type-h3 text-foreground">
                  {tier.name}
                </h3>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-8">
                <p className="type-body text-foreground">{tier.grants}</p>
                {/* Equal weight, deliberately: the limit is the point. */}
                <p className="type-body text-muted-foreground sm:border-l sm:border-border sm:pl-8">
                  {tier.withholds}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <Paragraphs className="mt-7" items={[content.permissions.note]} />
        {content.permissions.sources.map((source) => (
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

      {/* The lista bianca, the 48 hours, and what we will not promise. */}
      <Band id={content.whitelist.id} tone="sunken" size="content">
        <Eyebrow>{content.whitelist.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.whitelist.id}-heading`}
          lead={content.whitelist.lead}
          className="mt-3"
        >
          {content.whitelist.heading}
        </BandHeading>
        {/* The ordinance in its own words, then in plain English. Quoting it
            is the point: this is the sentence nobody else publishes. */}
        <figure className="mt-8 border-l-2 border-accent pl-6">
          <blockquote lang="it" className="font-heading type-h3 text-foreground">
            {content.whitelist.rule.quote}
          </blockquote>
          <figcaption className="mt-4 type-small text-muted-foreground">
            {content.whitelist.rule.gloss}
          </figcaption>
        </figure>
        <Paragraphs className="mt-8" items={content.whitelist.paragraphs} />
        <Callout
          className="mt-8"
          tone="accent"
          heading={content.whitelist.caution.heading}
        >
          <p>{content.whitelist.caution.body}</p>
        </Callout>
        <SourceNote
          className="mt-7"
          href={content.whitelist.source.href}
          linkText={content.whitelist.source.linkText}
        >
          {content.whitelist.source.text}
        </SourceNote>
      </Band>

      {/* Two zones with two clocks, plus the car-free Sundays. */}
      <Band id={content.clocks.id} size="wide">
        <Eyebrow>{content.clocks.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.clocks.id}-heading`}
          lead={content.clocks.lead}
          className="mt-3"
        >
          {content.clocks.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={content.clocks.caption}
          columns={content.clocks.columns}
          rows={content.clocks.rows}
        />
        <div className="mt-9 rounded-lg border border-border bg-surface p-6 sm:p-7">
          <h3 className="font-heading type-h3 text-foreground">
            {content.clocks.sundays.heading}
          </h3>
          <p className="mt-4 max-w-[68ch] type-body text-muted-foreground">
            {content.clocks.sundays.body}
          </p>
          <p className="mt-5 max-w-[68ch] border-t border-border pt-5 type-small text-muted-foreground">
            {content.clocks.sundays.note}
          </p>
        </div>
        {content.clocks.sources.map((source) => (
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

      {/* Centre, outside, station — then the five excluded streets. */}
      <Band id={content.where.id} tone="sunken" size="wide">
        <Eyebrow>{content.where.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.where.id}-heading`}
          lead={content.where.lead}
          className="mt-3"
        >
          {content.where.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {content.where.groups.map((group) => (
            <section
              key={group.id}
              aria-labelledby={`${content.where.id}-${group.id}`}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3
                id={`${content.where.id}-${group.id}`}
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
        {/* Named, and set apart, because this is the fact that changes an
            arrival rather than merely informing it. */}
        <Callout
          className="mt-8"
          tone="accent"
          heading={content.where.forbidden.heading}
        >
          <p>{content.where.forbidden.body}</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {content.where.forbidden.streets.map((street) => (
              <li key={street} className="font-heading type-body">
                {street}
              </li>
            ))}
          </ul>
        </Callout>
        <SourceNote
          className="mt-7"
          href={content.where.source.href}
          linkText={content.where.source.linkText}
        >
          {content.where.source.text}
        </SourceNote>
      </Band>

      <Band id={content.send.id} size="content">
        <BandHeading id={`${content.send.id}-heading`} lead={content.send.lead}>
          {content.send.heading}
        </BandHeading>
        <Checklist className="mt-8" items={content.send.items} />
        <Paragraphs className="mt-7" items={[content.send.note]} />
      </Band>

      {/* Four cities, each linking to the page that carries its source. */}
      <Band id={content.comparison.id} tone="deep" size="wide">
        <Eyebrow tone="deep">{content.comparison.eyebrow}</Eyebrow>
        <BandHeading
          id={`${content.comparison.id}-heading`}
          lead={content.comparison.lead}
          tone="deep"
          className="mt-3"
        >
          {content.comparison.heading}
        </BandHeading>
        <ul className="mt-8 space-y-4">
          {content.comparison.items.map((item) => (
            <li
              key={item.id}
              className="border-t border-deep-line pt-5 sm:grid sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8"
            >
              <p className="font-heading type-h3 text-deep-foreground">
                {item.page ? (
                  <Link
                    href={pathFor(item.page, locale)}
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                  >
                    {item.city}
                  </Link>
                ) : (
                  item.city
                )}
              </p>
              <p className="mt-2 type-body text-deep-muted sm:mt-0">
                {item.rule}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-[68ch] border-t border-deep-line pt-5 type-small text-deep-muted">
          {content.comparison.note}
        </p>
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
