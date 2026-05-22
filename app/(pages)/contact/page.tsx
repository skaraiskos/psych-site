import type { Metadata } from 'next';

import ContactPage from '~/components/widgets/ContactPage';
import InstagramSection from '~/components/widgets/InstagramSection';
import HeaderInner from '~/components/widgets/HeaderInner';

export const metadata: Metadata = {
  title: 'Contact us',
  description: "Φόρμα Επικοινωνίας"
};

const Page = () => {
  return (
    <>
      <HeaderInner page="contact" />
      <ContactPage />
      <InstagramSection />
    </>
  );
};

export default Page;
