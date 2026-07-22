import { siteConfig } from "@/data/config";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950">
      <div className="container-site py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-brand-200 to-brand-500 font-mono text-xs font-bold text-ink-950">
                LF
              </span>
              <span className="font-medium text-white">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              Construo aplicativos, sistemas e produtos digitais que transformam
              ideias e processos em resultado real. Atendo poucos clientes por
              vez para garantir profundidade.
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
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Instagram className="h-4 w-4" aria-hidden /> Instagram
                </a>
              </li>
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
            </ul>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/40 sm:flex-row sm:items-center">
          <span>
            © {year} {siteConfig.name}. Construído com intenção.
          </span>
          <span className="font-mono uppercase tracking-widest">
            {siteConfig.location} · Disponível para novos projetos
          </span>
        </div>
      </div>
    </footer>
  );
}
