/**
 * Projetos do portfólio.
 * TROCAR: substitua cada projeto pelos seus reais.
 *
 * Convenções:
 *  - status: 'delivered' | 'evolving' | 'in_progress'
 *  - cover: caminho em /public/projects/*  (sugerido 1200x800)
 *  - client.photo: caminho em /public/clients/*  (256x256 quadrada)
 */

export type ProjectCategory =
  | "mobile"
  | "web"
  | "infoproduct"
  | "fitness"
  | "automation"
  | "dashboard";

export type ProjectStatus = "delivered" | "evolving" | "in_progress";

export type ProjectResult = {
  label: string;
  value: string;
};

export type ProjectFeedback =
  | { type: "text"; content: string }
  | { type: "video"; url: string; poster?: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  cover: string;
  // Mockup colorido fallback caso a imagem não exista — gradient name no Tailwind config
  accent?: "lime" | "violet" | "cyan" | "amber" | "rose";
  client: {
    name: string;
    photo: string;
    bio: string;
    instagram?: string;
    website?: string;
  };
  description: string;
  problem: string;
  solution: string;
  impact: string;
  results: ProjectResult[];
  technologies: string[];
  feedback?: ProjectFeedback;
  // Para projetos em andamento
  progress?: number; // 0-100
  nextStep?: string;
};

