"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from 'next/image';

import therapyImg0 from '~/assets/images/effectiveParenting0.png';
import therapyImg from '~/assets/images/effectiveParenting.jpg';
import therapyImg1 from '~/assets/images/effectiveParenting1.jpg';
import therapyImg2 from '~/assets/images/effectiveParenting2.jpg';
import therapyImg3 from '~/assets/images/effectiveParenting3.jpg';
import therapyImg4 from '~/assets/images/effectiveParenting4.jpg';
import therapyImg5 from '~/assets/images/effectiveParenting5.jpg';

const data = {
    title: 'Τι είναι το Εργαστήριο Αποτελεσματικού Γονέα;',
    imageFirst: [{src:therapyImg0, duration: 3000}],
    images: [
      {src:therapyImg, duration: 3000},
      {src:therapyImg1, duration: 2000},
      {src:therapyImg2, duration: 2000},
      //{src:therapyImg3, duration: 2000},
      //{src:therapyImg4, duration: 2000},
      {src:therapyImg5, duration: 2000}
    ],
    descriptionTop: 'Το ΕΑΓ είναι ένα βιωματικό, ψυχοεκπαιδευτικό εργαστήριο για γονείς και φροντιστές παιδιών ανεξαρτήτου ηλικίας, το οποίο βασίζεται στη φιλοσοφία του Dr. Thomas Gordon και αντλεί τις ρίζες του από την Προσωποκεντρική Προσέγγιση του Carl Rogers. Στην καρδιά του βρίσκονται τρεις αξίες:  **Ενσυναίσθηση – Αποδοχή – Αυθεντικότητα**.split\
                    Σύμφωνα με τη φιλοσοφία του Dr. Thomas Gordon, τα παιδιά δεν συμπεριφέρονται απείθαρχα με στόχο να προκαλέσουν ή να δυσκολέψουν τους ενήλικες. Η συμπεριφορά τους είναι τρόπος έκφρασης των αναγκών τους.split\
                    Τα παιδιά κάθε ηλικίας έχουν ανάγκες και έχουν το δικαίωμα να τις καλύπτουν. Το ίδιο ισχύει και για τους γονείς.  Όταν λοιπόν οι ανάγκες αυτών των δύο πλευρών συγκρούονται, οι δυσκολίες στις σχέσεις αρχίζουν να εμφανίζονται.',
    descriptionUpMid: 'Συχνά αυτό οδηγεί είτε σε επιβολή είτε σε υποχώρηση, δημιουργώντας έναν φαύλο κύκλο έντασης και απομάκρυνσης, αφηνοντας τις ανάγκες των παιδιών ή των γονέων αντίστοιχα ανικανοποίητες.split\
                    Αυτός ο φαύλος κύκλος εξουσίας, έντασης και παραμέλησης αναγκών, καταλήγει να απομακρύνει τον γονέα από το παιδί και να δημιουργεί μεταξύ τους ένταση. Υπάρχει, όμως, και άλλη επιλογή: μια προσέγγιση που αναζητά λύσεις όπου και οι δύο πλευρές, παιδί και γονιός, ικανοποιούνται. Όχι μέσα από επιβολή ή υποχώρηση, αλλά μέσα από αμοιβαία κατανόηση και συνεργασία.split\
                    Η **Ενεργητική Ακρόαση** και τα **Μηνύματα-Εγώ** αποτελούν δύο, μεταξύ πολλών άλλων, εργαλεία επικοινωνίας στην προσέγγιση του Dr. Gordon και διδάσκονται βιωματικά μέσω role plays.',
    descriptionBotMid: 'Η Ενεργητική Ακρόαση βοηθά τον γονέα να συνδεθεί με τον εσωτερικό κόσμο του παιδιού, δείχνοντας κατανόηση και αποδοχή για τα συναισθήματα και τις ανάγκες του.split\
                    Τα Μηνύματα-Εγώ, από την άλλη, δίνουν στον γονέα τη δυνατότητα να εκφράσει τα δικά του συναισθήματα και τις προσωπικές του ανάγκες, χωρίς επίκριση ή κατηγορία προς το παιδίsplit\
                    Όταν τα εργαλεία χρησιμοποιούνται σταθερά και με συνέπεια, αυτά τελικά γίνονται δεξιότητες για τον γονέα. Μέσα από την δημοκρατική-ενσυναισθητικη διαπαιδαγώγηση που εκπαιδεύονται οι γονείς, δημιουργείται ένα κλίμα ανοιχτής, ειλικρινούς και αμφίδρομης επικοινωνίας. Σε ένα τέτοιο περιβάλλον, όπου και ο γονέας και το παιδί νιώθουν ότι ακούγονται και κατανοούνται, όπου τα όρια μπαίνουν με σταθερότητα και καλοσύνη, η επίλυση των συγκρούσεων γίνεται πιο αποτελεσματική.',
    quote: 'Η γονεϊκότητα, ως συνεχής δυναμική διαδικασία μάθησης και προσαρμογής, δεν βασίζεται αποκλειστικά στο ένστικτο, αλλά χρειάζεται επίγνωση, επεξεργασία και επιλογή. Είναι μια πορεία που καλλιεργείται μέσα από γνώση, αυτοπαρατήρηση, επεξεργασία και την κατανόηση των αναγκών των παιδιών μας ανάλογα το αναπτυξιακό στάδιο που βρίσκονται, την ιδιοσυγκρασία τους και τις ιδιαίτερες ανάγκες του οικογενειακού συστήματος. Κάθε γονέας καλείται να πλοηγηθεί ανάμεσα σε βιώματα  από τον δικό του τρόπο ανατροφής, στις πεποιθήσεις που φέρει από το παρελθόν και στις συνειδητές επιλογές που κάνει για το παρόν και το μέλλον του παιδιού του. Ουσιαστικό κομμάτι της εκπαίδευσης είναι ότι οι γονείς αντιμετωπίζονται ως άνθρωποι με ανθρώπινα ελαττώματα, που βιώνουν αληθινά συναισθήματά και έχουν ανάγκη από κατανόηση και στήριξη.split\
            Το Εργαστήριο του Αποτελεσματικού Γονέα είναι ένα ψυχοεκπαιδευτικό πρόγραμμα, δεν αποτελεί εξατομικευμένη θεραπεία ή συμβουλευτική. Οι γονείς μοιράζονται, αν το επιθυμούν, εμπειρίες και προκλήσεις και εκπαιδεύονται στις αντίστοιχες δεξιότητες λαμβάνοντας την ανάλογη υποστήριξη και καθοδήγηση.split\
            Στόχος δεν είναι να γίνετε τέλειοι γονείς, ούτε να μην ξανακάνετε ‘λάθη’. Ο τέλειος γονιός δεν υπάρχει, αλλά ο ‘αρκετά καλός γονέας’, αυτός δηλαδή που ανταποκρίνεται με συνέπεια, με ενσυναίσθηση και με διάθεση να επανορθώσει.split\
            Και να θυμάστε ότι ποτέ δεν είναι αργά να αλλάξουμε τον τρόπο που σχετιζόμαστε και επικοινωνούμε με τα παιδιά μας.split',
    descriptionBot: 'Όταν προκύπτει παρόλα αυτά σύγκρουση αναγκών, ο γονέας δεν χρειάζεται να προσπαθήσει να επιβληθεί ή να απαιτήσει αλλαγή συμπεριφοράς, μπορεί να προχωρήσει σε **συνεργατική επίλυση προβλημάτων**, εφαρμόζοντας τη **Μέθοδο της Μη-Ήττας**, μια διαδικασία διαλόγου όπου και οι δύο πλευρές συμμετέχουν ισότιμα στην αναζήτηση λύσεων.split\
                    Έτσι, το παιδί νιώθει αποδεκτό, ακούγεται και ενισχύεται η ικανότητά του να σκέφτεται, να λύνει προβλήματα και να συνεργάζεται. Ο γονέας δεν χρειάζεται να καταφεύγει σε τιμωρίες ή επιβολή, αλλά οικοδομεί μια σχέση που βασίζεται στην αμοιβαία εμπιστοσύνη, τον σεβασμό και την υπευθυνότητα. Μια σχέση που έχει **μακροπρόθεσμο αποτύπωμα**.split\
                    Το εργαστήριο έχει διάρκεια 30 ώρες, 10 εβδομαδιαίες συναντήσεις. Διεξάγεται online και δια ζώσης.split\
                    Δηλώστε το ενδιαφέρον σας για τον επόμενο κύκλο.',
    callToAction: {
        text: 'Επικοινωνία',
        href: '/contact',
    }
};

