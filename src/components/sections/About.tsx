import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/config";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionLabel>Sobre</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Um pouco sobre o meu trabalho
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Há {siteConfig.yearsExperience} anos construindo produtos digitais
              de ponta a ponta — do banco de dados à interface. Atuo em todo o
              ciclo do desenvolvimento: modelagem de dados, APIs, aplicações web
              e mobile, e mais recentemente integrações com IA. Gosto de
              transformar problemas de negócio em software que funciona, é fácil
              de manter e entrega valor de verdade.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Meu foco é full-stack: React e Next.js no front-end, React Native
              no mobile, e Node.js com PostgreSQL no back-end. Estou baseado em{" "}
              {siteConfig.location} e disponível para novas oportunidades —
              remotas ou presenciais.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
