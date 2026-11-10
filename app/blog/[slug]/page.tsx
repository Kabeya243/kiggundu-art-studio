import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/lib/data";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Kiggundu Art Studio`,
      description: post.excerpt,
      type: "article",
      ...(post.image
        ? { images: [{ url: post.image, alt: post.imageAlt ?? post.title }] }
        : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-night pb-16 pt-36 text-white sm:pt-44">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-clay-light">
            <Link href="/blog" className="transition-colors hover:text-white">
              Blog
            </Link>{" "}
            · {post.category} · {post.date}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-5 text-base text-white/80">
              By {post.author}
              {post.authorRole ? ` — ${post.authorRole}` : ""}
            </p>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        {post.image && (
          <figure className="mb-10">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              width={905}
              height={1280}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full max-w-xl object-cover"
            />
          </figure>
        )}

        {post.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="mb-6 text-lg leading-relaxed text-ink-soft"
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-12 rounded-lg bg-cream p-6 sm:p-8">
          <p className="font-display text-xl font-medium">Continue reading</p>
          <p className="mt-2 text-base leading-relaxed text-ink-soft">
            This article was first published on the studio&apos;s WordPress.
            Read the full piece there:
          </p>
          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-clay"
          >
            Read the original ↗
          </a>
        </div>

        <nav className="mt-12 flex flex-wrap justify-between gap-4 border-t border-line pt-8">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-clay"
          >
            ← All articles
          </Link>
          <Link
            href="/events"
            className="text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:text-clay"
          >
            Events →
          </Link>
        </nav>
      </article>
    </>
  );
}
