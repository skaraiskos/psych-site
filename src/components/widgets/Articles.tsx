"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const formatShortDate = (date: string) => {
  const d = new Date(date);
  return {
    day: d.getDate(),
    month: d.toLocaleDateString("el-GR", { month: "short" }),
  };
};

const Articles = ({ posts = [] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".article-card");

    if (!card) return;

    const width = card.clientWidth + 24; // + gap

    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-theme2 py-24">

      {/* TOP DIVIDER */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme6"
          viewBox="0 20 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,44 C340,20 1280,80 1440,34 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/*bottom divider*/}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme6 rotate-180"
          style={{ overflow: "hidden" }}
          viewBox="0 30 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,120 980,0 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/*overlay wave*/}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 30 1440 120"
          className="w-full h-[30px] text-theme4"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C260,-40 720,120 980,85 C1160,70 1380,40 1440,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>
      
      {/* Wrapper (centered + max width) */}
      <div className="relative max-w-7xl mx-auto px-10 md:px-6">

        {/* Header */}
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Άρθρα</h2>
        </div>

        {/* Arrows (positioned relative to wrapper) */}
        <button
          onClick={() => scroll("left")}
          className="block absolute -left-0 md:left-2 2xl:-left-6 top-1/2 -translate-y-1/2 group p-4 opacity-50 hover:opacity-100 transition"
        >
          <div className="w-6 h-6 border-l-2 border-b-2 border-gray-500 rotate-45 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="block absolute -right-0 md:right-2 2xl:-right-6 top-1/2 -translate-y-1/2 group p-4 opacity-50 hover:opacity-100 transition"
        >
          <div className="w-6 h-6 border-r-2 border-t-2 border-gray-500 rotate-45 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
        </button>

        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-theme2 to-transparent" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-theme2 to-transparent" />
        
        {/* Slider */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth no-scrollbar
            snap-x snap-mandatory px-0 md:px-16
          "
        >
          {posts.map(({ slug, title, image, publishDate, excerpt }) => {
            const { day, month } = formatShortDate(publishDate);

            return (
              <div
                key={slug}
                className="
                  article-card
                  group flex-shrink-0
                  w-full md:w-[32%]
                  snap-center
                "
              >
                  {/* Card */}
                  <div className="overflow-hidden transition-all duration-300">
                    <Link href={`/blog/${slug}`} className="block">
                      {/* Image */}
                      <div className="relative h-[200px] overflow-hidden">

                        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                          {day} {month}
                        </div>

                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Title */}
                    <div className="p-4">
                      <h3 className="font-semibold text-base leading-snug line-clamp-2">
                        {title}
                      </h3>

                      {excerpt && (
                        <p className="text-base text-gray-600 line-clamp-3">
                          {excerpt}
                        </p>
                      )}
                    </div>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-block text-sm font-medium text-gray-500 hover:text-gray-800 hover:translate-x-1 transition-transform"
                    >
                      Read more..
                    </Link>

                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Articles;