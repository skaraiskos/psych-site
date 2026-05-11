"use client";

import { Analytics } from "@vercel/analytics/react";
import { useCookieConsent } from "./CookieConsentProvider";

export default function AnalyticsProvider() {
  const { consent, loaded } = useCookieConsent();

  if (!loaded) return null;

  if (!consent.analytics) return null;

  return <Analytics />;
}