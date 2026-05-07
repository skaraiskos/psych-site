import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const Features2 = dynamic(() => import("~/components/widgets/Features2"), { ssr: false });

export const metadata: Metadata = {
  title: 'Υπηρεσίες',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="services" />
      <Features2/>
    </>
  );
};

export default Page;
