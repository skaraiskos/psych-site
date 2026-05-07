"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

import therapyImg from '~/assets/images/parenting.png';

const data = {
    title: 'Συμβουλευτική Γονέων',
    image: therapyImg,
    description1: 'Η συμβουλευτική γονέων είναι μια δυναμική διαδικασία, όπου γονείς και οικογένειες με παιδιά από τη βρεφική ηλικία έως την εφηβεία, υποστηρίζονται και ενδυναμώνονται μέσα από τη συνεργασία με έναν εξειδικευμένο θεραπευτή. Κάθε παιδί είναι ξεχωριστό, με τις δικές του αναπτυξιακές ανάγκες, τους δικούς του ρυθμούς και τον προσωπικό του τρόπο να επεξεργάζεται και να εσωτερικεύει τα ερεθίσματα, μέσα από την ιδιοσυγκρασία του. Από την άλλη πλευρά, κάθε γονέας φέρει τα δικά του βιώματα, τα οποία συχνά επηρεάζουν τον τρόπο με τον οποίο ερμηνεύει και διαχειρίζεται τις προκλήσεις στην καθημερινότητα της οικογένειας.split\
                  Μέσα από αυτή τη συνεργατική πορεία διερεύνησης των ενδοοικογενειακών σχέσεων, οι γονείς αρχίζουν να παρατηρούν πιο συνειδητά πώς σχετίζονται, ποια μοτίβα επαναλαμβάνονται και με ποιους τρόπους μπορεί να παρεμποδίζεται η αποτελεσματική επικοινωνία. Παράλληλα, εστιάζουν στη διαχείριση των καθημερινών δυσκολιών και στη συνολική στάση τους απέναντι στη διαπαιδαγώγηση των παιδιών, λαμβάνοντας υπόψη και πιθανές ιδιαίτερες αναπτυξιακές ανάγκες ή προκλήσεις που μπορεί να υπάρχουν.', 
    description2: 'Μέσα από αυτή τη διαδικασία και ανάλογα με τα αιτήματα, οι γονείς έχουν την ευκαιρία να σταθούν πιο συνειδητά απέναντι στον γονεϊκό τους ρόλο, να κατανοήσουν βαθύτερα τόσο το παιδί όσο και τον εαυτό τους, να δοκιμάσουν πιο λειτουργικούς τρόπους σύνδεσης και επικοινωνίας, να αναπτύξουν δεξιότητες συναισθηματικής νοημοσύνης, δεξιότητες επίλυσης προβλήματος, διεκδικητικές δεξιότητες αλλά και απόκτηση εργαλείων για να θέτουν όρια με αγάπη ανάλογα το αναπτυξιακό στάδιο των παιδιών. Σταδιακά, διαμορφώνεται ένα προσωπικό στιλ διαπαιδαγώγησης που δεν βασίζεται στην τελειότητα, αλλά στην ανταπόκριση στις πραγματικές ανάγκες της οικογένειας.split\
                  Συχνά συναντάμε γονείς που, ενώ έχουν έρθει σε επαφή με τεχνικές ή γνώσεις μέσα από εργαστήρια γονεϊκότητας ή προσωπική μελέτη, δυσκολεύονται να τις εφαρμόσουν στην καθημερινότητα. Σε αυτό το σημείο αναδεικνύεται η πρόκληση να υπερβούν τη δική τους προσωπική ιστορία και τη βιωματική τους εμπειρία ως παιδιά, ή την δυσκολία να μετακινηθούν ουσιαστικά από τον ρόλο του ενήλικα στον ρόλο του γονέα.split\
                  Με την κατάλληλη υποστήριξη, ο γονέας καλείται να δώσει χώρο σε αυτές τις δυσκολίες να ακουστούν, να τις αναγνωρίσει και να τις επεξεργαστεί. Έτσι μπορεί σταδιακά να προσεγγίσει μια νέα οπτική με περισσότερη επίγνωση και να τη μεταφέρει με μεγαλύτερη συνέπεια και αυθεντικότητα στη σχέση με το παιδί του.split\
                  Κάποιες από τις τεχνικές που μπορεί να αξιοποιηθούν στη διαδικασία είναι τα παιχνίδια ρόλων, βιωματικές ασκήσεις, ημερολόγια καταγραφής, συμπεριφορικά εργαλεία ή έντυπο υλικό συναισθηματικής εκπαιίδευσης. Στόχος είναι να ενισχυθεί η αυτοπαρατήρηση, ώστε ο γονέας να αναγνωρίζει τι αποτέλεσμα έχουν όσα δοκιμάζει και να αποκτά πρακτικά εργαλεία που μπορεί να εφαρμόσει άμεσα και με μεγαλύτερη επίγνωση στην επικοινωνία του με το παιδί, με έμφαση στη σύνδεση και την κατανόηση.split\
                  Ιδιαίτερη έμφαση δίνεται στη σχέση: στην αυθεντική παρουσία του γονέα, στον αμοιβαίο σεβασμό, στην ανοιχτή επικοινωνία και στην αποδοχή. Και αυτό, τελικά, δεν υποστηρίζει μόνο το παιδί, αλλά συμβάλλει και στη μεγαλύτερη ηρεμία, σαφήνεια και συναισθηματική ισορροπία των ίδιων των γονέων.',            
    callToAction: {
        text: 'Επικοινωνία',
        href: '/contact',
    }
};

const Parenting = () => {
  return (
      <section className="relative w-full min-h-screen bg-theme2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 items-stretch pt-8 z-1">
          {data.image && (
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full md:w-[86%] h-[300px] md:h-[630px] md:left-[10%]"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              loading="lazy"
              className="object-cover shadow-md filter"
            />
          </motion.div>
          )}
          <div className="relative w-[90%] justify-start">
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
                  transition={{ staggerChildren: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block relative md:w-[90%] pl-10"
              >
                  {/*<h1 className="text-3xl md:text-3xl font-light mb-8 text-left">{data.title}</h1>*/}
                  <p className="text-lg leading-relaxed mb-4">
                      {data.description1.split("split").map((line, i) => (
                        <p key={i} className="mb-4">
                          {line}
                        </p>
                      ))}
                  </p>
                  
              </motion.div>
          </div>
        </div>

        <div className="mx-10 md:mt-4 md:max-w-7xl md:mx-auto">
          <p className="text-lg leading-relaxed mb-4">
            {data.description2.split("split").map((line, i) => (
              <p key={i} className="mb-4">
                {line}
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
        </div>
      </section>
    )
};

export default Parenting;
