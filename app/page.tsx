import Shuffle from "@/components/Shuffle";

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
        loop={false}
        loopDelay={0}
      />
      <Shuffle
        className="font-black font-schibsted-grotesk text-2xl max-sm:text-3xl sm:ml-24"
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
        loop={false}
        loopDelay={0}
      />
    </section>
  );
}

export default page;
