import type { Metadata } from "next";

import BlogDesktop from "~/components/widgets/BlogDesktop";
import BlogMobile from "~/components/widgets/BlogMobile";

import { findLatestPosts } from "~/utils/posts";

export const metadata: Metadata = {
  title: "Άρθρα",
};

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams?.page || "1", 10);
  const pageSize = 6;

  const { posts, total } = await findLatestPosts({ page, pageSize });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <BlogDesktop
          posts={posts}
          currentPage={page}
          totalPages={totalPages}
        />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <BlogMobile
          posts={posts}
          currentPage={page}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}