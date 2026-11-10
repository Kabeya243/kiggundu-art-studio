"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

export default function GalleryLightbox({ images }: { images: readonly GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Enlarge photo: ${img.caption}`}
            className={`group relative block overflow-hidden bg-sand text-left focus-visible:outline-2 ${
              img.wide ? "sm:col-span-2" : ""
            }`}
          >
            <span className="relative block aspect-[4/3] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
              <span className="font-display text-lg text-white">{img.caption}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                View +
              </span>
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[index].caption}
          className="fade-in fixed inset-0 z-[60] flex flex-col bg-night/95 p-4 sm:p-8"
          onClick={close}
        >
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between text-white">
            <p className="font-display text-lg">
              {images[index].caption}
              <span className="ml-3 text-sm text-white/60">
                {index + 1} / {images.length}
              </span>
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-xl leading-none transition-colors hover:bg-white hover:text-ink"
            >
              ×
            </button>
          </div>
          <div
            className="relative mx-auto mt-4 w-full max-w-5xl flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="mx-auto mt-4 flex w-full max-w-5xl items-center justify-between">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              ← Previous
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
