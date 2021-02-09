import { useEffect } from "react";
import { useRouter } from "next/router";
import config from "@/config";

// Facebook Pixel analytics
// https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/components/FacebookPixel.js
// https://github.com/zsajjad/react-facebook-pixel/issues/53

export default function FacebookPixel({ children }) {
  const router = useRouter();

  useEffect(() => {
    let fbPixel;

    import("react-facebook-pixel").then((module) => {
      if (!config.fbPixelId) return;
      fbPixel = module.default;
      fbPixel.init(config.fbPixelId, {
        autoConfig: true,
        debug: true,
      });
      fbPixel.pageView();
    });

    function onRouteChange() {
      // Check fbPixel has been initialized
      if (fbPixel) {
        fbPixel.pageView();
      }
    }

    router.events.on("routeChangeComplete", onRouteChange);
    return () => router.events.off("routeChangeComplete", onRouteChange);
  }, [router.events]);

  return children;
}
