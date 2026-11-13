import Shuffle from "@/components/Shuffle";

function page() {
  return (
    <div>
      <Shuffle
        className="font-black font-schibsted-grotesk text-2xl max-sm:text-4xl"
        text="Welcome to Event Hub"
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
    </div>
  );
}

export default page;
