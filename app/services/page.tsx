import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services of Kiggundu Art Studio — murals on commission, art workshops, mentorship and guided tours.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Services</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Work with the studio
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Murals, workshops, mentorship and tours — for schools,
            institutions, businesses and groups.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article key={s.name} className="bg-ivory p-8 sm:p-10">
              <p className="text-sm font-bold text-clay">0{i + 1}</p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight">
                {s.name}
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                {s.description}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                {s.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-cream p-8 sm:p-12">
          <SectionHeading
            kicker="Enquiries"
            title="Tell us what you have in mind"
          />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
            For a mural, a workshop or a tour, write to the studio or call —
            we will plan it with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
