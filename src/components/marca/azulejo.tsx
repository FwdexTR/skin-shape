import { cn } from "@/lib/utils";

/**
 * O azulejo da fachada da Skin Shape, em SVG.
 *
 * A fachada da loja é revestida de azulejos com quartos de círculo, meias-luas
 * e barras em azul-petróleo sobre cinza claro. Este padrão reproduz a mesma
 * gramática geométrica e é o grafismo próprio do site: aparece pouco (faixas,
 * CTA final, rodapé) para continuar sendo assinatura e não papel de parede.
 *
 * A cor das formas é `currentColor`; o fundo fica por conta de quem usa.
 */
export function Azulejo({
  id,
  className,
  escala = 1,
}: {
  /** Identificador único do <pattern> na página. */
  id: string;
  className?: string;
  escala?: number;
}) {
  const t = 96 * escala;
  return (
    <svg
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
      focusable="false"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={id}
          width={t}
          height={t}
          patternUnits="userSpaceOnUse"
          viewBox="0 0 96 96"
        >
          {/* quarto de círculo no canto superior esquerdo */}
          <path d="M0 0H44A44 44 0 0 1 0 44Z" fill="currentColor" />
          {/* barra na base da segunda peça */}
          <rect x="52" y="30" width="44" height="14" fill="currentColor" />
          <rect x="52" y="4" width="14" height="22" fill="currentColor" opacity="0.55" />
          {/* meia-lua na terceira */}
          <path d="M48 52A22 22 0 0 0 48 96Z" fill="currentColor" />
          <rect x="0" y="52" width="14" height="44" fill="currentColor" opacity="0.55" />
          {/* quarto de círculo no canto inferior direito */}
          <path d="M96 96H52A44 44 0 0 1 96 52Z" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
