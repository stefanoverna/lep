import React from "react";
import { useRouter } from "next/router";
import * as fbpx from "@/lib/fbpx";

export default function useFbpxPageEvent(actionName) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = () => {
      fbpx.event({
        action: actionName,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [actionName, router.events]);
}
