import React from "react";

type Tprops = {
  currentHeroOpacity: number;
};

function Hero({ currentHeroOpacity }: Tprops) {
  return (
    <div
      style={{
        opacity: currentHeroOpacity,
        transform: `translateY(-${(1 - currentHeroOpacity) * 1.5}rem)`,
        // transform: "translateY(3rem)",
      }}
    >
      <div className="space-y-8 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-center md:text-6xl">
          Your feedback hub, <br /> on autopilot
        </h1>
        <p className="text-sm text-[#7d7d7d] text-center md:text-lg md:w-[40rem] px-8">
          {`Cycle is the fastest way for your team to capture product feedback and share customer insights – without the busywork.`}
        </p>
      </div>
    </div>
  );
}

export default Hero;
