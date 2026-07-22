import {
  Smartphone,
  Globe,
  GraduationCap,
  Dumbbell,
  Cog,
  LayoutDashboard,
  Plug,
  Wand2,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const services = [
  {
    icon: Smartphone,
    title: "Aplicativos mobile",
    description:
      "Apps iOS e Android com paywall, push, offline e experiência premium. React Native + Expo.",
  },
  {
    icon: Globe,
    title: "Sistemas web",
    description:
      "Plataformas internas, áreas de membros e softwares sob medida — Next.js, TypeScript, Postgres.",
  },
  {
    icon: GraduationCap,
    title: "Plataformas para infoprodutores",
    description:
      "Áreas de membros, mentorias 1:1, drip content, billing recorrente e portal de aluno.",
  },
  {
    icon: Dumbbell,
    title: "Apps para academias e personais",
    description:
      "Prescrição de treino, anamnese digital, gamificação, paywall e portal mobile-first.",
  },
  {
    icon: Cog,
    title: "CRMs e automações",
    description:
      "Triagem por IA, distribuição de leads, follow-up automático e relatórios em tempo real.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & painéis",
    description:
      "BI sob medida com KPIs em tempo real, alertas e visão consolidada multi-plataforma.",
  },
  {
    icon: Plug,
    title: "Integrações",
    description:
      "Stripe, PIX, WhatsApp API, e-mail transacional, IA, Hotmart, Kiwify, ads e CRMs.",
  },
  {
    icon: Wand2,
    title: "Produtos digitais sob medida",
    description:
      "Quando a ideia não cabe em template: discovery, prototipação e produto do zero ao escalado.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="O que eu construo"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="O que eu construo"
            title={
              <>
                Da ideia ao produto digital{" "}
                <em className="font-serif font-normal text-brand-300">que escala</em>.
              </>
            }
            description="Atendo poucos clientes por vez para garantir profundidade. Cada projeto tem um plano de impacto e um número-alvo de resultado."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <Card className="group h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-white/80 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-brand-300/10 group-hover:text-brand-300 group-hover:ring-brand-300/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {s.description}
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
