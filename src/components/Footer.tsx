import { siteConfig, hasValue } from "@/data/config";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-site py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-200 to-brand-500 font-serif text-sm font-semibold text-ink-950">
                LF
              </span>
              <span className="font-serif text-lg italic text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              {siteConfig.shortBio}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Conecte-se
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {siteConfig.contact.email}
                </a>
              </li>
              {hasValue(siteConfig.contact.linkedin) ? (
                <li>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
                  </a>
                </li>
              ) : null}
              {hasValue(siteConfig.contact.github) ? (
                <li>
                  <a
                    href={siteConfig.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                  >
                    <Github className="h-4 w-4" aria-hidden /> GitHub
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/40 sm:flex-row sm:items-center">
          <span>
            © {year} {siteConfig.name}
          </span>
          <span className="font-mono uppercase tracking-widest">
            {siteConfig.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
