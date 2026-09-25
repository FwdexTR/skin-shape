import Image from "next/image";
import type { CSSProperties } from "react";
import { FolhasLogo } from "@/components/marca/logo";
import { IMAGENS, type ImagemId } from "@/data/imagens";

/** O que a loja oferece, segundo o perfil no Google e o Instagram. */
const TERMOS = [
  "Sem glúten",
  "Sem lactose",
  "Zero açúcar",
  "Veganos",
  "Suplementos",
  "Café & Bistrô",
  "Saladas",
  "Almoço",
  "Iogurtes",
  "Bolinhos funcionais",
];

function Pilula({ id }: { id: ImagemId }) {
  const img = IMAGENS[id];
  return (
    <span className="relative mx-1 inline-block h-[0.78em] w-[1.5em] translate-y-[0.06em] overflow-hidden rounded-full align-baseline shadow-1 sm:mx-2">
      <Image src={img.src} alt="" fill sizes="7rem" className="object-cover" />
    </span>
  );
}

export function ResumoMarca() {
  return (
    <section aria-label="Resumo da Skin Shape" className="relative">
      {/* Faixa corrida, inspirada no Marquee do Magic UI (só CSS) */}
      <div
        className="faixa relative overflow-hidden border-y border-grafite/10 bg-branco py-5"
        style={{ "--duracao": "48s" } as CSSProperties}
      >
        <div className="faixa-trilho flex w-max">
          {[0, 1].map((copia) => (
            <ul
              key={copia}
              aria-hidden={copia === 1 ? true : undefined}
              className="flex shrink-0 items-center"
            >
              {TERMOS.map((termo) => (
                <li
                  key={termo}
                  className="flex items-center gap-6 pr-6 font-display text-lg font-medium tracking-tight whitespace-nowrap text-grafite sm:text-xl"
                >
                  {termo}
                  <FolhasLogo className="h-3.5" />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-branco to-transparent sm:w-32"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-branco to-transparent sm:w-32"
        />
      </div>

      {/* Frase de marca, com fotos no meio do texto */}
      <div className="container-ss py-[clamp(4.5rem,9vw,8rem)]">
        <p className="revelar mx-auto max-w-5xl text-center font-display text-[clamp(1.75rem,4.2vw,3.4rem)] leading-[1.14] font-medium tracking-[-0.025em] text-balance">
          Um mercado
          <Pilula id="categoria-geladeira" />
          com café
          <Pilula id="hero-cafe" />
          e bistrô
          <Pilula id="categoria-bistro" />
          para quem tem restrição, para quem treina e para quem só quer{" "}
          <span className="destaque">comer melhor.</span>
        </p>
      </div>
    </section>
  );
}
