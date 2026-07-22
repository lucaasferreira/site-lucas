"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig, buildWhatsAppLink } from "@/data/config";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-medium tracking-tight text-white"
          aria-label="Voltar ao topo"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-brand-200 to-brand-500 font-mono text-xs font-bold text-ink-950">
            LF
          </span>
          <span className="text-sm sm:text-base">
            {siteConfig.name}
            <span className="ml-2 hidden text-white/40 sm:inline">·</span>
            <span className="ml-2 hidden font-mono text-xs uppercase tracking-widest text-white/40 sm:inline">
              Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Button
            href={buildWhatsAppLink()}
            external
            size="md"
            variant="primary"
            withArrow
          >
            Falar comigo
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/[0.06] bg-ink-950/90 backdrop-blur-xl md:hidden"
          >
            <nav className="container-site flex flex-col gap-1 py-4" aria-label="Navegação mobile">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center rounded-xl px-3 text-base text-white/80 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={buildWhatsAppLink()}
                external
                size="lg"
                variant="primary"
                withArrow
                className="mt-2 w-full"
              >
                Falar comigo
              </Button>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
