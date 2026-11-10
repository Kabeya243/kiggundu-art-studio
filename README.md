# Kiggundu Art Studio — Website

Premium gallery website for **Kiggundu Art Studio** (Ndejje Kanyanya, Wakiso,
Uganda), rebuilt from its WordPress.com site as a modern static site.

- **Stack:** Next.js 16 (App Router, TypeScript) + Tailwind CSS 4
- **Data:** none. No database, no backend, no API routes. All content is
  hardcoded in `lib/data.ts`.
- **Images:** only photos downloaded from the live WordPress site, in
  `public/images/` (see below).
- **Deploy:** Vercel — import this repo, it builds with `npm run build`.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, stats, Our Studio / Our Story, Meet the Artists, gallery with lightbox, Chronicles of Existence, Programs, $12,000 fundraising, testimonials, latest news, video, subscribe, visit |
| `/about` | Story, founder (Kiggundu Rodney Erismas), stats, collaborations |
| `/artists` | Current artists in Metamorphosis + previous artists |
| `/artists/iyara-karabo` | Profile of Iyara Karabo |
| `/artists/ayero-daisy` | Profile of Ayero Daisy + her artwork |
| `/programs` | Apprenticeship, Workshops, Murals, FireSideChArts Africa |
| `/events` | Chronicles of Existence, Studio Social, Art & Memory Café |
| `/services` | Murals on commission, workshops, mentorship, guided tours |
| `/press` | Mindscapes (Gallery 190, UCSF), Global South Arts & Health Week |
| `/donate` | $12,000 campaign for the 2026 Residency & Wellness Program |
| `/blog` | Latest news (3 articles) |
| `/blog/[slug]` | Article pages, linking to the original WordPress post |

SEO: metadata + Open Graph in `app/layout.tsx`, `app/sitemap.ts`,
`app/robots.ts`, favicon from the studio logo (`app/icon.png`).

## Images — source rule

**Only images from the live site** `kiggunduartstudio.wordpress.com` are used.
Never use the images from the studio's Drive theme folder
(`image-01.jpg` … `image-08.jpg`) — the owner forbade it.

`public/images/` contains 20 files (all downloaded from the live site,
compressed / resized with sharp — max 1600 px, quality 80):

- `logo.png` — studio logo, converted from the live `logo.avif` (AVIF not
  readable by PIL; converted with sharp)
- `hero-open-studio.jpg` — hero, artists in discussion
- `metamorphosis-talk-94.jpg`, `metamorphosis-talk-121.jpg`,
  `open-studio-151.jpg` — studio / artist talks
- `iyara-9123.jpg`, `iyara-whatsapp.jpg` — Iyara Karabo
- `ayero-8732.jpg`, `ayero-8734.jpg`, `ayero-artwork.jpg` — Ayero Daisy
- `chronicles-poster.jpg`, `chronicles-3673.jpg` — Chronicles of Existence
- Added 10 Nov 2026 (second set, same source): `metamorphosis-talk-72.jpg`,
  `metamorphosis-talk-94b.jpg` — artist talks; `open-studio-7th-106.jpg` —
  artists at the open studio; `pxl-121855-mp.jpg` — learning around a table;
  `pxl-135025-mp.jpg` — sharing a meal; `epeyonon-exhibition-1.jpg` and
  `epeyonon-exhibition-2.jpg` — Epeyonon exhibition opening (identical files
  on the live site; each used once, on a different page); `img-7494.jpg` —
  two artists at work (small source, 295×255, used at tile size only).

Texts were shortened on 10 Nov 2026 (about half the length, same facts and
messages) and the site is image-led: 12-image home gallery, photos on every
program, service, event, press and donate section, and on artist profiles.
Background is white (ivory/cream = #ffffff).

Three live images could **not** be downloaded (their URLs return a
WordPress.com error page) and are not used anywhere: the featured image of
“Benefits of Experiential Learning”, `pxl_20250405` and the “suicide
flowers” image. The artist thumbnails of Babisha Pevia, Kapule Albert, the
4 previous artists and the 5 partner logos are background images on the
live site and their URLs could not be retrieved — those artists are shown
by name only, with no invented photo.

## Honest placeholders

- **Fundraising:** the live site publishes the $12,000 goal but no “raised
  so far” figure. `CAMPAIGN.raisedUsd` in `lib/data.ts` is `null` on
  purpose; the progress bar is an indeterminate “campaign live” shimmer.
  Set the real figure when the studio supplies it.
- **Subscribe form:** client-side only (no backend). It validates the email
  and shows a confirmation message; there is no mailing-list service
  connected yet.
- **Contact:** +256 703 652 348 and kiggunduartstudio@gmail.com, as shown on
  the live site. Opening hours (Mon–Fri 9am–5pm, Sat 10am–2pm, Sun closed)
  come from the studio's theme, used only where the live site is silent.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (must pass)
npm run lint
```
