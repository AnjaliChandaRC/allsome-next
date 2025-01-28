'use client';

import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import Image from 'next/image';

const CustomSlider = ({ dataList, className = '', slidesToShow = 7, rtl = false }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      $(sliderRef.current).slick({
        arrows: false,
        dots: false,
        speed: 4000,
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
    <div className={`companies-slider ${className}`} ref = { sliderRef } >
    {
      dataList.map((obj, index) => (
        <div key={index} className="slide-item">
          <Image
            width={obj.width}
            height={obj.height}
            className="object-cover object-top"
            src={obj.image}
            alt="img"
          />
        </div>
      ))
    }
    </div >
  );
};

export default CustomSlider;

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import $ from 'jquery';
// import 'slick-carousel';
// import Image from 'next/image';

// const CustomSlider = ({ dataList, className = '', slidesToShow = 7 }) => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     if (sliderRef.current) {
//       $(sliderRef.current).slick({
//         arrows: false,
//         dots: false,
//         speed: 3000,
//         autoplay: true,
//         autoplaySpeed: 0,
//         cssEase: 'linear',
//         slidesToShow: slidesToShow,
//         slidesToScroll: 1,
//         infinite: true,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2.5,
//             },
//           },
//         ],
//       });
//     }

//     return () => {
//       if (sliderRef.current) {
//         $(sliderRef.current).slick('unslick');
//       }
//     };
//   }, [slidesToShow]);

//   return (
//     <div className={`companies-slider ${className}`} ref={sliderRef}>
//       {dataList.map((obj, index) => (
//         <div key={index} className="slide-item">
//           <Image
//             width={obj.width}
//             height={obj.height}
//             className="object-cover object-top"
//             src={obj.image}
//             alt="img"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomSlider;



//   < Swiper
// className = {`linear-slider ${className}`}
// modules = { [Autoplay]}
// slidesPerView = { auto }
// spaceBetween = { spaceBetween }
// centeredSlides = { true}
// loop = { true}
// freeMode = { true}
// autoplay={{
//   delay: 0,
//   disableOnInteraction: false,
// }}
// speed = { 6000}
// breakpoints = {{
//   1024: { slidesPerView: 2.6 },
//   992: { slidesPerView: 3 },
//   640: { slidesPerView: 4 },
//   475: { slidesPerView: 2.5 },
// }}
//       >
// {
//   dataList.map((obj, i) => (
//     <SwiperSlide key={i}>
//       <Image
//         width={obj.width}
//         height={obj.height}
//         className="object-cover object-top"
//         src={obj.image}
//         alt="img"
//       />
//     </SwiperSlide>
//   ))
// }
//       </Swiper >
