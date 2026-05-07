import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const PersonalTherapy = dynamic(() => import("~/components/widgets/PersonalTherapy"), { ssr: false });

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
