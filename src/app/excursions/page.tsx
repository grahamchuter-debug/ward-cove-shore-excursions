import type { Metadata } from "next";
import { ExcursionCard } from "@/components/ExcursionCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerCallout";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/excursions";
const excursionsTitle = "Shore Excursions from Ward Cove Cruise Port";
const excursionsDescription =
  "Browse Ward Cove shore excursions — Misty Fjords, totems, wildlife, rainforest walks, fishing, and downtown Ketchikan tours with shuttle and transfer context.";

export const metadata: Metadata = pageMetadata({
  title: excursionsTitle,
  description: excursionsDescription,
  path,
});

export default function ExcursionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={[
          webPageSchema({
            title: excursionsTitle,
            description: excursionsDescription,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Excursions" }]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Excursions" },
        ]}
      />
      <PageHero
        eyebrow="Ward Cove excursions"
        title="Shore excursions from Ward Cove"
        subtitle="Every listing includes Ward Cove logistics, transfer requirements, and return-to-ship confidence. Enquire for availability — no online checkout."
      />

      <div className="mt-10 space-y-8">
        <CruisePassengerCallout />
        <ReturnToShipBlock />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
        <NeedHelpCTA />
      </div>
    </div>
  );
}
