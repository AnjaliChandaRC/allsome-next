'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';


const CustomSlider = ({ dataList, className = '', auto = 3, spaceBetween =20 }) => {
  return (
    <div>
      <Swiper
        className={`linear-slider ${className}`}
        modules={[Autoplay]}
        slidesPerView={auto}
        spaceBetween={90}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        breakpoints={{
          1024: { slidesPerView: 2.6 },
          992: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          475: { slidesPerView: 2.5 },
        }}
      >
        {dataList.map((Obj, i) => (
          <SwiperSlide key={i}>
            <Image
              width={90}
              height={109}
              className="object-cover object-top"
              src={Obj.image || Obj.img}
              alt="img"
              style={{ maxWidth: Obj.maxWidth, width: '100%' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CustomSlider
