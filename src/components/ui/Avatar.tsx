"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Avatar com fallback elegante: tenta carregar a imagem;
 * se a imagem ainda não existe (404), renderiza um círculo gradiente
 * com as iniciais do nome.
 */

const accentByCharCode = [
  "from-brand-300 to-brand-500",
  "from-violet-300 to-violet-500",
  "from-cyan-300 to-cyan-500",
  "from-warm-400 to-warm-500",
  "from-rose-300 to-rose-500",
];

function pickAccent(name: string) {
  const sum = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return accentByCharCode[sum % accentByCharCode.length];
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");
}

export function Avatar({
  src,
  name,
  size = 44,
  className,
}: {
  src: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const [err, setErr] = useState(false);
  return (
    <span
      className={cn(
        "relative inline-block overflow-hidden rounded-full border border-white/10 bg-white/[0.04]",
        className
      )}
      style={{ width: size, height: size }}
    >
      {!err ? (
        <Image
          src={src}
          alt={`Foto de ${name}`}
          fill
          sizes={`${size}px`}
          className="object-cover"
          onError={() => setErr(true)}
        />
      ) : (
        <span
          aria-hidden
          className={cn(
            "flex h-full w-full items-center justify-center bg-gradient-to-br font-mono text-xs font-bold text-ink-950",
            pickAccent(name)
          )}
        >
          {initials(name) || "·"}
        </span>
      )}
    </span>
  );
}
