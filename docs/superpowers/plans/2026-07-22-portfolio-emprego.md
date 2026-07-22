# Portfólio de Emprego — Lucas Ferreira — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar o scaffold `site-lucas` (hoje voltado a venda para clientes) em um portfólio profissional em PT-BR para candidatura a vagas full-stack, com 10 projetos reais, páginas de detalhe e currículo baixável.

**Architecture:** Site single-page (navegação por âncoras) em Next.js 15 App Router + páginas estáticas por projeto (`/projetos/[slug]`) e uma página de currículo (`/cv`). Todo o conteúdo é data-driven em `src/data/`. Reaproveita o design system existente (dark premium, acento lime, componentes de UI) e remove todas as seções/dados de venda.

**Tech Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v3.4 · Framer Motion · Lucide React · Geist/Instrument Serif fonts · `tsx` (test runner de dados).

## Global Constraints

- Idioma de todo o conteúdo visível: **Português (Brasil)**. `<html lang="pt-BR">`.
- Nenhum dado fictício ou de venda (clientes fake, faturamento, depoimentos, WhatsApp de vendas). Se aparecer, é bug.
- Dados pessoais (fonte de verdade — usar exatamente estes):
  - Nome: **Lucas Ferreira** · Título: **Desenvolvedor Full-Stack** · Experiência: **6 anos**
  - Local: **Juiz de Fora / MG** · E-mail: **lucasaugusto.fgomes@gmail.com** · WhatsApp: **+55 21 99049-4384**
  - GitHub / LinkedIn / foto: valor literal `"TODO"` até o usuário fornecer; UI deve degradar (esconder botão quando `=== "TODO"`).
- Os 10 projetos e slugs estão fixados na spec (§3 de `docs/superpowers/specs/2026-07-22-portfolio-emprego-design.md`). Não inventar métricas; usar só o que está no README/código de cada pasta em `C:\Users\lucas\Projetos\<slug>`.
- Preservar o design system: cores `ink.*`/`brand.*`, utilitários `container-site`/`hairline`, componentes `ui/*`. Não trocar a paleta.
- Respeitar `prefers-reduced-motion` (já tratado em `globals.css`) — não adicionar animação que ignore isso.
- Cada task termina com `npm run build` verde e um commit.

---

### Task 1: Baseline limpo — remover cruft de venda e estabilizar o build

Deixa o projeto compilando com uma home mínima (Hero placeholder + Header/Footer com nav novo), sem nenhum componente/dado de venda. Base verde para as tasks seguintes.

**Files:**
- Delete: `src/components/sections/Metrics.tsx`, `Services.tsx`, `CaseStudies.tsx`, `Testimonials.tsx`, `Audiences.tsx`, `FinalCTA.tsx`, `InProgress.tsx`, `Process.tsx`, `ProjectsShowcase.tsx`, `ProjectCard.tsx`
- Delete: `src/components/WhatsAppFloat.tsx`, `src/data/metrics.ts`, `src/data/testimonials.ts`
- Modify: `src/app/page.tsx` (remover imports/render das seções deletadas; deixar só Hero placeholder)
- Modify: `src/app/layout.tsx` (garantir `lang="pt-BR"`; remover `<WhatsAppFloat/>` se referenciado)
- Modify: `src/components/Header.tsx` (nav novo), `src/components/Footer.tsx` (remover CTA de venda)
- Modify: `src/data/config.ts` (dados reais — ver Task 2 para `projects`; aqui só `siteConfig`/`nav`)

**Interfaces:**
- Produces: `siteConfig` com shape `{ name, role, shortBio, yearsExperience, location, contact: { email, whatsapp, github, linkedin }, nav: {label, href}[] }`. Remove `revenueGenerated`, `whatsappMessage`, `instagram`, `buildWhatsAppLink`.

- [ ] **Step 1: Reescrever `src/data/config.ts`**

```ts
export const siteConfig = {
  name: "Lucas Ferreira",
  role: "Desenvolvedor Full-Stack",
  shortBio:
    "Construo produtos digitais de ponta a ponta — web, mobile e APIs — há 6 anos.",
  yearsExperience: 6,
  location: "Juiz de Fora / MG",
  contact: {
    email: "lucasaugusto.fgomes@gmail.com",
    whatsapp: "5521990494384", // formato internacional, sem + ou espaços
    github: "TODO",   // TODO: URL do perfil GitHub
    linkedin: "TODO", // TODO: URL do perfil LinkedIn
  },
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export const hasValue = (v: string) => v !== "TODO" && v.length > 0;
```

