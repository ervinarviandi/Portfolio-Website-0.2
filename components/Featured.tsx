import React from 'react'
import { GiFallingStar } from "react-icons/gi";
import { BsHearts } from "react-icons/bs";
import Image from 'next/image';
import Logo from "@/public/featured/star-dynamic-gradient.svg"
import Logo1 from "@/public/featured/heart-dynamic-gradient.svg"
import Logo2 from "@/public/featured/flash-dynamic-gradient.svg"

const Featured = () => {
  return (
    <div className='w-full py-10 featured'>
        <div className='lg:max-w-7xl md:max-w-7xl mx-auto lg:px-10 px-5 '>
            <div className='grid md:grid-cols-3 gap-5'>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] backdrop-blur  bg-[#fff] rounded-lg p-4 border-slate-200 dark:border-none border-2 hover:shadow-md featured-card'>
                        <div className='p-2 rounded-full backdrop-blur-md   w-12 h-12 text-yellow-500 relative my-2'>
                          <Image src={Logo} width={30} height={30} alt='startIconsFeatured'/>
                        </div>
                        <h1 className='text-xl font-bold '>Clean & Intuitive</h1>
                        <p className='text-sm pt-3 dark:text-dark-100 text-white-100'>Keep the UI clean with a modern touch without compromising UX.</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] backdrop-blur bg-[#fff] rounded-lg p-4 border-slate-200 dark:border-none border-2 hover:shadow-md featured-card2'>
                        <div className='p-2 rounded-full w-12 h-12 text-rose-500 relative my-2'>
                        <Image src={Logo1} width={30} height={30} alt='startIconsFeatured'/>
                        </div>
                        <h1 className='text-xl font-bold '>Detail Oriented</h1>
                        <p className='text-sm pt-3 dark:text-dark-100 text-white-100'>Awareness to ease of access, UI consistency, and improved UX.</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='dark:bg-[#1e1e1e] backdrop-blur bg-[#fff] rounded-lg p-4 border-slate-200 dark:border-none border-2 hover:shadow-md featured-card3'>
                        <div className='p-2 rounded-full  w-12 h-12 text-rose-500 relative my-2'>
                        <Image src={Logo2} width={30} height={30} alt='startIconsFeatured'/>
                        </div>
                        <h1 className='text-xl font-bold '>Pretty & Optimized</h1>
                        <p className='text-sm pt-3 dark:text-dark-100 text-white-100'>Writing clean code is a top priority while keeping it as optimized as possible.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured