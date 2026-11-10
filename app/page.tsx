import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import SubscribeForm from "@/components/SubscribeForm";
import DonateProgress from "@/components/DonateProgress";
import {
  CAMPAIGN,
  COLLABORATORS,
  CURRENT_ARTISTS,
  DONATION_USES,
  EXHIBITION,
  GALLERY_IMAGES,
  INTERVIEWS,
  MEET_ARTISTS_INTRO,
  OUR_STORY,
  OUR_STUDIO,
  POSTS,
  PREVIOUS_ARTISTS,
  PROGRAMS,
  SITE,
  STATS,
  TESTIMONIALS,
  VIDEO,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Kiggundu Art Studio — Empowering Creativity",
  description: SITE.description,
};

export default function Home() {
  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-night text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-open-studio.jpg"
            alt="Artists in discussion inside Kiggundu Art Studio, beneath a textile portrait"
            fill
            sizes="100vw"
            preload
            className="hero-drift object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-clay-light">
            Ndejje Kanyanya · Wakiso · Uganda — Est. 2021
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Empowering Creativity: Nurturing Artistic Expression, Talent and
            Art Therapy.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {SITE.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#visit"
              className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay-dark"
            >
              Plan your visit
            </Link>
            <Link
              href="#gallery"
              className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              See it in pictures
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------ STATS ------------------------------- */}
      <section aria-label="Studio in numbers" className="border-b border-line bg-ivory">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-8 sm:px-8">
              <p className="font-display text-4xl font-medium text-clay sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-stone-warm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------- OUR STUDIO / STORY ------------------------ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <Image
              src={OUR_STUDIO.image}
              alt={OUR_STUDIO.imageAlt}
              width={1920}
              height={1280}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[3/2] w-full object-cover"
            />
            <p className="mt-3 text-sm text-stone-warm">{OUR_STUDIO.imageAlt}</p>
          </div>
          <div>
            <SectionHeading
              kicker={OUR_STUDIO.kicker}
              title={OUR_STUDIO.title}
              intro={OUR_STUDIO.text}
            />
            <Link
              href="/about"
              className="mt-8 inline-block border-b-2 border-clay pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-clay"
            >
              Our story →
            </Link>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 sm:mt-28 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading kicker={OUR_STORY.kicker} title={OUR_STORY.title} />
            {OUR_STORY.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                {p}
              </p>
            ))}
          </div>
          <div className="order-1 lg:order-2">
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

      {/* --------------------------- MEET THE ARTISTS ------------------------ */}
      <section className="bg-cream py-20 sm:py-28" aria-labelledby="artists-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div id="artists-heading">
            <SectionHeading
              kicker="Meet the Artists"
              title="The artists of the studio"
              intro={MEET_ARTISTS_INTRO}
            />
          </div>

          <h3 className="mt-14 text-xs font-semibold uppercase tracking-[0.24em] text-stone-warm">
            Current artists in Metamorphosis
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CURRENT_ARTISTS.map((a) => (
              <article
                key={a.name}
                className="group flex flex-col bg-ivory shadow-[0_1px_0_0_var(--color-line)]"
              >
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
                    <span className="font-display text-6xl text-clay/40">
                      {a.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-display text-2xl font-medium leading-tight">
                    {a.slug ? (
                      <Link href={`/artists/${a.slug}`} className="transition-colors hover:text-clay">
                        {a.name}
                      </Link>
                    ) : (
                      a.name
                    )}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    {a.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.24em] text-stone-warm">
            Previous artists at Kiggundu Art Studio
          </h3>
          <div className="mt-5 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PREVIOUS_ARTISTS.map((a) => (
              <article key={a.name} className="bg-ivory p-6">
                <h4 className="font-display text-xl font-medium leading-tight">{a.name}</h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                  {a.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.blurb}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-warm">
              Our Metamorphosis program was previously in collaboration with
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {COLLABORATORS.map((c) => (
                <li key={c} className="font-display text-xl font-medium text-ink-soft sm:text-2xl">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/artists"
            className="mt-10 inline-block rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
          >
            All artists →
          </Link>
        </div>
      </section>

      {/* ------------------------------ GALLERY ------------------------------ */}
      <section id="gallery" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="In Pictures"
          title="Inside the studio"
          intro="Open studios, talks, portraits and works — the life of the space. Tap any image to enlarge it."
        />
        <div className="mt-10">
          <GalleryLightbox images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ---------------------------- EXHIBITIONS ---------------------------- */}
      <section className="bg-night py-20 text-white sm:py-28" aria-labelledby="exhibitions-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div id="exhibitions-heading">
            <p className="kicker !text-clay-light">Exhibitions</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Now showing
            </h2>
            <div className="rule-clay mt-6 !bg-white/20" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <Image
                src={EXHIBITION.poster}
                alt={EXHIBITION.posterAlt}
                width={905}
                height={1280}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full max-w-md object-cover"
              />
            </div>
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
                {EXHIBITION.kind} · {EXHIBITION.artist}
              </p>
              <h3 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
                {EXHIBITION.title}
              </h3>
              <dl className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm sm:text-base">
                <div className="flex gap-4">
                  <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-white/60">Dates</dt>
                  <dd>{EXHIBITION.dates}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-white/60">Venue</dt>
                  <dd>{EXHIBITION.venue}</dd>
                </div>
              </dl>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
                {EXHIBITION.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/blog/chronicles-of-existence"
                  className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay-dark"
                >
                  About the show
                </Link>
                <a
                  href={EXHIBITION.rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
                >
                  RSVP ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ PROGRAMS ----------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="Programs"
          title="What the studio does"
          intro="Four ways we work with artists and neighbours — from a year of apprenticeship to an evening by the fire."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <article key={p.name} className="group flex flex-col">
              <div className="relative overflow-hidden">
                <span className="relative block aspect-[4/3] w-full">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="absolute left-4 top-4 rounded-full bg-ivory/95 px-3 py-1 text-xs font-bold text-clay">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium leading-tight">{p.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                {p.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            </article>
          ))}
        </div>
        <Link
          href="/programs"
          className="mt-10 inline-block border-b-2 border-clay pb-1 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-clay"
        >
          Explore the programs →
        </Link>
      </section>

      {/* ---------------------------- FUNDRAISING ---------------------------- */}
      <section className="bg-clay py-20 text-white sm:py-24" aria-labelledby="fundraising-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                Fundraising
              </p>
              <h2
                id="fundraising-heading"
                className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                {CAMPAIGN.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                {CAMPAIGN.intro}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                {CAMPAIGN.purpose}
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {DONATION_USES.map((u) => (
                  <li key={u.name} className="border border-white/25 px-4 py-3">
                    <p className="font-semibold">{u.name}</p>
                    <p className="text-sm text-white/75">{u.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-white/10 p-8 sm:p-10">
              <DonateProgress dark />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- TESTIMONIALS --------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading kicker="Testimonials" title="In their own words" align="center" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border border-line bg-white p-8">
              <span aria-hidden="true" className="font-display text-6xl leading-none text-clay">
                “
              </span>
              <blockquote className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-stone-warm">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-2xl font-medium italic text-ink-soft sm:text-3xl">
          Join us in shaping the future of Ugandan art!
        </p>
      </section>

      {/* ----------------------------- LATEST NEWS ---------------------------- */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading kicker="Latest News" title="From the blog" />
            <Link
              href="/blog"
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
            >
              Read our blog →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {POSTS.map((post) => (
              <article key={post.slug} className="group flex flex-col bg-ivory">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="block overflow-hidden" aria-label={post.title}>
                    <span className="relative block aspect-[3/2] w-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex aspect-[3/2] w-full items-end bg-sand p-6"
                    aria-label={post.title}
                  >
                    <span className="font-display text-5xl text-clay/50">“</span>
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
                    {post.category} · {post.date}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-tight">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-clay">
                      {post.title}
                    </Link>
                  </h3>
                  {post.author && (
                    <p className="mt-2 text-sm text-stone-warm">By {post.author}</p>
                  )}
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ VIDEO -------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Watch"
              title={VIDEO.title}
              intro={`${VIDEO.channel} on YouTube — the apprentice diary of Ruberanziza Oswald.`}
            />
            <div className="mt-8">
              <p className="kicker">{INTERVIEWS.title}</p>
              {INTERVIEWS.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-stone-warm">
                {INTERVIEWS.platforms.join(" · ")}
              </p>
            </div>
          </div>
          <div>
            <div className="relative aspect-video w-full overflow-hidden bg-night">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO.youtubeId}`}
                title={VIDEO.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mt-3 text-sm text-stone-warm">
              <a
                href={VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-4 transition-colors hover:text-clay"
              >
                Watch on YouTube ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------- SUBSCRIBE ------------------------------ */}
      <section className="border-t border-line bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SubscribeForm />
        </div>
      </section>

      {/* ------------------------------- VISIT ------------------------------- */}
      <section id="visit" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Visit"
              title="Drop by the studio"
              intro="Ndejje Kanyanya, Wakiso — minutes from Kampala. Come for a show, a workshop, or to see the work being made."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay"
              >
                Email us
              </a>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            <div className="bg-ivory p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Address
              </h3>
              <p className="mt-3 text-base leading-relaxed">{SITE.location}</p>
              <p className="mt-1 text-sm text-stone-warm">{SITE.shortLocation}</p>
            </div>
            <div className="bg-ivory p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Opening hours
              </h3>
              <ul className="mt-3 space-y-2 text-base">
                {SITE.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-4">
                    <span>{h.days}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ivory p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Email
              </h3>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 block break-all text-base text-ink underline underline-offset-4 transition-colors hover:text-clay"
              >
                {SITE.email}
              </a>
            </div>
            <div className="bg-ivory p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Phone
              </h3>
              <a
                href={SITE.phoneHref}
                className="mt-3 block text-base text-ink underline underline-offset-4 transition-colors hover:text-clay"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
