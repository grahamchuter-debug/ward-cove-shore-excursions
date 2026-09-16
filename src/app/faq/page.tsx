import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Ketchikan?",
    answer:
      "Ships use either downtown Ketchikan berths beside the historic waterfront or the Ward Cove cruise terminal north of town. Your itinerary may say Ketchikan for both — check your cruise line's port map.",
  },
  {
    question: "How far is Ward Cove from downtown Ketchikan?",
    answer:
      "About 7 road miles — typically 20–30 minutes by shuttle, taxi, or tour bus each way.",
  },
  {
    question: "Do I need a shuttle from Ward Cove?",
    answer:
      "For downtown attractions, yes. Some excursions pick up at the Ward Cove terminal directly — always confirm meeting point when you enquire.",
  },
  {
    question: "What are the best excursions from Ward Cove?",
    answer:
      "Misty Fjords, Saxman Native Village, wildlife tours, rainforest walks, and fishing are popular. See our best excursions page for picks by port time.",
  },
  {
    question: "How much buffer should I leave before all-aboard?",
    answer:
      "Plan to be back at the terminal 45–60 minutes before all-aboard, longer if you self-transfer downtown without a guaranteed tour return.",
  },
  {
    question: "Can I book excursions on this site?",
    answer:
      "We operate enquiry-only — submit your ship details and interests and we will respond with options. There is no online checkout or displayed pricing.",
  },
  {
    question: "Is Ward Cove the same port as Icy Strait Point?",
    answer:
      "No. Icy Strait Point is near Hoonah, hundreds of miles northwest. Ward Cove is on Revillagigedo Island beside Ketchikan in Southeast Alaska.",
  },
  {
    question: "When is cruise season at Ward Cove?",
    answer:
      "Most calls occur May through September, with peak volume in June, July, and August. Weather is cool and rainy year-round — pack layers.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Ward Cove cruise port, shore excursions, shuttles to Ketchikan, and return-to-ship timing.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "FAQ",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          title="Frequently asked questions"
          subtitle="Ward Cove port logistics, excursions, and planning — answered for cruise passengers."
        />

        <div className="mt-10 space-y-8">
          <FAQSection faqs={faqs} title="General" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/ward-cove-cruise-port-guide" className="rounded-xl border p-5 hover:border-teal-300">
              <p className="font-semibold">Port guide</p>
              <p className="text-sm text-slate-600 mt-1">Terminal overview</p>
            </Link>
            <Link href="/book" className="rounded-xl border p-5 hover:border-teal-300">
              <p className="font-semibold">Enquire</p>
              <p className="text-sm text-slate-600 mt-1">Get personalised help</p>
            </Link>
          </div>

          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
