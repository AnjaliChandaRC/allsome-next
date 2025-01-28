"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import CustomDescription from "./CustomDescription";

const Header = () => {
  const HEADER_LIST = [
    {
      title: "About",
      link: "#home",
    },
    {
      title: "Features",
      link: "#feature",
    },
    {
      title: "Pricing",
      link: "#price",
    },
    {
      title: "AwesomeLah Clearance",
      link: "#awesome",
    },
  ];

  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-between flex-col w-full">
      <div className="w-full bg-black">
        <div className={`container flex justify-between max-md:flex-col w-full mx-auto py-[9px] items-center max-xl:px-6`}>
          <CustomDescription styleclass="lg:!text-xs !text-center max-lg:!font-normal !text-[10px] lg:!leading-custom-2xl !text-white" description='AllSome is your e-commerce operation team to auto-send your sold orders.' />
          <select className="bg-transparent outline-none text-xs px-2 bg-black text-white flex justify-center items-center appearance" name="Eng" id="">
            <option className="bg-black text-white px-3" value="">Eng</option>
            <option className="bg-black text-white px-3" value="">Hindi</option>
          </select>
        </div>
      </div>
      <div className="container flex justify-between w-full mx-auto lg:pt-[13px] pt-4 items-center max-xl:px-6">
        <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-5 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black ${open ? "hidden" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-black after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
        </button>

        <Link href="/">
          <Image className="lg:!max-w-[140px] md:max-w-32 max-w-28 xl:min-w-[140px] lg:min-w-28 w-full" src="/assets/images/webp/header-logo.webp" width={140} height={25} alt="logo" />
        </Link>

        <div className={`flex xl:gap-[39px] items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <a onClick={handleOpen} key={index} href={item.link} className="lg:text-sm text-xs font-medium hover:text-blue text-black transition-all duration-300 ease-linear hover:text-white">{item.title}</a>
          ))}
          <div className="lg:hidden max-lg:block">
            <div className="flex gap-2.5">
              <CustomButton styleclass='lg:!py-[8.5px] !py-1.5' title='Log in' />
              <CustomButton styleclass='lg:!py-[8.5px] !py-1.5' title='Start free' />
            </div>
          </div>
        </div>

        <div className="lg:block max-lg:hidden  ">
          <div className="flex gap-2.5 w-full">
            <CustomButton styleclass='lg:!py-[8.5px] !py-1.5' title='Log in' />
            <CustomButton styleclass='lg:!py-[8.5px] !py-1.5' title='Start free' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
