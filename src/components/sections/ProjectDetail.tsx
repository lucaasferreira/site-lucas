import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Cover } from "@/components/ui/Cover";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Project, ProjectStatus } from "@/data/projects";

const statusLabel: Record<ProjectStatus, string> = {
  producao: "Em produção",
  mvp: "MVP",
  prototipo: "Protótipo",
};

const statusVariant: Record<ProjectStatus, "brand" | "warm" | "outline"> = {
  producao: "brand",
  mvp: "warm",
  prototipo: "outline",
};

/**
 * Página de detalhe de um projeto.
 *
 * Reaproveita o design system do restante do site (tokens ink/brand,
 * `container-site`, `SectionLabel`, `Reveal`, `Cover` com fallback por accent).
 * O título é dividido no travessão "—": a primeira parte é o nome do produto,
 * a segunda ganha `GradientText`.
 */
export function ProjectDetail({ project }: { project: Project }) {
  const [name, ...rest] = project.title.split("—");
  const highlight = rest.join("—").trim();

  return (
    <article className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* atmosfera de fundo, igual ao Hero */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-[0.25]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />
      </div>

      <div className="container-site pb-24 sm:pb-32">
        {/* voltar */}
        <Reveal>
          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden
            />
            Projetos
          </Link>
        </Reveal>

        {/* cabeçalho */}
        <header className="mt-10 flex max-w-3xl flex-col gap-5">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{project.type}</SectionLabel>
              <Badge variant={statusVariant[project.status]} dot>
                {statusLabel[project.status]}
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              {name.trim()}
              {highlight ? (
                <>
                  {" "}
                  <GradientText>{highlight}</GradientText>
                </>
              ) : null}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {project.tagline}
            </p>
          </Reveal>

          {(project.liveUrl || project.repoUrl) && (
            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    external
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Ver ao vivo
                  </Button>
                ) : null}
                {project.repoUrl ? (
                  <Button
                    href={project.repoUrl}
                    external
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    Repositório
                  </Button>
                ) : null}
              </div>
            </Reveal>
          )}
        </header>

        {/* capa grande */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] shadow-card">
            <div className="relative aspect-[16/9] w-full">
              <Cover src={project.cover} accent={project.accent} alt={project.title} />
            </div>
          </div>
        </Reveal>

        {/* conteúdo */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-3">
          {/* blocos de texto */}
          <div className="flex flex-col gap-12 lg:col-span-2">
            <Reveal>
              <section className="flex flex-col gap-4">
                <SectionLabel>Problema</SectionLabel>
                <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  {project.problem}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section className="flex flex-col gap-4">
                <SectionLabel>Solução</SectionLabel>
                <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  {project.solution}
                </p>
              </section>
            </Reveal>

            <Reveal>
              <section className="flex flex-col gap-5">
                <SectionLabel>Destaques técnicos</SectionLabel>
                <ul className="flex flex-col gap-4">
                  {project.techHighlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300"
                      />
                      <span className="text-pretty text-base leading-relaxed text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* stack */}
          <aside className="lg:col-span-1">
            <Reveal delay={0.05}>
              <div className="lg:sticky lg:top-28 flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-card">
                <SectionLabel>Tecnologias</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </article>
  );
}
