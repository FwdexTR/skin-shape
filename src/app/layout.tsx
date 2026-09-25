import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Kaushan_Script, Manrope } from "next/font/google";
import "./globals.css";
import {
  CONTATO,
  ENDERECO,
  GOOGLE,
  HORARIOS,
  MARCA,
  REDES,
  SITE_URL,
} from "@/lib/site";

/*
 * Tipografia
 * - Bricolage Grotesque: títulos. Grotesca com personalidade e eixo óptico,
 *   fica editorial em corpo grande sem perder a leitura no celular.
 * - Manrope: texto corrido e interface.
 * - Kaushan Script: só no logo e em palavras de destaque, ecoando o lettering
 *   em pincel da marca. Nunca em frase inteira.
 */
const titulo = Bricolage_Grotesque({
  variable: "--fonte-titulo",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const texto = Manrope({
  variable: "--fonte-texto",
  subsets: ["latin"],
  display: "swap",
});

const assinatura = Kaushan_Script({
  variable: "--fonte-assinatura",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const TITULO = "Skin Shape — Empório Funcional em Campos dos Goytacazes";
const DESCRICAO =
  "Empório funcional, café e bistrô no Centro de Campos dos Goytacazes (RJ). " +
  "Produtos sem glúten, sem lactose, zero açúcar e veganos, suplementos, almoço e saladas. " +
  "Seg a sex 8h–20h, sáb 8h–13h.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITULO,
    template: "%s · Skin Shape",
  },
  description: DESCRICAO,
  applicationName: MARCA.nome,
  keywords: [
    "Skin Shape",
    "Skin Shape Campos dos Goytacazes",
    "Skin Shape Empório Funcional",
    "empório funcional Campos dos Goytacazes",
    "produtos naturais Campos dos Goytacazes",
    "alimentação saudável Campos dos Goytacazes",
    "loja de produtos sem glúten Campos",
    "produtos sem lactose Campos dos Goytacazes",
    "suplementos Campos dos Goytacazes",
    "café e bistrô saudável Campos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: MARCA.nomeCompleto,
    title: TITULO,
    description: DESCRICAO,
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRICAO,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
  // TODO(Skin Shape): códigos do Google Search Console e do Bing Webmaster.
  // verification: { google: "", other: { "msvalidate.01": "" } },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  colorScheme: "light",
};

const DIAS_SCHEMA: Record<string, string[]> = {
  "Segunda a sexta": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Sábado: ["Saturday"],
};

/**
 * Dados estruturados (Schema.org). Mercado + cafeteria no mesmo endereço:
 * GroceryStore e CafeOrCoffeeShop. A nota do Google fica fora de propósito:
 * o Google ignora (e desaconselha) avaliação agregada publicada pelo próprio
 * negócio no LocalBusiness.
 */
const DADOS_ESTRUTURADOS = {
  "@context": "https://schema.org",
  "@type": ["GroceryStore", "CafeOrCoffeeShop"],
  "@id": `${SITE_URL}/#loja`,
  name: MARCA.nome,
  alternateName: [MARCA.nomeCompleto, MARCA.razaoSocial],
  description: DESCRICAO,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/icon.svg`,
  telephone: `+${CONTATO.whatsapp}`,
  email: CONTATO.email,
  foundingDate: String(MARCA.desde),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ENDERECO.logradouro}, ${ENDERECO.complemento}`,
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.uf,
    postalCode: ENDERECO.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: ENDERECO.lat,
    longitude: ENDERECO.lng,
  },
  hasMap: GOOGLE.perfil,
  areaServed: { "@type": "City", name: ENDERECO.cidade },
  openingHoursSpecification: HORARIOS.filter((h) => h.abre).map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DIAS_SCHEMA[h.dias],
    opens: h.abre,
    closes: h.fecha,
  })),
  servesCuisine: ["Saudável", "Sem glúten", "Vegana"],
  sameAs: [REDES.instagram, REDES.facebook, REDES.ifood],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${CONTATO.whatsapp}`,
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${titulo.variable} ${texto.variable} ${assinatura.variable} antialiased`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-grafite focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-branco"
        >
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS_ESTRUTURADOS) }}
        />
        {children}
      </body>
    </html>
  );
}
