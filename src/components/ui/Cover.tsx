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
 * por cima, a imagem real via `next/image`. A imagem começa invisível e só é
 * revelada no `onLoad` (quando carrega de fato). Se a capa ainda não existir
 * (ex.: 404), ela simplesmente nunca aparece e sobra o mock — sem flash de
 * imagem quebrada, sem quebra de layout e sem ruído de erro no console.
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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <ProjectMock accent={accent} label="preview" className="absolute inset-0" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={cn(
          "object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
