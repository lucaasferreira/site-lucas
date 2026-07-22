import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CVDocument } from "@/components/CVDocument";
import { PrintButton } from "./PrintButton";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Currículo — ${siteConfig.name}`,
  description: `Currículo de ${siteConfig.name} — ${siteConfig.role}.`,
};

export default function CVPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 print:pt-0 print:pb-0">
      {/* Barra de ações — escondida na impressão */}
      <div className="container-site no-print mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Voltar ao site
        </Link>
        <PrintButton />
      </div>

      {/* Folha do currículo */}
      <div className="container-site print:mx-0 print:max-w-none print:px-0">
        <CVDocument />
      </div>
    </main>
  );
}
