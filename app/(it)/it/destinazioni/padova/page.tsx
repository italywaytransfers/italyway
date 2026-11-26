import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { PaduaPage } from "@/components/veneto/padua-page";
import { paduaHub } from "@/content/veneto/padua";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = paduaHub.it;

export const metadata: Metadata = pageMetadata({
  id: "padua",
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
          id: "padua",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <PaduaPage locale="it" />
    </>
  );
}
