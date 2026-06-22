import Link from "next/link";

export function NeedHelpCTA({ excursion }: { excursion?: string }) {
  const bookHref = excursion
    ? `/book?excursion=${encodeURIComponent(excursion)}`
    : "/book";

  return (
    <section className="rounded-xl bg-slate-900 px-6 py-8 text-white md:px-8">
      <h2 className="text-xl font-semibold">Need help choosing?</h2>
      <p className="mt-2 max-w-2xl text-slate-300">
        Tell us your ship, port hours, and interests — we&apos;ll suggest Ward Cove
        excursions that fit your schedule and transfer logistics.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={bookHref}
          className="rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-teal-400 transition-colors"
        >
          Enquire now
        </Link>
        <Link
          href="/cruise-planner"
          className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white hover:border-slate-400 transition-colors"
        >
          Use cruise planner
        </Link>
      </div>
    </section>
  );
}
