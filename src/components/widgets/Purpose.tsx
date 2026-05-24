"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { PurposeProps } from "~/shared/types";
import Headline from "../common/Headline";

import {
  IconHeart,
  IconEye,
  IconShieldLock,
  IconFingerprint,
} from "@tabler/icons-react";

const getPolarPosition = (index: number, total: number, radius: number) => {
  const angle = (index / total) * (2 * Math.PI) - Math.PI / 2;

  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: "translate(-50%, -50%)",
  };
};

const pillars = [
  { title: "Αποδοχή", icon: IconEye, text:'Κάθε άνθρωπος αντιμετωπίζεται με σεβασμό και αποδοχή ως μοναδική προσωπικότητα.' },
  { title: "Εμπιστοσύνη", icon: IconShieldLock, text:'Δημιουργεί ένα ασφαλές πλαίσιο συνεργασίας και εξερεύνησης του εαυτού αλλά και της κατανόησης σκέψεων, συναισθημάτων και μοτίβων συμπεριφοράς.' },
  { title: "Ενσυναίσθηση", icon: IconHeart, text:'Η προσέγγιση βασίζεται στην κατανόηση της εμπειρίας του ατόμου μέσα από τη δική του οπτική, με σεβασμό και χωρίς κριτική διάθεση.' },
  { title: "Αυθεντικότητα", icon: IconFingerprint, text:'Η ουσιαστική υποστήριξη βασίζεται σε μια ανοιχτή και ειλικρινή επικοινωνία.' },
];

// radial positions (true circle)
const mobilePositions = [
  "top-[0%] left-1/2 -translate-x-1/2",        // top
  "top-[33%] right-[2%]",                      // upper right
  "bottom-[0%] left-1/2 -translate-x-1/2",    // bottom
  "top-[33%] left-[2%]",                       // upper left
];

// desktop offsets (1 & 3 down, 2 & 4 up)
const desktopOffsets = [20, -20, 20, -20];

