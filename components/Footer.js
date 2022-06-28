import React from 'react'
export const Footer = () => {
  return (
    <div className='grid w-full bg-gray-100 text-gray-500 text-[14px] absolute left-0 bottom-0'>
        <div className='px-8 py-3'>
            <p>Nigeria</p>
        </div>
        <div className='border-b border-gray-300'></div>
        <div className='flex flex-col items-center gap-4 py-4 '>
            <div className=' xl:hidden'>
                <p className='link'>Carbon neutral since 2007</p>
            </div>
          <div className='flex flex-col items-center gap-4 py-2 md:flex-row md:justify-around w-full xl:justify-between xl:px-8'>
          
          <div className='flex space-x-5 sm:space-x-10'>
                <p className='link'>About</p>
                <p className='link'>Advertising</p>
                <p className='link'>Business</p>
                <p className='link'>How Search works</p>
            </div>
            <div className='hidden xl:inline-flex xl:pr-8'>
                <p className='link'>Carbon neutral since 2007</p>
            </div>
            <div className='flex space-x-5 sm:space-x-10'>
                <p className='link'>Privacy</p>
                <p className='link'>Terms</p>
                <p className='link'>Settings</p>
            </div>
          </div>
        </div>
    </div>
  )
}
