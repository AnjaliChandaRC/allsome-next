const CustomInput = ({ label, value, onChange, type, placeholder }) => {
  return (
    <>
      <label className='pb-1.5 sm:pt-5 pt-3 font-medium max-sm:text-sm text-deep-gray' >{label}</label>
      <input required className="sm:pb-[17px] appearance-none sm:pt-[18px] py-[17px] max-sm:text-sm px-5 border-2 border-black rounded-lg w-full xl:max-w-[448px] outline-2 outline-dark-green placeholder:text-black placeholder:font-medium placeholder:leading-custom-6xl" type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  )
}

export default CustomInput