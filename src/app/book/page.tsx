import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerCallout";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/book";

export const metadata: Metadata = pageMetadata({
  title: "Enquire about Ward Cove excursions",
  description:
    "Enquire about Ward Cove shore excursions — tell us your cruise ship, port hours, and interests. Enquiry-only, no online checkout or instant booking.",
  path,
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire about Ward Cove excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Enquire" }]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only"
          title="Enquire about Ward Cove excursions"
          subtitle="No prices displayed — share your Ward Cove port details and we will recommend excursions that fit your schedule. This is not a booking confirmation."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <CruisePassengerCallout>
              <p>
                Include your cruise line, ship name, port date, all-aboard time, and
                whether you dock at Ward Cove or downtown Ketchikan if known.
              </p>
            </CruisePassengerCallout>
            <ReturnToShipBlock confidence="High" />
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <EnquiryForm />
            </div>
          </div>
          <div>
            <ExcursionLinks title="Popular enquiries" />
          </div>
        </div>
      </div>
    </>
  );
}
