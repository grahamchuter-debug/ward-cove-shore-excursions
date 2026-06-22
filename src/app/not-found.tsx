import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">
        This page does not exist on Ward Cove Shore Excursions.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white">
          Homepage
        </Link>
        <Link href="/excursions" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold">
          Excursions
        </Link>
        <Link href="/book" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold">
          Enquire
        </Link>
      </div>
    </div>
  );
}
