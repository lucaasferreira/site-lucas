"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import {
  projects,
  projectFilters,
  filterProjects,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type FilterId = ProjectCategory | "all" | "in_progress";

export function ProjectsShowcase() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered = useMemo(() => filterProjects(projects, active), [active]);

  return (
    <section
      id="projetos"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Projetos em destaque"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Projetos em destaque"
            title={
              <>
                Cada projeto é{" "}
                <em className="font-serif font-normal text-brand-300">prova de resultado</em>,{" "}
                não prova de design.
              </>
            }
            description="Selecionei os trabalhos mais representativos: problema real do cliente, solução construída e o impacto medido depois."
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Filtros de projeto"
            className="mt-10 flex flex-wrap gap-2"
          >
            {projectFilters.map((f) => {
              const selected = f.id === active;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(f.id)}
                  className={cn(
                    "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-all duration-300",
                    selected
                      ? "text-ink-950"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId="filter-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-300 shadow-glow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.03]" />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-white/45">
            Nenhum projeto nesse filtro ainda.
          </p>
        ) : null}
      </div>
    </section>
  );
}
