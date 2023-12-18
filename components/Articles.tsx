
"use client"

import React  from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import Thubnasils2 from "../public/Blog/astroBlog.png"
import Thubnasils3 from "../public/Blog/Headless ui.png"
import Thubnasils4 from "../public/Blog/Next js tailwind.png"
import Thubnasils5 from "../public/Blog/lazyload.png"

const Articles_Title = "Latest Articles";


const Articles = () => {
  
  const [isLoading, setLoading] = useState(true);




  return (
    <div className='w-full py-10 '>
        <div className='md:max-w-6xl mx-auto lg:px-10 px-5 '>
          <div className='flex justify-between items-center'>
          <h1 className='md:text-3xl text-xl font-bold'>{Articles_Title}</h1>
          <Link href="/myBlog" className=' item-center gap-2 md:flex hidden text-sm dark:text-dark-100'>
          View All Articles
          <FiArrowRight size={20}/>
          </Link>
          <Link href="/myBlog" className=' item-center gap-2 md:hidden flex text-sm dark:text-dark-100'>
          View All 
          <FiArrowRight size={20}/>
          </Link>
          </div>
          <div className='mt-7'>
            <h5 className='text-xl font-bold '>Check out my blog</h5>
            <p className='dark:text-dark-100 text-white-100 lg:text-lg text-md mt-4'>Stay informed about my writing by subscribing to my blog.</p>
          </div>
            <div className="min-w-[250px] h-max mt-4 border-solid border-1 border-b  border-white-100 dark:border-[#525252] ">
            <div className="flex flex-row h-40 overflow-y-hidden gap-5 my-6 overflow-x-scroll  myScrollbar ">
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Link href="/astroBlog">
                <Image src={Thubnasils2} width={300} height={300}  alt='astroblogThumbanails' 
                className={`
                duration-700 ease-in-out group-hover:opacity-75 rounded-md
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
            onLoad={() => setLoading(false)}/>
                </Link>
                {/* <h1 className="font-bold font-Roboto dark:text-[#525252] text-white-100">My Carousel Slider</h1> */}
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]   duration-300 ease-in">
                <Link href="/headless">
                <Image src={Thubnasils3} width={300} height={300} alt='img3' 
                className={`
                duration-700 ease-in-out group-hover:opacity-75 rounded-md
                ${
                  isLoading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                })`}
            onLoad={() => setLoading(false)}/>
                </Link>
                {/* <h1 className="font-bold font-Roboto dark:text-[#525252] text-white-100">My Carousel Slider</h1> */}
              </div>
             
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Link href="/studio">
                <Image src={Thubnasils4} width={300} height={300} alt='img4' className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-md
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
                </Link>
                {/* <h1 className="font-bold font-Roboto dark:text-[#525252] text-white-100">My Carousel Slider</h1> */}
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Link href="/lazyBlog">
                <Image src={Thubnasils5} width={300} height={300} alt='img5' className={`
              duration-700 ease-in-out group-hover:opacity-75 rounded-md
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
          onLoad={() => setLoading(false)}/>
                </Link>
                {/* <h1 className="font-bold font-Roboto dark:text-[#525252] text-white-100">My Carousel Slider</h1> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Articles