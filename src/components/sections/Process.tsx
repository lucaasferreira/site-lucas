"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  Plug,
  CheckCircle2,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico do negócio",
    description:
      "Entendo o produto, o cliente, o funil, a operação. Defino o número-alvo do projeto.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento do produto",
    description:
      "Escopo, fluxos, regras de negócio, métricas e cronograma com marcos claros.",
  },
  {
    icon: PenTool,
    title: "UX/UI e prototipação",
    description:
      "Wireframes e protótipos navegáveis. Cliente valida antes de a primeira linha ser escrita.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Build em ciclos curtos com entregas semanais e ambiente de homologação disponível.",
  },
  {
    icon: Plug,
    title: "Integrações",
    description:
      "Pagamentos, WhatsApp, e-mail, IA, CRMs e APIs externas — tudo testado em sandbox primeiro.",
  },
  {
    icon: CheckCircle2,
    title: "Testes",
    description:
      "QA funcional, testes em dispositivos reais e checklist de acessibilidade básica.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    description:
      "Deploy, App Store/Play Store, configuração de domínio, analytics e monitoramento.",
  },
  {
    icon: RefreshCw,
    title: "Evolução & melhorias",
    description:
      "Acompanho métricas, sugiro próximos passos e ajusto o produto conforme o uso real.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Como eu trabalho"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Como eu trabalho"
            title={
              <>
                Um processo{" "}
                <em className="font-serif font-normal text-brand-300">enxuto</em>{" "}
                e previsível. Do diagnóstico à evolução.
              </>
            }
            description="Sem mistério, sem surpresa. Você sabe onde está e para onde vai em cada etapa."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* spine line on desktop */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent lg:block"
          />

          <ol className="grid gap-4 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const offsetLeft = i % 2 === 0;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04] sm:p-6 ${
                    offsetLeft ? "lg:mr-8" : "lg:ml-8"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-300/10 text-brand-300 ring-1 ring-brand-300/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-white/35">
                      Passo {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <h3 className="text-lg font-medium tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
