import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Azulejo } from "@/components/marca/azulejo";
import { MOMENTOS } from "@/data/conteudo";
import { IMAGENS } from "@/data/imagens";
import { cn } from "@/lib/utils";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

export function Experiencia() {
  const mesa = IMAGENS["experiencia-mesa"];

  return (
    <section
      id="experiencia"
      aria-labelledby="titulo-experiencia"
      className="no-escuro secao relative overflow-hidden bg-petroleo-escuro text-branco"
    >
      {/* Azulejo quase invisível no canto, como textura da fachada */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-[26rem] text-white opacity-[0.045] [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)]"
      >
        <Azulejo id="azulejo-experiencia" escala={0.8} />
      </div>

      <div className="container-ss relative">
        <div className="max-w-4xl">
          <p className="revelar rotulo !text-white/70">Experiência</p>
          <h2
            id="titulo-experiencia"
            className="revelar titulo-lg mt-6 text-balance"
            style={ordem(1)}
          >
            Escolhas melhores começam nas{" "}
            <span className="destaque">pequenas decisões.</span>
          </h2>
          <p
            className="revelar mt-7 max-w-2xl text-lg leading-relaxed text-white/75"
            style={ordem(2)}
          >
            O café da manhã, o almoço no meio do expediente, a passada rápida no
            fim da tarde. A Skin Shape foi pensada para caber nesses momentos,
            e não para ser mais uma tarefa na agenda.
          </p>
        </div>

        {/* Foto larga com parallax discreto */}
        <figure className="relative mt-14 sm:mt-20">
          <div className="revelar-imagem relative aspect-[4/3] overflow-hidden rounded-[1.75rem] sm:aspect-[21/9]">
            <div className="parallax absolute inset-0">
              <Image
                src={mesa.src}
                alt={mesa.alt}
                fill
                sizes="(min-width: 1320px) 1240px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="absolute bottom-4 left-4 flex flex-wrap gap-2 sm:bottom-6 sm:left-6">
            {["Mercado", "Café", "Bistrô"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-petroleo-escuro/70 px-4 py-2 text-sm font-medium backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </figcaption>
        </figure>

        {/* Um dia na loja */}
        <ol className="mt-20 grid gap-14 sm:mt-28 md:grid-cols-3 md:gap-8 lg:gap-12">
          {MOMENTOS.map((m, i) => {
            const img = IMAGENS[m.imagem];
            return (
              <li
                key={m.hora}
                className={cn("revelar", i === 1 && "md:mt-24", i === 2 && "md:mt-12")}
                style={ordem(i)}
              >
                <p
                  aria-hidden="true"
                  className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-none font-semibold tracking-[-0.05em] text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.45)]"
                >
                  {m.hora}
                </p>
                <div className="zoom-suave relative mt-5 aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">
                  <span className="sr-only">{m.hora} — </span>
                  {m.titulo}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-white/75">{m.texto}</p>
              </li>
            );
          })}
        </ol>

        <div className="revelar mt-20 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/75">
            <strong className="font-semibold text-branco">Segunda a sexta</strong>, das 8h às 20h ·{" "}
            <strong className="font-semibold text-branco">Sábado</strong>, das 8h às 13h
          </p>
          <a
            href="#localizacao"
            className="group inline-flex items-center gap-2 font-semibold text-folha-clara"
          >
            <span className="link-sublinhado">Ver como chegar</span>
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
