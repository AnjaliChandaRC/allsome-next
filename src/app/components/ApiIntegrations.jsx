import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const ApiIntegrations = () => {
  return (
    <div className='lg:pt-[100px] xl:pb-[224px] pb-[455px] py-12 overflow-hidden'>
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
            <div className='max-w-[773px] w-full xl:absolute -right-12 max-xl:mx-auto max-xl:grid'>
              <div className="shadow-custom-2 relative">
                  <Image
                  src="/assets/images/webp/ninjavan.webp"
                    width={231}
                    height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute right-[390px] shopify-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="ninja"
                />
                <Image
                  src="/assets/images/webp/shopify.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute -right-0 ninja-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="shopify"
                />
                <Image
                  src="/assets/images/webp/grab.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[70px] left-[188px] ninja-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="grab"
                />
                <Image
                  src="/assets/images/webp/woo-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[70px] shopify-logo right-[139px] rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="woo"
                />
                <Image
                  src="/assets/images/webp/aramex-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[130px] left-[228px] shopify-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="aramex"
                />
                <Image
                  src="/assets/images/webp/integration-shopline-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[160px] right-[119px] shopify-logo rounded-[27px]'
                  alt="shopline"
                />
                <Image
                  src="/assets/images/webp/integration-shopee.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[180px] left-[62px] shopify-logo rounded-[27px]'
                  alt="shopee"
                />
                <Image
                  src="/assets/images/webp/integration-lazada-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[237px] left-[155px] shopify-logo rounded-[27px]'
                  alt="lazada"
                />
                <Image
                  src="/assets/images/webp/lalamove-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[229px] right-[149px] shopify-logo rounded-[27px]'
                  alt="lalamove"
                />
                <Image
                  src="/assets/images/webp/integration-tiktok-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[202px] right-3 ninja-logo rounded-[27px]'
                  alt="tiktok"
                />
                <Image
                  src="/assets/images/webp/dhl-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover max-w-[231px] lg:h-[84px] w-full absolute top-[307px] right-[72px] ninja-logo rounded-[27px]'
                  alt="dhl"
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