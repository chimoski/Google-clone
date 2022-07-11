import React from 'react'
import {useRef} from 'react'
import { useRouter } from 'next/router'
import {MicrophoneIcon, SearchIcon, XIcon} from '@heroicons/react/solid';
import { Avatar } from './Avatar';
import { HeaderOptions } from './HeaderOptions';
import Image from 'next/image'


export const Header = () => {
    const searchInputRef = useRef(null);
    const router = useRouter();
    const search = (e)=>{
      e.preventDefault();
      const term = searchInputRef.current.value;
      if(!term) return
      router.push(`/search?term=${term}`);
    }
  return (
    <div className='sticky top-0 bg-white'>
     <div className='flex w-full p-6 items-center'>
          <Image
          layout='fixed'
          width='100px'
          height='50px'
         onClick={()=> router.push("/")}
         className="cursor-pointer h-8"
       src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="" />

        <form
        onSubmit={search}
         className='flex border rounded-full border-gray-200  flex-grow
               mr-5 ml-10 px-6 py-2 max-w-3xl shadow-lg items-center'>
            <input
             type="text"
              ref={searchInputRef} 
              className="flex-grow w-full focus:outline-none
               " />
               <XIcon  className='h-7 text-gray-500 cursor-pointer 
               transition duration-100 transformm hover:scale-125'
               onClick={()=> (searchInputRef.current.value = '')}
               />
               <MicrophoneIcon className='h-6 mr-3 sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 hidden cursor-pointer'/>
               <SearchIcon className='h-6 text-blue-500 sm:inline-flex hidden cursor-pointer' />
              
        </form>
        <Avatar 
        className="ml-auto"
        url="https://res.cloudinary.com/chimoskient/image/upload/v1653890726/my-image4_bpnghm.jpg"/>
     </div>

     {/* header options */}
     <HeaderOptions />
    </div>
  )
}