- [ ] **Step 2: Deletar componentes e dados de venda**

```bash
rm src/components/sections/Metrics.tsx src/components/sections/Services.tsx \
   src/components/sections/CaseStudies.tsx src/components/sections/Testimonials.tsx \
   src/components/sections/Audiences.tsx src/components/sections/FinalCTA.tsx \
   src/components/sections/InProgress.tsx src/components/sections/Process.tsx \
   src/components/sections/ProjectsShowcase.tsx src/components/sections/ProjectCard.tsx \
   src/components/WhatsAppFloat.tsx src/data/metrics.ts src/data/testimonials.ts
```

- [ ] **Step 3: Reescrever `src/app/page.tsx` para uma home mínima**

```tsx
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 4: Ajustar `Hero.tsx` para um placeholder que compila**

Reduza `src/components/sections/Hero.tsx` ao mínimo que use apenas `siteConfig` (nome, role, shortBio) e um botão âncora "Ver projetos". Remova qualquer referência a `revenueGenerated`, WhatsApp, métricas. (Hero completo vem na Task 3.)

- [ ] **Step 5: Ajustar `layout.tsx`, `Header.tsx`, `Footer.tsx`**

- `layout.tsx`: `<html lang="pt-BR">`; remover `<WhatsAppFloat/>`; manter fonts e `globals.css`.
- `Header.tsx`: renderizar `siteConfig.nav`; remover botão "Fale comigo"/WhatsApp; deixar um botão âncora `#contato` ("Contato").
- `Footer.tsx`: remover CTA de venda; deixar nome + ano + links (e-mail; GitHub/LinkedIn só se `hasValue`).

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: PASS (sem erros de tipo/import). Se algum import órfão sobrar, remover.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "refactor: remover seções de venda e estabilizar baseline do portfólio"
```

---

### Task 2: Modelo de dados dos projetos + experiência/formação (com teste de integridade)

Redefine o tipo `Project` para o contexto de vaga e preenche os 10 projetos com dados reais lidos das pastas. Cria `experience.ts`. Adiciona um teste de integridade dos dados.

**Files:**
- Modify: `src/data/projects.ts` (novo `type Project` + 10 entradas reais)
- Create: `src/data/experience.ts`
- Create: `src/data/projects.test.ts`
- Modify: `package.json` (script `test` + devDep `tsx`)

**Interfaces:**
- Produces:
```ts
export type ProjectStatus = "producao" | "mvp" | "prototipo";
export type Accent = "lime" | "violet" | "cyan" | "amber" | "rose";
export type Project = {
  slug: string;            // = nome da pasta
  title: string;           // título exibido
  tagline: string;         // 1 linha
  type: string;            // ex.: "Web · Mobile · API"
  status: ProjectStatus;
  problem: string;
  solution: string;
  techHighlights: string[];   // 3–6 bullets de decisões de engenharia
  technologies: string[];     // stack completa (chips)
  liveUrl?: string;           // undefined se não houver
  repoUrl?: string;
  cover: string;              // "/projects/<slug>.png" (pode não existir ainda → fallback)
  accent: Accent;
};
export const projects: Project[];
```
- Produces (`experience.ts`):
```ts
export type Job = { role: string; org: string; period: string; summary: string; stack: string[] };
export type Education = { course: string; org: string; detail?: string };
export const experience: Job[];
export const education: Education[];
```

- [ ] **Step 1: Adicionar `tsx` e script de teste**

```bash
npm install -D tsx
```
Em `package.json` scripts, adicionar: `"test": "tsx --test src/data/*.test.ts"`.

- [ ] **Step 2: Escrever o teste de integridade `src/data/projects.test.ts` (falha primeiro)**

```ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { projects } from "./projects";

const SLUGS = [
  "infotech","ritmove","app-nutriconsultora","crm-totalfitt","atriade-pagamentos",
  "app-alvo-consorcios","descontai","cartao-pre-natal","nutri-compare-pro","totalfitt",
];

