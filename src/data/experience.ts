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
