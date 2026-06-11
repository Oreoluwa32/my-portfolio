import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          backgroundImage:
            "radial-gradient(50% 50% at 50% 0%, rgba(124,92,255,0.20) 0%, rgba(10,10,15,0) 70%)",
        }}
      />
      <div className="container-x">
        <div className="flex flex-col items-start gap-5">
          <div className="chip">
            <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for full-stack roles
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m {profile.name.split(" ")[0]} —{" "}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              {profile.role.toLowerCase()}
            </span>{" "}
            shipping reliable web products.
          </h1>

          <p className="max-w-2xl text-lg text-muted">{profile.blurb}</p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View projects
              <span aria-hidden>→</span>
            </a>
            <a href={profile.resumeUrl} className="btn-ghost">
              Download résumé
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>

          <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:max-w-2xl sm:grid-cols-4">
            {[
              { k: "Years coding", v: "4+" },
              { k: "Apps shipped", v: "10+" },
              { k: "Stack", v: "Flutter · TS · Node" },
              { k: "Based in", v: "Lagos, NG" },
            ].map((s) => (
              <div key={s.k} className="card p-4">
                <div className="font-mono text-xs uppercase tracking-wider text-muted">
                  {s.k}
                </div>
                <div className="mt-1 text-lg font-semibold">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
