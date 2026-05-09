"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

import therapyImg from '~/assets/images/therapyOnline.jpg';

const data = {
    title: 'Γνωσιακή Συμπεριφορική Ψυχοθεραπεία',
    image: therapyImg,
    description1: 'Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία (Cognitive Behavioral Therapy – CBT) αποτελεί μια επιστημονικά τεκμηριωμένη προσέγγιση, που εστιάζει στη δυναμική σχέση ανάμεσα στις σκέψεις, τα συναισθήματα και τις συμπεριφορές. Κεντρικός της άξονας είναι η κατανόηση και η σταδιακή τροποποίηση μοτίβων που δυσκολεύουν την καθημερινή λειτουργικότητα και την ψυχική ισορροπία.split\
                    Η βασική αρχή της CBT είναι ότι δεν είναι τα ίδια τα γεγονότα που καθορίζουν το πώς νιώθουμε, αλλά ο τρόπος που τα αντιλαμβανόμαστε και τα ερμηνεύουμε. Μέσα από μια δομημένη συνεργατική θεραπευτική διαδικασία, η οποία αρχικά δίνει έμφαση στο παρόν, το άτομο ενισχύεται ώστε να:split\
                    · Αναγνωρίζει, αξιολογεί και να απαντά στις δυσλειτουργικές και πεποιθήσεις τουsplit\
                    · Καλλιεργεί πιο ρεαλιστικούς και λειτουργικούς τρόπους σκέψηςsplit\
                    · Δοκιμάζει νέες συμπεριφορές που υποστηρίζουν την καθημερινότητά του',
    description2: 'Η αποτελεσματικότητα της Γνωσιακής Συμπεριφορικής Ψυχοθεραπείας έχει τεκμηριωθεί σε ένα ευρύ φάσμα δυσκολιών, όπως:split\
                    · αγχώδεις διαταραχές και κρίσεις πανικούsplit\
                    · καταθλιπτικά συμπτώματαsplit\
                    · φοβίες και κοινωνικό άγχοςsplit\
                    · ιδεοψυχαναγκαστική διαταραχή (OCD)split\
                    · διαταραχές ύπνουsplit\
                    · δυσκολίες στη διαχείριση θυμού και στρεςsplit\
                    · χαμηλή αυτοεκτίμηση  κ.α.split\
                    Μέσα από την ασφάλεια της θεραπευτικής σχέσης η οποία βασίζεται στον σεβασμό, την κατανόηση και την αποδοχή, το άτομο δεν περιορίζεται μόνο στην κατανόηση και επεξεργασία των δυσκολιών του, αλλά αποκτά συγκεκριμένα εργαλεία για να τις διαχειρίζεται πιο αποτελεσματικά στην καθημερινή του ζωή ώστε να αποτελέσει τελικά ο ίδιος τον θεραπευτή του εαυτού του.split\
                    Απευθύνεται σε παιδιά, εφήβους και ενήλικες, προσαρμόζοντας κάθε φορά τις τεχνικές και τα εργαλεία της στο αναπτυξιακό στάδιο, τις ανάγκες και τους προσωπικούς στόχους του κάθε ατόμου.split\
                    Αν νιώθετε ότι οι **σκέψεις, τα συναισθήματα ή οι συμπεριφορές** σας δύσκολεύουν την καθημερινότητά σας και επηρεάζουν αρνητικά την ποιότητα ζωής σας, η **Γνωσιακή Συμπεριφορική Ψυχοθεραπεία** μπορεί να αποτελέσει μια **ουσιαστική και αποτελεσματική επιλογή** για την ψυχική σας ενδυνάμωση και ισορροπία.',
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

const Practice = () => {
  return (
      <section className="relative w-full min-h-screen bg-theme2 text-justify">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 items-center py-8 z-1 pointer-events-none">
          {data.image && (
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full w-[85%] mx-auto md:mx-1 md:w-[72%] h-[300px] md:h-[430px] md:left-[15%]"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              loading="lazy"
              className="object-cover shadow-md filter rounded-3xl opacity-90"
            />
          </motion.div>
          )}
          <div className="relative h-full w-[90%] md:w-[95%] md:justify-start mx-auto md:mx-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originX: 0 }}
              viewport={{ once: true }}
              className="md:border-t md:border-black w-[70%] my-14 text-center" 
              />
              <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2, duration: 0.6 }}
                  className="block relative w-[90%] mx-auto md:mx-0"
              >
                  <div className="text-base leading-relaxed mb-4">
                      {data.description1.split("split").map((line, i) => (
                        <p key={i} className="mb-4">
                          {line}
                        </p>
                      ))}
                  </div>
              </motion.div>
          </div>
        </div>

        <div className="mb-12 md:max-w-7xl mx-auto w-[81%] md:w-[90%]">
          <div className="text-base leading-relaxed mb-4">
            {data.description2.split("split").map((line, i) => (
              <p key={i} className="mb-4">
                 {renderText(line)}
              </p>
            ))}
          </div>
        </div>
      </section>
    )
};

export default Practice;
