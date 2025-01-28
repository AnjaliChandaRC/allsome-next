import React from 'react'
import CustomSlider from './common/CustomSlider'

const FulfilledMillions = () => {
  const OVERFLOW_SWIPER_DATA_LIST = [
    { image: "/assets/images/webp/soft-serve.webp", maxWidth: "90.67px" },
    { image: "/assets/images/webp/brightland.webp", maxWidth: "45px" },
    { image: "/assets/images/webp/kopari.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/crossnet.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/fly-by-jing.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/squatch.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/death-wish.webp", maxWidth: "87px" },
    { image: "/assets/images/webp/native.webp", maxWidth: "91.59px" },

  ]

  const OPPOSITESIDE_ONE_DATA_LIST = [
    { image: "/assets/images/webp/native.webp", maxWidth: "91.59px" },
    { image: "/assets/images/webp/soft-serve.webp", maxWidth: "90.67px" },
    { image: "/assets/images/webp/brightland.webp", maxWidth: "45px" },
    { image: "/assets/images/webp/kopari.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/crossnet.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/fly-by-jing.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/squatch.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/death-wish.webp", maxWidth: "87px" },
    { image: "/assets/images/webp/native.webp", maxWidth: "91.59px" },


  ]
  const TRUST_LIST = [
    { image: "/assets/images/webp/soft-serve.webp", maxWidth: "90.67px" },
    { image: "/assets/images/webp/brightland.webp", maxWidth: "45px" },
    { image: "/assets/images/webp/kopari.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/crossnet.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/fly-by-jing.webp", maxWidth: "90.92px" },
    { image: "/assets/images/webp/squatch.webp", maxWidth: "91.92px" },
    { image: "/assets/images/webp/death-wish.webp", maxWidth: "87px" },
    { image: "/assets/images/webp/native.webp", maxWidth: "91.59px" },

  ]

  return (
    <div className='lg:pt-11 md:pt-12 py-6'>
      <CustomSlider
        dataList={OVERFLOW_SWIPER_DATA_LIST}
        slidesPerView={3}
        spaceBetween={20}
      />
      <CustomSlider
        dataList={OPPOSITESIDE_ONE_DATA_LIST}
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