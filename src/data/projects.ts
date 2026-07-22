/**
 * Projetos reais do portfólio (contexto de candidatura a vaga).
 *
 * Cada entrada foi escrita a partir do README + package.json reais do projeto
 * em C:\Users\lucas\Projetos\<slug>. Sem métricas inventadas.
 *
 * Convenções:
 *  - slug: nome exato da pasta do projeto.
 *  - status: 'producao' (README indica em produção), 'mvp' (funcional, não
 *    claramente em produção) ou 'prototipo' (fase inicial).
 *  - cover: "/projects/<slug>.png" — imagem pode ainda não existir (fallback por accent).
 *  - liveUrl: só quando o README confirma um domínio público.
 */

export type ProjectStatus = "producao" | "mvp" | "prototipo";
export type Accent = "lime" | "violet" | "cyan" | "amber" | "rose";

export type Project = {
  slug: string; // = nome da pasta
  title: string; // título exibido
  tagline: string; // 1 linha
  type: string; // ex.: "Web · Mobile · API"
  status: ProjectStatus;
  problem: string;
  solution: string;
  techHighlights: string[]; // 3–6 bullets de decisões de engenharia
  technologies: string[]; // stack completa (chips)
  liveUrl?: string; // undefined se não houver
  repoUrl?: string;
  cover: string; // "/projects/<slug>.png" (pode não existir ainda → fallback)
  accent: Accent;
};

