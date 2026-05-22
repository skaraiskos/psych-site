"use client";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhoneFilled,
  IconMailFilled,
  IconMapPinFilled,
} from '@tabler/icons-react';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

import CookieSettingsButton from '~/components/common/CookieSettingsButton';

const content = {
    boxTitle: 'Σταυρούλα Μαυρογόνατου',
    services : [
      {
        text: 'Ατομική Ψυχοθεραπεία',
        href: '/personal-therapy',
      },
      {
        text: 'Συμβουλευτική Γονέων',
        href: '/parenting',
      },
      {
        text: 'Εργαστήριο Αποτελεσματικού Γονέα',
        href: '/gordons',
      },
      {
        text: 'Online Θεραπείες',
        href: '/online-therapy',
      },
    ],
    socials: [
      { label: 'Instagram', icon: IconBrandInstagram, href: 'https://instagram.com/psych.agogoume' },
      /*{ label: 'Facebook', icon: IconBrandFacebook, href: '#' },*/
    ],
    links1Title: 'Στοιχεία Επικοινωνίας',
    links1:[
      { label: 'Διεύθυνση', type: "address", icon: IconMapPinFilled, text: 'Αγίου Ιωάννου 63, Αγία Παρασκευή' },
      { label: 'Email', type: "email", icon: IconMailFilled, text: 'mavrogonatoupsych@gmail.com' },
      { label: 'Τηλέφωνο', type: "phone", icon: IconPhoneFilled, text: '6951780181' },
    ],
    links2Title: 'Σύνδεσμοι',
    links2:[
      { label: 'Όροι & Προϋποθέσεις', href: '/privacy' },
      { label: 'Προσωπικά Δεδομένα', href: '/cookies' },
      { label: 'Πολιτική Απορρήτου', href: '/terms' }
    ]
  };

const Footer = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer className="w-full">
      {/* Grey top bar */}
      <div className="w-full md:h-[80px] h-[10px] bg-theme6" />

      {/* White section with grid */}
      <div className="relative bg-white pt-0 md:pt-2 pb-6 px-0 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 max-w-[90rem] mx-0 md:mx-auto">
          
          {/* box */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.2}}
            transition={{ duration: 0.6}}
            className="relative md:rounded-3xl bg-theme4 px-6 md:px-16 pt-6 md:-mt-12 z-10 max-w-2xl h-[330px] lg:h-[350px] xl:h-[330px] flex flex-col justify-center items-left"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4  pointer-events-none">{content.boxTitle}</h2>
            {content.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={"my-2 mx-4"}
              >
                <a href={s.href} className="hover:text-theme6 text-white transition-colors">{s.text}</a>
              </motion.div>
            ))}

            <div className="col-span-4 mt-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
              <ul className="mb-4 -ml-2 rtl:ml-0 rtl:-mr-2 flex md:order-1 md:mb-0">
                {content.socials.map(({ label, icon: Icon, href }, index) => (
                  <li key={`item-social-${index}`}>
                    <a
                      className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm"
                      aria-label={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Icon && <Icon className="h-7 w-7 text-white hover:text-theme6 transition transform duration-200 hover:scale-110"/>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Links columns */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-6 md:p-2"
          >

            {/* Top text */}
            <div className="mb-10 max-w-2xl pointer-events-none">
              <h3 className="md:hidden block text-base font-semibold">
                Μπορείτε να επικοινωνήσετε για πληροφορίες ή για να κλείσετε ραντεβού δια ζώσης ή διαδικτυακά.
              </h3>
              <h3 className="hidden md:block text-base font-semibold">
                Μπορείτε να επικοινωνήσετε για πληροφορίες ή για να
              </h3>
              <h3 className="hidden md:block text-base font-semibold mb-3">
                κλείσετε ραντεβού δια ζώσης ή διαδικτυακά.
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                Διαθέσιμα και πρωινά ραντεβού
              </p>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:h-[180px] text-sm">

              {/* Column 1 */}
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-semibold pointer-events-none">
                  {content.links1Title}
                </h3>
                {content.links1.map((s, i) => {
                  let href: string | null = null;

                  if (s.type === "phone") {
                    href = `tel:+30${s.text}`;
                  }

                  if (s.type === "email") {
                    href = `mailto:${s.text}`;
                  }

                  const Row = (
                    <div className="flex items-center space-x-2 mt-4">
                      {s.icon && <s.icon className="h-5 w-5 text-gray-500" />}
                      <span className="text-gray-700">{s.text}</span>
                    </div>
                  );

                  return href ? (
                    <a
                      key={i}
                      href={href}
                      className="hover:opacity-80 transition"
                    >
                      {Row}
                    </a>
                  ) : (
                    <div key={i}>{Row}</div>
                  );
                })}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-semibold pointer-events-none">
                  {content.links2Title}
                </h3>

                {content.links2.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="hover:text-theme4 transition-colors mt-4"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Black Bottom bar */}
      <div className="w-full bg-black py-4">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          
          <p>
            © 2026 Σταυρούλα Μαυρογόνατου. All rights reserved.
          </p>
          <CookieSettingsButton />
          {/*<p>
            Designed & Developed by Sotiris Karaiskos.
          </p>*/}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
