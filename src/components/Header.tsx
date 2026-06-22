import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { mainNav } from "@/lib/navigation";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="group">
          <span className="block text-lg font-bold tracking-tight text-slate-900 group-hover:text-teal-800">
            {SITE_NAME}
          </span>
          <span className="block text-xs text-slate-500">
            Ward Cove, Alaska cruise port
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-teal-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/book"
          className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
        >
          Enquire
        </Link>
      </div>
      <nav className="border-t border-slate-100 bg-slate-50 md:hidden">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-sm">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-slate-700 hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
