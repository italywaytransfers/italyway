import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeRomeFco } from "@/content/rome/departure-routes";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeRomeFco.it;

export const metadata: Metadata = pageMetadata({
  id: "route-rome-fco",
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
          id: "route-rome-fco",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView id="route-rome-fco" content={routeRomeFco} locale="it" />
    </>
  );
}