test("tem exatamente 10 projetos", () => {
  assert.equal(projects.length, 10);
});
test("slugs corretos e únicos", () => {
  const s = projects.map((p) => p.slug);
  assert.deepEqual(new Set(s).size, 10);
  for (const slug of SLUGS) assert.ok(s.includes(slug), `faltou ${slug}`);
});
test("campos obrigatórios não-vazios", () => {
  for (const p of projects) {
    for (const f of ["title","tagline","type","problem","solution","cover"] as const) {
      assert.ok(p[f] && p[f].length > 0, `${p.slug}.${f} vazio`);
    }
    assert.ok(p.techHighlights.length >= 3, `${p.slug} poucos techHighlights`);
    assert.ok(p.technologies.length >= 3, `${p.slug} poucas technologies`);
    assert.ok(p.cover.startsWith("/projects/"), `${p.slug} cover path inválido`);
  }
});
test("liveUrl, quando presente, é http(s)", () => {
  for (const p of projects) {
    if (p.liveUrl) assert.match(p.liveUrl, /^https?:\/\//, `${p.slug} liveUrl`);
  }
});
```

- [ ] **Step 3: Rodar o teste e ver falhar**

Run: `npm test`
Expected: FAIL (projects.ts ainda tem o shape antigo / não exporta os 10).

- [ ] **Step 4: Reescrever `src/data/projects.ts` com os 10 projetos reais**

Para CADA slug, ler `C:\Users\lucas\Projetos\<slug>\README.md` e `package.json` e escrever `problem`/`solution`/`techHighlights`/`technologies`/`liveUrl` fiéis ao conteúdo real (sem inventar métricas). Seguir os dois exemplos abaixo (já extraídos dos READMEs reais):

```ts
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
    // liveUrl omitido (plataforma interna) — confirmar com o usuário
    cover: "/projects/atriade-pagamentos.png",
    accent: "violet",
  },
  // ... repetir para os 8 restantes lendo cada README:
  // ritmove, app-nutriconsultora, crm-totalfitt, app-alvo-consorcios,
  // descontai, cartao-pre-natal, nutri-compare-pro, totalfitt.
  // Ordem final do array = ordem de exibição (spec §3):
  // infotech, atriade-pagamentos, descontai, ritmove, totalfitt,
  // app-alvo-consorcios, crm-totalfitt, app-nutriconsultora,
  // cartao-pre-natal, nutri-compare-pro.
  // accents: variar entre lime/violet/cyan/amber/rose para o fallback ficar colorido.
  // liveUrl: preencher só onde o README confirma domínio público
  //   (ritmove → https://app.ritmove.com.br). Os demais: omitir e marcar
  //   com comentário "// TODO confirmar URL" — NÃO inventar domínio.
];
```

- [ ] **Step 5: Criar `src/data/experience.ts`**

```ts
export type Job = { role: string; org: string; period: string; summary: string; stack: string[] };
export type Education = { course: string; org: string; detail?: string };

export const experience: Job[] = [
  {
    role: "Desenvolvedor Full-Stack",
    org: "Projetos próprios e para clientes",
    period: "2019 — atual (6 anos)",
    summary:
      "Desenvolvimento de produtos digitais de ponta a ponta: plataformas SaaS multi-tenant, apps mobile (React Native/Expo), APIs (Fastify, Elysia), integrações de pagamento e recursos de IA (RAG, agentes). Vários projetos em produção com clientes reais.",
    stack: ["React","Next.js","React Native","Node.js","Fastify","Elysia","PostgreSQL","Prisma","Drizzle","Docker","IA/RAG"],
  },
];

export const education: Education[] = [
  { course: "Sistemas para Internet", org: "Universidade Cruzeiro do Sul" },
  { course: "React e React Native", org: "Alura" },
  { course: "Claude Code, automações (n8n, Make), agentes de IA e soft skills", org: "IBE.IA" },
];
```

- [ ] **Step 6: Rodar teste e build**

Run: `npm test`
Expected: PASS (todos os testes).
Run: `npm run build`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: modelo de dados dos 10 projetos + experiência/formação com teste de integridade"
```

---

