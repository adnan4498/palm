import React from "react";
import orangeArrow from "../../public/orangeArrow.svg";
import mouseImg from "../../public/mouse-img.svg";
import Image from "next/image";
import mouseAndArrow from "../../public/mouse-and-arrow-icon.svg";
import HorizontalScroll from "@/components/HorizontalScroll";
import TrioSection from "@/components/TrioSection";

const MouseSection = () => {
  let buttonsText = [
    "Smart living",
    "Premium materials",
    "Quiet location",
    "No compromises",
  ];

  return (
    <div>
      <div className="bg-[#06162e] h-[6000px] flex flex-col items-center pt-[48px]">
        <div>
          <Image src={mouseAndArrow} width={70} height={64} />
        </div>
        <div className="text-[#E5AB8E] text-[72px] w-[700px] text-center mt-[96px]">
          A new home that will change your world
        </div>
        <div className="w-[862px] text-[20px] opacity-50 mt-[27px]">
          The palm is a place where quality meets innovation. And you are at the
          center of the action
        </div>

        <div className="flex mt-[32px] gap-[10px]">
          {buttonsText.map((item, i) => (
            <>
              <div className=" rounded-[4px] border-[1px] border-[#E5AB8E] text-center py-[8px] px-[20px]">
                {item}
              </div>
            </>
          ))}
        </div>

        <div className="mt-[206px]">
          <HorizontalScroll />
        </div>


        <div>
          <TrioSection />
        </div>
      </div>
    </div>
  );
};

export default MouseSection;
