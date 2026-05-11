import { Metadata } from 'next';

import HeaderInner from '~/components/widgets/HeaderInner';
import Gordons from '~/components/widgets/Gordons';

export const metadata: Metadata = {
  title: 'Εργαστήριο Αποτελεσματικού Γονέα',
  description: "Βιωματικό ψυχοεκπαιδευτικό εργαστήριο που υποστηρίζει τους γονείς να ανταποκρίνονται με μεγαλύτερη επίγνωση, σταθερότητα και αποτελεσματικότητα στον ρόλο τους"
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
