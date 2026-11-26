import { Band } from "@/components/site/band";
import {
  BandHeading,
  Callout,
  Checklist,
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
import { Cta } from "@/components/site/cta";
import { HeroRoute } from "@/components/site/heroes";
import { routeVrnGarda } from "@/content/veneto/garda-route";
import { pathFor } from "@/lib/routes";
import { quotePathFor, type Locale } from "@/lib/site";

/**
 * Verona Airport ↔ Lake Garda.
 *
 * ── Nothing shared was modified to build this ────────────────────────────
 * The page uses `HeroRoute` — the same opening every route page in the
 * project uses — and then composes shared blocks. `components/rome/
 * route-page.tsx` is untouched, and so is every type it depends on, because
 * this page has its own content type. The reason is in the type's own
 * comment: one origin and five destinations will not fit a shape built for
 * `endpoints.from` and `endpoints.to`.
 *
 * ── The order, and why it is this order ──────────────────────────────────
 * `howItWorks` first, because the reader has just landed and wants the
 * mechanics, not the scenery. `towns` second: the question that decides
 * whether they enquire at all is "do you go where I'm going", and the answer
 * is five named places.
 *
 * `sirmione` gets a band of its own immediately after. It could have been a
 * sixth town entry, and that would have buried the only genuinely
 * complicated destination on the list inside a list of five. It is built as
 * a four-step chain — we can arrange it / entry is conditional / there is a
 * barrier / where you actually stop — so a reader cannot take the first step
 * and assume the fourth.
 *
 * Then `compare` as the scannable summary of the two sections above,
 * `arrival`, then `ret` on a deep band with its own call to action, because
 * the return is a separate intent and a separate booking. `transport`,
 * `confirm` and `process` close the commercial half before the FAQ.
 *
 * ── No photograph, and no credit ─────────────────────────────────────────
 * The CC0 library has no Lake Garda, no Verona airport and none of the five
 * towns. `HeroRoute` needs no image, so the page has none, and nothing is
 * credited anywhere because nothing is shown.
 */
export function GardaRoutePage({ locale }: { locale: Locale }) {
  const c = routeVrnGarda[locale];
  const quote = quotePathFor(locale);

  return (
    <>
      <HeroRoute
        id="route-vrn-garda"
        locale={locale}
        breadcrumbLabel={c.breadcrumbLabel}
        from={c.hero.from}
        to={c.hero.to}
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primaryCta={{ href: quote, label: c.hero.primaryCta }}
        secondaryCta={{
          href: pathFor("lake-garda", locale),
          label: c.hero.secondaryCta,
        }}
        note={c.hero.note}
      />

      {/* The mechanics, for someone standing at the belt. */}
      <Band id={c.howItWorks.id} size="content">
        <Eyebrow>{c.howItWorks.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.howItWorks.id}-heading`}
          lead={c.howItWorks.lead}
          className="mt-3"
        >
          {c.howItWorks.heading}
        </BandHeading>
        <Paragraphs className="mt-7" items={c.howItWorks.paragraphs} />
        <DefinitionList className="mt-8" items={c.howItWorks.terms} />
        <p className="mt-7 max-w-[64ch] border-t border-border pt-5 type-small text-muted-foreground">
          {c.howItWorks.note}
        </p>
      </Band>

      {/* Five towns, each with its own reason to be named. */}
      <Band id={c.towns.id} tone="sunken" size="wide">
        <Eyebrow>{c.towns.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.towns.id}-heading`}
          lead={c.towns.lead}
          className="mt-3"
        >
          {c.towns.heading}
        </BandHeading>
        <ul className="mt-8 grid gap-5 lg:grid-cols-2">
          {c.towns.items.map((town) => (
            <li
              key={town.id}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <h3 className="font-heading type-h3 text-foreground">
                {town.name}
              </h3>
              <p className="mt-2 type-caption text-muted-foreground">
                {town.comune}
              </p>
              <p className="mt-5 type-body text-foreground">{town.suits}</p>
              <p className="mt-4 border-t border-border pt-4 type-small text-muted-foreground">
                <span className="font-medium text-accent-ink">
                  {locale === "it" ? "Conta di più: " : "What matters most: "}
                </span>
                {town.matters}
              </p>
            </li>
          ))}
        </ul>
        <Paragraphs className="mt-7" items={[c.towns.note]} />
        {c.towns.sources.map((s) => (
          <SourceNote
            key={s.href + s.linkText}
            className="mt-5"
            href={s.href}
            linkText={s.linkText}
          >
            {s.text}
          </SourceNote>
        ))}
      </Band>

      {/* The one town that needs a chain rather than a paragraph. */}
      <Band id={c.sirmione.id} size="content">
        <Eyebrow>{c.sirmione.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.sirmione.id}-heading`}
          lead={c.sirmione.lead}
          className="mt-3"
        >
          {c.sirmione.heading}
        </BandHeading>
        <NumberedSteps className="mt-8" items={c.sirmione.chain} />
        <Callout
          className="mt-8"
          tone="accent"
          heading={c.sirmione.caution.heading}
        >
          <p>{c.sirmione.caution.body}</p>
        </Callout>
        {c.sirmione.sources.map((s) => (
          <SourceNote
            key={s.href + s.linkText}
            className="mt-5"
            href={s.href}
            linkText={s.linkText}
          >
            {s.text}
          </SourceNote>
        ))}
      </Band>

      <Band id={c.compare.id} tone="sunken" size="wide">
        <Eyebrow>{c.compare.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.compare.id}-heading`}
          lead={c.compare.lead}
          className="mt-3"
        >
          {c.compare.heading}
        </BandHeading>
        <DataTable
          className="mt-8"
          caption={c.compare.caption}
          columns={c.compare.columns}
          rows={c.compare.rows}
        />
        <Paragraphs className="mt-7" items={[c.compare.note]} />
      </Band>

      <Band id={c.arrival.id} size="content">
        <Eyebrow>{c.arrival.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.arrival.id}-heading`}
          lead={c.arrival.lead}
          className="mt-3"
        >
          {c.arrival.heading}
        </BandHeading>
        <Checklist className="mt-8" items={c.arrival.items} />
        <Paragraphs className="mt-7" items={[c.arrival.note]} />
      </Band>

      {/* The return: its own intent, its own checklist, its own CTA. */}
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
            <p key={p.slice(0, 32)} className="max-w-[68ch] type-body text-deep-muted">
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

      {/* A comparison that is allowed to say "not always". */}
      <Band id={c.transport.id} size="wide">
        <Eyebrow>{c.transport.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.transport.id}-heading`}
          lead={c.transport.lead}
          className="mt-3"
        >
          {c.transport.heading}
        </BandHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {c.transport.columns.map((col) => (
            <section
              key={col.id}
              aria-labelledby={`${c.transport.id}-${col.id}`}
              className="rounded-lg border border-border bg-surface p-6 sm:p-7"
            >
              <h3
                id={`${c.transport.id}-${col.id}`}
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
        <Paragraphs className="mt-7" items={[c.transport.note]} />
        {c.transport.sources.map((s) => (
          <SourceNote
            key={s.href + s.linkText}
            className="mt-5"
            href={s.href}
            linkText={s.linkText}
          >
            {s.text}
          </SourceNote>
        ))}
      </Band>

      <Band id={c.confirm.id} tone="sunken" size="content">
        <BandHeading id={`${c.confirm.id}-heading`} lead={c.confirm.lead}>
          {c.confirm.heading}
        </BandHeading>
        <Checklist className="mt-8" items={c.confirm.items} />
        <Paragraphs className="mt-7" items={[c.confirm.note]} />
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

      <Band id={c.related.id} tone="sunken" size="wide">
        <Eyebrow>{c.related.eyebrow}</Eyebrow>
        <BandHeading
          id={`${c.related.id}-heading`}
          lead={c.related.lead}
          className="mt-3"
        >
          {c.related.heading}
        </BandHeading>
        <LinkIndex
          className="mt-8"
          items={c.related.items.map((item) => ({
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
