import type { Metadata } from "next";
import { TivoliPage } from "@/components/rome/tivoli-page";
import { JsonLd } from "@/components/site/json-ld";
import { tivoli } from "@/content/rome/tivoli";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = tivoli.en;

export const metadata: Metadata = pageMetadata({
  id: "tivoli",
  locale: "en",
  title: content.meta.title,
  description: content.meta.description,
  brandedTitle: false,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={pageJsonLd({
          id: "tivoli",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <TivoliPage locale="en" />
    </>
  );
}
