import React from 'react'
import Image from 'next/image'
import Link from "next/link";

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
  ];

  return (
    <div className="bg-black rounded-t-[40px]">
      <div className='container'>
        <div className="flex max-md:flex-col justify-between pt-16">
          <div className="w-full lg:w-5/12">
            <a href="/"><Image src="/assets/images/webp/footer-logo.webp" width={173} height={32} alt="logo" /></a>
            <p className='text-white/70 pt-5'>AllSome is where the logistics works</p>
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