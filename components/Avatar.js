import React from 'react'
import Image from 'next/image'
export const Avatar = ({url, className}) => {
  return (
   <Image 
   layout='fixed'
   width='40px'
    height='40px'
   loading='lazy' 
   className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
    src={url} alt="avatar" />
  )
}
