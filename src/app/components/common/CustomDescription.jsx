import React from 'react'

const CustomDescription = ({ styleclass, description }) => {
  return (
    <p className={`${styleclass} lg:text-base text-sm text-black font-medium`}> {description} </p>
  )
}

export default CustomDescription