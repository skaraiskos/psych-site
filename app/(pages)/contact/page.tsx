import type { Metadata } from 'next';

import Contact from '~/components/widgets/Contact';
import HeaderInner from '~/components/widgets/HeaderInner';

export const metadata: Metadata = {
  title: 'Contact us',
  description: "Φόρμα Επικοινωνίας"
};

const Page = () => {
  return (
    <>
      <HeaderInner page="contact" />
      <Contact />
    </>
  );
};

export default Page;
