"use client";

import { useEffect, useState } from "react";
import { IconeWhatsApp } from "@/components/marca/icones-redes";
import { linkWhatsApp } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Botão fixo do WhatsApp. Aparece depois que a pessoa passa do hero (lá já
 * existem dois botões de contato) e some quando chega o CTA final e o
 * rodapé, onde o WhatsApp já está à vista. Área de toque de 60 px no celular.
 */
export function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contato = document.getElementById("contato");
    // Medição direta no scroll (barata: dois retângulos). IntersectionObserver
    // fica suspenso em abas em segundo plano e deixava o botão preso.
    const aoRolar = () => {
      const passouHero = hero ? hero.getBoundingClientRect().bottom < 80 : true;
      const chegouContato = contato
        ? contato.getBoundingClientRect().top < window.innerHeight * 0.85
        : false;
      setVisivel(passouHero && !chegouContato);
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Skin Shape no WhatsApp"
      tabIndex={visivel ? undefined : -1}
      aria-hidden={visivel ? undefined : true}
      className={cn(
        "group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex items-center gap-3 rounded-full bg-[#1f7a4d] p-[1.1rem] text-white shadow-2",
        "transition-[opacity,transform,background-color] duration-500 ease-saida hover:bg-[#186540]",
        "sm:right-6 sm:bottom-6 sm:py-4 sm:pr-6 sm:pl-5",
        visivel
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <IconeWhatsApp className="size-6 transition-transform duration-500 group-hover:-rotate-12 motion-reduce:group-hover:rotate-0" />
      <span className="hidden text-sm font-semibold sm:inline">Fale com a gente</span>
    </a>
  );
}
