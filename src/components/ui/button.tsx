import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Botão da Skin Shape. Base do shadcn/ui (Slot + cva), com a pele da marca:
 * cantos de pílula, peso de texto firme e um deslocamento curto no hover.
 * Um ícone com a classe `seta` desliza alguns pixels quando o botão é focado.
 */
const botao = cva(
  [
    "group/botao relative inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-semibold",
    "transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-saida",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] motion-reduce:hover:translate-y-0",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-[1.1em] [&_svg]:shrink-0",
    "[&_.seta]:transition-transform [&_.seta]:duration-300 hover:[&_.seta]:translate-x-0.5 hover:[&_.seta.diagonal]:-translate-y-0.5",
  ],
  {
    variants: {
      variante: {
        primario:
          "bg-petroleo text-branco shadow-1 hover:bg-petroleo-escuro hover:shadow-2",
        escuro: "bg-grafite text-branco shadow-1 hover:bg-black hover:shadow-2",
        contorno:
          "border border-grafite/20 bg-transparent text-grafite hover:border-grafite hover:bg-grafite hover:text-branco",
        claro: "bg-branco text-grafite shadow-1 hover:bg-papel hover:shadow-2",
        "contorno-claro":
          "border border-white/30 bg-transparent text-branco hover:border-white hover:bg-white hover:text-grafite",
      },
      tamanho: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variante: "primario", tamanho: "md" },
  },
);

export type BotaoProps = ComponentProps<"button"> &
  VariantProps<typeof botao> & { asChild?: boolean };

export function Botao({
  className,
  variante,
  tamanho,
  asChild = false,
  ...props
}: BotaoProps) {
  const Componente = asChild ? Slot : "button";
  return (
    <Componente
      data-slot="botao"
      className={cn(botao({ variante, tamanho }), className)}
      {...props}
    />
  );
}
