import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SalesOpportunity = () => {
  return (
    <div className='xl:pt-[100px] xl:pb-40 lg:py-16 py-12'>
      <div className='xl:max-w-[1440px] mx-auto'>
        <div className='container mx-auto'>
          <div className='xl:flex-row flex flex-col relative'>
            <div className='xl:max-w-[560px] w-full flex flex-col lg:items-start items-center justify-center xl:pt-10'>
              <CustomHeading styleclass="xl:!text-custom-5xl leading-[100%] lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold max-xl:text-center sm:pb-[21px] pb-4"
                title={'Maximize sales opportunity with ready inventory'} />
              <CustomDescription styleclass="xl:max-w-[436px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-xl:text-center"
                description="Be where your shoppers are, both online and offline. Appear to the right audience at the right time, both online and offline to generate sales for you." />
              <CustomButton styleclass="sm:mt-[25px] mt-4 !py-[10px] !px-[22px] !bg-black !text-white max-xl:mx-auto" title="Sign up" />
            </div>
            <div className='flex xl:justify-start justify-center xl:absolute -right-16 max-xl:mt-6'>
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