"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { EmailUsIcon, VisitUsIcon, WhatsappIcon } from '../utils/icons';
import CustomHeading from './common/CustomHeading';
import CustomInput from './common/CustomInput';
import CustomButton from './common/CustomButton';
import Swal from 'sweetalert2';

const ContactUs = () => {

  const CONTACT_DATA_LIST = [
    {
      title: "Whatsapp Us",
      description: "(+60)11-51624248",
      icon: <WhatsappIcon />
    },
    {
      title: "Email Us",
      description: "Support@allsome.my",
      icon: <EmailUsIcon />
    },
    {
      title: "Visit Us",
      description: "LEVEL4, Block 9, Hap Seng Business Park, Persiaran Perusahaan, Kawasan Miel 40300, Shah Alam, Selangor, Malaysia.",
      icon: <VisitUsIcon />
    },
  ];

  const initialFormData = {
    name: "",
    email: "",
    number: "",
  };

  const [value, setValue] = useState(initialFormData);
  const [error, setError] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    setError(true);
    if (
      value.name !== "" &&
      value.email !== "" &&
      value.number
    ) {

      setValue(initialFormData);
      setError(false);
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully.",
        icon: "success",
        confirmButtonText: "Cool",
      });
      console.log(value);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className='container xl:pt-[67px]'>
        <CustomHeading styleclass="text-center font-bold font-kanit max-w-[983px] mx-auto pb-[125px] " title="Can't make up your mind?" textTwo="Contact us" titleTwo=" today!" styleclassTwo="" />
        <div className="flex lg:pb-[300px] sm:pb-[100px] pb-16 justify-center max-xl:flex-wrap space-y-12 ">
          <div className="gap-[11px] flex flex-col w-full xl:w-5/12 justify-center items-center">
            {CONTACT_DATA_LIST.map((contact, index) => (
              <div key={index} className={`flex rounded-2xl px-[18px] py-[21px] w-full max-w-[432px] bg-gradient-to-r from-minty-green via-vivid-green to-vivid-green ${index === 2 ? "items-start" : "items-center"} `}>
                <div className={`flex items-center justify-center size-[83.24px] rounded-full mr-4 bg-deep-green ${index === 2 ? "p-6" : ""}`}>
                  {contact.icon}
                </div>
                <div>
                  <h2 className="text-sm font-medium leading-custom-xl pb-2.5">{contact.title}</h2>
                  <p className={`text-2xl leading-custom-4xl font-semibold font-kanit ${index === 2 ? "leading-custom-5xl text-xl" : ""}`}>{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full xl:w-6/12 justify-center flex items-center flex-col">
            <Image className='z-[-1] translate-y-[55px] absolute xl:right-[-35%] rounded-[40px] max-h-[593px] ' width={740} height={593} src="/assets/images/webp/contact-green-box.webp" alt='contact green box' />
            <form onSubmit={submitHandle}>
              <div className="flex flex-col sm:w-[506px] w-[400px] max-[450px]:w-[340px] bg-white form-box-shadow rounded-2xl pt-[42px] pb-[38px] px-[29px] ">
                <p className='text-custom-2xl font-semibold font-kanit leading-8 pb-[13px] '>Get in touch!</p>
                <CustomInput label="Your name*" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} placeholder="Jhone Doe" errorMessage={error && !value.name ? "Name is required" : ""} />
                <CustomInput label="Your email*" value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} type="email" placeholder="jhonedoe32@gmail.com" errorMessage={error && !value.email ? "Email is required" : ""} />
                <CustomInput label="Your mobile" value={value.number} onChange={(e) => setValue({ ...value, number: e.target.value })} type="number" placeholder="+1   123 123 1234" errorMessage={error && !value.number ? "Number is required" : ""} />
                <CustomButton styleclass="!bg-black !text-white max-w-[153px] mt-[11px]" title="Next" />
              </div>
            </form>
          </div>
        </div>
      </div >
    </div>
  )
}

export default ContactUs