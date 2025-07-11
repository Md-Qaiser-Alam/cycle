"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";

import React, { useState } from "react";
const slideConfig = [
  { name: "Copilot", progress: "50%" },
  { name: "Apple Vision Pro", progress: "40%" },
  { name: "Semantic Search", progress: "60%" },
  { name: "Auto generate titles", progress: "70%" },
  { name: "Dark Mode", progress: "20%" },
];

function Slide1() {
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
        <p className="text-sm font-bold">Top feature requests</p>
      </div>
      <div className="flex flex-col gap-2.5 items-start">
        {slideConfig.map((e, i) => (
          <div key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="flex items-center space-x-3"
                  onMouseOver={() => setHoverItem(i)}
                  onMouseLeave={() => setHoverItem(null)}
                  initial={false}
                  animate={{ opacity: computedOpacity(i) }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="h-2 w-[3rem] rounded-full bg-[#c4cddb] opacity-32" />

                  <div className="bg-[#99d4ff33] h-[1.4rem] w-80 rounded-2xl p-[3px]">
                    <div
                      className="h-full rounded-2xl"
                      style={{
                        background:
                          "radial-gradient(circle farthest-side at 0%,#0081df99,#99d4ff99)",
                        width: e.progress,
                      }}
                    />
                  </div>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="px-4 py-3 ">
                <p className="text-[16px]">{e.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide1;
