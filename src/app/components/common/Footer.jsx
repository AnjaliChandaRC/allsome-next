import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { FacebookIcon, GmailIcon, InstagramIcon, LinkedlnIcon } from '@/app/utils/icons';

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
    { icon: <LinkedlnIcon />, link: "https://www.linkedin.com/" }
  ];

  return (
    <div className="bg-black rounded-t-[40px]">
      <div className='container'>
        <div className="flex max-md:flex-col justify-between pt-16">
          <div className="w-full lg:w-5/12">
            <a href="/"><Image src="/assets/images/webp/footer-logo.webp" width={173} height={32} alt="logo" /></a>
            <p className='text-white/70 pt-5'>AllSome is where the logistics works</p>
            <p className='text-white/70 pt-[38px] pb-4'>Social Media:</p>
            {FOOTER_ICONS.map((obj, i) => (
              <a key={i} target='blank' href={obj.link} className='hover:scale-110 transition-all duration-300 ease-linear'>{obj.icon}</a>
            ))}
            <div className="flex items-center justify-center gap-5">
            </div>
          </div>
          <div className="flex text-white w-full lg:w-5/12 justify-between pt-10">
            {FOOTER_LIST.map((obj, index) => (
              <div key={index}>
                <p className='text-white/50 text-[13px] pb-2.5'>{obj.title}</p>
                <ul className="space-y-2">
                  {obj.links.map((items, i) => (
                    <li key={i} className="hover:text-gray-400">
                      <Link href="/">{items.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-9 border-t border-white/10"></div>
      <div className="container flex justify-between items-center pt-[22px] pb-[33px]">
        <p className='text-white/50 text-[13px] '> (c) 2022 ALLSOME. All Right Reserved.</p>
        <div className="flex items-center gap-[26px] text-white">
          <a href="/">Sign up</a>
          <a href="/">Log in</a>
        </div>
      </div>
    </div>
  )
}

export default Footer