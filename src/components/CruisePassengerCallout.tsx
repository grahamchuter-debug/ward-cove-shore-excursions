export function CruisePassengerCallout({ children }: { children?: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-teal-200 bg-teal-50 p-6">
      <h2 className="text-lg font-semibold text-teal-900">
        Best for cruise passengers arriving at Ward Cove
      </h2>
      <div className="mt-3 text-slate-700 leading-relaxed">
        {children ?? (
          <p>
            Ward Cove is a dedicated cruise berth north of downtown Ketchikan — not
            the historic waterfront docks. Plan transfer time, confirm pickup at the
            terminal, and choose excursions matched to your ship&apos;s all-aboard.
          </p>
        )}
      </div>
    </section>
  );
}
