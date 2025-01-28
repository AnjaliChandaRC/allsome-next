import React from 'react'

const CustomButton = (props) => {
  return (
    <button onClick={props.CustomOnClick} className={`${props.styleclass} relative h-12 w-40 overflow-hidden before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:before:h-40 hover:before:w-56 lg:text-base text-sm font-semibold border-[2px] border-black text-black hover:text-black whitespace-nowrap transition-all ease-linear duration-300 rounded-[27px] lg:py-2.5 md:py-2 py-1.5 lg:px-6 md:px-5 px-4 flex justify-center items-center !leading-[150%]`}> <span className={`${props.styleclassTwo} hidden relative z-20 lg:pe-2.5 md:pe-2 pe-1.5`}> {props.icon} </span> <span className='relative z-10'>{props.title}</span> 
    </button>
      
  )
}

export default CustomButton