import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Azulejo } from "@/components/marca/azulejo";
import { IconeWhatsApp } from "@/components/marca/icones-redes";
import { Botao } from "@/components/ui/button";
import { IMAGENS } from "@/data/imagens";
import { GOOGLE, linkWhatsApp } from "@/lib/site";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  const principal = IMAGENS["hero-principal"];
  const cafe = IMAGENS["hero-cafe"];

  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <div className="container-ss grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
        {/* Texto */}
        <div className="lg:col-span-6 xl:col-span-6">
          <h1 id="titulo-inicio">
            <span className="entrar rotulo" style={ordem(0)}>
              Skin Shape · Empório Funcional em Campos dos Goytacazes
            </span>
            <span
              className="entrar titulo-xl mt-7 block text-balance"
              style={ordem(1)}
            >
              Comer bem ficou mais{" "}
              <span className="destaque whitespace-nowrap">perto.</span>
            </span>
          </h1>

          <p
            className="entrar texto-lead mt-7 max-w-[34rem] text-pretty"
            style={ordem(2)}
          >
            Mercado funcional, café e bistrô no Centro de Campos. Do sem glúten
            ao zero açúcar, dos suplementos ao almoço:{" "}
            <span className="text-grafite">
              as melhores e mais saudáveis marcas, pertinho de você.
            </span>
          </p>

          <div
            className="entrar mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={ordem(3)}
          >
            <Botao asChild tamanho="lg">
              <a href="#produtos">
                Conheça nossos produtos
                <ArrowDown className="seta" aria-hidden="true" />
              </a>
            </Botao>
            <Botao asChild variante="contorno" tamanho="lg">
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                <IconeWhatsApp className="text-[#1f9d55] transition-colors group-hover/botao:text-current" />
                Fale pelo WhatsApp
              </a>
            </Botao>
          </div>

          <dl
            className="entrar mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-grafite/10 pt-6 text-sm"
            style={ordem(4)}
          >
            <div className="flex items-center gap-2.5">
              <dt className="sr-only">Nota no Google</dt>
              <dd className="flex items-center gap-2">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="size-3.5 fill-madeira text-madeira" />
                  ))}
                </span>
                <span>
                  <strong className="font-semibold">{GOOGLE.nota}</strong>{" "}
                  <span className="text-grafite-2">
                    no Google · {GOOGLE.avaliacoes} avaliações
                  </span>
                </span>
              </dd>
            </div>
            <div className="flex items-center gap-2.5">
              <dt className="sr-only">Horário</dt>
              <dd className="text-grafite-2">
                <strong className="font-semibold text-grafite">Seg a sex</strong>{" "}
                8h–20h ·{" "}
                <strong className="font-semibold text-grafite">Sáb</strong> 8h–13h
              </dd>
            </div>
          </dl>
        </div>

        {/* Composição de imagens */}
        <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
          {/* Peça de azulejo atrás da foto, como na fachada */}
          <div
            aria-hidden="true"
            className="entrar absolute -top-8 -right-4 size-40 overflow-hidden rounded-[1.25rem] bg-petroleo-claro text-petroleo sm:-right-8 sm:size-48 lg:-top-10"
            style={ordem(3)}
          >
            <Azulejo id="azulejo-hero" escala={0.5} />
          </div>

          <div className="entrar-imagem relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tl-[7rem] bg-areia shadow-2 sm:rounded-tl-[10rem] lg:aspect-[4/5.4]">
            <div className="hero-deriva absolute inset-0">
              <Image
                src={principal.src}
                alt={principal.alt}
                fill
                preload
                fetchPriority="high"
                sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 48vw, 100vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
          </div>

          {/* Detalhe do café */}
          <figure
            className="entrar absolute -bottom-10 -left-2 w-[42%] max-w-[13rem] sm:-left-8 lg:-left-6 lg:w-[36%] xl:-left-16 xl:w-[42%]"
            style={ordem(5)}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] border-[6px] border-papel shadow-2">
              <Image
                src={cafe.src}
                alt={cafe.alt}
                fill
                sizes="13rem"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 pl-1 text-xs leading-snug text-grafite-2">
              <span className="font-semibold text-grafite">Café &amp; Bistrô</span>
              <br />a partir das 8h
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
