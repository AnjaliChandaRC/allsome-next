import React from 'react'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-cover py-10 w-full bg-no-repeat bg-center flex items-center justify-center'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-6/12">
            <h1 className='uppercase lg:mb-2.5 mb-1.5 text-black font-extrabold xl:text-custom-6xl lg:text-custom-5xl md:text-custom-4xl sm:text-custom-3xl text-custom-2xl max-w-[579px] !leading-[100%] text-start'>SELL & SHIP EVERYWHERE</h1>
            <CustomDescription classStyle="xl:mb-[34px] lg:mb-7 md:mb-5 mb-4 max-w-[450px]" description="Turn your inventory into sales channel. Sell more stuff everywhere" />
           <div className="flex gap-2">
            <CustomButton title='Sign up for free'/>
            {/* <CustomButton style="!block" icon={} title='Whatsapp us'/> */}
           </div>
          </div>
          <div className="w-6/12"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero