"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-ivory/95 text-ink shadow-[0_1px_0_0_var(--color-line)] backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Kiggundu Art Studio — home">
          <Image
            src="/images/logo.png"
            alt="Kiggundu Art Studio logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0"
          />
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] font-semibold tracking-tight">
              Kiggundu
            </span>
            <span
              className={`block text-[0.62rem] font-semibold uppercase tracking-[0.32em] ${
                transparent ? "text-white/80" : "text-clay"
              }`}
            >
              Art Studio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[0.82rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-clay ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-clay"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="rounded-full bg-clay px-5 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay-dark"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[2px] w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[2px] w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fade-in fixed inset-0 top-[72px] z-40 overflow-y-auto bg-ivory text-ink lg:hidden"
        >
          <nav className="flex flex-col px-6 pb-10 pt-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-3xl font-medium"
              >
                <span className="mr-3 text-sm font-semibold text-clay">
                  0{i + 1}
                </span>
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="mt-8 rounded-full bg-clay px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Donate
            </Link>
            <div className="mt-10 space-y-1 text-sm text-stone-warm">
              <p>{SITE.location}</p>
              <p>
                <a href={SITE.phoneHref} className="text-ink underline underline-offset-4">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ink underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
