/**
 * Configuração central do site.
 * TROCAR: substitua valores abaixo pelos dados reais.
 */
export const siteConfig = {
  name: "Lucas Ferreira",
  role: "Desenvolvedor de Produtos Digitais",
  shortBio:
    "Crio aplicativos, sistemas e plataformas que transformam negócios em produtos digitais escaláveis.",
  yearsExperience: 6,
  // TROCAR: valor em R$ gerado para clientes (mantenha o formato curto)
  revenueGenerated: "+R$ 400 mil",
  location: "Brasil",

  // Contato — TROCAR pelos seus
  contact: {
    email: "contato@lucasferreira.dev",
    whatsapp: "5511999999999", // formato internacional, sem + ou espaços
    whatsappMessage: "Olá Lucas! Vi seu portfólio e quero conversar sobre um projeto.",
    instagram: "https://instagram.com/lucasferreira", // TROCAR
    linkedin: "https://linkedin.com/in/lucasferreira", // TROCAR
    github: "https://github.com/lucasferreira", // TROCAR
  },

  nav: [
    { label: "Projetos", href: "#projetos" },
    { label: "Cases", href: "#cases" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export function buildWhatsAppLink(message?: string) {
  const m = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${m}`;
}
