import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig, hasValue } from "@/data/config";
import { Mail, MessageCircle, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const { contact, location } = siteConfig;

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="flex max-w-2xl flex-col gap-6">
          <Reveal>
            <SectionLabel>Contato</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              <GradientText variant="mono">Vamos conversar?</GradientText>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              Estou aberto a novas oportunidades — remotas ou presenciais. Se
              você tem um projeto ou uma vaga em mente, é só chamar. Respondo
              rápido.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button href={`mailto:${contact.email}`} variant="primary">
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" aria-hidden />
                  E-mail
                </span>
              </Button>

              <Button
                href={`https://wa.me/${contact.whatsapp}`}
                external
                variant="secondary"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </span>
              </Button>

              {hasValue(contact.github) ? (
                <Button href={contact.github} external variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" aria-hidden />
                    GitHub
                  </span>
                </Button>
              ) : null}

              {hasValue(contact.linkedin) ? (
                <Button href={contact.linkedin} external variant="secondary">
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" aria-hidden />
                    LinkedIn
                  </span>
                </Button>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4" aria-hidden />
              {location}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
