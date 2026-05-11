import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import About from "~/components/widgets/About";

export const metadata: Metadata = {
  title: 'Βιογραφικό',
  description: "Λίγα λόγια για εμένα"
};

export default function Page() {
  return (
    <>
      <HeaderInner page="about" />
      <About/>
    </>
  );
}
