/**
 * Depoimentos.
 * TROCAR: substituir por feedbacks reais (texto ou vídeo).
 */

export type Testimonial = {
  id: string;
  client: {
    name: string;
    role: string;
    photo: string;
    instagram?: string;
  };
  content: string;
  // vídeo: passar URL embed (YouTube, Vimeo, Mux). Deixe null para texto puro.
  videoUrl?: string | null;
  projectSlug?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "jessica",
    client: {
      name: "Jessica Almeida",
      role: "Personal Trainer · App de Treinos",
      photo: "/clients/jessica.jpg", // TROCAR
      instagram: "https://instagram.com/jessicaalmeida", // TROCAR
    },
    content:
      "O app mudou completamente a forma como entrego treinos. Minhas alunas voltaram a engajar, o suporte sumiu e o anual disparou.",
    videoUrl: null,
    projectSlug: "app-treinos-ritmados",
  },
  {
    id: "rafael",
    client: {
      name: "Rafael Santos",
      role: "Mentor · Plataforma de Mentoria",
      photo: "/clients/rafael.jpg", // TROCAR
      instagram: "https://instagram.com/rafaelsantos", // TROCAR
    },
    content:
      "Recuperei 16 horas da minha semana. O Lucas entregou um produto que parece de empresa grande, e isso mudou como eu vendo a mentoria.",
    videoUrl: null,
    projectSlug: "plataforma-infoproduto-mentoria",
  },
  {
    id: "marina",
    client: {
      name: "Marina Costa",
      role: "Diretora Comercial · Educação Digital",
      photo: "/clients/marina.jpg", // TROCAR
    },
    content:
      "Em 6 semanas dobramos a conversão sem aumentar o time. Esse CRM virou o coração do nosso comercial.",
    videoUrl: null,
    projectSlug: "crm-leads-qualificacao",
  },
  {
    id: "camila",
    client: {
      name: "Camila Reis",
      role: "Infoprodutora · Marketing Digital",
      photo: "/clients/camila.jpg", // TROCAR
      instagram: "https://instagram.com/camilareis", // TROCAR
    },
    content:
      "Esse dashboard pagou ele inteiro no primeiro lançamento. Hoje eu não consigo lançar sem ele.",
    videoUrl: null,
    projectSlug: "dashboard-infoprodutor",
  },
  {
    id: "bruno",
    client: {
      name: "Bruno Vasques",
      role: "Sócio · Academia Boutique",
      photo: "/clients/bruno.jpg", // TROCAR
      instagram: "https://instagram.com/brunovasques", // TROCAR
    },
    content:
      "Saí da planilha pra um sistema de verdade. A academia virou outra coisa em 60 dias e a inadimplência sumiu.",
    videoUrl: null,
    projectSlug: "sistema-academia-gestao",
  },
];
