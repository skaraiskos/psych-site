import HeaderInner from "~/components/widgets/HeaderInner";

export default function BlogLayout({ children }) {
  return (
    <>
      <HeaderInner page="blog" />

      <section className="mx-auto max-w-7xl px-6 py-8 lg:py-4">
        {children}
      </section>
    </>
  );
}