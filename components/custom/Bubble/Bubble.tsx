"use client";
import { bubbleConfig } from "@/lib/data";
import Image from "next/image";

function Bubble() {
  return (
    <div className="relative w-full h-[600px]">
      {" "}
      {/* Adjust height as needed */}
      {bubbleConfig.map((e, i) => (
        <Image
          key={i}
          src={e.src}
          alt={e.name}
          width={120}
          height={120}
          className={`absolute ${e.mobHidden ? "hidden lg:block" : ""}  ${
            e?.mobClass
          } md:${e.pcClass}`}
        />
      ))}
    </div>
  );
}

export default Bubble;
