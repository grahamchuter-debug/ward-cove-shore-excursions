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

const path = "/ward-cove-misty-fjords-excursions";

const faqs = [
  {
    question: "Is Misty Fjords worth it from Ward Cove?",
    answer:
      "For many passengers it is the highlight of an Alaska cruise — sheer cliffs, waterfalls, and wilderness scale. Ward Cove is well positioned for departures that skip downtown traffic.",
  },
  {
    question: "Flight or boat — which is better?",
    answer:
      "Flights are faster and more dramatic if weather allows. Boats offer more deck time and wildlife odds en route but need longer port windows.",
  },
  {
    question: "What happens if weather cancels a flight?",
    answer:
      "Operators may reschedule, offer boat alternatives, or provide refunds per policy. Ask when you enquire and keep flexible expectations on marginal weather days.",
  },
  {
    question: "How much port time do I need?",
    answer:
      "Short flightseeing: roughly 5 hours total. Full boat expeditions into the monument: 6+ hours. Use our cruise planner to check fit.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Misty Fjords from Ward Cove",
  description:
    "Misty Fjords National Monument excursions from Ward Cove cruise port — seaplane vs boat, duration, weather, and return-to-ship planning.",
  path,
});

export default function MistyFjordsGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Misty Fjords from Ward Cove",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Misty Fjords from Ward Cove" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Misty Fjords from Ward Cove" },
          ]}
        />
        <PageHero
          eyebrow="Scenic guide"
          title="Misty Fjords excursions from Ward Cove"
          subtitle="Alaska's cathedral of granite and waterfalls — how to experience Misty Fjords National Monument on a Ward Cove port day."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout>
            <p>
              Ward Cove passengers often reach Misty Fjords departures faster than
              ships tied downtown — less time on a bus, more time under cliffs and
              clouds.
            </p>
          </CruisePassengerCallout>

          <GuideSection title="What is Misty Fjords?">
            <p>
              Misty Fjords National Monument protects more than two million acres of
              fjords, rainforest, and wildlife habitat east of Ketchikan. Rudyerd Bay
              and similar inlets deliver the classic images — vertical walls, hanging
              valleys, and waterfalls that appear to fall from the sky.
            </p>
          </GuideSection>

          <GuideSection title="Seaplane flightseeing">
            <p>
              Floatplanes lift from salt water and reach the monument in minutes. Tours
              may include lake landings, narration from the pilot, and windows for every
              passenger. Duration ranges from under two hours airborne to longer loops
              depending on operator and weather routing.
            </p>
            <p>
              Low cloud and wind are real constraints. Morning flights often have the
              best odds in summer. Confirm Ward Cove vs harbour meeting point when
              booking.
            </p>
          </GuideSection>

          <GuideSection title="Boat expeditions">
            <p>
              Larger vessels trace the Inside Passage before turning into monument
              waters. You trade altitude for pace — more wildlife scanning on deck,
              more total hours ashore. Best for passengers with extended port time who
              prefer boats to small aircraft.
            </p>
          </GuideSection>

          <ReturnToShipBlock
            confidence="Moderate"
            note="Misty Fjords is rarely a 4-hour port option. Confirm advertised return at Ward Cove terminal, not a downtown pier, and keep 60 minutes beyond stated tour end."
          />

          <div className="rounded-xl bg-teal-50 border border-teal-200 p-6">
            <p className="font-semibold text-teal-900">Ready to book?</p>
            <p className="mt-2 text-teal-800 text-sm">
              See our full{" "}
              <Link href="/excursions/misty-fjords" className="underline font-medium">
                Misty Fjords excursion page
              </Link>{" "}
              for fitness level, transfer details, and enquiry form.
            </p>
          </div>

          <ExcursionLinks
            slugs={["misty-fjords", "ketchikan-wildlife-tour", "fishing"]}
            title="Related water-based excursions"
          />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA excursion="misty-fjords" />
        </div>
      </div>
    </>
  );
}
