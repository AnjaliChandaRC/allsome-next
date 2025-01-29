import React from 'react'
import CustomBrandsLayout from './common/CustomBrandsLayout'
import CustomHeading from './common/CustomHeading';

const SuccessFulfillments = () => {
  return (
    <>
      <div className="lg:pt-[77px] md:pt-12 lg:pb-[68px] pb-12 container">
        <CustomHeading styleclass="max-w-[843px] mx-auto text-center font-kanit lg:pb-[167px] md:pb-14 sm:pb-10 pb-8" title="Everything your brands needs for" textTwo="success" styleclassTwo="" titleTwo="with fulfillment" />
      <CustomBrandsLayout
        myImage={'/assets/images/webp/build-image.webp'}
        title="Build your technology"
        description="From e-commerce stores integration, inventory management, order management, warehouse management, and return management - all within AllSome. Activate the modules through a single click."
        buttonText="Sign up" reverse={true}
      />
    </div>
      <div className="bg-light-green lg:rounded-[40px] rounded-[20px]">
        <div className='container max-w-[1109px] mx-auto lg:py-[112px] md:py-14 sm:py-10 py-8'>
            <CustomBrandsLayout
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
                myImage={'/assets/images/webp/sales.webp'}
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
