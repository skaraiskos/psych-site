"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  IconHeart,
  IconEye,
  IconShieldLock,
  IconFingerprint,
} from "@tabler/icons-react";

import portraitImg from "~/assets/images/hero3.jpg";
import philosophyImg from "~/assets/images/therapy_session.png";

const pillars = [
  {
    title: "Ενσυναίσθηση",
    description: "Η προσέγγιση βασίζεται στην κατανόηση της εμπειρίας του ατόμου μέσα από τη δική του οπτική, με αναγνώριση του συναισθήματός του και χωρίς κριτική διάθεση.",
    icon: IconHeart,
  },
  {
    title: "Αποδοχή",
    description: "Κάθε άνθρωπος αντιμετωπίζεται με σεβασμός ως μοναδική προσωπικότητα, νιώθει αποδεκτό, ασφαλές και προστατευμένο.",
    icon: IconEye,
  },
  {
    title: "Εμπιστοσύνη",
    description: "Αποτελεί θεμέλιο της θεραπευτικής σχέσης η οποία επιτρέπει τη δημιουργία ενός ασφαλούς πλαισίου συνεργασίας και εξερεύνησης του εαυτού αλλά και των σχεσιακών μοτίβων του θεραπευόμενου.",
    icon: IconShieldLock,
  },
  {
    title: "Αυθεντικότητα",
    description: "Η θεραπευτική στάση στηρίζεται στην αυθεντικότητα και την ειλικρίνεια, καθώς η ουσιαστική υποστήριξη προϋποθέτει καθαρή και αληθινή επικοινωνία.",
    icon: IconFingerprint,
  },
];

