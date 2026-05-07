import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const About = dynamic(() => import("~/components/widgets/About"), { ssr: false });

export const metadata: Metadata = {
  title: 'Βιογραφικό',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="about" />
      <About/>
    </>
  );
};

export default Page;