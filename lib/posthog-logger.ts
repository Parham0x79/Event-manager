"use client";

// import posthog from "posthog-js";
import posthog from "posthog-js/dist/module.no-external";

type LogAttributes = Record<string, boolean | number | string>;

const isPostHogConfigured = () =>
  Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST,
  );

export const eventManagerLogger = {
  info(message: string, attributes: LogAttributes) {
    if (isPostHogConfigured()) {
      posthog.logger.info(message, attributes);
    }
  },
};
