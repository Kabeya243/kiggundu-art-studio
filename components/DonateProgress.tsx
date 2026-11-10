import Link from "next/link";
import { CAMPAIGN } from "@/lib/data";

/**
 * The live site publishes the $12,000 goal but no "raised so far" figure.
 * We show the goal honestly and never invent a raised amount: the bar is
 * an indeterminate "campaign live" shimmer, and the live total is on the
 * campaign page. Update CAMPAIGN.raisedUsd in lib/data.ts when the studio
 * supplies the real figure, and the bar will switch to a determinate fill.
 */
export default function DonateProgress({ dark = false }: { dark?: boolean }) {
  const raised = CAMPAIGN.raisedUsd;
  const pct =
    raised === null ? null : Math.min(100, Math.round((raised / CAMPAIGN.goalUsd) * 100));

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <p className="font-display text-4xl font-medium sm:text-5xl">
          ${CAMPAIGN.goalUsd.toLocaleString("en-US")}
          <span className={`ml-2 text-base font-sans font-normal ${dark ? "text-white/70" : "text-stone-warm"}`}>
            goal
          </span>
        </p>
        {pct !== null ? (
          <p className="text-sm font-semibold">
            ${raised!.toLocaleString("en-US")} raised · {pct}%
          </p>
        ) : (
          <p className={`text-sm font-semibold ${dark ? "text-white/80" : "text-ink-soft"}`}>
            Campaign live — every gift counts
          </p>
        )}
      </div>

      <div
        className={`mt-4 h-3 w-full overflow-hidden rounded-full ${dark ? "bg-white/20" : "bg-sand"}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={CAMPAIGN.goalUsd}
        {...(pct !== null
          ? { "aria-valuenow": raised!, "aria-label": `Raised $${raised!.toLocaleString("en-US")} of $${CAMPAIGN.goalUsd.toLocaleString("en-US")} goal` }
          : { "aria-label": "Fundraising campaign in progress — see the live total on the campaign page" })}
      >
        {pct !== null ? (
          <div className="h-full rounded-full bg-clay" style={{ width: `${pct}%` }} />
        ) : (
          <div className="bar-shimmer h-full w-1/3 rounded-full" />
        )}
      </div>

      <p className={`mt-4 text-sm leading-relaxed ${dark ? "text-white/75" : "text-ink-soft"}`}>
        {pct === null
          ? "The total raised so far is published on the campaign page — this bar shows the campaign is live."
          : "Thank you to everyone who has given so far."}
      </p>

      <Link
        href={CAMPAIGN.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-clay px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay-dark"
      >
        {CAMPAIGN.ctaLabel} ↗
      </Link>
    </div>
  );
}
