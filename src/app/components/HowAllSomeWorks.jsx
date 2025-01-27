import React from 'react'
import Image from 'next/image';
import CustomHeading from './common/CustomHeading';
const HowAllSomeWorks = () => {
  const ROADMAP_LIST = [
    {
      numb: 1,
      title: "Connect store",
      description:
        "Send AllSome your inventory and online your preferred outlets",
    },
    {
      numb: 2,
      title: "Autorun operations",
      description: "Auto sync paid orders and wake teams to ship the orders",
    },
    {
      numb: 3,
      title: "Happy buyers",
      description: "Self-service post purchase needs anytime, everywhere",
    },
  ];
  return (
    <div className="py-[84px] relative">
      <div className="!max-w-[591px] !mx-auto text-center">
        <CustomHeading
          title="How"
          styleTwo="text-dark-green"
          textTwo="AllSome  "
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
            <div key={i} className={`${i===1 ?'mt-[52px]':i===2?'mt-[25px]':'mt-[55px]'}`}>
              <div className="lg:size-[60px] size-[42px] rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green flex items-center justify-center">
                <p className="text-white font-bold text-center">{obj.numb}</p>
              </div>
              <h3 className="text-lg font-medium text-black leading-custom-8xl pb-[7px] pt-[35px]">
                {obj.title}
              </h3>
              <p className={`text-base font-normal leading-6 max-w-[228px] ${i===1? 'max-w-[218px]':''}`}>
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