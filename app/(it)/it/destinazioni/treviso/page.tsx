import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { TrevisoCityPage } from "@/components/veneto/treviso-city-page";
import { trevisoCity } from "@/content/veneto/treviso-city";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = trevisoCity.it;

export const metadata: Metadata = pageMetadata({
  id: "treviso",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "treviso",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TrevisoCityPage locale="it" />
    </>
  );
}
