"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectMock } from "@/components/ui/ProjectMock";
import type { Accent } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Capa de projeto com fallback gracioso.
 *
 * Renderiza o `ProjectMock` (gradiente colorido por `accent`) como fundo e,
 * por cima, a imagem real via `next/image`. Se a imagem ainda não existir
 * (ex.: capa não capturada), o `onError` esconde a imagem e sobra só o mock —
 * sem quebra de layout nem ícone de imagem quebrada.
 *
 * Compartilhado entre `ProjectCard` (grid) e `ProjectDetail` (página do projeto).
 */
export function Cover({
  src,
  accent,
  alt,
  className,
}: {
  src: string;
  accent: Accent;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <ProjectMock accent={accent} label="preview" className="absolute inset-0" />
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}
