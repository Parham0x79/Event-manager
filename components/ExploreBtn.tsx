"use client";

import Image from "next/image";
import "../app/globals.css";

const ExploreBtn = () => {
  return (
    <button type="button" className="explore-btn">
      <a href="#events" className="flex-center gap-2 text w-full">
        Explore Events
      </a>

      <Image
        src={"/icons/arrow-down.svg"}
        alt="arrow-down"
        width={18}
        height={18}
      />
    </button>
  );
};

export default ExploreBtn;
