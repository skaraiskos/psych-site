import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import dynamic from "next/dynamic";

const Gordons = dynamic(() => import("~/components/widgets/Gordons"), { ssr: false });

export const metadata: Metadata = {
  title: 'Εργαστήριο Αποτελεσματικού Γονέα',
};

const Page = () => {
  return (
    <>
      <HeaderInner page="gordons" />
      <Gordons/>
    </>
  );
};

export default Page;
