import React from 'react'
import CustomSlider from './common/CustomSlider'
import CustomHeading from './common/CustomHeading'

const FulfilledMillions = () => {
  const OVERFLOW_SWIPER_DATA_LIST = [
    { image: "/assets/images/webp/soft-serve.webp", width: 90.67, height: 32 },
    { image: "/assets/images/webp/brightland.webp", width: 45, height: 32 },
    { image: "/assets/images/webp/kopari.webp", width: 90.92, height: 32 },
    { image: "/assets/images/webp/crossnet.webp", width: 91.92, height: 32 },
    { image: "/assets/images/webp/fly-by-jing.webp", width: 90.92, height: 32 },
    { image: "/assets/images/webp/squatch.webp", width: 91.92, height: 32 },
    { image: "/assets/images/webp/death-wish.webp", width: 87, height: 32 },
    { image: "/assets/images/webp/native.webp", width: 91.59, height: 32 },

  ]

  const OPPOSITESIDE_ONE_DATA_LIST = [
    { image: "/assets/images/webp/native.webp", width: 91.59, height: 32 },
    { image: "/assets/images/webp/soft-serve.webp", width: 90.67, height: 8},
    { image: "/assets/images/webp/brightland.webp", width: 45, height: 33 },
    { image: "/assets/images/webp/kopari.webp", width: 90.92, height: 33 },
    { image: "/assets/images/webp/crossnet.webp", width: 91.92, height: 33 },
    { image: "/assets/images/webp/fly-by-jing.webp", width: 90.92, height: 33 },
    { image: "/assets/images/webp/squatch.webp", width: 91.92, height: 23 },
    { image: "/assets/images/webp/death-wish.webp", width: 87, height: 29 },
    { image: "/assets/images/webp/native.webp", width: 91.59, height: 33 },


  ]
  const TRUST_LIST = [
    { image: "/assets/images/webp/soft-serve.webp", width: 90.67, height: 32 },
    { image: "/assets/images/webp/brightland.webp", width: 45, height: 32 },
    { image: "/assets/images/webp/kopari.webp", width: 90.92, height: 32 },
    { image: "/assets/images/webp/crossnet.webp", width: 91.92, height: 32 },
    { image: "/assets/images/webp/fly-by-jing.webp", width: 90.92, height: 32 },
    { image: "/assets/images/webp/squatch.webp", width: 91.92, height: 32 },
    { image: "/assets/images/webp/death-wish.webp", width: 87, height: 32 },
    { image: "/assets/images/webp/native.webp", width: 91.59, height: 32 },

  ]

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