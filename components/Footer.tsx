import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-night text-white/85">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Kiggundu Art Studio — home">
              <Image
                src="/images/logo.png"
                alt="Kiggundu Art Studio logo"
                width={48}
                height={48}
                className="h-12 w-12 shrink-0"
              />
              <span className="leading-none">
                <span className="block font-display text-[1.4rem] font-semibold tracking-tight text-white">
                  Kiggundu
                </span>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-clay-light">
                  Art Studio
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              An independent art space where artists create, learn and meet.
              Nurturing artists, shaping perspectives, building community.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/50">
              Independent art space · Est. 2021
            </p>
          </div>

          <nav aria-label="Visit">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
              Visit
            </h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed">
              <li>{SITE.location}</li>
              {SITE.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span className="text-white/70">{h.days}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#visit"
              className="mt-5 inline-block border-b border-clay-light pb-0.5 text-sm font-semibold text-white transition-colors hover:text-clay-light"
            >
              Plan your visit →
            </Link>
          </nav>

          <nav aria-label="The studio">
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
              The studio
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/artists" className="transition-colors hover:text-white">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/donate" className="transition-colors hover:text-white">
                  Donate
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-light">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="text-white/70">
                Instagram — {SITE.instagramHandle}
              </li>
              <li>
                <a
                  href={SITE.wordpressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  kiggunduartstudio.wordpress.com ↗
                </a>
              </li>
            </ul>
            <Link
              href="/donate"
              className="mt-6 inline-block rounded-full bg-clay px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay-dark"
            >
              Support the studio
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Kiggundu Art Studio. All rights reserved.</p>
          <p>Nurturing artists, shaping perspectives, building community.</p>
        </div>
      </div>
    </footer>
  );
}
