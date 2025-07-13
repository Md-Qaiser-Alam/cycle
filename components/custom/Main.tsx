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
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  // scrolling Motion
  useEffect(() => {
    if (!isBrowser) return;
    let isMotionScrolling = false;
    let currentPosition = 0;

    const handleScrollY = () => {
      const y = window.scrollY;
      const isDown = y > currentPosition;

      // Smooth scroll to ref when y = 100 (further reduced)
      if (
        y === 200 &&
        y <= 1000 &&
        !isMotionScrolling &&
        isDown &&
        dropdownContentRef.current
      ) {
        isMotionScrolling = true;

        const targetOffsetTop = dropdownContentRef.current.offsetTop;

        animate(y, targetOffsetTop - 50, {
          duration: 1.8, // faster animation
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
      if (y >= 300) {
        // further reduced from 400
        setShowProgress(true);

        // Progress Bar (0% at y=300 → 100% at y=1000) - more compressed range
        const totalScrollProgressBar = 1300 - 300;
        const currentScrolledProgressBar = y - 300;
        const currentProgressBarPercent = Math.min(
          (currentScrolledProgressBar / totalScrollProgressBar) * 100,
          100
        );
        setCurrentProgressBar(Math.round(currentProgressBarPercent));

        // Hero Opacity (100% at y=600 → 0% at y=1400) - much more compressed range
        const totalScrollHero = 1500 - 600;
        const currentScrollHero = 1500 - y;
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
      if (y >= 0 && y <= 1500) {
        // further reduced from 2000
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

  // External Drag Detection
  useEffect(() => {
    if (!isBrowser) return;

    let dragCounter = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter++;
      setIsDraggedOver(true);
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter--;

      // Only remove the effect when all drag events have left
      if (dragCounter === 0) {
        setIsDraggedOver(false);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter = 0;
      setIsDraggedOver(false);
    };

    // Add event listeners to document to catch all drag events
    document.addEventListener("dragenter", handleDragEnter);
    document.addEventListener("dragleave", handleDragLeave);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("drop", handleDrop);

    return () => {
      document.removeEventListener("dragenter", handleDragEnter);
      document.removeEventListener("dragleave", handleDragLeave);
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("drop", handleDrop);
    };
  }, [isBrowser]);

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
        <div className="flex flex-col items-center md:min-h-[300vh]">
          {" "}
          {/* further reduced from 400vh */}
          <div className="md:sticky md:top-32 space-y-7 relative w-screen pt-32 md:p-0">
            <div className="space-y-12 md:space-y-10 flex flex-col justify-between md:justify-start items-center px-3 md:h-[70vh] gap-28 md:gap-0">
              {/* further reduced spacing */}
              <Hero currentHeroOpacity={currentHeroOpacity} />
              <DragInput
                showProgress={showProgress}
                currentProgressBar={currentProgressBar}
                currentHeroOpacity={currentHeroOpacity}
                containerRef={containerRef}
                dropdownContentRef={dropdownContentRef}
                isDraggedOver={isDraggedOver}
              />
            </div>
          </div>
        </div>
        {isBrowser && (
          <>
            <div className="h-8" />
            <div ref={startDropdownMotionRef} className="h-1 w-full relative">
              <BgGradient />
            </div>
          </>
        )}
        <div className="md:h-80" />
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
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
      </div>
    </div>
  );
}

export default Main;
