'use client'
import React, { useState } from 'react'
import { ArrowIcon } from '../utils/icons'
import CustomHeading from './common/CustomHeading'

const Faqs = () => {
  const FAQ_LIST = [
    {
      title: 'How can my shoppers try my products at outlets?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: "I'm selling in Shopee, what is the total fee to ship an order?",
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'I sell in multiple e-commerce platform, can I still use AllSome?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'How can I pass AllSome the order details & instructions?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'Can AllSome supports return & exchange?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'Can I use AllSome to collect Cash On Delivery (COD)?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'How storage fee is calculated?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    },
    {
      title: 'What if I stored more than 30 meter cubes per month?',
      description:
        'Share your outlet links to your shoppers, shoppers can book the experience and walk in to try as wanted!',
      secondDescription: 'Contact us to learn more'
    }
  ]
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }

  const handleParentClick = (i) => {
    toggle(i)
  }

  return (
    <div className='pt-[93px] pb-[137px] max-lg:py-20 max-md:py-[60px]'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <CustomHeading
          title='Frequently asked questions?'
          styleclass='text-center font-kanit max-w-[734px] mx-auto leading-16xl'
        />
        <div className='max-w-[754px] mx-auto flex flex-col gap-2 pt-[46px] max-lg:pt-10 max-md:pt-7'>
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className='rounded-2xl border-2  border-solid border-black border-opacity-70'
              onClick={() => handleParentClick(i)}
            >
              <button
                onClick={e => {
                  e.stopPropagation()
                  toggle(i)
                }}
                className={`flex items-center justify-between font-kanit font-medium text-xl text-black w-full leading-custom-9xl text-left max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6 pt-[17px] pr-[18px] pl-5 !pb-[15px] max-sm:p-4 max-sm:!pb-4 ${active === i
                  ? '!pb-[11px] max-sm:!pb-[11px]'
                  : 'pb-0 transition-all duration-300'
                  }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${active === i ? 'rotate-180' : ''
                    }`}
                >
                  <ArrowIcon />
                </span>
              </button>
              <div
                className={`text-black transition-all duration-300 overflow-hidden pl-5 pr-[18px] max-sm:px-4 ${active === i ? 'pb-[20px] max-sm:pb-4 max-h-40' : 'max-h-0'
                  }`}
              >
                <p className='text-black leading-6 !max-md:text-sm max-md:leading-6 max-sm:text-sm pb-[9px] max-md:pb-1 max-w-[716px]'>
                  {obj.description}
                </p>
                <a href='/' className='font-semibold leading-6 text-dark-green max-md:text-sm max-md:leading-6 max-sm:text-sm hover:text-blue-400 transition-all duration-300'>
                  {obj.secondDescription}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
