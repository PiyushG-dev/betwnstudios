"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalcomIntegration() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    async function initializeCal() {
      try {
        if (iframeLoaded) {
          const cal = await getCalApi();
          cal("ui", {
            styles: { branding: { brandColor: "#000000" } },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        }
      } catch (error) {
        console.error("Failed to initialize Cal.com API:", error);
      }
    }

    initializeCal();
  }, [iframeLoaded]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <Cal
      calLink="betwn-studios/15min"
      onLoad={handleIframeLoad} // Assuming the Cal component forwards this prop to the iframe
      config={{ layout: "month_view" }}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
