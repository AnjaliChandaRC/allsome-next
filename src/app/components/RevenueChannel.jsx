import React from 'react'
import Image from 'next/image'
import CustomButton from './common/CustomButton'
import CustomHeading from './common/CustomHeading'

const RevenueChannel = () => {
  return (
    <div className='bg-light-green rounded-[40px] pt-[90px] pb-[103px] max-lg:py-20'>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <div className='flex items-center justify-between max-lg:flex-wrap max-lg:justify-center'>
          <div>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green'>
              Let's take about sales
            </p>
            <CustomHeading
              title='Turn fulfillment into your #1 revenue channel'
              styleclass='max-w-[692px] font-kanit'
            />
            <p className='text-black opacity-80 max-w-[510px] leading-6 pt-[11px]'>
              We helped thousands of merchants scale their business to new
              heights. AllSome customers achieve 340% growth overtime with auto
              run e-commerce post purchase operations.
            </p>
            <CustomButton
              title='Chat with our fulfillment experts'
              styleclass='!mt-[23px] !py-3'
            />
          </div>
          <Image
            src="/assets/images/webp/revenue-chart.webp"
            alt='revenue-chart'
            width={483}
            height={357}
            className='object-cover max-w-[483px] lg:h-[357px] w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default RevenueChannel
