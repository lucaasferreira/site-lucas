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
