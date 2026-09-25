import type { ImagemId } from "./imagens";

/**
 * Textos do site. Cada afirmação tem lastro numa fonte pública; a fonte está
 * anotada ao lado para quem for revisar ou atualizar.
 */

export type Categoria = {
  id: string;
  titulo: string;
  resumo: string;
  itens: string[];
  imagem: ImagemId;
  /** De onde veio a informação. */
  fonte: string;
};

export const CATEGORIAS: Categoria[] = [
  {
    id: "restricoes",
    titulo: "Sem glúten, sem lactose, zero açúcar",
    resumo:
      "Quem tem restrição alimentar encontra de tudo aqui, sem precisar abrir mão do sabor.",
    itens: ["Sem glúten", "Sem lactose", "Zero açúcar", "Veganos"],
    imagem: "categoria-restricoes",
    fonte: "Avaliações no Google e posts do Instagram",
  },
  {
    id: "bistro",
    titulo: "Bistrô: almoço e saladas",
    resumo:
      "Pratos executivos, saladas e massas com baixíssimas calorias, de uma cozinha toda sem glúten e sem lactose.",
    itens: ["Pratos executivos", "Saladas", "Massas", "Pizza e coxinha"],
    imagem: "categoria-bistro",
    fonte: "Posts do Instagram de 14/09 e 23/09/2026",
  },
  {
    id: "cafe",
    titulo: "Cafeteria",
    resumo:
      "Cafezinho orgânico e crepioca feita na hora, tudo livre de glúten, lactose e açúcar.",
    itens: ["Café orgânico", "Crepioca", "Lanches"],
    imagem: "categoria-cafe",
    fonte: "Post do Instagram de 09/09/2026",
  },
  {
    id: "suplementos",
    titulo: "Suplementos e vitaminas",
    resumo:
      "Das melhores marcas, inclusive em sachês para levar na bolsa quando você viaja.",
    itens: ["Proteínas", "Vitaminas", "Sachês"],
    imagem: "categoria-suplementos",
    fonte: "Reel do Instagram de 28/08/2026",
  },
  {
    id: "doces",
    titulo: "Doces funcionais",
    resumo:
      "Dieta e restrição alimentar não precisam ser sinônimo de abandonar os docinhos.",
    itens: ["Bolos", "Docinhos", "Empadinhas"],
    imagem: "categoria-doces",
    fonte: "Reel de 04/09/2026 e post de 25/09/2026",
  },
  {
    id: "geladeira",
    titulo: "Iogurtes e refrigerados",
    resumo: "Geladeiras de iogurtes, bebidas e refeições prontas para não fugir da dieta.",
    itens: ["Iogurtes", "Bebidas", "Refeições prontas"],
    imagem: "categoria-geladeira",
    fonte: "Vídeo da loja no Instagram (28/08/2026)",
  },
];

export type Diferencial = {
  icone: "variedade" | "atendimento" | "entrega" | "qualidade" | "cafe";
  titulo: string;
  texto: string;
};

/** Tirados das avaliações do Google e das legendas do próprio Instagram. */
export const DIFERENCIAIS: Diferencial[] = [
  {
    icone: "variedade",
    titulo: "Cozinha sem glúten e sem lactose",
    texto: "Toda a cozinha da loja: do almoço executivo às empadinhas feitas ali mesmo.",
  },
  {
    icone: "qualidade",
    titulo: "Para cada restrição",
    texto: "As melhores marcas sem glúten, sem lactose, zero açúcar e veganas na mesma prateleira.",
  },
  {
    icone: "atendimento",
    titulo: "Atendimento de perto",
    texto: "Equipe simpática, atenciosa e sempre disposta a ajudar.",
  },
  {
    icone: "entrega",
    titulo: "Entrega e retirada",
    texto: "Compre na loja, retire no balcão ou receba em casa pelo iFood.",
  },
  {
    icone: "cafe",
    titulo: "Mercado, café e bistrô",
    texto: "Faça as compras, tome um café e almoce sem trocar de endereço.",
  },
];

export type Avaliacao = {
  autor: string | null;
  quando: string;
  texto: string;
};

/**
 * Avaliações públicas no Google (5 estrelas), copiadas sem edição em
 * 25/09/2026. O Google só mostra datas relativas ("7 meses atrás"), por isso
 * aqui fica apenas o ano.
 */
