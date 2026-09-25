// Baixa as fotos TEMPORÁRIAS do site (Unsplash, licença livre para uso
// comercial) e grava em public/images/skin-shape/ já em WebP.
//
// Elas existem só até a Skin Shape enviar as fotos reais da loja, do café e
// dos produtos. Para trocar: salve a foto real com o MESMO nome de arquivo
// (ou edite src/data/imagens.ts) e apague a entrada correspondente daqui.
//
// Uso: node scripts/fetch-placeholders.mjs   (pula o que já existe)

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DESTINO = path.resolve("public/images/skin-shape");

/** [arquivo, id da foto no CDN do Unsplash, largura final] */
const FOTOS = [
  ["hero/hero-principal.webp", "1760888548654-b75cced14d9d", 1400],
  ["hero/hero-cafe.webp", "1621135177072-57c9b6242e7a", 700],
  ["sobre/loja.webp", "1648045871892-190682e2e952", 1200],
  ["sobre/cafe.webp", "1633944241961-e511ab23455f", 1000],
  ["categorias/restricoes.webp", "1542990253-a781e04c0082", 1200],
  ["categorias/suplementos.webp", "1693996045300-521e9d08cabc", 1000],
  ["categorias/cafe.webp", "1529892485617-25f63cd7b1e9", 1000],
  ["categorias/bistro.webp", "1762631934518-f75e233413ca", 1200],
  ["categorias/doces.webp", "1645516957005-bb18e3ef6408", 1000],
  ["categorias/geladeira.webp", "1641494587136-eec74f1944ae", 1000],
  ["experiencia/manha.webp", "1497636577773-f1231844b336", 1000],
  ["experiencia/almoco.webp", "1646487793655-bbf280273d2f", 1000],
  ["experiencia/tarde.webp", "1657707232818-7181b3025dcb", 1000],
  ["experiencia/mesa.webp", "1730871080105-0da33ff7b3af", 1600],
  ["instagram/post-01.webp", "1464306208223-e0b4495a5553", 700],
  ["instagram/post-02.webp", "1543352634-a1c51d9f1fa7", 700],
  ["instagram/post-03.webp", "1512621776951-a57141f2eefd", 700],
  ["instagram/post-04.webp", "1601966915100-b217f1420977", 700],
  ["instagram/post-05.webp", "1657299156653-d3c0147ba3ee", 700],
  ["instagram/post-06.webp", "1769473357479-d94ce818dba7", 700],
  ["cta/sombra-folhas.webp", "1786840438026-e9162c47db74", 1800],
];

async function existe(arquivo) {
  try {
    await fs.access(arquivo);
    return true;
  } catch {
    return false;
  }
}

for (const [arquivo, id, largura] of FOTOS) {
  const alvo = path.join(DESTINO, arquivo);
  if (await existe(alvo)) {
    console.log("já existe ", arquivo);
    continue;
  }
  const url = `https://images.unsplash.com/photo-${id}?w=${largura * 2}&q=85&fm=jpg`;
  const resposta = await fetch(url);
  if (!resposta.ok) throw new Error(`${resposta.status} ao baixar ${url}`);
  const bruto = Buffer.from(await resposta.arrayBuffer());
  await fs.mkdir(path.dirname(alvo), { recursive: true });
  await sharp(bruto)
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(alvo);
  console.log("baixada  ", arquivo);
}