// =============================================================
// PROJETOS — TROCAR conteúdo abaixo pelos seus projetos reais
// =============================================================
export const projects: Project[] = [
  {
    slug: "app-treinos-ritmados",
    title: "App de Treinos Ritmados",
    tagline: "Mobile app premium para personal com comunidade.",
    category: "fitness",
    categoryLabel: "App Mobile · Fitness",
    status: "evolving",
    cover: "/projects/treinos-ritmados.jpg", // TROCAR
    accent: "lime",
    client: {
      name: "Jessica Almeida",
      photo: "/clients/jessica.jpg", // TROCAR
      bio: "Personal trainer com comunidade de +3 mil alunas online.",
      instagram: "https://instagram.com/jessicaalmeida", // TROCAR
    },
    description:
      "Aplicativo de treinos guiados com vídeos, planos, mensagens diretas e assinatura recorrente integrada.",
    problem:
      "Conteúdo espalhado entre WhatsApp, Drive e Instagram. Alunas se perdiam, cancelavam e cobravam reembolso por falta de organização.",
    solution:
      "App nativo com biblioteca de treinos por nível, planos semanais, chat com personal, paywall via RevenueCat e painel admin para curadoria.",
    impact:
      "Em 90 dias após o lançamento: retenção quase dobrou, suporte caiu 60% e a personal subiu o ticket médio do plano anual.",
    results: [
      { label: "Retenção de alunas", value: "+32%" },
      { label: "Tempo médio no app", value: "+28%" },
      { label: "Redução de suporte", value: "-60%" },
    ],
    technologies: ["React Native", "Expo", "Supabase", "Stripe", "RevenueCat"],
    feedback: {
      type: "text",
      content:
        "O app mudou completamente a forma como entrego treinos. Minhas alunas voltaram a engajar e o suporte sumiu.",
    },
  },
  {
    slug: "plataforma-infoproduto-mentoria",
    title: "Plataforma de Mentoria 1:1",
    tagline: "SaaS para mentores premium escalarem cohorts.",
    category: "infoproduct",
    categoryLabel: "Sistema Web · Infoproduto",
    status: "delivered",
    cover: "/projects/plataforma-mentoria.jpg", // TROCAR
    accent: "violet",
    client: {
      name: "Rafael Santos",
      photo: "/clients/rafael.jpg", // TROCAR
      bio: "Mentor de negócios digitais, +12 cohorts entregues.",
      instagram: "https://instagram.com/rafaelsantos", // TROCAR
    },
    description:
      "Plataforma web com área de membros, agendamento de calls 1:1, módulos liberados por gatilho e billing recorrente.",
    problem:
      "Mentor usava 6 ferramentas diferentes (Hotmart, Calendly, Zoom, Notion, WhatsApp, Stripe). Operacional consumia 20h/semana só de organização.",
    solution:
      "Sistema unificado com área de membros, agenda integrada ao Google Calendar, links Zoom automáticos, billing Stripe e relatórios de progresso por aluno.",
    impact:
      "Operacional caiu de 20h para 4h semanais. Cohort seguinte teve 38% a mais de upsell por causa da visibilidade do progresso.",
    results: [
      { label: "Tempo operacional", value: "-80%" },
      { label: "Upsell na próxima turma", value: "+38%" },
      { label: "NPS dos mentorados", value: "9,4" },
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Resend"],
    feedback: {
      type: "text",
      content:
        "Recuperei 16 horas da minha semana. O Lucas entregou um produto que parece de empresa grande.",
    },
  },
  {
    slug: "crm-leads-qualificacao",
    title: "CRM Inteligente de Qualificação",
    tagline: "CRM com IA para qualificar leads automaticamente.",
    category: "automation",
    categoryLabel: "Automação · CRM",
    status: "in_progress",
    progress: 72,
    nextStep: "Integração com pipeline de WhatsApp Business",
    cover: "/projects/crm-leads.jpg", // TROCAR
    accent: "cyan",
    client: {
      name: "Marina Costa",
      photo: "/clients/marina.jpg", // TROCAR
      bio: "Diretora comercial de empresa de educação digital.",
      website: "https://exemplo.com.br", // TROCAR
    },
    description:
      "CRM web que recebe leads de múltiplas fontes, qualifica via IA pelas respostas e distribui para o time comercial certo.",
    problem:
      "Time comercial gastava 70% do tempo qualificando lead frio. Conversão estava estagnada em 1,8%.",
    solution:
      "CRM com triagem automática por IA (análise de respostas e comportamento), painel de pipeline, automações por estágio e relatórios em tempo real.",
    impact:
      "Em 6 semanas de uso piloto, a conversão saltou para 4,1% e o time fechou 2,3x mais reuniões qualificadas.",
    results: [
      { label: "Conversão", value: "1,8% → 4,1%" },
      { label: "Reuniões qualificadas", value: "+130%" },
      { label: "Tempo de qualificação", value: "-65%" },
    ],
    technologies: ["Next.js", "Postgres", "OpenAI", "Zapier", "WhatsApp API"],
    feedback: {
      type: "text",
      content:
        "Em 6 semanas dobramos a conversão sem aumentar o time. Esse CRM virou o coração do nosso comercial.",
    },
  },
  {
    slug: "app-fitness-assinatura",
    title: "App Fitness com Assinatura",
    tagline: "App de academia digital com paywall e analytics.",
    category: "fitness",
    categoryLabel: "App Mobile · Fitness",
    status: "in_progress",
    progress: 85,
    nextStep: "Submissão para App Store e Google Play",
    cover: "/projects/app-fitness.jpg", // TROCAR
    accent: "amber",
    client: {
      name: "André Pacheco",
      photo: "/clients/andre.jpg", // TROCAR
      bio: "Dono de rede com 4 unidades de academia no interior.",
      instagram: "https://instagram.com/academiaandre", // TROCAR
    },
    description:
      "App de academia digital com treinos por objetivo, check-in por QR code, gamificação e plano de assinatura mensal/anual.",
    problem:
      "Academia perdia alunos em digital porque competia com apps nacionais. Sem app próprio, não conseguia reter na assinatura.",
    solution:
      "App nativo com biblioteca de treinos, gamificação por ranking, check-in QR para presença e paywall mensal/anual com upsell de personal.",
    impact:
      "Beta com 200 alunos rodando há 4 semanas, com retenção 2,4x maior que o app antigo terceirizado.",
    results: [
      { label: "Retenção vs solução anterior", value: "2,4x" },
      { label: "Engajamento semanal", value: "+58%" },
      { label: "Ticket médio projetado", value: "+22%" },
    ],
    technologies: ["React Native", "Expo", "Supabase", "Stripe", "Sentry"],
  },
  {
    slug: "dashboard-infoprodutor",
    title: "Dashboard Unificado para Infoprodutor",
    tagline: "Visão única de Hotmart, Kiwify, ADs e e-mail.",
    category: "dashboard",
    categoryLabel: "Dashboard · Infoproduto",
    status: "delivered",
    cover: "/projects/dashboard-info.jpg", // TROCAR
    accent: "rose",
    client: {
      name: "Camila Reis",
      photo: "/clients/camila.jpg", // TROCAR
      bio: "Lança produtos de marketing digital — 7 lançamentos no último ano.",
      instagram: "https://instagram.com/camilareis", // TROCAR
    },
    description:
      "Dashboard que conecta Hotmart, Kiwify, Meta Ads, Google Ads e o CRM de e-mail num único painel, com alertas automáticos.",
    problem:
      "Camila abria 8 abas diferentes por dia de lançamento. Erros de leitura de ROAS custaram um lançamento inteiro no último ano.",
    solution:
      "Dashboard com KPIs consolidados, ROAS em tempo real por canal, funil completo do lead à venda e alertas de anomalia via WhatsApp.",
    impact:
      "Último lançamento bateu R$ 480k com 2,4x mais previsibilidade que a média histórica do funil dela.",
    results: [
      { label: "Lançamento", value: "R$ 480k" },
      { label: "Tempo de leitura de métricas", value: "-75%" },
      { label: "Alertas de erro evitados", value: "12" },
    ],
    technologies: ["Next.js", "Postgres", "Recharts", "Make", "WhatsApp API"],
    feedback: {
      type: "text",
      content:
        "Esse dashboard pagou ele inteiro no primeiro lançamento. Hoje eu não consigo lançar sem.",
    },
  },
  {
    slug: "sistema-academia-gestao",
    title: "Sistema de Gestão para Academia",
    tagline: "ERP de academia: alunos, financeiro, treinos, anamnese.",
    category: "web",
    categoryLabel: "Sistema Web · Fitness",
    status: "delivered",
    cover: "/projects/sistema-academia.jpg", // TROCAR
    accent: "lime",
    client: {
      name: "Bruno Vasques",
      photo: "/clients/bruno.jpg", // TROCAR
      bio: "Sócio de academia boutique com foco em performance.",
      instagram: "https://instagram.com/brunovasques", // TROCAR
    },
    description:
      "Sistema completo de gestão: cadastro de alunos, anamnese digital, prescrição de treino, financeiro com PIX recorrente e portal do aluno.",
    problem:
      "Academia usava planilha + WhatsApp + sistema legado lento. Inadimplência crescia e treinos atrasavam.",
    solution:
      "ERP web com cobrança automática PIX/cartão, anamnese guiada, prescrição com biblioteca de exercícios em vídeo e portal mobile-first para o aluno.",
    impact:
      "Inadimplência caiu 71%. Tempo de prescrição de treino caiu de 25min para 4min por aluno.",
    results: [
      { label: "Inadimplência", value: "-71%" },
      { label: "Tempo de prescrição", value: "-84%" },
      { label: "Alunos ativos", value: "+38%" },
    ],
    technologies: ["Next.js", "Postgres", "Stripe", "EfiBank PIX", "Cloudflare"],
    feedback: {
      type: "text",
      content:
        "Saí da planilha pra um sistema de verdade. A academia virou outra coisa em 60 dias.",
    },
  },
];

export const inProgressProjects = projects.filter((p) => p.status === "in_progress");
export const deliveredProjects = projects.filter((p) => p.status !== "in_progress");

// Filtros usados na seção de showcase
export const projectFilters: { id: ProjectCategory | "all" | "in_progress"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "mobile", label: "Apps Mobile" },
  { id: "web", label: "Sistemas Web" },
  { id: "infoproduct", label: "Infoprodutores" },
  { id: "fitness", label: "Fitness" },
  { id: "automation", label: "Automação" },
  { id: "in_progress", label: "Em desenvolvimento" },
];

export function filterProjects(
  list: Project[],
  filterId: (ProjectCategory | "all" | "in_progress")
): Project[] {
  if (filterId === "all") return list;
  if (filterId === "in_progress") return list.filter((p) => p.status === "in_progress");
  // categoria mobile inclui apps mobile em geral (mobile + fitness mobile)
  if (filterId === "mobile") return list.filter((p) => p.category === "mobile" || p.category === "fitness");
  return list.filter((p) => p.category === filterId);
}
