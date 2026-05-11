import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Practice from '~/components/widgets/Practice';

export const metadata: Metadata = {
  title: 'Γνωσιακή Συμπεριφορική Ψυχοθεραπεία',
  description: "Η ψυχοθεραπευτική προσέγγιση μου"
};

const Page = () => {
  return (
    <>
      <HeaderInner page="practice" />
      <Practice/>
    </>
  );
};

export default Page;
