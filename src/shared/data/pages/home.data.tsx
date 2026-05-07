import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconUser,
  IconUsers,
  IconScreenShare,
  IconBulb,
  IconCheck,
  IconClock,
  IconDownload,
  IconColorFilter,
  IconMail,
  IconMapPin,
  IconPhoneCall,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
} from '../../types';
import heroImg from '~/assets/images/hero3.jpg';
import handsImg from '~/assets/images/stacia.png';

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
      "Οι 4 πυλώνες της θεραπείας",
    tagline: '',
  },
};