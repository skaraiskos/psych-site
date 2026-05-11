"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";

import therapyImg from '~/assets/images/therapy.webp';

const data = {
    title: 'Ατομική Ψυχοθεραπεία',
    image: therapyImg,
    description1: 'Σε ένα περιβάλλον που μεταβάλλεται διαρκώς, μας εκθέτει σε πολλαπλά ερεθίσματα και απαιτήσεις, η **ψυχοθεραπεία** προσφέρει έναν **σταθερό χώρο επεξεργασίας και κατανόησης**. Έναν χώρο όπου μπορεί κανείς να σταθεί, να παρατηρήσει και να επαναπροσδιορίσει τον τρόπο με τον οποίο σχετίζεται με τον εαυτό του και τους άλλους.split\
                    Οι άνθρωποι συχνά προσέρχονται στη θεραπεία βιώνοντας **συμπτώματα** όπως άγχος, επίμονη ανησυχία, διαταραχές διάθεσης,  πένθος, απώλεια, διαχείριση αλλαγής, θυμού,  διαταραχές ύπνου, δυσκολίες στις διαπροσωπικές σχέσεις ή σωματικές εκδηλώσεις που δεν εξηγούνται επαρκώς οργανικά κ.α. Τα συμπτώματα αυτά δεν αντιμετωπίζονται απομονωμένα, αλλά ως μέρος ενός ευρύτερου τρόπου σκέψης, συναισθήματος και συμπεριφοράς που αξίζει να κατανοηθεί.',
    description2: 'Στη **θεραπευτική διαδικασία** εστιάζουμε στην κατανόηση των παραγόντων που πυροδοτούν τις δυσκολίες, καθώς και στα μοτίβα που τις συντηρούν, όπως οι αρνητικές σκέψεις, οι συμπεριφορές αποφυγής και οι σωματικές αντιδράσεις. Μέσα από τη {{practice}}, οι θεραπευόμενοι εκπαιδεύονται σε συγκεκριμένες δεξιότητες και τεχνικές, με στόχο να μπορούν να διαχειρίζονται την καθημερινότητά τους με μεγαλύτερη ευελιξία και αποτελεσματικότητα.split\
                    Πέρα όμως από τη διαχείριση και ανακούφιση των δυσκολιών ή συμπτωμάτων, η θεραπευτική διαδικασία απευθύνεται και σε ανθρώπους που επιθυμούν να **ενδυναμωθούν ψυχολογικά**. Ανθρώπους που αναζητούν περισσότερη αυτοπεποίθηση,  αυτενέργεια και αυτοέλεγχο, να αναπτύξουν δεξιότητες διεκδικητικότητας καθώς και τη δυνατότητα να δημιουργούν πιο ουσιαστικές και ικανοποιητικές σχέσεις.split\
                    Μέσα από τη θεραπευτική διαδικασία, οι θεραπευόμενοι καλούνται να επανασυνδεθούν με μια πιο αυθεντική σχέση με τον εαυτό τους. Σταδιακά αρχίζουν να **διερευνούν και να αξιολογούν** τις προσωπικές τους πεποιθήσεις, τις απόψεις, τις πράξεις και τα συναισθήματά τους. Παράλληλα, μαθαίνουν να διαμορφώνουν και να στηρίζονται σε δικά τους κριτήρια συμπεριφοράς, ανεξάρτητα από τις κρίσεις και τις απόψεις των άλλων.split\
                    Η ποιότητα της **θεραπευτικής σχέσης** αποτελεί βασικό δείκτη αποτελεσματικότητας της θεραπείας, καθώς συνιστά τον κύριο χώρο μέσα στον οποίο μπορεί να αναπτυχθεί ασφάλεια, εμπιστοσύνη, ελευθερία έκφρασης και αίσθημα αποδοχής. Πρόκειται για μια ισότιμη σχέση που βασίζεται στον συνεργατικό εμπειρισμό: ο θεραπευόμενος είναι ενήμερος για τα στάδια της θεραπείας και η πορεία της διαμορφώνεται με τη σύμφωνη γνώμη του.split\
                    Μέσα σε αυτό το πλαίσιο, ο θεραπευόμενος έχει τη δυνατότητα να βιώσει μια διαφορετική, διορθωτική εμπειρία σχέσης, που δεν ακολουθεί τα συνηθισμένα μοτίβα του παρελθόντος του. Η εμπειρία αυτή δεν περιορίζεται στη θεραπεία· σταδιακά μπορεί να επηρεάσει τον τρόπο με τον οποίο σχετίζεται και εκτός αυτής, στις προσωπικές και καθημερινές του σχέσεις.split\
                    Η **διάρκεια** της συνεδρίας είναι 50 λεπτά. Η συχνότητα των συνεδριών είναι μία φορά την εβδομάδα και στην πορεία της θεραπείας επαναξιολογείται μαζί με τον θεραπευόμενο, με βάση την αποτελεσματικότητα, τις ανάγκες και την εξέλιξη της διαδικασίας.split\
                    Η απόφαση να φροντίσει κανείς την ψυχική του υγεία είναι πράξη δύναμης, όχι αδυναμίας. {{contact}}',
    callToAction: {
        text: 'Επικοινωνία',
        href: '/contact',
    }
};

export function renderText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\{\{.*?\}\})/g);

  return parts.map((part, i) => {
    // BOLD
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // LINKS
    if (part.startsWith("{{") && part.endsWith("}}")) {
      const key = part.slice(2, -2);

      const linkMap: Record<string, { href: string; label: string }> = {
        contact: { href: "/contact", label: "Ας κάνουμε, τώρα, το πρώτο βήμα." },
        practice: { href: "/practice", label: "Γνωσιακή Συμπεριφορική Ψυχοθεραπεία (CBT)" },
      };

      const link = linkMap[key];

      if (link) {
        return (
          <Link
            key={i}
            href={link.href}
            className="text-theme4 underline font-medium"
          >
            {link.label}
          </Link>
        );
      }
    }

    return <span key={i}>{part}</span>;
  });
}


const PersonalTherapy = () => {
  return (
      <section className="relative w-full min-h-screen bg-theme2 md:text-justify">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 items-center pt-8 md:pb-4 z-1">
          {data.image && (
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-[85%] mx-auto md:mx-1 md:w-[72%] h-[300px] md:h-[430px] md:left-[15%]"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              loading="lazy"
              className="object-cover shadow-md filter rounded-3xl"
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
                  transition={{ staggerChildren: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="block relative w-[90%] mx-auto md:mx-0"
              >
                  {/*<h1 className="text-3xl md:text-3xl font-light mb-8 text-left">{data.title}</h1>*/}
                  <div className="text-base leading-relaxed mb-4">
                      {data.description1.split("split").map((line, i) => (
                        <p key={i} className="mb-4">
                          {renderText(line)}
                        </p>
                      ))}
                  </div>
                  
              </motion.div>
          </div>
        </div>

        <div className="xl:mt-6 md:max-w-7xl mx-auto w-[81%] md:w-[90%]">
          <div className="text-base leading-relaxed mb-4">
            {data.description2.split("split").map((line, i) => (
              <p key={i} className="mb-4">
                {renderText(line)}
              </p>
            ))}
          </div>

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

export default PersonalTherapy;
