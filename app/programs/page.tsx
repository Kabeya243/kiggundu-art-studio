import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { MEET_ARTISTS_INTRO, PROGRAMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "The programs of Kiggundu Art Studio — Apprenticeship, Workshops, Murals and FireSideChArts Africa.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Programs</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            What the studio does
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {MEET_ARTISTS_INTRO}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="space-y-20 sm:space-y-28">
          {PROGRAMS.map((p, i) => (
            <article
              key={p.name}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={1920}
                  height={1280}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-bold text-clay">0{i + 1}</p>
                <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {p.name}
                </h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                  {p.tagline}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                  {p.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-line pt-10 text-center">
          <SectionHeading
            kicker="Take part"
            title="Artists, schools, neighbours — all welcome"
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/donate"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay-dark"
            >
              Support the programs
            </Link>
            <Link
              href="/#visit"
              className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
            >
              Visit the studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
