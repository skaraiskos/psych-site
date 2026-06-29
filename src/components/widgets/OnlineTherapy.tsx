"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

import therapyImg from '~/assets/images/therapyOnline1.webp';

const data = {
    title: 'Online Συνεδρίες',
    image: therapyImg,
    description: 'Η θεραπεία μέσω διαδικτύου αποτελεί μια επιστημονικά τεκμηριωμένη μέθοδο παροχής ψυχοθεραπευτικών και συμβουλευτικών υπηρεσιών. Πρόκειται για μια ευέλικτη και αξιόπιστη επιλογή, που μπορεί να υποστηρίξει ουσιαστικά τη θεραπευτική διαδικασία, χωρίς να επηρεάζει την ανάπτυξη μιας σταθερής και ουσιαστικής θεραπευτικής σχέσης.split\
                Η αποτελεσματικότητα της online θεραπείας έχει υποστηριχθεί από πλήθος ερευνών, οι οποίες δείχνουν ότι μπορεί να είναι εξίσου αποτελεσματική με τη δια ζώσης θεραπεία, ιδιαίτερα στο πλαίσιο της Γνωσιακής Συμπεριφορικής Θεραπείας.',
    callToAction: {
        text: 'Επικοινωνία',
        href: '/contact',
    }
};

const OnlineTherapy = () => {
  return (
      <section className="relative w-full bg-theme2 md:text-justify mb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-4 items-start pt-8 z-1">
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
                  className="block relative mx-auto w-[90%] md:mx-0"
              >
                  <div className="text-base leading-relaxed mb-4">
                      {data.description.split("split").map((line, i) => (
                        <p key={i} className="mb-4">
                          {line}
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
              </motion.div>
          </div>
        </div>
      </section>
    )
};

export default OnlineTherapy;
