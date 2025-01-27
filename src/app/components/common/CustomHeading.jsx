import React from 'react'

const CustomHeading = (props) => {
  return (
    <h2 className={`${props.className} lg:text-4xl md:text-3xl text-2xl text-black font-semibold`}>{props.title}</h2>
  )
}

export default CustomHeading