### Task 3: Hero + Sobre (seções)

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/About.tsx`
- Modify: `src/app/page.tsx` (adicionar `<About/>`)

**Interfaces:**
- Consumes: `siteConfig`, `hasValue` de `@/data/config`.

- [ ] **Step 1: Hero completo**

`Hero.tsx`: usa `siteConfig.name`, `role`, `shortBio`. Renderiza:
- `SectionLabel` "Desenvolvedor Full-Stack".
- H1 com nome (usar `GradientText` no sobrenome).
- Parágrafo `shortBio`.
- Linha de badges com techs principais: React, Next.js, React Native, Node.js, PostgreSQL (usar `ui/Badge`).
- CTAs (`ui/Button`): "Ver projetos" (`href="#projetos"`), "Baixar CV" (`href="/cv"`), e — só quando `hasValue(contact.github)` / `hasValue(contact.linkedin)` — botões GitHub e LinkedIn (ícones Lucide).
- Fundo: reutilizar `bg-radial-glow`/`bg-grid-soft` já disponíveis.
- Animar entrada com `ui/Reveal`.

- [ ] **Step 2: Seção Sobre**

`About.tsx` com `id="sobre"`: título via `SectionLabel`, 2 parágrafos (6 anos construindo produtos ponta a ponta; foco full-stack web/mobile/APIs/IA; base em Juiz de Fora/MG, disponível para novas oportunidades). Usar `container-site` e `Reveal`.

- [ ] **Step 3: Montar na home**

`page.tsx`: `<main><Hero/><About/></main>`.

- [ ] **Step 4: Verificação visual**

Run: `npm run build` → PASS.
Run (dev, verificação de render): iniciar o dev server e conferir Hero + Sobre renderizando sem erro de hidratação/console.
Expected: Hero mostra nome, badges e botões (GitHub/LinkedIn ausentes enquanto `TODO`); Sobre visível.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: seções Hero e Sobre"
```

---

### Task 4: Seção Skills / Stack

**Files:**
- Create: `src/data/skills.ts`
- Create: `src/components/sections/Skills.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: `export const skillGroups: { title: string; items: string[] }[]`.

- [ ] **Step 1: Dados de skills**

```ts
export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Front-end", items: ["React","Next.js","React Native / Expo","TypeScript","Tailwind CSS"] },
  { title: "Back-end", items: ["Node.js","Fastify","Elysia","Prisma","Drizzle","PostgreSQL","pgvector"] },
  { title: "Infra & Ferramentas", items: ["Docker","BullMQ / Redis","Supabase","Stripe","MinIO","Vitest","Playwright"] },
  { title: "IA & Automação", items: ["RAG","Agentes de IA","n8n","Make","Claude Code"] },
];
```

- [ ] **Step 2: Componente Skills**

`Skills.tsx` com `id="skills"`: grid responsivo (1 col mobile, 2 md, 4 lg) de `ui/Card`, cada card = grupo com título e chips (`ui/Badge`). `SectionLabel` "O que eu domino". `Reveal` com stagger leve.

- [ ] **Step 3: Montar na home** — inserir `<Skills/>` após `<About/>`.

- [ ] **Step 4: Build + verificação visual**

Run: `npm run build` → PASS. Conferir 4 grupos renderizando.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: seção Skills/Stack"
```

---

### Task 5: Grid de projetos (ProjectCard + Projetos)

**Files:**
- Create: `src/components/ui/Cover.tsx` (capa com fallback — compartilhado com a Task 6)
- Create: `src/components/sections/ProjectCard.tsx`
- Create: `src/components/sections/Projects.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `projects`, `type Project`, `type Accent` de `@/data/projects`.
- Produces:
  - `<Cover src={string} accent={Accent} alt={string} />` — client component: tenta `next/image` em `src`; em `onError` esconde a imagem e mostra `ui/ProjectMock` (gradiente por `accent`). Usado por `ProjectCard` (Task 5) e `ProjectDetail` (Task 6).
  - `<ProjectCard project={Project} />`.

- [ ] **Step 1: Componente `Cover` compartilhado**

`src/components/ui/Cover.tsx` (client): props `{ src: string; accent: Accent; alt: string; className?: string }`. Renderiza `ProjectMock accent={accent}` como fundo e, por cima, `next/image` com `onError={() => setFailed(true)}`; quando `failed`, não renderiza a imagem (fica só o mock). Assim capas ainda não capturadas degradam graciosamente.

- [ ] **Step 2: ProjectCard**

`ProjectCard.tsx` (client se usar motion): recebe `project`. Renderiza:
- Capa via `<Cover src={project.cover} accent={project.accent} alt={project.title} />`.
- Título, tagline.
- 4 primeiros `technologies` como `ui/Badge`.
- Rodapé: link "Ver detalhes" → `/projetos/${slug}`; e, se `liveUrl`, ícone/link externo "Ao vivo".
- Badge de `status` ("Em produção"/"MVP"/"Protótipo") no canto.

- [ ] **Step 3: Seção Projetos**

`Projects.tsx` com `id="projetos"`: `SectionLabel` "Projetos em destaque", grid responsivo (1/2/3 colunas) mapeando `projects` para `<ProjectCard>`. `Reveal` por item.

- [ ] **Step 4: Montar na home** — inserir `<Projects/>` após `<Skills/>`.

- [ ] **Step 5: Build + verificação visual**

Run: `npm run build` → PASS. Conferir 10 cards; sem imagem ainda → fallback colorido aparece (não quebra).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: grid de projetos com cards e fallback de capa"
```

