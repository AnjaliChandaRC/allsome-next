import React from 'react'
import CustomSlider from './common/CustomSlider'
import { ICON_SLIDER_LIST } from '../utils/helper'

const IconsSlider = () => {
  return (
    <div className='bg-white-pattern bg-cover bg-center object-cover pt-[140px] pb-[164px] -mt-28 relative z-[50] bg-no-repeat'>
      <div className="container">
        <CustomSlider dataList={ICON_SLIDER_LIST} classStyle='!gap-[39px]' customClassStyle='mr-[39px] min-w-[100px] h-auto w-auto'/>
      </div>
    </div>
  )
}

export default IconsSlider