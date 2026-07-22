import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/ui/Reveal";
import { buildWhatsAppLink, siteConfig } from "@/data/config";
import { Mail, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-20 py-28 sm:py-36"
      aria-label="Vamos conversar"
    >
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 sm:p-12 lg:p-20">
          {/* background glow */}
          <div
            aria-hidden
            className="absolute -inset-x-20 -top-32 -z-10 h-72 bg-radial-glow blur-3xl"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-dot-grid opacity-40"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent"
          />

          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-300">
                · Próximo passo ·
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
                Quer transformar sua ideia em um{" "}
                <GradientText variant="brand" className="font-serif italic font-normal">
                  produto digital de verdade
                </GradientText>
                ?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
                Atendo poucos clientes por trimestre para garantir profundidade.
                Conta o que você quer construir — em até 24 horas eu respondo
                pessoalmente com diagnóstico e próximos passos.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button
                  href={buildWhatsAppLink()}
                  external
                  size="lg"
                  variant="primary"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden /> Falar com Lucas no WhatsApp
                </Button>
                <Button href="#projetos" size="lg" variant="secondary">
                  Ver projetos
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/45">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {siteConfig.contact.email}
                </a>
                <span className="hidden sm:inline">·</span>
                <span className="font-mono uppercase tracking-widest">
                  Resposta em até 24h
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
