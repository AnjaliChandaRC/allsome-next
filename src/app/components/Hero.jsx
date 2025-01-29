import React from 'react'
import Image from 'next/image'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import { WhatsAppLogo } from '../utils/icons'
import Header from './common/Header'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-cover mx-auto bg-no-repeat bg-center flex flex-col items-center justify-center relative'>
      <Header />
      <div className="relative max-w-[1440px] w-full mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-6/12 w-full lg:py-[114px] md:py-10 max-md:pt-14 max-md:pb-10 relative">
              <Image className='absolute pointer-events-none xl:-left-32 lg:left-0 sm:left-24 left-5 e-commerce-box-icon-two max-md:top-20 xl:max-w-40 lg:max-w-32 md:max-w-24 max-w-20 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-1.webp' width={213} height={230} alt='ellipse-img-1' />
              <Image className='absolute pointer-events-none lg:right-28 md:right-20 right-12 top-4 revolve xl:max-w-24 lg:max-w-20 max-w-16 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-2.webp' width={213} height={230} alt='ellipse-img-1' />
              <Image className='absolute pointer-events-none lg:right-[36%] md:right-14 right-7 bottom-6 bounce xl:max-w-24 lg:max-w-20 max-w-16 opacity-80 w-full' src='/assets/images/webp/hero-ellipse-img-3.webp' width={213} height={230} alt='ellipse-img-1' />
              <div className="relative z-20">
                <h1 className='uppercase lg:mb-2.5 mb-1.5 font-kanit max-lg:text-center max-lg:mx-auto text-black font-extrabold xl:text-custom-6xl lg:text-custom-5xl md:text-custom-4xl sm:text-custom-3xl text-4xl max-w-[579px] !leading-[100%] text-start'>SELL & SHIP EVERYWHERE</h1>
                <CustomDescription styleclass="xl:mb-[34px] lg:mb-7 md:mb-5 mb-4 max-lg:text-center max-lg:mx-auto max-w-[450px] xl:!text-xl lg:!text-lg md:!text-base !text-sm" description="Turn your inventory into sales channel. Sell more stuff everywhere" />
                <div className="flex gap-2 max-lg:justify-center">
                  <CustomButton styleclass='xl:!py-[14.5px] lg:!py-3 !py-2 xl:!px-[34.5px] !bg-black text-white hover:!bg-transparent hover:text-black' title='Sign up for free' />
                  <CustomButton styleclass='xl:!py-[14.5px] lg:!py-3 !py-2 xl:!px-[25px] hover:!bg-black before:!bg-black hover:text-white  group' styleclassTwo='!block whatsapp-icon' icon={<WhatsAppLogo />} title='Whatsapp us' />
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full lg:pt-10">
              <Image className='shadow-custom-1 pointer-events-none lg:block max-lg:hidden xl:max-w-[635px] rounded-md lg:max-w-lg lg:absolute right-0' src='/assets/images/webp/hero-location-img.webp' width={635} height={543} alt='location-img' />
              <Image className='shadow-custom-1 pointer-events-none xl:max-w-[318] lg:block max-lg:hidden rounded-[29px] lg:max-w-64 lg:absolute translate-x-8 xl:-bottom-20 -bottom-10 bounce-in-right' src='/assets/images/webp/hero-mobile-img.webp' width={318} height={430} alt='mobile-img' />
              <div className="max-lg:relative justify-center flex">
                <Image className='max-lg:block pointer-events-none lg:hidden relative w-full max-w-2xl' src='/assets/images/webp/hero-mobile-location-img.webp' width={635} height={543} alt='location-img' />
                <Image className='max-lg:block pointer-events-none lg:hidden w-full z-50 md:max-w-44 sm:max-w-32 max-w-28 absolute md:top-14 sm:top-12 top-10 md:left-0 sm:left-7 left-3' src='/assets/images/webp/mobile-screen-img-2.png' width={635} height={543} alt='mobile-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero