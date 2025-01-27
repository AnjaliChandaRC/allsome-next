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
    <div className="py-[84px]">
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
        className="object-cover w-full"
        alt="line"
      />
      <div className=" container">
        
      </div>
    </div>
  );
}

export default HowAllSomeWorks