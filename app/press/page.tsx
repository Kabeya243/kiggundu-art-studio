import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PRESS_ITEMS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press about Kiggundu Art Studio — Mindscapes at Gallery 190 (UCSF) and the Global South Arts & Health Week.",
};

export default function PressPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Press</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            In the press
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            The studio and its founder, in exhibitions and gatherings beyond
            Kampala.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {PRESS_ITEMS.map((item) => (
            <article key={item.title} className="border border-line bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                {item.place}
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <SectionHeading
            kicker="Press enquiries"
            title="Writing about the studio?"
          />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            For interviews, images or a visit, contact the studio directly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay"
            >
              {SITE.email}
            </a>
            <Link
              href="/about"
              className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
            >
              About the studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
