import Image from 'next/image'
import CustomButton from './common/CustomButton';
import CustomHeading from './common/CustomHeading';
import CustomDescription from './common/CustomDescription';
import { CheckIcon } from '../utils/icons';
import { PRICING_DATA_LIST } from '../utils/helper'

const PricingAndPlans = () => {
  return (
    <div id='pricing' className="overflow-hidden">
      <div className="container sm:pb-10 md:pb-[66px] lg:pt-20 max-sm:py-[30px] max-xl:pt-20 max-lg:pt-[60px] max-md:pt-10 max-sm:pt-[30px]">
        <CustomHeading styleclass="lg:!text-7xl md:!text-6xl sm:!text-5xl !text-4xl pb-3.5 font-kanit font-bold text-center !font-bold" title="Pricing & Plans" />
        <CustomDescription styleclass="text-center sm:pb-9 !pb-5" description="Free access to outlets, pay-as-you-go." />
        <div className="flex xl:gap-[39px] gap-4 max-lg:flex-wrap justify-center">
          {PRICING_DATA_LIST.map((card, index) => (
            <div key={index}
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                    ? "zoom-in-down"
                    : "fade-left"}
              data-aos-delay={
                index === 1
                  ? "300"
                  : "100"}>
              <div className={`w-full relative max-w-[303px] rounded-2xl sm:py-[31px] py-5 bg-cover bg-center hover:shadow-[0px_1px_5px_5px_#36eb58] transition-all duration-300 ease-linear bg-no-repeat ${index === 1 ? "bg-pricing-table" : " border-2 border-black/20 hover:border-transparent "} `}>
                <div className="sm:px-7 px-5">
                  <h3 className="text-sm font-semibold uppercase pb-[3px] ">{card.title}</h3>
                  <p className="text-sm mb-4 opacity-80">{card.description}</p>
                </div>
                <div className={`sm:px-7 px-5 bg-off-white ${index === 1 ? "bg-white/20" : ""}`}>
                  <p className='md:text-custom-3xl sm:text-4xl text-3xl font-kanit font-black md:leading-custom-13xl leading-custom-11xl'>{card.price}</p>
                  <p className="text-xs pb-[9px] opacity-80">{card.period}</p>
                </div>
                <div className="sm:px-7 px-5">
                  <ul className="space-y-[7px] pt-3 sm:pb-[35px] pb-4 text-left">
                    {card.features.map((feature, i) => (
                      <li key={i} className={`flex gap-3`}>
                        <span className={`pt-1.5 ${index === 1 ? "check-icon" : ""}`}>
                          <CheckIcon />
                        </span>
                        <span className="opacity-80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-center">
                    <CustomButton title="Start for free" styleclass={`!py-3 !px-[67px] !w-full hover:!bg-black hover:text-white before:!bg-black ${index === 1 ? "bg-black text-white hover:!text-black hover:!bg-white before:!bg-white" : ""}`} />
                  </div>
                </div>
                <Image className={`absolute bottom-[-12%] pointer-events-none  ${index === 1 ? "block" : "hidden"} `} height={34} width={272} src="/assets/images/webp/price-table-shadow.webp" alt='table shadow' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default PricingAndPlans;
