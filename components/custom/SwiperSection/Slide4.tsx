"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import React, { useState } from "react";
const slideConfig = [
  { name: "Copilot", progress: "15rem" },
  { name: "Apple Vision Pro", progress: "10rem" },
  { name: "Semantic Search", progress: "12rem" },
  { name: "Auto generate titles", progress: "18rem" },
  { name: "Dark Mode", progress: "13rem" },
];

function Slide4() {
  const [hoverItem, setHoverItem] = useState<number | null>(null);
  const computedOpacity = (i: number) => {
    return hoverItem !== null && hoverItem !== i ? 0.5 : 1;
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 items-center">
        <Image
          src={
            "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65d8ce6128998773f23c1ab5_CycleAI.svg"
          }
          alt="star"
          width={20}
          height={20}
        />
        <p className="text-sm font-bold">Summary of customer quotes</p>
      </div>
      <div className="flex flex-col gap-2.5 items-start border p-6 rounded-md">
        <div
          className="h-4 w-[7rem] rounded-md mb-3"
          style={{
            backgroundImage:
              "radial-gradient(circle farthest-side,#adeedb,#6cceb1),linear-gradient(#6cceb1,#6cceb1)",
          }}
        />
        {slideConfig.map((e, i) => (
          <div key={i}>
            <div className="flex items-center space-x-3 relative w-full">
              <div
                className="bg-[#c4cddb3d] h-[.6rem] rounded-2xl p-[3px]"
                style={{ width: e.progress }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide4;
