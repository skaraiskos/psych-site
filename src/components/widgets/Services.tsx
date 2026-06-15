"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

import therapyImg from '~/assets/images/therapy.webp';
import onlineImg from '~/assets/images/therapyOnline1.webp';
import gordons from '~/assets/images/effectiveParenting0.webp';
import parenting from '~/assets/images/parenting.webp';

const services = [
  {
    title: 'Ατομική Ψυχοθεραπεία',
    image: therapyImg,
    description: 'Ένα πλαίσιο συνεργασίας, ασφάλειας και εμπιστοσύνης, που επιτρέπει στο άτομο να επεξεργαστεί τη μοναδικότητα των εμπειριών του, να κατανοήσει βαθύτερα τον εαυτό του, και να επεξεργαστεί τις δυσκολίες του με στόχο την ανάπτυξη πιο λειτουργικών τρόπων σκέψης και διαχείρισης.',
    callToAction : {
      text: 'Μάθε Περισσότερα',
      href: '/personal-therapy',
    }
  },
  {
    title: 'Συμβουλευτική Γονέων',
    image: parenting,
    description: 'Καθοδήγηση και συναισθηματική υποστήριξη των γονέων σε ζητήματα ορίων, διαχείρισης συναισθημάτων, διαχείρισης δικών τους συναισθημάτων και σκέψεων, επικοινωνίας και καθημερινών προκλήσεων. Στόχος είναι οι γονείς να νιώθουν πιο επαρκείς και αποτελεσματικοί στον ρόλο τους, ενισχύοντας παράλληλα το κλίμα και τις σχέσεις μέσα στην οικογένεια.',
    callToAction : {
      text: 'Μάθε Περισσότερα',
      href: '/parenting',
    }
  },
  {
    title: 'Εργαστήριο Αποτελεσματικού Γονέα',
    image: gordons,
    description: 'Βιωματικό ψυχοεκπαιδευτικό εργαστήριο που υποστηρίζει τους γονείς να ανταποκρίνονται με μεγαλύτερη επίγνωση, σταθερότητα και αποτελεσματικότητα στον ρόλο τους, μέσα από πρακτικά εργαλεία και δεξιότητες. Στόχος είναι η διαμόρφωση μιας σχέσης με το παιδί χωρίς φωνές και τιμωρητικές πρακτικές αλλά και λιγότερες συγκρούσεις.',
    callToAction : {
      text: 'Μάθε Περισσότερα',
      href: '/gordons',
    }
  },
  {
    title: 'Online Θεραπείες',
    image: onlineImg,
    description: 'Προσφέρει μεγαλύτερη ευελιξία και διευκολύνει την πρόσβαση στη θεραπευτική διαδικασία. Η έρευνα δείχνει ότι η διαδικτυακή ψυχοθεραπεία έχει αντίστοιχη αποτελεσματικότητα με τη δια ζώσης, είτε εφαρμόζεται αυτόνομα είτε σε συνδυασμό.',
    callToAction : {
      text: 'Μάθε Περισσότερα',
      href: '/online-therapy',
    }
  }
];

const Services = () => (

<section className="relative py-0 w-full bg-theme2">
  <div className="relative text-center py-4 md:mx-16">
    {services.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.1 }}
        viewport={{ once: true }}
        className={`grid grid-cols-1 md:grid-cols-2 ${
          i % 2 === 1 ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]"
        } items-center py-4 md:py-8 mx-auto md:mx-8 md:gap-8`}
      >
        {/* Image */}
        <div className={`relative mb-4 md:mb-16 mt-6 md:my-0 h-[200px] md:h-[360px] lg:h-[420px] border-theme4 ${
          i % 2 === 1 ? "md:col-start-2" : "md:col-start-1"
        } md:row-start-1`}>

          <div
            className={`absolute top-1/2 md:top-[50%] left-1/2 w-[40%] md:w-[60%] aspect-square border-8 border-theme4 block z-0 transform -translate-x-1/2 -translate-y-1/2 ${
              i % 2 === 1 ? "-rotate-6" : "rotate-6"
            }`}
          />

          
          {/*<div className={`absolute top-[40%] md:top-1/2 left-1/2 w-[55%] md:w-[80%] rounded-3xl overflow-hidden aspect-[5/3] z-10 transform -translate-x-1/2 -translate-y-1/3`}>
            <Image
              src={s.image}
              alt={s.title}
              fill
              loading="lazy"
              className="object-cover shadow-md brightness-75"
            />
          </div>*/}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-[55%] md:w-[80%] aspect-[5/3] rounded-3xl overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 55vw, 80vw"
                className="object-cover shadow-md brightness-75"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className={`flex flex-col justify-center md:h-[360px] lg:h-[420px] md:row-start-1 mx-8 md:mx-0 ${
          i % 2 === 1 ? "md:col-start-1 md:text-left" : "md:col-start-2 md:text-right"
        }`}>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
            <p className="text-gray-600">{s.description}</p>
          </div>
          {s.callToAction && s.callToAction.text && s.callToAction.href && (
              <button className={`bottom-0 justify-center self-center ${
                i % 2 === 1 ? "md:self-start" : "md:self-end"
              }`}>
                <a
                  href={s.callToAction.href}
                  className="group inline-flex items-center justify-center self-center my-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
                >
                  {/* Inner wrapper keeps alignment stable */}
                  <span className="relative flex items-center">
                    
                    {/* Text */}
                    <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2">
                      {s.callToAction.text}
                    </span>

                    {/* Arrow (absolute so it doesn't affect centering) */}
                    <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      &gt;
                    </span>

                  </span>
                </a>
              </button>
            )}
        </div>
      </motion.div>
    ))}
  </div>
</section>
);

export default Services;
