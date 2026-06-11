import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <p className="h-eyebrow">02 — Skills</p>
        <h2 className="h-title">The toolbox.</h2>
        <p className="h-sub">
          What I reach for on most projects. I optimize for boring, well-supported
          tools and learn new ones quickly when a problem calls for it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card p-5 hover:border-accent/60">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent2">
                {s.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="chip text-white">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
