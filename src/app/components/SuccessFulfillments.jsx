import React from 'react'
import CustomHeading from './common/CustomHeading';
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton';
import Image from 'next/image';

const SuccessFulfillments = () => {
  return (
    <>
      <div className="lg:pt-[77px] md:pt-12 lg:pb-[68px] pb-12 container">
         <div className='container'>
        <CustomHeading styleclass="max-w-[843px] mx-auto text-center font-kanit" title="Everything your brands needs for" textTwo="success" styleclassTwo="" titleTwo="with fulfillment" />
        <div className='lg:flex-row max-lg:flex-col-reverse flex lg:pt-[167px] md:pt-12 sm:pt-10 pt-8 lg:gap-[145px] flex-col gap-7'>
          <div className='lg:w-[436px] w-full flex flex-col lg:items-start items-center justify-center'>
            <CustomHeading styleclass="lg:max-w-[398px] xl:!text-custom-5xl lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold sm:pb-[21px] pb-4" title={'Build your technology'} />
            <CustomDescription styleclass="lg:max-w-[434px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center" description="From e-commerce stores integration, inventory management, order management, warehouse management and return management - all within AllSome. Activate the modules through a single click." />
              <CustomButton styleclass="sm:mt-[25px] mt-4 !py-[10px] !px-[22px] !bg-black !text-white !w-[107px] !h-12 !hover:w-full !hover:text-black" title="Sign up" />
          </div>
          <div className='flex lg:justify-start justify-center'>
            <Image
              src="/assets/images/webp/build-image.webp"
              width={455}
              height={467}
              className='object-cover max-w-[455px] lg:h-[467px] w-full'
              alt="build-image"
            />
          </div>
        </div>
      </div>
    </div>
  
    </>

  );
};

export default SuccessFulfillments;
