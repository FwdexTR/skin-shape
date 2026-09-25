import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { IconeInstagram } from "@/components/marca/icones-redes";
import { Botao } from "@/components/ui/button";
import { POSTS_INSTAGRAM } from "@/data/conteudo";
import { IMAGENS, type ImagemId } from "@/data/imagens";
import { REDES } from "@/lib/site";
import { cn } from "@/lib/utils";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

/**
 * Mosaico em 3 colunas no desktop: duas fotos verticais ocupam duas linhas e
 * uma horizontal fecha a composição. No celular vira uma grade simples 2×3.
 */
const FORMATO: Partial<Record<ImagemId, string>> = {
  "instagram-04": "md:row-span-2",
  "instagram-06": "md:row-span-2",
  "instagram-05": "md:col-span-2",
};

/** Ordem de montagem do mosaico (com grid-flow-dense). */
const SEQUENCIA: ImagemId[] = [
  "instagram-04",
  "instagram-01",
  "instagram-02",
  "instagram-03",
  "instagram-06",
  "instagram-05",
];

export function Instagram() {
  const posts = SEQUENCIA.map(
    (id) => POSTS_INSTAGRAM.find((p) => p.imagem === id)!,
  );

  return (
    <section id="instagram" aria-labelledby="titulo-instagram" className="secao">
      <div className="container-ss">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="revelar rotulo">No Instagram</p>
            <h2
              id="titulo-instagram"
              className="revelar titulo-lg mt-6"
              style={ordem(1)}
            >
              Viva <span className="destaque">Skin Shape</span>
            </h2>
            <p className="revelar mt-5 max-w-md leading-relaxed text-grafite-2" style={ordem(2)}>
              Cardápio do dia, novidades da prateleira e mitos da comida
              saudável.{" "}
              <strong className="font-semibold text-grafite">
                {REDES.instagramSeguidores} pessoas
              </strong>{" "}
              já acompanham o {REDES.instagramUsuario}.
            </p>
          </div>
          <Botao asChild variante="escuro" tamanho="lg" className="revelar self-start md:self-auto" style={ordem(2)}>
            <a href={REDES.instagram} target="_blank" rel="noopener noreferrer">
              <IconeInstagram />
              Seguir no Instagram
            </a>
          </Botao>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-flow-dense md:auto-rows-[15rem] md:grid-cols-3 lg:auto-rows-[17rem] lg:gap-5">
          {posts.map((post, i) => {
            const img = IMAGENS[post.imagem];
            return (
              <li
                key={post.imagem}
                className={cn("revelar aspect-square md:aspect-auto", FORMATO[post.imagem])}
                style={ordem(i % 3)}
              >
                <a
                  href={img.post}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group zoom-suave relative block h-full overflow-hidden rounded-[1.25rem] bg-areia"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover object-top"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-grafite/0 transition-colors duration-500 group-hover:bg-grafite/35 group-focus-visible:bg-grafite/35"
                  />
                  <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 sm:inset-x-4 sm:bottom-4">
                    <span className="rounded-full bg-branco/92 px-3 py-1.5 text-xs font-semibold text-grafite backdrop-blur">
                      {post.tema}
                    </span>
                    <span
                      aria-hidden="true"
                      className="grid size-9 translate-y-2 place-items-center rounded-full bg-branco text-grafite opacity-0 transition-[opacity,transform] duration-500 ease-saida group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                    >
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                  <span className="sr-only">— abrir a publicação no Instagram</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
