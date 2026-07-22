import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience, education } from "@/data/experience";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceEducation() {
  return (
    <section id="experiencia" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionLabel>Trajetória</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl">
              Experiência &amp; formação
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              O caminho até aqui — a prática construindo produto de verdade e a
              base de estudo que segura a ponta no dia a dia.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Experiência */}
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white">
                <Briefcase className="h-5 w-5 text-brand-300" aria-hidden />
                Experiência
              </h3>
            </Reveal>

            <ol className="mt-6 space-y-6 border-l border-white/[0.08] pl-6">
              {experience.map((job, i) => (
                <Reveal key={`${job.role}-${job.org}`} delay={0.05 * i}>
                  <li className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-brand-300 ring-4 ring-ink-950"
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-300/90">
                      {job.period}
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-white">
                      {job.role}
                    </h4>
                    <p className="text-sm text-white/60">{job.org}</p>
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-white/65">
                      {job.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Formação */}
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white">
                <GraduationCap className="h-5 w-5 text-brand-300" aria-hidden />
                Formação
              </h3>
            </Reveal>

            <div className="mt-6 flex flex-col gap-4">
              {education.map((edu, i) => (
                <Reveal key={`${edu.course}-${edu.org}`} delay={0.05 * i}>
                  <Card className="p-5">
                    <h4 className="text-base font-semibold text-white">
                      {edu.course}
                    </h4>
                    <p className="mt-1 text-sm text-white/60">{edu.org}</p>
                    {edu.detail ? (
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {edu.detail}
                      </p>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
