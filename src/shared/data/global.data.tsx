import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';
import logoImg from '~/assets/images/StavroulaLogo.png';

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Αρχική',
      href: '/',
    },
    {
      label: 'Βιογραφικό',
      href: '/about',
    },
    {
      label: 'Υπηρεσίες',
      href: '/services',
      icon: IconChevronDown,
      links: [
        {
          label: 'Ατομική Ψυχοθεραπεία',
          href: '/personal-therapy',
        },
        {
          label: 'Συμβουλευτική Γονέων',
          href: '/parenting',
        },
        {
          label: 'Εργαστήριο Αποτελεσματικού Γονέα',
          href: '/gordons',
        },
        {
          label: 'Online Συνεδρίες',
          href: '/online-therapy',
        }
      ],
    },
    {
      label: 'Η Προσέγγιση',
      href: '/practice',
    },
    {
      label: 'Άρθρα',
      href: '/blog',
    },
    {
      label: 'Επικοινωνία',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Μάθε περισσότερα',
      href: '/services',
      targetBlank: true,
    },
  ],
  image: {
    src: logoImg,
    alt: 'Hero TailNext',
  },
  isSticky: true,
  showToggleTheme: false,
  position: 'right',
};

