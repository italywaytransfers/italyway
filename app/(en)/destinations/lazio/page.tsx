import type { Metadata } from "next";
import { LazioPage } from "@/components/rome/lazio-page";
import { JsonLd } from "@/components/site/json-ld";
import { lazio } from "@/content/rome/lazio";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = lazio.en;

export const metadata: Metadata = pageMetadata({
  id: "lazio",
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
          id: "lazio",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <LazioPage locale="en" />
    </>
  );
}
