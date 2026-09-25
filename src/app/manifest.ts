import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skin Shape — Empório Funcional",
    short_name: "Skin Shape",
    description:
      "Empório funcional, café e bistrô no Centro de Campos dos Goytacazes (RJ).",
    start_url: "/",
    // "browser": o site não precisa se oferecer para instalar como app.
    display: "browser",
    background_color: "#f7f4ee",
    theme_color: "#1d4b4e",
    lang: "pt-BR",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
