import React from 'react'
import Image from 'next/image';
import CustomHeading from './common/CustomHeading';
import { ROADMAP_LIST } from '../utils/helper';
const HowAllSomeWorks = () => {
 
  return (
    <div className="pt-[84px] pb-[124px] max-xl:py-20 max-md:py-16 max-sm:py-10 relative">
      <div className="!max-w-[591px] !mx-auto text-center">
        <CustomHeading
          title="How"
          styleTwo="text-dark-green"
          textTwo="AllSome "
          styleclassTwo=""
          titleTwo="Works?"
          className="!max-w-[591px] !mx-auto"
        />
      </div>
      <Image
        src="/assets/images/svg/line.svg"
        width={100}
        height={95}
        className="object-cover w-full absolute max-xl:translate-y-[44px] max-md:hidden"
        alt="line"
      />
      <div className=" container">
        <div className="flex items-center justify-evenly relative z-10 max-md:flex-wrap">
          {ROADMAP_LIST.map((obj, i) => (
            <div
              key={i}
              className={`${
                i === 1
                  ? "mt-[52px] max-md:mt-6"
                  : i === 2
                  ? "mt-[25px] max-md:mt-6"
                  : "mt-[55px] max-md:mt-6"
              }`}
            >
              <div className="lg:size-[60px] size-[42px] rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green flex items-center justify-center">
                <p className="text-white font-bold text-center">{obj.numb}</p>
              </div>
              <h3 className="text-lg font-medium text-black leading-custom-8xl pb-[7px] pt-[35px] max-lg:pt-6 max-md:pt-5">
                {obj.title}
              </h3>
              <p
                className={`text-base font-normal leading-6 max-w-[228px] ${
                  i === 1 ? "max-w-[218px]" : ""
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowAllSomeWorks