import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import { MEET_ARTISTS_INTRO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ayero Daisy",
  description:
    "Ayero Daisy — current artist in the Metamorphosis apprentice program at Kiggundu Art Studio, Kampala.",
};

export default function AyeroDaisyPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">
            <Link href="/artists" className="transition-colors hover:text-white">
              Artists
            </Link>{" "}
            / Current artist in Metamorphosis
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Ayero Daisy
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Image
              src="/images/ayero-8732.jpg"
              alt="Portrait of Ayero Daisy at Kiggundu Art Studio"
              width={1280}
              height={1920}
              sizes="(max-width: 1024px) 100vw, 40vw"
              preload
              className="aspect-[3/4] w-full max-w-md object-cover object-top"
            />
          </div>
          <div className="lg:col-span-3">
            <SectionHeading
              kicker="Metamorphosis"
              title="Artist in the year-long apprentice program"
              intro={MEET_ARTISTS_INTRO}
            />
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              Ayero Daisy is a current Metamorphosis artist — grants,
              commissions, exhibitions, events, and the network behind
              their practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/programs"
                className="rounded-full bg-clay px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay-dark"
              >
                About the program
              </Link>
              <Link
                href="/artists"
                className="rounded-full border border-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-white"
              >
                ← All artists
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading kicker="Work & Studio" title="Ayero Daisy at the studio" />
          <div className="mt-10">
            <GalleryLightbox
              images={[
                {
                  src: "/images/ayero-artwork.jpg",
                  alt: "Artwork by Ayero Daisy",
                  caption: "Work by Ayero Daisy",
                },
                {
                  src: "/images/img-7494.jpg",
                  alt: "Two artists working together on a red board",
                  caption: "Artists at work",
                },
                {
                  src: "/images/ayero-8734.jpg",
                  alt: "Ayero Daisy at Kiggundu Art Studio",
                  caption: "Ayero Daisy",
                  wide: true,
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
