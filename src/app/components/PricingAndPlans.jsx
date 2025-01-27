import React from 'react'
import CustomButton from './common/CustomButton';
import CustomHeading from './common/CustomHeading';
import CustomDescription from './common/CustomDescription';
import { CheckIcon } from '../utils/icons';

const PRICING_DATA_LIST = [
  {
    title: "Storage",
    description: "ipsum dolor sit amet, consectetur adipiscing. Rdum at et elit.",
    price: "FREE",
    period: "Per day",
    features: [
      "Free 30 meter cube / month",
      "Sed odio sed non sagittis.",
      "At ac nunc nunc semper. Tincidunt pharetra lacus non.",
      "Egestas eu ut hendrerit nunc.",
      "Posuere vestibulum fringilla mattis sed interdum cras nec."
    ]
  },
  {
    title: "Handling",
    description: "ipsum dolor sit amet, consectetur adipiscing. Rdum at et elit.",
    price: "2.00 MYR",
    period: "Per Order (2 items)",
    features: [
      "MYR1.00 / extra item",
      "Sed odio sed non sagittis.",
      "At ac nunc nunc semper. Tincidunt pharetra lacus non.",
      "Egestas eu ut hendrerit nunc.",
      "Posuere vestibulum fringilla mattis sed interdum cras nec."
    ]
  },
  {
    title: "Delivery",
    description: "ipsum dolor sit amet, consectetur adipiscing. Rdum at et elit.",
    price: "FREE",
    period: "Domestic",
    features: [
      "Free for Shopee & Lazada",
      "Sed odio sed non sagittis.",
      "At ac nunc nunc semper. Tincidunt pharetra lacus non.",
      "Egestas eu ut hendrerit nunc.",
      "Posuere vestibulum fringilla mattis sed interdum cras nec."
    ]
  },
];

const PricingAndPlans = () => {
  return (
    <div className="container">
      <CustomHeading classStyle="lg:!text-7xl md:!text-6xl sm:!text-5xl !text-4xl pb-3.5 font-kanit font-bold text-center" title="Pricing & Plans" />
      <CustomDescription classStyle="text-center pb-9" description="Free access to outlets, pay-as-you-go." />
      <div className="flex gap-[39px] max-lg:flex-wrap justify-center">
        {PRICING_DATA_LIST.map((card, index) => (
          <div key={index} className={`w-full max-w-[303px] rounded-2xl py-[31px] bg-cover bg-center bg-no-repeat ${index === 1 ? "bg-pricing-table" : " border-2 border-black/20"} `}>
            <div className="px-7">
              <h3 className="text-[13px] font-semibold uppercase pb-[3px] ">{card.title}</h3>
              <p className="text-sm mb-4 opacity-80">{card.description}</p>
            </div>
            <div className={`px-7 bg-ghost-white ${index === 1 ? "bg-white/20" : ""}`}>
              <p className='text-custom-3xl font-kanit font-black'>{card.price}</p>
              <p className="text-xs pb-[9px] opacity-80">{card.period}</p>
            </div>
            <div className="px-7">
              <ul className="space-y-[7px] pt-3 pb-[35px] text-left">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex gap-3">
                    <span className='pt-1.5 !opacity-100'> <CheckIcon />
                    </span> <span className="opacity-80">{feature}</span></li>
                ))}
              </ul>
              <div className="flex items-center justify-center">
                <CustomButton title="Start for free" classStyle={`!py-3 !px-[67px] ${index === 1 ? "!bg-black !text-white" : ""}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingAndPlans