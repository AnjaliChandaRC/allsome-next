"use client";
import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import Image from 'next/image'
import CustomHeading from '../components/common/CustomHeading';
import CustomInput from '../components/common/CustomInput';
import CustomButton from '../components/common/CustomButton';
import Swal from 'sweetalert2';
import { CONTACT_DATA_LIST } from '../utils/helper';
import Link from 'next/link';

const ContactUs = () => {
  const initialFormData = {
    name: "",
    email: "",
    number: "",
  };
  const [value, setValue] = useState(initialFormData);
  const form = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    // Email Js
    emailjs
      .sendForm('service_225sbpv', 'template_mfgmjof', form.current, {
        publicKey: 'yMfLmnJOVdFosmZqu',
      }); {
      setValue(initialFormData);
      // Sweet Alert 
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully.",
        icon: "success",
        confirmButtonText: "Cool",
        // Custom button
        customClass: {
          confirmButton: 'sweet-alert-button'
        }
      });
      console.log(value);
    }
  };
  return (
    <div id='contact' className="overflow-hidden">
      <div className='container xl:pt-[67px] md:pt-[54px] sm:pt-10 pt-[30px]'>
        <CustomHeading styleclass="text-center !font-bold !font-kanit max-w-[545px] md:max-w-[910px] mx-auto lg:pb-[85px] sm:pb-10 pb-8 " title="Can't make up your mind? " textTwo="Contact us" titleTwo=" today!" styleclassTwo="" />
        <div className="flex xl:pb-[259px] md:pb-[120px] sm:pb-16 pb-[60px] justify-center max-xl:flex-col-reverse max-xl:flex-wrap xl:gap-16 ">
          <div className="gap-[11px] flex flex-col w-full xl:w-5/12 justify-center items-center">
            {CONTACT_DATA_LIST.map((contact, index) => (
              <div data-aos="flip-down" data-aos-delay={index === 0 ? "200" : index === 1 ? "300" : "400"}
                key={index} className='w-full justify-center items-center flex flex-col'>
                <div className={`flex rounded-2xl px-[18px] hover:shadow-[0px_1px_5px_5px_#36eb58] transition-all duration-300 ease-linear py-[23px] w-full max-w-[768px] xl:max-w-[432px] bg-gradient-to-r from-parrot-green via-bright-green to-bright-green ${index === 2 ? "items-start pb-[21px]" : "items-center"} `}>
                  <div className={`flex items-center justify-center max-sm:p-4 sm:size-[83.24px] max-sm:size-[67px] rounded-full mr-4 bg-deep-green ${index === 2 ? "sm:p-6" : ""}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h2 className="text-sm font-medium leading-custom-xl pb-2.5">{contact.title}</h2>
                    <Link href={contact.directLink} className={`md:text-2xl font-kanit sm:text-xl text-lg !leading-custom-4xl font-semibold ${index === 2 ? "sm:!leading-custom-5xl max-sm:!leading-4 sm:!text-xl max-sm:text-base !font-medium" : ""}`}>{contact.description}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full xl:w-6/12 max-xl:mb-12 max-sm:mb-8">
            <Image className='z-[-1] translate-y-[65px] absolute max-xl:hidden xl:right-[-35%] rounded-l-[40px] h-[593px] max-w-[740px] w-full' width={740} height={593} src="/assets/images/webp/contact-green-box.webp" alt='contact green box' />
            <form ref={form} onSubmit={submitHandle}>
              <div data-aos="flip-up" className="bg-gradient-to-r from-parrot-green via-bright-green to-bright-green xl:!bg-white xl:p-0 lg:p-8 md:p-6 sm:p-4 p-3 rounded-2xl sm:rounded-[24px] lg:rounded-2xl max-w-[768px] xl:max-w-[506px] max-xl:mx-auto">
                <div className="flex flex-col w-full bg-white xl:max-w-[506px] shadow-[26px_31px_50px_0px_#0000001a] rounded-2xl sm:pt-[42px] sm:pb-[38px] sm:px-[29px] px-3 py-8">
                  <p className='md:text-custom-2xl sm:text-2xl text-xl font-semibold font-kanit leading-8 sm:pb-[13px] '>Get in touch!</p>
                  <CustomInput label="Your name*" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} type="name" placeholder="Jhone Doe" />
                  <CustomInput label="Your email*" value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder="jhonedoe32@gmail.com" />
                  <CustomInput label="Your mobile" value={value.number} onChange={(e) => setValue({ ...value, number: e.target.value })} type="number" placeholder="+1   123 123 1234" />
                  <CustomButton styleclass="!bg-black !text-white max-w-[153px] !h-12 sm:!h-[52px] sm:mt-[31px] mt-5 hover:!text-black" title="Next" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs