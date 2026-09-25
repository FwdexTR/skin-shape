"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Vídeo de ambiente: sem som, em loop, com pôster.
 *
 * - Só toca quando está na tela (economiza bateria e dados no celular).
 * - No celular baixa a versão de 480 px; com "economia de dados" ligada ou
 *   conexão 2G, fica no pôster até a pessoa tocar no play.
 * - Com "reduzir movimento" ligado no sistema, fica parado no pôster; o
 *   botão deixa a pessoa tocar se quiser.
 * - O botão de pausa atende ao critério 2.2.2 da WCAG (conteúdo que se move
 *   sozinho por mais de 5 segundos precisa poder ser pausado).
 */
/** Economia de dados do Chrome/Android (navigator.connection não é padrão). */
function conexaoEconomica() {
  const c = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  return Boolean(c?.saveData || (c?.effectiveType && /(^|-)2g$/.test(c.effectiveType)));
}

export function VideoAmbiente({
  src,
  srcMovel,
  poster,
  rotulo,
  className,
  prioridade = false,
}: {
  src: string;
  /** Versão leve para telas até 767 px. */
  srcMovel?: string;
  poster: string;
  /** Descrição do que o vídeo mostra (vai no aria-label). */
  rotulo: string;
  className?: string;
  prioridade?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [pausadoPelaPessoa, setPausadoPelaPessoa] = useState<boolean | null>(null);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Sem escolha explícita, "reduzir movimento" e "economia de dados" valem como pausa.
    const pausado = pausadoPelaPessoa ?? (reduzir || conexaoEconomica());

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting && !pausado) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 },
    );
    observador.observe(video);
    if (pausado) video.pause();
    return () => observador.disconnect();
  }, [pausadoPelaPessoa]);

  return (
    <div className={cn("relative size-full", className)}>
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload={prioridade ? "auto" : "none"}
        aria-label={rotulo}
        onPlay={() => setTocando(true)}
        onPause={() => setTocando(false)}
        className="size-full object-cover"
      >
        {srcMovel ? (
          <source src={srcMovel} type="video/mp4" media="(max-width: 767px)" />
        ) : null}
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={() => setPausadoPelaPessoa(tocando)}
        aria-label={tocando ? "Pausar vídeo" : "Tocar vídeo"}
        className="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full bg-grafite/55 text-white backdrop-blur-md transition-colors hover:bg-grafite/80"
      >
        {tocando ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Play className="size-4 translate-x-px" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
