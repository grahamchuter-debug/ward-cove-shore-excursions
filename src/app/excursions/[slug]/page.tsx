import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExcursionPageContent } from "@/components/ExcursionPageContent";
import { JsonLd } from "@/components/JsonLd";
import { excursions, getExcursion } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageTitle } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return excursions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const excursion = getExcursion(slug);
  if (!excursion) return {};
  return {
    title: pageTitle(excursion.title),
    description: excursion.summary,
  };
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
