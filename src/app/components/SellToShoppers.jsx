import React from 'react'
import Image from 'next/image'
import CustomHeading from './common/CustomHeading'
import CustomDescription from './common/CustomDescription'
import CustomButton from './common/CustomButton'

const SellToShoppers = () => {
  const SHOPPERS_CARDS_LIST = [
    {
      cardImg: '/assets/images/webp/shoppers-card-img-1.webp',
      alt: 'card-img-1',
      title: 'Grow your reach',
      description: 'List your stores and appear on the maps'
    },
    {
      cardImg: '/assets/images/webp/shoppers-card-img-2.webp',
      alt: 'card-img-2',
      title: 'Make more sales',
      description: 'Join e-commerce malls and convert shoppers into purchasers'
    },
    {
      cardImg: '/assets/images/webp/shoppers-card-img-3.webp',
      alt: 'card-img-3',
      title: 'Retain your customers',
      description: 'Risk free drop-and-returns at 3,000+ store points '
    },
    {
      cardImg: '/assets/images/webp/shoppers-card-img-4.webp',
      alt: 'card-img-4',
      title: 'Auto run operations',
      description: 'Run your e-commerce operations while you sleep'
    },
  ]
  return (
    <div className='bg-cover w-full flex flex-col items-center justify-center relative xl:pb-[110px] xl:pt-[85px] lg:pb-[70px] lg:pt-[50px] max-lg:py-12'>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="xl:w-4/12 w-full">
            <div className="lg:py-[22px] xl:max-w-[367px] lg:max-w-3xl md:max-w-2xl max-w-lg max-xl:mx-auto md:py-4 py-3 lg:px-5 md:px-4 px-3 green-gradient rounded-2xl xl:min-h-[365px]">
              <CustomHeading styleclass='xl:!text-[40px] lg:!leading-[112%] max-w-[307px] lg:text-3xl md:!text-2xl !text-xl !font-semibold lg:mb-4 md:mb-3 mb-2' title='Sell to shoppers wherever they are' />
              <CustomDescription styleclass='lg:mb-6 md:mb-5 mb-4' description='AllSome helps you to build your e-commerce operations across all sales channels.' />
              <CustomButton styleclass='hover:!bg-transparent xl:!px-8 xl:!py-[12.5px] !bg-black hover:!text-black !text-white' title='Sign up today' />
            </div>
          </div>
          <div className="xl:w-8/12 w-full xl:pt-0 pt-10 pl-5 mx-auto max-xl:justify-center flex items-center">
            <div className="flex xl:gap-x-[94px] lg:gap-x-36 md:gap-x-10 max-xl:justify-center items-center lg:gap-y-[68px] md:gap-y-14 sm:gap-y-12 gap-y-10 flex-wrap">
              {SHOPPERS_CARDS_LIST.map((item, index) => (
                <div className="max-w-[323px] w-full gap-4 flex" key={index}>
                  <div >
                    <Image className='min-w-[60px] max-w-[60px]' src={item.cardImg} width={60} height={60} alt={item.title} />
                  </div>
                  <div>
                    <h4 className='font-medium lg:text-lg md:text-base text-sm mb-1 leading-[150%] text-black'>{item.title}</h4>
                    <p className={`${index === 0 ? "pr-6" : ""} ${index === 1 ? "xl:min-w-[260px]" : ""}  ${index === 3 ? "xl:min-w-[260px]" : ""} text-black w-full opacity-80 lg:text-base md:text-sm text-xs`}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellToShoppers