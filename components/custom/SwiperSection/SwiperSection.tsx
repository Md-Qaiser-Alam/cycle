"use client";

import useEmblaCarousel from "embla-carousel-react";

import { useEffect, useState } from "react";
import Slide1 from "./Slide1";

const slides = [
  { type: "list" },
  {
    title: "Feedback status",
    type: "image",
    src: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65efcdcdbd25d505d1087c25_image%20(8).svg",
  },
  { title: "Customers with most feedback", type: "list-2" },
  { title: "Summary of customer quotes", type: "lines" },
];

const chartHeights = [70, 30, 80, 60, 45, 25, 85];
const lineWidths = [30, 70, 40, 50, 80, 60];

export default function SwiperSection() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [selectIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    if (!embla) return undefined;

    const onSelect = () => setSelectIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const renderContent = (slide: any) => {
    switch (slide.type) {
      case "list":
        return (
          <>
            <div className="scale-[80%]">
              <Slide1 />
            </div>
          </>
        );
      case "image":
        return <img src={slide.src} alt="" className="w-full" />;
      case "list-2":
        return (
          <div className="flex justify-between items-end h-32 space-x-2">
            {chartHeights.map((height, i) => (
              <div
                key={i}
                className="flex flex-col items-center h-full space-y-3"
              >
                <div className="bg-[#ffd1fd40] h-full flex rounded-md">
                  <div
                    className="w-3 self-end rounded-md"
                    style={{
                      height: `${height}%`,
                      background:
                        "radial-gradient(circle at 0%, #ffbdfc, #ffd1fd)",
                    }}
                  />
                </div>
                <div className="px-3.5 py-1 rounded-md bg-[#c4cddb] opacity-25" />
              </div>
            ))}
          </div>
        );
      case "lines":
        return (
          <div className="flex flex-col h-40 w-full space-y-3 items-start border border-[#eee] p-4 rounded-md">
            {lineWidths.map((width, i) => (
              <div
                key={i}
                className={`rounded-md ${i === 0 ? "h-3 mb-4" : "h-2"}`}
                style={{
                  width: `${width}%`,
                  background:
                    i === 0
                      ? "radial-gradient(circle,#adeedb,#6cceb1)"
                      : "#c4cddb3d",
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="rounded-md flex flex-col justify-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="flex-none w-full p-4">
              <div className="bg-white rounded-xl p-4 space-y-4">
                <div className="flex items-center space-x-2">
                  {i > 0 && (
                    <>
                      <img
                        src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65d8ce6128998773f23c1ab5_CycleAI.svg"
                        alt=""
                        className="w-6 h-6"
                      />
                      <h4 className="font-semibold text-sm">{slide.title}</h4>
                    </>
                  )}
                </div>
                <div className="flex justify-center">
                  {renderContent(slide)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-6 mb-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => embla?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              index === selectIndex ? "bg-[#2B44E7]" : "bg-[#2B44E7] opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
