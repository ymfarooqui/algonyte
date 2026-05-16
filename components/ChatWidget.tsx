"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// LeadConnector chat widget IDs. Each path picks one widget; on route
// change the Script is keyed on the id so it remounts and any DOM the
// previous widget injected is cleaned up below.
const DEFAULT_WIDGET_ID = "69fee264ba1fcefce9ee914b";
const ROUTE_WIDGETS: Record<string, string> = {
  "/contact": "6a083594f7ab413f4472a230",
};

function widgetIdForPath(pathname: string | null): string {
  if (!pathname) return DEFAULT_WIDGET_ID;
  return ROUTE_WIDGETS[pathname] ?? DEFAULT_WIDGET_ID;
}

export default function ChatWidget() {
  const pathname = usePathname();
  const widgetId = widgetIdForPath(pathname);

  // When the widget id changes (SPA route change between pages with
  // different widgets), strip the previous chat widget's injected DOM so
  // the new loader can mount fresh. Selectors are scoped to chat-widget
  // injected nodes only — do NOT match `api.leadconnectorhq.com/widget/form`
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
