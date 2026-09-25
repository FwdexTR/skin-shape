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
| Registro das fotos e vídeos (caminho, alt, post de origem) | `src/data/imagens.ts` |
| Design system (cores, tipografia, raios, sombras, movimento) | `src/app/globals.css` |
| Logo oficial (SVG), vídeo de ambiente e azulejo da fachada | `src/components/marca/`, `public/images/skin-shape/marca/` |
| Seções da página | `src/components/secoes/` |
| SEO: metadados, Schema.org, sitemap, robots, OG | `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.jpg` (modelo em `src/app/_og/og.html`) |

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

## Fotos, vídeos e logo

Todo o material visual é da própria Skin Shape, com uso autorizado
(confirmado em 25/09/2026):

- **Logo:** vetorizado em SVG (três cores) a partir do arquivo de 2048 px da
  página oficial no Facebook (facebook.com/skineshape). Versões em
  `public/images/skin-shape/marca/`: `logo.svg`, `logo-claro.svg` (fundo
  escuro) e `folhas.svg` (ícone e detalhes).
- **Fotos e vídeos:** publicações do Instagram @skinshape de março a setembro
  de 2026. Cada entrada de `src/data/imagens.ts` guarda o link do post de
  origem. Algumas são quadros tirados dos reels e outras foram recortadas para
  tirar a legenda escrita por cima da arte.
- **Vídeos** (`public/images/skin-shape/video/`): Shitake Imperial (hero) e
  produção de empadinhas (Experiência), sem áudio, H.264 com `faststart`.
  Pausam fora da tela e ficam parados com "reduzir movimento" ligado.

## Pendências (pedir à Skin Shape)

1. **Fotos em alta resolução.** As do Instagram chegam a 1440 px e os quadros
   de reel a 716 px. Fotos originais da câmera deixariam o hero e os cards mais
   nítidos em telas grandes.
2. **Domínio.** Defina `NEXT_PUBLIC_SITE_URL` na Vercel quando o domínio
   estiver apontado. Sem ele, canonical e sitemap usam o domínio de produção
   da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`).
3. **Confirmar "desde 2012".** Vem da data de abertura do CNPJ.
4. **Search Console e Bing Webmaster:** códigos de verificação em `layout.tsx`.
5. **Atualizar de tempos em tempos:** nota/quantidade de avaliações e número
   de seguidores (`src/lib/site.ts`), e os posts da seção Instagram.

## Movimento e acessibilidade

- Entradas e revelações ao rolar são CSS (`animation-timeline: view()`), sem
  JavaScript: o conteúdo nunca depende de script para aparecer.
- Com "reduzir movimento" ligado no sistema, nada se move (inclusive a faixa
  corrida e o carrossel).
- Menu mobile e FAQ usam Radix (foco preso, Esc, aria). As respostas do FAQ
  ficam no HTML mesmo fechadas, para os buscadores.
