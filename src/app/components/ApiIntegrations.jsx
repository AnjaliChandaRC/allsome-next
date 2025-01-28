import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const ApiIntegrations = () => {
  return (
    <div className='lg:pt-[100px] lg:pb-[34px] py-12'>
      <div className='xl:max-w-[1440px] mx-auto'>
        <div className='container mx-auto relative'>
          <div className='xl:flex-row flex flex-col gap-7'>
            <div className='xl:max-w-[560px] w-full flex flex-col xl:items-start items-center justify-center xl:pt-10'>
              <CustomHeading styleclass="xl:!text-custom-5xl leading-[100%] lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold max-xl:text-center max-w-[501px]"
                title={'API & '} textTwo={'Integrations'} styleclassTwo='' />
              <CustomDescription styleclass="xl:max-w-[438px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-xl:text-center md:py-8 py-6"
                description="Connect AllSome to your e-commerce stores, delivery partners, service providers and more." />
              <CustomButton styleclass="!py-[10px] !px-[22px] !bg-black !text-white max-xl:mx-auto" title="Sign up" />
            </div>
            <div className='max-w-[773px] w-full xl:absolute -right-12 max-xl:flex justify-center'>
              <div className="shadow-custom-2 flex justify-between relative">
                  <Image
                  src="/assets/images/webp/ninjavan.webp"
                    width={231}
                    height={81}
                    className='object-cover max-w-[231px] lg:h-[81px] w-full shadow-custom-2 xl:absolute right-[427px] shopify'
                  alt="ninja"
                />
                <Image
                  src="/assets/images/webp/shopify.webp"
                  width={231}
                  height={81}
                  className='object-cover drop-drop-shadow-custom-2 max-w-[231px] lg:h-[81px] w-full xl:absolute right-0 ninja'
                  alt="shopify"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApiIntegrations