"use client";
import Image from "next/image";
import React from "react";

type Tprops = {
  showProgress: boolean;
  currentProgressBar: number;
  currentHeroOpacity: number;
};

function DragInput({
  showProgress,
  currentProgressBar,
  currentHeroOpacity,
}: Tprops) {
  return (
    <div
      className="md:border border-[#0b08ad0f] rounded-md md:p-6 py-6 md:w-2xl w-[-webkit-fill-available]"
      style={{ opacity: currentHeroOpacity + 0.5 }}
    >
      <div
        className="w-full relative rounded-md flex justify-center items-center p-4"
        style={{ border: "1px dashed #2b44e740" }}
      >
        <Image
          src={
            "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2f686ef1975f6b392a5f_shadow-dropzone-min.png"
          }
          alt=""
          fill
          objectFit="none"
          className="absolute z-[-1] opacity-50"
        />
        <div className="flex justify-center items-center flex-col w-[inherit]">
          <div className="sphere-anim" />

          {!showProgress ? (
            <p className="font-medium text-sm">
              Drop anything to capture feedback
            </p>
          ) : (
            <div className="w-full">
              <p className="text-sm mb-1 text-center">
                Processing • {currentProgressBar}%
              </p>
              <div className="w-full h-1 bg-gray-300 rounded overflow-hidden mt-3">
                <div
                  className="h-full bg-blue-700 transition-all duration-300"
                  style={{ width: `${currentProgressBar}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DragInput;
