"use client";

import Image from "next/image";
import { useState } from "react";
import { Instagram, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { ProjectMock, type AccentKey } from "@/components/ui/ProjectMock";
import type { Project } from "@/data/projects";

const statusLabel = {
  delivered: "Entregue",
  evolving: "Em evolução",
  in_progress: "Em desenvolvimento",
} as const;

const statusVariant = {
  delivered: "brand",
  evolving: "warm",
  in_progress: "outline",
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const accent = (project.accent ?? "lime") as AccentKey;

  return (
    <motion.div layout className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden">
        {/* Cover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.06]">
          {!imgError ? (
            <Image
              src={project.cover}
              alt={`Mockup: ${project.title}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              onError={() => setImgError(true)}
            />
          ) : (
            <ProjectMock accent={accent} label={project.title} />
          )}
          {/* gradient veil */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />

          {/* Status badge */}
          <div className="absolute left-4 top-4">
            <Badge variant={statusVariant[project.status]} dot>
              {statusLabel[project.status]}
            </Badge>
          </div>

          {/* Category badge */}
          <div className="absolute right-4 top-4">
            <Badge variant="outline">{project.categoryLabel}</Badge>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-[22px]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-white/55">{project.tagline}</p>

          {/* Progress for in_progress */}
          {project.status === "in_progress" && typeof project.progress === "number" ? (
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-white/55">
                <span className="font-mono uppercase tracking-widest">Progresso</span>
                <span className="font-mono text-white">{project.progress}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-200 to-brand-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${project.progress}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              {project.nextStep ? (
                <p className="mt-2 text-xs text-white/45">
                  <span className="font-mono uppercase tracking-widest text-white/40">
                    Próxima etapa ·{" "}
                  </span>
                  {project.nextStep}
                </p>
              ) : null}
            </div>
          ) : null}

          {/* Results */}
          {project.results.length ? (
            <div className="mt-5 grid grid-cols-3 gap-2.5">
              {project.results.slice(0, 3).map((r) => (
                <div
                  key={r.label}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <p className="font-mono text-base font-semibold tracking-tight text-brand-200 sm:text-lg">
                    {r.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-white/45">{r.label}</p>
                </div>
              ))}
            </div>
          ) : null}

          {/* Client strip */}
          <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
            <Avatar src={project.client.photo} name={project.client.name} size={36} />
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {project.client.name}
              </p>
              <p className="truncate text-xs text-white/45">{project.client.bio}</p>
            </div>
            {project.client.instagram ? (
              <a
                href={project.client.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${project.client.name}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
            {project.client.website ? (
              <a
                href={project.client.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Site de ${project.client.name}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
              >
                <LinkIcon className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>

          {/* Hidden detail revealed on hover (desktop) — case study extended */}
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                Problema
              </p>
              <p className="mt-1 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-300/90">
                Solução
              </p>
              <p className="mt-1 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech chips */}
          {project.technologies.length ? (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          {/* Feedback */}
          {project.feedback?.type === "text" ? (
            <blockquote className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm italic leading-relaxed text-white/70">
              <span className="font-serif text-2xl text-brand-300/60">“</span>
              {project.feedback.content}
            </blockquote>
          ) : null}
        </div>
      </Card>
    </motion.div>
  );
}
