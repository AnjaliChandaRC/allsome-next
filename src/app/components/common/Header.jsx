"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";

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
    <div className="flex justify-between">
      <div className="max-w-[1320px] flex justify-between w-full mx-auto lg:py-[13px] py-2 items-center max-xl:px-6">
        <button onClick={handleOpen} className={`hidden size-7 justify-center max-lg:absolute max-lg:right-5 relative z-[70] max-lg:flex flex-col overflow-hidden`}>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white relative after:w-full after:h-full  after:absolute after:top-0 after:left-0 ${open ? "rotate-45 after:rotate-90 after:bg-white !bg-white" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white ${open ? "hidden" : ""}`}></span>
          <span className={`w-6 transition-all duration-300 min-h-[2px] max-h-[2px] mb-1 bg-white after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
        </button>

        <a href="/">
          <img className="xl:max-w-[286px] lg:max-w-44 max-w-40" src='public/assets/images/webp/header-logo.webp' width={140} height={25.93} alt="page-logo" />
        </a>

        <div className={`flex xl:gap-[39px] items-center max-lg:px-4 relative w-full max-lg:bg-black mx-auto lg:gap-7 gap-6 !text-black lg:max-h-max max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:flex-col max-lg:bg-hero-pattern max-lg:duration-300 justify-center max-lg:items-center z-[60] ${open ? "max-lg:left-0" : "max-lg:left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <a onClick={handleOpen} key={index} href={item.link} className="lg:text-sm text-xs hover:text-blue text-black transition-all duration-300 ease-linear hover:text-blue-700">{item.title}</a>
          ))}
          <div className="lg:hidden max-lg:block">
            <div className="flex gap-2.5">
              <CustomButton title='Log in' />
              <CustomButton title='Start free' />
            </div>
          </div>
        </div>

        <div className="lg:block max-lg:hidden  ">
          <div className="flex gap-2.5 w-full">
            <CustomButton title='Log in' />
            <CustomButton title='Start free' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
