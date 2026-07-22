"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Sparkles, TrendingUp, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { siteConfig, buildWhatsAppLink } from "@/data/config";

export function Hero() {
  const reduce = useReducedMotion();

  const float = (delay = 0) =>
    reduce
      ? {}
      : {
          y: [0, -8, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        };

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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* COPY */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge variant="brand" dot>
                Disponível para 2 novos projetos este trimestre
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Produtos digitais{" "}
              <GradientText variant="brand" className="font-serif italic font-normal">
                que viram resultado
              </GradientText>
              <br className="hidden sm:block" />
              de verdade.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Sou {siteConfig.name.split(" ")[0]}. Há {siteConfig.yearsExperience} anos eu
              construo aplicativos, sistemas e plataformas para infoprodutores,
              academias, personais e empresas — com foco em retenção, vendas e
              escala. Já gerei {siteConfig.revenueGenerated} em retorno para meus clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button href="#projetos" size="lg" variant="primary" withArrow>
                Ver projetos
              </Button>
              <Button
                href={buildWhatsAppLink()}
                external
                size="lg"
                variant="secondary"
              >
                Falar comigo
              </Button>
            </motion.div>

            {/* Inline proof line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                +{siteConfig.yearsExperience} anos no mercado
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                30+ produtos entregues
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                {siteConfig.revenueGenerated} gerados em retorno
              </span>
            </motion.div>
          </div>

          {/* BENTO MOCK */}
          <div className="relative h-[480px] sm:h-[520px] lg:h-[580px]">
            <div className="absolute inset-0">
              {/* glow behind */}
              <div
                aria-hidden
                className="absolute inset-x-10 top-10 -z-10 h-64 rounded-full bg-brand-300/20 blur-3xl"
              />

              {/* Card A — Revenue chart */}
              <motion.div
                animate={float(0)}
                className="absolute left-0 top-4 w-[58%] rounded-2xl border border-white/10 bg-ink-900/70 p-4 shadow-card backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-300/15 text-brand-300">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        Receita 90d
                      </p>
                      <p className="text-sm font-medium text-white">+R$ 184k</p>
                    </div>
                  </div>
                  <Badge variant="brand">+58%</Badge>
                </div>
                <svg
                  viewBox="0 0 200 60"
                  className="mt-3 h-14 w-full"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#bef264" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#bef264" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,50 L25,46 L50,42 L75,38 L100,32 L125,30 L150,22 L175,16 L200,8 L200,60 L0,60 Z"
                    fill="url(#rev)"
                  />
                  <path
                    d="M0,50 L25,46 L50,42 L75,38 L100,32 L125,30 L150,22 L175,16 L200,8"
                    fill="none"
                    stroke="#bef264"
                    strokeWidth="1.5"
                  />
                </svg>
              </motion.div>

              {/* Card B — Retention KPI */}
              <motion.div
                animate={float(0.8)}
                className="absolute right-0 top-32 w-[44%] rounded-2xl border border-white/10 bg-ink-900/70 p-4 shadow-card backdrop-blur-md"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Retenção alunas
                </p>
                <p className="mt-1 font-mono text-3xl font-semibold tracking-tight text-white">
                  78<span className="text-brand-300">%</span>
                </p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-200 to-brand-500"
                    style={{ width: "78%" }}
                  />
                </div>
                <p className="mt-2 text-[11px] text-white/45">+32% vs. baseline</p>
              </motion.div>

              {/* Card C — App mock */}
              <motion.div
                animate={float(1.6)}
                className="absolute left-6 top-[260px] w-[52%] rounded-2xl border border-white/10 bg-ink-900/70 p-3 shadow-card backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5 pb-2">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-auto font-mono text-[9px] text-white/30">
                    app · v1.4
                  </span>
                </div>
                <div className="space-y-1.5 rounded-lg bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-300 to-brand-500" />
                    <div className="flex-1">
                      <div className="h-2 w-3/5 rounded-full bg-white/15" />
                      <div className="mt-1 h-2 w-2/5 rounded-full bg-white/10" />
                    </div>
                  </div>
                  <div className="mt-2 h-12 rounded-md bg-gradient-to-tr from-white/[0.05] to-white/[0.02]" />
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-7 rounded-md bg-white/[0.04]" />
                    <div className="h-7 rounded-md bg-brand-300/20" />
                    <div className="h-7 rounded-md bg-white/[0.04]" />
                  </div>
                </div>
              </motion.div>

              {/* Card D — Quick metric */}
              <motion.div
                animate={float(2.2)}
                className="absolute right-2 bottom-12 w-[42%] rounded-2xl border border-white/10 bg-ink-900/70 p-4 shadow-card backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-warm-400/15 text-warm-400">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <p className="text-xs text-white/60">Lançamento Camila</p>
                </div>
                <p className="mt-2 font-mono text-2xl font-semibold tracking-tight text-white">
                  R$ 480k
                </p>
                <p className="mt-1 text-[11px] text-white/40">7º lançamento</p>
              </motion.div>

              {/* Floating tag */}
              <motion.div
                animate={float(0.3)}
                className="absolute left-[44%] bottom-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md"
              >
                <Layers className="h-3.5 w-3.5 text-brand-300" aria-hidden />
                <span>6 projetos ativos</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#numeros"
          aria-label="Rolar para autoridade"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white sm:mt-24"
        >
          <ArrowDown className="h-3.5 w-3.5" aria-hidden /> Role para conhecer o trabalho
        </motion.a>
      </div>
    </section>
  );
}
