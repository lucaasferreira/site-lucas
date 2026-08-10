export const siteConfig = {
  name: "Lucas Ferreira",
  role: "Desenvolvedor Full-Stack",
  shortBio:
    "Sou desenvolvedor full-stack. Há seis anos pego ideias e as levo até o ar — do banco de dados à interface, no navegador e no celular.",
  yearsExperience: 6,
  location: "Juiz de Fora / MG",
  contact: {
    email: "lucasaugusto.fgomes@gmail.com",
    whatsapp: "5521990494384", // formato internacional, sem + ou espaços
    github: "https://github.com/lucaasferreira",
    linkedin: "https://www.linkedin.com/in/lucas-ferreira-7447b9167/",
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
