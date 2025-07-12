"use client";
import { bubbleConfig } from "@/lib/data";
import { animate, motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Button } from "../ui/button";

import BgGradient from "./BgGradient";
import Bubble from "./Bubble/Bubble";
import DragInput from "./Drag/DragInput";
import DropdownContent from "./DropdownContent/DropdownContent";
import Hero from "./Hero/Hero";
import MarqueSection from "./Marque/Marque";
import Navbar from "./Navbar/Navbar";
import Slide1 from "./SwiperSection/Slide1";
import Slide2 from "./SwiperSection/Slide2";
import Slide3 from "./SwiperSection/Slide3";
import Slide4 from "./SwiperSection/Slide4";

import { isBrowser, isMobile } from "react-device-detect";
import SwiperSection from "./SwiperSection/SwiperSection";

function Main() {
  const [showProgress, setShowProgress] = useState(false);
  const [currentProgressBar, setCurrentProgressBar] = useState(0);
  const [currentHeroOpacity, setCurrentHeroOpacity] = useState(100);
  const [startDropdownMotionRef, inView, entry] = useInView({
    threshold: 0,
  });
  const [isViewed, setIsViewed] = useState(false);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);
  const [currentIconSelect, setCurrentIconSelect] = useState<any>(null);

  // scrolling Motion
  useEffect(() => {
    if (!isBrowser) return;
    let isMotionScrolling = false;
    let currentPosition = 0;

    const handleScrollY = () => {
      const y = window.scrollY;
      const isDown = y > currentPosition;

      // Smooth scroll to ref when y = 200
      if (
        y === 200 &&
        // y <= 2000 &&
        !isMotionScrolling &&
        isDown &&
        dropdownContentRef.current
      ) {
        isMotionScrolling = true;

        const targetOffsetTop = dropdownContentRef.current.offsetTop;

        animate(y, targetOffsetTop - 100, {
          duration: 3,
          ease: "easeInOut",
          onUpdate: (value) => {
            window.scrollTo(0, value);
          },
          onComplete: () => {
            isMotionScrolling = false;
          },
        });
      }

      // Scroll progress bar in dragBox
      if (y >= 500) {
        setShowProgress(true);

        // Progress Bar (0% at y=500 → 100% at y=1500)
        const totalScrollProgressBar = 3000 - 500;
        const currentScrolledProgressBar = y - 500;
        const currentProgressBarPercent = Math.min(
          (currentScrolledProgressBar / totalScrollProgressBar) * 100,
          100
        );
        setCurrentProgressBar(Math.round(currentProgressBarPercent));

        // Hero Opacity (100% at y=1000 → 0% at y=3000)
        const totalScrollHero = 4000 - 1000;
        const currentScrollHero = 4000 - y;
        const currentScrollHeroPercent = Math.min(
          currentScrollHero / totalScrollHero,
          1
        );
        setCurrentHeroOpacity(currentScrollHeroPercent);
      } else {
        setShowProgress(false);
      }

      currentPosition = y;
    };

    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [isBrowser]);

  // Dropdown Content Motion

  useEffect(() => {
    if (!isBrowser) return;
    const handleScroll = () => {
      const y = window.scrollY;

      // causes animation only when scrolling down not up
      if (y >= 0 && y <= 3000) {
        setIsViewed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (!inView) return;
    setIsViewed(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isBrowser, inView]);

  const containerRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <div>
      <div>
        <Navbar />
        <div className="h-10 md:h-32" />
        <div className="flex flex-col items-center md:min-h-[700vh]">
          <div className="md:sticky md:top-32 space-y-7 relative w-screen pt-32 md:p-0">
            <div className="space-y-32 md:space-y-7 flex flex-col justify-center items-center px-3">
              <Hero currentHeroOpacity={currentHeroOpacity} />
              <DragInput
                showProgress={showProgress}
                currentProgressBar={currentProgressBar}
                currentHeroOpacity={currentHeroOpacity}
                containerRef={containerRef}
                dropdownContentRef={dropdownContentRef}
              />
            </div>
          </div>
        </div>
        {isBrowser && (
          <>
            <div className="h-52" />
            <div ref={startDropdownMotionRef} className="h-1 w-full relative">
              <BgGradient />
            </div>
          </>
        )}

        {isBrowser && (
          <div
            ref={dropdownContentRef}
            className="flex justify-center relative"
          >
            {isViewed && (
              <motion.div
                className="relative flex space-x-10 p-7 rounded-xl dashboard-copy-2"
                initial={{ width: 0 }}
                animate={{ width: "var(--breathing-width-2)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="dashboard-shadow h-[90%] w-[90%] absolute inset-0 mx-auto my-auto" />
                <DropdownContent
                  currentIconSelect={currentIconSelect}
                  setCurrentIconSelect={setCurrentIconSelect}
                />
                <motion.div
                  className="h-full flex-3 bg-transparent rounded-xl"
                  initial={{ background: "ffffff00", opacity: 0 }}
                  animate={{ background: "#ffff", opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 grid-row-2 h-full rounded-md px-16 py-8">
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
        {isMobile && (
          <>
            <div className="h-10" />
            <SwiperSection />
          </>
        )}
        <div className="h-10" />
        {isMobile && (
          <div className="px-8">
            <DropdownContent
              currentIconSelect={currentIconSelect}
              setCurrentIconSelect={setCurrentIconSelect}
            />
          </div>
        )}
        <div className="h-20" />
        <div className="flex flex-col justify-center items-center space-y-16 md:space-y-24">
          <Button size={"lg"} className="w-32">
            Book demo
          </Button>
          <MarqueSection />
        </div>
        <div className="h-[100rem]"> </div>
      </div>
    </div>
  );
}

export default Main;
