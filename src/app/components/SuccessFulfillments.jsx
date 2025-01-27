import React from 'react'
import CustomHeading from './common/CustomHeading'
import Image from 'next/image'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'


const SuccessFulfillments = () => {
  return (
    <div className='lg:pt-[77px] md:pt-12 py-6'>
      <div className='container'>
        <CustomHeading className="max-w-[843px] mx-auto text-center" title={'Everything your brands needs for success with fulfillment '} />
        <div className='lg:flex-row flex lg:pt-[167px] lg:gap-[145px] flex-col gap-7'>
          <div className='lg:w-[436px] w-full flex flex-col lg:items-start items-center justify-center'>
            <CustomHeading className="max-w-[398px] lg:!text-custom-5xl !leading-custom-15xl font-kanit font-semibold" title={'Build your technology'} />
            <CustomDescription className="lg:max-w-[436px] !text-black w-full !text-base !leading-6 opacity-80" description="From e-commerce stores integration, inventory management, order management, warehouse management and return management - all within AllSome. Activate the modules through a single click." />
            <CustomButton className="" title="Sign up"/>
          </div>
          <div className='flex lg:justify-start justify-center'>
            <Image
              src="/assets/images/webp/build-image.webp"
              width={455}
              height={467}
              className='object-cover max-w-[455px] h-[467px] w-full'
              alt="Picture of the author"
            />
          </div>
          </div>
      </div>
    </div>
  )
}

export default SuccessFulfillments