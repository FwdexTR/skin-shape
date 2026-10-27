import Image from "next/image";
import type { CSSProperties } from "react";
import { IMAGENS } from "@/data/imagens";
import { MARCA, REDES } from "@/lib/site";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

const NUMEROS = [
  { valor: `${MARCA.desde}`, rotulo: "o ano em que a Skin Shape abriu as portas em Campos" },
  { valor: "3", rotulo: "jeitos de comprar: na loja, retirada ou entrega" },
  { valor: REDES.instagramSeguidores, rotulo: "pessoas acompanham a loja no Instagram" },
  { valor: "6 dias", rotulo: "por semana, de segunda a sábado" },
];

export function Sobre() {
  const loja = IMAGENS["sobre-fachada"];
  const cafe = IMAGENS["sobre-letreiro"];

  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="secao relative bg-areia"
    >
      <div className="container-ss grid gap-y-16 lg:grid-cols-12 lg:gap-x-12">
        {/* Composição assimétrica de fotos */}
        <div className="relative mx-auto w-full max-w-[30rem] lg:col-span-6 lg:max-w-none">
          <div className="revelar-imagem relative aspect-[4/5] w-[80%] overflow-hidden rounded-[1.75rem] bg-linho">
            <div className="parallax absolute inset-0">
              <Image
                src={loja.src}
                alt={loja.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
          <div className="revelar absolute right-0 -bottom-12 w-[46%] sm:-bottom-16" style={ordem(1)}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border-[8px] border-areia shadow-2">
              <Image
                src={cafe.src}
                alt={cafe.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 46vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="revelar mt-6 max-w-[48%] text-xs leading-relaxed text-cinza" style={ordem(2)}>
            A fachada na Rua Tenente Coronel Cardoso, 765. O azulejo do
            letreiro virou o desenho deste site.
          </p>
        </div>

        {/* Texto */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10 xl:col-span-5 xl:col-start-8">
          <p className="revelar rotulo">A Skin Shape</p>
          <h2 id="titulo-sobre" className="revelar titulo-lg mt-6 text-balance" style={ordem(1)}>
            Mais do que um empório. Um lugar para{" "}
            <span className="destaque">escolher melhor.</span>
          </h2>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-grafite-2">
            <p className="revelar" style={ordem(2)}>
              Desde {MARCA.desde} em Campos, a Skin Shape reúne num só lugar o
              que antes pedia várias paradas: alimentos para quem tem alergia ou
              intolerância, suplementos, marcas naturais e soluções para uma
              rotina mais equilibrada.
            </p>
            <p className="revelar" style={ordem(3)}>
              Na loja do Centro, o empório divide o espaço com o café e o
              bistrô, e toda a cozinha é sem glúten e sem lactose: do almoço
              às empadinhas, feitas ali mesmo. Dá para fazer as compras da
              semana, tomar um café e almoçar sem trocar de endereço.
            </p>
          </div>

          <figure className="revelar mt-10 border-l-2 border-folha pl-6" style={ordem(4)}>
            <blockquote className="font-display text-xl leading-snug font-medium tracking-tight text-grafite sm:text-2xl">
              “{MARCA.posicionamento}.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-cinza">
              — como a Skin Shape se apresenta
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Números */}
      <div className="container-ss mt-28 sm:mt-32">
        <dl className="grid grid-cols-2 gap-y-10 border-t border-grafite/15 pt-10 lg:grid-cols-4">
          {NUMEROS.map((n, i) => (
            <div
              key={n.rotulo}
              className="revelar flex flex-col-reverse pr-6"
              style={ordem(i)}
            >
              <dt className="mt-3 max-w-[14rem] text-sm leading-snug text-grafite-2">
                {n.rotulo}
              </dt>
              <dd className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-none font-semibold tracking-[-0.04em]">
                {n.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
