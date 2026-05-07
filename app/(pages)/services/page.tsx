import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Features2 from '~/components/widgets/Features2';

export const metadata: Metadata = {
  title: 'Υπηρεσίες',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="services" />
      <Features2/>
    </>
  );
};

export default Page;
