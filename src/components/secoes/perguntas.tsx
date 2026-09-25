import type { CSSProperties } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PERGUNTAS } from "@/data/conteudo";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

export function Perguntas() {
  return (
    <section aria-labelledby="titulo-perguntas" className="secao">
      <div className="container-ss grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="revelar rotulo">Dúvidas</p>
          <h2
            id="titulo-perguntas"
            className="revelar titulo-md mt-6 max-w-xs text-[clamp(1.9rem,3.4vw,2.8rem)]"
            style={ordem(1)}
          >
            Perguntas frequentes
          </h2>
        </div>
        <div className="revelar lg:col-span-8" style={ordem(1)}>
          <Accordion type="single" collapsible className="border-t border-grafite/12">
            {PERGUNTAS.map((p, i) => (
              <AccordionItem key={p.pergunta} value={`p-${i}`}>
                <AccordionTrigger>{p.pergunta}</AccordionTrigger>
                <AccordionContent>{p.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
