import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import OnlineTherapy from '~/components/widgets/OnlineTherapy';

export const metadata: Metadata = {
  title: 'Online Θεραπείες',
  description: "Online συνεδρίες ψυχοθεραπείας και συμβουλευτικής υποστήριξης"
};

const Page = () => {
  return (
    <>
      <HeaderInner page="online_therapy" />
      <OnlineTherapy/>
    </>
  );
};

export default Page;
