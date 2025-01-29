import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import { SHOPPERS_CARDS_LIST } from '../utils/helper'

const SellToShoppers = () => {
  return (
    <div className='bg-cover w-full flex flex-col items-center justify-center relative xl:pb-[110px] lg:pb-[70px] max-lg:pb-12'>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="xl:w-4/12 w-full">
            <div className="lg:py-[22px] xl:max-w-[367px] lg:max-w-3xl md:max-w-2xl max-w-lg max-xl:mx-auto md:py-4 py-3 lg:px-5 md:px-4 px-3 green-gradient rounded-2xl xl:min-h-[365px]">
              <CustomHeading styleclass='xl:!text-[40px] lg:!leading-[112%] max-w-[307px] lg:text-3xl md:!text-2xl !text-xl !font-semibold lg:mb-4 md:mb-3 mb-2' title='Sell to shoppers wherever they are' />
              <CustomDescription styleclass='lg:mb-6 md:mb-5 mb-4' description='AllSome helps you to build your e-commerce operations across all sales channels.' />
              <CustomButton styleclass='hover:!bg-transparent xl:!px-8 xl:!py-[12.5px] !bg-black hover:!text-black !text-white' title='Sign up today' />
            </div>
          </div>
          <div className="xl:w-8/12 w-full xl:pt-0 pt-10 lg:pl-8 mx-auto max-xl:justify-center flex items-center">
            <div className="flex xl:gap-x-[36px] lg:gap-x-36 md:gap-x-10 max-xl:justify-center items-center lg:gap-y-[68px] md:gap-y-14 sm:gap-y-12 gap-y-10 flex-wrap">
              {SHOPPERS_CARDS_LIST.map((item, index) => (
                <div className="max-w-[323px] w-full gap-4 flex" key={index}>
                  <div className='w-auto'>
                    <Image className={`lg:min-w-[80px] min-w-[60px] h-auto pointer-events-none ${index === 2 ? "min-w-[62px] max-w-[62px]" : ""}${index === 3 ? "min-w-[65px] max-w-[65px]" : ""}`} src={item.cardImg} width={item.width} height={item.height} alt={item.alt} />
                  </div>
                  <div>
                    <h4 className='font-medium lg:text-lg md:text-base text-sm mb-1 leading-[150%] text-black'>{item.title}</h4>
                    <p className={` ${index === 1 ? "xl:min-w-[260px]" : ""}  ${index === 3 ? "xl:min-w-[260px]" : ""} text-black w-full opacity-80 lg:text-base md:text-sm text-xs`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellToShoppers