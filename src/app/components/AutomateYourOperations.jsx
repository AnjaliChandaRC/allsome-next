import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const AutomateYourOperations = () => {
  return (
    <div className='bg-light-green rounded-[40px]'>
      <div className='container max-w-[1109px] mx-auto'>
        <div className='lg:flex-row max-lg:flex-col-reverse flex lg:py-[112px] md:py-14 sm:py-10 py-8 justify-between flex-col gap-7'>
          <div className='flex lg:justify-start justify-center'>
            <Image
              src="/assets/images/webp/automate-image.webp"
              width={435}
              height={443}
              className='object-cover max-w-[435px] lg:h-[443px] w-full'
              alt="Picture of the author"
            />
          </div>
          <div className='lg:w-[483px] w-full flex flex-col lg:items-start items-center justify-center'>
            <CustomHeading classStyle="lg:max-w-[482px] xl:!text-custom-5xl xl:!leading-custom-15xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold sm:pb-7 pb-4" title={'Automate your operations'} />
            <CustomDescription classStyle="lg:max-w-[463px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center" description="Build your e-commerce operation teams with ready software, modules, workforce, and more - all within AllSome. Once sold, orders will be shipped out automatically." />
            <CustomButton classStyle="sm:mt-[27px] mt-4 !py-[10px] !px-[22px] !bg-black !text-white" title="Sign up" />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default AutomateYourOperations