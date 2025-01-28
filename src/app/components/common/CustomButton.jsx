import React from 'react'

const CustomButton = (props) => {
  return (
    <button className={`${props.styleclass} lg:text-base text-sm font-semibold border-[2px] border-black hover:bg-black text-black hover:text-white whitespace-nowrap transition-all ease-linear duration-300 rounded-[27px] lg:py-2.5 md:py-2 py-1.5 lg:px-6 md:px-5 px-4 flex justify-center items-center !leading-[150%]`}> <span className={`${props.styleclassTwo} hidden lg:pe-2.5 md:pe-2 pe-1.5`}> {props.icon} </span> {props.title} </button>
  )
}

export default CustomButton