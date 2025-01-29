import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const ApiIntegrations = () => {
  return (
    <div className='lg:pt-[100px] xl:pb-[224px] md:pb-[455px] sm:pb-[365px] pb-[200px] py-12 overflow-hidden'>
      <div className='xl:max-w-[1440px] mx-auto'>
        <div className='container mx-auto relative'>
          <div className='xl:flex-row flex flex-col gap-7'>
            <div className='xl:max-w-[560px] w-full flex flex-col xl:items-start items-center justify-center xl:pt-10'>
              <CustomHeading styleclass="xl:!text-custom-5xl leading-[100%] lg:text-5xl md:text-4xl text-2xl font-kanit font-semibold max-xl:text-center max-w-[501px]"
                title={'API & '} textTwo={'Integrations'} styleclassTwo='' />
              <CustomDescription styleclass="xl:max-w-[438px] !text-black w-full sm:!text-base sm:!leading-6 text-sm opacity-80 font-normal max-xl:text-center md:py-8 py-6"
                description="Connect AllSome to your e-commerce stores, delivery partners, service providers and more." />
              <CustomButton styleclass="!py-[10px] !px-[22px] !bg-black text-white !max-w-[223px] !w-full max-xl:mx-auto" title="View integration guide" />
            </div>
            <div className='max-w-[773px] w-full xl:absolute -right-12 max-xl:mx-auto max-xl:grid'>
              <div className="shadow-custom-2 relative">
                  <Image
                  src="/assets/images/webp/ninjavan.webp"
                    width={231}
                    height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:right-[390px] sm:right-[356px] right-[220px] shopify-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="ninja"
                />
                <Image
                  src="/assets/images/webp/shopify.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:-right-0 right-9 ninja-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="shopify"
                />
                <Image
                  src="/assets/images/webp/grab.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[70px] sm:top-14 top-8 md:left-[188px] sm:left-[120px] left-24 ninja-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="grab"
                />
                <Image
                  src="/assets/images/webp/woo-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[70px] sm:top-12 top-7 shopify-logo md:right-[139px] sm:right-28 right-20 rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="woo"
                />
                <Image
                  src="/assets/images/webp/aramex-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[130px] sm:top-28 top-16 md:left-[228px] sm:left-[190px] left-28 shopify-logo rounded-[27px] shadow-[0px_15px_34px_-6px_#0000001A]'
                  alt="aramex"
                />
                <Image
                  src="/assets/images/webp/integration-shopline-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[160px] sm:top-28 top-16 md:right-[119px] sm:right-24 right-16 shopify-logo rounded-[27px]'
                  alt="shopline"
                />
                <Image
                  src="/assets/images/webp/integration-shopee.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[180px] sm:top-36 top-24 sm:left-[62px] left-10 shopify-logo rounded-[27px]'
                  alt="shopee"
                />
                <Image
                  src="/assets/images/webp/integration-lazada-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[237px] sm:top-48 top-[128px] md:left-[155px] sm:left-32 left-24 ninja-logo rounded-[27px]'
                  alt="lazada"
                />
                <Image
                  src="/assets/images/webp/lalamove-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[229px] sm:top-44 top-24 right-[169px] shopify-logo rounded-[27px]'
                  alt="lalamove"
                />
                <Image
                  src="/assets/images/webp/integration-tiktok-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[202px] sm:top-36 top-[90px] right-3 ninja-logo rounded-[27px]'
                  alt="tiktok"
                />
                <Image
                  src="/assets/images/webp/dhl-logo.webp"
                  width={231}
                  height={84}
                  className='object-cover md:max-w-[231px] sm:max-w-[190px] max-w-[120px] lg:h-[84px] w-full absolute md:top-[307px] sm:top-[215px] top-[128px] sm:right-[72px] right-14 ninja-logo rounded-[27px]'
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