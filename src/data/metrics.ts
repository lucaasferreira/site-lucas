/**
 * Métricas de autoridade exibidas em destaque.
 * TROCAR: valores e descrições.
 */
import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  TrendingUp,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";

export type Metric = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export const authorityMetrics: Metric[] = [
  {
    label: "Anos de experiência",
    value: "6+",
    description: "Construindo produtos digitais para mercados diferentes.",
    icon: Calendar,
  },
  {
    label: "Retorno gerado a clientes",
    value: "R$ 400k+",
    description: "Soma estimada de receita e economia operacional.",
    icon: TrendingUp,
  },
  {
    label: "Projetos entregues",
    value: "30+",
    description: "Apps mobile, sistemas web, dashboards e automações.",
    icon: Layers,
  },
  {
    label: "Segmentos atendidos",
    value: "8",
    description: "Infoprodutores, fitness, saúde, e-commerce e mais.",
    icon: Users,
  },
  {
    label: "Foco em resultado",
    value: "100%",
    description: "Cada entrega é medida por retenção, vendas ou economia.",
    icon: Sparkles,
  },
];

/**
 * Dados de impacto consolidado para a seção de Cases (gráficos).
 * Valores são representativos — TROCAR conforme histórico real.
 */
export const impactSeries = {
  // Crescimento de receita pós-lançamento (linha)
  revenueGrowth: [
    { month: "Mês 1", antes: 12, depois: 12 },
    { month: "Mês 2", antes: 13, depois: 18 },
    { month: "Mês 3", antes: 14, depois: 26 },
    { month: "Mês 4", antes: 14, depois: 34 },
    { month: "Mês 5", antes: 15, depois: 41 },
    { month: "Mês 6", antes: 16, depois: 52 },
  ],
  // Retenção (donut)
  retention: [
    { name: "Retidos", value: 78 },
    { name: "Churn", value: 22 },
  ],
  // Antes x depois por dimensão (barras)
  beforeAfter: [
    { dim: "Retenção", antes: 38, depois: 78 },
    { dim: "Conversão", antes: 1.8, depois: 4.6 },
    { dim: "Engajamento", antes: 42, depois: 81 },
    { dim: "Satisfação", antes: 6.4, depois: 9.2 },
  ],
  // KPIs resumidos
  kpis: [
    { label: "Aumento médio em retenção", value: "+42%" },
    { label: "Aumento médio em conversão", value: "+155%" },
    { label: "Tempo economizado por mês", value: "+180h" },
    { label: "NPS médio dos clientes", value: "9,1" },
  ],
};
