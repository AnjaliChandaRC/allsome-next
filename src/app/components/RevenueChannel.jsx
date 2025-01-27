import React from 'react'
import CustomButton from './common/CustomButton'
import CustomHeading from './common/CustomHeading'

const RevenueChannel = () => {
  return (
    <div className='bg-light-green rounded-[40px] pt-[90px] pb-[103px]'>
      <div className='max-w-[1172px] px-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green'>
              Let's take about sales
            </p>
            <CustomHeading title="Turn fulfillment into your #1 revenue channel" classStyle=""/>
            <p className='text-black opacity-80 max-w-[510px] leading-6 pt-[11px]'>
              We helped thousands of merchants scale their business to new
              heights. AllSome customers achieve 340% growth overtime with auto
              run e-commerce post purchase operations.
            </p>
            <CustomButton title="Chat with our fulfillment experts" classStyle='mt-[23px] !py-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueChannel
