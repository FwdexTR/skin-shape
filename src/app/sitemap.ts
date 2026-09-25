import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Página única: a home é o site inteiro. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
