import Head from 'next/head'
import {useRef} from 'react'
import { Avatar } from '../components/Avatar'
import {SearchIcon} from '@heroicons/react/outline'
import { Footer } from '../components/Footer';
import {CgMenuGridO} from 'react-icons/cg'
import {useRouter} from 'next/router'

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter();
  const search = (e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>Google</title>
        <meta name="description" content="google search" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className='flex justify-between px-5 py-2 w-full text-sm text-gray-700'>
        <div className='flex space-x-4  items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
    
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <CgMenuGridO
           className=' h-10 w-10 cursor-pointer p-2 rounded-full hover:bg-gray-100'
          />
      <Avatar 
      url="https://res.cloudinary.com/chimoskient/image/upload/v1653890726/my-image4_bpnghm.jpg" />
        </div>
      </header>
    
      <form className='grid place-items-center mt-[3rem]  flex-grow w-full px-2'>
      <img 
       src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="" />
       <div className='w-full flex mt-5 hover:shadow-md
        focus-within:shadow-lg max-w-md rounded-full sm:max-w-xl lg:max-w-2xl
         border border-gray-200 px-5 items-center py-3'>
        {/* <SearchIcon/> */}
        <SearchIcon className='h-5 mr-3 text-gray-500 '/>
        <input type="text" className='focus:outline-none flex-grow 'ref={searchInputRef}/>
        <img 
         className='h-7 w-7 mr-3 cursor-pointer'
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_63.png?VaW1bs_mipmverkoNocEJNL6BKTHYW.R&itok=ThO1Yh_H" alt="" />
       </div>
       <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-x-4  sm:space-y-0'>
        <button className='btn' onClick={search}>Google Search</button>
        <button className='btn'>I'm Feeling Lucky</button>
       </div>
      </form>
 {/* footer */}

 <footer>
  <Footer />
 </footer>
     
    </div>
  )
}
