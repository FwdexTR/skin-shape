/**
 * Dados da Skin Shape usados em todo o site.
 *
 * Tudo aqui foi conferido em fontes públicas em 25/09/2026:
 * Perfil da Empresa no Google (Maps), Instagram @skinshape, Linktree oficial
 * (linktr.ee/Skinshape1), Facebook e cadastro do CNPJ. O que não tinha fonte
 * pública ficou de fora do site em vez de ser inventado.
 */

/**
 * Endereço público do site. Na Vercel, defina NEXT_PUBLIC_SITE_URL quando o
 * domínio próprio estiver apontado; até lá vale o domínio de produção que a
 * própria Vercel informa. Nunca apontar para um domínio que ainda não existe:
 * o canonical e o sitemap passariam a mandar o Google para lugar nenhum.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const MARCA = {
  nome: "Skin Shape",
  nomeCompleto: "Skin Shape — Empório Funcional",
  descritor: "Empório Funcional",
  /** Razão social e CNPJ (cadastro público da Receita). */
  razaoSocial: "Skin & Shape LTDA",
  cnpj: "16.366.889/0001-65",
  /** Data de abertura do CNPJ: 09/07/2012. */
  desde: 2012,
  /** Bio do Instagram, palavra por palavra. */
  bio: "As melhores e mais saudáveis marcas pertinho de você!",
  /** Como a própria loja se apresenta no Facebook. */
  posicionamento: "A maior e mais completa loja de nutrição funcional da região",
} as const;

export const ENDERECO = {
  logradouro: "Rua Tenente Coronel Cardoso, 765",
  complemento: "Loja 1",
  bairro: "Centro",
  cidade: "Campos dos Goytacazes",
  uf: "RJ",
  cep: "28035-042",
  /** Coordenadas do pino no Google Maps. */
  lat: -21.7571092,
  lng: -41.3322076,
} as const;


export const CONTATO = {
  /** WhatsApp da loja (Linktree oficial e Perfil da Empresa no Google). */
  whatsapp: "5522999512483",
  whatsappExibicao: "(22) 99951-2483",
  /** Telefone fixo que aparece no Facebook e no cadastro do CNPJ. */
  telefoneFixo: "552227251554",
  telefoneFixoExibicao: "(22) 2725-1554",
  email: "skinshape@hotmail.com",
} as const;

export const REDES = {
  instagram: "https://www.instagram.com/skinshape/",
  instagramUsuario: "@skinshape",
  /** Número mostrado no perfil em 25/09/2026. Atualizar de tempos em tempos. */
  instagramSeguidores: "20,6 mil",
  facebook: "https://www.facebook.com/skineshape/",
  ifood:
    "https://www.ifood.com.br/delivery/campos-dos-goytacazes-rj/skin-shape-emporio-funcional-centro/7609545a-299f-4061-ab92-64bbc5b9db6f",
} as const;

/** Nota pública no Google em 25/09/2026. Conferir antes de cada publicação. */
export const GOOGLE = {
  nota: "5,0",
  avaliacoes: 12,
  perfil:
    "https://www.google.com/maps/place/Skin+Shape/@-21.7571092,-41.3322076,17z/data=!4m6!3m5!1s0xbdd5d243bb0221:0xff830b155069a4ff!8m2!3d-21.7571092!4d-41.3322076",
} as const;

/** Horário do Perfil da Empresa no Google, igual ao post fixado no Instagram. */
export const HORARIOS = [
  { dias: "Segunda a sexta", abre: "08:00", fecha: "20:00" },
  { dias: "Sábado", abre: "08:00", fecha: "13:00" },
  { dias: "Domingo", abre: null, fecha: null },
] as const;

/** "08:00" → "8h"; "13:30" → "13h30". */
export function formatarHora(hhmm: string) {
  const [h, m] = hhmm.split(":");
  return `${Number(h)}h${m === "00" ? "" : m}`;
}

export const MENSAGEM_WHATSAPP =
  "Olá! Conheci a Skin Shape pelo site e gostaria de saber mais sobre os produtos.";

export function linkWhatsApp(mensagem: string = MENSAGEM_WHATSAPP) {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

const DESTINO_MAPA = encodeURIComponent(
  `Skin Shape, ${ENDERECO.logradouro}, ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.uf}, ${ENDERECO.cep}`,
);

/** Abre o app de mapas já traçando a rota até a loja. */
export const LINK_ROTA = `https://www.google.com/maps/dir/?api=1&destination=${DESTINO_MAPA}`;

/** Mapa incorporado, sem chave de API. */
export const MAPA_EMBED = `https://maps.google.com/maps?q=${ENDERECO.lat},${ENDERECO.lng}&z=17&hl=pt-BR&output=embed`;

export const NAVEGACAO = [
  { href: "#inicio", rotulo: "Início" },
  { href: "#sobre", rotulo: "A Skin Shape" },
  { href: "#produtos", rotulo: "Produtos" },
  { href: "#diferenciais", rotulo: "Benefícios" },
  { href: "#experiencia", rotulo: "Experiência" },
  { href: "#localizacao", rotulo: "Localização" },
  { href: "#contato", rotulo: "Contato" },
] as const;
