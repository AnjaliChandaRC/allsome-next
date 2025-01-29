'use client';
import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import Image from 'next/image';

const CustomSlider = ({ dataList, classStyle = '', slidesToShow = 7, rtl = false, customClassStyle }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      $(sliderRef.current).slick({
        arrows: false,
        dots: false,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        rtl: rtl,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.5,
            },
          },
        ],
      });
    }

    return () => {
      if (sliderRef.current) {
        $(sliderRef.current).slick('unslick');
      }
    };
  }, [slidesToShow]);

  return (
    <div className={`companies-slider !flex !justify-center !items-center ${classStyle}`} ref={sliderRef} >
      {
        dataList.map((obj, index) => (
          <div key={index} className="slide-item !flex !justify-center !items-center">
            <Image width={obj.width} height={obj.height} className={`${customClassStyle} "object-cover h-auto w-auto"`} src={obj.image} alt="img" />
          </div>
        ))
      }
    </div >
  );
};

export default CustomSlider;

