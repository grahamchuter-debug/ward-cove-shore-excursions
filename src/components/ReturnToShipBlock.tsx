import type { ReturnConfidence } from "@/lib/excursions";

const confidenceStyles: Record<ReturnConfidence, string> = {
  High: "bg-emerald-100 text-emerald-800",
  Moderate: "bg-amber-100 text-amber-800",
  Tight: "bg-rose-100 text-rose-800",
};

type ReturnToShipBlockProps = {
  confidence?: ReturnConfidence;
  note?: string;
};

export function ReturnToShipBlock({
  confidence = "Moderate",
  note,
}: ReturnToShipBlockProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-semibold text-slate-900">
          Return-to-ship timing
        </h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${confidenceStyles[confidence]}`}
        >
          {confidence} confidence
        </span>
      </div>
      <p className="mt-3 text-slate-700 leading-relaxed">
        {note ??
          "Build at least 45–60 minutes between your excursion's stated return and your ship's all-aboard time. Ward Cove transfers add 20–30 minutes when tours include downtown Ketchikan."}
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Organised shore excursions from reputable operators are structured around
        cruise schedules. Confirm pickup and drop-off at Ward Cove when you enquire.
      </p>
    </section>
  );
}
