import { Navigation } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Azulejo } from "@/components/marca/azulejo";
import { IconeWhatsApp } from "@/components/marca/icones-redes";
import { Botao } from "@/components/ui/button";
import { IMAGENS } from "@/data/imagens";
import { CONTATO, LINK_ROTA, linkWhatsApp } from "@/lib/site";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

export function CtaFinal() {
  const folhas = IMAGENS["cta-folhas"];

  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="relative overflow-hidden bg-papel"
    >
      {/* Faixa de azulejo, a mesma gramática da fachada */}
      <div aria-hidden="true" className="h-16 bg-petroleo-claro text-petroleo sm:h-20">
        <Azulejo id="azulejo-cta" escala={0.42} />
      </div>

      <div className="relative">
        <Image
          src={folhas.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-papel/70 via-papel/40 to-papel/80" />

        <div className="container-ss relative py-[clamp(6rem,14vw,11rem)] text-center">
          <p className="revelar rotulo justify-center">Fale com a gente</p>
          <h2
            id="titulo-contato"
            className="revelar titulo-xl mx-auto mt-7 max-w-4xl text-balance"
            style={ordem(1)}
          >
            A próxima escolha boa começa{" "}
            <span className="destaque">aqui.</span>
          </h2>
          <p
            className="revelar texto-lead mx-auto mt-7 max-w-xl text-pretty"
            style={ordem(2)}
          >
            Dúvida sobre um produto, uma restrição ou o cardápio do dia? A
            equipe responde pelo WhatsApp {CONTATO.whatsappExibicao}.
          </p>
          <div
            className="revelar mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            style={ordem(3)}
          >
            <Botao asChild variante="escuro" tamanho="lg">
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                <IconeWhatsApp />
                Chamar no WhatsApp
              </a>
            </Botao>
            <Botao asChild variante="contorno" tamanho="lg" className="bg-papel/60 backdrop-blur">
              <a href={LINK_ROTA} target="_blank" rel="noopener noreferrer">
                <Navigation className="seta diagonal" aria-hidden="true" />
                Como chegar
              </a>
            </Botao>
          </div>
        </div>
      </div>
    </section>
  );
}
