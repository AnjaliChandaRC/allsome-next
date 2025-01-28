import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SellToShoppers = () => {
  const SHOPPERS_CARDS_LIST = [
    {
      cardImg: '/assets/images/webp/header-logo.webp',
      alt: 'card-img-1',
      title: 'Grow your reach',
      description: 'List your stores and appear on the maps'
    },
    {
      cardImg: '/assets/images/webp/header-logo.webp',
      alt: 'card-img-2',
      title: 'Make more sales',
      description: 'Join e-commerce malls and convert shoppers into purchasers'
    },
    {
      cardImg: '/assets/images/webp/header-logo.webp',
      alt: 'card-img-3',
      title: 'Retain your customers',
      description: 'Risk free drop-and-returns at 3,000+ store points '
    },
    {
      cardImg: '/assets/images/webp/header-logo.webp',
      alt: 'card-img-4',
      title: 'Auto run operations',
      description: 'Run your e-commerce operations while you sleep'
    },
  ]
  return (
    <div className='bg-cover w-full flex flex-col items-center justify-center relative xl:pb-[110px] xl:pt-[85px] lg:pb-[70px] lg:pt-[50px] max-lg:py-12'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-4/12 w-full">
            <div className="lg:py-[22px] md:py-4 py-3 lg:px-5 md:px-4 px-3 green-gradient rounded-2xl lg:min-h-[365px]">
              <CustomHeading styleclass='xl:!text-[40px] lg:!leading-[112%] max-w-[307px] lg:text-3xl md:!text-2xl !text-xl !font-semibold lg:mb-4 md:mb-3 mb-2' title='Sell to shoppers wherever they are' />
              <CustomDescription styleclass='lg:mb-6 md:mb-5 mb-4' description='AllSome helps you to build your e-commerce operations across all sales channels.' />
              <CustomButton styleclass='hover:!bg-transparent !bg-black hover:!text-black !text-white' title='Sign up today' />
            </div>
          </div>
          <div className="lg:w-8/12 w-full">
            <div className="flex gap-10">
              {
                SHOPPERS_CARDS_LIST.map((item, index) => (
                  <div className="max-w-[303px] flex" key={index}>
                    <div>
                      <Image src={item.cardImg} width={100} height={100} alt={item.title} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellToShoppers