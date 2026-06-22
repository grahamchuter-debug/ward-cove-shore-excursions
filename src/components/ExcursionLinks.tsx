import Link from "next/link";
import { excursions } from "@/lib/excursions";

type ExcursionLinksProps = {
  slugs?: string[];
  title?: string;
};

export function ExcursionLinks({
  slugs,
  title = "Related excursions",
}: ExcursionLinksProps) {
  const items = slugs
    ? slugs
        .map((s) => excursions.find((e) => e.slug === s))
        .filter((e): e is (typeof excursions)[number] => e !== undefined)
    : excursions.slice(0, 4);

  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((excursion) => (
          <li key={excursion.slug}>
            <Link
              href={`/excursions/${excursion.slug}`}
              className="block rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-800 hover:border-teal-300 hover:bg-teal-50"
            >
              {excursion.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
