type FAQSectionProps = {
  faqs: { question: string; answer: string }[];
  title?: string;
};

export function FAQSection({ faqs, title = "Frequently asked questions" }: FAQSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group rounded-lg border border-slate-200 bg-white p-4 open:shadow-sm"
          >
            <summary className="cursor-pointer font-medium text-slate-900 marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-teal-600 group-open:rotate-45 transition-transform">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
