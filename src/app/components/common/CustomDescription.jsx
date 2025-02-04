import React from 'react'

const CustomDescription = (props) => {
  return (
    <p className={`${props.styleclass} lg:text-base text-sm text-black font-medium`}> {props.description} </p>
  )
}

export default CustomDescription