import md from 'markdown-it';
import { ImageResponse } from "next/og";
import { findPostBySlug } from "~/utils/posts";
import { notFound } from 'next/navigation';


export const runtime = "nodejs";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const post = await findPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 60,
          background: "#f7f3ef",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.2,
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: "#444",
          }}
        >
          {post.description}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#777",
          }}
        >
          Σταυρούλα Μαυρογόνατου
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}