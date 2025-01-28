import React from 'react'
import CustomBrandsLayout from './common/CustomBrandsLayout'

const SuccessFulfillments = () => {
  return (
    <>    <div className="lg:pt-[77px] md:pt-12 lg:pb-[34px] sm:pb-7 py-6 container">
      <CustomBrandsLayout
        myImage={'/assets/images/webp/build-image.webp'}
        title="Build your technology"
        description="From e-commerce stores integration, inventory management, order management, warehouse management, and return management - all within AllSome. Activate the modules through a single click."
        buttonText="Sign up"
      />
    </div>
      <div className="lg:pt-[77px] md:pt-12 lg:pb-[34px] sm:pb-7 py-6 bg-light-green rounded-[40px]">
        <div className='container'>
          <CustomBrandsLayout
            title="Automate your operations"
            description="From e-commerce stores integration, inventory management, order management, warehouse management, and return management - all within AllSome. Activate the modules through a single click."
            buttonText="Sign up"
            myImage={'/assets/images/webp/automate-image.webp'}
          />
        </div>
      </div>
    </>

  );
};

export default SuccessFulfillments;
