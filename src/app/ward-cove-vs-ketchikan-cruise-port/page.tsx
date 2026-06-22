import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerCallout";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageTitle } from "@/lib/site";

const path = "/ward-cove-vs-ketchikan-cruise-port";

const faqs = [
  {
    question: "Is Ward Cove the same as Ketchikan?",
    answer:
      "Ward Cove is part of the greater Ketchikan area on Revillagigedo Island, but the cruise terminal is not downtown. It is a separate berth roughly 7 miles north of Creek Street.",
  },
  {
    question: "Which port is better for shore excursions?",
    answer:
      "Neither is universally better. Ward Cove can mean quicker access to some water departures; downtown berths put you beside Creek Street on foot. Match excursions to your actual dock.",
  },
  {
    question: "Do the same tours serve both ports?",
    answer:
      "Many operators serve both, but pickup points differ. Always confirm Ward Cove terminal pickup when your ship docks there.",
  },
];

export const metadata: Metadata = {
  title: pageTitle("Ward Cove vs Ketchikan Cruise Port"),
  description:
    "Ward Cove vs downtown Ketchikan cruise berths — distances, transfer times, and which shore excursions work best from each port.",
};

export default function VsKetchikanPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Ward Cove vs Ketchikan Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Ward Cove vs Ketchikan Cruise Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Ward Cove vs Ketchikan Cruise Port" },
          ]}
        />
        <PageHero
          eyebrow="Port comparison"
          title="Ward Cove vs Ketchikan cruise port"
          subtitle="Two different gangways, two different logistics — why your dock location matters for timing, transfers, and excursion choice."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Itineraries often say &quot;Ketchikan&quot; regardless of berth. Ward Cove
              passengers need extra transfer time for downtown-focused tours and should
              favour operators with terminal pickup.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Downtown Ketchikan berths">
            <p>
              Historic cruise docks sit beside Ketchikan&apos;s waterfront — Creek Street,
              the library, and shopping within short walking distance. Saxman and Totem
              Bight still require road transport, but downtown exploration fits easily
              into a port day without a dedicated shuttle leg from Ward Cove.
            </p>
          </GuideSection>

          <GuideSection title="Ward Cove berth">
            <p>
              Ward Cove places you north of town in a purpose-built cruise terminal
              area. You trade walkable downtown access for typically shorter routes to
              some harbour departures and Tongass trailheads. Every downtown hour costs
              roughly 40–50 minutes in round-trip driving plus boarding time.
            </p>
          </GuideSection>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Ward Cove</th>
                  <th className="px-4 py-3 font-semibold">Downtown Ketchikan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium">Creek Street access</td>
                  <td className="px-4 py-3">Shuttle or tour required</td>
                  <td className="px-4 py-3">Walkable from pier</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Typical transfer to town</td>
                  <td className="px-4 py-3">20–30 min each way</td>
                  <td className="px-4 py-3">Minimal</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Harbour / fishing pickup</td>
                  <td className="px-4 py-3">Often closer</td>
                  <td className="px-4 py-3">Varies by operator</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Return-to-ship planning</td>
                  <td className="px-4 py-3">Build transfer buffers</td>
                  <td className="px-4 py-3">Simpler for downtown-only days</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Ward Cove combo tours that hit Saxman, lumberjack show, and downtown stack transfers — verify total elapsed time before booking on shorter port calls."
          />

          <GuideSection title="Which excursions suit Ward Cove best?">
            <p>
              Misty Fjords flightseeing, wildlife cruises with Ward Cove pier pickup,
              rainforest walks, and fishing charters minimise wasted transfer time.
              Downtown-centric shopping days are still possible via our{" "}
              <Link href="/excursions/creek-street-downtown-ketchikan" className="text-teal-700">
                Creek Street excursion
              </Link>{" "}
              or{" "}
              <Link href="/ward-cove-to-ketchikan" className="text-teal-700">
                transport guide
              </Link>
              .
            </p>
          </GuideSection>

          <ExcursionLinks
            slugs={[
              "misty-fjords",
              "ketchikan-wildlife-tour",
              "creek-street-downtown-ketchikan",
              "saxman-native-village",
            ]}
          />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
