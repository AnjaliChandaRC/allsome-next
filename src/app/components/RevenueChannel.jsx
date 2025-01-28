import React from 'react'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'

const RevenueChannel = () => {
  return (
    <div className='bg-light-green rounded-[40px] pt-[90px] pb-[103px] max-xl:py-20 max-lg:py-[60px] max-md:py-10 overflow-hidden'>
      <div className='container'>
        <div className='flex items-center justify-between xl:gap-10 max-lg:flex-wrap max-lg:justify-center'>
          <div className='flex flex-col'>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green max-lg:text-center pb-[11px]'>
              Let's take about sales
            </p>
            <CustomHeading
              title='Turn fulfillment into your'
              textTwo='#1 revenue'
              titleTwo='channel'
              styleclassTwo=''
              styleclass='xl:max-w-[692px] font-kanit max-lg:!max-w-none max-lg:text-center'
            />
            <CustomDescription
              styleclass='!text-black !opacity-80 !max-w-[510px] !leading-6 !pt-[11px] sm:text-base max-lg:!max-w-none max-lg:text-center'
              description='We helped thousands of merchants scale their business to new
              heights. AllSome customers achieve 340% growth overtime with auto
              run e-commerce post purchase operations.'
            />
            <div className='max-lg:flex max-lg:justify-center'>
              <CustomButton
                title='Chat with our fulfillment experts'
                styleclass='!mt-[23px] !py-[10.5px] !px-6 max-lg:!mt-5'
              />
            </div>
          </div>
          <Image
            src='/assets/images/webp/revenue-chart.webp'
            alt='revenue-chart'
            width={483}
            height={357}
            className='object-cover pointer-events-none rounded-2xl max-w-[483px] lg:h-[357px] max-lg:max-w-[380px] max-md:max-w-[300px] w-full max-lg:pt-8 revenue-img-shadow'
          />
        </div>
      </div>
    </div>
  )
}

export default RevenueChannel
