import React from 'react'
import CustomSlider from './common/CustomSlider'

const FulfilledMillions = () => {
  const OVERFLOW_SWIPER_DATA_LIST = [
    { image: "/assets/images/webp/footer-logo.webp" },
    
  ]

  const OPPOSITESIDE_ONE_DATA_LIST = [
    { image: "/assets/images/webp/footer-logo.webp" },

  ]
  const TRUST_LIST = [
    { image: "/assets/images/webp/footer-logo.webp" },

  ]

  return (
    <div className='lg:pt-11 md:pt-12 py-6'>
      <CustomSlider
        dataList={OPPOSITESIDE_ONE_DATA_LIST}
        slidesPerView={3}
        spaceBetween={20}
      />
      <CustomSlider
        dataList={OVERFLOW_SWIPER_DATA_LIST}
        className="change-direction mt-10"
        slidesPerView={3}
        spaceBetween={20}
      />
      <CustomSlider
        dataList={TRUST_LIST}
        className="mt-10"
        slidesPerView={3}
        spaceBetween={20}
      />
    </div>
  )
}

export default FulfilledMillions