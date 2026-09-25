/**
 * Registro de todas as fotos do site.
 *
 * TODAS estão marcadas como `temporaria: true`: são fotos do Unsplash
 * (licença livre para uso comercial) escolhidas para bater com o que a Skin
 * Shape vende. Nenhuma é da loja. As fotos reais existem no Instagram
 * @skinshape, mas só entram aqui com autorização da loja.
 *
 * Para trocar: salve a foto real em public/images/skin-shape/ com o mesmo
 * caminho, ajuste `alt` e troque `temporaria` para false. Pronto.
 */

export type Imagem = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  temporaria: boolean;
  /** Crédito da foto temporária (Unsplash não exige, mas fica registrado). */
  credito?: string;
};

const BASE = "/images/skin-shape";

export const IMAGENS = {
  "hero-principal": {
    src: `${BASE}/hero/hero-principal.webp`,
    alt: "Pessoa almoçando uma salada colorida com frango e romã",
    largura: 1400,
    altura: 2100,
    temporaria: true,
    credito: "Rodrigo Rodrigues | WOLF Λ R T / Unsplash",
  },
  "hero-cafe": {
    src: `${BASE}/hero/hero-cafe.webp`,
    alt: "Cappuccino com desenho de folha na espuma",
    largura: 700,
    altura: 1050,
    temporaria: true,
    credito: "Caleb / Unsplash",
  },
  "sobre-loja": {
    src: `${BASE}/sobre/loja.webp`,
    alt: "Prateleiras de madeira com potes de vidro cheios de grãos e sementes",
    largura: 1200,
    altura: 800,
    temporaria: true,
    credito: "ayumi kubo / Unsplash",
  },
  "sobre-cafe": {
    src: `${BASE}/sobre/cafe.webp`,
    alt: "Ambiente de café com mesas de madeira e plantas",
    largura: 1000,
    altura: 1500,
    temporaria: true,
    credito: "micheile henderson / Unsplash",
  },
  "categoria-restricoes": {
    src: `${BASE}/categorias/restricoes.webp`,
    alt: "Grãos, sementes, castanhas e frutas secas espalhados sobre a mesa",
    largura: 1200,
    altura: 878,
    temporaria: true,
    credito: "Maddi Bazzocco / Unsplash",
  },
  "categoria-suplementos": {
    src: `${BASE}/categorias/suplementos.webp`,
    alt: "Pote de proteína em pó ao lado de uma colher dosadora",
    largura: 1000,
    altura: 667,
    temporaria: true,
    credito: "Alex Saks / Unsplash",
  },
  "categoria-cafe": {
    src: `${BASE}/categorias/cafe.webp`,
    alt: "Quatro xícaras de café com leite vistas de cima",
    largura: 1000,
    altura: 1500,
    temporaria: true,
    credito: "Nathan Dumlao / Unsplash",
  },
  "categoria-bistro": {
    src: `${BASE}/categorias/bistro.webp`,
    alt: "Peito de frango grelhado com cuscuz e legumes coloridos",
    largura: 1200,
    altura: 900,
    temporaria: true,
    credito: "joe boshra / Unsplash",
  },
  "categoria-doces": {
    src: `${BASE}/categorias/doces.webp`,
    alt: "Fatia de bolo branco com fatias de limão",
    largura: 1000,
    altura: 1500,
    temporaria: true,
    credito: "Elena Leya / Unsplash",
  },
  "categoria-geladeira": {
    src: `${BASE}/categorias/geladeira.webp`,
    alt: "Tigela de iogurte com granola",
    largura: 1000,
    altura: 667,
    temporaria: true,
    credito: "Welcome / Unsplash",
  },
  "experiencia-manha": {
    src: `${BASE}/experiencia/manha.webp`,
    alt: "Cappuccino servido numa mesa de madeira",
    largura: 1000,
    altura: 1500,
    temporaria: true,
    credito: "Nathan Dumlao / Unsplash",
  },
  "experiencia-almoco": {
    src: `${BASE}/experiencia/almoco.webp`,
    alt: "Salada em tigela de madeira vista de cima",
    largura: 1000,
    altura: 750,
    temporaria: true,
    credito: "irws / Unsplash",
  },
  "experiencia-tarde": {
    src: `${BASE}/experiencia/tarde.webp`,
    alt: "Potes de vidro com grãos e sementes numa prateleira de madeira",
    largura: 1000,
    altura: 1500,
    temporaria: true,
    credito: "zeesi / Unsplash",
  },
  "experiencia-mesa": {
    src: `${BASE}/experiencia/mesa.webp`,
    alt: "Duas pessoas à mesa de um café, com pratos e bebidas",
    largura: 1600,
    altura: 1068,
    temporaria: true,
    credito: "Alimentos Fotogénicos / Unsplash",
  },
  "instagram-01": {
    src: `${BASE}/instagram/post-01.webp`,
    alt: "Mesa de café da manhã com frutas e sucos",
    largura: 700,
    altura: 467,
    temporaria: true,
    credito: "Brooke Lark / Unsplash",
  },
  "instagram-02": {
    src: `${BASE}/instagram/post-02.webp`,
    alt: "Tigelas de salada sobre fundo claro",
    largura: 700,
    altura: 467,
    temporaria: true,
    credito: "Ella Olsson / Unsplash",
  },
  "instagram-03": {
    src: `${BASE}/instagram/post-03.webp`,
    alt: "Tigela com legumes, abacate e grão-de-bico",
    largura: 700,
    altura: 467,
    temporaria: true,
    credito: "Anna Pelzer / Unsplash",
  },
  "instagram-04": {
    src: `${BASE}/instagram/post-04.webp`,
    alt: "Nozes numa tigela de madeira",
    largura: 700,
    altura: 1049,
    temporaria: true,
    credito: "Larisa Birta / Unsplash",
  },
  "instagram-05": {
    src: `${BASE}/instagram/post-05.webp`,
    alt: "Amigos dividindo pratos numa mesa",
    largura: 700,
    altura: 467,
    temporaria: true,
    credito: "Wasa Crispbread / Unsplash",
  },
  "instagram-06": {
    src: `${BASE}/instagram/post-06.webp`,
    alt: "Café claro com cadeiras de palhinha e plantas",
    largura: 700,
    altura: 1036,
    temporaria: true,
    credito: "Salman Rameli / Unsplash",
  },
  "cta-folhas": {
    src: `${BASE}/cta/sombra-folhas.webp`,
    alt: "",
    largura: 1800,
    altura: 1013,
    temporaria: true,
    credito: "Spencer Liao / Unsplash",
  },
} satisfies Record<string, Imagem>;

export type ImagemId = keyof typeof IMAGENS;
