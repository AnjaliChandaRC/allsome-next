import React from 'react'
import CustomSlider from './common/CustomSlider'
import CustomHeading from './common/CustomHeading'
import { OVERFLOW_SWIPER_DATA_LIST, OPPOSITESIDE_ONE_DATA_LIST, TRUST_LIST } from '../utils/helper'
import Image from 'next/image'

const FulfilledMillions = () => {
 
  return (
    <div className='lg:pt-[89px] lg:pb-[76px] md:py-14 py-12 max-w-[1920px] mx-auto relative'>
     <Image
                  src="/assets/images/webp/left-ellipse.webp"
                  width={471}
                  height={241}
                  className='object-cover lg:block hidden sm:max-w-[300px] max-sm:h-[200px] max-w-[100px] lg:max-w-[471px] w-full absolute left-0 lg:top-[39%] z-10'
                  alt="ellipse-left"
      />
      <Image
        src="/assets/images/webp/right-ellipse.webp"
        width={471}
        height={241}
        className='object-cover lg:block hidden sm:max-w-[300px] max-w-[100px] max-sm:h-[200px] lg:max-w-[471px] w-full absolute right-0 lg:top-[39%] z-10'
        alt="ellipse-right"
      />
      <CustomHeading styleclass="max-w-[746px] mx-auto text-center font-kanit" title="We have fulfilled " textTwo="millions" styleclassTwo="" />
      <div className='lg:pt-[63px] md:pt-12 py-6'>
        <CustomSlider
          dataList={OVERFLOW_SWIPER_DATA_LIST}
        />
        <CustomSlider
          dataList={OPPOSITESIDE_ONE_DATA_LIST}
          className="change-direction mt-[18px]"
          rtl={true}
        />
        <CustomSlider
          dataList={TRUST_LIST}
          className="mt-[18px]"
        />
      </div>
    </div>

  )
}

export default FulfilledMillions