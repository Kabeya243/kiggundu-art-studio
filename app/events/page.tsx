import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Events at Kiggundu Art Studio — exhibitions, studio socials and the Art & Memory Café in Kampala.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Events</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            What&apos;s on at the studio
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Exhibitions, open evenings, regular gatherings — open to artists, schools and neighbours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="space-y-16">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="grid gap-8 border-b border-line pb-16 lg:grid-cols-5 lg:gap-12"
            >
              {e.image ? (
                <div className="lg:col-span-2">
                  <Image
                    src={e.image}
                    alt={e.imageAlt ?? e.title}
                    width={905}
                    height={1280}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full max-w-sm object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-end bg-sand p-8 lg:col-span-2">
                  <span className="font-display text-7xl text-clay/40">
                    {e.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                  {e.kind} · {e.artist}
                </p>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {e.title}
                </h2>
                <dl className="mt-6 space-y-2 text-sm sm:text-base">
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 uppercase tracking-[0.14em] text-stone-warm">When</dt>
                    <dd>{e.dates}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-20 shrink-0 uppercase tracking-[0.14em] text-stone-warm">Where</dt>
                    <dd>{e.venue}</dd>
                  </div>
                </dl>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                  {e.description}
                </p>
                <Link
                  href={e.link}
                  className="mt-6 inline-block border-b-2 border-clay pb-1 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-clay"
                >
                  {e.linkLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            kicker="Stay in the loop"
            title="New events are announced on the blog"
          />
          <Link
            href="/blog"
            className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay"
          >
            Read our blog →
          </Link>
        </div>
      </section>
    </>
  );
}
