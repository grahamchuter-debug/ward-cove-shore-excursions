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

const path = "/things-to-do-from-ward-cove";

const faqs = [
  {
    question: "Can I stay near the terminal without a tour?",
    answer:
      "The immediate port area is industrial — most passengers book excursions or take shuttles rather than lingering at the pier.",
  },
  {
    question: "What is best on a rainy day?",
    answer:
      "Lumberjack show, Saxman cultural tours, and salmon cooking experiences offer shelter. Rainforest walks still run with good rain gear.",
  },
  {
    question: "Are there free things to do?",
    answer:
      "Downtown wandering and salmon viewing can be low-cost if you manage shuttle fares. Most signature Alaska experiences are guided tours.",
  },
];

const categories = [
  {
    title: "Culture & history",
    items: [
      { label: "Saxman Native Village", href: "/excursions/saxman-native-village" },
      { label: "Totem Bight State Park", href: "/excursions/totem-bight" },
      { label: "Creek Street & downtown", href: "/excursions/creek-street-downtown-ketchikan" },
    ],
  },
  {
    title: "Nature & wildlife",
    items: [
      { label: "Misty Fjords", href: "/ward-cove-misty-fjords-excursions" },
      { label: "Wildlife tour", href: "/excursions/ketchikan-wildlife-tour" },
      { label: "Rainforest walk", href: "/excursions/rainforest-walk" },
    ],
  },
  {
    title: "Adventure & entertainment",
    items: [
      { label: "Lumberjack show", href: "/excursions/lumberjack-show" },
      { label: "Fishing excursions", href: "/excursions/fishing" },
    ],
  },
];

export const metadata: Metadata = {
  title: pageTitle("Things to Do from Ward Cove"),
  description:
    "Things to do from Ward Cove cruise port — culture, wildlife, rainforest, fishing, and downtown Ketchikan with realistic transfer times.",
};

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things to Do from Ward Cove",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Things to Do from Ward Cove" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[{ name: "Home", href: "/" }, { name: "Things to Do from Ward Cove" }]}
        />
        <PageHero
          eyebrow="Ideas ashore"
          title="Things to do from Ward Cove"
          subtitle="Culture, rainforest, wildlife, fishing, and downtown Ketchikan — what fits your port day from the Ward Cove cruise terminal."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerCallout />
          <ReturnToShipBlock />

          {categories.map((cat) => (
            <GuideSection key={cat.title} title={cat.title}>
              <ul className="grid gap-3 sm:grid-cols-3">
                {cat.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium hover:border-teal-300 hover:bg-teal-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </GuideSection>
          ))}

          <GuideSection title="Plan your time">
            <p>
              Use the{" "}
              <Link href="/cruise-planner" className="text-teal-700 font-medium">
                cruise planner
              </Link>
              , read{" "}
              <Link href="/best-ward-cove-shore-excursions" className="text-teal-700 font-medium">
                best excursions
              </Link>
              , and confirm transfers via the{" "}
              <Link href="/ward-cove-shuttle-guide" className="text-teal-700 font-medium">
                shuttle guide
              </Link>
              .
            </p>
          </GuideSection>

          <ExcursionLinks title="All Ward Cove excursions" />
          <FAQSection faqs={faqs} />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
