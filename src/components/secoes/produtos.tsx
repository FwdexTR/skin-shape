import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { IconeIfood } from "@/components/marca/icones-redes";
import { CATEGORIAS, type Categoria } from "@/data/conteudo";
import { IMAGENS } from "@/data/imagens";
import { REDES, linkWhatsApp } from "@/lib/site";
import { cn } from "@/lib/utils";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * Grade editorial: uma peça grande, as outras em ritmos diferentes.
 * Cada posição casa com a ordem de CATEGORIAS. Nada de min-height aqui:
 * junto com aspect-ratio ele força a largura e estoura a tela no celular.
 */
const LAYOUT = [
  "aspect-[4/5] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  "aspect-[4/5] lg:col-span-5 lg:aspect-[4/3]",
  "aspect-[4/5] lg:col-span-5 lg:aspect-[4/3]",
  "aspect-[4/5] lg:col-span-4",
  "aspect-[4/5] lg:col-span-4",
  "aspect-[4/5] lg:col-span-4",
];

function CartaoCategoria({
  categoria,
  indice,
  classe,
}: {
  categoria: Categoria;
  indice: number;
  classe: string;
}) {
  const img = IMAGENS[categoria.imagem];
  const mensagem = `Olá! Vi no site da Skin Shape a seção "${categoria.titulo}" e gostaria de saber mais.`;
  const grande = indice === 0;

  return (
    <li className={cn("revelar", classe)} style={ordem(indice % 3)}>
      <a
        href={linkWhatsApp(mensagem)}
        target="_blank"
        rel="noopener noreferrer"
        className="group zoom-suave relative flex h-full flex-col justify-end overflow-hidden rounded-[1.5rem] bg-petroleo-escuro text-branco shadow-1 transition-shadow duration-500 ease-saida hover:shadow-2 focus-visible:shadow-2"
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={
            grande
              ? "(min-width: 1024px) 56vw, 100vw"
              : "(min-width: 1024px) 34vw, 100vw"
          }
          className="object-cover"
        />
        {/* Véu para o texto branco ter contraste em qualquer foto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/0 transition-opacity duration-500 group-hover:from-black/85"
        />

        <span className="absolute top-5 left-5 rounded-full bg-branco/90 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-grafite uppercase tabular-nums backdrop-blur">
          {String(indice + 1).padStart(2, "0")}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-branco text-grafite opacity-0 transition-[opacity,transform] duration-500 ease-saida group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
        >
          <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:rotate-45" />
        </span>

        <div className="relative p-6 sm:p-8">
          <h3
            className={cn(
              "font-display font-semibold tracking-[-0.02em] text-balance",
              grande ? "text-[clamp(1.8rem,3.4vw,2.9rem)] leading-[1.02]" : "text-2xl leading-tight",
            )}
          >
            {categoria.titulo}
          </h3>

          {/* No desktop o resumo aparece no hover; no toque fica sempre visível. */}
          <div className="grid transition-[grid-template-rows] duration-500 ease-saida [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/85">
                {categoria.resumo}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Inclui">
                {categoria.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span className="sr-only">— perguntar pelo WhatsApp</span>
        </div>
      </a>
    </li>
  );
}

export function Produtos() {
  return (
    <section id="produtos" aria-labelledby="titulo-produtos" className="secao">
      <div className="container-ss">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="revelar rotulo">Produtos</p>
            <h2
              id="titulo-produtos"
              className="revelar titulo-lg mt-6 text-balance"
              style={ordem(1)}
            >
              Tudo o que cabe numa rotina{" "}
              <span className="destaque">mais leve.</span>
            </h2>
          </div>
          <div className="revelar lg:col-span-4 lg:col-start-9" style={ordem(2)}>
            <p className="leading-relaxed text-grafite-2">
              Toque numa categoria para perguntar direto à equipe pelo WhatsApp.
              Prefere receber em casa? A loja também está no iFood.
            </p>
            <a
              href={REDES.ifood}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
            >
              <IconeIfood className="size-4 text-[#c8102e]" />
              <span className="link-sublinhado">Pedir pelo iFood</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <ul className="mt-14 grid auto-rows-auto gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {CATEGORIAS.map((categoria, i) => (
            <CartaoCategoria
              key={categoria.id}
              categoria={categoria}
              indice={i}
              classe={LAYOUT[i]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
