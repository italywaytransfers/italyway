import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { LakeGardaPage } from "@/components/veneto/lake-garda-page";
import { lakeGarda } from "@/content/veneto/lake-garda";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = lakeGarda.it;

export const metadata: Metadata = pageMetadata({
  id: "lake-garda",
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
          id: "lake-garda",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <LakeGardaPage locale="it" />
    </>
  );
}
