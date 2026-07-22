import { Github, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
      {/* background atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-[0.35]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-6 py-20 sm:py-28">
          <Reveal>
            <SectionLabel>{siteConfig.role}</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              {firstName}{" "}
              {surname ? <GradientText>{surname}</GradientText> : null}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {siteConfig.shortBio}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="brand">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#projetos" size="lg" variant="primary" withArrow>
                Ver projetos
              </Button>
              <Button href="/cv" size="lg" variant="secondary">
                Baixar CV
              </Button>
              {hasValue(github) ? (
                <Button href={github} size="lg" variant="ghost">
                  <Github className="h-4 w-4" aria-hidden />
                  GitHub
                </Button>
              ) : null}
              {hasValue(linkedin) ? (
                <Button href={linkedin} size="lg" variant="ghost">
                  <Linkedin className="h-4 w-4" aria-hidden />
                  LinkedIn
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
