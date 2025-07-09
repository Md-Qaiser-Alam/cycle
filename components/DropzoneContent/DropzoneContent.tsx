import { bubbleConfig } from "@/lib/data";
import Image from "next/image";
import React from "react";

function DropzoneContent() {
  return (
    <div className="border border-dashed rounded-md p-5 overflow-hidden">
      <div className="space-y-5">
        <div>
          <Image
            className="rounded-md pointer-events-none"
            src={
              "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65efb7064fd4fe6184c9f7ff_Feedback%20Preview%20(1).jpg"
            }
            alt="Man img"
            width={500}
            height={500}
          />
        </div>
        <div className="grid auto-cols-max grid-flow-col">
          {bubbleConfig.map((e, i) => (
            <a
              key={i}
              href="#"
              className="w-20 h-20 scale-125 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${e.src})` }}
            />
          ))}
        </div>

        <div className="flex justify-center relative h-16">
          <div className="sphere-anim relative -top-[2rem] " />
        </div>
      </div>
    </div>
  );
}

export default DropzoneContent;