// =============================================================
// Ordem do array = ordem de exibição.
// =============================================================
export const projects: Project[] = [
  {
    slug: "infotech",
    title: "InfoTech — Plataforma white-label para infoprodutores",
    tagline: "SaaS multi-tenant em produção: área de membros, comunidade e tutor de IA.",
    type: "Web · Mobile · API",
    status: "producao",
    problem:
      "Infoprodutores brasileiros dependem de várias ferramentas soltas para hospedar cursos, comunidade e cobrança, sem uma marca própria unificada.",
    solution:
      "Plataforma white-label multi-tenant: área de membros (streaming de cursos), comunidade estilo Skool, tutor de IA por curso (RAG) e cobrança recorrente dos tenants, com painel do infoprodutor e console de superadmin.",
    techHighlights: [
      "Backend único Fastify multi-tenant: cada request resolve o tenant por host/slug/domínio customizado.",
      "Isolamento fail-closed via extensão do Prisma (createTenantClient) que força orgId em toda query.",
      "Tutor de IA com RAG por curso usando pgvector; provedores de vídeo/pagamento/LLM plugáveis por tenant (BYO), com credenciais cifradas (AES-256-GCM).",
      "Em produção no Dokploy/VPS (Traefik + Caddy), com cliente white-label no ar; ~885 testes.",
    ],
    technologies: ["Fastify 5","Prisma 6","PostgreSQL","pgvector","Redis/BullMQ","React 19","Vite 6","Tailwind","Expo","Docker/Dokploy"],
    liveUrl: "https://app.metodoferreira.com.br",
    cover: "/projects/infotech.png",
    accent: "lime",
  },
  {
    slug: "atriade-pagamentos",
    title: "A Tríade Pagamentos — Checkout, ingressos e vendedores",
    tagline: "Plataforma interna de checkout com filas, storage e gateway plugável.",
    type: "Web · Backend",
    status: "mvp",
    problem:
      "Operação de vendas de ingressos e produtos precisava de um checkout próprio com controle de vendedores, estoque e rastreio, sem depender de um gateway único.",
    solution:
      "Plataforma Next.js com núcleo financeiro (venda, estoque, webhook), gateway de pagamento atrás de interface (SimulatedProvider em dev, Pagar.me em prod), storage MinIO e processamento assíncrono de webhooks por fila.",
    techHighlights: [
      "Gateway de pagamento abstraído por interface, trocável por env sem mudar o núcleo.",
      "Processamento de webhooks com BullMQ + Redis em worker separado.",
      "RBAC com Auth.js; segredos e dados sensíveis cifrados (CRYPTO_KEY).",
      "Cobertura de núcleo financeiro com Vitest e E2E com Playwright; deploy Docker + Caddy (TLS automático).",
    ],
    technologies: ["Next.js 16","Prisma","PostgreSQL","Auth.js","MinIO","BullMQ","Redis","Tailwind v4","Vitest","Playwright"],
    // liveUrl omitido (plataforma interna) — TODO confirmar URL
    cover: "/projects/atriade-pagamentos.png",
    accent: "violet",
  },
  {
    slug: "descontai",
    title: "DescontAí — Cupons de desconto em restaurantes",
    tagline: "App de cupons com resgate geolocalizado e validação no balcão.",
    type: "Mobile · Web · API",
    status: "mvp",
    problem:
      "Restaurantes precisam atrair clientes com promoções, mas cupons genéricos são fáceis de fraudar e difíceis de controlar; o cliente não tem um lugar único para descobrir e resgatar descontos próximos.",
    solution:
      "Plataforma de cupons com app mobile (Expo) para o cliente descobrir restaurantes próximos, resgatar cupons e usá-los dentro de uma janela curta, painel web para o estabelecimento e API própria com pagamentos e regras de validação.",
    techHighlights: [
      "API em Elysia (Bun) com Drizzle ORM sobre PostgreSQL e autenticação via better-auth.",
      "Contrato de API tipado ponta a ponta: cliente gerado por Kubb (OpenAPI) e consumido por web e mobile com TanStack Query.",
      "Regra de expiração enforçada no backend — 2h a partir do resgate (claimedAt) — evitando uso fora da janela.",
      "Pagamentos com Mercado Pago, storage de imagens em MinIO e e-mails transacionais via Resend.",
      "App mobile com geolocalização (expo-location/maps), login Google e notificações push (expo-notifications).",
    ],
    technologies: ["Elysia","Bun","Drizzle ORM","PostgreSQL","better-auth","Mercado Pago","MinIO","Next.js 16","Expo","React Native","TanStack Query"],
    // TODO confirmar URL
    cover: "/projects/descontai.png",
    accent: "cyan",
  },
  {
    slug: "ritmove",
    title: "RitMove — Plataforma de treinos e cardápios por assinatura",
    tagline: "PWA + app mobile de fitness com cursos e cobrança recorrente, em produção.",
    type: "Web (PWA) · Mobile · Backend",
    status: "producao",
    problem:
      "Treinadora precisava vender treinos e cardápios como cursos e assinaturas recorrentes, com uma experiência instalável para a aluna e um painel administrativo próprio, sem juntar ferramentas soltas.",
    solution:
      "Monorepo com Web PWA (app da aluna + área /admin), app mobile Expo em paridade gradual e backend Supabase (Postgres + Edge Functions Deno) cobrindo pagamentos, webhooks, reconciliações e notificações.",
    techHighlights: [
      "Monorepo npm workspaces com tipos do banco (@ritmove/db-types) e lógica compartilhada (@ritmove/shared) entre web e mobile.",
      "Backend serverless: 26 Edge Functions Deno no Supabase, com RLS como camada de isolamento e jobs agendados via pg_cron.",
      "Pagamentos Pagar.me Core v5 (avulso e assinatura recorrente) com webhooks e reconciliação; e-mails via Resend e WhatsApp via Evolution API.",
      "Web como PWA instalável (vite-plugin-pwa) com deploy contínuo na Vercel; mobile distribuído por Expo EAS (build + submit).",
    ],
    technologies: ["React 18","Vite 5","TypeScript","Tailwind","Supabase","PostgreSQL","Edge Functions (Deno)","Pagar.me","Expo","React Native","Vercel"],
    liveUrl: "https://app.ritmove.com.br",
    cover: "/projects/ritmove.png",
    accent: "amber",
  },
  {
    slug: "totalfitt",
    title: "Total Fitt — Plataforma multi-app da academia (API, web e mobile)",
    tagline: "Monorepo Bun + Turborepo com API Elysia, web Next.js e app Expo.",
    type: "API · Web · Mobile",
    status: "mvp",
    problem:
      "A academia Total Fitt precisava de uma base unificada para evoluir API, painel web e app mobile em conjunto, com deploy previsível e código consistente entre as três frentes.",
    solution:
      "Monorepo Bun + Turborepo reunindo API (Elysia/Bun), web (Next.js) e mobile (Expo/React Native) sob a mesma pipeline, com build de imagens Docker e deploy automatizado.",
    techHighlights: [
      "Monorepo Turborepo com workspaces Bun para orquestrar build/lint/dev das três aplicações a partir de um comando.",
      "API em Elysia sobre o runtime Bun, empacotada em imagem Docker publicada no GHCR.",
      "CI/CD: push em main que toca apps/api ou apps/web dispara build da imagem e deploy no Dokploy.",
      "Qualidade de código padronizada com Biome/Ultracite e hooks de git (lefthook + lint-staged).",
    ],
    technologies: ["Bun","Turborepo","Elysia","Next.js","Expo","React Native","Docker/GHCR","Dokploy","Biome"],
    // TODO confirmar URL
    cover: "/projects/totalfitt.png",
    accent: "rose",
  },
  {
    slug: "app-alvo-consorcios",
    title: "Alvo Consórcios — SaaS de simulação de estratégias de consórcio",
    tagline: "MVP funcional multi-tenant: clientes, simulador versionado e assinaturas Stripe.",
    type: "Web · SaaS",
    status: "mvp",
    problem:
      "Consultores e empresas de consórcio precisavam simular estratégias, guardar o histórico por cliente e organizar equipes, com cobrança por assinatura e isolamento de dados entre organizações.",
    solution:
      "SaaS Next.js (App Router) com autenticação, multi-tenancy, cadastro de clientes, motor de simulação, planos/assinaturas via Stripe, gestão de equipe e painel administrativo — validado ponta a ponta localmente.",
    techHighlights: [
      "Isolamento real por RLS no Supabase: toda tabela de negócio tem política; service role restrito a webhook/convite/admin.",
      "Stripe como fonte da verdade de cobrança; o banco é espelho via webhooks idempotentes, sem plano/preço vindo do frontend.",
      "Motor de simulação puro e versionado em lib/simulator; simulações antigas nunca são recalculadas na visualização.",
      "Mutações via Server Actions com validação Zod + guards; leituras em Server Components; dinheiro em centavos no domínio.",
      "Testes em camadas (unit, RLS, E2E com Playwright) e deploy na Vercel.",
    ],
    technologies: ["Next.js 16","React 19","TypeScript","Tailwind v4","shadcn/ui (Base UI)","Supabase","PostgreSQL","Stripe","Resend","Zod","Vitest","Playwright"],
    // TODO confirmar URL
    cover: "/projects/app-alvo-consorcios.png",
    accent: "lime",
  },
  {
    slug: "crm-totalfitt",
    title: "CRM Total Fitt — Atendimento no WhatsApp com IA de qualificação",
    tagline: "CRM com pipeline kanban e agente de IA que qualifica leads no WhatsApp.",
    type: "Web · Backend · IA",
    status: "mvp",
    problem:
      "A academia Total Fitt (Barra da Tijuca/RJ) recebia leads pelo WhatsApp e precisava qualificá-los, organizar o funil de vendas e automatizar o primeiro atendimento sem perder o controle do time humano.",
    solution:
      "CRM que integra o WhatsApp (Evolution API), grava contatos/conversas no banco e aciona um agente de IA (Gemini) para qualificar o lead, com pipeline kanban, atendimento e broadcasts.",
    techHighlights: [
      "Backend em Supabase (Postgres + Edge Functions Deno): webhook resolve o JID (inclui @lid), cria contato/conversa e dispara a IA.",
      "Agente de IA com porteiro de ciclo de vida antes do LLM (barra cliente/handoff), kill-switch global e horário comercial.",
      "Qualificação via Gemini com marcadores terminais ([IS_CUSTOMER], [ADVANCE_STAGE], [DISQUALIFY]) movendo o deal no pipeline.",
      "Frontend Vite + React com TanStack Query e Sentry; edge functions testadas com Deno test.",
    ],
    technologies: ["React 18","Vite","TypeScript","shadcn/ui","TanStack Query","Supabase","Edge Functions (Deno)","Evolution API","Google Gemini","Sentry"],
    // liveUrl omitido (CRM interno) — TODO confirmar URL
    cover: "/projects/crm-totalfitt.png",
    accent: "violet",
  },
  {
    slug: "app-nutriconsultora",
    title: "GoldCheck — Consultoria em segurança de alimentos (mobile-first)",
    tagline: "SaaS multi-tenant com app de campo Expo e painel web para o consultor.",
    type: "Mobile · Web · API",
    status: "mvp",
    problem:
      "Consultorias de segurança de alimentos fazem visitas de campo (clientes, não conformidades, temperaturas de equipamentos, documentos) e precisam registrar tudo em campo e consolidar num painel, com módulo de receitas/nutrição.",
    solution:
      "Monorepo mobile-first com app de campo (Expo) para o consultor e painel admin web (Next.js), compartilhando domínio e backend: visitas, não conformidades, equipamentos, alimentos, receitas com custo, rotulagem e KPIs.",
    techHighlights: [
      "Monorepo pnpm + Turborepo com fonte única de tipos e schemas Zod no pacote domain, reusados por API, web e mobile.",
      "API Fastify com a lógica de negócio isolada em packages/services e PostgreSQL via Prisma.",
      "Mídia (documentos, fotos de visita/NC e relatório PDF) em MinIO (S3-compatível).",
      "Fundação de produção: bundles tsup, imagens Docker + docker-compose.prod e CI com Postgres; mobile em paridade de features com o web (Expo SDK 54).",
    ],
    technologies: ["pnpm","Turborepo","Fastify","Prisma","PostgreSQL","Zod","MinIO","Next.js","Expo","React Native","Docker"],
    // TODO confirmar URL
    cover: "/projects/app-nutriconsultora.png",
    accent: "cyan",
  },
  {
    slug: "cartao-pre-natal",
    title: "Cartão Pré-Natal Digital — App da paciente + painel do médico",
    tagline: "Monorepo saúde: acompanhamento de gestação com API REST e tipos compartilhados.",
    type: "Mobile · Web · API",
    status: "mvp",
    problem:
      "O acompanhamento pré-natal envolve consultas, vacinas, exames e alertas espalhados em papel; médico e paciente precisavam de uma visão digital única e segura da gestação.",
    solution:
      "Monorepo com app mobile da paciente (Expo), painel web do médico (React + Vite) e API REST (Fastify + Prisma + PostgreSQL), ligados por um pacote de tipos e schemas Zod compartilhados.",
    techHighlights: [
      "packages/shared como fonte única de verdade: enums, tipos e schemas Zod validam inputs na API e reusam nos formulários do web.",
      "Autenticação JWT com access token (15min) + refresh token (7d) persistido; renovação automática por interceptor no 401.",
      "Autorização por escopo: o médico só enxerga as próprias pacientes; a paciente só a própria gestação (guards dedicados).",
      "TypeScript strict sem any; respostas no envelope { data, error, meta } com error handler global (ZodError→400).",
      "Deploy em VPS com Docker Compose (nginx-proxy + api + web + Postgres) e migrations aplicadas no start (prisma migrate deploy).",
    ],
    technologies: ["Fastify","Prisma","PostgreSQL","Zod","JWT","React","Vite","Expo","React Native","Docker","nginx"],
    // TODO confirmar URL
    cover: "/projects/cartao-pre-natal.png",
    accent: "amber",
  },
  {
    slug: "nutri-compare-pro",
    title: "Nutri Compare Pro — Evolução nutricional a partir de PDFs",
    tagline: "App web que extrai bioimpedância e dietas de PDF com IA e gera relatórios comparativos.",
    type: "Web · IA",
    status: "mvp",
    problem:
      "Nutricionistas recebem exames de bioimpedância (Tanita) e planos alimentares em PDF e precisam comparar a evolução do paciente e montar dietas, sem digitar tudo à mão.",
    solution:
      "Aplicação web que importa PDFs de bioimpedância e de dieta, extrai os dados com IA, gera relatórios de evolução com gráficos e medições comparativas e permite criar/gerenciar dietas.",
    techHighlights: [
      "Extração de dados de PDFs (dieta e Tanita) por Edge Functions Deno chamando o Google Gemini.",
      "Backend Supabase (Auth + Postgres + Edge Functions); secrets do Gemini isolados no runtime das functions.",
      "Frontend Vite + React + shadcn/ui com gráficos (Recharts) e geração de relatórios em PDF no cliente (jsPDF).",
      "Build estático servido por Nginx em Docker; variáveis VITE_* embutidas no build de produção.",
    ],
    technologies: ["React 18","Vite","TypeScript","shadcn/ui","Supabase","Edge Functions (Deno)","Google Gemini","Recharts","jsPDF","Docker","Nginx"],
    // TODO confirmar URL
    cover: "/projects/nutri-compare-pro.png",
    accent: "rose",
  },
];
