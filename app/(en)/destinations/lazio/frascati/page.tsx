import type { Metadata } from "next";
import { FrascatiPage } from "@/components/rome/frascati-page";
import { JsonLd } from "@/components/site/json-ld";
import { frascati } from "@/content/rome/frascati";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = frascati.en;

export const metadata: Metadata = pageMetadata({
  id: "frascati",
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
          id: "frascati",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <FrascatiPage locale="en" />
    </>
  );
}
