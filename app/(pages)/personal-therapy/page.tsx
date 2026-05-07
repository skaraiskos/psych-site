import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import PersonalTherapy from '~/components/widgets/PersonalTherapy';

export const metadata: Metadata = {
  title: 'Ψυχοθεραπεία Ενηλίκων',
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
