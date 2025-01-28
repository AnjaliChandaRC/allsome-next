import React from 'react'

const CustomInput = ({ label, value, onChange, type, placeholder, errorMessage }) => {
  return (
    <>
      <label htmlFor="" className='pb-1.5 pt-5' >{label}</label>
      <input required className="pb-[21] pt-[22px] px-5 border-2 border-black rounded-lg w-full max-w-[448px] outline-[#00C934] shadow-custom placeholder:text-black placeholder:font-medium placeholder:leading-custom-6xl" type={type} placeholder={placeholder} value={value} onChange={onChange} />{errorMessage && <p className="text-red-500 text-base font-normal">{errorMessage}</p>}
    </>
  )
}

export default CustomInput