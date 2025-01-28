import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton'

const Shoppers = () => {
  return (
    <div className='py-0 max-lg:py-[60px] overflow-hidden'>
      <div className='container'>
        <div className='flex items-center justify-between max-lg:flex-wrap max-lg:justify-center w-full'>
          <div className='max-lg:text-center w-full'>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green pb-[7px]'>
              Know where are your shoppers
            </p>
            <CustomHeading
              title='Be where your'
              textTwo='shoppers'
              titleTwo='are'
              styleclassTwo=''
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
          <div className='w-full flex justify-center'>
            <Image
              src='/assets/images/webp/shoppers-earth.webp'
              alt='revenue-chart'
              width={503}
              height={490}
              className='object-cover pointer-events-none max-w-[503px] h-[490px] max-[1023px]:max-w-[460px] block max-lg:max-w-80 max-md:max-w-80'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoppers
