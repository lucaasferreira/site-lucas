"use client";

import { Instagram, Quote, PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { SectionHeading } from "@/components/ui/SectionLabel";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative scroll-mt-20 py-24 sm:py-32"
      aria-label="Depoimentos de clientes"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos · Quem confia"
            title={
              <>
                Clientes que vivem dos produtos que{" "}
                <em className="font-serif font-normal text-brand-300">construímos juntos</em>.
              </>
            }
            description="Cada feedback abaixo vem de um cliente real cujo negócio mudou após o projeto. Vídeos sob solicitação."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <Card className="flex h-full flex-col p-6">
                <Quote
                  className="h-7 w-7 text-brand-300/40"
                  aria-hidden
                  strokeWidth={1.5}
                />

                <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                  {t.content}
                </blockquote>

                {t.videoUrl ? (
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-brand-200"
                  >
                    <PlayCircle className="h-4 w-4" aria-hidden /> Ver depoimento em vídeo
                  </a>
                ) : null}

                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <Avatar src={t.client.photo} name={t.client.name} size={44} />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-white">
                      {t.client.name}
                    </p>
                    <p className="truncate text-xs text-white/45">{t.client.role}</p>
                  </div>
                  {t.client.instagram ? (
                    <a
                      href={t.client.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${t.client.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white"
                    >
                      <Instagram className="h-4 w-4" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
