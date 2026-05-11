import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Services from '~/components/widgets/Services';

export const metadata: Metadata = {
  title: 'Υπηρεσίες',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="services" />
      <Services/>
    </>
  );
};

export default Page;
