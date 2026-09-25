/**
 * Registro de todas as fotos e vídeos do site.
 *
 * Todo o material vem do Instagram oficial da loja (@skinshape), com uso
 * autorizado pela Skin Shape (confirmado pelo responsável pelo site em
 * 25/09/2026). `post` aponta para a publicação de origem.
 *
 * Algumas fotos são quadros tirados dos reels e outras foram recortadas para
 * tirar as legendas escritas por cima das artes. Para trocar uma foto, salve a
 * nova em public/images/skin-shape/ com o mesmo caminho.
 */

export type Imagem = {
  src: string;
  alt: string;
  largura: number;
  altura: number;
  /** Publicação do Instagram de onde a imagem saiu. */
  post: string;
};

const BASE = "/images/skin-shape";
const IG = "https://www.instagram.com";

export const IMAGENS = {
  "hero-cafe": {
    src: `${BASE}/hero/cafe-logo.webp`,
    alt: "Café coado na xícara da Skin Shape, com o logo da loja",
    largura: 700,
    altura: 933,
    post: `${IG}/p/DdFLnh3gfqs/`,
  },
  "hero-shitake": {
    src: `${BASE}/hero/shitake-poster.webp`,
    alt: "Shitake Imperial servido na mesa do bistrô da Skin Shape",
    largura: 716,
    altura: 1274,
    post: `${IG}/reel/DdXPPNgRIJz/`,
  },
  "sobre-fachada": {
    src: `${BASE}/sobre/fachada.webp`,
    alt: "Fachada da Skin Shape, com o letreiro redondo sobre o azulejo geométrico",
    largura: 640,
    altura: 1138,
    post: `${IG}/reel/DdjYip7RSkO/`,
  },
  "sobre-balcao": {
    src: `${BASE}/sobre/balcao.webp`,
    alt: "Atendente no balcão de madeira da Skin Shape",
    largura: 716,
    altura: 1274,
    post: `${IG}/reel/DclypD_x662/`,
  },
  "categoria-restricoes": {
    src: `${BASE}/categorias/docinhos-coco.webp`,
    alt: "Docinhos de coco em forminhas",
    largura: 1200,
    altura: 1200,
    post: `${IG}/p/Ddtyp-4kfke/`,
  },
  "categoria-bistro": {
    src: `${BASE}/categorias/salada-da-casa.webp`,
    alt: "Salada da casa com frango desfiado, massa, cenoura, milho e folhas",
    largura: 1200,
    altura: 727,
    post: `${IG}/p/DdRW4h4Ed3S/`,
  },
  "categoria-cafe": {
    src: `${BASE}/categorias/crepioca.webp`,
    alt: "Crepioca recheada com frango e salada de tomate",
    largura: 1100,
    altura: 1100,
    post: `${IG}/p/DdFLnh3gfqs/`,
  },
  "categoria-suplementos": {
    src: `${BASE}/categorias/vitaminas.webp`,
    alt: "Caixas de vitaminas e suplementos nas prateleiras da loja",
    largura: 716,
    altura: 1274,
    post: `${IG}/reel/DdjYip7RSkO/`,
  },
  "categoria-doces": {
    src: `${BASE}/categorias/bolos-fatia.webp`,
    alt: "Fatias de bolo com morango em embalagens individuais",
    largura: 1100,
    altura: 1100,
    post: `${IG}/p/Ddtyp-4kfke/`,
  },
  "categoria-geladeira": {
    src: `${BASE}/categorias/geladeiras.webp`,
    alt: "Geladeiras de iogurtes e bebidas no salão da loja",
    largura: 640,
    altura: 1138,
    post: `${IG}/reel/DclypD_x662/`,
  },
  "experiencia-empadinhas": {
    src: `${BASE}/experiencia/empadinhas-poster.webp`,
    alt: "Mãos da equipe montando empadinhas sem glúten e sem lactose",
    largura: 716,
    altura: 1274,
    post: `${IG}/reel/DceloHvxFak/`,
  },
  "experiencia-manha": {
    src: `${BASE}/experiencia/bolo-laranja.webp`,
    alt: "Bolo de laranja com rodelas da fruta por cima",
    largura: 1000,
    altura: 1000,
    post: `${IG}/p/Ddtyp-4kfke/`,
  },
  "experiencia-almoco": {
    src: `${BASE}/experiencia/massa-pesto.webp`,
    alt: "Massa sem glúten com pesto, frango desfiado, tomatinhos e parmesão de castanhas",
    largura: 900,
    altura: 900,
    post: `${IG}/p/DdRW4h4Ed3S/`,
  },
  "experiencia-tarde": {
    src: `${BASE}/experiencia/bolo-tarde.webp`,
    alt: "Fatia de bolo recheado sobre a mesa, com as prateleiras da loja ao fundo",
    largura: 716,
    altura: 716,
    post: `${IG}/reel/Dc3w-T6xL4Q/`,
  },
  "instagram-01": {
    src: `${BASE}/instagram/ig-doce-sem-culpa.webp`,
    alt: "Post: “Doce, bonito e sem peso na consciência”, com bolos em bandejas",
    largura: 720,
    altura: 720,
    post: `${IG}/p/Ddtyp-4kfke/`,
  },
  "instagram-02": {
    src: `${BASE}/instagram/ig-mitos.webp`,
    alt: "Post: “Mitos sobre comida saudável”, com um bolo com cobertura de doce de leite",
    largura: 720,
    altura: 720,
    post: `${IG}/p/DdpI9bPgS4u/`,
  },
  "instagram-03": {
    src: `${BASE}/instagram/ig-massa-pesto.webp`,
    alt: "Post: massa sem glúten com pesto, frango desfiado, tomatinhos e parmesão de castanhas",
    largura: 720,
    altura: 720,
    post: `${IG}/p/DdRW4h4Ed3S/`,
  },
  "instagram-04": {
    src: `${BASE}/instagram/ig-shitake.webp`,
    alt: "Reel: o Shitake Imperial, prato do Festival de Inverno, de volta à Skin Shape",
    largura: 640,
    altura: 1138,
    post: `${IG}/reel/DdXPPNgRIJz/`,
  },
  "instagram-05": {
    src: `${BASE}/instagram/ig-fachada.webp`,
    alt: "Post: fachada da loja na Rua Tenente Coronel Cardoso, 765",
    largura: 1000,
    altura: 500,
    post: `${IG}/p/Ddtyp-4kfke/`,
  },
  "instagram-06": {
    src: `${BASE}/instagram/ig-bate-bola.webp`,
    alt: "Reel: bate-bola com a equipe sobre os produtos preferidos da cafeteria",
    largura: 640,
    altura: 1138,
    post: `${IG}/reel/DdJpOzBx3N-/`,
  },
} satisfies Record<string, Imagem>;

export type ImagemId = keyof typeof IMAGENS;

/** Vídeos: sem áudio, em loop. Comprimidos a partir dos reels originais. */
export const VIDEOS = {
  shitake: {
    src: `${BASE}/video/shitake-imperial.mp4`,
    poster: "hero-shitake",
    post: `${IG}/reel/DdXPPNgRIJz/`,
  },
  empadinhas: {
    src: `${BASE}/video/producao-empadinhas.mp4`,
    poster: "experiencia-empadinhas",
    post: `${IG}/reel/DceloHvxFak/`,
  },
} as const satisfies Record<string, { src: string; poster: ImagemId; post: string }>;

export const LOGO = {
  padrao: `${BASE}/marca/logo.svg`,
  claro: `${BASE}/marca/logo-claro.svg`,
  folhas: `${BASE}/marca/folhas.svg`,
  /** Proporção largura/altura do logo completo (viewBox). */
  proporcao: 1537 / 1834,
} as const;
