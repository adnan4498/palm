import React from "react";
import Image from "next/image";
import blackArrow from "../../public/black-arrow.svg";
// import orangeArrow from "../../public/orange-arrow.svg";
import orangeArrow from "../../public/orangeArrow.svg";

const HeroSection = () => {
  return (
    <div>
      <div className=" w-full flex flex-col justify-center items-center h-[840px]">
        <div className="w-[702px] text-[80px]">
          <h2 className="">Driver Revenue Digital Marketing Agency That</h2>
        </div>

        <div className="flex gap-[15px] ">
          <div className="w-[181.92px] h-[64px] hover:brightness-130  duration-200 cursor-pointer bg-[linear-gradient(to_right,_#996B55,_#E5AB8E,_#E5AB8E,_#996B55)] rounded-full flex items-center justify-center gap-[28px] mt-[59px]">
            <div className="text-[18px] text-[#4D3333]">Contact us</div>
            <div>
              <Image src={blackArrow} width={25} height={25} />
            </div>
          </div>

          <div className="w-[224.92px] h-[64px] hover:brightness-130  duration-200 cursor-pointer bg-[linear-gradient(to_right,_#996B5566,_#E5AB8E66,_#E5AB8E66,_#996B5566)] rounded-full flex items-center justify-center  mt-[59px]">
            <div className="text-[18px] text-white">Appartment Offer</div>
            <div>
              <Image src={orangeArrow} width={50} height={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
