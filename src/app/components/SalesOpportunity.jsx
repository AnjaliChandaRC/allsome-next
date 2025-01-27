import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SalesOpportunity = () => {
  return (
    <div className='lg:pt-[77px] md:pt-12 lg:pb-[34px] sm:pb-7 py-6'>
      <div className='container max-w-[1440px] mx-auto'>
        <div className='max-w-[1257px]'>
          <CustomHeading styleclass="max-w-[843px] mx-auto text-center font-kanit" title="Everything your brands needs for" textTwo="success" styleclassTwo="" titleTwo="with fulfillment" />
          <div className='lg:flex-row flex lg:pt-[167px] md:pt-14 sm:pt-10  pt-8 lg:gap-[145px] flex-col gap-7'>
            <div className='lg:w-[436px] w-full flex flex-col lg:items-start items-center justify-center'>
              <CustomHeading styleclass="xl:!text-custom-5xl xl:!leading-custom-15xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold sm:pb-[21px] pb-4"
                title={'Maximize sales opportunity with ready inventory'} />
              <CustomDescription styleclass="lg:max-w-[436px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center"
                description="Be where your shoppers are, both online and offline. Appear to the right audience at the right time, both online and offline to generate sales for you." />
              <CustomButton styleclass="sm:mt-[25px] mt-4 !py-[10px] !px-[22px] !bg-black !text-white" title="Sign up" />
            </div>
            <div className='flex lg:justify-start justify-center'>
              <Image
                src="/assets/images/webp/sales.webp"
                width={682}
                height={468}
                className='object-cover max-w-[682px] lg:h-[468px] w-full'
                alt="sales opportunity"
              />
            </div>
          </div>
       </div>
      </div>
    </div>
  )
}

export default SalesOpportunity