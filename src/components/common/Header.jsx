"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import CustomDescription from "./CustomDescription";
import { HEADER_LIST } from "../../utils/helper";

const Header = () => {
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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Eng'); 
  const dropdownRef = useRef(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); 
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="flex justify-between flex-col w-full">
      <div className="w-full bg-black">
        <div className="container flex justify-between w-full mx-auto xl:py-2 py-[9px] lg:items-center items-start">
          <CustomDescription styleclass="lg:!text-xs max-sm:pr-4 max-lg:!font-normal !text-[10px] lg:!leading-custom-2xl leading-[150%] !text-white" description='AllSome is your e-commerce operation team to auto-send your sold orders.' />
          <div className="relative z-40" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="cursor-pointer outline-none text-xs py-1 bg-black text-white flex justify-center items-center"
            >
              {selectedLanguage} 
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 bg-black text-white rounded shadow-lg z-50">
                <div onClick={() => handleLanguageSelect('Eng')} className="px-4 py-2 cursor-pointer text-white hover:bg-primary-green bg-black hover:text-black">Eng</div>
                <div onClick={() => handleLanguageSelect('Hindi')} className="px-4 py-2 cursor-pointer text-white hover:bg-primary-green bg-black hover:text-black">Hindi</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container flex justify-between w-full mx-auto lg:pt-[13px] pt-4 items-center relative">
        <button onClick={() => setOpen(!open)} className="hidden size-7 justify-center items-center max-lg:absolute max-lg:right-5 relative z-[70] max-lg:flex flex-col overflow-hidden">
          <span className={`w-6 transition-all duration-300 min-h-[2.2px] max-h-[2px] mb-1 rounded-sm bg-black relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 !-mb-1 after:rotate-90 after:!rounded-sm after:bg-black !bg-black" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2.3px] max-h-[2px] mb-1 rounded-sm bg-black ${open ? "hidden" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2.2px] max-h-[2px] mb-1 rounded-sm bg-black after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
        </button>
        <Link href="/">
          <Image className="lg:!max-w-[140px] md:max-w-32 max-w-28 xl:min-w-[140px] h-auto lg:min-w-28 w-full" src="/assets/images/webp/header-logo.webp" width={140} height={25} alt="logo" />
        </Link>
        <div className={`flex xl:gap-[43px] xl:pl-10 lg:pl-5 items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 justify-center max-lg:items-center z-[40] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <Link onClick={() => setOpen(!open)} key={index} href={item.link} className="relative lg:text-sm text-xl font-medium text-black transition-all duration-300 ease-linear group">
              {item.title}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all rounded-xl duration-300 ease-linear group-hover:w-full"></span>
            </Link>
          ))}
          <div className="lg:hidden max-lg:block">
            <div className="flex flex-col gap-2.5">
              <Link href="#contact"><CustomButton CustomOnClick={() => setOpen(!open)} styleclass='lg:!py-[8.5px] !text-lg !py-1.5' title='Log in' /></Link>
              <CustomButton CustomOnClick={() => setOpen(!open)} styleclass='lg:!py-[8.5px] !text-lg !py-1.5 !bg-black text-white hover:!bg-transparent hover:text-black' title='Start free' />
            </div>
          </div>
        </div>
        <div className="lg:block max-lg:hidden">
          <div className="flex gap-2.5 w-full">
            <Link href="#contact"><CustomButton CustomOnClick={() => setOpen(!open)} styleclass='lg:!py-[7px] xl:max-h-[44px] !py-1.5 xl:!max-w-[95px] hover:!bg-black before:!bg-black hover:text-white !px-0 max-w-24' title='Log in' /></Link>
            <CustomButton CustomOnClick={() => setOpen(!open)} styleclass='lg:!py-[7px] xl:max-h-[44px] !py-1.5 max-w-[122px] !bg-black text-white hover:!bg-transparent hover:text-black' title='Start free' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
