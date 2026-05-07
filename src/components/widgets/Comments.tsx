"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CommentFormWrapper from '../common/CommentFormWrapper';

const commentsData = [
  {
    text: "Αυτή είναι μια πολύ όμορφη εμπειρία που αξίζει να μοιραστεί κανείς. Με βοήθησε πραγματικά να δω τα πράγματα διαφορετικά. Εξαιρετική προσέγγιση και πολύ ανθρώπινη.",
    author: "Μαρία Π."
  },
  {
    text: "Με βοήθησε πραγματικά να δω τα πράγματα διαφορετικά.",
    author: "Γιώργος Κ."
  },
  {
    text: "Εξαιρετική προσέγγιση και πολύ ανθρώπινη.",
    author: "Ελένη Σ."
  }
];
const formData = {
  title: 'Αφήστε ένα σχόλιο',
  inputs: [
    {
      type: 'text',
      name: 'name',
      autocomplete: 'off',
      placeholder: 'Όνοματεπώνυμο',
    },
    {
      type: 'email',
      name: 'mail',
      autocomplete: 'on',
      placeholder: 'mail',
    },
  ],
  textarea: {
    cols: 30,
    rows: 5,
    name: 'textarea',
    placeholder: 'Το σχόλιό σας',
  },
  btn: {
    title: 'Υποβολή',
    type: 'submit',
  },
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 50;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Comments = () => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prev]) => {
      const next = (prev + newDirection + commentsData.length) % commentsData.length;
      return [next, newDirection];
    });
  };

  const prev = () => {
    setIndex((i) => (i === 0 ? commentsData.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i + 1) % commentsData.length);
  };

  return (
    <section className="relative w-full bg-theme6 py-5 px-6">

      {/*bottom divider*/}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[40px] text-theme2 rotate-180"
          viewBox="0 10 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,90 C240,20 980,120 1440,24 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      {/*overlay wave*/}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 10 1440 120"
          className="w-full h-[30px] text-theme4"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C60,120 620,100 880,85 C1060,70 1280,20 1440,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">

        {/* LEFT — COMMENTS */}
        <div className="relative flex items-center md:mx-5 justify-center">

          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="absolute -left-4 md:-left-12 group p-4 opacity-50 hover:opacity-100 transition"
          >
            <div className="w-6 h-6 border-l-2 border-b-2 border-gray-500 rotate-45 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="absolute -right-4 md:-right-12 group p-4 opacity-50 hover:opacity-100 transition"
          >
            <div className="w-6 h-6 border-r-2 border-t-2 border-gray-500 rotate-45 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
          </button>

          {/* Comment Area */}
          <div className="relative w-[90%] md:w-full max-w-3xl h-[260px] md:h-[280px] px-0 py-12 md:py-20">

            {/* Top-left quote */}
            <span className="absolute top-4 left-2 md:top-0 md:-left-4 text-[80px] md:text-[140px] leading-none text-gray-500 select-none pointer-events-none">
              “
            </span>

            {/* Bottom-right quote */}
            <span className="absolute bottom-4 right-2 md:-bottom-6 md:-right-4 text-[80px] md:text-[140px] leading-none text-gray-500 select-none pointer-events-none">
              ”
            </span>

            {/* Animated Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                
                {/* Motion layer (ONLY this moves) */}
              <div className="relative w-full max-w-2xl h-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 260, damping: 28 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset }) => {
                      if (offset.x < -80) paginate(1);
                      else if (offset.x > 80) paginate(-1);
                    }}
                    
                    className="absolute inset-0 flex items-center justify-center text-center px-6"
                  >
                    <div className="max-w-2xl">
                      <p className="text-base italic leading-relaxed text-text mb-6">
                        {commentsData[index].text}
                      </p>

                      <p className="text-sm text-gray-500">
                        — {commentsData[index].author}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <CommentFormWrapper
          {...formData}
          containerClass="bg-white rounded-3xl p-6 mb-10 w-full max-w-md mx-auto"
          titleClass="text-lg font-semibold mb-4 text-gray-700"
          buttonClass="mt-2 w-fit mx-auto px-6 py-2.5 bg-theme7 text-white rounded-3xl transition-transform duration-300 hover:scale-105"
          btnPosition="center"
        />

      </div>
    </section>
  );
};

export default Comments;