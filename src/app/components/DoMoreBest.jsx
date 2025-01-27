import React from 'react'
import Image from 'next/image';
import { Channels, Commerce, CustomizableOperations, DataInsights, Exchange, GiveAway, InventoryReports, Maps, Purchase, ShipFast } from '../utils/icons';
import CustomHeading from '../components/common/CustomHeading'
import CustomDescription from './common/CustomDescription';

const DoMoreBest = () => {
  const BEST_DATA = [
    {
      cardSvg: <Channels />,
      title: "Multiple channels",
      description: "Integrate seamlessly, AllSome Open API, bulk upload and place single order through portal.",
    },
    {
      cardSvg: <ShipFast />,
      title: "Ship fast",
      description: "Domestic, international, Cash on Delivery (COD), standard, same day, one hour or self pick up.",
    },
    {
      cardSvg: <Commerce />,
      title: "E-commerce malls",
      description: "Free access to 3,000+ locations. Be next to your shopper to make the experience real.",
    },
    {
      cardSvg: <Maps />,
      title: "Shareable maps",
      description: "Get discovered through world maps, share with single click and welcome shoppers.",
    },
    {
      cardSvg: <Purchase />,
      title: "Try before purchase",
      description: "Let shoppers find and order the most suitable one, they will definitely return again!",
    },
    {
      cardSvg: <Exchange />,
      title: "Return & exchange",
      description: "Return to store and exchange same day. Free shipping and 10x faster return experience.",
    },
    {
      cardSvg: <CustomizableOperations />,
      title: "Customizable operations",
      description: "Share your e-commerce procedures and outlets execute as instructed. Take control and work from anywhere.",
    },
    {
      cardSvg: <InventoryReports />,
      title: "Inventory reports",
      description: "Clean & report for inbound, in-store and shipped SKUs. By orders, locations and dates.",
    },
    {
      cardSvg: <GiveAway />,
      title: "Giveaway & samples",
      description: "Reach more shoppers with your trial sets and let the products sell for themselves!",
    },
    {
      cardSvg: <DataInsights />,
      title: "Data insights",
      description: "Get actionable insights and know how your shoppers interact with your products in real life.",
    },
  ];
  return (
    <div className='bg-black rounded-[40px] lg:py-[60px] xl:pb-[94px] py-12 relative'>
      <Image
        src="/assets/images/webp/best-left-ellipse.webp"
        width={656}
        height={596}
        className='object-cover absolute top-0 left-0 rounded-tl-[40px] lg:max-w-[656px] sm:max-w-[456px] max-w-[400px]'
        alt="Picture of the author"
      />
      <Image
        src="/assets/images/webp/best-right-ellipse.webp"
        width={563}
        height={347}
        className='object-cover absolute bottom-0 right-0 rounded-br-[40px] lg:max-w-[563px] max-w-[400px]'
        alt="Picture of the author"
      />
      <div className='container max-w-[1178px] mx-auto relative z-10'>
        <CustomHeading title="Do more of what you do best" classstyle="!text-white text-center" />
        <CustomDescription description="Everything you need to run your awesome e-commerce" classstyle="!text-white opacity-80 text-center lg:pt-8 pt-6" />
        <div className='flex flex-row flex-wrap xl:gap-[22px] max-xl:justify-between xl:pt-[108px] lg:pt-20 md:pt-11 pt-9'>
          {BEST_DATA.map((obj, index) => (
            <div key={index} className='xl:max-w-[270px] xl:w-full md:w-[31.33%] sm:w-[48%] w-full lg:mb-10 mb-7'>
              <div className='lg:size-[60px] size-[42px] rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green flex items-center justify-center'>
                <span classstyle="max-lg:!size-6">{obj.cardSvg}</span>
              </div>
              <h3 className="font-kanit font-medium lg:text-lg text-base lg:leading-custom-8xl text-white lg:pt-[19px] pt-4 pb-[11px]">
                {obj.title}
              </h3>
              <p className="font-normal lg:text-base text-sm lg:leading-6 text-white opacity-70 xl:max-w-[250px]">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoMoreBest