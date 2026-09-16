"use client";

import { useEffect, useState } from "react";
import { excursions } from "@/lib/excursions";

const fieldClass =
  "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("excursion");
    const select = document.getElementById("excursion-select");
    if (slug && select instanceof HTMLSelectElement) {
      select.value = slug;
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (typeof fetch !== "function") return;
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const form = e.currentTarget;
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-Requested-With": "fetch",
        },
        body: new FormData(form),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "We could not send your enquiry just now.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We could not send your enquiry just now. Email hello@wardcoveshoreexcursions.com.",
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-emerald-900">Enquiry sent</h2>
        <p className="mt-2 text-emerald-800">
          Thank you. We have received your Ward Cove enquiry and will reply with
          excursion options that fit your ship schedule. This is not a booking
          confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      method="post"
      action="/api/enquire"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <p className="text-sm text-slate-600">
        Enquiry only — we will reply by email. There is no live checkout or
        instant booking.
      </p>
      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      ) : null}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Full name</span>
          <input required type="text" name="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input required type="email" name="email" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Cruise line / ship</span>
          <input
            type="text"
            name="ship"
            className={fieldClass}
            placeholder="e.g. Princess / Discovery Princess"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Port date</span>
          <input type="date" name="portDate" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Hours in port</span>
          <select name="hours" className={fieldClass}>
            <option value="">Select…</option>
            <option value="4">About 4 hours</option>
            <option value="5">About 5 hours</option>
            <option value="6">About 6 hours</option>
            <option value="8">8+ hours</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Excursion interest</span>
          <select id="excursion-select" name="excursion" className={fieldClass}>
            <option value="">Not sure yet</option>
            {excursions.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.shortTitle}
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
          className={fieldClass}
          placeholder="Group size, mobility needs, interests, all-aboard time…"
        />
      </label>
      <button
        type="submit"
        disabled={sending}
        className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 disabled:opacity-60"
      >
        {sending ? "Sending enquiry…" : "Send enquiry"}
      </button>
    </form>
  );
}
