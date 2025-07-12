"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { bubbleConfig } from "@/lib/data";
import {
  animate,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";

type Tprops = {
  containerRef: RefObject<HTMLElement | null>;
  dropdownContentRef: RefObject<HTMLElement | null>;
};

function Bubble({ containerRef, dropdownContentRef }: Tprops) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {bubbleConfig.map((e, i) => {
        if (i === bubbleConfig.length - 1 || (isMobile && e?.mobHidden))
          return null;

        const pairIndex = Math.floor(i / 2);
        const totalPairs = Math.ceil(bubbleConfig.length / 2);
        const step = 1 / totalPairs;
        const overlapRatio = 0.5;
        const start = isBrowser ? pairIndex * step * (1 - overlapRatio) : 0;
        const end = isBrowser ? start + step : 0.5;

        const scrollX = useTransform(
          scrollYProgress,
          [start, end],
          [`${e[isBrowser ? "browserInitialX" : "mobileInitialX"]}%`, "0%"]
        );
        const scrollY = useTransform(
          scrollYProgress,
          [start, end],
          [`${e[isBrowser ? "browserInitialY" : "mobileInitialY"]}%`, "0%"]
        );
        const scale = useTransform(scrollYProgress, [start, end], [1, 0]);

        // motion values for drag position with initial values as numbers
        const initialX = e[isBrowser ? "browserInitialX" : "mobileInitialX"];
        const initialY = e[isBrowser ? "browserInitialY" : "mobileInitialY"];

        const x = useMotionValue(initialX);
        const y = useMotionValue(initialY);

        // Track if bubble is being dragged
        const [isDragging, setIsDragging] = useState(false);

        const handleDragStart = () => {
          setIsDragging(true);
        };

        const handleDragEnd = (_: any, info: any) => {
          setIsDragging(false);

          const dragX = info.point.x;
          const dragY = info.point.y;

          const containerRect = containerRef.current?.getBoundingClientRect();
          const dropdown = dropdownContentRef.current;
          if (!containerRect || !dropdown) return;

          const isOverContainer =
            dragX >= containerRect.left &&
            dragX <= containerRect.right &&
            dragY >= containerRect.top &&
            dragY <= containerRect.bottom;

          if (isOverContainer) {
            const dropdownOffsetTop =
              dropdown.getBoundingClientRect().top + window.scrollY;

            animate(window.scrollY, dropdownOffsetTop - 100, {
              duration: 1.5,
              ease: "easeInOut",
              onUpdate: (value) => window.scrollTo(0, value),
            });

            setTimeout(() => {
              // Smooth reset animation with spring physics
              animate(x, initialX, {
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              });
              animate(y, initialY, {
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              });
            }, 2000);
          } else {
            // Smooth reset animation with spring physics
            animate(x, initialX, {
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            });
            animate(y, initialY, {
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            });
          }
        };

        return (
          <HoverCard openDelay={0.1} key={i}>
            <HoverCardTrigger asChild>
              <motion.img
                key={i}
                src={e.iconSrc}
                className="absolute touch-none cursor-grab active:cursor-grabbing"
                style={{
                  x: isDragging ? `${x.get()}%` : scrollX,
                  y: isDragging ? `${y.get()}%` : scrollY,
                  scale: isBrowser ? scale : 0.9,
                }}
                drag={!isMobile}
                whileDrag={{ scale: 0.7 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                dragConstraints={false}
                dragElastic={0.3}
                dragTransition={{
                  bounceStiffness: 300,
                  bounceDamping: 30,
                }}
              />
            </HoverCardTrigger>
            {isBrowser && (
              <HoverCardContent className="relative border-2 border-dashed border-[#721aff] overflow-hidden w-64 h-40 p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={e.bannerSrc}
                    alt="banner"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        );
      })}
    </>
  );
}

export default Bubble;
