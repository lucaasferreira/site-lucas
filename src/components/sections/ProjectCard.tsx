import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Cover } from "@/components/ui/Cover";
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

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Card className="group flex h-full flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      {/* Capa com fallback colorido por accent */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Cover src={project.cover} accent={project.accent} alt={project.title} />
        {/* gradiente pra assentar os selos */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/20"
        />
        {typeof index === "number" ? (
          <span
            aria-hidden
            className="absolute left-4 top-3 font-mono text-xs tracking-[0.2em] text-white/70"
          >
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <div className="absolute right-3 top-3 z-10">
          <Badge variant={statusVariant[project.status]} dot>
            {statusLabel[project.status]}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-balance font-serif text-xl font-normal leading-snug tracking-tight text-white transition-colors group-hover:text-brand-100">
            {project.title}
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-white/60">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
          <Link
            href={`/projetos/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Ver detalhes
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 transition-colors hover:text-brand-100"
            >
              Ao vivo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
