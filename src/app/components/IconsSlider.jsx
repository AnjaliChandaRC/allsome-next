'use client'
import React from 'react'
import CustomSlider from './common/CustomSlider'
import { ICON_SLIDER_LIST } from '../utils/helper'
import Image from 'next/image'

const IconsSlider = () => {
  return (
    <div className='max-3xl:bg-white-pattern 3xl:bg-white overflow-hidden bg-cover w-full bg-center xl:pt-[147px] pt-20 xl:pb-[164px] lg:pb-20 md:pb-[60px] pb-[30px] -mt-16 md:-mt-28 2xl:-mt-32 relative z-[50] bg-no-repeat'>
      <div className="container">
        {/* ============================== custom Slider ======================================== */}
        <CustomSlider dataList={ICON_SLIDER_LIST} classStyle='!gap-[39px] md:!hidden max-md:!block' customClassStyle='sm:!gap-5 gap-3' />
        <div className="flex lg:gap-[39px] gap-6 justify-center items-center">
          {/* ============================== slider map ======================================== */}
          {ICON_SLIDER_LIST.map((obj, index) => (
            <div key={index} className='max-md:hidden md:block' data-aos="fade-right" data-aos-delay={index * 200} data-aos-duration="500">
              <Image className='object-cover flex pointer-events-none' src={obj.image} width={obj.width} height={obj.height} alt='icon' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IconsSlider