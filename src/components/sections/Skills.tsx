import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionLabel>O que eu domino</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl">
              As ferramentas que eu uso todo dia
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              Não é uma lista pra impressionar — é o que eu realmente pego pra
              construir e manter os produtos aqui do lado.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <Card className="group h-full p-6 transition-colors hover:border-brand-300/25">
                <span
                  aria-hidden
                  className="font-mono text-[11px] tracking-[0.2em] text-brand-300/70"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl font-normal tracking-tight text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
