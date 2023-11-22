import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi";
import Image from 'next/image';
import Thubnasils1 from "../public/Blog/image (1).webp"
import Thubnasils2 from "../public/Blog/image (2).webp"
import Thubnasils3 from "../public/Blog/image (3).webp"
import Thubnasils4 from "../public/Blog/image (4).webp"

const Articles_Title = "Latest Articles";
const articles = () => {
  return (
    <div className='w-full py-10 '>
        <div className='md:max-w-6xl mx-auto px-5 '>
          <div className='flex justify-between items-center'>
          <h1 className='md:text-3xl text-xl font-bold'>{Articles_Title}</h1>
          <Link href="/" className=' item-center gap-2 md:flex hidden text-sm'>
          View All Articles
          <FiArrowRight size={20}/>
          </Link>
          <Link href="/" className=' item-center gap-2 md:hidden flex text-sm dark:text-dark-100'>
          View All 
          <FiArrowRight size={20}/>
          </Link>
          </div>
          
            <div className="min-w-[250px] h-max mt-4 border-b-2  border-dark-100 ">
            <div className="flex flex-row h-40 overflow-y-hidden gap-5 my-6 overflow-x-scroll  myScrollbar ">
              <div className="rounded-lg snap-start  min-w-[260px]  myScrollbar hover:scale-[96%] duration-300 ease-in">
                <Image src={Thubnasils1} width={300} height={300} alt='img1'/>
                <h1 className="font-bold font-Roboto text-blue-600">My Carousel Slider</h1>
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Image src={Thubnasils2} width={300} height={300}  alt='img2'/>
                <h1 className="font-bold font-Roboto text-blue-600">My Carousel Slider</h1>
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]   duration-300 ease-in">
                <Image src={Thubnasils3} width={300} height={300} alt='img3'/>
                <h1 className="font-bold font-Roboto text-blue-600">My Carousel Slider</h1>
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Image src={Thubnasils4} width={300} height={300} alt='img4'/>
                <h1 className="font-bold font-Roboto text-blue-600">My Carousel Slider</h1>
              </div>
              <div className="rounded-lg snap-start  min-w-[260px] min-h-[100px] hover:scale-[96%]  duration-300 ease-in ">
                <Image src={Thubnasils4} width={300} height={300} alt='img4'/>
                <h1 className="font-bold font-Roboto text-blue-600">My Carousel Slider</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default articles