# Lucas Ferreira — Portfolio Premium

Site portfólio de Lucas Ferreira (desenvolvedor de produtos digitais, 6 anos).
Foco: case studies premium, autoridade e conversão de clientes de alto valor.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v3.4 (com tokens custom)
- Framer Motion (animações)
- Recharts (gráficos de resultado)
- Lucide React (ícones)
- Geist Sans/Mono + Instrument Serif (via next/font)

## Como rodar
```bash
npm install
npm run dev
# http://localhost:3000
```

## Arquitetura
```
src/
├── app/              # layout, page, globals
├── components/
│   ├── sections/     # Hero, Metrics, Services, ProjectsShowcase,
│   │                 # CaseStudies, Process, InProgress, Testimonials,
│   │                 # Audiences, FinalCTA
│   ├── ui/           # Button, Badge, Card, Reveal, etc.
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── WhatsAppFloat.tsx
├── data/             # projects, testimonials, metrics, config (SUBSTITUIR aqui)
└── lib/utils.ts
```

## Como atualizar os projetos/dados
Tudo é centralizado em `src/data/`:
- `config.ts` — WhatsApp, e-mail, links sociais
- `projects.ts` — projetos entregues e em andamento
- `testimonials.ts` — depoimentos (texto/vídeo)
- `metrics.ts` — números de autoridade e gráficos

Procure por `// TROCAR:` no código para encontrar pontos editáveis (imagens, links, métricas).

## Imagens
- `public/clients/` — fotos dos clientes (use 256×256 mínimo, quadrada)
- `public/projects/` — mockups dos projetos (sugerido: 1200×800 ou retrato 800×1200)

## Notas de design
- Tema dark premium intencional (sofisticação + destaque para mockups claros)
- Acento principal: lime/emerald gradient (codifica crescimento/ROI)
- Tipografia mista: Geist Sans + Instrument Serif italic para acentos human-touch
- Animações: Framer Motion com `prefers-reduced-motion` respeitado
