"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "ok" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-x grid gap-10 md:grid-cols-2">
        <div>
          <p className="h-eyebrow">05 — Contact</p>
          <h2 className="h-title">Let&apos;s build something.</h2>
          <p className="h-sub">
            I&apos;m open to full-time, contract, and freelance work. Quickest
            replies come via email.
          </p>

          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Email ·{" "}
              </span>
              <a className="link-underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Phone ·{" "}
              </span>
              <a className="link-underline" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                Location ·{" "}
              </span>
              {profile.location}
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub
            </a>
            {/* <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="btn-ghost">
              Twitter
            </a> */}
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-border bg-bg/60 px-3 py-2 outline-none focus:border-accent"
            />
          </div>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "ok" && (
            <p className="text-sm text-emerald-400">Thanks — I&apos;ll reply soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{error ?? "Something went wrong."}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-bg/60 px-3 py-2 outline-none focus:border-accent"
      />
    </div>
  );
}
