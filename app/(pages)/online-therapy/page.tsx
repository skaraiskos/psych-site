import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const OnlineTherapy = dynamic(() => import("~/components/widgets/OnlineTherapy"), { ssr: false });

export const metadata: Metadata = {
  title: 'Online Θεραπείες',
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
