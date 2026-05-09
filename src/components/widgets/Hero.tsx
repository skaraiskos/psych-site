import Image from "next/image";
import { HeroProps } from "~/shared/types";

const Hero = ({
  callToAction,
  image,
  image2,
}: HeroProps) => {
  return (
    <section className="relative w-full min-h-screen bg-theme2 overflow-hidden">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col min-h-screen bg-theme2">

        {/* TOP — IMAGE */}
        <div className="h-[80vh] flex items-center justify-center px-12 py-12">
          <div className="relative w-full h-full max-w-md">
            {image && (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover rounded-2xl shadow-lg"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
          </div>
        </div>

        {/* BOTTOM — CONTENT */}
        <div className="flex-1 px-6 py-8 text-black flex flex-col justify-center">

          <h1 className="text-xl font-light tracking-wide mb-1 pointer-events-none">
            Σταυρούλα Μαυρογόνατου
          </h1>

          <h2 className="text-3xl font-semibold leading-tight mb-4 pointer-events-none">
            Ψυχολόγος
          </h2>

         <div className="space-y-4 text-base leading-relaxed text-text/90 pointer-events-none">
            <p>
              Καλώς ήρθατε στον διαδικτυακό μου χώρο!
            </p>

            <p>
              Είμαι η Σταυρούλα Μαυρογόνατου, Ψυχολόγος και εκπαιδευόμενη Γνωσιακή – Συμπεριφορική Ψυχοθεραπεύτρια.
            </p>

            <p>
              Παρέχω ατομική ψυχοθεραπεία σε ενήλικες και εφήβους, συμβουλευτική υποστήριξη γονέων και συντονίζω ψυχοεκπαιδευτικές ομάδες γονέων.
            </p>

            <p>
              Στόχος μου στη θεραπευτική διαδικασία είναι να δημιουργείται ένας ασφαλής χώρος, όπου κάθε άνθρωπος μπορεί να κατανοήσει σε βάθος τον εαυτό του και τις δυσκολίες που βιώνει, να επεξεργαστεί όσα τον επιβαρύνουν και να αναπτύξει πιο λειτουργικούς τρόπους σκέψης και διαχείρισης ώστε  να χτίσει μια πιο ουσιαστική σχέση με τον εαυτό και τους άλλους.
            </p>

            <p>
              Το παρελθόν αποτελεί αναπόσπαστο κομμάτι της εμπειρίας μας και, όταν το επεξεργαζόμαστε κατάλληλα, μπορεί να αποτελέσει πηγή γνώσης, κατανόησης και πολύτιμων «μαθημάτων».
            </p>
          </div>

          {callToAction?.href && (
           <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href={callToAction.href}
                className="group inline-flex items-center justify-center self-center mt-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
              >
                {/* Inner wrapper keeps alignment stable */}
                <span className="relative flex items-center">
                  
                  {/* Text */}
                  <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2">
                    {callToAction.text}
                  </span>

                  {/* Arrow (absolute so it doesn't affect centering) */}
                  <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    &gt;
                  </span>

                </span>
              </a>
            </div>
          )}

        </div>

      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 py-8 lg:py-10">

        <div className="grid grid-cols-[1fr_1.25fr] gap-14 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="relative">

            {/* Back image */}
            {image2 && (
              <div className="relative w-[82%] h-[640px] ml-auto rounded-xl overflow-hidden">
                <Image
                  src={image2.src}
                  alt={image2.alt}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            )}

            {/* Front image */}
            {image && (
              <div className="absolute left-0 bottom-10 w-[78%] h-[500px] border-[7px] border-theme6 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="py-6">

            <div className="w-48 border-t border-black/40 mb-8" />

            <h1 className="text-3xl font-light text-center lg:text-left mb-2 tracking-wide pointer-events-none">
              Σταυρούλα Μαυρογόνατου
            </h1>

            <h2 className="text-4xl font-semibold text-center lg:text-left leading-tight mb-8 pointer-events-none">
              Ψυχολόγος
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-text/90 pointer-events-none">
              <p>
                Καλώς ήρθατε στον διαδικτυακό μου χώρο!
              </p>

              <p>
                Είμαι η Σταυρούλα Μαυρογόνατου, Ψυχολόγος και εκπαιδευόμενη Γνωσιακή – Συμπεριφορική Ψυχοθεραπεύτρια.
              </p>

              <p>
                Παρέχω ατομική ψυχοθεραπεία σε ενήλικες και εφήβους, συμβουλευτική υποστήριξη γονέων και συντονίζω ψυχοεκπαιδευτικές ομάδες γονέων.
              </p>

              <p>
                Στόχος μου στη θεραπευτική διαδικασία είναι να δημιουργείται ένας ασφαλής χώρος, όπου κάθε άνθρωπος μπορεί να κατανοήσει σε βάθος τον εαυτό του και τις δυσκολίες που βιώνει, να επεξεργαστεί όσα τον επιβαρύνουν και να αναπτύξει πιο λειτουργικούς τρόπους σκέψης και διαχείρισης ώστε  να χτίσει μια πιο ουσιαστική σχέση με τον εαυτό και τους άλλους.
              </p>

              <p>
                Το παρελθόν αποτελεί αναπόσπαστο κομμάτι της εμπειρίας μας και, όταν το επεξεργαζόμαστε κατάλληλα, μπορεί να αποτελέσει πηγή γνώσης, κατανόησης και πολύτιμων «μαθημάτων».
              </p>
            </div>

            {callToAction?.href && (
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href={callToAction.href}
                  className="group inline-flex items-center justify-center self-center mt-6 px-6 py-2.5 bg-theme7 text-white font-medium rounded-3xl duration-300 transition-transform hover:scale-105"
                >
                  {/* Inner wrapper keeps alignment stable */}
                  <span className="relative flex items-center">
                    
                    {/* Text */}
                    <span className="transition-transform duration-500 ease-out group-hover:-translate-x-2">
                      {callToAction.text}
                    </span>

                    {/* Arrow (absolute so it doesn't affect centering) */}
                    <span className="absolute right-[-8px] opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                      &gt;
                    </span>

                  </span>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;