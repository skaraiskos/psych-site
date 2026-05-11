"use client";

import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieSettingsButton() {
  return (
    <button
      onClick={() => CookieConsent.showPreferences()}
      className="text-sm bg-white text-black px-3 py-1.5 rounded-md shadow-sm hover:bg-gray-100 transition"
    >
      Ρυθμίσεις Cookies
    </button>
  );
}