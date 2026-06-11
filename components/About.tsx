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
              I&apos;ve shipped production apps across transportation
              (Movr), fintech (XPay at Creastech), and interactive platforms —
              with a strong bias for clean UI, integrated backends, and
              real-time features that actually feel real-time.
            </p>
            <p>
              On the frontend I work in Flutter and React/Next.js with Tailwind;
              on the backend I integrate Django REST and Node APIs, with
              WebSockets and location services when latency matters. I came up
              through Unity game development and mobile, which is where I
              learned to obsess over performance and UX polish.
            </p>
            <p>
              Outside of work I build small tools, ship side projects to
              GitHub, and keep sharpening my fundamentals.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["Location", "Lagos, Nigeria (remote-friendly)"],
              ["Open to", "Full-time · Contract · Remote"],
              ["Focus", "Full-stack · Mobile · Realtime"],
              ["Currently", "Creastech · Movr"],
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
