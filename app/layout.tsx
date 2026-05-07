import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import ScrollToTopButton from "~/components/common/ScrollToTopButton";

import { Comfortaa as CustomFont } from 'next/font/google';
import ToasterProvider from "~/components/common/ToasterProvider";
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="motion-safe:scroll-smooth tracking-tight antialiased text-gray-900 theme-light">
        <Providers>
          <Header />
          <ToasterProvider/>
          <main>
            {children}
            <ScrollToTopButton />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
