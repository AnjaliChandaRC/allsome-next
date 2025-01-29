import React from 'react'

const CustomInput = ({ label, value, onChange, type, placeholder, errorMessage }) => {
  return (
    <>
      <label htmlFor="" className='pb-1.5 sm:pt-5 pt-3 max-sm:text-sm text-davy-gray' >{label}</label>
      <input required className="sm:pb-[17px] appearance-none sm:pt-[18px] py-[17px] max-sm:text-sm px-5 border-2 border-black rounded-lg w-full max-w-[448px] outline-2 outline-[#00C934] placeholder:text-black placeholder:font-medium placeholder:leading-custom-6xl" type={type} placeholder={placeholder} value={value} onChange={onChange} />{errorMessage && <p className="text-red-500 text-base font-normal">{errorMessage}</p>}
    </>
  )
}

export default CustomInput