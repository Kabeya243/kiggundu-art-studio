import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import GalleryLightbox from "@/components/GalleryLightbox";
import { MEET_ARTISTS_INTRO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Iyara Karabo",
  description:
    "Iyara Karabo — current artist in the Metamorphosis apprentice program at Kiggundu Art Studio, Kampala.",
};

export default function IyaraKaraboPage() {
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
            Iyara Karabo
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Image
              src="/images/iyara-9123.jpg"
              alt="Portrait of Iyara Karabo at Kiggundu Art Studio"
              width={1600}
              height={2467}
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
              Iyara Karabo is one of the current artists in Metamorphosis, the
              studio&apos;s year-long apprentice program. Through the program,
              artists receive skill-based grants and commissions, take part in
              exhibitions and events, and build the professional networks that
              carry their practice forward.
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
          <SectionHeading kicker="In Pictures" title="At the studio" />
          <div className="mt-10">
            <GalleryLightbox
              images={[
                {
                  src: "/images/iyara-whatsapp.jpg",
                  alt: "Iyara Karabo at Kiggundu Art Studio",
                  caption: "Iyara Karabo",
                },
                {
                  src: "/images/metamorphosis-talk-94.jpg",
                  alt: "Artists in conversation during a Metamorphosis artist talk",
                  caption: "Metamorphosis artist talk",
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
