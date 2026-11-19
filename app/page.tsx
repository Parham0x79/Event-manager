import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import Shuffle from "@/components/ui/Shuffle";
import { events } from "@/lib/constants";

function page() {
  return (
    <section>
      <Shuffle
        className="font-black font-schibsted-grotesk text-2xl max-sm:text-3xl"
        text={`The Hub for Every Dev`}
        effect="slide"
        shuffleDirection="right"
        color="#999999"
        accentColor="#b40059"
        duration={0.65}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover
        hoverRadius={0}
        motionBlur={false}
        respectReducedMotion={true}
        maxDelay={0}
        scrambleCharset=""
        loop={true}
        loopDelay={3}
      />
      <Shuffle
        className="font-black font-schibsted-grotesk text-2xl max-sm:text-3xl sm:ml-19"
        text={`Event You Can't Miss`}
        effect="slide"
        shuffleDirection="right"
        color="#999999"
        accentColor="#b40059"
        duration={0.65}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover
        hoverRadius={0}
        motionBlur={false}
        respectReducedMotion={true}
        maxDelay={0}
        scrambleCharset=""
        loop={true}
        loopDelay={3.5}
      />

      <p className="mt-6 sm:m-12 text-sm sm:text-lg font-martian-mono font-extralight italic">
        Hackatons, Meetups and Conferences, All in one place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-9" id="events">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <EventCard key={events.indexOf(event)} {...event} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;
