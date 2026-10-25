import {
  IconeFacebook,
  IconeIfood,
  IconeInstagram,
  IconeWhatsApp,
} from "@/components/marca/icones-redes";
import { Logo } from "@/components/marca/logo";
import {
  CONTATO,
  ENDERECO,
  HORARIOS,
  MARCA,
  REDES,
  formatarHora,
  linkWhatsApp,
} from "@/lib/site";

/** Crédito de quem fez o site; o nome leva ao site da Aplass. */
const CREDITO = {
  nome: "Tarcísio",
  url: "https://aplassolution.vercel.app",
} as const;

const LINKS = [
  { href: "#inicio", rotulo: "Início" },
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#produtos", rotulo: "Produtos" },
  { href: "#instagram", rotulo: "Instagram" },
  { href: "#contato", rotulo: "Contato" },
  { href: "#localizacao", rotulo: "Localização" },
];

const REDES_SOCIAIS = [
  { href: REDES.instagram, rotulo: "Instagram", Icone: IconeInstagram },
  { href: REDES.facebook, rotulo: "Facebook", Icone: IconeFacebook },
  { href: REDES.ifood, rotulo: "iFood", Icone: IconeIfood },
  { href: linkWhatsApp(), rotulo: "WhatsApp", Icone: IconeWhatsApp },
];

export function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="no-escuro bg-grafite text-branco">
      <div className="container-ss grid gap-14 pt-20 pb-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <Logo claro className="h-32 sm:h-36" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
            Mercado funcional, café e bistrô no Centro de Campos dos
            Goytacazes. {MARCA.bio}
          </p>
          <ul className="mt-8 flex gap-2">
            {REDES_SOCIAIS.map(({ href, rotulo, Icone }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rotulo}
                  className="grid size-11 place-items-center rounded-full border border-white/20 transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-grafite motion-reduce:hover:translate-y-0"
                >
                  <Icone className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-2 md:col-start-6">
          <h2 className="text-xs font-bold tracking-[0.16em] text-white/60 uppercase">
            Navegue
          </h2>
          <ul className="mt-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group inline-flex min-h-11 items-center text-white/85 hover:text-white">
                  <span className="link-sublinhado">{l.rotulo}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-2">
          <h2 className="text-xs font-bold tracking-[0.16em] text-white/60 uppercase">
            Visite
          </h2>
          <address className="mt-5 text-sm leading-relaxed text-white/85 not-italic">
            {ENDERECO.logradouro}
            <br />
            {ENDERECO.complemento} · {ENDERECO.bairro}
            <br />
            {ENDERECO.cidade} — {ENDERECO.uf}
            <br />
            CEP {ENDERECO.cep}
          </address>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xs font-bold tracking-[0.16em] text-white/60 uppercase">
            Horário e contato
          </h2>
          <ul className="mt-5 space-y-1 text-sm text-white/85">
            {HORARIOS.map((h) => (
              <li key={h.dias} className="flex justify-between gap-4">
                <span>{h.dias}</span>
                <span className="tabular-nums">
                  {h.abre ? `${formatarHora(h.abre)}–${formatarHora(h.fecha!)}` : "Fechado"}
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-3 text-sm">
            <li>
              <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center text-white/85 hover:text-white">
                <span className="link-sublinhado">WhatsApp {CONTATO.whatsappExibicao}</span>
              </a>
            </li>
            <li>
              <a href={`tel:+${CONTATO.telefoneFixo}`} className="group inline-flex min-h-11 items-center text-white/85 hover:text-white">
                <span className="link-sublinhado">{CONTATO.telefoneFixoExibicao}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTATO.email}`} className="group inline-flex min-h-11 items-center text-white/85 hover:text-white">
                <span className="link-sublinhado">{CONTATO.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-ss flex flex-col gap-2 border-t border-white/10 py-7 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {ano} {MARCA.nomeCompleto}
        </p>
        <p>
          {MARCA.razaoSocial} · CNPJ {MARCA.cnpj}
        </p>
        <p>
          Feito por{" "}
          <a
            href={CREDITO.url}
            target="_blank"
            rel="noopener"
            className="toque link-sublinhado font-semibold text-white/85 hover:text-white"
          >
            {CREDITO.nome}
          </a>
        </p>
      </div>
    </footer>
  );
}
