import type { Metadata } from "next";
import { VeniceCruisePortPage } from "@/components/veneto/cruise-port-page";
import { JsonLd } from "@/components/site/json-ld";
import { veniceCruisePort } from "@/content/veneto/cruise-port";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = veniceCruisePort.en;

export const metadata: Metadata = pageMetadata({
  id: "venice-cruise-port",
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
          id: "venice-cruise-port",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <VeniceCruisePortPage locale="en" />
    </>
  );
}
