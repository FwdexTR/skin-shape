// Gerador da imagem de compartilhamento. Para refazer: copie este arquivo
// para src/app/opengraph-image.tsx, rode o build, baixe /opengraph-image,
// comprima (JPEG ~80, abaixo de 300 KB por causa do WhatsApp) e salve como
// src/app/opengraph-image.jpg. Depois apague a cópia .tsx.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/*
 * Imagem de compartilhamento (WhatsApp, Instagram, Facebook, Google).
 * Gerada no build a partir da mesma paleta e das mesmas fontes do site.
 * A foto é temporária, como todas as outras: trocar src/app/_og/foto.jpg
 * quando chegarem as fotos reais da loja.
 */

export const alt =
  "Skin Shape — Empório Funcional. Mercado, café e bistrô no Centro de Campos dos Goytacazes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function Image() {
  const pasta = join(process.cwd(), "src/app/_og");
  const [bricolage, kaushan, manrope, foto] = await Promise.all([
    readFile(join(pasta, "Bricolage-600.ttf")),
    readFile(join(pasta, "KaushanScript.ttf")),
    readFile(join(pasta, "Manrope-500.ttf")),
    readFile(join(pasta, "foto.jpg"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f7f4ee",
          color: "#181a19",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Kaushan",
                fontSize: 64,
                lineHeight: 1,
              }}
            >
              Skin Shape
            </div>
            <div
              style={{
                fontFamily: "Manrope",
                fontSize: 16,
                letterSpacing: 5,
                textTransform: "uppercase",
                marginTop: 10,
                color: "#3d4340",
              }}
            >
              Empório Funcional
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Bricolage",
                fontSize: 76,
                lineHeight: 0.98,
                letterSpacing: -2.5,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Comer bem ficou mais&nbsp;
              <span style={{ fontFamily: "Kaushan", color: "#1d4b4e" }}>perto.</span>
            </div>
            <div
              style={{
                fontFamily: "Manrope",
                fontSize: 24,
                marginTop: 28,
                color: "#3d4340",
              }}
            >
              Mercado, café e bistrô · Centro de Campos dos Goytacazes
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: 470, padding: "28px 28px 28px 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori (ImageResponse) só entende <img> */}
          <img
            src={`data:image/jpeg;base64,${foto}`}
            alt=""
            width={442}
            height={574}
            style={{
              objectFit: "cover",
              borderRadius: "140px 36px 36px 36px",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 600, style: "normal" },
        { name: "Kaushan", data: kaushan, weight: 400, style: "normal" },
        { name: "Manrope", data: manrope, weight: 500, style: "normal" },
      ],
    },
  );
}
