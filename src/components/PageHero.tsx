type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-800 px-6 py-12 text-white md:px-10 md:py-16">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-300 via-transparent to-transparent" />
      <div className="relative max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-300">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-slate-200">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
