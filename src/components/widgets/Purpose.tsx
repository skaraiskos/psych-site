"use client";

import { motion } from "framer-motion";
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
  { title: "Ενσυναίσθηση", icon: IconHeart, text:'Η προσέγγιση βασίζεται στην κατανόηση της εμπειρίας του ατόμου μέσα από τη δική του οπτική, με αναγνώριση του συναισθήματός του και χωρίς κριτική διάθεση.' },
  { title: "Αποδοχή", icon: IconEye, text:'Κάθε άνθρωπος αντιμετωπίζεται με σεβασμό ως μοναδική προσωπικότητα, νιώθει αποδεκτός, ασφαλής και προστατευμένος.' },
  { title: "Εμπιστοσύνη", icon: IconShieldLock, text:'Επιτρέπει τη δημιουργία ενός ασφαλούς πλαισίου συνεργασίας και εξερεύνησης του εαυτού αλλά και των σχεσιακών μοτίβων του θεραπευόμενου.' },
  { title: "Αυθεντικότητα", icon: IconFingerprint, text:'Η θεραπευτική στάση στηρίζεται στην αυθεντικότητα και την ειλικρίνεια, καθώς η ουσιαστική υποστήριξη προϋποθέτει καθαρή και αληθινή επικοινωνία.' },
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
const mobileRotations = [8, 4, 10, 14];


const Purpose = ({ id, header }: PurposeProps) => {
  return (
    <section
      id={id}
      className="relative w-full bg-theme4 pt-20 pb-24"
    >
      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
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
      <div className="max-w-6xl mx-auto px-6 text-center">
        {header && (
          <Headline
            header={header}
            titleClass="text-2xl md:text-3xl mb-10 text-white"
            subtitleClass="text-base text-white"
          />
        )}
      </div>

      {/* ================= CIRCLES ================= */}
      <div className="mt-10 relative">

        {/* MOBILE (radial) */}
        <motion.div
          className="relative md:hidden h-[350px] w-full max-w-sm mx-auto"
          initial={{ rotate: -8, opacity: 0 }}
          whileInView={{ rotate: -8, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 12,
          }}
        >
          {pillars.map(({ title, icon: Icon }, i) => {
            const pos = getPolarPosition(i, pillars.length, 40); // 40% radius

            return (
              <div
                key={i}
                className={twMerge(
                  "absolute flex items-center justify-center",
                  mobilePositions[i]
                )}
              >
                <motion.div
                  initial={{ y: -80, opacity: 0, rotate: 0 }}
                  whileInView={{ y: 0, opacity: 1, rotate: mobileRotations[i] }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: i * 0.12, // 👈 stagger here
                  }}
                  className="w-28 h-28 rounded-full bg-theme6 flex flex-col items-center justify-center text-center shadow-lg shadow-[0_10px_30px_rgba(255,223,0,0.25)]"
                >
                  {Icon && (
                    <Icon className="w-6 h-6 mb-1 text-theme4" />
                  )}
                  <p className="text-xs font-medium text-theme4 px-2">
                    {title}
                  </p>
                </motion.div>
              </div>
              );
          })}
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
                  bg-yellow-300
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

                  <p className="text-sm font-medium text-theme4 px-2 pointer-events-none">
                    {title}
                  </p>
                </div>

                <p className="text-xs text-theme4 opacity-0 max-h-0 
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