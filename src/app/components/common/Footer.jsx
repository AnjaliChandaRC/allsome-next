import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FacebookIcon, GmailIcon, InstagramIcon, LinkedinIcon } from '@/app/utils/icons';

const Footer = () => {
  const FOOTER_LIST = [
    {
      title: "ALLSOME",
      links: [
        { name: "Contact us", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Become Partner", href: "#" }
      ]
    },
    {
      title: "PRODUCT",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Tutorial", href: "#" }
      ]
    },
    {
      title: "REGION",
      links: [
        { name: "China", href: "#" },
        { name: "Hong Kong", href: "#" },
        { name: "Malaysia", href: "#" },
        { name: "Australia", href: "#" },
        { name: "United States", href: "#" }
      ]
    }
  ]
  const FOOTER_ICONS = [
    { icon: <FacebookIcon />, link: "https://www.facebook.com/" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/" },
    { icon: <GmailIcon />, link: "https://mail.google.com/" },
    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/" }
  ];

  return (
    <div className="bg-black rounded-t-[40px]">
      <div className='container'>
        <div className="flex max-md:flex-col justify-between pt-16">
          <div className="w-full md:w-4/12 lg:w-5/12">
            <a href="/"><Image src="/assets/images/webp/footer-logo.webp" width={173} height={32} alt="logo" /></a>
            <p className='text-white/70 pt-5'>AllSome is where the logistics works</p>
            <p className='text-white/70 pt-[38px] pb-4'>Social Media:</p>
            <div className="flex gap-2.5">
              {FOOTER_ICONS.map((obj, i) => (
                <a key={i} target='blank' href={obj.link} className='p-[7.23px] bg-gradient-to-bl to-lemon via-dark-green from-green rounded-full hover:scale-110 transition-all duration-300 ease-linear relative box-shadow'>{obj.icon} </a>
              ))}
            </div>
            <div className="flex items-center justify-center gap-5">
            </div>
          </div>
          <div className="flex text-white w-full md:w-7/12 lg:w-5/12 min-[]: justify-between pt-10 max-sm:gap-x-12 gap-y-8 max-sm:flex-wrap">
            {FOOTER_LIST.map((obj, index) => (
              <div key={index}>
                <p className='text-white/50 text-[13px] pb-2.5'>{obj.title}</p>
                <ul className="space-y-2">
                  {obj.links.map((items, i) => (
                    <li key={i} >
                      <Link href="/" className="hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-alld">{items.name} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-9 border-t border-white/10"></div>
      <div className="container flex justify-between items-center pt-[22px] pb-[33px] max-[480px]:flex-col-reverse gap-y-5">
        <p className='text-white/50 text-[13px] '> (c) 2022 ALLSOME. All Right Reserved.</p>
        <div className="flex items-center gap-[26px] text-white">
          <a href="/" className='hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-alld'>Sign up</a>
          <a href="/" className='hover:bg-gradient-to-r to-lemon via-dark-green from-green bg-clip-text hover:text-transparent text-white duration-300 ease-linear transition-alld'>Log in</a>
        </div>
      </div>
    </div>
  )
}

export default Footer