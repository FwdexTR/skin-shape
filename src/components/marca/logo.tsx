import { cn } from "@/lib/utils";

/**
 * Logo da Skin Shape, redesenhado para a web a partir do avatar do Instagram:
 * duas folhas verdes sobre "Skin Shape" em pincel e "Empório Funcional" em
 * caixa baixa.
 *
 * TODO(Skin Shape): pedir o arquivo vetorial original (SVG, AI ou PDF) e
 * trocar este componente por <img src="/images/skin-shape/marca/logo.svg">.
 * O lettering aqui usa a fonte Kaushan Script, a mais próxima do original.
 */
export function FolhasLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 22.5C10 22.5 2.5 15.5 2.5 5.5C12.5 5.5 20 12 20 22.5Z"
        fill="var(--ss-folha)"
      />
      <path
        d="M20 22.5C30 22.5 37.5 15.5 37.5 5.5C27.5 5.5 20 12 20 22.5Z"
        fill="#4f9a2c"
      />
      <path
        d="M19 21.2 7.5 9.8M21 21.2 32.5 9.8"
        stroke="var(--ss-papel)"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** "linha": folhas ao lado (header). "bloco": folhas em cima (rodapé). */
  forma?: "linha" | "bloco";
  claro?: boolean;
};

export function Logo({ className, forma = "linha", claro = false }: LogoProps) {
  const cor = claro ? "text-branco" : "text-grafite";

  if (forma === "bloco") {
    return (
      <span className={cn("inline-flex flex-col items-center", cor, className)}>
        <FolhasLogo className="mb-1 h-6 w-10" />
        <span className="font-assinatura text-[2.6rem] leading-[0.8]">
          Skin
        </span>
        <span className="-mt-1 font-assinatura text-[2.6rem] leading-[0.9]">
          Shape
        </span>
        <span className="mt-1.5 text-[0.62rem] font-semibold tracking-[0.24em] uppercase opacity-80">
          Empório Funcional
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2", cor, className)}>
      <FolhasLogo className="h-[1.1rem] w-[1.85rem] -translate-y-1" />
      <span className="flex flex-col">
        <span className="font-assinatura text-[1.55rem] leading-none sm:text-[1.7rem]">
          Skin Shape
        </span>
        <span className="mt-0.5 text-[0.56rem] font-semibold tracking-[0.26em] uppercase opacity-70">
          Empório Funcional
        </span>
      </span>
    </span>
  );
}
