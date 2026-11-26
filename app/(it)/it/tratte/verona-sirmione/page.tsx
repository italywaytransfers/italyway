import type { Metadata } from "next";
import { RoutePageView } from "@/components/rome/route-page";
import { JsonLd } from "@/components/site/json-ld";
import { routeVeronaSirmione } from "@/content/veneto/sirmione-route";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = routeVeronaSirmione.it;

export const metadata: Metadata = pageMetadata({
  id: "route-verona-sirmione",
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
          id: "route-verona-sirmione",
          locale: "it",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <RoutePageView
        id="route-verona-sirmione"
        content={routeVeronaSirmione}
        locale="it"
      />
    </>
  );
}
