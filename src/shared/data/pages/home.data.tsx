import {
  PurposeProps,
  HeroProps,
} from '../../types';
import heroImg from '~/assets/images/hero3.jpg';
/*import handsImg from '~/assets/images/stacia.png';*/
import handsImg from '~/assets/images/firstPage.png';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Σταυρούλα Μαυρογόνατου
    </>
  ),
  subtitle: (
    <>
      Ψυχολόγος | Εκπ. Ψυχοθεραπεύτρια
    </>
  ),
  tagline: "",
  callToAction: {
    text: 'Περισσότερα για μένα',
    href: '/about',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero',
  },
  image2: {
    src: handsImg,
    alt: 'Hero Background',
  },
};

// Purpose data on Home page *******************
export const purposeHome: PurposeProps = {
  id: 'purpose-on-home',
  hasBackground: false,
  header: {
    title: (
      <>
        Υποστήριξη για Εσάς και την Οικογένειά σας
      </>
    ),
    subtitle:
      "Ένα υποστηρικτικό πλαίσιο συνεργασίας με αποδοχή και επιστημονική υπευθυνότητα που επιτρέπει στο άτομο να εκφραστεί, να επεξεργαστεί τη μοναδικότητα των εμπειριών του, να διερευνήσει πιθανές λύσεις στο πρόβλημά του και να εκπαιδευτεί στην εφαρμογή των νέων πρακτικών.",
    tagline: '',
  },
};