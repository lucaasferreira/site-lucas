/**
 * Fallback visual quando ainda não houver imagem real do projeto.
 * Renderiza um mockup gradient + glow elegante usando o `accent` do projeto.
 * Quando você adicionar imagens em /public/projects/, o ProjectCard usa Image normal.
 */
import { cn } from "@/lib/utils";

const accentMap = {
  lime: "from-brand-300 via-brand-500/40 to-transparent",
  violet: "from-violet-400 via-violet-600/40 to-transparent",
  cyan: "from-cyan-300 via-cyan-500/40 to-transparent",
  amber: "from-warm-400 via-warm-500/40 to-transparent",
  rose: "from-rose-300 via-rose-500/40 to-transparent",
} as const;

const ringMap = {
  lime: "ring-brand-300/30",
  violet: "ring-violet-400/30",
  cyan: "ring-cyan-300/30",
  amber: "ring-warm-400/30",
  rose: "ring-rose-300/30",
} as const;

export type AccentKey = keyof typeof accentMap;

export function ProjectMock({
  accent = "lime",
  label,
  className,
}: {
  accent?: AccentKey;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-ink-900",
        className
      )}
    >
      {/* Backdrop gradient by accent */}
      <div
        aria-hidden
        className={cn(
          "absolute -inset-12 opacity-50 blur-3xl bg-gradient-to-br",
          accentMap[accent]
        )}
      />
      {/* Mock UI window */}
      <div className="relative flex h-full flex-col items-center justify-center p-6 sm:p-10">
        <div
          className={cn(
            "w-full max-w-[440px] rounded-2xl border border-white/10 bg-ink-950/80 p-3 sm:p-4 shadow-2xl backdrop-blur",
            "ring-1",
            ringMap[accent]
          )}
        >
          {/* fake titlebar */}
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-auto font-mono text-[10px] text-white/40">
              {label}
            </span>
          </div>
          {/* fake content */}
          <div className="space-y-2">
            <div className="h-2.5 w-3/5 rounded-full bg-white/10" />
            <div className="h-2.5 w-2/5 rounded-full bg-white/8" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-white/[0.04]" />
              <div className="h-12 rounded-lg bg-white/[0.04]" />
              <div className="h-12 rounded-lg bg-white/[0.04]" />
            </div>
            <div className="mt-3 h-20 rounded-lg bg-gradient-to-tr from-white/[0.06] to-white/[0.02]" />
          </div>
        </div>
      </div>
    </div>
  );
}
