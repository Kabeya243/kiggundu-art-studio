import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { CURRENT_ARTISTS, MEET_ARTISTS_INTRO, PREVIOUS_ARTISTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artists",
  description:
    "Meet the artists of Kiggundu Art Studio — current artists in the Metamorphosis apprentice program and previous artists of the studio.",
};

export default function ArtistsPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Artists</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Meet the artists
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {MEET_ARTISTS_INTRO}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="Current"
          title="Current artists in Metamorphosis"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CURRENT_ARTISTS.map((a) => (
            <article key={a.name} className="group flex flex-col bg-cream">
              {a.image && a.slug ? (
                <Link href={`/artists/${a.slug}`} className="block overflow-hidden" aria-label={`${a.name} — view profile`}>
                  <span className="relative block aspect-[3/4] w-full">
                    <Image
                      src={a.image}
                      alt={a.imageAlt ?? a.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </span>
                </Link>
              ) : (
                <div className="flex aspect-[3/4] w-full flex-col items-start justify-end bg-sand p-6">
                  <span className="font-display text-6xl text-clay/40">{a.name.charAt(0)}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-2xl font-medium leading-tight">
                  {a.slug ? (
                    <Link href={`/artists/${a.slug}`} className="transition-colors hover:text-clay">
                      {a.name}
                    </Link>
                  ) : (
                    a.name
                  )}
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                  {a.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.blurb}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading kicker="Previous" title="Previous artists at Kiggundu Art Studio" />
          <div className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PREVIOUS_ARTISTS.map((a) => (
              <article key={a.name} className="bg-cream p-6">
                <h2 className="font-display text-xl font-medium leading-tight">{a.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                  {a.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