const Purpose = ({ id, header }: PurposeProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && activeIndex !== null) {
          setIsLeaving(true);

          // delay reset so animation can play
          setTimeout(() => {
            setActiveIndex(null);
            setIsLeaving(false);
          }, 250);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeIndex]);

  const activeItem = activeIndex !== null ? pillars[activeIndex] : null;
  const ActiveIcon = activeItem?.icon;
  const ActiveTitle = activeItem?.title;
  const ActiveText = activeItem?.text;

  return (
    <section
      id={id}
      className="relative w-full bg-theme4 pt-20 pb-16 md:pb-24"
    >
      {/* TOP DIVIDER */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme2"
          viewBox="0 40 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C440,0 1080,140 1440,74 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* HEADER */}
      <div 
        className="max-w-6xl mx-auto px-6 text-center mb-4"
        onClick={() => setActiveIndex(null)}
      >
        <div
          className="pointer-events-none mb-6 mx-auto md:mb-12 text-center"
        >
          <h2 className="font-heading font-bold tracking-tight text-2xl md:text-3xl mb-10 text-white">
            Υποστήριξη για Εσάς και την Οικογένειά σας
          </h2>
          <p className="pointer-events-none mx-auto mt-4 max-w-5xl text-base text-white text-center">
            Στόχος μου είναι να δημιουργείται μια ασφαλής, ζεστή θεραπευτική βάση όπου κάθε άνθρωπος που δουλεύει μαζί μου θεραπευτικά να μπορεί να κατανοήσει σε βάθος τον εαυτό του και τις δυσκολίες που βιώνει. Να δώσει χώρο στα συναισθήματα και στις σκέψεις του να εκφραστούν και να επεξεργαστεί όσα τον επιβαρύνουν, αναπτύσσοντας πιο λειτουργικούς τρόπους σκέψης και διαχείρισης, ώστε να χτίσει μια πιο ουσιαστική σχέση με τον εαυτό του.
          </p>
          <p className="pointer-events-none mx-auto mt-4 max-w-5xl text-base text-white text-center">
            Μέσα από αυτή τη διαδικασία δίνεται η ευκαιρία να έρθει πιο κοντά στις ανάγκες, στα συναισθήματα και στις βαθύτερες επιθυμίες του, ενισχύοντας την εσωτερική του ηρεμία και τον τρόπο με τον οποίο σχετίζεται με τους ανθρώπους γύρω του, την οικογένεια και τις σημαντικές του σχέσεις. Παράλληλα, η επεξεργασία των προσωπικών εμπειριών και του παρελθόντος μπορεί, ανάλογα με τις ανάγκες και τον ρυθμό του κάθε ανθρώπου, να αποτελέσει πηγή γνώσης και κατανόησης για τον εαυτό του και τον τρόπο με τον οποίο βιώνει το παρόν.
          </p>
          <p className="pointer-events-none mx-auto mt-4 max-w-5xl text-base text-white text-center">
            Κορμός της θεραπευτικής μου προσέγγισης είναι η Γνωσιακή Συμπεριφορική Θεραπεία και τα εργαλεία της, τα οποία αξιοποιούνται με σεβασμό στις ανάγκες και τον προσωπικό ρυθμό κάθε ανθρώπου.
          </p>
        </div>
      </div>

      {/* ================= CIRCLES Component================= */}
      <div className="mt-10 relative">
        {/* MOBILE */}
        <motion.div
          ref={sectionRef}
          className="md:hidden w-full max-w-sm mx-auto flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 12,
          }}
          onClick={() => setActiveIndex(null)}
        >

          {/* CIRCLES */}
          <div className="flex justify-between items-start w-full px-2">
            {pillars.map(({ title, icon: Icon }, i) => {
              const isActive = activeIndex === i;
              const isDimmed = activeIndex !== null && activeIndex !== i;

              return (
                <motion.div
                  onClick={(e) => {
                    e.stopPropagation();

                    if (activeIndex === i) {
                      console.log('clicked same');
                      setActiveIndex(null);
                      return;
                    }
                    console.log('clicked other');
                    setIsSwitching(true);

                    setActiveIndex(i);

                    setTimeout(() => {
                      setIsSwitching(false);
                    }, 200);
                  }}
                  initial={{ y: -80, opacity: 0, transition: { delay: i * 0.12 }}}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18
                  }}
                  animate={{
                    scale: isActive ? 0.45 : 1,
                    opacity: isDimmed ? 0.3 : 1,
                  }}
                  className="
                    w-20 h-20
                    rounded-full
                    bg-theme6
                    flex flex-col items-center justify-center
                    shadow-lg shadow-[0_10px_30px_rgba(255,223,0,0.25)]
                  "
                >
                  <AnimatePresence mode="wait">
                    {!isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center"
                      >
                        {Icon && <Icon className="w-4 h-4 mb-1 text-theme4" />}
                        <p className="text-[10px] leading-tight font-medium text-gray-500 px-1">
                          {title}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER POPUP COMPONENT */}
          <div className="h-48 mt-6 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key='center'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: isLeaving ? 0 : 1,
                    opacity: isLeaving ? 0 : 1,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                >
                  <div className="
                    w-56 h-44 rounded-3xl shadow-xl justify-center text-center p-1
                    relative
                    bg-theme6
                    flex flex-col justify-center items-center
                    overflow-hidden
                    shadow-lg shadow-[0_0_20px_rgba(255,223,0,0.6)]
                    ">
                    {ActiveIcon && (
                      <ActiveIcon className="w-10 h-10 text-theme4 mb-2" />
                    )}
                    <p className="text-xs text-gray-500
                        px-1 text-center overflow-hidden mt-1 pointer-events-none">
                      {ActiveText}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* DESKTOP (row + offsets) */}
        <div className="hidden md:flex max-w-6xl mx-auto justify-between items-center px-6 mt-15">
          {pillars.map(({ title, icon: Icon, text }, i) => (
            <div key={i} className="flex-1 flex justify-center">
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                whileInView={{
                  y: desktopOffsets[i],
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  scale: 1.06,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 40,
                  },
                }}
                className="
                  group relative
                  w-40 h-40
                  hover:w-64
                  rounded-full hover:rounded-3xl
                  bg-theme6
                  flex flex-col justify-center items-center
                  overflow-hidden
                  shadow-lg shadow-[0_10px_30px_rgba(255,223,0,0.25)]
                  hover:shadow-[0_0_20px_rgba(255,223,0,0.6)]
                  transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                "
              >
                <div className="flex flex-col items-center justify-center w-full transition-all duration-300 ease-out">
                  {Icon && (
                    <Icon className="w-7 h-7 text-theme4 mb-2" />
                  )}

                  <p className="text-sm font-medium text-gray-500 px-2 pointer-events-none">
                    {title}
                  </p>
                </div>

                <p className="text-xs text-gray-500 opacity-0 max-h-0 
                    group-hover:opacity-100 group-hover:max-h-20 group-hover:delay-75
                    transition-[opacity,max-height,margin] duration-500 ease-out 
                    px-3 text-center overflow-hidden group-hover:mt-2 pointer-events-none">
                  {text}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* VERTICAL LINE */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[2px] h-24 md:h-32 bg-theme5 z-30" />
    </section>
  );
};

export default Purpose;