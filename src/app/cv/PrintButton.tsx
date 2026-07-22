"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PrintButton() {
  return (
    <Button
      variant="primary"
      size="md"
      onClick={() => window.print()}
      aria-label="Salvar currículo como PDF"
    >
      <Printer className="h-4 w-4" aria-hidden />
      Baixar PDF
    </Button>
  );
}
