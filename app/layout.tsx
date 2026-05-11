import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import ScrollToTopButton from "~/components/common/ScrollToTopButton";
import CookieConsentComponent from "~/components/common/CookieConsent";
import AnalyticsProvider from "~/components/common/AnalyticsProvider";
import { CookieConsentProvider } from "~/components/common/CookieConsentProvider";

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="motion-safe:scroll-smooth tracking-tight antialiased text-gray-900 theme-light">
        <CookieConsentProvider>
          <Providers>
            <CookieConsentComponent />
            <Header />
            <ToasterProvider/>
            <main>
              {children}
            </main>
            <ScrollToTopButton />
            <Footer />
            <AnalyticsProvider />
          </Providers>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
