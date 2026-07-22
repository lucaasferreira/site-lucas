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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      {/* Capa com fallback colorido por accent */}
      <div className="relative aspect-[16/10] w-full">
        <Cover src={project.cover} accent={project.accent} alt={project.title} />
        <div className="absolute right-3 top-3 z-10">
          <Badge variant={statusVariant[project.status]} dot>
            {statusLabel[project.status]}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-balance text-lg font-semibold tracking-tight text-white">
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
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Ver detalhes
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
