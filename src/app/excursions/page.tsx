import type { Metadata } from "next";
import { ExcursionCard } from "@/components/ExcursionCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerCallout";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { excursions } from "@/lib/excursions";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: pageTitle("Ward Cove Shore Excursions"),
  description:
    "Browse shore excursions for cruise passengers at Ward Cove, Alaska — Misty Fjords, totems, wildlife, rainforest walks, fishing, and downtown Ketchikan tours.",
};

export default function ExcursionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
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
