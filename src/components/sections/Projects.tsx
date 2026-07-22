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
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl">
              Coisas que eu construí
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              Uma seleção do que já tirei do papel — plataformas SaaS, apps
              mobile e sistemas rodando em produção. Clica em qualquer um pra ver
              como foi feito por dentro.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={0.05 * (i % 3)} className="h-full">
              <ProjectCard project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
