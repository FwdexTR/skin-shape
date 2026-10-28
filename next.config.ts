import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    // Esta máquina tem pouca memória livre: com um worker por núcleo o build
    // falha ao criar threads (os error 1450). Na Vercel, NEXT_BUILD_CPUS fica vazio.
    cpus: Number(process.env.NEXT_BUILD_CPUS) || undefined,
  },
  images: {
    // AVIF primeiro: nas fotos de comida costuma sair 30–40% menor que WebP.
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
  },
  /**
   * Site aposentado em 28/10/2026: a Skin Shape passou a usar o site com a nova
   * identidade em https://skinshape.com.br (projeto ../skin-shape2). Todo
   * endereço daqui redireciona para lá com 308 (permanente), para quem tiver o
   * link antigo e para o Google transferir a posição. O código fica como
   * arquivo; para reativar, apague este bloco.
   */
  async redirects() {
    return [{ source: "/:path*", destination: "https://skinshape.com.br/:path*", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
