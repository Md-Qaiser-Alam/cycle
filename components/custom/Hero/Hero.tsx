import React from "react";

function Hero() {
  return (
    <div>
      <div className="space-y-8 flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-center md:text-6xl">
          Your feedback hub, <br /> on autopilot
        </h1>
        <p className="text-sm text-[#7d7d7d] text-center md:text-lg md:w-[40rem]">
          {`Cycle is the fastest way for your team to capture product feedback and share customer insights – without the busywork.`}
        </p>
      </div>
    </div>
  );
}

export default Hero;
