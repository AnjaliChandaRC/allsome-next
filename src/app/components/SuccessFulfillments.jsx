import React from 'react'
import CustomBrandsLayout from './common/CustomBrandsLayout'
import CustomHeading from './common/CustomHeading';

const SuccessFulfillments = () => {
  return (
    <>
      <div className="llg:pt-[77px] md:pt-[30px] lg:pb-[68px] pb-[60px] max-sm:pt-[22px] container">
        <CustomHeading styleclass="max-w-[843px] mx-auto text-center font-kanit xl:pb-[167px] md:pb-20 sm:pb-10 pb-8" title="Everything your brands needs for " textTwo="success" styleclassTwo="" titleTwo=" with fulfillment" />
        <CustomBrandsLayout
          myImage={'/assets/images/webp/build-image.webp'}
          contentSize='xl:!w-[38%] lg:!w-[43%]'
          imageWidth={455}
          imageHeight={467} 
          colSize='lg:!w-[48.66%]'
          title="Build your technology"
          description="From e-commerce stores integration, inventory management, order management, warehouse management, and return management - all within AllSome. Activate the modules through a single click."
          buttonText="Sign up" reverse={true}
        />
      </div>
      <div className="bg-light-green lg:rounded-[40px] rounded-[20px] lg:py-[112px] py-10 md:py-[60px]">
        <div className='container'>
          <CustomBrandsLayout
            imageWidth={435}
            imageHeight={443} 
            contentSize='lg:!w-[41%]'
            title="Automate your operations"
            description="Build your e-commerce operation teams with ready software, modules, workforce, and more - all within AllSome. Once sold, orders will be shipped out automatically."
            buttonText="Sign up"
            myImage={'/assets/images/webp/automate-image.webp'}
          />
        </div>
      </div>
      <div className='lg:pt-[79px] xl:pb-[125px] py-[60px]'>
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
