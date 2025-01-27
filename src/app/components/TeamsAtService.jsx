import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton';
import Image from 'next/image';

const TeamsAtService = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center h-[606px] max-xl:h-full max-xl:p-24 max-lg:p-20 max-md:p-16 max-sm:p-12 rounded-[40px] bg-e-commerce relative overflow-hidden">
      <Image
        src="/assets/images/webp/light-green-shadow-e-commerce.webp"
        width={656}
        height={596}
        className="absolute left-0 top-0 object-cover shadow-one"
        alt="shadow"
      />
      <Image
        src="/assets/images/webp/light-yellow-shadow-e-commerce.webp"
        width={563}
        height={347}
        className="absolute right-0 bottom-0 object-cover shadow-Two"
        alt="shadow"
      />
      <div className="pt-[88px] max-xl:pt-0 relative z-20">
        <CustomHeading
          title="“Your e-commerce tech operation teams at service”"
          classstyle="!text-white text-center max-w-[761px] mx-auto"
        />
        <p className="text-center pt-[19px] text-white max-w-[445px] mx-auto text-base leading-6">
          Fulfillment is perfect for brands looking to get more traffic, build
          real connection with customers and grow revenue.
        </p>
        <div className="flex items-center justify-center gap-[21px] mt-[38px]">
          <CustomButton
            classstyle="!text-white py-[14px h-[52px] flex items-center justify-center border border-solid border-white rounded-full min-w-[172px] e-commerce-btn"
            title="Sign up today"
          />
          <CustomButton
            classstyle="!text-white py-[14px] border h-[52px] flex items-center justify-center border-solid border-white rounded-full min-w-[171px] e-commerce-btn"
            title="Request a demo"
          />
        </div>
      </div>
      <Image
        src="/assets/images/webp/e-commerce-mobile-img.webp"
        width={184}
        height={414}
        className="object-cover e-commerce-icons absolute right-[76px] top-[91px] max-lg:w-24 max-md:right-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/e-commerce-shopping.webp"
        width={192}
        height={325}
        className="object-cover e-commerce-icons max-lg:w-24 absolute left-[105px] top-[101px] max-md:left-0"
        alt="shopping"
      />
    </div>
  );
}

export default TeamsAtService