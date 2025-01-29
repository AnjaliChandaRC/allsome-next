import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton'

const Shoppers = () => {
  return (
    <div className='pt-10 pb-[120px] max-xl:py-20 max-lg:py-[60px] max-md:py-[30px] overflow-hidden'>
      <div className='container'>
        <div className='flex items-center justify-between xl:gap-10 max-lg:flex-wrap max-lg:justify-center w-full'>
          <div className='max-lg:text-center w-full'>
            <p className='font-kanit text-xl font-semibold leading-5 text-dark-green pb-[7px]'>
              Know where are your shoppers
            </p>
            <CustomHeading
              title='Be where your '
              textTwo='shoppers ' 
              titleTwo='are'
              styleclass='max-w-[487px] max-lg:max-w-none font-bold'
            />
            <div className='flex items-center gap-3 pt-10 max-lg:justify-center max-lg:pt-5'>
              <CustomButton
                title='Start for free'
                styleclass='!w-[166px] h-[52px] max-lg:h-[48px] max-lg:!w-[140px] bg-black text-white hover:!text-black hover:bg-white'
              />
              <CustomButton
                title='Request demo'
                styleclass='w-[158px] h-[52px] max-lg:h-[48px] max-lg:!w-[140px] hover:!bg-black hover:text-white before:!bg-black'
              />
            </div>
          </div>
          <div className='w-full max-lg:flex max-lg:justify-center max-lg:pt-12 pt-1'>
            <Image
              src='/assets/images/webp/shoppers-earth.webp'
              alt='shoppers-earth'
              width={503}
              height={490}
              className='pointer-events-none max-w-[480px] h-[450px] max-xl:max-w-[450px] max-xl:h-[420px] max-lg:h-[420px] block max-md:!max-w-[300px] max-md:h-[285px] earth-animation'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shoppers
