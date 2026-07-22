# Portfólio de Emprego — Lucas Ferreira — Design

**Data:** 2026-07-22
**Autor:** Lucas Ferreira (com Claude)
**Status:** Aprovado — pronto para plano de implementação

---

## 1. Objetivo e contexto

Portfólio profissional para **candidatura a vagas de emprego** (CLT/PJ) como
**Desenvolvedor Full-Stack**, direcionado a recrutadores e times técnicos no Brasil.

- **Público-alvo:** recrutadores técnicos e engenheiros que avaliam candidatos.
- **Idioma:** Português (Brasil).
- **Meta de conteúdo:** demonstrar competência técnica real, amplitude de stack e
  projetos de produção — não conversão de clientes freelance.
- **Reaproveitamento:** parte de um scaffold Next.js existente (`site-lucas`),
  reusando a stack e o design system, mas **reestruturando as seções** do modo
  "venda para cliente" para o modo "candidatura a vaga".

### Ponto de partida (o que já existe)

O scaffold atual foi montado para conversão de clientes freelance e contém:
- Dados **fictícios** (clientes "Jessica Almeida", "Rafael Santos"; métricas de
  faturamento; depoimentos inventados).
- Seções de venda: `Metrics` (faturamento), `Services`, `CaseStudies`,
  `Testimonials`, `Audiences`, `FinalCTA`, `WhatsAppFloat`.

Essas seções e dados serão **removidos**. O que se preserva é a base técnica e o
design system (ver §7).

---

## 2. Dados pessoais (fonte de verdade)

| Campo | Valor |
|---|---|
| Nome | Lucas Ferreira |
| Título profissional | Desenvolvedor Full-Stack |
| Anos de experiência | 6 |
| Localização | Juiz de Fora / MG |
| E-mail | lucasaugusto.fgomes@gmail.com |
| WhatsApp/Telefone | +55 21 99049-4384 |
| GitHub | `TODO` — aguardando URL do usuário |
| LinkedIn | `TODO` — aguardando URL do usuário |
| Foto profissional | `TODO` (opcional) — aguardando arquivo do usuário |

Os campos `TODO` **não travam a implementação**; ficam com marcador visível em
`src/data/config.ts` e placeholder gracioso na UI (botão oculto ou desabilitado
enquanto o valor for `TODO`).

### Formação (para Experiência/Formação e CV)

- **Cruzeiro do Sul** — Sistemas para Internet (graduação/tecnólogo).
- **Alura** — React, React Native.
- **IBE.IA** — Claude Code, soft skills, automações (n8n, Make), agentes de IA.

---

## 3. Projetos selecionados (10 em destaque)

Curadoria priorizando maturidade, stack moderna e diversidade de engenharia.
Todos podem ser exibidos **abertamente** (nomes de cliente e domínios reais
liberados pelo usuário).

| # | Slug (pasta) | Título exibido | Tipo | Stack-destaque | Link ao vivo |
|---|---|---|---|---|---|
| 1 | `infotech` | Infotech — Plataforma white-label para infoprodutores | Web + Mobile + API (produção) | Fastify · Prisma · pgvector/RAG · React · Expo · Docker | app.metodoferreira.com.br, app.maxthulio.com.br |
| 2 | `ritmove` | RitMove — Plataforma de fitness (PWA + mobile) | Web PWA + Mobile | Vite/React · Supabase (26 edge functions) | app.ritmove.com.br |
| 3 | `app-nutriconsultora` | GoldCheck — Consultoria em segurança de alimentos | Mobile + Web + API | Turbo · Fastify · Next · Expo · Docker | `TODO` confirmar URL |
| 4 | `crm-totalfitt` | CRM Total Fitt — CRM de WhatsApp com agente de IA | Web (CRM) | Vite/React · Supabase · Evolution API · agente IA | `TODO` confirmar URL |
| 5 | `atriade-pagamentos` | Atriade — Plataforma de checkout e pagamentos | Backend + Web | Next · Prisma/Postgres · BullMQ+Redis · MinIO · Vitest+Playwright | interno / `TODO` |
| 6 | `app-alvo-consorcios` | Alvo Consórcios — SaaS simulador de estratégias | SaaS Web | Next 16 · React 19 · Tailwind v4 · Supabase · Stripe · shadcn | `TODO` confirmar URL |
| 7 | `descontai` | Descontaí — Clube de descontos (web + app) | Web + Mobile + API | Elysia · Drizzle · Better Auth · Next · Expo | `TODO` confirmar URL |
| 8 | `cartao-pre-natal` | Cartão Pré-Natal Digital | Mobile + Web + API | Monorepo · REST · Docker | `TODO` confirmar URL |
| 9 | `nutri-compare-pro` | Nutri Compare Pro — Ferramenta para nutricionistas | Web | Vite/React/shadcn · Supabase · Docker | `TODO` confirmar URL |
| 10 | `totalfitt` | Total Fitt — Plataforma completa da academia | Mobile + Web + API | Bun · Elysia · Drizzle · Better Auth · Next · Expo | `TODO` confirmar URL |

