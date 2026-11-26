import type { Metadata } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { GardaRoutePage } from "@/components/veneto/garda-route-page";
import { routeVrnGarda } from "@/content/veneto/garda-route";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeVrnGarda.it;

export const metadata: Metadata = pageMetadata({
  id: "route-vrn-garda",
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
          id: "route-vrn-garda",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <GardaRoutePage locale="it" />
    </>
  );
}
