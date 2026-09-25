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
      "Comida prática e nutritiva, para comer na loja ou pedir pelo telefone.",
    itens: ["Almoço", "Saladas"],
    imagem: "categoria-bistro",
    fonte: "Destaques 'Almoço' e 'Saladas' do Instagram",
  },
  {
    id: "cafe",
    titulo: "Cafeteria",
    resumo: "O café abre junto com a loja, às 8h, de segunda a sábado.",
    itens: ["Cafés", "Doces funcionais"],
    imagem: "categoria-cafe",
    fonte: "Bio do Instagram (Café & Bistrô) e horário do Google",
  },
  {
    id: "suplementos",
    titulo: "Suplementos e vitaminas",
    resumo:
      "Suplementos e soluções para uma rotina de treino e de saúde mais equilibrada.",
    itens: ["Proteínas", "Vitaminas", "Suplementos"],
    imagem: "categoria-suplementos",
    fonte: "Descrição da loja e categoria no Google",
  },
  {
    id: "doces",
    titulo: "Doces funcionais",
    resumo:
      "Bolinhos sem açúcar, sem glúten e sem lactose, para a vontade de doce não virar culpa.",
    itens: ["Bolinhos", "Bolos", "Tortas"],
    imagem: "categoria-doces",
    fonte: "Post do Instagram de 19/08/2026",
  },
  {
    id: "geladeira",
    titulo: "Iogurtes e refrigerados",
    resumo: "Uma geladeira inteira de iogurtes e opções refrigeradas para o dia a dia.",
    itens: ["Iogurtes", "Refrigerados", "Bebidas"],
    imagem: "categoria-geladeira",
    fonte: "Vídeo da loja no Instagram (28/08/2026)",
  },
];

export type Diferencial = {
  icone: "variedade" | "atendimento" | "entrega" | "qualidade" | "cafe";
  titulo: string;
  texto: string;
};

/** Cada diferencial repete algo que os próprios clientes escreveram no Google. */
export const DIFERENCIAIS: Diferencial[] = [
  {
    icone: "variedade",
    titulo: "Para cada restrição",
    texto: "Sem glúten, sem lactose, zero açúcar e veganos na mesma prateleira.",
  },
  {
    icone: "qualidade",
    titulo: "Marcas selecionadas",
    texto: "Produtos de qualidade e muita variedade para uma vida saudável.",
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
      "A porta abre às oito. Dá tempo de um café sem pressa antes de começar o dia.",
    imagem: "experiencia-manha",
  },
  {
    hora: "12h",
    titulo: "Almoço de verdade",
    texto:
      "Uma salada ou um prato quente, na mesa da loja ou pedido por telefone.",
    imagem: "experiencia-almoco",
  },
  {
    hora: "até 20h",
    titulo: "As compras da semana",
    texto:
      "Na volta para casa, o que faltou na despensa: do zero açúcar ao suplemento do treino.",
    imagem: "experiencia-tarde",
  },
];

export type PostInstagram = {
  imagem: ImagemId;
  /** Nome de um destaque ou hashtag real do perfil. */
  tema: string;
};

/** Temas tirados dos destaques e hashtags fixas do @skinshape. */
export const POSTS_INSTAGRAM: PostInstagram[] = [
  { imagem: "instagram-01", tema: "Cafeteria" },
  { imagem: "instagram-02", tema: "Saladas" },
  { imagem: "instagram-03", tema: "Almoço" },
  { imagem: "instagram-04", tema: "#NutriDicas" },
  { imagem: "instagram-05", tema: "Seja Skin Shape" },
  { imagem: "instagram-06", tema: "#novaSkinShape" },
];

export const PERGUNTAS = [
  {
    pergunta: "A Skin Shape tem produtos sem glúten e sem lactose?",
    resposta:
      "Tem, e é uma das especialidades da loja: produtos sem glúten, sem lactose, zero açúcar e veganos, além de bolinhos funcionais feitos sem açúcar, glúten e lactose.",
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
      "Dá. Além do mercado, a Skin Shape tem café e bistrô, com almoço e saladas durante a semana.",
  },
];
