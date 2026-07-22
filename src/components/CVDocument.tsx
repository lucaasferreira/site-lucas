import { Mail, MessageCircle, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { siteConfig, hasValue } from "@/data/config";
import { skillGroups } from "@/data/skills";
import { experience, education } from "@/data/experience";
import { projects } from "@/data/projects";

const whatsappDisplay = "+55 21 99049-4384";

const summary =
  "Desenvolvedor Full-Stack com 6 anos de experiência construindo produtos digitais de ponta a ponta — plataformas SaaS multi-tenant, aplicativos mobile (React Native/Expo) e APIs (Fastify, Elysia). Foco em arquitetura limpa, isolamento de dados (RLS/multi-tenant), integrações de pagamento e recursos de IA (RAG e agentes). Vários projetos em produção com clientes reais.";

const highlightedProjects = projects.slice(0, 5);

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 border-b border-ink-800/20 pb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 print:text-[9px]">
      {children}
    </h2>
  );
}

export function CVDocument() {
  const { email, github, linkedin } = siteConfig.contact;

  return (
    <article
      id="cv-document"
      className="mx-auto w-full max-w-[820px] bg-white px-10 py-9 text-ink-900 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] print:max-w-none print:px-0 print:py-0 print:shadow-none"
    >
      {/* Cabeçalho */}
      <header className="border-b-2 border-ink-900/80 pb-4">
        <h1 className="text-3xl font-semibold leading-none tracking-tight text-ink-950 print:text-[26px]">
          {siteConfig.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-brand-600 print:text-[12px]">
          {siteConfig.role}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-ink-700 print:text-[10px]">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-brand-600" aria-hidden /> {email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-brand-600" aria-hidden /> {whatsappDisplay}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden /> {siteConfig.location}
          </span>
          {hasValue(github) ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <Github className="h-3.5 w-3.5 text-brand-600" aria-hidden /> {github.replace(/^https?:\/\//, "")}
            </a>
          ) : null}
          {hasValue(linkedin) ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <Linkedin className="h-3.5 w-3.5 text-brand-600" aria-hidden /> {linkedin.replace(/^https?:\/\//, "")}
            </a>
          ) : null}
        </div>
      </header>

      {/* Resumo */}
      <section className="mt-5">
        <SectionTitle>Resumo profissional</SectionTitle>
        <p className="text-[11.5px] leading-relaxed text-ink-700 print:text-[10px] print:leading-snug">
          {summary}
        </p>
      </section>

      {/* Competências */}
      <section className="mt-5">
        <SectionTitle>Competências</SectionTitle>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="text-[11px] leading-snug print:text-[10px]">
              <span className="font-semibold text-ink-900">{group.title}: </span>
              <span className="text-ink-700">{group.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência */}
      <section className="mt-5">
        <SectionTitle>Experiência</SectionTitle>
        {experience.map((job) => (
          <div key={`${job.org}-${job.role}`} className="text-[11px] print:text-[10px]">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold text-ink-900">
                {job.role} · <span className="font-normal text-ink-700">{job.org}</span>
              </h3>
              <span className="shrink-0 font-mono text-[10px] text-ink-600 print:text-[9px]">
                {job.period}
              </span>
            </div>
            <p className="mt-1 leading-relaxed text-ink-700 print:leading-snug">{job.summary}</p>
          </div>
        ))}
      </section>

      {/* Projetos em destaque */}
      <section className="mt-5">
        <SectionTitle>Projetos em destaque</SectionTitle>
        <div className="space-y-2.5">
          {highlightedProjects.map((project) => (
            <div key={project.slug} className="text-[11px] print:text-[10px]">
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold text-ink-900">{project.title}</h3>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-[10px] font-medium text-brand-600 print:text-[9px]"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden />
                    {project.liveUrl.replace(/^https?:\/\//, "")}
                  </a>
                ) : null}
              </div>
              <p className="text-ink-700">{project.tagline}</p>
              <p className="mt-0.5 font-mono text-[9.5px] text-ink-600 print:text-[8.5px]">
                {project.technologies.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="mt-5">
        <SectionTitle>Formação e cursos</SectionTitle>
        <ul className="space-y-1 text-[11px] print:text-[10px]">
          {education.map((item) => (
            <li key={item.course} className="leading-snug">
              <span className="font-semibold text-ink-900">{item.course}</span>
              <span className="text-ink-700"> — {item.org}</span>
              {item.detail ? <span className="text-ink-600"> · {item.detail}</span> : null}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
