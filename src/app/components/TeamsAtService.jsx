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
        className="absolute left-0 top-0 object-cover shadow-one h-auto w-auto"
        alt="shadow"
      />
      <Image
        src="/assets/images/webp/light-yellow-shadow-e-commerce.webp"
        width={563}
        height={347}
        className="absolute right-0 bottom-0 object-cover shadow-Two h-auto w-auto"
        alt="shadow"
      />
      <div className="pt-[88px] max-xl:pt-0 relative z-20">
        <CustomHeading
          title="“Your e-commerce tech operation teams at service”"
          styleclass="!text-white text-center max-w-[761px] mx-auto"
        />
        <p className="text-center pt-[19px] text-white max-w-[445px] mx-auto text-base leading-6">
          Fulfillment is perfect for brands looking to get more traffic, build
          real connection with customers and grow revenue.
        </p>
        <div className="flex items-center justify-center gap-[21px] mt-[38px]">
          <CustomButton
            styleclass="!text-white py-[14px h-[52px] flex items-center justify-center border border-solid border-white rounded-full min-w-[172px] hover:bg-gradient-to-bl to-lemon via-dark-green from-green !transition-all !ease-linear !duration-300"
            title="Sign up today"
          />
          <CustomButton
            styleclass="!text-white py-[14px] border h-[52px] flex items-center justify-center border-solid border-white rounded-full min-w-[171px] hover:bg-gradient-to-bl to-lemon via-dark-green from-green !transition-all !ease-linear !duration-300"
            title="Request a demo"
          />
        </div>
      </div>
      <Image
        src="/assets/images/webp/mobile-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute right-[76px] top-[91px] max-xl:w-16 max-md:right-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/shopeing-trole-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute right-[166px] top-[235px] max-xl:w-16 max-md:right-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/male-mac-user-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute right-[147px] bottom-[94px] max-lg:bottom-16  max-xl:w-16 max-md:right-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/female-mac-user-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute left-[105px] top-[91px] max-xl:w-16 max-md:left-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/shopeing-bag-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute left-[199px] top-[258px] max-xl:w-16 max-md:left-0"
        alt="mobile"
      />
      <Image
        src="/assets/images/webp/handshake-img.webp"
        width={75}
        height={95}
        className="e-commerce-icons object-cover h-auto w-auto absolute left-[94px] bottom-[124px] max-xl:w-16 max-lg:bottom-16  max-lg:left-0"
        alt="mobile"
      />
    </div>
  );
}

export default TeamsAtService