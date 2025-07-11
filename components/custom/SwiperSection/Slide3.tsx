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
  { name: "Linear", progress: "70%" },
  { name: "Attio", progress: "20%" },
  { name: "Folk", progress: "90%" },
  { name: "Loops", progress: "60%" },
  { name: "Slite", progress: "50%" },
  { name: "Arcade", progress: "20%" },
  { name: "Fillout", progress: "80%" },
];

function Slide3() {
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
      <div className="flex gap-2.5 items-start">
        {slideConfig.map((e, i) => (
          <div key={i}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="flex flex-col items-center gap-2"
                  onMouseOver={() => setHoverItem(i)}
                  onMouseLeave={() => setHoverItem(null)}
                  initial={false}
                  animate={{ opacity: computedOpacity(i) }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="bg-[#ffd1fd40] h-40 w-[1.4rem] rounded-2xl p-[3px] relative flex items-end">
                    <div
                      className="h-full rounded-2xl w-4"
                      style={{
                        background:
                          "radial-gradient(circle farthest-side at 0%,#ffbdfc,#ffd1fd)",
                        height: e.progress,
                      }}
                    />
                  </div>
                  <div className="h-2 w-[2rem] rounded-full bg-[#c4cddb] opacity-32" />
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

export default Slide3;
