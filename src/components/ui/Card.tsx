import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-card",
        "transition-all duration-500 ease-out",
        hover && "hover:border-white/15 hover:bg-white/[0.04]",
        className
      )}
    >
      {/* subtle top highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      {children}
    </Tag>
  );
}
