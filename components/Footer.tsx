import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-x flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono text-xs">Designed and engineered by hand.</p>
      </div>
    </footer>
  );
}
