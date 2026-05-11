import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import PersonalTherapy from '~/components/widgets/PersonalTherapy';

export const metadata: Metadata = {
  title: 'Ψυχοθεραπεία Ενηλίκων',
  description: "Ψυχοθεραπεία σε ένα πλαίσιο συνεργασίας, ασφάλειας και εμπιστοσύνης"
};

const Page = () => {
  return (
    <>
      <HeaderInner page="personal_therapy" />
      <PersonalTherapy/>
    </>
  );
};

export default Page;
