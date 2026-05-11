import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Services from '~/components/widgets/Services';

export const metadata: Metadata = {
  title: 'Υπηρεσίες',
  description: "Υπηρεσίες ψυχοθεραπείας και συμβουλευτικής υποστήριξης με στόχο την προσωπική ανάπτυξη, την ενδυνάμωση και τη βελτίωση της ψυχικής ευεξίας.",
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
