import { bubbleConfig } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";
import { isMobile } from "react-device-detect";

function DropdownContent({ currentIconSelect, setCurrentIconSelect }: any) {
  return (
    <motion.div
      className="h-full relative flex flex-col justify-center items-center space-y-7 md:space-y-0 flex-[1.2] border border-dashed border-[#2b44e740] rounded-md overflow-hidden"
      initial={{ flexGrow: 100 }}
      animate={{ flexGrow: 1.2 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="relative px-6 py-10 w-full h-full">
        <div className="h-[159px] w-auto">
          <motion.img
            src={currentIconSelect?.bannerSrc || bubbleConfig[0].bannerSrc}
            alt={currentIconSelect?.name}
            width={400}
            height={400}
            className="rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      <div className="flex justify-items-end  scale-[165%] pl-[6.5rem] md:pl-0  md:scale-100 md:grid grid-cols-4 grid-rows-3">
        {bubbleConfig.map((e, i) => {
          if (isMobile && e.mobHidden) return null;

          return (
            <button
              className="cursor-pointer"
              onClick={() => setCurrentIconSelect(e)}
              key={i}
              style={{
                border:
                  currentIconSelect?.name === e.name
                    ? "2px solid #0081df99"
                    : "none",
                borderRadius:
                  currentIconSelect?.name === e.name ? "20rem" : "none",
              }}
            >
              <motion.img
                src={e.iconSrc}
                alt="logos"
                width={80}
                height={80}
                className="scale-[130%]"
                initial={{ y: "18rem", scale: "0%" }}
                animate={{ y: "0rem", scale: "110%" }}
                transition={{
                  duration: 1.2,
                  delay: 1.7 + i / 15,
                  ease: "easeInOut",
                }}
              />
            </button>
          );
        })}
      </div>
      <div className="sphere-anim" />
    </motion.div>
  );
}

export default DropdownContent;
