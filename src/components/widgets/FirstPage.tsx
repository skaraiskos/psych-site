"use client";
import { motion } from "framer-motion";
import ParallaxBackground from '../common/ParallaxBackground';

import hero2Img from '~/assets/images/firstPage.png';

const firstPageHome={
  id: 'firstPage-on-home',
  backgroundImage:{
    src: hero2Img,
    alt: 'Background',
  },
  title: 'Καλώς Ήρθατε!',
  description:
    '"Όταν αλλάξεις τον τρόπο που βλέπεις τα πράγματα, τα πράγματα που βλέπεις αλλάζουν"',
  description1:
    'Wayne W.Dyer',
  callToAction: {
    text: 'Επικοινωνήστε μαζί μου!',
    href: '/contact',
  },
};

const FirstPage = () => {
  return (
    <section id={firstPageHome.id} className="relative w-full min-h-[100dvh] flex items-center justify-center text-center overflow-hidden isolate">

        {/* Parallax Background (ALL devices) */}
        <ParallaxBackground
          image={firstPageHome.backgroundImage}
          sectionId="firstPage-on-home"
        />

        {/* wave cut-out */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-theme2
          [mask-image:url('/images/wave.svg')] [mask-repeat:no-repeat] [mask-size:cover]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-20 flex flex-col items-center px-6 max-w-6xl">

            {/* Line 1 — Bold */}
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 tracking-tight md:tracking-normal">
              {firstPageHome.title}
            </h1>

            {/* Line 2 — Quote */}
            <p className="text-base md:text-xl text-black/90 mb-3 tracking-normal">
              {firstPageHome.description}
            </p>

            {/* Line 3 — Name */}
            {/*<p className="text-base font-bold italic md:text-base text-black/90 mb-8 tracking-normal">
              {firstPageHome.description1}
            </p>*/}

            {/* Button */}
            {firstPageHome.callToAction?.text && firstPageHome.callToAction?.href && (
              <a
                href={firstPageHome.callToAction.href}
                className="group inline-flex items-center justify-center self-center mt-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
              >
                {/* Inner wrapper keeps alignment stable */}
                <span className="relative flex items-center">
                  
                  {/* Text */}
                  <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2">
                    {firstPageHome.callToAction.text}
                  </span>

                  {/* Arrow (absolute so it doesn't affect centering) */}
                  <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    &gt;
                  </span>

                </span>
              </a>
            )}

          </div>
        </motion.div>

    </section>
  );
};

export default FirstPage;
