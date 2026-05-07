import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Parenting from '~/components/widgets/Parenting';

export const metadata: Metadata = {
  title: 'Συμβουλευτική Γονέων',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="parenting" />
      <Parenting/>
    </>
  );
};

export default Page;
