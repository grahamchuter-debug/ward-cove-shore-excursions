import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerCallout } from "@/components/CruisePassengerCallout";
import { ExcursionCard } from "@/components/ExcursionCard";
import { FAQSection } from "@/components/FAQSection";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageTitle } from "@/lib/site";

const path = "/best-ward-cove-shore-excursions";

const faqs = [
  {
    question: "What is the best excursion for first-time visitors?",
    answer:
      "Saxman Native Village or a highlights combo tour balances culture, scenery, and manageable timing. Misty Fjords is unbeatable if you have enough port hours and good weather.",
  },
  {
    question: "Best option for a 4-hour port call?",
    answer:
      "Wildlife cruises with Ward Cove pickup, Saxman tours, or the lumberjack show (with transfer) — all offer high return confidence.",
  },
  {
    question: "Should I book through the ship or independently?",
    answer:
      "Ship tours guarantee ship waits; independent operators experienced with Ward Cove often offer smaller groups and similar schedule discipline. Enquire about return policies either way.",
  },
];

export const metadata: Metadata = {
  title: pageTitle("Best Ward Cove Shore Excursions"),
  description:
    "The best shore excursions from Ward Cove cruise port — ranked by port time, return-to-ship confidence, and transfer logistics for Ketchikan area tours.",
};

const bestByTime = [
  {
    label: "Tight port day (≈4 hours)",
    slugs: ["saxman-native-village", "lumberjack-show", "ketchikan-wildlife-tour"],
  },
  {
    label: "Standard day (5–6 hours)",
    slugs: ["totem-bight", "rainforest-walk", "creek-street-downtown-ketchikan"],
  },
  {
    label: "Extended day (8+ hours)",
    slugs: ["misty-fjords", "fishing", "creek-street-downtown-ketchikan"],
  },
];

export default function BestExcursionsPage() {
  const topPicks = [
    "misty-fjords",
    "saxman-native-village",
    "ketchikan-wildlife-tour",
    "rainforest-walk",
  ]
    .map((s) => getExcursion(s))
    .filter((e): e is NonNullable<typeof e> => e !== undefined);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Ward Cove Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Ward Cove Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Ward Cove Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Curated picks"
          title="Best Ward Cove shore excursions"
          subtitle="Our editorial picks for cruise passengers — matched to port time, transfer needs, and return-to-ship confidence from Ward Cove."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />
          <ReturnToShipBlock />

          <GuideSection title="Top overall picks">
            <p>
              These excursions consistently balance experience quality with Ward Cove
              logistics. See our{" "}
              <Link href="/ward-cove-vs-ketchikan-cruise-port" className="text-teal-700">
                port comparison
              </Link>{" "}
              if you are unsure whether you dock at Ward Cove.
            </p>
          </GuideSection>

          <div className="grid gap-6 sm:grid-cols-2">
            {topPicks.map((e) => (
              <ExcursionCard key={e.slug} excursion={e} />
            ))}
          </div>

          {bestByTime.map((group) => (
            <GuideSection key={group.label} title={group.label}>
              <ul className="space-y-3">
                {group.slugs.map((slug, i) => {
                  const e = getExcursion(slug);
                  if (!e) return null;
                  return (
                    <li key={`${slug}-${i}`} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-lg border p-4">
                      <div>
                        <Link
                          href={`/excursions/${e.slug}`}
                          className="font-semibold text-teal-800 hover:text-teal-950"
                        >
                          {e.title}
                        </Link>
                        <p className="text-sm text-slate-600 mt-1">{e.duration}</p>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Return: {e.returnConfidence}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </GuideSection>
          ))}

          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
