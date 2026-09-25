import { Clock, Mail, MapPin, Navigation, Phone, ShoppingBag } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { IconeWhatsApp } from "@/components/marca/icones-redes";
import { Botao } from "@/components/ui/button";
import {
  CONTATO,
  ENDERECO,
  HORARIOS,
  LINK_ROTA,
  MAPA_EMBED,
  REDES,
  formatarHora,
  linkWhatsApp,
} from "@/lib/site";
import { StatusAgora } from "./status-agora";

const ordem = (i: number) => ({ "--i": i }) as CSSProperties;

function Bloco({
  icone,
  titulo,
  children,
}: {
  icone: ReactNode;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-grafite/10 py-6">
      <span className="grid size-10 place-items-center rounded-full bg-petroleo-claro text-petroleo">
        {icone}
      </span>
      <div>
        <h3 className="text-xs font-bold tracking-[0.14em] text-grafite-2 uppercase">
          {titulo}
        </h3>
        <div className="mt-2 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function Localizacao() {
  return (
    <section
      id="localizacao"
      aria-labelledby="titulo-localizacao"
      className="secao bg-branco"
    >
      <div className="container-ss grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="revelar rotulo">Localização</p>
          <h2
            id="titulo-localizacao"
            className="revelar titulo-lg mt-6 text-balance"
            style={ordem(1)}
          >
            Venha conhecer a <span className="destaque">Skin Shape.</span>
          </h2>
          <StatusAgora className="mt-6" />

          <div className="revelar mt-10" style={ordem(2)}>
            <Bloco icone={<MapPin className="size-[1.1rem]" aria-hidden="true" />} titulo="Endereço">
              <address className="not-italic">
                {ENDERECO.logradouro}, {ENDERECO.complemento}
                <br />
                {ENDERECO.bairro} · {ENDERECO.cidade} — {ENDERECO.uf}
                <br />
                <span className="text-grafite-2">CEP {ENDERECO.cep}</span>
              </address>
            </Bloco>

            <Bloco icone={<Clock className="size-[1.1rem]" aria-hidden="true" />} titulo="Horário">
              <table className="w-full max-w-xs text-left">
                <caption className="sr-only">Horário de funcionamento</caption>
                <tbody>
                  {HORARIOS.map((h) => (
                    <tr key={h.dias}>
                      <th scope="row" className="py-0.5 pr-4 font-normal text-grafite-2">
                        {h.dias}
                      </th>
                      <td className="py-0.5 text-right font-medium tabular-nums">
                        {h.abre ? `${formatarHora(h.abre)} – ${formatarHora(h.fecha!)}` : "Fechado"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Bloco>

            <Bloco icone={<Phone className="size-[1.1rem]" aria-hidden="true" />} titulo="Contato">
              <ul className="space-y-1">
                <li>
                  <a
                    href={linkWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-sublinhado font-medium"
                  >
                    WhatsApp {CONTATO.whatsappExibicao}
                  </a>
                </li>
                <li>
                  <a href={`tel:+${CONTATO.telefoneFixo}`} className="link-sublinhado">
                    Telefone {CONTATO.telefoneFixoExibicao}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTATO.email}`} className="link-sublinhado inline-flex items-center gap-1.5">
                    <Mail className="size-3.5 text-grafite-2" aria-hidden="true" />
                    {CONTATO.email}
                  </a>
                </li>
              </ul>
            </Bloco>

            <Bloco icone={<ShoppingBag className="size-[1.1rem]" aria-hidden="true" />} titulo="Como comprar">
              <p>
                Na loja, retirada no balcão ou entrega pelo{" "}
                <a
                  href={REDES.ifood}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sublinhado font-medium"
                >
                  iFood
                </a>
                .
              </p>
            </Bloco>
          </div>

          <div className="revelar mt-4 flex flex-col gap-3 sm:flex-row" style={ordem(3)}>
            <Botao asChild tamanho="lg">
              <a href={LINK_ROTA} target="_blank" rel="noopener noreferrer">
                <Navigation className="seta diagonal" aria-hidden="true" />
                Como chegar
              </a>
            </Botao>
            <Botao asChild variante="contorno" tamanho="lg">
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                <IconeWhatsApp />
                Falar no WhatsApp
              </a>
            </Botao>
          </div>
        </div>

        {/* Mapa */}
        <div className="revelar lg:col-span-7" style={ordem(1)}>
          <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[1.75rem] bg-areia shadow-1 lg:min-h-[40rem]">
            <iframe
              src={MAPA_EMBED}
              title={`Mapa: Skin Shape, ${ENDERECO.logradouro}, ${ENDERECO.bairro}, ${ENDERECO.cidade}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 [filter:grayscale(0.35)_contrast(1.02)_saturate(0.9)]"
            />
            <a
              href={LINK_ROTA}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute right-4 bottom-4 left-4 flex items-center justify-between gap-4 rounded-[1.1rem] bg-papel/95 p-4 shadow-2 backdrop-blur sm:right-auto sm:left-4 sm:w-[22rem]"
            >
              <span>
                <span className="block font-display text-lg font-semibold tracking-tight">
                  Skin Shape
                </span>
                <span className="block text-sm text-grafite-2">
                  {ENDERECO.logradouro} · {ENDERECO.bairro}
                </span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-petroleo text-branco transition-transform duration-300 group-hover:scale-105">
                <Navigation className="size-4" aria-hidden="true" />
                <span className="sr-only">Traçar rota no Google Maps</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
