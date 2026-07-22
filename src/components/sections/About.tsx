import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/config";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-3xl flex-col gap-6">
          <Reveal>
            <SectionLabel>Sobre mim</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance font-serif text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl">
              Eu gosto de resolver problema com código.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              Faz {siteConfig.yearsExperience} anos que trabalho com
              desenvolvimento, e o que me prende é o mesmo desde o começo: pegar
              um problema bagunçado e transformar em algo que funciona bem. Atuo
              no ciclo inteiro — modelo o banco, escrevo a API, construo a
              interface no web e no mobile, e ultimamente venho colocando IA pra
              trabalhar junto.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              Meu forte é ser full-stack sem ser raso: React e Next no front,
              React Native no mobile, Node com PostgreSQL no back. Moro em{" "}
              {siteConfig.location} e estou aberto a novas oportunidades — remoto
              ou presencial.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
