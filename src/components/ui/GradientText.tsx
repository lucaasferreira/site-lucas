import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
  variant = "brand",
}: {
  children: ReactNode;
  className?: string;
  variant?: "brand" | "warm" | "mono";
}) {
  const gradient =
    variant === "brand"
      ? "from-brand-200 via-brand-300 to-brand-500"
      : variant === "warm"
      ? "from-warm-400 via-warm-500 to-amber-600"
      : "from-white via-white/90 to-white/60";
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-br",
        gradient,
        className
      )}
    >
      {children}
    </span>
  );
}
