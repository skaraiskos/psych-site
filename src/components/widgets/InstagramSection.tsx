"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandInstagram } from "@tabler/icons-react";

import backgroundImg from "~/assets/images/instaBackground.jpg";
import psychLogo from "~/assets/images/psychLogo.png";

const InstagramSection = () => {
  return (
    <section className="relative w-full py-24 px-6">

      {/*top divider*/}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme2"
          viewBox="0 30 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,44 C240,120 980,0 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/*overlay wave*/}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 30 1440 120"
          className="w-full h-[30px] text-theme4 rotate-180"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C260,0 620,120 980,85 C1160,70 1380,40 1440,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/*bottom divider*/}
      <div className="absolute bottom-[-1px] left-0 w-full leading-none">
        <svg
          className="block w-full h-[90px] text-theme6 rotate-180"
          viewBox="0 30 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,120 980,0 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Background image */}
      <Image
        src={backgroundImg}
        alt="Instagram background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="max-w-7xl mx-auto text-center text-black">

        {/* header */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mt-2 pointer-events-none"
        >
          Συνδεθείτε μαζί μου στο Instagram
        </motion.h2>

        {/* logo button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://instagram.com/psych.agogoume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 transition"
          >
            <Image
              src={psychLogo}
              alt="Logo"
              className="w-36 object-contain"
            />
          </a>
        </motion.div>

        {/* text block */}
        <div className="mt-8 md:mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-none">

          {/* LEFT COLUMN */}
          <div className="space-y-8 text-sm leading-relaxed text-justify">

            <p>
              Το ΨυχΑγωγούμε είναι ένας χώρος αφιερωμένος στην οικογένεια.
              Δημιουργήθηκε για να προσφέρει συμβουλές και ερεθίσματα για σκέψη γύρω από τη γονεϊκότητα, ενισχύοντας τον προβληματισμό και εμπνέοντας τους γονείς να αναζητήσουν περαιτέρω γνώση και στήριξη, όταν το χρειάζονται.
            </p>

            <p>
              Παράλληλα, μέσα από το ΨυχΑγωγούμε ανακοινώνονται εργαστήρια και σεμινάρια για γονείς, ενώ μοιράζομαι σκέψεις και εμπειρίες απο την καθημερινότητα μου ως ψυχολόγος.
            </p>

          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* title */}
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-6 md:text-left">
              Τι σημαίνει ΨυχΑγωγούμε;
            </h3>

            {/* list */}
            <ul className="space-y-6 text-sm text-left text-black/80 leading-relaxed">

              <li className="flex gap-4">
                <span className="font-semibold text-black min-w-[70px]">
                  Ψυχή
                </span>

                <span>
                  κάθε άνθρωπος κουβαλά έναν εσωτερικό κόσμο γεμάτο σκέψεις,
                  συναισθήματα και εμπειρίες που αξίζουν φροντίδα.
                </span>
              </li>

              <li className="flex gap-4">
                <span className="font-semibold text-black min-w-[70px]">
                  Αγωγή
                </span>

                <span>
                  η ανατροφή των παιδιών ξεκινά πρώτα από τη δική μας προσωπική
                  ανάπτυξη και αυτογνωσία.
                </span>
              </li>

            </ul>

          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://instagram.com/psych.agogoume"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
            }}
          >
            <IconBrandInstagram className="w-5 h-5" />
            Ακολούθησέ με
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;