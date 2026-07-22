"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ProjectMock, type AccentKey } from "@/components/ui/ProjectMock";
import { inProgressProjects } from "@/data/projects";

export function InProgress() {
  if (!inProgressProjects.length) return null;

  return (
    <section
      id="em-andamento"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Projetos em andamento"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Em construção · Agora"
            title={
              <>
                O que está{" "}
                <em className="font-serif font-normal text-brand-300">na bancada</em>{" "}
                neste exato momento.
              </>
            }
            description="Transparência total sobre o que está sendo construído. Produto em movimento, métricas reais começando a aparecer."
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:gap-6 md:grid-cols-2">
          {inProgressProjects.map((p) => {
            const accent = (p.accent ?? "lime") as AccentKey;
            return (
              <StaggerItem key={p.slug}>
                <Card className="h-full overflow-hidden">
                  <div className="relative aspect-[16/9] border-b border-white/[0.06]">
                    <ProjectMock accent={accent} label={p.title} />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <Badge variant="warm" dot>
                        Em construção
                      </Badge>
                      <Badge variant="outline">{p.categoryLabel}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/55">{p.tagline}</p>

                    {/* Progress */}
                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono uppercase tracking-widest text-white/40">
                          Progresso
                        </span>
                        <span className="font-mono font-medium text-white">
                          {p.progress ?? 0}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-200 to-brand-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.progress ?? 0}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>

                    {p.nextStep ? (
                      <div className="mt-5 flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <ArrowRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                          aria-hidden
                        />
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                            Próxima etapa
                          </p>
                          <p className="mt-1 text-sm text-white/80">{p.nextStep}</p>
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-5 text-sm">
                      <span className="text-white/45">Cliente:</span>
                      <span className="text-white">{p.client.name}</span>
                      <span className="text-white/30">·</span>
                      <span className="text-white/55">{p.client.bio}</span>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
