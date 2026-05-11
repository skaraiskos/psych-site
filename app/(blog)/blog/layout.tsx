import HeaderInner from "~/components/widgets/HeaderInner";
import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderInner page="blog" />

      <section className="mx-auto max-w-7xl px-2 py-8 lg:py-4 overflow-x-hidden">
        {children}
      </section>
    </>
  );
}