"use client";

import { useEffect, useState } from "react";
import { useTransform, motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  // smooth progress (important)
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const dashOffset = useTransform(
    progress,
    [0, 1],
    [circumference, 0]
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.1, 1],
          }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          whileHover={{ y: -8, scale: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.3,
            scale: {
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            },
          }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            {/* background circle */}
            <circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              className="text-theme4/20"
              fill="transparent"
            />

            {/* animated progress */}
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-theme4"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: dashOffset }}
            />
          </svg>

          {/* inner button */}
          <div className="w-10 h-10 rounded-full bg-theme2 flex items-center justify-center shadow-lg">
            <IconArrowUp className="w-5 h-5 text-theme4" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;