const data = {
    description1: 'Είμαι πτυχιούχος Ψυχολόγος με άδεια ασκήσεως επαγγέλματος (Αρ. Αδείας: 212058, Νομαρχία Αθηνών) και κάτοχος μεταπτυχιακού τίτλου στις Επιστήμες της Αγωγής και την Ειδική Εκπαίδευση. Βρίσκομαι στο τελικό στάδιο ολοκλήρωσης της εκπαίδευσής μου στη Γνωσιακή Συμπεριφορική Ψυχοθεραπεία.split\
                    Έχω ολοκληρώσει μετεκπαιδευτικές εξειδικεύσεις (BTEC Level 5) που αφορούν τη διαχείριση και παρέμβαση σε παιδιά με συναισθηματικές και συμπεριφορικές δυσκολίες, τη Διαταραχή Αυτιστικού Φάσματος, καθώς και την αξιολόγηση και υποστήριξη παιδιών με ειδικές εκπαιδευτικές ανάγκες και δυσλεξία. Παράλληλα, έχω εκπαιδευτεί ως συντονίστρια ομάδων εφήβων και έχω παρακολουθήσει πλήθος σεμιναρίων με αντικείμενα όπως η παιγνιοθεραπεία, το παιδικό ιχνογράφημα, η διαχείριση της απώλειας στην παιδική ηλικία, οι θεραπευτικές ιστορίες, το παιχνίδι στο φάσμα του αυτισμού, η ενίσχυση της αυτοεκτίμησης, η γνωστική ανάπτυξη απο την βρεφική ηλικία ως την εφηβεία κ.α.', 
    description2: 'Είμαι πιστοποιημένη εκπαιδεύτρια του «Εργαστηρίου Αποτελεσματικού Γονέα» από την Gordon International Training και συντονίζω ομάδες γονέων, μέσα από τις οποίες ενισχύεται ο γονεϊκός ρόλος και καλλιεργούνται πιο λειτουργικοί τρόποι ανταπόκρισης στις καθημερινές προκλήσεις, με περισσότερη ηρεμία, σαφήνεια και αυθεντικότητα.split\
                    Από το 2012 συνεργάζομαι με κέντρα ειδικών θεραπειών, υλοποιώντας εξατομικευμένα ψυχοπαιδαγωγικά προγράμματα για παιδιά και εφήβους στο φάσμα του αυτισμού, με ειδικές μαθησιακές δυσκολίες και ΔΕΠ-Υ. Παράλληλα, έχω συντονίσει ομάδες κοινωνικών δεξιοτήτων για παιδιά στο φάσμα του αυτισμού, καθώς και ομάδες εφήβων με στόχο τη συναισθηματική ενδυνάμωση και την ανάπτυξη της αυτογνωσίας. Αναπόσπαστο μέρος της επαγγελματικής μου πορείας αποτελεί η συμβουλευτική γονέων.split\
                    Έχω εργαστεί για πάνω από δέκα χρόνια σε σχολικά πλαίσια, παρέχοντας εξατομικευμένη υποστήριξη σε παιδιά με αυτισμό, σε στενή συνεργασία με τις οικογένειές τους.split\
                    Μέσα από τη συμβουλευτική μακροχρόνια εμπειρία μου με οικογένειες, συνάντησα τους γονείς να αναζητούν κατεύθυνση, πρακτικά εργαλεία και έναν χώρο κατανόησης, ώστε να μπορούν να στηρίξουν ουσιαστικά την ανάπτυξη του παιδιού τους και να διατηρήσουν τη λειτουργικότητα και την ισορροπία της οικογένειας. Ωστόσο παρατήρησα πως συχνά οι δυσκολίες στη γονεϊκότητα συνδέονται άμεσα με προσωπικά βιώματα και εσωτερικευμένα μοτίβα των γονέων. Αυτή η διαπίστωση ανέδειξε για εμένα την ανάγκη για βαθύτερη κατανόηση των ψυχικών διεργασιών που επηρεάζουν τη συμπεριφορά, τα συναισθήματα και τις διαπροσωπικές σχέσεις.split\
                    Έτσι διεύρυνα την επαγγελματική μου κατεύθυνση, με στόχο να εργάζομαι ψυχοθεραπευτικά και με ενήλικες, εκπαιδευόμενη στη Γνωσιακή Συμπεριφορική Ψυχοθεραπεία, στην οποία και ολοκληρώνω την συστηματικά εποπτευόμενη εκπαίδευσή μου.split\
                    Κάθε θεραπευτική συνεργασία για εμένα αποτελεί μια ξεχωριστή, ουσιαστική διαδρομή, η οποία διαμορφώνεται από κοινού, με σεβασμό στις ανάγκες, τον ρυθμό και την προσωπική ιστορία κάθε ανθρώπου.split\
                    Η θεραπευτική μου προσέγγιση βασίζεται σε επιστημονικά τεκμηριωμένες αρχές της Γνωσιακής Συμπεριφορικής Ψυχοθεραπείας, με απόλυτο σεβασμό στο απόρρητο και στον κώδικα δεοντολογίας. Δίνεται ιδιαίτερη έμφαση στη συνεργατική σχέση και στην ενδυνάμωση του ατόμου, ώστε να αναπτύσσει σταδιακά τα δικά του εργαλεία και να ανταποκρίνεται στις δυσκολίες του με μεγαλύτερη αυτονομία και ψυχική σταθερότητα.split\
                    Η προσωπική μου θεραπεία, καθώς και η σταθερή ατομική και ομαδική εποπτεία, αποτελούν βασικά στοιχεία της επαγγελματικής μου εξέλιξης. Παράλληλα, η συνεχής επιμόρφωση μέσω σεμιναρίων και εκπαιδευτικών προγραμμάτων εμπλουτίζει διαρκώς το θεραπευτικό μου έργο, διατηρώντας μια ανοιχτή και εξελισσόμενη στάση απέναντι στη θεραπευτική διαδικασία.split\
                    Σήμερα, στο πλαίσιο της επαγγελματικής μου δραστηριότητας, συνεργάζομαι με κέντρο ειδικής αγωγής, παρέχοντας ψυχολογική υποστήριξη σε παιδιά και εφήβους, καθώς και συμβουλευτική γονέων. Παράλληλα, συνεργάζομαι με κέντρο ψυχοθεραπείας και συμβουλευτικής, προσφέροντας υπηρεσίες ψυχοθεραπείας σε ενήλικες.split\
                    Στο χώρο μου παρέχονται online και δια ζώσης συνεδρίες Ψυχοθεραπείας, συμβουλευτικής Γονέων και ομάδες και σεμινάρια γονεϊκότητας.',
};

