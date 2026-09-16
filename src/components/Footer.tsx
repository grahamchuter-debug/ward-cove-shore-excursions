import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { excursionLinks, guideLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Independent shore excursion guidance for cruise passengers docking at
            Ward Cove — the cruise port north of downtown Ketchikan, Alaska.
          </p>
          <Link
            href="/book"
            className="mt-4 inline-block text-sm font-semibold text-teal-300 hover:text-teal-200"
          >
            Enquire about excursions →
          </Link>
        </div>
        <div>
          <p className="font-semibold text-white">Port &amp; planning guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {guideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Popular excursions</p>
          <ul className="mt-3 space-y-2 text-sm">
            {excursionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            Planning questions:{" "}
            <a
              href="mailto:hello@wardcoveshoreexcursions.com"
              className="text-teal-300 hover:text-teal-200"
            >
              hello@wardcoveshoreexcursions.com
            </a>
            . We reply when we can — not a 24/7 desk.
          </p>
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>
            Ward Cove cruise terminal · Revillagigedo Island · Southeast Alaska
          </p>
        </div>
      </div>
    </footer>
  );
}
