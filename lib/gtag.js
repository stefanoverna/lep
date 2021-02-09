export const GA_TRACKING_ID = process.env.GTM_TRACKING_ID;

// from: https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/lib/gtag.js
// but also: https://github.com/chakra-ui/chakra-ui/blob/develop/website/src/analytics/track-event.ts

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
