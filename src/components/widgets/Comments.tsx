"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CommentFormWrapper from '../common/CommentFormWrapper';

/* ---------------- TYPES ---------------- */

type Direction = number;

type VariantProps = {
  direction: Direction;
};

/* ---------------- DATA ---------------- */

const commentsData = [
  {
    text: "Η Σταυρούλα με τις γνώσεις της και την σιγουριά της μας βοηθά να κατανοήσουμε όσα μας απασχολούν σχετικά με τις δυσκολίες που αντιμετωπίζει ο γιος μας μετά την διάγνωση που πήρε απο τον παιδοψυχίατρο.\
            Το σημαντικότερο για μένα είναι οτι δεν με  κάνει ποτέ να νιώθω οτι κρίνομαι ως γονέας και με βοηθά να διαχειρίζομαι και τα δικά μου συναισθήματα.\
            Νιώθω ότι έχουμε πραγματική στήριξη σε αυτή τη δύσκολη περίοδο.",
    author: "Γ. και Ι."
  },
  {
    text: "Η εμπειρία του εργαστηρίου του αποτελεσματικού γονέα, ήταν από τις ωραιότερες της ζωής μου ως γονέας.\
          Σταυρούλα μου είσαι εξαιρετική σε αυτό που κάνεις και εύχομαι να παρακολουθήσουν κι άλλοι γονείς,\
          γιατί ίσως μέσα από τις γνώσεις και τον τρόπο που τις μεταδίδεις κάνουμε λίγο καλύτερο τον κόσμο για τα παιδάκια μας..",
    author: "Μαρ."
  },
  {
    text: "Συμμετείχα στο online εργαστήριο του αποτελεσματικού γονέα.\
          Το εργαστήριο είναι ένα πολυ σημαντικό εφόδιο, που με βοήθησε να επικοινωνήσω καλύτερα με το παιδί μου, μου έδωσε εργαλεία για να χειρίζομαι απαιτητικές καταστάσεις και τελικά να έχουμε μια πιο ήρεμη καθημερινότητα.\
          Η Σταυρούλα ήταν εξαιρετική, υποστηρικτική καθόλη τη διάρκεια των εβδομάδων.",
    author: "Χριστίνα Μ."
  },
  {
    text: "Η κόρη μου οταν ήταν να παει 1η δημοτικού  ειχε διάγνωση απο το κεδασυ να παει σε ειδικο σχολειο, πηρα την αποφαση να παει σε τυπικο κ σ αυτη την αποφαση ο θεος μας εστειλε τη Σταυρούλα....\
            Ανέλαβε τη Λυδία μέχρι την Τετάρτη δημοτικού.\
            Χαρη στη Σταυρούλα η κόρη μου εντάχθηκε σε ενα σχολείο 400 παιδιών κ την αγκάλιασαν όλοι οι μαθητές\
            Σταυρούλα εισαι παράδειγμα για όλους τους συναδέλφους σου\
            Εγω  απλά σε ευχαριστώ για το ήθος κ την αγαπη σου.\
            Τα παιδιά μας τα βλέπεις στις ψυχές τους",
    author: "Αναστασία Κ."
  },
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
} as const;

const variants = {
  enter: (direction: Direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const swipeConfidenceThreshold: number = 50;
const swipePower = (offset: number, velocity: number): number => {
  return Math.abs(offset) * velocity;
};

const Comments = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const next =
        (prevIndex + newDirection + commentsData.length) %
        commentsData.length;

      return [next, newDirection];
    });
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
            d="M0,0 C60,120 420,80 780,35 C1060,0 1280,20 1440,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/*Title for COmments*/}
      <h2 className="text-3xl w-full max-w-7xl font-semibold mt-10 text-black mx-auto text-center md:text-left">
        Σχόλια
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">

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
          <div className="relative w-[90%] md:w-full max-w-3xl h-[800px] md:h-[380px] flex items-center justify-center overflow-hidden">

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
                className="absolute w-full flex justify-center px-6"
              >
                {/* CONTENT BLOCK */}
                <div className="relative max-w-2xl text-center py-12">

                  {/* Top-left quote */}
                  <span className="absolute top-0 -left-2 md:-left-6 text-[80px] md:text-[120px] leading-none text-gray-500 pointer-events-none">
                    “
                  </span>

                  {/* Bottom-right quote */}
                  <span className="absolute -bottom-8 -right-2 md:-right-6 text-[80px] md:text-[120px] leading-none text-gray-500 pointer-events-none">
                    ”
                  </span>

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