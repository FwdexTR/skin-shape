"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { AnimatePresence, LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";
import { AVALIACOES } from "@/data/conteudo";
import { GOOGLE } from "@/lib/site";

export function Avaliacoes() {
  const [indice, setIndice] = useState(0);
  const [direcao, setDirecao] = useState(1);
  const reduzir = useReducedMotion();
  const total = AVALIACOES.length;
  const atual = AVALIACOES[indice];

  const ir = (passo: number) => {
    setDirecao(passo);
    setIndice((i) => (i + passo + total) % total);
  };

  const deslocamento = reduzir ? 0 : 36;

  return (
    <section
      id="avaliacoes"
      aria-labelledby="titulo-avaliacoes"
      className="secao bg-areia"
    >
      <div className="container-ss grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Nota */}
        <div className="lg:col-span-4">
          <p className="rotulo">Quem compra, recomenda</p>
          <h2 id="titulo-avaliacoes" className="sr-only">
            Avaliações da Skin Shape no Google
          </h2>
          <div className="mt-8 flex items-end gap-4">
            <span className="font-display text-[clamp(5rem,11vw,8.5rem)] leading-[0.8] font-semibold tracking-[-0.06em]">
              {GOOGLE.nota}
            </span>
            <span className="mb-1 flex flex-col gap-2">
              <span className="flex" aria-label="5 de 5 estrelas" role="img">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-5 fill-madeira text-madeira" aria-hidden="true" />
                ))}
              </span>
              <span className="text-sm text-grafite-2">
                {GOOGLE.avaliacoes} avaliações no Google
              </span>
            </span>
          </div>
          <a
            href={GOOGLE.perfil}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
          >
            <span className="link-sublinhado">Ver todas no Google</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Carrossel */}
        <div
          className="lg:col-span-8"
          role="region"
          aria-roledescription="carrossel"
          aria-label="Avaliações de clientes"
        >
          <div className="relative min-h-[15rem] sm:min-h-[13rem]" aria-live="polite">
            <LazyMotion features={domAnimation} strict>
              <AnimatePresence mode="wait" initial={false} custom={direcao}>
                <m.figure
                  key={indice}
                  custom={direcao}
                  initial={{ opacity: 0, x: deslocamento * direcao }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -deslocamento * direcao }}
                  transition={{ duration: reduzir ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                  aria-roledescription="avaliação"
                  aria-label={`${indice + 1} de ${total}`}
                >
                  <span
                    aria-hidden="true"
                    className="block font-assinatura text-7xl leading-[0.5] text-petroleo"
                  >
                    “
                  </span>
                  <blockquote className="mt-4 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.2] font-medium tracking-[-0.02em] text-balance">
                    {atual.texto}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 text-sm">
                    <span
                      aria-hidden="true"
                      className="grid size-10 place-items-center rounded-full bg-petroleo text-sm font-semibold text-branco"
                    >
                      {atual.autor ? atual.autor.charAt(0) : "G"}
                    </span>
                    <span>
                      <span className="block font-semibold">
                        {atual.autor ?? "Trecho em destaque"}
                      </span>
                      <span className="text-grafite-2">
                        {atual.autor ? `Avaliação no Google · ${atual.quando}` : "Resumo das avaliações no Google"}
                      </span>
                    </span>
                  </figcaption>
                </m.figure>
              </AnimatePresence>
            </LazyMotion>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-grafite/15 pt-6">
            <p className="font-display text-sm font-semibold tabular-nums" aria-hidden="true">
              {String(indice + 1).padStart(2, "0")}
              <span className="text-cinza"> / {String(total).padStart(2, "0")}</span>
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => ir(-1)}
                aria-label="Avaliação anterior"
                className="grid size-12 place-items-center rounded-full border border-grafite/20 transition-[background-color,color,border-color,transform] duration-300 hover:-translate-x-0.5 hover:border-grafite hover:bg-grafite hover:text-branco motion-reduce:hover:translate-x-0"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => ir(1)}
                aria-label="Próxima avaliação"
                className="grid size-12 place-items-center rounded-full border border-grafite/20 transition-[background-color,color,border-color,transform] duration-300 hover:translate-x-0.5 hover:border-grafite hover:bg-grafite hover:text-branco motion-reduce:hover:translate-x-0"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
