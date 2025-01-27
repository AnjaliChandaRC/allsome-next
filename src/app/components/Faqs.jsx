'use client'
import React, { useState } from 'react'
import { ArrowIcon } from '../utils/icons'

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

  return (
    <div className='pt-[210px] max-lg:pb-[60px] max-lg:pt-[100px]' id='faq'>
      <div className='max-w-[1174px] mx-auto px-4 mb-[-1px]'>
        <div className='max-w-[754px] mx-auto flex flex-col gap-2'>
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className='rounded-2xl border-2 border-solid border-black border-opacity-70 pt-[17px] pr-[18px] pb-[15px] pl-5 max-md:p-4 max-sm:p-3'
            >
              <button
                onClick={() => toggle(i)}
                className={`flex items-center justify-between font-medium text-xl text-black w-full leading-custom-9xl text-left max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6 ${
                  active === i ? 'pb-[11px]' : ''
                }`}
              >
                {obj.title}
                <span
                  className={`transition-all duration-300 ${
                    active === i ? 'rotate-180' : ''
                  }`}
                >
                  <ArrowIcon />
                </span>
              </button>
              <div
                className={`max-w-[716px] text-black transition-all duration-300 overflow-hidden max-sm:overflow-y-auto ${
                  active === i ? 'pb-[5px] max-h-40' : 'max-h-0'
                }`}
              >
                <p className='text-black leading-6 !max-md:text-sm max-md:leading-6 max-sm:text-sm'>{obj.description}</p>
                <p className='font-semibold leading-6 text-dark-green !pt-[9px] max-md:!pt-1 max-md:text-sm max-md:leading-6 max-sm:text-sm'>
                  {obj.secondDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
