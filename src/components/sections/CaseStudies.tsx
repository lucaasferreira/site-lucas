"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { impactSeries } from "@/data/metrics";

/**
 * Estilos dos gráficos:
 *  - tema escuro, baixo contraste em grids, dados destacados em lime
 *  - tooltip custom para harmonizar com o resto do site
 */

const tooltipStyle = {
  background: "rgba(15,15,18,0.96)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  fontSize: 12,
  color: "#fafafa",
  padding: "8px 12px",
  boxShadow: "0 8px 32px -16px rgba(0,0,0,0.7)",
};

type TooltipPayloadItem = {
  name?: string | number;
  value?: string | number;
  color?: string;
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div style={tooltipStyle as React.CSSProperties}>
      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
        {label}
      </p>
      <div className="mt-1 space-y-0.5">
        {payload.map((p, i) => (
          <p key={i} className="text-sm">
            <span
              className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
              style={{ background: p.color }}
            />
            <span className="text-white/70">{p.name}:</span>{" "}
            <span className="font-medium text-white">{p.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export function CaseStudies() {
  const { revenueGrowth, retention, beforeAfter, kpis } = impactSeries;

  return (
    <section
      id="cases"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Impacto consolidado em gráficos"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Cases · Impacto medido"
            title={
              <>
                A diferença entre{" "}
                <em className="font-serif font-normal text-brand-300">antes</em> e{" "}
                <em className="font-serif font-normal">depois</em>{" "}
                de um produto bem feito.
              </>
            }
            description="Números agregados representativos dos meus projetos. Cada cliente recebe um dashboard com os indicadores reais do produto dele."
          />
        </Reveal>

        {/* KPIs */}
        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((k) => (
            <StaggerItem key={k.label}>
              <Card className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {k.label}
                </p>
                <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-brand-200 sm:text-4xl">
                  {k.value}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Charts grid */}
        <div className="mt-6 grid gap-4 sm:gap-6 lg:grid-cols-3">
          {/* Revenue chart — wide */}
          <Reveal className="lg:col-span-2">
            <Card className="h-full p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Receita pós-lançamento
                  </p>
                  <h3 className="mt-1 text-xl font-medium text-white">
                    Crescimento típico em 6 meses
                  </h3>
                </div>
                <p className="font-mono text-sm text-brand-200">
                  R$ 12k → R$ 52k
                </p>
              </div>

              <div className="mt-6 h-[260px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueGrowth} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="depoisFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#bef264" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#bef264" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="antesFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity={0.18} />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `R$${v}k`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)" }} />
                    <Legend
                      wrapperStyle={{ fontSize: 12, color: "rgba(255,255,255,0.6)", paddingTop: 8 }}
                      iconType="circle"
                    />
                    <Area
                      type="monotone"
                      dataKey="antes"
                      name="Antes (linha base)"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      fill="url(#antesFill)"
                    />
                    <Area
                      type="monotone"
                      dataKey="depois"
                      name="Depois do projeto"
                      stroke="#bef264"
                      strokeWidth={2}
                      fill="url(#depoisFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Reveal>

          {/* Retention donut */}
          <Reveal delay={0.05}>
            <Card className="h-full p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Retenção pós-app
              </p>
              <h3 className="mt-1 text-xl font-medium text-white">
                78% retidos no 3º mês
              </h3>

              <div className="relative mt-4 h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={retention}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      startAngle={90}
                      endAngle={450}
                      stroke="none"
                    >
                      <Cell fill="#bef264" />
                      <Cell fill="rgba(255,255,255,0.1)" />
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-4xl font-semibold tracking-tight text-white">
                    78<span className="text-brand-300">%</span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Retidos
                  </span>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-white/60">
                  <span className="h-2 w-2 rounded-full bg-brand-300" /> Retidos
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <span className="h-2 w-2 rounded-full bg-white/20" /> Churn
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Before x After bars — wide */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <Card className="p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Antes × Depois
                  </p>
                  <h3 className="mt-1 text-xl font-medium text-white">
                    Indicadores médios dos clientes
                  </h3>
                </div>
                <p className="text-xs text-white/45">
                  Conversão em %; demais em escala normalizada (0–100 / 0–10).
                </p>
              </div>

              <div className="mt-6 h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={beforeAfter} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                    <XAxis
                      dataKey="dim"
                      tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 12 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                    <Legend
                      wrapperStyle={{ fontSize: 12, color: "rgba(255,255,255,0.6)", paddingTop: 8 }}
                      iconType="circle"
                    />
                    <Bar dataKey="antes" name="Antes" fill="rgba(255,255,255,0.18)" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="depois" name="Depois" fill="#bef264" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          * Métricas agregadas e representativas. Cada projeto entrega seu próprio painel de indicadores reais.
        </p>
      </div>
    </section>
  );
}
