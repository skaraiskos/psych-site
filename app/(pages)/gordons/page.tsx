import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Gordons from '~/components/widgets/Gordons';

export const metadata: Metadata = {
  title: 'Εργαστήριο Αποτελεσματικού Γονέα',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="gordons" />
      <Gordons/>
    </>
  );
};

export default Page;
