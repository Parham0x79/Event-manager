"use client";

import Image from "next/image";
// import posthog from "posthog-js";
import posthog from "posthog-js/dist/module.no-external";
import { eventManagerLogger } from "@/lib/posthog-logger";
import "../app/globals.css";

const ExploreBtn = () => {
  const handleExploreClick = () => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("events_explored");
      eventManagerLogger.info("event catalogue exploration requested", {
        action: "scroll_to_events",
      });
    }
  };

  return (
    <button type="button" className="explore-btn" onClick={handleExploreClick}>
      <a href="#events" className="flex-center gap-2 text w-full">
        Explore Events
      </a>

      <Image
        src={"/icons/arrow-down.svg"}
        alt="arrow-down"
        width={18}
        height={18}
        className="w-auto h-auto"
      />
    </button>
  );
};

export default ExploreBtn;
