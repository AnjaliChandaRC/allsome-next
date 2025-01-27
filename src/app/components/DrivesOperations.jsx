import React from 'react'
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';
import CustomButton from './common/CustomButton';
const DrivesOperations = () => {
  const OPERATIONS_LIST = [
    {
      cardIcon: "/assets/images/webp/frock-img.webp",
      title: "Fashion & Apparel",
      description: "Branded apparels, shoes & bags",
      btn: "Learn more >>",
    },
    {
      cardIcon: "/assets/images/webp/lipstick-img.webp",
      title: "Beauty & Cosmetics",
      description: "Imported from Korea & Japan",
      btn: "Learn more >>",
    },
    {
      cardIcon: "/assets/images/webp/mother-img.webp",
      title: "Mothers & Babies",
      description: "Number 1 Motherhood platform",
      btn: "Learn more >>",
    },
    {
      cardIcon: "/assets/images/webp/health-img.webp",
      title: "Health & Wellness",
      description: "Healthy life and happy life",
      btn: "Learn more >>",
    },
    {
      cardIcon: "/assets/images/webp/lifestyle-img.webp",
      title: "Lifestyle & home",
      description: "Appliances to hobbies",
      btn: "Learn more >>",
    },
  ];
  return (
    <div className="bg-light-green pt-[59px] pb-[79px] rounded-[40px] max-2xl:py-16 max-lg:py-12 max-md:py-10">
      <div className="container">
        <CustomHeading
          styleclass="max-w-[915px] mx-auto text-center"
          text="AllSome"
          title="drives operations for every e-commerce businesses"
        />
        <p className="text-center pt-[22px] font-normal text-base leading-6 pb-[49px] max-xl:py-6">
          Our customers come from all e-commerce space and we have moved
          millions!
        </p>
        <div className=" flex items-center gap-[20px] max-xl:flex-wrap max-xl:justify-center">
          {OPERATIONS_LIST.map((obj, i) => (
            <div
              key={i}
              className="bg-white rounded-lg pt-[31px] pb-[17px] h-[284px] shadow-[0px_5px_12px_0px_#D1EFE9] min-w-[212px] flex items-center justify-center flex-col"
            >
              <Image
                src={obj.cardIcon}
                width={64}
                height={81}
                className="object-cover h-auto w-auto mx-auto"
                alt="icons"
              />
              <h4 className="text-center font-medium text-lg leading-custom-8xl pt-5">
                {obj.title}
              </h4>
              <p
                className={`text-center max-w-[174px] mx-auto leading-6 font-normal text-base pt-[19px] ${
                  i === 4 ? "pb-[41px]" : "pb-[17px]"
                }`}
              >
                {obj.description}
              </p>
              <button className="text-base font-semibold leading-6 text-center text-dark-green mx-auto hover:text-black transition-all ease-linear duration-300">
                {obj.btn}
              </button>
            </div>
          ))}
        </div>
        <CustomButton title="Meet our customers" styleclass="mt-[44px] mx-auto"/>
      </div>
    </div>
  );
}

export default DrivesOperations