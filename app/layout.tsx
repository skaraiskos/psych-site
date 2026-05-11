import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import ScrollToTopButton from "~/components/common/ScrollToTopButton";
import CookieConsentComponent from "~/components/common/CookieConsent";
import AnalyticsProvider from "~/components/common/AnalyticsProvider";
import { CookieConsentProvider } from "~/components/common/CookieConsentProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Comfortaa as CustomFont } from 'next/font/google';
import ToasterProvider from "~/components/common/ToasterProvider";
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://stavroulamavrogonatou.gr"),

  title: {
    default: "Σταυρούλα Μαυρογόνατου",
    template: "%s | Σταυρούλα Μαυρογόνατου",
  },

  description:
    "Ψυχοθεραπεία και συμβουλευτική υποστήριξη από τη Σταυρούλα Μαυρογόνατου.",

  keywords: [
    "ψυχολόγος",
    "ψυχοθεραπεία",
    "συμβουλευτική",
    "Αθήνα",
    "Σταυρούλα Μαυρογόνατου",
  ],

  authors: [{ name: "Σταυρούλα Μαυρογόνατου" }],

  creator: "Σταυρούλα Μαυρογόνατου",

  openGraph: {
    type: "website",
    locale: "el_GR",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://stavroulamavrogonatou.gr",
    siteName: "Σταυρούλα Μαυρογόνατου",

    title: "Σταυρούλα Μαυρογόνατου",

    description:
      "Ψυχοθεραπεία και συμβουλευτική υποστήριξη.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Σταυρούλα Μαυρογόνατου",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Σταυρούλα Μαυρογόνατου",

    description:
      "Ψυχοθεραπεία και συμβουλευτική υποστήριξη.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico"
  },
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
            <SpeedInsights />
          </Providers>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
