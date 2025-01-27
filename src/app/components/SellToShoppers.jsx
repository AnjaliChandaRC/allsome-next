import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SellToShoppers = () => {
  return (
    <div className='bg-cover w-full flex flex-col items-center justify-center relative xl:pb-[110px] xl:pt-[85px] lg:pb-[70px] lg:pt-[50px] max-lg:py-12'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-4/12 w-full">
            <div className="lg:py-[22px] md:py-4 py-3 lg:px-5 md:px-4 px-3">
              <CustomHeading classstyle='xl:!text-[40px] lg:text-3xl md:!text-2xl !text-xl font-semibold lg:mb-4 md:mb-3 mb-2' title='Sell to shoppers wherever they are' />
              <CustomDescription classstyle='lg:mb-6 md:mb-5 mb-4' title='AllSome helps you to build your e-commerce operations across all sales channels.' />
              <CustomButton title='Sign up today' />
            </div>
          </div>
          <div className="w-8/12">

          </div>
        </div>
      </div>
    </div>
  )
}

export default SellToShoppers