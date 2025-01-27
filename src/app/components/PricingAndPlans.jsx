import React from 'react'
import CustomButton from './common/CustomButton';
import CustomHeading from './common/CustomHeading';
import CustomDescription from './common/CustomDescription';

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
      "Posuere vestibulum fringilla mattis sed interdum cras nec.",
    ],
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
      "Posuere vestibulum fringilla mattis sed interdum cras nec.",
    ],
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
      "Posuere vestibulum fringilla mattis sed interdum cras nec.",
    ],
  },
];

const PricingAndPlans = () => {
  return (
    <div className="container">
      <CustomHeading className="lg:!text-7xl md:!text-6xl sm:!text-5xl !text-4xl pb-3.5 !font-kanit font-bold text-center" title="Pricing & Plans" />
      <CustomDescription className="text-center pb-9" description="Free access to outlets, pay-as-you-go." />
      <div className="flex gap-[39px] max-lg:flex-wrap justify-center">
        {PRICING_DATA_LIST.map((card, index) => (
          <div key={index} className={`w-full max-w-[303px]  rounded-2xl shadow-md py-[31px] ${index === 1 ? "bg-green" : ""} `}>
            <div className="px-7">
              <h3 className="text-[13px] font-semibold uppercase pb-[3px] ">{card.title}</h3>
              <p className="text-sm mb-4">{card.description}</p>
            </div>
            <div className="bg-[#F9F9F9] px-7">
              <p className='text-custom-3xl font-kanit font-black'>{card.price}</p>
              <p className="text-xs pb-6">{card.period}</p>
            </div>
            <div className="px-7">
              <ul className="space-y-2 mb-6 text-left">
                {card.features.map((feature, i) => (
                  <li key={i} className={`flex gap-3 ${i === 1 ? "opacity-80" : ""} `}>
                    <span className='pt-1.5'><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.71233 1.21261C8.88842 1.04497 9.12274 0.952289 9.36585 0.954128C9.60897 0.955968 9.84186 1.05218 10.0154 1.22246C10.1889 1.39275 10.2895 1.62379 10.2959 1.86682C10.3024 2.10986 10.2141 2.34589 10.0498 2.52511L5.06233 8.76261C4.97657 8.85498 4.87306 8.92911 4.758 8.98056C4.64293 9.03202 4.51867 9.05974 4.39264 9.06208C4.26662 9.06441 4.14142 9.04131 4.02453 8.99415C3.90763 8.94699 3.80145 8.87674 3.71233 8.78761L0.404831 5.48011C0.312722 5.39428 0.238845 5.29078 0.187605 5.17578C0.136365 5.06078 0.108812 4.93664 0.106591 4.81076C0.10437 4.68488 0.127526 4.55984 0.174678 4.44311C0.221829 4.32637 0.29201 4.22033 0.381033 4.13131C0.470057 4.04228 0.576099 3.9721 0.692834 3.92495C0.809569 3.8778 0.934606 3.85464 1.06048 3.85687C1.18636 3.85909 1.3105 3.88664 1.4255 3.93788C1.5405 3.98912 1.644 4.063 1.72983 4.15511L4.34733 6.77136L8.68858 1.24011C8.6964 1.23048 8.70474 1.2213 8.71358 1.21261H8.71233Z" fill="#00C934" />
                    </svg>
                    </span>{feature}</li>
                ))}
              </ul>
              <div className="flex items-center justify-center">
                <CustomButton title="Start for free" className={`!py-3.5 !px-[73px] ${index === 1 ? "!bg-black !text-white" : ""}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingAndPlans