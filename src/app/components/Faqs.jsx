'use client'
import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import { ArrowIcon } from '../utils/icons'
import CustomHeading from './common/CustomHeading'
import Link from 'next/link'

const Faqs = () => {
  //active & not active function
  const [active, setActive] = useState(0)
  const toggle = i => {
    setActive(active === i ? null : i)
  }

  const handleParentClick = i => {
    toggle(i)
  }

  return (
    <div
      className='pb-6 pt-[93px] max-xl:pt-20 max-xl:pb-8 max-lg:py-[60px] max-md:py-[30px] overflow-hidden'
    >
      <div className='container'>
        <CustomHeading
          title='Frequently asked questions?'
          styleclass='text-center font-kanit max-w-[734px] mx-auto leading-16xl'
        />
        <div className='max-w-[754px] mx-auto flex flex-col gap-2 pt-[46px] max-lg:pt-10 max-md:pt-7'>
          {/* faq-map */}
          {FAQ_LIST.map((obj, i) => (
            <div
              key={i}
              className='rounded-2xl border-2  border-solid border-black border-opacity-70'
              onClick={() => handleParentClick(i)}
              // use aos
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              //add delay
              data-aos-delay={i * 50}
            >
              <button
                onClick={e => {
                  e.stopPropagation()
                  toggle(i)
                }}
                className={`flex sm:items-center gap-2 justify-between font-kanit font-medium text-xl text-black w-full leading-custom-9xl text-left max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:!leading-6 pt-[17px] pr-[18px] max-md:p-4 pl-5 ${
                  active === i
                    ? '!pb-[11px]'
                    : '!pb-[16px] !duration-[400ms] ease-linear transition-all'
                }`}
              >
                {obj.question}
                <span
                  className={`transition-all !duration-[400ms] ease-linear max-[510px]:pt-[10px] ${
                    active === i ? 'rotate-180' : ''
                  }`}
                >
                  <ArrowIcon />
                </span>
              </button>
              <div
                className={`text-black transition-all !duration-[400ms] ease-linear overflow-hidden pl-5 pr-[18px] max-md:px-4 ${
                  active === i ? 'pb-[20px] max-md:pb-4 max-h-40 transition-all !duration-[400ms] ease-linear' : 'max-h-0'
                }`}
              >
                <p className='text-black leading-6 max-md:text-sm max-md:leading-5 pb-[9px] max-md:pb-1 max-w-[716px]'>
                  {obj.answer}
                </p>
                <Link
                  href='/'
                  className='font-semibold leading-6 text-dark-green max-md:text-sm max-md:leading-5 hover:text-blue-400 transition-all duration-300'
                >
                  Contact us to learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
