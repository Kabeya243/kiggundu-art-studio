"use client";

import { useState } from "react";
import { SUBSCRIBE } from "@/lib/data";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="kicker">Newsletter</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        {SUBSCRIBE.title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
        {SUBSCRIBE.text}
      </p>

      {done ? (
        <p
          role="status"
          className="mx-auto mt-8 max-w-xl rounded-md border border-clay/40 bg-cream px-6 py-5 text-base text-ink"
        >
          Thank you — you are on the list. We will write when there is news.
        </p>
      ) : (
        <form onSubmit={submit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" noValidate>
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            autoComplete="email"
            placeholder="Type your email…"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 flex-1 rounded-full border border-line bg-white px-5 text-base text-ink placeholder:text-stone-warm focus:border-clay focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-full bg-ink px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-clay"
          >
            Subscribe
          </button>
        </form>
      )}
      {error && (
        <p role="alert" className="mt-3 text-sm font-medium text-clay-dark">
          {error}
        </p>
      )}
    </div>
  );
}
