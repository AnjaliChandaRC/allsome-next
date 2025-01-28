import React from 'react'

const CustomHeading = (props) => {
  return (
    <h2 className={`${props.styleclass} xl:text-7xl font-kanit lg:text-6xl md:text-5xl sm:text-4xl text-3xl !leading-[100%] text-black font-semibold`}>
      <span className={`${props.styleclassOne}text-dark-green border-b-[3px] border-b-dark-green rounded-[3px] !leading-[100%]`}> {props.text} </span>
      {props.title}
      <span className={`${props.styleclassTwo}text-dark-green border-b-[3px] border-b-dark-green rounded-[3px] !leading-[100%]`}> {props.textTwo} </span>
      {props.titleTwo}
    </h2>
  )
}

export default CustomHeading