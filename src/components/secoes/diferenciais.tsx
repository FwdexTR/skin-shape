import {
  BadgeCheck,
  Coffee,
  HeartHandshake,
  Truck,
  WheatOff,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { DIFERENCIAIS, type Diferencial } from "@/data/conteudo";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

const ICONES: Record<Diferencial["icone"], LucideIcon> = {
  variedade: WheatOff,
  qualidade: BadgeCheck,
  atendimento: HeartHandshake,
  entrega: Truck,
  cafe: Coffee,
};

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="titulo-diferenciais"
      className="secao border-t border-grafite/10 bg-branco"
    >
      <div className="container-ss grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="revelar rotulo">Por que Skin Shape</p>
            <h2
              id="titulo-diferenciais"
              className="revelar titulo-lg mt-6 text-balance"
              style={ordem(1)}
            >
              Os motivos de quem <span className="destaque">volta.</span>
            </h2>
            <p className="revelar mt-6 max-w-sm leading-relaxed text-grafite-2" style={ordem(2)}>
              Nada de promessa de vitrine: é o que a loja oferece de fato e o
              que os próprios clientes escrevem nas avaliações do Google.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {DIFERENCIAIS.map((item, i) => {
            const Icone = ICONES[item.icone];
            return (
              <li
                key={item.titulo}
                className="revelar group grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-grafite/10 py-8 first:pt-0 sm:grid-cols-[3rem_auto_1fr] sm:gap-x-8"
                style={ordem(i % 3)}
              >
                <span
                  aria-hidden="true"
                  className="hidden pt-1 font-display text-sm font-semibold text-cinza tabular-nums sm:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="row-span-2 grid size-14 place-items-center rounded-full bg-petroleo-claro text-petroleo transition-[background-color,color,transform] duration-500 ease-saida group-hover:-rotate-6 group-hover:bg-petroleo group-hover:text-branco motion-reduce:group-hover:rotate-0">
                  <Icone className="size-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="self-end font-display text-2xl font-semibold tracking-[-0.02em]">
                  {item.titulo}
                </h3>
                <p className="col-start-2 max-w-md leading-relaxed text-grafite-2 sm:col-start-3">
                  {item.texto}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
