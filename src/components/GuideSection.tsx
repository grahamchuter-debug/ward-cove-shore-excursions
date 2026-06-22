import Link from "next/link";

type GuideSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function GuideSection({ title, children }: GuideSectionProps) {
  return (
    <section className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-semibold text-slate-900 not-prose">{title}</h2>
      <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">{children}</div>
    </section>
  );
}

export function GuideLinkGrid({
  links,
}: {
  links: { href: string; label: string; description: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-xl border border-slate-200 p-5 hover:border-teal-300 hover:bg-teal-50/50 transition-colors"
        >
          <p className="font-semibold text-slate-900">{link.label}</p>
          <p className="mt-1 text-sm text-slate-600">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