const training = [
  { year: "2023", text: "Πτυχίο Ψυχολογίας ..." },
  { year: "2024", text: "Εκπαίδευση Ψυχοθεραπείας ..." },
  { year: "2025", text: "Σεμινάρια & εξειδικεύσεις ..." },
];


const AboutPage = () => {
  const description1Parts = data.description1.split("split");
  const description2Parts = data.description2.split("split");

  return (
    <section className="w-full bg-theme2 text-text md:text-lg">

      {/* ===================== HERO BIO FLOW ===================== */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-0 grid md:grid-cols-[420px_1fr] gap-16">

        {/* LEFT: sticky visual anchor */}
        <div className="relative md:sticky md:top-24 h-[520px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <Image
              src={portraitImg}
              alt="Portrait"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </motion.div>
        </div>

        {/* RIGHT: narrative flow */}
        <div className="flex flex-col gap-10">

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold"
          >
            Σταυρούλα Μαυρογόνατου
          </motion.h1>

          {description1Parts.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-text/80 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}

        </div>
      </div>

      {/* ===================== CONTINUATION (DEEP NARRATIVE) ===================== */}
      <div className="w-full px-6 pt-8 pb-12 bg-theme2">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">

          {description2Parts.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="text-text/80 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}

        </div>
      </div>

      {/* ===================== PHILOSOPHY BAND ===================== */}
      <div className="relative w-full py-28 text-center overflow-hidden">

        {/*top divider*/}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="block w-full h-[90px] text-theme2"
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
        <div className="absolute top-0 left-0 w-full opacity-90 overflow-hidden leading-none z-20">
          <svg 
            viewBox="0 30 1440 120"
            className="w-full h-[80px] text-theme4"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C260,0 620,120 980,85 C1160,70 1380,40 1440,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/*bottom divider*/}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="block w-full h-[40px] text-theme2 rotate-180"
            viewBox="0 10 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64 C240,-30 980,180 1440,64 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src={philosophyImg}
            alt="Therapy philosophy"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-theme2">
            Η φιλοσοφία της θεραπείας
          </h2>

          <p className="text-theme2/90 leading-relaxed">
            Περιγραφή της στάσης απέναντι στη θεραπευτική διαδικασία.
            Τι σημαίνει θεραπεία, ποιος είναι ο ρόλος της σχέσης,
            και τι μπορεί να περιμένει κάποιος που ξεκινά.
          </p>
        </motion.div>
      </div>

      {/* ===================== PILLARS ===================== */}
      <div className="
        w-full max-w-7xl mx-auto px-4 my-10
        grid justify-center gap-6
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
      ">
        {pillars.map(({ title, description, icon: Icon, callToAction }, index) => {
          const isLastSingle = pillars.length === 4 && index === 3;

          return (
            <motion.div
              key={index}
              className="
                relative w-full max-w-[320px] mx-auto
                flex flex-col bg-theme4 p-5
                rounded-2xl group
                min-h-[340px]
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl
              "
              initial={{ opacity: 0, y: 20 }}            // start slightly lower and invisible
              whileInView={{ opacity: 1, y: 0 }}         // animate into place
              viewport={{ once: true, amount: 0.2 }}     // only first time in view
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }} // stagger
            >
              {/* Soft vertical accent */}
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-yellow-200 rounded-full opacity-60" />

              {/* Top Block */}
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="p-3 rounded-full bg-theme4 flex items-center justify-center">
                  {Icon && <Icon className="h-10 w-10 text-theme6" />}
                </div>

                {/* Title with fixed height */}
                <div className="h-[72px] flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-theme6 leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 mt-4">
                <p className="text-base text-theme6 text-left leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ===== TRAINING TIMELINE ===== */}
      {/*<div className="w-full bg-gradient-to-b from-theme6/80 to-theme1 py-14 text-center px-6">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            Εκπαίδευση & Πορεία
          </h2>

          <div className="space-y-8">
            {training.map((t, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-theme4 font-semibold w-16">
                  {t.year}
                </div>
                <p className="text-text/80">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>*/}

    </section>
  );
};

export default AboutPage;
