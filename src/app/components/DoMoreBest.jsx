import Image from 'next/image';
import CustomHeading from '../components/common/CustomHeading'
import CustomDescription from './common/CustomDescription';
import { DO_MORE_BEST_DATA } from '../utils/helper';

const DoMoreBest = () => {

  return (
    <div className='bg-black lg:rounded-[40px] rounded-[20px] lg:py-[60px] py-10 relative' id='features'>
      <Image
        src="/assets/images/webp/best-left-ellipse.webp"
        width={656}
        height={596}
        className='object-cover pointer-events-none h-auto absolute top-0 left-0 lg:rounded-tl-[40px] rounded-tl-[20px] lg:max-w-[656px] sm:max-w-[456px] max-w-[400px] sm:block hidden'
        alt="left-ellipse"
      />
      <Image
        src="/assets/images/webp/best-right-ellipse.webp"
        width={563}
        height={347}
        className='object-cover pointer-events-none h-auto absolute bottom-0 right-0 lg:rounded-br-[40px] rounded-br-[20px] lg:max-w-[563px] max-w-[400px] sm:block hidden'
        alt="right-ellipse"
      />
      <div className='container max-w-[1178px] mx-auto relative z-10'>
        <CustomHeading title="Do more of what you do best" styleclass="!text-white text-center lg:!text-custom-4xl md:!text-5xl sm:!text-4xl !text-3xl !font-bold" />
        <CustomDescription description="Everything you need to run your awesome e-commerce" styleclass="!text-white !font-normal opacity-80 text-center lg:pt-8 md:pt-6 pt-5" />
        <div className='flex flex-row flex-wrap xl:gap-[22px] max-xl:justify-between xl:pt-[108px] lg:pt-20 md:pt-11 pt-9'>
          {DO_MORE_BEST_DATA.map((obj, index) => (
            <div key={index}
              data-aos="fade-right"
            data-aos-delay={`${index * 100 + 100}`}
              className='xl:max-w-[270px] xl:w-full md:w-[31.33%] sm:w-[48%] w-full lg:mb-10 mb-7 group duration-500'>
              <div className='lg:size-[60px] bg-circle size-12 group-hover:animate-zoomOut rounded-full bg-gradient-to-bl to-lemon via-dark-green from-green flex items-center !curser-pointer shadow-[0_2px_28px_#36eb58] justify-center'>
                <span styleclass="max-lg:!size-6 !width-3 !height-3">{obj.cardIcon}</span>
              </div>
              <h3 className="font-kanit font-medium lg:text-lg text-base lg:leading-custom-8xl text-white lg:pt-[19px] pt-4 pb-[11px]">
                {obj.title}
              </h3>
              <p className="font-normal lg:text-base text-sm lg:leading-6 text-white opacity-70 xl:max-w-[266px]">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoMoreBest