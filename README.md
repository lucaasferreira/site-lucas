# Lucas Ferreira — Portfólio (Desenvolvedor Full-Stack)

Portfólio pessoal de **Lucas Ferreira**, construído para **candidatura a vagas
full-stack**. O site apresenta uma visão objetiva do perfil profissional: quem
sou, minhas skills, projetos reais (com páginas de detalhe por projeto),
experiência e formas de contato — além de um currículo em `/cv` pronto para
impressão/exportação em PDF.

Sem copy de vendas, sem clientes fictícios e sem métricas inventadas: os textos
descrevem projetos e fatos de engenharia reais.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3.4** (com tokens custom)
- **Framer Motion** (animações, respeitando `prefers-reduced-motion`)
- **Recharts** (visualizações pontuais)
- **Lucide React** (ícones)
- **Geist Sans/Mono + Instrument Serif** (via `next/font`)

## Como rodar

```bash
npm install      # instala dependências
npm run dev      # ambiente de desenvolvimento → http://localhost:3000
npm test         # testes de integridade dos dados (node:test via tsx)
npm run build    # build de produção (gera as rotas estáticas)
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx              # metadata global + SEO / Open Graph
│   ├── page.tsx                # home (Hero, Sobre, Skills, Projetos, Experiência, Contato)
│   ├── projetos/[slug]/page.tsx# páginas de detalhe por projeto (10 rotas estáticas)
│   └── cv/page.tsx             # currículo com impressão → PDF
├── components/                 # Header, Footer, seções e componentes de UI
└── data/                       # FONTE DE DADOS — editar aqui
    ├── config.ts               # nome, cargo, bio, contato (e-mail, WhatsApp, GitHub, LinkedIn)
    ├── projects.ts             # os 10 projetos (+ projects.test.ts valida integridade)
    ├── experience.ts           # experiência profissional
    └── skills.ts               # skills / tecnologias
```

## Onde editar os dados

Todo o conteúdo é centralizado em **`src/data/*`** — não é preciso mexer nos
componentes para atualizar textos:

- **`config.ts`** — nome, cargo, `shortBio`, localização e contatos.
- **`projects.ts`** — projetos exibidos na home e nas páginas `/projetos/<slug>`.
  O arquivo `projects.test.ts` garante 10 projetos, slugs únicos e campos
  obrigatórios preenchidos (`npm test`).
- **`experience.ts`** — histórico profissional exibido na seção Experiência e no CV.
- **`skills.ts`** — grupos de tecnologias exibidos na seção Skills.

## Pendências (TODOs — dependem de dados reais do Lucas)

Estes pontos não bloqueiam o build; ao preencher, o conteúdo aparece
automaticamente:

- **GitHub / LinkedIn** — substituir os valores `"TODO"` em
  `src/data/config.ts`. Os botões sociais aparecem sozinhos via o helper
  `hasValue` quando o link real for informado.
- **Foto profissional** — adicionar `public/lucas.jpg` para habilitar o avatar
  no Hero/Sobre.
- **Screenshots dos projetos** — adicionar as imagens em
  `public/projects/<slug>.png` (mesmos slugs de `projects.ts`). Enquanto não
  existirem, o card usa um fallback por cor de acento — sem imagem quebrada.
- **`metadataBase` (URL de deploy)** — em `src/app/layout.tsx` há um placeholder
  `https://lucasferreira.dev`. Trocar pela URL real (ex.: Vercel) após publicar.
- **`og-image.png` (opcional)** — se quiser preview em redes sociais, criar
  `public/og-image.png` e habilitar `openGraph.images` em `layout.tsx`
  (comentário `TODO` já indica o local).

## Deploy

Projeto Next.js padrão — pronto para deploy na **Vercel** (`vercel` ou conectando
o repositório). Lembrar de atualizar o `metadataBase` com a URL final.
