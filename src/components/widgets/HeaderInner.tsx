"use client";

import { PAGE_TITLES } from "~/shared/titles";

const HeaderInner = ({ page }: { page: keyof typeof PAGE_TITLES }) => (

  <section className="relative py-0 w-full">
    <div className="text-center p-8 bg-theme4">
      <h2 className="font-bold text-white text-3xl md:text-3xl">
          {PAGE_TITLES[page]}
      </h2>
    </div>
    
  </section>
);

export default HeaderInner;
