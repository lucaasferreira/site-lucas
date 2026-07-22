import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { authorityMetrics } from "@/data/metrics";

export function Metrics() {
  return (
    <section
      id="numeros"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Autoridade em números"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Autoridade · Números"
            title={
              <>
                Trabalho medido por{" "}
                <em className="font-serif font-normal text-brand-300">resultado real</em>,
                não por entregáveis bonitos.
              </>
            }
            description="Cada projeto é planejado pra mover uma agulha específica do negócio do cliente — retenção, conversão, receita ou economia operacional."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {authorityMetrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <StaggerItem key={m.label} className={idx === 0 ? "col-span-2 lg:col-span-1" : ""}>
                <Card className="h-full p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-300/10 text-brand-300 ring-1 ring-brand-300/20">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {m.label}
                    </p>
                  </div>
                  <p className="mt-4 font-mono text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {m.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {m.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
