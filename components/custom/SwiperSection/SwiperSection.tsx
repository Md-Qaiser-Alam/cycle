"use client";

import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Top feature requests",
    type: "list",
    items: 5,
  },
  {
    title: "Feedback status",
    type: "image",
    src: "https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65efcdcdbd25d505d1087c25_image%20(8).svg",
  },
  {
    title: "Customers with most feedback",
    type: "list-2",
    items: 7,
  },
  {
    title: "Summary of customer quotes",
    type: "lines",
    lines: 5,
  },
];

export default function SwiperSection() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false, dragFree: false });

  useEffect(() => {
    if (embla) embla.reInit(); // fixes potential issues with hydration
  }, [embla]);

  const [selectIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setSelectIndex(embla.selectedScrollSnap());
    };

    embla.on("select", onSelect);
    onSelect();

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const scrollTo = (index: number) => {
    if (embla) embla.scrollTo(index);
  };

  return (
    <div className="rounded-md  flex flex-col justify-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div className="flex-none w-full p-4" key={i}>
              <div className="bg-white rounded-xl p-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65d8ce6128998773f23c1ab5_CycleAI.svg"
                    alt=""
                    className="w-6 h-6"
                  />
                  <h4 className="font-semibold text-sm">{slide.title}</h4>
                </div>

                <div>
                  {slide.type === "list" && (
                    <Image
                      className="p-4 scale-125"
                      src={"/slide1.png"}
                      alt="slide1"
                      height={500}
                      width={500}
                    />
                  )}

                  {slide.type === "image" && (
                    <img src={slide.src} alt="" className="w-full" />
                  )}

                  {slide.type === "list-2" && (
                    <div className="flex justify-between items-end h-32 space-x-2 ">
                      {[70, 30, 80, 60, 45, 25, 85].map((height, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center space-y-3 h-full"
                        >
                          <div className="bg-[#ffd1fd40] h-full w-fit flex rounded-md ">
                            <div
                              className="w-3 bg-opacity-30 rounded-md self-end"
                              style={{
                                height: `${height}%`,
                                background:
                                  "radial-gradient(circle farthest-side at 0%,#ffbdfc,#ffd1fd)",
                              }}
                            />
                          </div>
                          <div className="px-3.5 py-1 rounded-md bg-[#c4cddb] opacity-[.24]" />
                        </div>
                      ))}
                    </div>
                  )}

                  {slide.type === "lines" && (
                    <div className="flex flex-col h-40 w-full space-y-3 items-start border border-[#eee]  p-4 rounded-md">
                      {[30, 70, 40, 50, 80, 60].map((width, i) => (
                        <div
                          key={i}
                          className={`rounded-md  ${
                            i === 0 ? "h-3 mb-4" : "h-2"
                          } `}
                          style={{
                            width: `${width}%`,
                            background:
                              i === 0
                                ? "radial-gradient(circle farthest-side,#adeedb,#6cceb1),linear-gradient(#6cceb1,#6cceb1)"
                                : "#c4cddb3d",
                            opacity: 0.7,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots space-x-6 mb-10 flex justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectIndex(index);
              scrollTo(index);
            }}
            className={`w-2 h-2 rounded-full embla__dot transition-colors duration-200 cursor-pointer ${
              index === selectIndex
                ? "bg-[#2B44E7] embla__dot--selected"
                : "bg-[#2B44E7] opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
