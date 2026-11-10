import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News from Kiggundu Art Studio — exhibitions, learning and community stories from Kampala.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="kicker !text-clay-light">Blog</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Latest news
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Exhibitions, learning and community — stories from the studio.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.slug} className="group flex flex-col bg-cream">
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
                <h2 className="mt-3 font-display text-2xl font-medium leading-tight">
                  <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-clay">
                    {post.title}
                  </Link>
                </h2>
                {post.author && (
                  <p className="mt-2 text-sm text-stone-warm">
                    By {post.author}
                    {post.authorRole ? ` — ${post.authorRole}` : ""}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-clay"
                >
                  Read →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
