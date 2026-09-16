import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { JsonLd } from "@/components/JsonLd";
import { excursions } from "@/lib/excursions";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const homeTitle = "Ward Cove Shore Excursions | Cruise Port Near Ketchikan";
const homeDescription =
  "Plan shore excursions from Ward Cove cruise port — distinct from downtown Ketchikan. Shuttle, transfer timing, and enquiry-only planning for cruise passengers.";

export const metadata: Metadata = pageMetadata({
  title: "Ward Cove Shore Excursions",
  absoluteTitle: homeTitle,
  description: homeDescription,
  path: "/",
});

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <JsonLd
        data={webPageSchema({
          title: homeTitle,
          description: homeDescription,
          path: "/",
        })}
      />
      <section className="relative flex min-h-[28rem] items-center overflow-hidden text-white md:min-h-[32rem]">
        <Image
          src="/images/ward-cove-hero.png"
          alt="Cruise ship docked at Ward Cove, Alaska with forested mountains"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/75 to-slate-900/45" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Ward Cove, Alaska cruise port
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Shore excursions designed for Ward Cove cruise passengers
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Ward Cove sits north of downtown Ketchikan. We help you choose excursions
            that fit transfer times, return-to-ship windows and what is realistically
            possible from your berth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/excursions"
              className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
            >
              Browse excursions
            </Link>
            <Link
              href="/ward-cove-cruise-port-guide"
              className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold hover:border-white"
            >
              Ward Cove port guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-900">
            Ward Cove ≠ downtown Ketchikan
          </h2>
          <p className="mt-2 text-amber-950/80 leading-relaxed">
            Creek Street, the lumberjack show, and many totem sites require a road
            transfer of roughly 20–30 minutes each way. Ships at Ward Cove do not
            dock beside town. Read our{" "}
            <Link href="/ward-cove-vs-ketchikan-cruise-port" className="font-semibold underline">
              port comparison
            </Link>{" "}
            and{" "}
            <Link href="/ward-cove-shuttle-guide" className="font-semibold underline">
              shuttle guide
            </Link>{" "}
            before you book.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions" className="text-sm font-semibold text-teal-700">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/best-ward-cove-shore-excursions",
                label: "Best Ward Cove excursions",
                desc: "Curated by port time and return confidence",
              },
              {
                href: "/ward-cove-misty-fjords-excursions",
                label: "Misty Fjords from Ward Cove",
                desc: "Flight vs boat, timing, and weather",
              },
              {
                href: "/things-to-do-from-ward-cove",
                label: "Things to do",
                desc: "Culture, nature, and adventure ashore",
              },
              {
                href: "/ward-cove-to-ketchikan",
                label: "Ward Cove to Ketchikan",
                desc: "Getting downtown from the terminal",
              },
              {
                href: "/cruise-planner",
                label: "Cruise planner",
                desc: "Match excursions to your hours in port",
              },
              {
                href: "/faq",
                label: "FAQ",
                desc: "Port, timing, and booking answers",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-teal-300 hover:bg-teal-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend Ward
            Cove excursions with realistic return timing.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
