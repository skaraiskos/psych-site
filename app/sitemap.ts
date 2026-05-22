import type { MetadataRoute } from "next";
import { findLatestPosts } from "~/utils/posts";

const SITE_URL = "https://stavroulamavrogonatou.gr";

const staticPages = [
  "",
  "/blog",
  "/services",
  "/about",
  "/contact",
  "/gordons",
  "/online-therapy",
  "/parenting",
  "/personal-therapy",
  "/practice"
];

type BlogPost = {
  slug: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await findLatestPosts({ page: 1, pageSize: 6 });

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.posts.map(
    (post: BlogPost) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
    })
  );

  return [...staticRoutes, ...blogRoutes];
}