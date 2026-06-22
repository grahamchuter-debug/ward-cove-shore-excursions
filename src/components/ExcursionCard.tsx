import Link from "next/link";
import type { Excursion } from "@/lib/excursions";

export function ExcursionCard({ excursion }: { excursion: Excursion }) {
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-slate-900">
        <Link
          href={`/excursions/${excursion.slug}`}
          className="hover:text-teal-800"
        >
          {excursion.shortTitle}
        </Link>
      </h3>
      <p className="mt-2 flex-grow text-sm text-slate-600">{excursion.summary}</p>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
        <div>
          <dt className="font-medium text-slate-700">Duration</dt>
          <dd>{excursion.duration}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Fitness</dt>
          <dd>{excursion.fitness}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Transfer</dt>
          <dd>{excursion.transferRequired ? "Required" : "Often not needed"}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-700">Return confidence</dt>
          <dd>{excursion.returnConfidence}</dd>
        </div>
      </dl>
      <Link
        href={`/excursions/${excursion.slug}`}
        className="mt-4 text-sm font-semibold text-teal-700 hover:text-teal-900"
      >
        View details →
      </Link>
    </article>
  );
}
