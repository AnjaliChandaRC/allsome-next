import React from 'react'

const CustomDescription = (props) => {
  return (
    <p className={`${props.className} xl:text-xl lg:text-lg text-base text-black font-medium`} >{props.description}</p>
  )
}

export default CustomDescription