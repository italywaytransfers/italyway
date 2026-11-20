import type { Metadata } from "next";
import { SorrentoPage } from "@/components/campania/sorrento-page";
import { JsonLd } from "@/components/site/json-ld";
import { sorrento } from "@/content/campania/sorrento";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = sorrento.it;

export const metadata: Metadata = pageMetadata({
  id: "sorrento",
  locale: "it",
  title: content.meta.title,
  description: content.meta.description,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "sorrento",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <SorrentoPage locale="it" />
    </>
  );
}
