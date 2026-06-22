"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { excursions } from "@/lib/excursions";

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("excursion") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-emerald-900">Enquiry received</h2>
        <p className="mt-2 text-emerald-800">
          Thank you — we&apos;ll respond with Ward Cove excursion options matched to
          your ship schedule. This demo form does not send email yet; connect your
          preferred handler in production.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input
            required
            type="text"
            name="name"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Cruise line / ship</span>
          <input
            type="text"
            name="ship"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            placeholder="e.g. Princess / Discovery Princess"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Port date</span>
          <input
            type="date"
            name="portDate"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Hours in port</span>
          <select
            name="hours"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Select…</option>
            <option value="4">About 4 hours</option>
            <option value="5">About 5 hours</option>
            <option value="6">About 6 hours</option>
            <option value="8">8+ hours</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Excursion interest</span>
          <select
            name="excursion"
            defaultValue={preselected}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option value="">Not sure yet</option>
            {excursions.map((e) => (
              <option key={e.slug} value={e.slug}>
                {e.shortTitle}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Message</span>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Group size, mobility needs, interests, all-aboard time…"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Send enquiry
      </button>
    </form>
  );
}

export function EnquiryForm() {
  return (
    <Suspense fallback={<p className="text-slate-600">Loading form…</p>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
