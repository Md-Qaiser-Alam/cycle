import DropzoneContent from "../DropzoneContent/DropzoneContent";
import { Button } from "../ui/button";
import Bubble from "./Bubble/Bubble";
import DragInput from "./Drag/DragInput";
import Hero from "./Hero/Hero";
import MarqueSection from "./Marque/Marque";
import Navbar from "./Navbar/Navbar";
import SwiperSection from "./SwiperSection/SwiperSection";

function Main() {
  return (
    <div>
      <div className="relative">
        {/* <div className="head hero"> */}
        <div className="hero-gradient-2" />
        {/* </div> */}

        <div className="px-5 py-3">
          <div className="flex flex-col gap-40">
            <div className="">
              <Navbar />
            </div>
            <div className="mt-16 md:mt-7 md:pb-10">
              <Hero />
            </div>
            <div className="flex justify-center">
              <div className="mt-20 md:mt-[-8rem] border border-[#0b08ad08] rounded-md p-6 inline-flex justify-center items-center">
                <DragInput />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <SwiperSection />
              <DropzoneContent />
              <div className="w-full flex justify-center mt-10">
                <Button className="rounded-xl w-28" size={"lg"}>
                  Book demo
                </Button>
              </div>
              <div className="mt-16">
                <MarqueSection />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 inset-0 z-[-1] overflow-hidden">
          <Bubble />
        </div>
      </div>
    </div>
  );
}

export default Main;
