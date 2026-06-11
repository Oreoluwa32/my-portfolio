import Image from "next/image";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-start gap-12 md:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl border border-border sm:w-64 md:w-full">
          <Image
            src="/me.jpeg"
            alt="Oreoluwa Adewale"
            fill
            sizes="(max-width: 768px) 16rem, 280px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="h-eyebrow">01 — About</p>
          <h2 className="h-title">A developer who treats shipping as the job.</h2>
          <div className="mt-5 space-y-4 text-muted">
            <p>
              I started out building games in Unity and mobile apps in Flutter,
              which taught me to care about UX, performance, and the messy
              middle between an idea and a real, working product.
            </p>
            <p>
              Today I work across the stack — typed React/Next.js on the
              frontend, Node and Postgres on the backend, deployed on
              Vercel/Netlify/AWS. I&apos;m happiest when a feature ships end to
              end: well-modeled data, a clean API, an interface that feels fast,
              and tests that catch regressions before users do.
            </p>
            <p>
              Outside of work I&apos;m exploring distributed systems, writing
              small CLIs, and contributing to open source.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["Location", "Ibadan, Nigeria (remote-friendly)"],
              ["Open to", "Full-time · Contract · Remote"],
              ["Focus", "Full-stack TypeScript"],
              ["Side", "Mobile · Games · Tooling"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {k}
                </span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
