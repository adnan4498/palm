import React from "react";
import blackArrow from "../../public/black-arrow.svg";
import Image from "next/image";
import houseIcon from "../../public/house-icon.svg";

const IntrestedSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[1500px] h-[263px] py-[20px] border border-black bg-[linear-gradient(to_right,_#996B55,_#E5AB8E,_#E5AB8E,_#996B55)] flex flex-col justify-center items-center ">
          <div className="text-[72px] text-[#06162E] h-[168px] flex items-center">
            Are you interested in our project?
          </div>

          <div className="w-[181.92px] h-[64px] hover:brightness-130 duration-200 cursor-pointer bg-[#06162E] rounded-full flex items-center justify-center gap-[28px]">
            <div className="text-[18px] text-white">Contact us</div>
            <Image src={blackArrow} width={25} height={25} />
          </div>
        </div>

        <div className="bg-[#38353f] w-[1594px] h-[187px] mt-[238px] flex items-center justify-between pl-10">
          <div className="flex items-center gap-[48px]">
            <div>
              <Image src={houseIcon} width={78} height={86} />
            </div>
            <div className="text-[62px] text-white">In New Town</div>
          </div>

          <div className="text-[24px] w-[923px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </div>

        <div className="bg-[linear-gradient(to_right,_#996B55,_#E5AB8E,_#E5AB8E,_#996B55)] w-[1594px] h-[187px] mt-[56px] flex items-center justify-between pl-10">
          <div className="flex items-center gap-[48px]">
            <div>
              <Image src={houseIcon} width={78} height={86} />
            </div>
            <div className="text-[62px] text-[#06162E]">Smart living</div>
          </div>

          <div className="text-[24px] w-[923px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </div>

        <div className="bg-[#38353f] w-[1594px] h-[187px] mt-[56px] flex items-center justify-between pl-10">
          <div className="flex items-center gap-[48px]">
            <div>
              <Image src={houseIcon} width={78} height={86} />
            </div>
            <div className="text-[62px] text-white">In New Town</div>
          </div>

          <div className="text-[24px] w-[923px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </div>

        <div className="bg-[#38353f] w-[1594px] h-[187px] mt-[56px] flex items-center justify-between pl-10">
          <div className="flex items-center gap-[48px]">
            <div>
              <Image src={houseIcon} width={78} height={86} />
            </div>
            <div className="text-[62px] text-white">In New Town</div>
          </div>

          <div className="text-[24px] w-[923px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntrestedSection;
