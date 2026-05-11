import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stavroulamavrogonatou.gr",
      lastModified: new Date(),
    },

    {
      url: "https://stavroulamavrogonatou.gr/blog",
      lastModified: new Date(),
    },
  ];
}