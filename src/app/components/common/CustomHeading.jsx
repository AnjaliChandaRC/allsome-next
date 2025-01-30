import React from 'react';

const CustomHeading = (props) => {
  return (
    <h2 className={`${props.styleclass} xl:text-7xl font-kanit lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:!leading-[100%] !leading-[120%] text-black font-semibold`}>
      <span className={`${props.styleclassOne} relative text-dark-green after:content-[''] after:block after:w-full after:h-[3px] after:bg-dark-green after:absolute after:xl:bottom-2 after:lg:bottom-1.5 after:md:bottom-1 after:bottom-0.5 after:left-0 after:rounded-[3px]`}>
        {props.text}
      </span>
      {props.title}
      <span className={`${props.styleclassTwo} relative text-dark-green after:content-[''] after:block after:w-full after:h-[3px] after:bg-dark-green after:absolute after:xl:bottom-2 after:lg:bottom-1.5 after:md:bottom-1 after:bottom-0.5 after:left-0 after:rounded-[3px]`}>
        {props.textTwo}
      </span>
      {props.titleTwo}
    </h2>
  );
};

export default CustomHeading;
