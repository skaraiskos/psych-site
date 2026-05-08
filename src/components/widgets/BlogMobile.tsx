"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  IconDots,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhoneFilled,
  IconMailFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";

/* ---------------- TYPES ---------------- */

type IconType = ComponentType<{ className?: string }>;

type SocialItem = {
  label: string;
  icon: IconType;
  href: string;
};

type LinkItem = {
  label: string;
  icon: IconType;
  text: string;
};

type Post = {
  slug: string;
  title: string;
  image: StaticImageData | string;
  publishDate?: string;
  excerpt?: string;
};

type Props = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
};

/* ---------------- DATA ---------------- */

const content = {
  socials: [
    { label: "Instagram", icon: IconBrandInstagram, href: "#" },
    { label: "Facebook", icon: IconBrandFacebook, href: "#" },
  ] as SocialItem[],
  links1: [
    { label: "Διεύθυνση", icon: IconMapPinFilled, text: "Γλυκά Νερά, Αθήνα" },
    { label: "Email", icon: IconMailFilled, text: "mavrogonatoupsych@gmail.com" },
    { label: "Τηλέφωνο", icon: IconPhoneFilled, text: "6971737100" },
  ] as LinkItem[],
};

/* ---------------- HELPERS ---------------- */

const formatShortDate = (date: string) => {
  const d = new Date(date);
  return {
    day: d.getDate(),
    month: d.toLocaleDateString("el-GR", { month: "short" }),
  };
};

export default function BlogMobile({ posts, currentPage, totalPages }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative px-6 py-10">

      {/* TOGGLE BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed right-0 top-[30%] z-[60] md:hidden
            w-[50px] h-[50px]
            flex items-center justify-center
            bg-white text-black
            border border-black border-r-0
            rounded-l-[35px]
            shadow-md
            transition-all duration-200
          "
        >
          <IconDots className="w-5 h-5" />
        </button>
      )}

      {/* POSTS (always visible) */}
      <div className="flex flex-col gap-6">
        {posts.map(({ slug, title, image, publishDate, excerpt }) => (
          <div
            key={slug}
            className="group flex flex-col md:flex-row overflow-hidden mb-8"
          >

            {/* Image (clickable only) */}
            <Link href={`/blog/${slug}`} className="block">
              <div className="relative overflow-hidden md:w-[340px] md:min-w-[320px] h-[220px]">

                {/* Date badge */}
                {publishDate && (() => {
                  const { day, month } = formatShortDate(publishDate);
                  return (
                    <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur px-2 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                      {day} {month}
                    </div>
                  );
                })()}

                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Content (NOT clickable) */}
            <div className="p-4 md:mx-4 flex flex-col justify-between gap-3 w-full">

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg md:text-xl leading-snug line-clamp-2">
                  {title}
                </h2>

                {excerpt && (
                  <p className="text-base text-gray-600 line-clamp-3">
                    {excerpt}
                  </p>
                )}
              </div>

              {/* Read more (desktop only) */}
              <Link
                href={`/blog/${slug}`}
                className="inline-block text-sm font-medium text-gray-500 hover:text-gray-800 hover:translate-x-1 transition-transform"
              >
                Read more..
              </Link>

            </div>
          </div>
        ))}

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;

            return (
              <Link
                key={page}
                href={`/blog?page=${page}`}
                className={`px-3 py-1 text-sm border ${
                  currentPage === page
                    ? "bg-theme4 text-white border-theme4"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            );
          })}
        </div>
      </div>

      {/* DRAWER */}
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-white shadow-xl z-[60] overflow-y-auto border-l border-theme4 md:hidden"
        >
          {/* Close button */}
          <div className="sticky top-0 bg-theme4 z-10 p-4 border-b">
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-white"
            >
              Κλείσιμο ✕
            </button>
          </div>

          {/* Socials */}
          <div className="p-4">
            <h3 className="text-gray-500 font-semibold mb-3 relative inline-block">
              Socials
              <span className="block w-12 h-[2px] bg-gray-400 mt-1"></span>
            </h3>
            <div className="col-span-4 mt-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
              <ul className="mb-4 -ml-2 rtl:ml-0 rtl:-mr-2 flex md:order-1 md:mb-0">
                {content.socials.map(({ label, icon: Icon, href }, index) => (
                  <li key={`item-social-${index}`}>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm"
                      aria-label={label}
                      href={href}
                    >
                      {Icon && <Icon className="h-7 w-7 text-gray-400 hover:text-theme4 transition transform duration-200 hover:scale-110"/>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*Recent Posts*/}
          <div className="p-4">
            <h3 className="text-gray-500 font-semibold mb-3 relative inline-block">
              Προσφατα Άρθρα
              <span className="block w-12 h-[2px] bg-gray-400 mt-1"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {posts.slice(0, 5).map(({ slug, title, image, publishDate }) => (
                <div
                  key={slug}
                  className="flex gap-4 items-stretch overflow-hidden border-b border-gray-200 pb-3 hover:border-gray-400 transition-colors"
                >
                  <Link href={`/blog/${slug}`} className="flex w-full mb-1">

                    {/* Image */}
                    <div className="relative w-[80px] h-[80px] flex-shrink-0">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between p-3 w-full">
                      <h2 className="font-semibold text-sm leading-snug line-clamp-2">
                        {title}
                      </h2>

                      <p className="text-sm text-gray-500 mt-2">
                        {publishDate}
                      </p>
                    </div>

                  </Link>
                </div>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="p-4">
            <h3 className="text-gray-500 font-semibold mb-3 relative inline-block">
              Επικοινωνία
              <span className="block w-12 h-[2px] bg-gray-400 mt-1"></span>
            </h3>
            <div className="flex flex-col justify-start">
              {content.links1.map((s, i) => (
                <div key={i} className="flex items-center space-x-2 mt-1">
                  {s.icon && <s.icon className="h-3 w-3" />}
                  <span className="text-gray-700 text-sm">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </section>
  );
}