---

### Task 6: Páginas de detalhe `/projetos/[slug]`

**Files:**
- Create: `src/app/projetos/[slug]/page.tsx`
- Create: `src/components/sections/ProjectDetail.tsx` (apresentação)

**Interfaces:**
- Consumes: `projects` de `@/data/projects`.

- [ ] **Step 1: Rota estática**

`src/app/projetos/[slug]/page.tsx`:
- `export function generateStaticParams()` → `projects.map(p => ({ slug: p.slug }))`.
- `export function generateMetadata({ params })` → title `"<title> — Lucas Ferreira"`, description = `tagline`.
- Componente da página: acha o projeto por slug; se não achar, `notFound()`. Renderiza `<ProjectDetail project={p} />`.

- [ ] **Step 2: ProjectDetail**

Layout de página: voltar para "← Projetos" (link `/#projetos`); capa grande (mesmo `Cover`/fallback da Task 5); título + tagline; blocos **Problema**, **Solução**, **Destaques técnicos** (lista de `techHighlights`); grid de `technologies` (chips); botões `liveUrl` (se houver) e `repoUrl` (se houver). Usar `container-site`, `SectionLabel`, tipografia serif nos títulos.

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: PASS e log mostrando 10 rotas `/projetos/*` geradas estaticamente.

- [ ] **Step 4: Verificação visual** — abrir `/projetos/infotech` e conferir os blocos.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: páginas de detalhe por projeto (/projetos/[slug])"
```

---

### Task 7: Experiência & Formação + Contato + Footer final

**Files:**
- Create: `src/components/sections/ExperienceEducation.tsx`
- Create: `src/components/sections/Contact.tsx`
- Modify: `src/components/Footer.tsx`, `src/app/page.tsx`

**Interfaces:**
- Consumes: `experience`, `education` de `@/data/experience`; `siteConfig`, `hasValue`.

- [ ] **Step 1: Experiência & Formação**

`ExperienceEducation.tsx` com `id="experiencia"`: duas colunas (ou empilhado no mobile). Esquerda "Experiência": timeline de `experience` (role, org, period, summary, chips de stack). Direita "Formação": lista de `education` (course, org). `SectionLabel` + `Reveal`.

- [ ] **Step 2: Contato**

`Contact.tsx` com `id="contato"`: título forte ("Vamos conversar?"), botões: E-mail (`mailto:`), WhatsApp (`https://wa.me/${siteConfig.contact.whatsapp}`), e GitHub/LinkedIn quando `hasValue`. Localização Juiz de Fora/MG. Sem formulário, sem fluxo de venda.

- [ ] **Step 3: Footer final** — nome + "© <ano>" + links (e-mail; GitHub/LinkedIn se `hasValue`). Sem CTA de venda.

- [ ] **Step 4: Montar na home** — `page.tsx`: `<ExperienceEducation/>` e `<Contact/>` após `<Projects/>`.

