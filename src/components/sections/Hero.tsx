import { Github, Linkedin, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig, hasValue } from "@/data/config";

const techs = ["React", "Next.js", "React Native", "Node.js", "PostgreSQL"];

const [firstName, ...restName] = siteConfig.name.split(" ");
const surname = restName.join(" ");

export function Hero() {
  const { github, linkedin } = siteConfig.contact;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* atmosfera de fundo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-soft [background-size:52px_52px] opacity-[0.4]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/40 to-transparent" />
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-7 py-20 sm:py-28 lg:py-32">
          {/* status: disponível */}
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-300/25 bg-brand-300/[0.07] py-1.5 pl-2.5 pr-4 font-mono text-[11px] uppercase tracking-[0.16em] text-brand-200 backdrop-blur-sm">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
              </span>
              Disponível para novas oportunidades
            </span>
          </Reveal>

          {/* nome — display editorial */}
          <div className="flex flex-col gap-3">
            <Reveal delay={0.05}>
              <p className="font-mono text-sm uppercase tracking-[0.22em] text-white/45">
                {siteConfig.role}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif text-6xl font-normal leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-[5.75rem]">
                {firstName}
                <br className="hidden sm:block" />{" "}
                {surname ? (
                  <GradientText className="italic">{surname}</GradientText>
                ) : null}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
              {siteConfig.shortBio}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="brand">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <Button href="#projetos" size="lg" variant="primary" withArrow>
                Ver projetos
              </Button>
              <Button href="/cv" size="lg" variant="secondary">
                Baixar CV
              </Button>
              {hasValue(github) ? (
                <Button href={github} size="lg" variant="ghost" aria-label="GitHub">
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </Button>
              ) : null}
              {hasValue(linkedin) ? (
                <Button
                  href={linkedin}
                  size="lg"
                  variant="ghost"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </Button>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="inline-flex items-center gap-2 text-sm text-white/45">
              <MapPin className="h-4 w-4 text-brand-300/70" aria-hidden />
              {siteConfig.location} · Remoto ou presencial
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
