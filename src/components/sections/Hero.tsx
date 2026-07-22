import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/config";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* background atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-soft [background-size:48px_48px] opacity-[0.35]" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />
      </div>

      <div className="container-site">
        <div className="flex flex-col gap-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-300">
            {siteConfig.role}
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            {siteConfig.shortBio}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#projetos" size="lg" variant="primary" withArrow>
              Ver projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
