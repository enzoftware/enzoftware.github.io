"use client";

import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

interface AnalyticsProps {
  token: string;
}

export function Analytics({ token }: AnalyticsProps) {
  useEffect(() => {
    if (!token || token === "YOUR_MIXPANEL_TOKEN") return;

    mixpanel.init(token, {
      track_pageview: true,
      persistence: "localStorage",
    });

    mixpanel.track("portfolio_view", {
      referrer: document.referrer,
      path: window.location.pathname,
    });

    // Delegate click tracking via data attributes
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-mixpanel]");
      if (!target) return;

      const eventName = target.getAttribute("data-mixpanel");
      if (!eventName) return;

      const attrs: Record<string, string> = {};
      for (const attr of Array.from(target.attributes)) {
        if (attr.name.startsWith("data-") && attr.name !== "data-mixpanel") {
          attrs[attr.name.replace("data-", "")] = attr.value;
        }
      }

      mixpanel.track(eventName, attrs);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [token]);

  return null;
}
