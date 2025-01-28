import React from 'react'
import CustomSlider from './common/CustomSlider'
import CustomHeading from './common/CustomHeading'
import { OVERFLOW_SWIPER_DATA_LIST,OPPOSITESIDE_ONE_DATA_LIST,TRUST_LIST } from '../utils/helper'

const FulfilledMillions = () => {
 
  return (
    <div className='pt-[89px] pb-[76px] max-w-[1920px] mx-auto relative'>
      <div></div>
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