const renderText = (text: string) => {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const Gordons = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!data.images || data.images.length === 0) return;

    const timeout = setTimeout(() => {
      setSlideIndex((prev) => (prev + 1) % data.images.length);
    }, data.images[slideIndex].duration);

    return () => clearTimeout(timeout);
  }, [slideIndex, data.images]);

return (
  <section className="relative w-full bg-theme2">

    {/* ================= TOP SECTION ================= */}
    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 items-center pt-8 pb-4 z-1">

      {data.imageFirst && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-[86%] h-[300px] md:h-[630px] md:left-[10%] overflow-hidden"
        >
          <Image
            src={data.imageFirst[0].src}
            alt={data.title}
            fill
            className="object-cover shadow-md"
          />
        </motion.div>
      )}

      <div className="relative h-full w-[90%] justify-start">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ originX: 0 }}
          viewport={{ once: true }}
          className="md:border-t md:border-black w-[70%] md:my-14 text-center"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, duration: 0.6 }}
          className="block relative h-full md:w-[90%] md:h-[400px] pl-10"
        >
          <h1 className="text-3xl md:text-3xl font-light mb-8 text-left">
            {data.title}
          </h1>

          <p className="text-lg leading-relaxed mb-4">
            {data.descriptionTop.split("split").map((line, i) => (
              <p key={i} className="mb-4">
                {renderText(line)}
              </p>
            ))}
          </p>
        </motion.div>
      </div>
    </div>

    {/* ================= UPPER MIDDLE SECTION ================= */}
    <div className="mx-10 mb-8 md:mt-8 md:max-w-7xl md:mx-auto">
      <p className="text-lg leading-relaxed mb-4">
        {data.descriptionUpMid.split("split").map((line, i) => (
          <p key={i} className="mb-4">
            {renderText(line)}
          </p>
        ))}
      </p>
    </div>

    {/* ================= BOTTOM MIDDLE SECTION ================= */}
    <div className="mx-10 mt-8 md:max-w-7xl md:mx-auto">
      <p className="text-lg leading-relaxed mb-4">
        {data.descriptionBotMid.split("split").map((line, i) => (
          <p key={i} className="mb-4">
            {renderText(line)}
          </p>
        ))}
      </p>
    </div>


    {/* ================= BOTTOM SECTION ================= */}
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-center py-8 z-1 md:max-w-7xl md:mx-auto">

      {/* Left text only */}
      <div className="relative h-full w-[90%] justify-start order-2 md:order-1 md:mb-10 ">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, duration: 0.6 }}
          className="block relative h-full md:w-[90%] md:h-[400px] pl-10 md:pl-0"
        >
          <p className="text-lg leading-relaxed mb-4">
            {data.descriptionBot.split("split").map((line, i) => (
            <p key={i} className="mb-4">
              {renderText(line)}
            </p>
          ))}
          </p>

          {/* Button */}
          {data.callToAction?.text && data.callToAction?.href && (
            <a
              href={data.callToAction.href}
              className="group inline-flex items-center justify-center self-center my-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
            >
              {/* Inner wrapper keeps alignment stable */}
              <span className="relative flex items-center">
                
                {/* Text */}
                <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2">
                  {data.callToAction.text}
                </span>

                {/* Arrow (absolute so it doesn't affect centering) */}
                <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                  &gt;
                </span>

              </span>
            </a>
          )}
        </motion.div>
      </div>

      {/* Right slideshow */}
      {data.images && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-[80%] h-[300px] md:h-[530px] overflow-hidden order-1 md:order-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={data.images[slideIndex].src}
                alt={data.title}
                fill
                className="object-cover shadow-md"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>

    {/* ================= QUOTE SECTION ================= */}
    <div className="relative w-full bg-theme6 py-12 px-6 md:px-8 md:mt-20">

      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme2"
          viewBox="0 20 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,44 C340,-20 1280,80 1440,74 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/*overlay wave*/}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 30 1440 120"
          className="w-full h-[30px] text-theme4"
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

      <div className="max-w-6xl mx-auto relative">

        {/* TOP-LEFT QUOTE */}
        <span className="absolute left-0 top-0 -translate-x-2 -translate-y-2 text-[60px] md:text-[90px] leading-none text-theme7">
          “
        </span>

        {/* TEXT */}
        <div className="text-center px-6 md:px-12">
          {data.quote.split("split").map((line, i) => (
            <p key={i} className="mt-3 mb-3 italic text-lg md:text-base text-theme7 leading-relaxed">
              {renderText(line)}
            </p>
          ))}
        </div>
        <div className="text-right px-6 md:px-12">
          <p className="mt-3 mb-3 italic text-lg md:text-base text-theme7 leading-relaxed">
            Σταυρούλα Μαυρογόνατου
          </p>
        </div>

        {/* BOTTOM-RIGHT QUOTE */}
        <span className="absolute right-0 bottom-0 translate-x-2 translate-y-12 text-[60px] md:text-[90px] leading-none text-theme7">
          ”
        </span>

      </div>
    </div>
  </section>
);
};

export default Gordons;
