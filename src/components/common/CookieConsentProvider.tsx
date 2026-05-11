"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ConsentState = {
  analytics: boolean;
};

type CookieConsentContextType = {
  consent: ConsentState;
  loaded: boolean;
  setConsent: (consent: ConsentState) => void;
};

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export function CookieConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  const [consent, setConsentState] = useState<ConsentState>({
    analytics: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");

    if (stored) {
      try {
        setConsentState(JSON.parse(stored));
      } catch {
        console.error("Invalid cookie consent data");
      }
    }

    setLoaded(true);
  }, []);

  const setConsent = (newConsent: ConsentState) => {
    setConsentState(newConsent);

    localStorage.setItem(
      "cookie-consent",
      JSON.stringify(newConsent)
    );
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        loaded,
        setConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent must be used inside CookieConsentProvider"
    );
  }

  return context;
}