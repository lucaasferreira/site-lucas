"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/config";

/**
 * Botão flutuante de WhatsApp.
 * Aparece após o usuário rolar 240px para evitar competir com o hero.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com Lucas no WhatsApp"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-300 text-ink-950 shadow-glow-md hover:bg-brand-200 sm:bottom-6 sm:right-6"
        >
          <MessageCircle className="h-6 w-6" aria-hidden />
          <span
            aria-hidden
            className="absolute -inset-2 -z-10 rounded-full bg-brand-300/40 blur-xl"
          />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
