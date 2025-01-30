import React from 'react'
import CustomSlider from './common/CustomSlider'
import { ICON_SLIDER_LIST } from '../utils/helper'
import Image from 'next/image'
import "aos/dist/aos.css";

const IconsSlider = () => {
  return (
    <div className='bg-white-pattern overflow-hidden bg-cover bg-center object-cover xl:pt-[147px] pt-20 xl:pb-[170px] lg:pb-20 md:pb-[60px] pb-[30px] -mt-28 relative z-[50] bg-no-repeat'>
      <div className="container">
        <CustomSlider dataList={ICON_SLIDER_LIST} classStyle='!gap-[39px] md:!hidden max-md:!block' customClassStyle='min-w-[100px] h-auto' />
        <div className="flex lg:gap-[39px] gap-6 justify-center items-center">
          {ICON_SLIDER_LIST.map((obj, index) => (
            <div key={index} className='max-md:hidden md:block'data-aos="fade-right" data-aos-delay={index * 200} data-aos-duration="500">
              <Image className='object-cover flex' src={obj.image} width={obj.width} height={obj.height} alt='icon' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IconsSlider