export const AVALIACOES: Avaliacao[] = [
  {
    autor: "Jéssica Sanguedo",
    quando: "2026",
    texto:
      "Melhor loja de produtos saudáveis da cidade. Tem tudo pra quem tem restrição alimentar: produtos sem lactose, sem gluten, veganos… tudo tem!",
  },
  {
    autor: "Gizelle Fernandes",
    quando: "2026",
    texto:
      "Loja com produtos de excelente qualidade e muita variedade para uma vida saudável Atendimento nota 10! Entrega super rápida",
  },
  {
    autor: "Emely Oliveira",
    quando: "2026",
    texto:
      "Atendimento excelente! Equipe simpática, atenciosa e sempre disposta a ajudar. Faz toda a diferença e com certeza voltarei mais vezes!",
  },
  {
    // Trecho que o Google destaca no resumo das avaliações; o autor não
    // aparece no resumo, então não é atribuído a ninguém.
    autor: null,
    quando: "destaque do Google",
    texto: "Muitos produtos Zero açúcar, zero lactose e zero glúten!",
  },
];

export type MomentoDoDia = {
  hora: string;
  titulo: string;
  texto: string;
  imagem: ImagemId;
};

/** Um dia na loja, amarrado ao horário real de funcionamento. */
export const MOMENTOS: MomentoDoDia[] = [
  {
    hora: "08h",
    titulo: "O primeiro café",
    texto:
      "A porta abre às oito: café orgânico, crepioca feita na hora e um bolo sem açúcar.",
    imagem: "experiencia-manha",
  },
  {
    hora: "12h",
    titulo: "Almoço de verdade",
    texto:
      "Prato executivo, salada da casa ou massa sem glúten. Na mesa da loja ou para levar.",
    imagem: "experiencia-almoco",
  },
  {
    hora: "até 20h",
    titulo: "As compras da semana",
    texto:
      "Na volta para casa, a reposição do que falta na despensa, do zero açúcar ao suplemento.",
    imagem: "experiencia-tarde",
  },
];

export type PostInstagram = {
  /** A imagem guarda também o link da publicação (IMAGENS[id].post). */
  imagem: ImagemId;
  /** Resumo curto do post, tirado da própria legenda. */
  tema: string;
};

/** Publicações reais do @skinshape (setembro de 2026). */
export const POSTS_INSTAGRAM: PostInstagram[] = [
  { imagem: "instagram-01", tema: "Doce sem culpa" },
  { imagem: "instagram-02", tema: "Mitos da comida saudável" },
  { imagem: "instagram-03", tema: "Almoço do dia" },
  { imagem: "instagram-04", tema: "Shitake Imperial" },
  { imagem: "instagram-05", tema: "Tenente Coronel Cardoso, 765" },
  { imagem: "instagram-06", tema: "Docinhos sem açúcar" },
];

export const PERGUNTAS = [
  {
    pergunta: "A Skin Shape tem produtos sem glúten e sem lactose?",
    resposta:
      "Tem, e é a especialidade da casa: produtos sem glúten, sem lactose, zero açúcar e veganos no empório, e uma cozinha inteira sem glúten e sem lactose no bistrô.",
  },
  {
    pergunta: "Qual é o horário de funcionamento?",
    resposta:
      "De segunda a sexta, das 8h às 20h. Aos sábados, das 8h às 13h. Aos domingos a loja fica fechada.",
  },
  {
    pergunta: "Onde fica a loja?",
    resposta:
      "Na Rua Tenente Coronel Cardoso, 765, Loja 1, no Centro de Campos dos Goytacazes (RJ), CEP 28035-042.",
  },
  {
    pergunta: "Vocês fazem entrega?",
    resposta:
      "Sim. Dá para comprar na loja, retirar no balcão ou pedir pelo iFood. Pelo WhatsApp a equipe tira dúvidas sobre produtos e pedidos.",
  },
  {
    pergunta: "Dá para almoçar ou tomar café na Skin Shape?",
    resposta:
      "Dá. O café serve café orgânico e crepioca feita na hora, e o almoço tem pratos executivos, saladas e massas, tudo sem glúten e sem lactose.",
  },
];