**Ordem de exibição** no grid: abrir com os mais fortes em engenharia — sugestão
`infotech`, `atriade-pagamentos`, `descontai`, `ritmove`, `totalfitt`,
`app-alvo-consorcios`, `crm-totalfitt`, `app-nutriconsultora`, `cartao-pre-natal`,
`nutri-compare-pro` (ordem final definida no plano; ajustável via array em
`projects.ts`).

Durante a implementação, cada projeto terá seus dados reais (problema, solução,
destaques técnicos, stack completa, URL) coletados das respectivas pastas em
`C:\Users\lucas\Projetos\<slug>` (README/package.json). URLs `TODO` acima serão
confirmadas nesse momento.

---

## 4. Arquitetura de informação e seções

Formato: **single-page** com navegação por âncoras + **páginas de detalhe por
projeto** em `/projetos/[slug]`.

### Seções da home (nesta ordem)

1. **Hero**
   - Nome, título ("Desenvolvedor Full-Stack"), uma frase de posicionamento forte,
     badges das techs principais.
   - CTAs: *Ver projetos* (âncora), *LinkedIn*, *GitHub*, *Baixar CV*.
   - Foto opcional (se fornecida); sem foto, layout centrado só com texto.
2. **Sobre**
   - 6 anos construindo produtos ponta-a-ponta (web, mobile, APIs, IA).
   - Localização (Juiz de Fora/MG), disponibilidade.
3. **Skills / Stack** — agrupado em quatro grupos:
   - *Front-end:* React, Next.js, React Native/Expo, Tailwind CSS.
   - *Back-end:* Node.js, Fastify, Elysia, Prisma, Drizzle, PostgreSQL, pgvector.
   - *Infra & Ferramentas:* Docker, BullMQ/Redis, Supabase, Stripe, MinIO, testes (Vitest/Playwright).
   - *IA & Automação:* RAG, agentes, n8n, Make, Claude Code.
4. **Projetos em destaque** — grid dos 10 (ver §5).
5. **Experiência & Formação** — timeline: 6 anos como desenvolvedor + formação (§2).
6. **Contato** — e-mail, LinkedIn, GitHub, WhatsApp. Sem botão flutuante de vendas.

### Rotas

- `/` — home single-page.
- `/projetos/[slug]` — detalhe de cada projeto (10 rotas geradas estaticamente).
- `/cv` — currículo de 1 página com estilo de impressão + download PDF (§6).

---

## 5. Apresentação dos projetos

### Card (no grid da home)

- Screenshot real da tela em produção (ver §5.1) ou `ProjectMock` colorido como fallback.
- Título + tagline curta.
- Chips com 3–5 principais tecnologias.
- Link ao vivo (quando houver) + "Ver detalhes" → `/projetos/[slug]`.

### Página de detalhe (`/projetos/[slug]`)

Foco em **decisões de engenharia**, não em ROI de cliente:
- Screenshot(s) grande(s).
- **Problema → Solução → Destaques técnicos.**
- Stack completa.
- Link ao vivo (quando houver) e repositório (quando público).

### 5.1 Screenshots

Para projetos com domínio público, capturar **screenshots reais** das telas em
produção (via ferramentas de browser) e salvá-los em `public/projects/<slug>.*`.
Onde não houver URL pública/acessível, usar o componente `ProjectMock` (gradiente
por `accent`) como fallback. A captura é uma etapa do plano de implementação;
falha em capturar um projeto específico cai graciosamente no fallback.

---

## 6. Currículo (CV)

Gerar um **currículo de 1 página** a partir dos dados de §2, §3 (projetos
selecionados como destaques) e formação:
- Rota `/cv` renderizando o currículo com CSS de impressão (`@media print`),
  visualmente alinhado ao site.
- Botão/― link **"Baixar CV"** no Hero e na seção Contato.
- Conteúdo: cabeçalho (nome, título, contato, localização), resumo profissional,
  competências técnicas (mesma taxonomia de Skills), projetos em destaque
  (3–5 principais, resumidos), formação.
