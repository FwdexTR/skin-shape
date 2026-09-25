"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { IconeInstagram, IconeWhatsApp } from "@/components/marca/icones-redes";
import { Logo } from "@/components/marca/logo";
import { Botao } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CONTATO,
  ENDERECO,
  NAVEGACAO,
  REDES,
  linkWhatsApp,
} from "@/lib/site";
import { cn } from "@/lib/utils";

/** Seções que o header acompanha para marcar o item ativo do menu. */
const IDS = NAVEGACAO.map((item) => item.href.slice(1));

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [ativo, setAtivo] = useState<string>("inicio");
  const [escuro, setEscuro] = useState(false);

  useEffect(() => {
    // Seções escuras (experiência, rodapé): o header troca de pele sobre elas.
    const escuras = Array.from(
      document.querySelectorAll<HTMLElement>("main .no-escuro, body > footer"),
    );
    const aoRolar = () => {
      setRolou(window.scrollY > 24);
      const linha = 40;
      setEscuro(
        escuras.some((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= linha && r.bottom >= linha;
        }),
      );
    };
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const secoes = IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) setAtivo(entrada.target.id);
        }
      },
      // Uma faixa fina no terço superior da tela decide a seção "atual".
      { rootMargin: "-30% 0px -65% 0px" },
    );
    secoes.forEach((secao) => observador.observe(secao));
    return () => observador.disconnect();
  }, []);

  return (
    <header
      data-rolou={rolou}
      data-escuro={escuro}
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter,color] duration-500 ease-saida",
        !rolou && "bg-transparent",
        rolou &&
          !escuro &&
          "bg-papel/80 shadow-[0_1px_0_rgb(24_26_25/0.08)] backdrop-blur-xl backdrop-saturate-150",
        rolou &&
          escuro &&
          "no-escuro bg-petroleo-escuro/75 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <div
        className={cn(
          "container-ss flex items-center justify-between gap-6 transition-[height] duration-500 ease-saida",
          rolou ? "h-16" : "h-20 lg:h-24",
        )}
      >
        <a
          href="#inicio"
          aria-label="Skin Shape, Empório Funcional — voltar ao início"
          className="shrink-0 rounded-md"
        >
          <Logo
            prioridade
            claro={rolou && escuro}
            className={cn(
              "transition-[height] duration-500 ease-saida",
              rolou ? "h-12" : "h-14 lg:h-[4.25rem]",
            )}
          />
        </a>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAVEGACAO.map((item) => {
              const atual = ativo === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={atual ? "true" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors duration-300",
                      rolou && escuro
                        ? atual
                          ? "text-branco"
                          : "text-white/70 hover:text-branco"
                        : atual
                          ? "text-grafite"
                          : "text-grafite-2 hover:text-grafite",
                    )}
                  >
                    {item.rotulo}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 bottom-1 h-px origin-left transition-transform duration-500 ease-saida",
                        rolou && escuro ? "bg-folha-clara" : "bg-petroleo",
                        atual ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Botao
            asChild
            variante={rolou && escuro ? "claro" : "escuro"}
            tamanho="sm"
            className="size-11 px-0 sm:w-auto sm:px-5"
          >
            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco pelo WhatsApp"
            >
              <IconeWhatsApp />
              <span className="hidden sm:inline">Fale conosco</span>
            </a>
          </Botao>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className={cn(
                  "grid size-11 place-items-center rounded-full border transition-colors xl:hidden",
                  rolou && escuro
                    ? "border-white/25 text-branco hover:bg-white hover:text-grafite"
                    : "border-grafite/15 text-grafite hover:bg-grafite hover:text-branco",
                )}
                aria-label="Abrir menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent aria-describedby="menu-descricao">
              <div className="flex h-20 items-center justify-between px-6">
                <SheetTitle asChild>
                  <span>
                    <Logo className="h-12" />
                  </span>
                </SheetTitle>
                <SheetClose asChild>
                  <button
                    type="button"
                    className="grid size-11 place-items-center rounded-full border border-grafite/15 transition-colors hover:bg-grafite hover:text-branco"
                    aria-label="Fechar menu"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </SheetClose>
              </div>
              <SheetDescription id="menu-descricao" className="sr-only">
                Navegação do site da Skin Shape
              </SheetDescription>

              <nav aria-label="Menu" className="flex-1 overflow-y-auto px-6 pt-4">
                <ul className="divide-y divide-grafite/10 border-y border-grafite/10">
                  {NAVEGACAO.map((item, i) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="group flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight"
                        >
                          <span className="flex items-baseline gap-3">
                            <span className="w-6 font-sans text-xs font-semibold text-cinza tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {item.rotulo}
                          </span>
                          <ArrowUpRight
                            className="size-5 text-cinza transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-grafite"
                            aria-hidden="true"
                          />
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-grafite-2">
                  {ENDERECO.logradouro}, {ENDERECO.bairro}
                  <br />
                  {ENDERECO.cidade} — {ENDERECO.uf}
                </p>
                <Botao asChild tamanho="lg" className="w-full">
                  <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                    <IconeWhatsApp />
                    WhatsApp {CONTATO.whatsappExibicao}
                  </a>
                </Botao>
                <Botao asChild variante="contorno" tamanho="lg" className="w-full">
                  <a href={REDES.instagram} target="_blank" rel="noopener noreferrer">
                    <IconeInstagram />
                    {REDES.instagramUsuario}
                  </a>
                </Botao>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
