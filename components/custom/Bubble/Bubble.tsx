"use client";
import { bubbleConfig } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, type RefObject } from "react";
import { isBrowser, isMobile } from "react-device-detect";

type Tprops = {
  containerRef: RefObject<HTMLElement | null>;
};

function Bubble({ containerRef }: Tprops) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) return;

  return (
    <>
      {bubbleConfig.map((e, i) => {
        const x = useTransform(
          scrollYProgress,
          [0, 0.5],
          [
            `${e[`${isBrowser ? "browserInitialX" : "mobileInitialX"}`]}px`, // for responsiveness
            "0px",
          ]
        );
        const y = useTransform(
          scrollYProgress,
          [0, 0.5],
          [
            `${e[`${isBrowser ? "browserInitialY" : "mobileInitialY"}`]}px`,
            "0px",
          ] // for responsiveness
        );
        const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
        if (i === bubbleConfig.length - 1 || (isMobile && e?.mobHidden)) return;

        return (
          <motion.img
            key={i}
            src={e.iconSrc}
            className="absolute"
            style={{ x, y, scale: isBrowser ? scale : 0.8 }}
          />
        );
      })}
    </>
  );
}

export default Bubble;
