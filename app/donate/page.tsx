import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import DonateProgress from "@/components/DonateProgress";
import { CAMPAIGN, DONATION_USES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Kiggundu Art Studio — help us raise $12,000 for the 2026 Residency & Wellness Program: stipends for 11 resident artists, art materials and wellness activities.",
};

export default function DonatePage() {
  return (
    <>
      <section className="bg-clay pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Donate
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            {CAMPAIGN.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {CAMPAIGN.intro}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            {CAMPAIGN.purpose}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="The campaign"
              title="Fund an apprenticeship, workshop materials, community gatherings"
            />
            <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
              Your gift goes directly to the 2026 Residency &amp; Wellness
              Program — stipends for all our 11 resident artists, art
              materials, wellness activities, and more.
            </p>
            <div className="mt-10">
              <DonateProgress />
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-warm">
              What a donation supports
            </h2>
            <ul className="mt-5 space-y-px border border-line bg-line">
              {DONATION_USES.map((u) => (
                <li key={u.name} className="flex items-center justify-between gap-4 bg-ivory px-6 py-5">
                  <span className="font-display text-xl font-medium">{u.name}</span>
                  <span className="text-sm text-stone-warm">{u.detail}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-lg bg-cream p-8">
              <h3 className="font-display text-2xl font-medium">Give another way</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Prefer to talk first, or to give materials, time or space?
                Write to the studio — every form of support matters.
              </p>
              <p className="mt-5 text-base">
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-clay"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="mt-2 text-base">
                <a
                  href={SITE.phoneHref}
                  className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-clay"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
