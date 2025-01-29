import React from 'react'
import CustomHeading from './common/CustomHeading'
import CustomButton from './common/CustomButton';
import Image from 'next/image';

const TeamsAtService = () => {
  return (
    <div
      id="awesome"
      className="bg-e-commerce bg-cover max-lg:my-[30px] bg-no-repeat bg-center rounded-[40px] max-w-[1920px] mx-auto max-lg:rounded-[20px] relative overflow-hidden h-[606px] max-xl:h-full"
    >
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
      <div className="max-xl:p-24 max-lg:p-10 max-lg:rounded-[20px]">
        <div className="pt-[88px] max-xl:pt-0 relative z-20">
          <CustomHeading
            title="“Your e-commerce tech operation teams at service”"
            styleclass="!text-white text-center max-w-[761px] mx-auto"
          />
          <p className="text-center pt-[19px] text-white max-w-[445px] mx-auto text-base leading-6 opacity-80">
            Fulfillment is perfect for brands looking to get more traffic, build
            real connection with customers and grow revenue.
          </p>
          <div className="flex items-center justify-center gap-[21px] mt-[38px]">
            <CustomButton
              styleclass="!text-white py-[14px] h-[52px] flex items-center justify-center rounded-full min-w-[172px] max-sm:min-w-[140px] bg-gradient-to-bl to-lemon via-dark-green from-green hover:!bg-white hover:!text-black"
              title="Sign up today"
            />
            <CustomButton
              styleclass="text-white border border-solid border-white !min-w-[172px] !h-[52px] flex items-center justify-center max-sm:!min-w-[140px]"
              title="Request a demo"
            />
          </div>
        </div>
        <Image
          src="/assets/images/webp/mobile-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-one icon-animation-lg pointer-events-none object-cover h-auto w-auto absolute right-[76px] top-[91px] max-xl:w-16 max-md:right-0 max-lg:right-10"
          alt="mobile"
        />
        <Image
          src="/assets/images/webp/shopping-trolley-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-two icon-animation-lg pointer-events-none object-cover h-auto w-auto max-md:hidden absolute right-[166px] top-[235px] max-xl:w-16 max-md:right-0 max-lg:right-14"
          alt="shope-trolly"
        />
        <Image
          src="/assets/images/webp/male-mac-user-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-three icon-animation-lg pointer-events-none object-cover h-auto w-auto absolute right-[147px] bottom-[94px] max-lg:bottom-16  max-xl:w-16 max-md:right-0 max-lg:right-14"
          alt="user"
        />
        <Image
          src="/assets/images/webp/female-mac-user-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-four icon-animation-lg pointer-events-none object-cover h-auto w-auto absolute left-[105px] top-[91px] max-xl:w-16 max-md:left-0 max-lg:left-14"
          alt="user"
        />
        <Image
          src="/assets/images/webp/shopping-bag-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-five icon-animation-lg pointer-events-none object-cover h-auto w-auto absolute left-[199px] top-[258px] max-xl:w-16 max-md:top-56 max-lg:left-20 max-md:left-0"
          alt="shope-bag"
        />
        <Image
          src="/assets/images/webp/handshake-img.webp"
          width={75}
          height={95}
          className="e-commerce-box-icon-six icon-animation-lg pointer-events-none object-cover h-auto w-auto absolute left-[94px] bottom-[124px] max-xl:w-16 max-lg:bottom-16  max-lg:left-0 max-md:hidden"
          alt="handshake"
        />
      </div>
    </div>
  );
}

export default TeamsAtService