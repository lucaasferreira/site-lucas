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
      "Infoprodutor brasileiro geralmente monta o negócio em cima de três ou quatro ferramentas soltas — uma pra hospedar curso, outra pra comunidade, outra pra cobrança — sem nada com a cara dele. Fui atrás de resolver isso numa plataforma só.",
    solution:
      "Construí uma plataforma white-label multi-tenant: área de membros com streaming de curso, comunidade no estilo Skool, tutor de IA por curso usando RAG e cobrança recorrente dos tenants, com painel pro infoprodutor e um console de superadmin pra mim gerenciar tudo.",
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
      "Uma operação de venda de ingressos e produtos precisava de checkout próprio, com controle de vendedores e estoque, sem ficar refém de um gateway de pagamento só.",
    solution:
      "Montei uma plataforma em Next.js com o núcleo financeiro (venda, estoque, webhook) todo meu, e o gateway de pagamento escondido atrás de uma interface — simulado em dev, Pagar.me em produção. Storage em MinIO e webhooks processados de forma assíncrona numa fila.",
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
      "Restaurante precisa de promoção pra atrair cliente, mas cupom solto é fácil de fraudar e difícil de controlar — e o cliente não tinha um lugar só pra descobrir e resgatar desconto por perto.",
    solution:
      "Fiz uma plataforma de cupons: app mobile em Expo pro cliente achar restaurante perto, resgatar o cupom e usar dentro de uma janela curta; painel web pro estabelecimento; e uma API própria cuidando de pagamento e das regras de validação.",
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
      "Uma treinadora queria vender treino e cardápio como curso e assinatura recorrente, com algo instalável pra aluna e um painel administrativo que fosse dela — sem empilhar ferramenta em cima de ferramenta.",
    solution:
      "Construí um monorepo: web em PWA (o app da aluna mais a área /admin), app mobile em Expo evoluindo em paridade gradual, e backend no Supabase (Postgres + Edge Functions em Deno) cuidando de pagamento, webhook, reconciliação e notificação.",
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
      "A academia Total Fitt precisava evoluir API, painel web e app mobile juntos, sem cada frente virar um projeto isolado com seu próprio jeito de fazer deploy.",
    solution:
      "Juntei tudo num monorepo Bun + Turborepo — API em Elysia, web em Next.js, mobile em Expo — na mesma pipeline, com build de imagem Docker e deploy automatizado.",
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
      "Consultor de consórcio precisa simular estratégia na hora, na frente do cliente, e guardar esse histórico depois — mas sem misturar os dados de uma empresa com os de outra.",
    solution:
      "SaaS em Next.js com autenticação, multi-tenancy de verdade, cadastro de cliente, motor de simulação, assinatura via Stripe, gestão de equipe e painel administrativo. Validei o fluxo inteiro localmente antes de considerar pronto.",
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
      "A Total Fitt (Barra da Tijuca/RJ) recebia lead pelo WhatsApp e precisava qualificar, organizar o funil e automatizar o primeiro contato — mas sem tirar o time humano da jogada.",
    solution:
      "Construí um CRM que puxa o WhatsApp via Evolution API, grava contato e conversa no banco e aciona um agente de IA (Gemini) pra qualificar o lead, com pipeline kanban, atendimento e broadcast.",
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
      "Consultoria de segurança de alimentos vive de visita de campo — cliente, não conformidade, temperatura de equipamento, documento — e precisava registrar isso na hora e consolidar tudo num painel depois, com um módulo de receitas junto.",
    solution:
      "Fiz um monorepo mobile-first: app de campo em Expo pro consultor e painel admin em Next.js, os dois compartilhando o mesmo domínio e backend — visita, não conformidade, equipamento, receita com custo, rotulagem e os KPIs da operação.",
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
      "Acompanhamento pré-natal ainda vive espalhado em papel — consulta, vacina, exame, alerta. Médico e paciente precisavam de uma visão digital só, segura, da gestação inteira.",
    solution:
      "Monorepo com app mobile da paciente (Expo), painel web do médico (React + Vite) e API REST em Fastify/Prisma/PostgreSQL, todos puxando de um pacote só de tipos e schemas Zod compartilhados.",
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
      "Nutricionista recebe exame de bioimpedância (Tanita) e plano alimentar em PDF, e precisa comparar a evolução do paciente — sem ficar digitando número um por um.",
    solution:
      "Uma web app que importa esses PDFs, extrai os dados com IA e monta relatório de evolução com gráfico e medição comparativa, além de deixar criar e gerenciar a dieta direto por ali.",
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
