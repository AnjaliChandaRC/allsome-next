import React from 'react'
import Image from 'next/image'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'
import { WhatsAppLogo } from '../utils/icons'
import Header from './common/Header'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-cover w-full bg-no-repeat bg-center flex flex-col items-center justify-center relative'>
      <Header />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12 w-full py-[126px]">
            <h1 className='uppercase lg:mb-2.5 mb-1.5 text-black font-extrabold xl:text-custom-6xl lg:text-custom-5xl md:text-custom-4xl sm:text-custom-3xl text-custom-2xl max-w-[579px] !leading-[100%] text-start'>SELL & SHIP EVERYWHERE</h1>
            <CustomDescription styleclass="xl:mb-[34px] lg:mb-7 md:mb-5 mb-4 max-w-[450px] lg:!text-lg !text-base" description="Turn your inventory into sales channel. Sell more stuff everywhere" />
            <div className="flex gap-2">
              <CustomButton styleclass='xl:!py-[14.5px] lg:!py-3 !py-2 xl:!px-[34.5px]' title='Sign up for free' />
              <CustomButton styleclass='xl:!py-[14.5px] lg:!py-3 !py-2 xl:!px-[25px] group' styleclassTwo='!block icon' icon={<WhatsAppLogo />} title='Whatsapp us' />
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <Image className='shadow-custom-1 xl:absolute right-0 pt-10' src='/assets/images/webp/hero-location-img.webp' width={635} height={543} alt='location-img' />
            <Image className='shadow-custom-1 xl:absolute translate-x-8 -bottom-20' src='/assets/images/webp/hero-mobile-img.webp' width={318} height={430} alt='mobile-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero