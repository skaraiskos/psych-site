"use client";

import { useEffect, useRef } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

import "vanilla-cookieconsent/dist/cookieconsent.css";

import { useCookieConsent } from "./CookieConsentProvider";

const CookieConsentComponent = () => {
  const { setConsent } = useCookieConsent();
  const initialized = useRef(false);

  useEffect(() => {
    //prevents double init (React Strict Mode in dev)
    if (initialized.current) return;
    initialized.current = true;

    //ensures we are in browser only
    if (typeof window === "undefined") return;

    const init = async () => {
      await import("vanilla-cookieconsent");

      CookieConsent.run({
        mode: "opt-in",

        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false,
          },

          preferencesModal: {
            layout: "box",
            equalWeightButtons: true,
            flipButtons: false,
          },
        },

        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },

          analytics: {
            enabled: false,
            autoClear: {
              cookies: [{ name: /^_ga/ }],
            },
          },
        },

        language: {
          default: "el",
          translations: {
            el: {
              consentModal: {
                title: "Χρήση Cookies",
                description:
                  "Η ιστοσελίδα χρησιμοποιεί cookies για βασική λειτουργικότητα και ανώνυμα στατιστικά χρήσης.",
                acceptAllBtn: "Αποδοχή όλων",
                acceptNecessaryBtn: "Μόνο απαραίτητα",
                showPreferencesBtn: "Ρυθμίσεις",
              },

              preferencesModal: {
                title: "Προτιμήσεις Cookies",
                acceptAllBtn: "Αποδοχή όλων",
                acceptNecessaryBtn: "Μόνο απαραίτητα",
                savePreferencesBtn: "Αποθήκευση",

                sections: [
                  {
                    title: "Απαραίτητα Cookies",
                    description:
                      "Αυτά τα cookies είναι απαραίτητα για τη λειτουργία της ιστοσελίδας.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Στατιστικά / Analytics",
                    description:
                      "Βοηθούν στην κατανόηση της χρήσης της ιστοσελίδας μέσω ανώνυμων δεδομένων.",
                    linkedCategory: "analytics",
                  },
                ],
              },
            },
          },
        },

        onConsent: ({ cookie }) => {
          setConsent({
            analytics: cookie.categories?.includes("analytics") ?? false,
          });
        },

        onChange: ({ cookie }) => {
          setConsent({
            analytics: cookie.categories?.includes("analytics") ?? false,
          });
        },
      });
    };

    init();
  }, [setConsent]);

  return null;
};

export default CookieConsentComponent;