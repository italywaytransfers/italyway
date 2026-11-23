import type { Metadata } from "next";
import { HotelTransfersPage } from "@/components/rome/hotel-transfers-page";
import { JsonLd } from "@/components/site/json-ld";
import { hotelTransfers } from "@/content/rome/hotel-transfers";
import { pageMetadata } from "@/lib/metadata";
import { pageJsonLd } from "@/lib/structured-data";

const content = hotelTransfers.en;

export const metadata: Metadata = pageMetadata({
  id: "rome-hotel-transfers",
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
          id: "rome-hotel-transfers",
          locale: "en",
          title: content.meta.title,
          description: content.meta.description,
          faq: content.faq.items,
        })}
      />
      <HotelTransfersPage locale="en" />
    </>
  );
}
