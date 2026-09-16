import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionPageContent } from "@/components/ExcursionPageContent";
import { JsonLd } from "@/components/JsonLd";
import { excursions, getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return excursions.map((e) => ({ slug: e.slug }));
}

const ctrDescriptions: Record<string, string> = {
  "creek-street-downtown-ketchikan":
    "Creek Street and downtown Ketchikan from Ward Cove cruise port. Plan a shuttle or tour transfer — the Ward Cove terminal is not walkable to town.",
  "saxman-native-village":
    "Saxman Native Village from Ward Cove cruise port: Tlingit heritage, totems, and cultural tours with transfer time from the terminal. Enquire for options that fit your ship.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const excursion = getExcursion(slug);
  if (!excursion) return {};
  return pageMetadata({
    title: excursion.title,
    description: ctrDescriptions[slug] ?? excursion.summary,
    path: `/excursions/${slug}`,
  });
}

export default async function ExcursionDetailPage({ params }: Props) {
  const { slug } = await params;
  const excursion = getExcursion(slug);
  if (!excursion) notFound();

  const path = `/excursions/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: excursion.title,
            description: excursion.summary,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Excursions", href: "/excursions" },
            { name: excursion.shortTitle },
          ]),
          faqSchema(excursion.faqs),
        ]}
      />
      <ExcursionPageContent excursion={excursion} />
    </>
  );
}
