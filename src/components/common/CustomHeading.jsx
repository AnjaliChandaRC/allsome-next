const CustomHeading = ({ styleclass, styleclassOne, text, title, styleclassTwo, textTwo, titleTwo }) => {
  return (
    <h2 className={`${styleclass} xl:text-7xl !font-kanit lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:!leading-[100%] !leading-[120%] text-black !font-semibold`}>
      <span className={`${styleclassOne} !font-kanit relative text-dark-green after:content-[''] after:block after:w-full after:h-[3px] after:bg-dark-green after:absolute after:xl:bottom-2.5 after:lg:bottom-1.5 after:md:bottom-1 after:bottom-0.5 after:left-0 after:rounded-[3px]`}>
        {text}
      </span>
      {title}
      <span className={`${styleclassTwo} !font-kanit relative text-dark-green after:content-[''] after:block after:w-full after:h-[3px] after:bg-dark-green after:absolute after:xl:bottom-2.5 after:lg:bottom-1.5 after:md:bottom-1 after:bottom-0.5 after:left-0 after:rounded-[3px]`}>
        {textTwo}
      </span>
      {titleTwo}
    </h2>
  );
};

export default CustomHeading;
