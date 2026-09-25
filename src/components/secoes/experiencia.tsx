import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Azulejo } from "@/components/marca/azulejo";
import { VideoAmbiente } from "@/components/marca/video-ambiente";
import { MOMENTOS } from "@/data/conteudo";
import { IMAGENS, VIDEOS } from "@/data/imagens";
import { cn } from "@/lib/utils";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

export function Experiencia() {
  const empadinhas = VIDEOS.empadinhas;
  const posterEmpadinhas = IMAGENS[empadinhas.poster];

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

        {/* Feito aqui: vídeo real da produção das empadinhas */}
        <div className="mt-14 grid items-center gap-10 sm:mt-20 md:grid-cols-12 md:gap-12">
          <figure className="revelar relative md:col-span-5 lg:col-span-4">
            <div className="relative mx-auto aspect-[9/14] max-w-sm overflow-hidden rounded-[1.75rem] bg-petroleo shadow-2 md:max-w-none">
              <VideoAmbiente
                src={empadinhas.src}
                srcMovel={empadinhas.srcMovel}
                poster={posterEmpadinhas.src}
                rotulo={`Vídeo: ${posterEmpadinhas.alt}`}
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/70 md:text-left">
              Dia de produção de empadinhas na cozinha da loja.
            </figcaption>
          </figure>
          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <p className="revelar rotulo !text-folha-clara">Feito aqui</p>
            <p
              className="revelar mt-6 font-display text-[clamp(1.8rem,4vw,3.2rem)] leading-[1.08] font-semibold tracking-[-0.03em] text-balance"
              style={ordem(1)}
            >
              Toda a nossa cozinha é{" "}
              <span className="destaque">sem glúten e sem lactose.</span>
            </p>
            <p
              className="revelar mt-6 max-w-xl text-lg leading-relaxed text-white/75"
              style={ordem(2)}
            >
              Massa e recheio das empadinhas, a pizza, a coxinha, as massas e os
              pratos executivos: cozimento lento, ingredientes bem escolhidos e
              nenhum glúten ou lactose no caminho.
            </p>
            <ul className="revelar mt-8 flex flex-wrap gap-2" style={ordem(3)} aria-label="Da cozinha da loja">
              {["Empadinhas", "Pizza", "Coxinha", "Massas", "Pratos executivos"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

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
                <div className="zoom-suave relative mt-5 aspect-square overflow-hidden rounded-[1.25rem]">
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
            className="group inline-flex min-h-11 items-center gap-2 self-start font-semibold text-folha-clara"
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
