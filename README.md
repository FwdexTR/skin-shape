# Skin Shape — Empório Funcional

Site institucional da Skin Shape (Campos dos Goytacazes, RJ).
Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui (Radix) · Motion · Lucide.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Onde fica cada coisa

| O quê | Arquivo |
| --- | --- |
| Endereço, WhatsApp, horários, redes, nota do Google | `src/lib/site.ts` |
| Textos: categorias, diferenciais, avaliações, FAQ, "um dia na loja" | `src/data/conteudo.ts` |
| Registro das fotos (caminho, alt, se é temporária) | `src/data/imagens.ts` |
| Design system (cores, tipografia, raios, sombras, movimento) | `src/app/globals.css` |
| Logo (redesenho provisório) e azulejo da fachada | `src/components/marca/` |
| Seções da página | `src/components/secoes/` |
| SEO: metadados, Schema.org, sitemap, robots, OG | `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.jpg` (gerador em `src/app/_og/gerar-og.tsx`) |

## De onde vieram os dados (pesquisa de 25/09/2026)

- **Perfil da Empresa no Google / Maps:** endereço, telefone (22) 99951-2483,
  horário (seg–sex 8h–20h, sáb 8h–13h), nota 5,0 com 12 avaliações, compra na
  loja, retirada e entrega, coordenadas.
- **Instagram @skinshape:** bio ("As melhores e mais saudáveis marcas pertinho
  de você!", "Mercado | Café & Bistrô"), 20,6 mil seguidores, destaques
  (Cafeteria, Saladas, Almoço, #NutriDicas, #novaSkinShape, Seja Skin Shape),
  posts de bolinhos sem açúcar/glúten/lactose.
- **Linktree oficial (linktr.ee/Skinshape1):** WhatsApp e link do iFood.
- **Facebook:** "A Maior e Mais Completa Loja de Nutrição Funcional da região",
  telefone fixo (22) 2725-1554 e e-mail skinshape@hotmail.com.
- **Cadastro do CNPJ:** Skin & Shape LTDA, 16.366.889/0001-65, aberto em 09/07/2012.

As avaliações exibidas são cópias literais das públicas no Google. Nada foi
inventado; o que não tinha fonte ficou de fora.

## Pendências (pedir à Skin Shape)

1. **Fotos reais.** Todas as fotos atuais são temporárias (Unsplash, licença
   livre). Para trocar, salve a foto real em `public/images/skin-shape/` com o
   mesmo caminho e marque `temporaria: false` em `src/data/imagens.ts`.
   A imagem de compartilhamento é `src/app/opengraph-image.jpg` (ver `src/app/_og/gerar-og.tsx`). As fotos do Instagram só
   entram com autorização da loja.
2. **Logo vetorial** (SVG/AI/PDF). O logo atual é um redesenho a partir do
   avatar do Instagram, com a fonte Kaushan Script (`src/components/marca/logo.tsx`).
3. **Domínio.** Defina `NEXT_PUBLIC_SITE_URL` na Vercel quando o domínio
   estiver apontado. Sem ele, canonical e sitemap usam o domínio de produção
   da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`).
4. **Confirmar "desde 2012".** Vem da data de abertura do CNPJ.
5. **Search Console e Bing Webmaster:** códigos de verificação em `layout.tsx`.
6. **Atualizar de tempos em tempos:** nota/quantidade de avaliações e número
   de seguidores (`src/lib/site.ts`).

## Fotos temporárias

`node scripts/fetch-placeholders.mjs` baixa e converte para WebP as fotos
temporárias que faltarem. Créditos em `src/data/imagens.ts`.

## Movimento e acessibilidade

- Entradas e revelações ao rolar são CSS (`animation-timeline: view()`), sem
  JavaScript: o conteúdo nunca depende de script para aparecer.
- Com "reduzir movimento" ligado no sistema, nada se move (inclusive a faixa
  corrida e o carrossel).
- Menu mobile e FAQ usam Radix (foco preso, Esc, aria). As respostas do FAQ
  ficam no HTML mesmo fechadas, para os buscadores.
