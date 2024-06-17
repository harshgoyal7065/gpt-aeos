"use client"

import { ButtonPropTypes } from './Button'

const Button = (props: ButtonPropTypes) => {
  const { text, onClick, disabled=false } = props;
  return (
   <button className='w-full p-4 bg-white-primary text-gray-800 rounded-lg' onClick={onClick} disabled={disabled}>
    {text}
   </button>
  )
}

export default Button