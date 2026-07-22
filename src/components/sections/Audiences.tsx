import {
  GraduationCap,
  Dumbbell,
  Activity,
  Building2,
  Store,
  Rocket,
  UserSquare2,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const audiences = [
  {
    icon: GraduationCap,
    title: "Infoprodutores",
    description: "Plataformas, áreas de membros, mentorias 1:1 e billing recorrente que escalam sem suporte virar gargalo.",
  },
  {
    icon: Dumbbell,
    title: "Academias",
    description: "ERP de gestão, prescrição de treino, anamnese digital, financeiro PIX e portal mobile do aluno.",
  },
  {
    icon: Activity,
    title: "Personal Trainers",
    description: "App próprio com biblioteca de treinos, chat com aluna, paywall e curadoria de conteúdo.",
  },
  {
    icon: Building2,
    title: "Empresas de médio porte",
    description: "Sistemas internos, dashboards consolidados, automações operacionais e integração entre ferramentas.",
  },
  {
    icon: Store,
    title: "Negócios locais",
    description: "Portais de cliente, agendamento, fidelidade, e-commerce simples e integração com PIX.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "MVPs validáveis em semanas, com arquitetura pronta para escalar quando o produto provar tração.",
  },
  {
    icon: UserSquare2,
    title: "Experts que querem app próprio",
    description: "App branded com paywall, conteúdos exclusivos, chat e ranking — para sair do Instagram e ter audiência sua.",
  },
  {
    icon: Workflow,
    title: "Empresas que querem automatizar",
    description: "Triagem por IA, follow-up automático, dashboards de operação e ganho real de horas por semana.",
  },
];

export function Audiences() {
  return (
    <section
      id="publico"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Para quem eu desenvolvo"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Para quem eu desenvolvo"
            title={
              <>
                Eu não atendo todo mundo — eu atendo{" "}
                <em className="font-serif font-normal text-brand-300">quem precisa de produto</em>{" "}
                pra crescer.
              </>
            }
            description="Cada perfil abaixo tem playbook próprio: o que medir, o que construir primeiro, qual o erro mais comum a evitar."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <StaggerItem key={a.title}>
                <Card className="group h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-white/80 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-300/10 group-hover:text-brand-300 group-hover:ring-brand-300/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-base font-medium tracking-tight text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {a.description}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