- Geração do PDF: rota imprimível é a fonte; um PDF estático em
  `public/lucas-ferreira-cv.pdf` é gerado a partir dela (etapa do plano).

---

## 7. Arquitetura técnica

### Stack (reaproveitada do scaffold)

- Next.js 15 (App Router) + React 19 + TypeScript.
- Tailwind CSS v3.4 com tokens custom (design system existente).
- Framer Motion (animações), Lucide React (ícones).
- Fontes: Geist Sans/Mono + Instrument Serif (via `next/font`).

### Design system (preservado)

- Superfície dark premium base zinc (`ink.950`–`ink.600`).
- Acento de marca **lime/emerald** (`brand.*`, `#bef264`).
- Utilitários existentes: `container-site`, `hairline`, `text-balance`, glows
  (`shadow-glow-*`), grid de fundo (`bg-grid-soft`, `bg-radial-glow`).
- Componentes de UI reutilizados: `Button`, `Badge`, `Card`, `Reveal`,
  `SectionLabel`, `GradientText`, `ProjectMock`, `Avatar`.
- Acessibilidade: respeito a `prefers-reduced-motion` já presente em `globals.css`.

### Dados (data-driven)

Centralizados em `src/data/`:
- `config.ts` — nome, título, bio, contato (e-mail, WhatsApp, GitHub, LinkedIn),
  navegação. Remover WhatsApp de vendas; ajustar `nav` para as novas seções.
- `projects.ts` — reescrito com os 10 projetos reais. O `type Project` é
  simplificado para o contexto de vaga: remover campos de venda
  (`client`, `results` de faturamento, `feedback`/depoimento, `impact` como ROI)
  e adicionar/priorizar: `problem`, `solution`, `techHighlights` (destaques de
  engenharia), `technologies`, `liveUrl`, `repoUrl?`, `cover`, `accent`.
- `experience.ts` — **novo**: experiência profissional e formação para a timeline
  e o CV.

### Componentes — mapa de mudança

| Ação | Componentes |
|---|---|
| **Manter (UI)** | `ui/Button`, `ui/Badge`, `ui/Card`, `ui/Reveal`, `ui/SectionLabel`, `ui/GradientText`, `ui/ProjectMock`, `ui/Avatar` |
| **Reescrever/adaptar** | `sections/Hero`, `sections/ProjectCard`, `sections/ProjectsShowcase`, `Header` (nav), `Footer` |
| **Criar** | `sections/About`, `sections/Skills`, `sections/ExperienceEducation`, `sections/Contact`, página `projetos/[slug]/page.tsx`, página `cv/page.tsx` |
| **Remover** | `sections/Metrics`, `sections/Services`, `sections/CaseStudies`, `sections/Testimonials`, `sections/Audiences`, `sections/FinalCTA`, `sections/InProgress`, `sections/Process`, `WhatsAppFloat`, `data/metrics.ts`, `data/testimonials.ts` |

### Deploy

- Deploy na **Vercel**.
- SEO básico: metadados (`title`, `description`, Open Graph) no `layout.tsx` e por
  página de projeto; `lang="pt-BR"`.

---

## 8. Fora de escopo (YAGNI)

- Blog / seção de artigos.
- Internacionalização (site é só PT-BR).
- Depoimentos / prova social de cliente.
- Métricas de faturamento / ROI.
- Botão flutuante de WhatsApp / fluxo de vendas.
- CMS / painel de administração (dados ficam em arquivos versionados).
- Projetos além dos 10 selecionados (as "reservas" mencionadas no brainstorming
  ficam de fora desta versão).

---

## 9. Critérios de sucesso

- Home carrega e apresenta, em ordem: Hero, Sobre, Skills, Projetos,
  Experiência/Formação, Contato — sem nenhum vestígio de conteúdo de venda ou
  dados fictícios.
- Os 10 projetos aparecem com dados reais e, onde houver URL pública, screenshot
  real e link ao vivo funcionando.
- Cada projeto tem página `/projetos/[slug]` com Problema → Solução → Destaques
  técnicos → Stack.
- `/cv` renderiza um currículo de 1 página imprimível e há um PDF baixável.
- Nenhum dado fictício remanescente; campos ainda ausentes (GitHub, LinkedIn,
  foto) marcados como `TODO` e degradando graciosamente na UI.
- `npm run build` conclui sem erros; deploy na Vercel funcional.
