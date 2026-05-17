"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "algonyte:cookie-consent";
const GA_ID = "G-449SQXFKS9";
const CLARITY_ID = "wra8lxf0p0";

type ConsentState = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("algonyte:consent", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("algonyte:consent", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): ConsentState {
  try {
    return window.localStorage.getItem(STORAGE_KEY) as ConsentState;
  } catch {
    return null;
  }
}

function getServerSnapshot(): ConsentState {
  return null;
}

/**
 * Loads GA4 with Consent Mode v2 (all storage defaults to denied, upgrades on
 * accept) and gates Microsoft Clarity entirely behind explicit consent.
 *
 * GA4 always loads so anonymized cookieless pings flow from page 1 — that's
 * the point of Consent Mode vs. a hard gate. Clarity records sessions and
 * heatmaps, which is more invasive, so it doesn't load until accept.
 *
 * The default-denied snippet is rendered inline in <head> via app/layout.tsx
 * so it executes before anything else. This component just handles the GA
 * loader, the config call, the conditional Clarity mount, and the consent
 * upgrade on accept.
 */
export default function Analytics() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (consent !== "accepted") return;
    const upgrade = () => {
      window.dataLayer = window.dataLayer || [];
      const gtag =
        window.gtag ??
        function (...args: unknown[]) {
          window.dataLayer.push(args);
        };
      gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    };
    if (typeof window.gtag === "function") {
      upgrade();
    } else {
      const t = window.setTimeout(upgrade, 0);
      return () => window.clearTimeout(t);
    }
  }, [consent]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>

      {consent === "accepted" && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  );
}
