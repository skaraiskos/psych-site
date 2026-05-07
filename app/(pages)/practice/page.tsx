import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const Practice = dynamic(() => import("~/components/widgets/Practice"), { ssr: false });

export const metadata: Metadata = {
  title: 'Γνωσιακή Συμπεριφορική Ψυχοθεραπεία',
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
