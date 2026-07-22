import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "brand" | "warm" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "bg-white/[0.06] text-white/80 border border-white/10",
  brand: "bg-brand-300/10 text-brand-200 border border-brand-300/25",
  warm: "bg-warm-400/10 text-warm-400 border border-warm-400/25",
  outline: "bg-transparent text-white/70 border border-white/15",
};

export function Badge({
  children,
  variant = "default",
  className,
  dot,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-tight",
        variants[variant],
        className
      )}
    >
      {dot ? (
        <span
          aria-hidden
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "brand" ? "bg-brand-300" : variant === "warm" ? "bg-warm-400" : "bg-white/60"
          )}
        />
      ) : null}
      {children}
    </span>
  );
}
