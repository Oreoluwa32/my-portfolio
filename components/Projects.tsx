import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <p className="h-eyebrow">03 — Projects</p>
        <h2 className="h-title">Selected work.</h2>
        <p className="h-sub">
          A few things I&apos;ve built end to end. Each one links to source and a
          live deploy where possible.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`card group flex flex-col p-6 hover:border-accent/60 ${
                p.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent2">
                    {p.tagline}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source`}
                      className="rounded-md border border-border p-2 text-muted hover:text-white"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live`}
                      className="rounded-md border border-border p-2 text-muted hover:text-white"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-muted">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v7H3V3h7" />
    </svg>
  );
}
