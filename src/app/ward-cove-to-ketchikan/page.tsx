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

const path = "/ward-cove-to-ketchikan";

const faqs = [
  {
    question: "How far is Ward Cove from downtown Ketchikan?",
    answer:
      "About 7 road miles — typically 20–30 minutes by vehicle depending on traffic and stops.",
  },
  {
    question: "What is the fastest way to get downtown?",
    answer:
      "A waiting taxi or a cruise-ship shuttle during peak hours. Organised tours bundle transport with sightseeing time.",
  },
  {
    question: "Can I visit Creek Street and return the same day?",
    answer:
      "Yes, but allow at least 2 hours downtown plus 40–50 minutes total transfer time from Ward Cove.",
  },
];

export const metadata: Metadata = {
  title: pageTitle("Ward Cove to Ketchikan"),
  description:
    "How to get from Ward Cove cruise terminal to downtown Ketchikan — distance, drive time, shuttles, and Creek Street planning for cruise passengers.",
};

export default function WardCoveToKetchikanPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Ward Cove to Ketchikan",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Ward Cove to Ketchikan" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Ward Cove to Ketchikan" }]}
        />
        <PageHero
          eyebrow="Getting around"
          title="Ward Cove to Ketchikan"
          subtitle="The route from your cruise terminal to Creek Street, shopping, and downtown attractions — and what it costs in time."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Downtown Ketchikan is the social and historic heart of the visit — but
              from Ward Cove it is always a journey, never a stroll from the gangway.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="The route">
            <p>
              Tongass Highway connects Ward Cove south toward Ketchikan&apos;s city
              limits. You pass forest, residential pockets, and waterfront glimpses
              before reaching the cruise docks and Creek Street district. There is no
              pedestrian path suitable for tourists along the highway shoulder.
            </p>
          </GuideSection>

          <GuideSection title="How long it takes">
            <p>
              Under light traffic, expect 20 minutes. On peak summer cruise days with
              multiple ships, 25–30 minutes is common. Add 10–15 minutes if your
              shuttle waits to fill or makes multiple stops.
            </p>
          </GuideSection>

          <GuideSection title="What to do downtown">
            <p>
              Creek Street boardwalks, Dolly&apos;s House Museum area, harbour
              photography, salmon viewing in season, and local galleries fill a
              rewarding half-day. Our{" "}
              <Link
                href="/excursions/creek-street-downtown-ketchikan"
                className="text-teal-700 font-medium"
              >
                Creek Street excursion
              </Link>{" "}
              packages efficient transfer time with guided highlights.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Independent downtown visits from Ward Cove need disciplined turnaround. Organised tours handle the clock; self-guided travellers should set a phone alarm 90 minutes before all-aboard."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/ward-cove-shuttle-guide" className="rounded-xl border p-5 hover:border-teal-300">
              <p className="font-semibold">Shuttle guide</p>
              <p className="text-sm text-slate-600 mt-1">Shuttles, taxis, and tour pickups</p>
            </Link>
            <Link href="/things-to-do-from-ward-cove" className="rounded-xl border p-5 hover:border-teal-300">
              <p className="font-semibold">Things to do</p>
              <p className="text-sm text-slate-600 mt-1">Beyond downtown — nature and culture</p>
            </Link>
          </div>

          <ExcursionLinks
            slugs={[
              "creek-street-downtown-ketchikan",
              "lumberjack-show",
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