- [ ] **Step 5: Build + verificação visual** — `npm run build` → PASS; conferir todas as seções e âncoras da nav funcionando.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: seções Experiência/Formação e Contato + footer final"
```

---

### Task 8: Screenshots reais dos projetos

Capturar telas das URLs públicas e salvar em `public/projects/`. Projetos sem URL pública ficam no fallback colorido (já implementado).

**Files:**
- Create: `public/projects/<slug>.png` (para os que tiverem `liveUrl`)

- [ ] **Step 1: Levantar URLs capturáveis**

Listar de `projects.ts` todos os `liveUrl` definidos (confirmados: `infotech` → app.metodoferreira.com.br; `ritmove` → app.ritmove.com.br; demais conforme confirmados com o usuário).

- [ ] **Step 2: Capturar cada tela**

Para cada `liveUrl`, abrir no browser (viewport desktop 1280×800), aguardar carregar e salvar screenshot como `public/projects/<slug>.png`. Se a URL exigir login/estiver indisponível, **não** forçar: registrar que fica no fallback e seguir.

- [ ] **Step 3: Otimizar** — garantir PNGs com tamanho razoável (redimensionar para ~1200px de largura se muito grandes).

- [ ] **Step 4: Build + verificação** — `npm run build` → PASS; cards dos projetos com screenshot agora mostram a imagem real; os sem imagem seguem no fallback.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: screenshots reais das telas em produção"
```

---

### Task 9: Página de currículo `/cv` + PDF

**Files:**
- Create: `src/app/cv/page.tsx`
- Create: `src/components/CVDocument.tsx`
- Create: `public/lucas-ferreira-cv.pdf` (gerado)

**Interfaces:**
- Consumes: `siteConfig`, `skillGroups`, `experience`, `education`, `projects` (3–5 primeiros como destaques).

- [ ] **Step 1: Componente do currículo**

`CVDocument.tsx`: layout de 1 página A4, alinhado ao visual do site mas legível impresso. Seções: cabeçalho (nome, título, e-mail, WhatsApp, local, GitHub/LinkedIn se `hasValue`); resumo profissional (2–3 linhas); competências (mesma taxonomia de `skillGroups`); projetos em destaque (5 primeiros de `projects`: título + tagline + 1 linha de stack + liveUrl se houver); formação (`education`).

- [ ] **Step 2: Rota /cv com estilo de impressão**

`src/app/cv/page.tsx`: renderiza `CVDocument` centralizado; botão "Baixar PDF" (link para `/lucas-ferreira-cv.pdf`) e botão "Imprimir" (`window.print()`, client). CSS `@media print` esconde botões/nav e ajusta margens A4.

- [ ] **Step 3: Gerar o PDF**

Rodar o dev/preview, abrir `/cv` no browser e exportar/imprimir para PDF salvando em `public/lucas-ferreira-cv.pdf`. (O botão "Baixar CV" do Hero e o "Baixar PDF" do /cv apontam para esse arquivo.)

- [ ] **Step 4: Build + verificação** — `npm run build` → PASS; `/cv` renderiza; impressão esconde a navegação; PDF baixa.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: página de currículo /cv com PDF baixável"
```

---

### Task 10: SEO, metadados e revisão final

**Files:**
- Modify: `src/app/layout.tsx` (metadata global + OG)
- Create: `public/og-image.png` (opcional, gerado da Hero)
- Modify: `README.md`

- [ ] **Step 1: Metadata global**

Em `layout.tsx`, exportar `metadata`: `title` "Lucas Ferreira — Desenvolvedor Full-Stack", `description` (resumo), `openGraph` (title/description/locale `pt_BR`/images), `metadataBase`. Confirmar `lang="pt-BR"`.

- [ ] **Step 2: Atualizar README**

Reescrever `README.md` para descrever o portfólio (propósito: vaga; stack; como rodar; onde editar dados: `src/data/*`; pendências `TODO` GitHub/LinkedIn/foto).

- [ ] **Step 3: Varredura anti-fictício**

Buscar resíduos: `git grep -nEi "jessica|rafael|instagram|revenueGenerated|whatsappMessage|depoiment|faturamento"` → não deve retornar nada em `src/`. Corrigir se houver.

- [ ] **Step 4: Build final + testes**

Run: `npm test` → PASS.
Run: `npm run build` → PASS, sem warnings de imagem/link quebrado.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: SEO/metadados, README do portfólio e revisão final"
```

---

## Pós-plano (dependem do usuário — não bloqueiam o build)

- Fornecer **GitHub** e **LinkedIn** → substituir os `"TODO"` em `config.ts` (botões aparecem sozinhos via `hasValue`).
- Fornecer **foto profissional** → `public/lucas.jpg` e habilitar no Hero/Sobre.
- Confirmar **URLs ao vivo** dos projetos sem `liveUrl` → adicionar em `projects.ts` e capturar screenshot (repetir Task 8 para eles).
- **Deploy na Vercel** (`vercel` / conectar repositório).
