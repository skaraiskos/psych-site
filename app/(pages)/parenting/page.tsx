import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const Parenting = dynamic(() => import("~/components/widgets/Parenting"), { ssr: false });

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
