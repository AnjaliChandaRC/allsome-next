import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton'

const Shoppers = () => {
  return (
    <div className='py-0 overflow-hidden'>
      <div className='container'>
        <div className='flex items-center justify-between max-lg:flex-wrap max-lg:justify-center w-full'>
          <div className='max-lg:text-center'>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green pb-[7px]'>
              Know where are your shoppers
            </p>
            <CustomHeading
              title='Be where your shoppers are'
              styleclass='font-kanit max-w-[487px] max-lg:max-w-none'
            />
            <div className='flex items-center gap-3 pt-10 max-lg:justify-center max-lg:pt-5'>
              <CustomButton
                title='Start for free'
                styleclass='!py-[12.5px] !px-[32.5px] bg-black text-white hover:!text-black hover:bg-white'
              />
              <CustomButton
                title='Request demo'
                styleclass='!py-[12.5px] !px-[22.5px]'
              />
            </div>
          </div>
          <Image
            src='/assets/images/webp/shoppers-earth.webp'
            alt='revenue-chart'
            width={510}
            height={490}
            className='object-cover pointer-events-none max-w-[503px] h-[490px] w-full max-lg:pt-5 max-lg:w-[400px]'
          />
        </div>
      </div>
    </div>
  )
}

export default Shoppers
