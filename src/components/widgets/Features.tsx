"use client";
import { motion } from "framer-motion";
import { FeaturesProps } from '~/shared/types';
import ParallaxBackground from '../common/ParallaxBackground';

import {
  IconUser,
  IconUsers,
  IconScreenShare,
  IconColorFilter,
} from '@tabler/icons-react';

const featuresHome={
  id: 'features-on-home',
  items: [
    {
      title: 'Ατομική Ψυχοθεραπεία',
      description:
        'Ένα πλαίσιο συνεργασίας, ασφάλειας και εμπιστοσύνης.',
      icon: IconUser,
      callToAction: {
        text: 'Μάθε περισσότερα',
        href: '/personal-therapy',
      },
    },
    {
      title: 'Συμβουλευτική Γονέων',
      description:
        'Καθοδήγηση και συναισθηματική υποστήριξη των γονέων.',
      icon: IconUsers,
      callToAction: {
        text: 'Μάθε περισσότερα',
        href: '/parenting',
      },
    },
    {
      title: 'Εργαστήριο Αποτελεσματικού Γονέα',
      description:
        'Βιωματικό ψυχοεκπαιδευτικό εργαστήριο που υποστηρίζει τους γονείς.',
      icon: IconColorFilter,
      callToAction: {
        text: 'Μάθε περισσότερα',
        href: '/gordons',
      },
    },
    {
      title: 'Online Θεραπείες',
      description:
        'Προσφέρει μεγαλύτερη ευελιξία και διευκολύνει την πρόσβαση στη θεραπευτική διαδικασία.',
      icon: IconScreenShare,
      callToAction: {
        text: 'Μάθε περισσότερα',
        href: '/online-therapy',
      },
    },
  ],
};

const Features = () => {
  return (
    <section id={featuresHome.id} className="relative w-full bg-theme6 py-12">

      {/*top divider*/}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[90px] text-theme4"
          viewBox="0 30 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,160 980,0 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/*overlay wave*/}
      <div className="absolute top-[-1px] left-0 w-full opacity-90 overflow-hidden leading-none">
        <svg 
          viewBox="0 30 1440 120"
          className="w-full h-[80px] text-white"
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
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-[40px] text-theme6 rotate-180"
          viewBox="0 10 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,180 980,-30 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Services Grid */}
      <div className="
        w-full max-w-7xl mx-auto px-4 mt-10
        grid justify-center gap-6
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
      ">
        {featuresHome.items.map(({ title, description, icon: Icon, callToAction }, index) => {
          const isLastSingle = featuresHome.items.length === 4 && index === 3;

          return (
            <motion.div
              key={index}
              className="
                relative w-full max-w-[320px] mx-auto
                flex flex-col bg-theme2 p-5
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
              <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-theme4 rounded-full opacity-60" />

              {/* Top Block */}
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-5 p-3 rounded-full bg-theme4/10 flex items-center justify-center">
                  {Icon && <Icon className="h-10 w-10 text-theme4" />}
                </div>

                {/* Title with fixed height */}
                <div className="h-[72px] flex items-center justify-center">
                  <h3 className="text-lg font-semibold text-text leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 mt-4">
                <p className="text-base text-text/80 text-left leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Button */}
              {callToAction?.text && callToAction?.href && (
                <a
                  href={callToAction.href}
                  className="group/button inline-flex items-center justify-center self-center mt-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
                >
                  {/* Inner wrapper keeps alignment stable */}
                  <span className="relative flex items-center">
                    
                    {/* Text */}
                    <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2 text-center">
                      {callToAction.text}
                    </span>

                    {/* Arrow (absolute so it doesn't affect centering) */}
                    <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      &gt;
                    </span>

                  </span>
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Vertical line leading to the next section */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[2px] h-24 bg-theme5 z-30"></div>
    </section>
  );
};

export default Features;
