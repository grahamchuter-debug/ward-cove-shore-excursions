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

const path = "/ward-cove-shuttle-guide";

const faqs = [
  {
    question: "Does the cruise ship provide a shuttle from Ward Cove to Ketchikan?",
    answer:
      "Many lines offer downtown shuttles — frequency and cost vary. Check your cruise app's port information on embarkation day.",
  },
  {
    question: "Can taxis pick up at Ward Cove?",
    answer:
      "Taxis serve the terminal on busy cruise days, but availability can thin when many ships depart at once. Pre-booked tours avoid that uncertainty.",
  },
  {
    question: "How early should I return to Ward Cove before all-aboard?",
    answer:
      "Aim for the terminal 60–90 minutes before all-aboard if you self-transfer downtown, allowing for shuttle waits and gangway queues.",
  },
];

export const metadata: Metadata = {
  title: pageTitle("Ward Cove Shuttle & Transport Guide"),
  description:
    "Shuttle buses, taxis, and tour transfers from Ward Cove cruise terminal to downtown Ketchikan — timing tips for cruise passengers.",
};

export default function ShuttleGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Ward Cove Shuttle & Transport Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Ward Cove Shuttle Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Ward Cove Shuttle Guide" }]}
        />
        <PageHero
          eyebrow="Transport"
          title="Ward Cove shuttle & transport guide"
          subtitle="How cruise passengers get from Ward Cove to Ketchikan — and back — without missing the ship."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Transfer time is the hidden tax on Ward Cove port days. Budget it before
              you commit to downtown shopping or multi-stop tours.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Cruise line shuttles">
            <p>
              Ships docking at Ward Cove often run motorcoach shuttles to downtown
              Ketchikan. Schedules align with peak ashore hours but may thin in the
              final 90 minutes before all-aboard. Confirm pickup location on port maps
              — usually signed near the terminal exit.
            </p>
          </GuideSection>

          <GuideSection title="Organised tour transfers">
            <p>
              Shore excursions almost always include round-trip transport from Ward
              Cove. This is the lowest-stress option for Saxman, Totem Bight,
              lumberjack show, and combo highlights tours. Operators track ship
              schedules and build return buffers.
            </p>
          </GuideSection>

          <GuideSection title="Taxis and ride services">
            <p>
              Local taxis queue on busy call days. Fares to downtown are typically
              one-way fixed or metered — confirm before departing. Ride-hail
              availability is limited compared with larger cities; do not rely on it
              for your only ride back.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Self-transfer passengers: work backward from all-aboard. If downtown is 25 minutes away in traffic, and shuttle runs every 30 minutes, a 2 pm all-aboard means leaving town well before 1 pm."
          />

          <GuideSection title="Practical timing formula">
            <p>
              Excursion duration + round-trip transfer + 45–60 minute buffer = minimum
              port time needed. A three-hour downtown visit from Ward Cove is rarely
              a three-hour outing.
            </p>
            <p>
              Read our detailed{" "}
              <Link href="/ward-cove-to-ketchikan" className="text-teal-700 font-medium">
                Ward Cove to Ketchikan
              </Link>{" "}
              guide for route context and{" "}
              <Link href="/ward-cove-vs-ketchikan-cruise-port" className="text-teal-700 font-medium">
                port comparison
              </Link>{" "}
              if you are unsure which berth you use.
            </p>
          </GuideSection>

          <ExcursionLinks
            slugs={[
              "creek-street-downtown-ketchikan",
              "saxman-native-village",
              "lumberjack-show",
            ]}
            title="Tours with transfers included"
          />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
