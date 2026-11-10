import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { COLLABORATORS, FOUNDER, OUR_STORY, SITE, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kiggundu Art Studio is a non-profit founded in 2021 in Ndejje Kanyanya, Wakiso — a vibrant creative hub for emerging artists in Uganda.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            A haven for young creatives
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {SITE.description}
          </p>
        </div>
      </section>

      <section aria-label="Studio in numbers" className="border-b border-line bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-8 sm:px-8">
              <p className="font-display text-4xl font-medium text-clay sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm leading-snug text-stone-warm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading kicker={OUR_STORY.kicker} title={OUR_STORY.title} />
            {OUR_STORY.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                {p}
              </p>
            ))}
            <p className="mt-6 border-l-2 border-clay pl-5 font-display text-xl italic leading-relaxed text-ink">
              “We are a vibrant creative hub for emerging artists in Uganda. Our
              studio is a safe place where artists can pour their hearts and
              ideas into their work.”
            </p>
          </div>
          <div>
            <Image
              src={OUR_STORY.image}
              alt={OUR_STORY.imageAlt}
              width={1920}
              height={1280}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[3/2] w-full object-cover"
            />
            <p className="mt-3 text-sm text-stone-warm">{OUR_STORY.imageAlt}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.imageAlt}
                width={1600}
                height={2400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[3/4] w-full max-w-md object-cover"
              />
              <p className="mt-3 text-sm text-stone-warm">{FOUNDER.caption}</p>
            </div>
            <div>
              <SectionHeading
                kicker="Founder"
                title={FOUNDER.name}
                intro={FOUNDER.bio}
              />
              <ul className="mt-8 space-y-3">
                {FOUNDER.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-clay" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="Collaborations"
          title="Our Metamorphosis program was previously in collaboration with"
        />
        <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {COLLABORATORS.map((c) => (
            <li key={c} className="flex items-center justify-center bg-ivory px-6 py-10 text-center">
              <span className="font-display text-2xl font-medium text-ink">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-ink-soft">
          Founded in 2021 in Ndejje Kanyanya, Wakiso District. A springboard
          for early-career artists — and a bridge between art and social good.
        </p>
      </section>
    </>
  );
}
