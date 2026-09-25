/* eslint-disable @next/next/no-img-element -- SVG vetorial: next/image não otimiza SVG e só acrescentaria peso */
import { LOGO } from "@/data/imagens";
import { cn } from "@/lib/utils";

/**
 * Logo oficial da Skin Shape.
 *
 * Vetorizado (SVG em três cores) a partir do arquivo de 2048 px publicado na
 * página oficial da loja no Facebook: folhas verdes com a figura, "Skin
 * Shape" em pincel grafite e "Empório Funcional" em arco. A versão "claro"
 * troca só o grafite por off-white, para fundos escuros.
 */
export function Logo({
  className,
  claro = false,
  prioridade = false,
}: {
  className?: string;
  claro?: boolean;
  prioridade?: boolean;
}) {
  return (
    <img
      src={claro ? LOGO.claro : LOGO.padrao}
      alt="Skin Shape — Empório Funcional"
      width={154}
      height={183}
      fetchPriority={prioridade ? "high" : undefined}
      className={cn("block h-14 w-auto", className)}
    />
  );
}

/** Só as folhas do logo, para detalhes (faixa corrida, ícones). */
export function FolhasLogo({ className }: { className?: string }) {
  return (
    <img
      src={LOGO.folhas}
      alt=""
      aria-hidden="true"
      width={40}
      height={21}
      className={cn("inline-block h-3 w-auto", className)}
    />
  );
}
