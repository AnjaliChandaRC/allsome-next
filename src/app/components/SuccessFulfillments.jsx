// import CustomHeading from './common/CustomHeading';
// import CustomDescription from './common/CustomDescription'
// import CustomButton from './common/CustomButton';
// import Image from 'next/image';
// import 'aos/dist/aos.css';

// const SuccessFulfillments = () => {
//   return (
//       <div className="lg:pt-[77px] md:pt-[30px] lg:pb-[68px] pb-[60px] max-sm:pt-[22px]">
//          <div className='container'>
//         <CustomHeading styleclass="lg:max-w-[843px] mx-auto text-center font-kanit w-full" title="Everything your brands needs for " textTwo="success" styleclassTwo="" titleTwo=" with fulfillment" />
//         <div className='lg:flex-row max-lg:flex-col-reverse flex xl:pt-[167px] lg:pt-24 md:pt-12 sm:pt-10 pt-8 lg:gap-[145px] flex-col gap-7'>
//             <div data-aos="fade-left" className='lg:w-[436px] w-full flex flex-col lg:items-start items-center justify-center'>
//               <CustomHeading styleclass="lg:max-w-[398px] xl:!leading-custom-14xl xl:!text-custom-5xl lg:!text-custom-3xl md:!text-4xl !text-2xl font-kanit font-semibold sm:pb-[21px] pb-4" title={'Build your technology'} />
//               <CustomDescription styleclass="lg:max-w-[434px] max-w-[600px] max-lg:mx-auto !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-lg:text-center" description="From e-commerce stores integration, inventory management, order management, warehouse management and return management - all within AllSome. Activate the modules through a single click." />
//               <CustomButton styleclass="sm:mt-[25px] mt-4 !py-[10px] !px-[22px] !bg-black text-white !w-[107px] !h-12 !hover:w-full !hover:text-black" title="Sign up" />
//           </div>
//             <div data-aos="fade-right" className='flex lg:justify-start justify-center'>
//             <Image
//               src="/assets/images/webp/build-image.webp"
//               width={455}
//               height={467}
//               className='object-cover lg:max-w-[455px] max-w-[300px] sm:max-w-[350px] lg:h-[467px] w-full pointer-events-none'
//               alt="build-image"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessFulfillments;

import React from 'react'
import CustomBrandsLayout from './common/CustomBrandsLayout'
import CustomHeading from './common/CustomHeading';

const SuccessFulfillments = () => {
  return (
    <>
      <div className="lg:pt-[77px] md:pt-12 lg:pb-[68px] pb-12 container">
        <CustomHeading styleclass="max-w-[843px] mx-auto text-center font-kanit lg:pb-[167px] md:pb-14 sm:pb-10 pb-8" title="Everything your brands needs for " textTwo="success" styleclassTwo="" titleTwo=" with fulfillment" />
        <CustomBrandsLayout
          myImage={'/assets/images/webp/build-image.webp'}
          imageWidth={455}
          imageHeight={467}   
          title="Build your technology"
          description="From e-commerce stores integration, inventory management, order management, warehouse management, and return management - all within AllSome. Activate the modules through a single click."
          buttonText="Sign up" reverse={true}
        />
      </div>
      <div className="bg-light-green lg:rounded-[40px] rounded-[20px]">
        <div className='container lg:py-[112px] md:py-14 sm:py-10 py-8'>
          <CustomBrandsLayout
            imageWidth={435}
            imageHeight={443} 
            title="Automate your operations"
            description="Build your e-commerce operation teams with ready software, modules, workforce, and more - all within AllSome. Once sold, orders will be shipped out automatically."
            buttonText="Sign up"
            myImage={'/assets/images/webp/automate-image.webp'}
          />
        </div>
      </div>
      <div className='lg:pt-[100px] lg:pb-[34px] py-12'>
        <div className='xl:max-w-[1440px] mx-auto'>
          <div className='container mx-auto relative'>
            <CustomBrandsLayout
              colSize='xl:!w-[54%] lg:!w-[54.66%]'
              contentSize='xl:!w-[44%] lg:!w-[43%]'
              imageSize='!max-w-[682px] w-full xl:!absolute -right-20 -top-5'
              myImage={'/assets/images/webp/sales.webp'}
              imageWidth={682}
              imageHeight={468} 
              title="Maximize sales opportunity with ready inventory"
              description="Be where your shoppers are, both online and offline. Appear to the right audience at the right time, both online and offline to generate sales for you."
              buttonText="Sign up" reverse={true}
            />
          </div>
        </div>
      </div>
    </>

  );
};

export default SuccessFulfillments;
