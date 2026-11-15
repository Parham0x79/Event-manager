"use client";

import Image from "next/image";
import Link from "next/link";
// import posthog from "posthog-js";
import posthog from "posthog-js/dist/module.no-external";
import { eventManagerLogger } from "@/lib/posthog-logger";

const EventCard = ({
  title,
  image,
  slug,
  location,
  date,
  time,
}: {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}) => {
  const handleEventCardClick = () => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("event_card_selected", { event_slug: slug });
      eventManagerLogger.info("event catalogue card selected", {
        event_slug: slug,
      });
    }
  };

  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      onClick={handleEventCardClick}
    >
      <Image
        src={image}
        alt={`event-${title}`}
        className="poster"
        width={410}
        height={300}
        loading="eager"
      />

      <div className="flex flex-row gap-2">
        <Image
          src={"/icons/pin.svg"}
          alt="location"
          className="w-auto h-auto"
          width={14}
          height={14}
        />
        <p>{location}</p>
      </div>

      <h5 className="title italic font-extralight hover:underline font-schibsted-grotesk">
        {title}
      </h5>

      <div className="datetime">
        <div>
          <Image
            src={"/icons/calendar.svg"}
            alt="date"
            className="w-auto h-auto"
            width={14}
            height={14}
          />
          <p>{date}</p>
        </div>

        <div>
          <Image
            src={"/icons/clock.svg"}
            alt="date"
            className="w-auto h-auto"
            width={14}
            height={14}
          />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
