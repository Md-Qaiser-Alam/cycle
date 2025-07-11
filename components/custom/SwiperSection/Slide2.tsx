import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";

const slideConfig = [
  { name: "Completed", progress: "50%" },
  { name: "Started", progress: "40%" },
  { name: "Not started", progress: "60%" },
];

function Slide2() {
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
        <p className="text-sm font-bold">Feedback status</p>
      </div>
      <div className="flex flex-col gap-2.5 items-start p-5 justify-center scale-75 relative top-[-4rem] left-[-3rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 159.9">
          <style>{".st352{fill:#c4cddb;fill-opacity:.24}"}</style>
          <radialGradient
            id="SVGID_1_"
            cx={-149.486}
            cy={508.956}
            r={1}
            gradientTransform="matrix(-120.0002 -11.4998 -28.4881 297.2741 -3301.467 -152957.25)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: "#ffbdfc",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#ffd1fd",
              }}
            />
          </radialGradient>
          <path
            d="M73.4 31c-9.6-.9-19.3.7-28 4.7-8.8 4-16.4 10.2-22 18-2 2.7-5.8 3.3-8.5 1.3-2.7-2-3.3-5.8-1.3-8.5 6.9-9.5 16.2-17 26.9-21.9 10.7-4.8 22.5-6.8 34.2-5.7 11.7 1.1 22.9 5.2 32.5 12 9.6 6.8 17.3 15.9 22.3 26.5 1.4 3 .1 6.6-2.9 8.1-3 1.4-6.6.1-8.1-2.9-4.1-8.7-10.4-16.2-18.3-21.8-8.1-5.5-17.3-8.9-26.8-9.8z"
            className="path-pink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "url(#SVGID_1_)",
            }}
          />
          <linearGradient
            id="SVGID_00000181768432112361964410000004478259848840037282_"
            x1={170.624}
            x2={28.123}
            y1={103.91}
            y2={4.91}
            gradientTransform="matrix(1 0 0 -1 0 173.89)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: "#6cceb1",
              }}
            />
            <stop
              offset={0.442}
              style={{
                stopColor: "#adeedb",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#6cceb1",
              }}
            />
          </linearGradient>
          <path
            d="M128.5 72.7c3.3-.4 6.4 2 6.8 5.3 1.5 12-.3 24.2-5.2 35.3-4.8 11.1-12.6 20.7-22.4 27.8-9.8 7.1-21.4 11.4-33.4 12.5-12.1 1.1-24.2-1.1-35.1-6.3-3-1.4-4.3-5.1-2.9-8.1s5.1-4.3 8.1-2.9c9 4.3 18.9 6 28.8 5.1 9.9-.9 19.4-4.4 27.4-10.3 8.1-5.8 14.4-13.7 18.4-22.8 4-9.1 5.4-19.1 4.2-29-.4-3.1 1.9-6.2 5.3-6.6z"
            className="path-green"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "url(#SVGID_00000181768432112361964410000004478259848840037282_)",
            }}
          />
          <radialGradient
            id="SVGID_00000125585644946479817470000009465148191115021223_"
            cx={-151.236}
            cy={505.219}
            r={1}
            gradientTransform="matrix(12 -96 -69.9551 -8.7444 37171.242 -9959.076)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset={0}
              style={{
                stopColor: "#0081df",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#99d4ff",
              }}
            />
          </radialGradient>
          <path
            d="M11.8 60.7c3.2 1.1 4.9 4.5 3.8 7.7-3.4 10-3.9 20.7-1.4 30.9s7.8 19.5 15.4 26.9c2.4 2.3 2.5 6.2.1 8.6-2.3 2.4-6.2 2.5-8.6.1a67.77 67.77 0 0 1-18.7-32.7C-.6 89.7 0 76.7 4.1 64.5c1.1-3.2 4.6-4.9 7.7-3.8z"
            className="path-blue"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "url(#SVGID_00000125585644946479817470000009465148191115021223_)",
              fillOpacity: 0.6,
            }}
          />
          <circle cx={68.3} cy={86.2} r={6.1} className="st352" />
          <circle
            cx={68.3}
            cy={86.3}
            r={19.7}
            style={{
              fill: "none",
              stroke: "#c4cddb",
              strokeOpacity: 0.24,
            }}
          />
          <circle
            cx={165}
            cy={68.2}
            r={5}
            style={{
              fill: "#65b4ee",
            }}
          />
          <path
            d="M181 65.5h10c1.7 0 3 1.3 3 3s-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3s1.4-3 3-3z"
            className="st352"
          />
          <circle
            cx={165}
            cy={86.2}
            r={5}
            style={{
              fill: "#ffc4fd",
            }}
          />
          <path
            d="M181 83.5h10c1.7 0 3 1.3 3 3s-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3s1.4-3 3-3z"
            className="st352"
          />
          <circle
            cx={165}
            cy={104.2}
            r={5}
            style={{
              fill: "#95e2cb",
            }}
          />
          <path
            d="M181 101.5h10c1.7 0 3 1.3 3 3s-1.3 3-3 3h-10c-1.7 0-3-1.3-3-3s1.4-3 3-3z"
            className="st352"
          />
        </svg>
      </div>
    </div>
  );
}

export default Slide2;
