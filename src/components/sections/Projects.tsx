import { ProjectCard } from "@/components/sections/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionLabel>Projetos em destaque</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Projetos
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Produtos completos que levei do banco de dados à interface —
              SaaS multi-tenant, apps mobile e plataformas em produção.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * (i % 3)} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
