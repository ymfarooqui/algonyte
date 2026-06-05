"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// LeadConnector chat widget IDs. Each path picks one widget; on route
// change the Script is keyed on the id so it remounts and any DOM the
// previous widget injected is cleaned up below.
const DEFAULT_WIDGET_ID = "69fee264ba1fcefce9ee914b";
const ROUTE_WIDGETS: Record<string, string> = {
  "/contact": "6a083594f7ab413f4472a230",
};

// Coordinate with CookieBanner so the chat widget doesn't appear at the
// same moment as the cookie consent popup.
const COOKIE_CONSENT_KEY = "algonyte:cookie-consent";
const POST_CONSENT_DELAY_MS = 1500;
const MAX_WAIT_MS = 25000;

function widgetIdForPath(pathname: string | null): string {
  if (!pathname) return DEFAULT_WIDGET_ID;
  return ROUTE_WIDGETS[pathname] ?? DEFAULT_WIDGET_ID;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const widgetId = widgetIdForPath(pathname);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Wait until the cookie banner has been dismissed (or 25s elapses) before
  // loading the chat widget. Polling is required because localStorage
  // `storage` events don't fire in the same tab that wrote the value.
  useEffect(() => {
    if (shouldLoad) return;
    if (typeof window === "undefined") return;

    let cancelled = false;
    const triggerSoon = () => {
      window.setTimeout(() => {
        if (!cancelled) setShouldLoad(true);
      }, POST_CONSENT_DELAY_MS);
    };

    if (window.localStorage.getItem(COOKIE_CONSENT_KEY)) {
      triggerSoon();
      return () => {
        cancelled = true;
      };
    }

    const pollId = window.setInterval(() => {
      if (window.localStorage.getItem(COOKIE_CONSENT_KEY)) {
        window.clearInterval(pollId);
        triggerSoon();
      }
    }, 500);

    const fallbackId = window.setTimeout(() => {
      window.clearInterval(pollId);
      triggerSoon();
    }, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
      window.clearTimeout(fallbackId);
    };
  }, [shouldLoad]);

  // When the widget id changes (SPA route change between pages with
  // different widgets), strip the previous chat widget's injected DOM so
  // the new loader can mount fresh. Selectors are scoped to chat-widget
  // injected nodes only, do NOT match `api.leadconnectorhq.com/widget/form`
  // iframes, since those are the embedded form widgets on /contact.
  useEffect(() => {
    return () => {
      const selectors = [
        "iframe[src*='widgets.leadconnectorhq.com']",
        "iframe[src*='chat-widget']",
        "[id*='chat-widget']",
        "[class*='chat-widget']",
      ];
      for (const sel of selectors) {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      }
    };
  }, [widgetId]);

  if (!shouldLoad) return null;

  return (
    <Script
      key={widgetId}
      id={`lc-loader-${widgetId}`}
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
      strategy="afterInteractive"
    />
  );
}
