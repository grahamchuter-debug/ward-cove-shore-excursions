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
import { pageMetadata } from "@/lib/site";

const path = "/ward-cove-cruise-port-guide";

const faqs = [
  {
    question: "Where is the Ward Cove cruise terminal?",
    answer:
      "Ward Cove is a cruise port area north of downtown Ketchikan on Revillagigedo Island, along the Tongass Narrows. It is not the historic Berth area beside Creek Street.",
  },
  {
    question: "Can I walk to downtown Ketchikan from Ward Cove?",
    answer:
      "No. Downtown is several road miles south. Plan shuttle, taxi, or an organised tour with transfers included.",
  },
  {
    question: "How long do ships typically stay at Ward Cove?",
    answer:
      "Most calls allow roughly 5–8 hours ashore, but schedules vary by cruise line and itinerary. Check your daily planner for exact arrival, departure, and all-aboard times.",
  },
  {
    question: "What facilities are at the Ward Cove terminal?",
    answer:
      "Expect basic port infrastructure — gangway access, often shuttle staging, and sometimes limited shelter. Shopping and dining are in Ketchikan proper, not at the pier.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Ward Cove Cruise Port Guide",
  description:
    "Complete guide to the Ward Cove Alaska cruise port — terminal logistics, transfer times to Ketchikan, and what cruise passengers can do ashore.",
  path,
});

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Ward Cove Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Ward Cove Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Ward Cove Cruise Port Guide" }]}
        />
        <PageHero
          eyebrow="Port guide"
          title="Ward Cove cruise port guide"
          subtitle="Everything cruise passengers need to know about docking at Ward Cove — Alaska's dedicated berth north of downtown Ketchikan."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              If your cruise itinerary lists Ketchikan, check whether you dock at Ward
              Cove or downtown. The answer changes how much transfer time you need for
              Creek Street, Saxman, and many popular tours.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="Understanding Ward Cove">
            <p>
              Ward Cove developed as a cruise berth to accommodate larger ships and
              spread port traffic along Revillagigedo Island&apos;s eastern shore. The
              terminal sits in a working waterfront setting — forested hills behind,
              Tongass Narrows in front — not in the middle of Ketchikan&apos;s walkable
              historic core.
            </p>
            <p>
              That geography is an advantage for some excursions. Wildlife boats and
              fishing charters can often board nearby. Rainforest trailheads and Misty
              Fjords flightseeing are reachable without crossing congested downtown
              streets first.
            </p>
          </GuideSection>

          <GuideSection title="Terminal logistics">
            <p>
              After gangway, you are on port property — not on a city sidewalk. Cruise
              lines may offer shuttles to downtown; independent operators usually
              meet at designated pickup zones. Confirm the exact meeting point on your
              confirmation.
            </p>
            <p>
              Allow 15–30 minutes each way when tours include Ketchikan stops. Peak
              season traffic on Tongass Highway can add delay on combo tours.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Ward Cove passengers should treat all-aboard as non-negotiable. Build 45–60 minutes after your tour's stated return, more if you self-transfer downtown."
          />

          <GuideSection title="What you can do without leaving the area">
            <p>
              Fishing departures, wildlife cruises with local pickup, and some
              rainforest experiences start close to Ward Cove. Full downtown immersion
              — Creek Street, museums, extended shopping — requires planning covered in
              our{" "}
              <Link href="/ward-cove-to-ketchikan" className="text-teal-700 font-medium">
                Ward Cove to Ketchikan
              </Link>{" "}
              guide.
            </p>
          </GuideSection>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/ward-cove-vs-ketchikan-cruise-port"
              className="rounded-xl border p-5 hover:border-teal-300"
            >
              <p className="font-semibold">Ward Cove vs Ketchikan berths</p>
              <p className="text-sm text-slate-600 mt-1">Compare the two cruise ports</p>
            </Link>
            <Link
              href="/ward-cove-shuttle-guide"
              className="rounded-xl border p-5 hover:border-teal-300"
            >
              <p className="font-semibold">Shuttle & transport guide</p>
              <p className="text-sm text-slate-600 mt-1">Shuttles, taxis, and tour pickups</p>
            </Link>
          </div>

          <ExcursionLinks title="Excursions from Ward Cove" />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
