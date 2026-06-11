import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <p className="h-eyebrow">04 — Experience</p>
        <h2 className="h-title">Where I&apos;ve worked.</h2>

        <ol className="mt-10 space-y-6 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.role + e.company} className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
              <div className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} ·{" "}
                    <span className="text-accent2">{e.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
