import React from 'react'

const CustomHeading = (props) => {
  return (
    <h2 className={`${props.classStyle} xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl !leading-[100%] text-black font-semibold`}>
      <span className={`${props.styleOne}text-dark-green underline underline-offset-4 decoration-2 !leading-[100%]`}> {props.text} </span>
      {props.title}
      <span className={`${props.styleTwo}text-dark-green underline underline-offset-4 decoration-2 !leading-[100%]`}> {props.textTwo} </span>
      {props.titleTwo}
    </h2>
  )
}

export default CustomHeading